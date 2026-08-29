import React from "react";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <div>
      {/* Header */}
      <section className="mx-4 md:mx-8 mt-4">
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30">
          <div className="md:flex">
            <div className="md:w-1/2 bg-surface-card p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">For Vendors</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight mt-3 leading-[1.1]">
                List your business{" "}
                <span className="text-purple-500">for free</span>
              </h1>
              <p className="text-ink-500 mt-4 text-lg leading-relaxed">
                Fill in your details and get discovered by couples planning their wedding in Kota, Rajasthan.
              </p>
              <div className="mt-6 flex flex-col gap-2 text-sm text-ink-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Free listing — no hidden costs
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  No commission — keep 100% of what you earn
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Goes live in under 2 minutes
                </div>
              </div>
              <div className="mt-8">
                <Link href="#signup-form" className="inline-block bg-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 transition-colors">
                  Start Listing Now
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-purple-200 to-lime-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup-form" className="py-20 bg-surface-tint">
        <div className="max-w-xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-ink-900">List Your Business — It&apos;s Free</h2>
            <p className="text-ink-500 mt-2">Takes 2 minutes. No credit card needed.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30">
            <SignupForm />
          </div>
        </div>
      </section>
    </div>
  );
}
