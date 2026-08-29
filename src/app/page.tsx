"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PillButton from "@/components/ui/PillButton";

// ------------------------------------------------------------------
// Data
// ------------------------------------------------------------------

const CATEGORIES = [
  {
    title: "Photographers",
    slug: "photographers",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
    count: "240+",
  },
  {
    title: "Venues",
    slug: "venues",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop",
    count: "180+",
  },
  {
    title: "Makeup Artists",
    slug: "makeup-artists",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop",
    count: "320+",
  },
  {
    title: "Decorators",
    slug: "decorators",
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=400&h=300&fit=crop",
    count: "150+",
  },
  {
    title: "Mehendi Artists",
    slug: "mehendi-artists",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?w=400&h=300&fit=crop",
    count: "95+",
  },
  {
    title: "Choreographers",
    slug: "choreographers",
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba7?w=400&h=300&fit=crop",
    count: "60+",
  },
  {
    title: "Wedding Cards",
    slug: "wedding-cards",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=300&fit=crop",
    count: "120+",
  },
  {
    title: "Caterers",
    slug: "caterers",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop",
    count: "200+",
  },
];

const FEATURED_VENDORS = [
  {
    name: "Shutter Stories",
    category: "Photography",
    location: "Mumbai",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=450&fit=crop",
    price: "₹50,000",
  },
  {
    name: "Glamour Box",
    category: "Makeup",
    location: "Delhi",
    rating: 4.8,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=450&fit=crop",
    price: "₹25,000",
  },
  {
    name: "Royal Palaces",
    category: "Venues",
    location: "Jaipur",
    rating: 4.7,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=450&fit=crop",
    price: "₹3,00,000",
  },
  {
    name: "Bloom & Blossom",
    category: "Decor",
    location: "Bangalore",
    rating: 4.9,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&h=450&fit=crop",
    price: "₹80,000",
  },
];

// ------------------------------------------------------------------
// Component
// ------------------------------------------------------------------

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[85vh] min-h-[560px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop&q=80"
            alt="Wedding celebration"
            fill
            priority
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-4 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] max-w-4xl">
            Find the Perfect
            <br />
            <span className="text-lime-400">Wedding Vendors</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            Discover top-rated photographers, venues, makeup artists, and more
            for your special day.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <PillButton href="#categories" size="md" variant="primary">
              Explore Vendors
            </PillButton>
            <PillButton href="#how-it-works" size="md" variant="outline">
              How It Works
            </PillButton>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex items-center gap-8 sm:gap-12 text-white/70">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-white">2,000+</div>
              <div className="text-sm mt-1">Verified Vendors</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-white">50+</div>
              <div className="text-sm mt-1">Cities</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-white">15k+</div>
              <div className="text-sm mt-1">Happy Couples</div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ============================================================
          CATEGORIES
      ============================================================ */}
      <section id="categories" className="py-20 sm:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink-900 tracking-tight">
              Browse by Category
            </h2>
            <p className="mt-4 text-ink-500 text-lg max-w-xl mx-auto">
              From photography to decor, find exactly what you need for your celebration.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/vendors?category=${cat.slug}`}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-card"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                  <h3 className="text-white font-semibold text-lg tracking-tight">
                    {cat.title}
                  </h3>
                  <span className="text-white/70 text-sm mt-0.5">{cat.count} vendors</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS
      ============================================================ */}
      <section id="how-it-works" className="py-20 sm:py-28 px-4 bg-surface-tint">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink-900 tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-ink-500 text-lg max-w-xl mx-auto">
              Three simple steps to find your perfect wedding team.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                step: "01",
                title: "Browse",
                desc: "Explore vendors by category, city, or budget. Filter to find your match.",
              },
              {
                step: "02",
                title: "Compare",
                desc: "Check ratings, reviews, and pricing. Shortlist the ones you love.",
              },
              {
                step: "03",
                title: "Book",
                desc: "Connect directly with vendors and book your perfect team.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-purple-500/15 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-ink-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-ink-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURED VENDORS
      ============================================================ */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink-900 tracking-tight">
              Featured Vendors
            </h2>
            <p className="mt-4 text-ink-500 text-lg max-w-xl mx-auto">
              Top-rated professionals trusted by thousands of couples.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_VENDORS.map((vendor) => (
              <Link
                key={vendor.name}
                href={`/vendors?category=${vendor.category.toLowerCase()}`}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-purple-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-surface-card overflow-hidden">
                  <Image
                    src={vendor.image}
                    alt={vendor.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-ink-900 group-hover:text-purple-500 transition-colors">
                        {vendor.name}
                      </h3>
                      <p className="text-sm text-ink-500 mt-0.5">
                        {vendor.category} · {vendor.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full text-sm font-medium flex-shrink-0">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {vendor.rating}
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-sm text-ink-300">Starting from</span>
                    <span className="text-sm font-semibold text-ink-900">{vendor.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <PillButton href="/vendors" variant="secondary" size="md">
              View All Vendors
            </PillButton>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA BANNER
      ============================================================ */}
      <section className="px-4 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=500&fit=crop&q=80"
            alt="Wedding celebration"
            width={1200}
            height={500}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Ready to Plan Your Big Day?
              </h2>
              <p className="mt-3 text-white/80 text-lg max-w-lg mx-auto">
                Join thousands of couples who found their dream wedding team on Gathbandhan.
              </p>
              <div className="mt-8">
                <PillButton href="/signup" size="md" variant="primary">
                  Get Started Free
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
