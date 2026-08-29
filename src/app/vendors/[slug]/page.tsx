"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

interface Vendor {
  _id: string;
  slug: string;
  business_name: string;
  category: string;
  city: string;
  starting_price?: number;
  photos: string[];
  description?: string;
  phone: string;
  email: string;
  instagram?: string;
  portfolio_url?: string;
  is_verified: boolean;
  view_count: number;
}

export default function VendorProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  useEffect(() => {
    async function fetchVendor() {
      try {
        const res = await fetch("/api/vendors/" + slug);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setVendor(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchVendor();
  }, [slug]);

  if (loading) {
    return (
      <div className="py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="skeleton h-[420px] w-full rounded-3xl mb-8" />
          <div className="skeleton h-8 w-1/2 mb-4" />
          <div className="skeleton h-4 w-full mb-2" />
          <div className="skeleton h-4 w-3/4" />
        </div>
      </div>
    );
  }

  if (error || !vendor) {
    return (
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h1 className="text-3xl font-bold text-ink-900 mb-4">This vendor isn&apos;t listed yet</h1>
          <p className="text-ink-500 mb-8">
            {vendor?.business_name || "This business"} may not have joined the platform yet.
          </p>
          <Link href="/vendors" className="text-purple-500 font-medium hover:underline">
            Browse all vendors in Kota, Rajasthan
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent("Hi! I found your listing on Gathbandhan and I am interested.");
  const whatsappUrl = vendor.instagram
    ? "https://wa.me/" + vendor.phone.replace("+91", "") + "?text=" + whatsappMsg
    : null;

  return (
    <div className="py-12 bg-surface-tint min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <Link href="/vendors" className="text-ink-500 hover:text-purple-500 text-sm mb-6 inline-block">
          &larr; Back to all vendors
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30 mb-8">
          <div className="md:flex">
            <div className="md:w-2/5 bg-surface-card p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">{vendor.business_name}</h1>
                <p className="text-ink-500 mt-2">
                  {vendor.category} · {vendor.city}
                </p>
                {vendor.description && (
                  <p className="text-ink-500 mt-4 leading-relaxed">{vendor.description}</p>
                )}
              </div>
              <div className="mt-6 md:mt-8">
                {whatsappUrl && (
                  <a href={whatsappUrl} className="inline-block bg-purple-500 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-purple-600 transition-colors">
                    Enquire Now
                  </a>
                )}
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6 md:mt-8 pt-6 border-t border-purple-100/50">
                <div>
                  <p className="text-2xl font-bold text-purple-500">150+</p>
                  <p className="text-xs text-ink-500 mt-1 font-medium">Weddings</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-500">{vendor.view_count}</p>
                  <p className="text-xs text-ink-500 mt-1 font-medium">Views</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-500">3yr</p>
                  <p className="text-xs text-ink-500 mt-1 font-medium">Experience</p>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 relative min-h-[300px] md:min-h-[480px] bg-surface-tint">
              {vendor.photos?.[0] ? (
                <Image src={vendor.photos[0]} alt={vendor.business_name} fill className="object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-8xl font-bold text-purple-200">{vendor.business_name.charAt(0)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30 mb-8">
          <h2 className="text-2xl font-bold text-ink-900 mb-6 tracking-tight">Get in Touch</h2>
          <div className="space-y-4">
            <a href={"tel:" + vendor.phone} className="flex items-center gap-3 text-ink-700 hover:text-purple-500 transition-colors">
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-medium">{vendor.phone}</span>
            </a>
            <a href={"mailto:" + vendor.email} className="flex items-center gap-3 text-ink-700 hover:text-purple-500 transition-colors">
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium">{vendor.email}</span>
            </a>
            {vendor.instagram && (
              <a href={"https://instagram.com/" + vendor.instagram} target="_blank" rel="noopener" className="flex items-center gap-3 text-ink-700 hover:text-purple-500 transition-colors">
                <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
                    <circle cx="12" cy="12" r="5" strokeWidth={2} />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <span className="font-medium">@{vendor.instagram}</span>
              </a>
            )}
          </div>
        </section>

        {vendor.photos?.length > 0 && (
          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30 mb-8">
            <h2 className="text-2xl font-bold text-ink-900 mb-6 tracking-tight">Portfolio</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {vendor.photos.map((photo, i) => (
                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-surface-tint">
                  <Image src={photo} alt={"Photo " + (i + 1)} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
