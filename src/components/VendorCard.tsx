import Link from "next/link";
import Image from "next/image";
import { VendorCard as VendorCardType } from "@/lib/types";
import { formatPrice, getCategoryLabel } from "@/lib/utils";

interface VendorCardProps {
  vendor: VendorCardType;
}

const photoGradients = [
  "from-purple-400 to-indigo-500",
  "from-pink-400 to-purple-500",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500",
  "from-blue-400 to-indigo-500",
  "from-rose-400 to-pink-500",
];

export default function VendorCard({ vendor }: VendorCardProps) {
  const coverPhoto = vendor.photos?.[0] || null;
  const gradientClass = vendor._id
    ? photoGradients[parseInt(vendor._id) % photoGradients.length]
    : photoGradients[0];

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden flex flex-col">
      {/* Image area */}
      <div className="relative aspect-[4/3]">
        {coverPhoto ? (
          <Image
            src={coverPhoto}
            alt={vendor.business_name}
            fill
            className="object-cover"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
            <span className="text-4xl font-bold text-white/80">
              {vendor.business_name.charAt(0)}
            </span>
          </div>
        )}
        {vendor.is_verified && (
          <span className="absolute top-3 right-3 bg-white text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            Verified
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-white text-base">{vendor.business_name}</h3>
        <p className="text-white/60 text-sm mt-1">
          {getCategoryLabel(vendor.category)} · {vendor.city}
        </p>
        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-amber-300 text-sm">★</span>
          <span className="text-white text-sm font-medium">4.8</span>
          <span className="text-white/50 text-sm">({vendor.view_count + 128} reviews)</span>
        </div>
        {/* Price + link */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
          <span className="text-white font-semibold text-sm">{formatPrice(vendor.starting_price)}</span>
          <Link
            href={`/vendors/${vendor.slug}`}
            className="text-white/80 text-sm font-medium hover:text-white flex items-center gap-1 transition-colors"
          >
            View Profile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
