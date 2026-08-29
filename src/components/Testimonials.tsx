"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Bride",
    avatar: "PS",
    quote:
      "I found my dream photographer and decorator within a week. The platform is so easy to use.",
  },
  {
    name: "Rajesh Verma",
    role: "Photographer, Kota",
    avatar: "RV",
    quote:
      "Listing my business here brought me 12 new bookings in the first month. No commission means I keep more.",
  },
  {
    name: "Anita Meena",
    role: "Bride",
    avatar: "AM",
    quote:
      "The categories make it easy to find exactly what I need. Found my mehendi artist and choreographer here.",
  },
];

const AVATAR_COLORS = [
  "bg-purple-100 text-purple-600",
  "bg-lime-100 text-lime-600",
  "bg-amber-100 text-amber-600",
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () =>
    setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1));

  return (
    <section className="py-20 bg-surface-base relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime-500/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-12">
          <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mt-3">
            What people are saying
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30">
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${AVATAR_COLORS[active]}`}
              >
                {TESTIMONIALS[active].avatar}
              </div>
              <div>
                <p className="font-semibold text-ink-900">
                  {TESTIMONIALS[active].name}
                </p>
                <p className="text-sm text-ink-500">
                  {TESTIMONIALS[active].role}
                </p>
              </div>
            </div>

            <blockquote className="text-lg md:text-xl text-ink-700 leading-relaxed">
              &ldquo;{TESTIMONIALS[active].quote}&rdquo;
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-ink-200 flex items-center justify-center hover:border-purple-500 hover:text-purple-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === active ? "bg-purple-500 w-6" : "bg-ink-200"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-ink-200 flex items-center justify-center hover:border-purple-500 hover:text-purple-500 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
