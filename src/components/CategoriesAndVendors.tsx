"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { VendorCardData } from "@/lib/types";
import { CATEGORY_OPTIONS, CITY_SHORT } from "@/lib/constants";
import CategoryIcon from "@/components/CategoryIcon";
import VendorCard from "@/components/VendorCard";
import VendorCardSkeleton from "@/components/VendorCardSkeleton";

const FEATURED_LIMIT = 3;

function PanelHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <span className="relative inline-block pb-1 text-xs font-semibold uppercase tracking-widest text-brand-800">
        {eyebrow}
        <span className="absolute bottom-0 left-0 h-0.5 w-8 rounded-full bg-brand-500/40" />
      </span>
      <h2 className="mt-3 font-display text-2xl font-normal leading-tight text-ink-900 text-shadow-panel md:text-3xl">
        {title}
      </h2>
      <p className="mt-2.5 max-w-xl text-base leading-relaxed text-ink-700">
        {subtitle}
      </p>
    </>
  );
}

function PanelLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-white/90 py-2.5 pl-2 pr-4 text-sm font-semibold text-brand-800 shadow-panel-sm transition-all duration-300 hover:bg-white hover:shadow-panel-sm-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 text-ink-900 transition-colors duration-200 group-hover:bg-gold-500">
        <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      </span>
      {children}
    </Link>
  );
}

export default function CategoriesAndVendors() {
  const [vendors, setVendors] = useState<VendorCardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/featured-vendors?limit=${FEATURED_LIMIT}`)
      .then((res) => res.json())
      .then((data) => {
        setVendors(data.vendors || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="px-6 py-20 md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-gold-100 via-brand-100 to-gold-200 shadow-panel">
        {/* Softens the gradient into a frosted panel. */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(255,255,255,0.5),transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(166,41,74,0.12),transparent_60%)]"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <div className="px-8 pt-10 pb-8 md:px-12 md:pt-12 md:pb-10">
            <div className="mb-8">
              <PanelHeading
                eyebrow="Categories"
                title="Find the right vendor for whatever you need"
                subtitle="Explore wedding vendors across every category we cover."
              />
              <div className="mt-5">
                <PanelLink href="/vendors">View All Categories</PanelLink>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
              {CATEGORY_OPTIONS.map((cat) => (
                <li key={cat.value}>
                  <Link
                    href={`/vendors?category=${cat.value}`}
                    className="group flex h-full flex-col items-center gap-2.5 rounded-2xl border border-white/40 bg-white/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 md:p-5"
                  >
                    <span className="text-brand-700 transition-transform duration-300 group-hover:scale-110">
                      <CategoryIcon type={cat.value} />
                    </span>
                    <span className="text-center text-xs font-medium leading-snug text-ink-800">
                      {cat.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-8 h-px bg-white/30 md:mx-12" />

          <div className="px-8 pt-8 pb-10 md:px-12 md:pt-10 md:pb-12">
            <div className="mb-8">
              <PanelHeading
                eyebrow="Featured"
                title={`Featured Vendors in ${CITY_SHORT}`}
                subtitle="Vendors couples are viewing most this month."
              />
              <div className="mt-5">
                <PanelLink href="/vendors">View All Vendors</PanelLink>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {loading ? (
                <VendorCardSkeleton count={FEATURED_LIMIT} />
              ) : (
                vendors.map((vendor) => (
                  <VendorCard key={vendor.slug} vendor={vendor} />
                ))
              )}
            </div>

            {!loading && vendors.length === 0 && (
              <div className="rounded-2xl border border-white/40 bg-white/60 p-8 text-center">
                <p className="font-medium text-ink-700">
                  Featured vendors are on the way.
                </p>
                <p className="mt-1 text-sm text-ink-500">
                  Listings appear here as vendors join and get verified.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
