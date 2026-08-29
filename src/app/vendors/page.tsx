"use client";

import { useState, useEffect } from "react";
import VendorCard from "@/components/VendorCard";
import type { VendorCard as VCard } from "@/lib/types";

const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "photographer", label: "Photographers" },
  { value: "makeup", label: "Makeup" },
  { value: "decor", label: "Decor" },
  { value: "venue", label: "Venues" },
  { value: "mehendi", label: "Mehendi" },
  { value: "choreographer", label: "Choreographers" },
  { value: "cards", label: "Cards" },
  { value: "catering", label: "Catering" },
];

const PLACEHOLDER_VENDORS: VCard[] = [
  {
    _id: "1",
    slug: "royal-clicks-photography",
    business_name: "Royal Clicks Photography",
    category: "photographer",
    city: "Kota, Rajasthan",
    starting_price: 25000,
    photos: [],
    description: "Premium wedding photography with candid and traditional styles.",
    contact_person: "",
    phone: "+919876543210",
    email: "hello@royalclicks.com",
    instagram: "@royalclicks",
    is_verified: true,
    view_count: 340,
    status: "approved",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    _id: "2",
    slug: "glam-studio-makeup",
    business_name: "Glam Studio",
    category: "makeup",
    city: "Kota, Rajasthan",
    starting_price: 15000,
    photos: [],
    description: "Bridal makeup that makes you shine on your special day.",
    contact_person: "",
    phone: "+919876543211",
    email: "hello@glamstudio.com",
    instagram: "@glamstudio",
    is_verified: true,
    view_count: 280,
    status: "approved",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    _id: "3",
    slug: "bloom-decorations",
    business_name: "Bloom Decorations",
    category: "decor",
    city: "Kota, Rajasthan",
    starting_price: 50000,
    photos: [],
    description: "Stunning wedding decor — mandaps, stages, and venue setups.",
    contact_person: "",
    phone: "+919876543212",
    email: "hello@bloomdecor.com",
    is_verified: false,
    view_count: 190,
    status: "approved",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    _id: "4",
    slug: "palace-grounds-venue",
    business_name: "Palace Grounds",
    category: "venue",
    city: "Kota, Rajasthan",
    starting_price: 200000,
    photos: [],
    description: "Grand outdoor venue perfect for weddings and receptions.",
    contact_person: "",
    phone: "+919876543213",
    email: "info@palacegrounds.com",
    is_verified: true,
    view_count: 450,
    status: "approved",
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export default function VendorsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [vendors, setVendors] = useState<VCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (activeCategory === "all") {
        setVendors(PLACEHOLDER_VENDORS);
      } else {
        setVendors(PLACEHOLDER_VENDORS.filter((v) => v.category === activeCategory));
      }
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="py-12 bg-surface-tint min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">Browse</span>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 tracking-tight mt-3">
            Wedding Vendors in Kota, Rajasthan
          </h1>
          <p className="text-ink-500 mt-4 text-lg">Find and connect with trusted vendors directly — no middlemen.</p>
        </div>

        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search vendors..."
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-full border border-purple-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-ink-900 placeholder:text-ink-300"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryClick(cat.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.value
                  ? "bg-purple-500 text-white"
                  : "bg-white text-ink-700 border border-purple-100 hover:border-purple-300 hover:text-purple-500"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden">
                <div className="skeleton aspect-[4/3]" />
                <div className="p-5 space-y-3">
                  <div className="skeleton h-5 w-3/4" />
                  <div className="skeleton h-4 w-1/2" />
                  <div className="skeleton h-4 w-1/4" />
                </div>
              </div>
            ))}
          </div>
        ) : vendors.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30">
            <div className="w-16 h-16 bg-surface-tint rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-ink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-ink-700 font-medium text-lg">No vendors match these filters</p>
            <button
              onClick={() => handleCategoryClick("all")}
              className="mt-4 text-purple-500 font-medium hover:underline text-sm"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vendors.map((vendor) => (
                <VendorCard key={vendor._id} vendor={vendor as VCard} />
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="bg-white text-purple-500 border-2 border-purple-500 px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors">
                Load More Vendors
              </button>
            </div>
          </>
        )}
      </div>

      <section className="py-20 bg-surface-base mt-16">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">For Vendors</span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mt-3">
            Are you a wedding vendor in Kota, Rajasthan?
          </h2>
          <p className="text-ink-500 mt-4 text-lg">Get discovered by couples planning their wedding.</p>
          <a href="/signup" className="inline-block mt-8 bg-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 transition-colors">
            List Your Business — Free
          </a>
        </div>
      </section>
    </div>
  );
}
