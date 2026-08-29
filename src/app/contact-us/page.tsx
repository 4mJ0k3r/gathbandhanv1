"use client";

import { useState, FormEvent } from "react";

const CONTACT_METHODS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    detail: "support@gathbandhan.com",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    detail: "+91 98765 43210",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Hours",
    detail: "Mon – Sat, 10am – 7pm IST",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Location",
    detail: "Kota, Rajasthan, India",
  },
];

const FAQS = [
  {
    question: "How do I list my business on Gathbandhan?",
    answer:
      "Head to our Vendors page and use the vendor submission form. Our team reviews every listing personally within 2-3 business days.",
  },
  {
    question: "Do you charge vendors to be listed?",
    answer:
      "No. Listing your business on Gathbandhan is completely free. We believe in building a community, not a pay-to-play directory.",
  },
  {
    question: "Can I book vendors directly through the platform?",
    answer:
      "Yes! Click the WhatsApp icon on any vendor listing to start a conversation directly, or use the booking form to send an inquiry.",
  },
  {
    question: "Do you cover cities outside Kota?",
    answer:
      "We currently focus on Kota and nearby cities (Bundi, Jhalawar). We're expanding — join our mailing list to be the first to know when new areas go live.",
  },
];

export default function ContactUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Thanks for reaching out! We'll get back to you within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-surface-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 tracking-tight mt-3">
            Get in Touch
          </h1>
          <p className="text-ink-500 mt-4 text-lg max-w-2xl mx-auto">
            Have a question, want to list your business, or need help planning your wedding? We&apos;re here for you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-surface-base">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_METHODS.map((method) => (
              <div
                key={method.title}
                className="bg-white rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)] border border-purple-100/30 text-center"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 mx-auto mb-3">
                  {method.icon}
                </div>
                <p className="text-xs font-semibold text-ink-500 uppercase tracking-wider">{method.title}</p>
                <p className="text-ink-900 font-medium mt-1 text-sm">{method.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map placeholder */}
      <section className="py-20 bg-surface-base">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight mb-2">Send us a message</h2>
              <p className="text-ink-500 text-sm mb-8">Fill out the form below and we&apos;ll respond within 24 hours.</p>

              {formStatus && (
                <div className="bg-green-50 text-green-700 text-sm rounded-xl px-5 py-4 mb-6 border border-green-100">
                  {formStatus}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-1.5">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-purple-100/50 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition"
                      placeholder="Priya"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-1.5">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-purple-100/50 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition"
                      placeholder="Sharma"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-purple-100/50 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">Subject</label>
                  <select
                    required
                    className="w-full rounded-xl border border-purple-100/50 bg-white px-4 py-3 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="vendor">Vendor Listing</option>
                    <option value="booking">Booking Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border border-purple-100/50 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-purple-500 text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-purple-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Map placeholder */}
              <div className="bg-white rounded-3xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30 overflow-hidden">
                <div className="bg-surface-tint p-4 border-b border-purple-100/30">
                  <p className="text-sm font-semibold text-ink-900">Kota, Rajasthan</p>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100/40 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-10 h-10 text-purple-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-ink-400 text-xs">Map integration coming soon</p>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-white rounded-3xl p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30">
                <h3 className="text-base font-bold text-ink-900 tracking-tight mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Browse Vendors", href: "/vendors" },
                    { label: "About Us", href: "/about-us" },
                    { label: "Privacy Policy", href: "/privacy-policy" },
                    { label: "Vendor Sign-up", href: "/vendors#vendor-form" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-sm text-ink-500 hover:text-purple-500 transition-colors flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface-tint">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mt-3">Common questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)] border border-purple-100/30 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-ink-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-ink-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-ink-500 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
