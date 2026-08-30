import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, ChevronRight } from "lucide-react";
import type { VendorCardData } from "@/lib/types";
import { formatPrice, getCategoryLabel } from "@/lib/utils";

interface VendorCardProps {
  vendor: VendorCardData;
}

export default function VendorCard({ vendor }: VendorCardProps) {
  const coverPhoto = vendor.photos?.[0] || null;

  return (
    <article className="bg-white rounded-2xl overflow-hidden border-card shadow-card-sm hover:shadow-card transition-shadow duration-300 flex flex-col">
      <div className="relative aspect-[4/3] bg-surface-card">
        {coverPhoto ? (
          <Image
            src={coverPhoto}
            alt={`Work by ${vendor.business_name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-100 flex items-center justify-center p-4">
            <span className="text-purple-500 text-lg font-semibold text-center leading-tight">
              {vendor.business_name}
            </span>
          </div>
        )}
        {vendor.is_verified && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-white/95 text-ink-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-card-sm">
            <BadgeCheck className="w-3.5 h-3.5 text-purple-500" aria-hidden="true" />
            Verified
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-ink-900 text-base leading-tight">
          {vendor.business_name}
        </h3>
        <p className="text-ink-500 text-sm mt-1.5">
          {getCategoryLabel(vendor.category)} · {vendor.city}
        </p>
        <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-ink-100">
          <span className="text-ink-900 font-semibold text-sm">
            {formatPrice(vendor.starting_price)}
          </span>
          <Link
            href={`/vendors/${vendor.slug}`}
            className="text-purple-600 text-sm font-medium hover:text-purple-700 inline-flex items-center gap-1 transition-colors"
          >
            View Profile
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
