"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/hero-garden.jpg"
        alt="Garden wedding setting"
        fill
        priority
        className="object-cover"
      />

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 flex items-end justify-center min-h-full px-6 py-16 md:py-24">
        <div className="max-w-3xl text-center">
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Kota, Rajasthan
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Get discovered by couples{" "}
            <span className="text-lime-400">planning their wedding</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
            The easiest way for wedding vendors to find more couples. List your business for free.
          </p>
          <Link
            href="/signup"
            className="inline-block mt-8 bg-white text-purple-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors"
          >
            List Your Business — It&apos;s Free
          </Link>
        </div>
      </div>
    </div>
  );
}
