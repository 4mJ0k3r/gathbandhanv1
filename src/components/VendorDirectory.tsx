"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import VendorResults from "@/components/VendorResults";
import CtaSection from "@/components/ui/CtaSection";
import { CATEGORY_OPTIONS, CITY } from "@/lib/constants";

const FILTERS = [{ value: "all", label: "All" }, ...CATEGORY_OPTIONS];

export default function VendorDirectory() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") ?? "all";
  const query = searchParams.get("search") ?? "";

  const updateParams = (next: { category?: string; search?: string }) => {
    const params = new URLSearchParams(searchParams.toString());

    if (next.category !== undefined) {
      if (next.category === "all") params.delete("category");
      else params.set("category", next.category);
    }
    if (next.search !== undefined) {
      if (next.search === "") params.delete("search");
      else params.set("search", next.search);
    }

    const qs = params.toString();
    router.push(qs ? `/vendors?${qs}` : "/vendors", { scroll: false });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = new FormData(e.currentTarget).get("search");
    updateParams({ search: String(input ?? "").trim() });
  };

  return (
    <div className="bg-surface-tint">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-500">
            Browse
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 md:text-5xl">
            Wedding Vendors in {CITY}
          </h1>
          <p className="mt-4 text-lg text-ink-500">
            Find and contact trusted vendors directly — no middlemen.
          </p>
        </div>

        {/* key resets the uncontrolled input when the URL query changes. */}
        <form
          role="search"
          onSubmit={handleSearch}
          key={query}
          className="mx-auto mb-8 max-w-xl"
        >
          <div className="relative">
            <label htmlFor="vendor-search" className="sr-only">
              Search vendors by name
            </label>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400"
              aria-hidden="true"
            />
            <input
              id="vendor-search"
              name="search"
              type="search"
              defaultValue={query}
              placeholder="Search vendors by name..."
              className="w-full rounded-full border border-purple-100 bg-white py-3.5 pl-12 pr-4 text-ink-900 outline-none transition placeholder:text-ink-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40"
            />
          </div>
        </form>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => updateParams({ category: filter.value })}
              aria-pressed={category === filter.value}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                category === filter.value
                  ? "bg-purple-500 text-white"
                  : "border border-purple-100 bg-white text-ink-700 hover:border-purple-300 hover:text-purple-500"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <VendorResults
          key={`${category}|${query}`}
          category={category}
          query={query}
          onClearFilters={() => router.push("/vendors", { scroll: false })}
        />
      </div>

      <CtaSection
        eyebrow="For Vendors"
        title={`Are you a wedding vendor in ${CITY}?`}
        subtitle="Get discovered by couples planning their wedding."
        primary={{ label: "List Your Business — Free", href: "/signup" }}
      />
    </div>
  );
}
