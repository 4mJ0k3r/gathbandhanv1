import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <section className="py-20 bg-surface-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">About</span>
            <h1 className="text-4xl md:text-5xl font-bold text-ink-900 tracking-tight mt-3">
              Connecting couples in Kota with wedding vendors they can trust
            </h1>
            <p className="text-ink-500 mt-6 text-lg leading-relaxed">
              Gathbandhan exists to make wedding planning simpler for couples and growth easier for local vendors — with no commissions, no middlemen, and no hidden costs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-base">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30">
              <p className="text-4xl md:text-5xl font-bold text-purple-500">500+</p>
              <p className="text-sm text-ink-500 mt-2 font-medium">Vendors Listed</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30">
              <p className="text-4xl md:text-5xl font-bold text-purple-500">12</p>
              <p className="text-sm text-ink-500 mt-2 font-medium">Categories Covered</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30">
              <p className="text-4xl md:text-5xl font-bold text-purple-500">100%</p>
              <p className="text-sm text-ink-500 mt-2 font-medium">Free for Vendors</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mt-3">What we believe in</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Free, always", desc: "Listing your business is and will always be free. No hidden fees, no premium tiers." },
              { title: "Direct connections", desc: "Couples message you directly. We don't intercept or charge for introductions." },
              { title: "Built for Kota", desc: "Made specifically for the Kota wedding market. We understand local needs." },
              { title: "Vendor-first", desc: "We're here to help vendors grow, not to extract value from your business." },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-3xl p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30">
                <h3 className="text-lg font-semibold text-ink-900 mb-2">{value.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-500">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Ready to be part of it?</h2>
          <p className="text-white/70 mt-4 text-lg">Join the growing community of wedding vendors in Kota, Rajasthan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/signup" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors">
              List Your Business
            </Link>
            <Link href="/vendors" className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors border border-purple-400">
              Browse Vendors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
