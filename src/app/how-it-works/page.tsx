import Link from "next/link";

const STEPS = [
  { step: "1", title: "Fill in your details", desc: "Add your business info, photos, and pricing. Takes 2 minutes.", items: ["Business name and category", "Contact details and pricing", "Portfolio photos and description"] },
  { step: "2", title: "We review and publish", desc: "Our team reviews your listing and publishes it within 24 hours.", items: ["Quick verification process", "Your listing goes live", "No hidden fees"] },
  { step: "3", title: "Start getting inquiries", desc: "Couples find your listing and reach out directly to you.", items: ["Couples discover you", "Direct messages and calls", "Grow your business"] },
];

const FAQS = [
  { q: "Is it really free?", a: "Yes! Listing your business on Gathbandhan is completely free. No hidden fees, no commissions, no catch." },
  { q: "How do couples contact me?", a: "Couples can call, WhatsApp, or email you directly through the contact details you provide on your listing." },
  { q: "Can I edit my listing later?", a: "Absolutely. You can update your photos, pricing, and description anytime through our simple dashboard." },
  { q: "How do I get verified?", a: "Once your listing is submitted, our team will call you to verify your details. Verified badges appear on your profile to build trust." },
  { q: "How long does it take to go live?", a: "Most listings are published within 24 hours of submission, once verified." },
];

export default function HowItWorksPage() {
  return (
    <div>
      <section className="py-20 bg-surface-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">How It Works</span>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 tracking-tight mt-3">
            From listing to booking
          </h1>
          <p className="text-ink-500 mt-4 text-lg max-w-2xl mx-auto">From listing to booking, here&apos;s how Gathbandhan connects you with couples.</p>
        </div>
      </section>

      <section className="py-12 bg-surface-base">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="space-y-6">
            {STEPS.map((item, i) => (
              <div key={item.step} className="bg-white rounded-3xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30 overflow-hidden">
                <div className="md:flex">
                  <div className={`md:w-1/2 relative min-h-[240px] ${i % 2 === 0 ? "" : "md:order-2"}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-300" />
                  </div>
                  <div className={`md:w-1/2 p-8 md:p-12 flex flex-col justify-center ${i % 2 === 0 ? "" : "md:order-1"}`}>
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">{item.step}</div>
                    <h3 className="text-2xl font-bold text-ink-900 tracking-tight mb-2">{item.title}</h3>
                    <p className="text-ink-500 mb-4">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.items.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-sm text-ink-700">
                          <svg className="w-4 h-4 text-lime-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-tint">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mt-3">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-purple-100/30 overflow-hidden group">
                <summary className="flex items-center justify-between p-6 cursor-pointer text-ink-900 font-semibold hover:text-purple-500 transition-colors list-none">
                  {faq.q}
                  <svg className="w-5 h-5 text-ink-300 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-ink-500 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-base">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">Ready to get started?</h2>
          <p className="text-ink-500 mt-4 text-lg">List your business for free and start getting inquiries today.</p>
          <Link href="/signup" className="inline-block mt-8 bg-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 transition-colors">
            List Your Business — Free
          </Link>
        </div>
      </section>
    </div>
  );
}
