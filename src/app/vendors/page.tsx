import { Suspense } from "react";
import type { Metadata } from "next";
import VendorDirectory from "@/components/VendorDirectory";
import VendorCardSkeleton from "@/components/VendorCardSkeleton";
import { CITY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Browse Vendors",
  description: `Browse wedding photographers, makeup artists, decorators, venues, and more in ${CITY}.`,
};

function DirectoryFallback() {
  return (
    <div className="bg-surface-tint">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Browse
          </span>
          <h1 className="mt-3 font-display text-4xl font-normal text-ink-900 md:text-5xl">
            Wedding Vendors in {CITY}
          </h1>
          <p className="mt-4 text-lg text-ink-500">
            Find and contact trusted vendors directly — no middlemen.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <VendorCardSkeleton count={6} />
        </div>
      </div>
    </div>
  );
}

export default function VendorsPage() {
  return (
    <Suspense fallback={<DirectoryFallback />}>
      <VendorDirectory />
    </Suspense>
  );
}
