import Link from "next/link";
import Image from "next/image";
import { VendorCard } from "@/lib/types";
import { formatPrice, getCategoryLabel } from "@/lib/utils";
import CategoryIcon from "@/components/CategoryIcon";

interface Props {
  vendors: VendorCard[];
}

const CATEGORIES = [
  { label: "Photographers", value: "photographer" },
  { label: "Makeup Artists", value: "makeup" },
  { label: "Decorators", value: "decor" },
  { label: "Venues", value: "venue" },
  { label: "Mehendi Artists", value: "mehendi" },
  { label: "Choreographers", value: "choreographer" },
  { label: "Wedding Cards", value: "cards" },
  { label: "Caterers", value: "catering" },
];

const VENDOR_IMAGES: Record<string, string> = {
  "Royal Clicks Photography":
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=450&fit=crop",
  "Glam Studio":
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=450&fit=crop",
  "Bloom Decorations":
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=450&fit=crop",
};

export default function CategoriesAndVendors({ vendors }: Props) {
  const featuredVendors = vendors.slice(0, 3);

  return (
    <section className="px-4 md:px-8 py-16 md:py-24">
      <div
        className="
          relative overflow-hidden rounded-[28px] md:rounded-[32px]
          shadow-[0_4px_12px_rgba(99,72,170,0.12),0_16px_48px_rgba(99,72,170,0.08)]
          max-w-7xl mx-auto
        "
        style={{}}
      >
        {/* Soft lavender-purple gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #d8c8f0 0%, #c4b3e8 25%, #b8a8df 50%, #c9bce6 75%, #ddd0f0 100%)",
          }}
        />

        {/* Frosted glass overlay for depth */}
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.35) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(180,160,220,0.2) 0%, transparent 60%)",
          }}
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* ===== CATEGORIES HALF ===== */}
          <div className="px-8 md:px-12 pt-10 md:pt-12 pb-8 md:pb-10">
            <div className="mb-8">
              <span
                className="
                  inline-block text-xs font-bold tracking-[0.18em] uppercase text-purple-800/70
                  relative pb-1
                "
                style={{
                  textShadow: "0 0 20px rgba(255,255,255,0.5)",
                }}
              >
                CATEGORIES
                <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-purple-500/40 rounded-full" />
              </span>
              <h2
                className="text-[1.6rem] md:text-[1.85rem] font-bold text-gray-900 tracking-tight mt-3 leading-tight"
                style={{ textShadow: "0 1px 2px rgba(255,255,255,0.4)" }}
              >
                Find the right vendor for whatever you need
              </h2>
              <p
                className="text-gray-700/70 text-[0.95rem] mt-2.5 max-w-xl leading-relaxed"
                style={{ textShadow: "0 1px 1px rgba(255,255,255,0.3)" }}
              >
                Explore top-rated wedding vendors across multiple categories to make your big day perfect.
              </p>
              {/* View All Categories button */}
              <div className="mt-5">
                <Link
                  href="/categories"
                  className="
                    group inline-flex items-center gap-2
                    bg-white/90 hover:bg-white
                    text-purple-800 font-semibold text-sm
                    pl-2 pr-4 py-2.5 rounded-full
                    shadow-[0_1px_3px_rgba(99,72,170,0.12),0_2px_8px_rgba(99,72,170,0.08)]
                    hover:shadow-[0_2px_6px_rgba(99,72,170,0.18),0_4px_16px_rgba(99,72,170,0.12)]
                    transition-all duration-300
                  "
                >
                  <span
                    className="
                      flex items-center justify-center w-8 h-8 rounded-full
                      bg-lime-400 hover:bg-lime-500
                      text-gray-900
                      transition-colors duration-200
                    "
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  View All Categories
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.value}
                  href={`/vendors?category=${cat.value}`}
                  className="
                    group flex flex-col items-center gap-2.5
                    p-4 md:p-5 rounded-2xl
                    bg-white/25 backdrop-blur-sm
                    border border-white/30
                    hover:bg-white/40 hover:border-white/50
                    hover:shadow-[0_2px_12px_rgba(99,72,170,0.1)]
                    transition-all duration-300
                  "
                >
                  <div
                    className="text-purple-700 group-hover:scale-110 transition-transform duration-300"
                    style={{ filter: "drop-shadow(0 1px 2px rgba(255,255,255,0.3))" }}
                  >
                    <CategoryIcon type={cat.value as any} />
                  </div>
                  <span
                    className="text-gray-800 text-[0.8rem] md:text-xs font-medium text-center leading-snug"
                    style={{ textShadow: "0 1px 1px rgba(255,255,255,0.3)" }}
                  >
                    {cat.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Thin horizontal divider */}
          <div className="mx-8 md:mx-12">
            <div className="h-px bg-white/25" />
          </div>

          {/* ===== FEATURED VENDORS HALF ===== */}
          <div className="px-8 md:px-12 pt-8 md:pt-10 pb-10 md:pb-12">
            <div className="mb-8">
              <span
                className="
                  inline-block text-xs font-bold tracking-[0.18em] uppercase text-purple-800/70
                  relative pb-1
                "
                style={{
                  textShadow: "0 0 20px rgba(255,255,255,0.5)",
                }}
              >
                FEATURED
                <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-purple-500/40 rounded-full" />
              </span>
              <h2
                className="text-[1.6rem] md:text-[1.85rem] font-bold text-gray-900 tracking-tight mt-3 leading-tight"
                style={{ textShadow: "0 1px 2px rgba(255,255,255,0.4)" }}
              >
                Featured Vendors in Kota
              </h2>
              <p
                className="text-gray-700/70 text-[0.95rem] mt-2.5 max-w-xl leading-relaxed"
                style={{ textShadow: "0 1px 1px rgba(255,255,255,0.3)" }}
              >
                Top-rated professionals trusted by couples across Rajasthan.
              </p>
              {/* View All Vendors button */}
              <div className="mt-5">
                <Link
                  href="/vendors"
                  className="
                    group inline-flex items-center gap-2
                    bg-white/90 hover:bg-white
                    text-purple-800 font-semibold text-sm
                    pl-2 pr-4 py-2.5 rounded-full
                    shadow-[0_1px_3px_rgba(99,72,170,0.12),0_2px_8px_rgba(99,72,170,0.08)]
                    hover:shadow-[0_2px_6px_rgba(99,72,170,0.18),0_4px_16px_rgba(99,72,170,0.12)]
                    transition-all duration-300
                  "
                >
                  <span
                    className="
                      flex items-center justify-center w-8 h-8 rounded-full
                      bg-white text-purple-700
                      border border-purple-200/60
                      group-hover:bg-purple-50
                      transition-colors duration-200
                    "
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  View All Vendors
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featuredVendors.map((vendor) => {
                const coverPhoto = VENDOR_IMAGES[vendor.business_name] || vendor.photos?.[0] || null;
                return (
                  <div
                    key={vendor._id}
                    className="
                      bg-white rounded-2xl overflow-hidden
                      border border-white/40
                      shadow-[0_1px_3px_rgba(99,72,170,0.08),0_4px_16px_rgba(99,72,170,0.06)]
                      hover:shadow-[0_4px_12px_rgba(99,72,170,0.12),0_12px_32px_rgba(99,72,170,0.1)]
                      transition-shadow duration-300
                      flex flex-col
                    "
                  >
                    {/* Image area */}
                    <div className="relative aspect-[4/3]">
                      {coverPhoto ? (
                        <Image
                          src={coverPhoto}
                          alt={vendor.business_name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-100 flex items-center justify-center">
                          <span className="text-purple-400 text-lg font-medium">{vendor.business_name}</span>
                        </div>
                      )}
                      {vendor.is_verified && (
                        <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-white/90 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                          <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Verified
                        </span>
                      )}
                    </div>

                    {/* Card body */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-semibold text-gray-900 text-[0.95rem] leading-tight">{vendor.business_name}</h3>
                      <p className="text-gray-400 text-xs mt-1.5">
                        {getCategoryLabel(vendor.category)} · {vendor.city}
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        <span className="text-amber-500 text-xs">&#9733;</span>
                        <span className="text-gray-700 text-xs font-medium">4.8</span>
                        <span className="text-gray-400 text-xs">({vendor.view_count + 128} reviews)</span>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <span className="text-gray-900 font-semibold text-sm">
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
          </div>
        </div>
      </div>
    </section>
  );
}
