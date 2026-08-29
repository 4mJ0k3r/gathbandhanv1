import { VendorCard } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  vendors: VendorCard[];
}

export default function FeaturedVendors({ vendors }: Props) {
  return (
    <div>
      {vendors.map((vendor) => {
        const coverPhoto = vendor.photos?.[0] || null;
        return (
          <div key={vendor._id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
            <div className="relative aspect-[4/3]">
              {coverPhoto ? (
                <Image
                  src={coverPhoto}
                  alt={vendor.business_name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                  <span className="text-ink-400 text-lg font-medium">{vendor.business_name}</span>
                </div>
              )}
              {vendor.is_verified && (
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-white/90 text-ink-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Verified
                </span>
              )}
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-semibold text-ink-900 text-[0.95rem] leading-tight">{vendor.business_name}</h3>
              <p className="text-ink-400 text-xs mt-1.5">
                {vendor.category} · {vendor.city}
              </p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-amber-500 text-xs">★</span>
                <span className="text-ink-700 text-xs font-medium">4.8</span>
                <span className="text-ink-400 text-xs">(128 reviews)</span>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <span className="text-ink-900 font-semibold text-sm">
                  {vendor.starting_price ? "₹" + vendor.starting_price.toLocaleString("en-IN") : "Price on request"}
                </span>
                <Link
                  href={`/vendors/${vendor.slug}`}
                  className="text-purple-600 text-xs font-medium hover:text-purple-700 flex items-center gap-1"
                >
                  View Profile
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
