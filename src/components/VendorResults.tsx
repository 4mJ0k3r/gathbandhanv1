"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SearchX } from "lucide-react";
import VendorCard from "@/components/VendorCard";
import VendorCardSkeleton from "@/components/VendorCardSkeleton";
import PillButton from "@/components/ui/PillButton";
import type { VendorCardData } from "@/lib/types";
import { CITY } from "@/lib/constants";

const PAGE_SIZE = 12;

interface VendorResultsProps {
  category: string;
  query: string;
  onClearFilters: () => void;
}

function buildUrl(category: string, query: string, page: number) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(PAGE_SIZE),
  });
  if (category !== "all") params.set("category", category);
  if (query) params.set("search", query);
  return `/api/vendors?${params}`;
}

/**
 * Remounted by its parent whenever the filters change, so the loading state
 * resets without syncing state inside an effect.
 */
export default function VendorResults({
  category,
  query,
  onClearFilters,
}: VendorResultsProps) {
  const [vendors, setVendors] = useState<VendorCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(buildUrl(category, query, 1))
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setVendors(data.vendors ?? []);
        setHasMore(data.pagination?.hasMore ?? false);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setFailed(true);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [category, query]);

  const loadMore = async () => {
    setLoadingMore(true);
    try {
      const res = await fetch(buildUrl(category, query, page + 1));
      const data = await res.json();
      setVendors((prev) => [...prev, ...(data.vendors ?? [])]);
      setHasMore(data.pagination?.hasMore ?? false);
      setPage((p) => p + 1);
    } catch {
      setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
  };

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <VendorCardSkeleton count={6} />
      </div>
    );
  }

  if (failed) {
    return (
      <div className="rounded-3xl border-card bg-white p-12 text-center shadow-card">
        <p className="text-lg font-medium text-ink-700">
          We couldn&apos;t load vendors just now
        </p>
        <p className="mt-2 text-sm text-ink-500">
          Please refresh the page to try again.
        </p>
      </div>
    );
  }

  if (vendors.length === 0) {
    const isFiltered = category !== "all" || query !== "";
    return (
      <div className="rounded-3xl border-card bg-white p-12 text-center shadow-card">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface-tint">
          <SearchX className="h-8 w-8 text-ink-400" strokeWidth={1.5} aria-hidden="true" />
        </div>
        <p className="text-lg font-medium text-ink-700">
          {isFiltered
            ? "No vendors match these filters"
            : `Vendors are coming soon to ${CITY}`}
        </p>
        {isFiltered ? (
          <button
            type="button"
            onClick={onClearFilters}
            className="mt-4 text-sm font-medium text-brand-500 hover:underline"
          >
            Clear filters
          </button>
        ) : (
          <p className="mt-2 text-sm text-ink-500">
            Are you a vendor?{" "}
            <Link href="/signup" className="font-medium text-brand-500 hover:underline">
              List your business
            </Link>
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.slug} vendor={vendor} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-12 text-center">
          <PillButton variant="secondary" onClick={loadMore} disabled={loadingMore}>
            {loadingMore ? "Loading..." : "Load More Vendors"}
          </PillButton>
        </div>
      )}
    </>
  );
}
