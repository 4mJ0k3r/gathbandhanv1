import React from "react";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";

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

const VALUE_PROPS = [
  { title: "Free Listing", desc: "Create your business profile for free. No hidden costs.", icon: "tag" },
  { title: "Direct Inquiries", desc: "Couples reach out to you directly. No middlemen.", icon: "message" },
  { title: "No Commission", desc: "Keep 100% of what you earn. We don't take a cut.", icon: "piggy" },
  { title: "Verified Badge", desc: "Build trust with couples through our verification system.", icon: "badge" },
  { title: "Simple Dashboard", desc: "Manage your listings easily. Update photos and details anytime.", icon: "layout" },
];

const STEPS = [
  { step: "1", title: "List your business", desc: "Fill in your details, add photos and pricing. Takes 2 minutes." },
  { step: "2", title: "Get inquiries", desc: "Couples find your listing and reach out directly to you." },
  { step: "3", title: "Grow your business", desc: "Share your listing, get more views, book more weddings." },
];

function IconComponent({ name }: { name: string }): React.ReactNode {
  const icons: Record<string, React.ReactNode> = {
    tag: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5a2 2 0 012 2v5.72a2 2 0 01.59 1.41l5.83 5.83a2 2 0 01-1.41 3.41H7a2 2 0 01-2-2V5a2 2 0 012-2z" /></svg>,
    message: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-2.81-.56L3 21l1.56-5.19A8.97 8.97 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    piggy: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    badge: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
    layout: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" /></svg>,
  };
  return icons[name] || null;
}

export default function ForVendorsPage() {
  return (
    <div>
      <section className="mx-4 md:mx-8 mt-4">
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30">
          <div className="md:flex">
            <div className="md:w-1/2 bg-surface-card p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">For Vendors</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight mt-3 leading-[1.1]">
                Get discovered by couples{" "}
                <span className="text-purple-500">planning their wedding</span>
              </h1>
              <p className="text-ink-500 mt-4 text-lg leading-relaxed">
                List your business for free on Gathbandhan and start getting inquiries from couples in Kota, Rajasthan.
              </p>
              <Link href="/signup" className="inline-block mt-8 bg-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 transition-colors w-fit">
                List Your Business — It&apos;s Free
              </Link>
            </div>
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-purple-200 to-lime-300" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">Why Gathbandhan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mt-3">Why list on Gathbandhan?</h2>
            <p className="text-ink-500 mt-4">Couples are searching for vendors in Kota, Rajasthan right now. Be there when they do.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUE_PROPS.map((prop) => (
              <div key={prop.title} className="bg-white rounded-3xl p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 mb-4">
                  <IconComponent name={prop.icon} />
                </div>
                <h3 className="text-lg font-semibold text-ink-900 mb-2">{prop.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-base">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mt-3">Getting listed takes 2 minutes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((item) => (
              <div key={item.step} className="bg-surface-tint rounded-3xl p-8 text-center border border-purple-100/30">
                <div className="w-14 h-14 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5">{item.step}</div>
                <h3 className="text-xl font-semibold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mt-3 mb-8">Categories we&apos;re looking for</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {CATEGORIES.map((cat) => (
              <Link key={cat.value} href={`/vendors?category=${cat.value}`} className="bg-white hover:bg-purple-50 text-ink-700 hover:text-purple-600 px-6 py-3 rounded-full text-sm font-medium transition-colors border border-purple-100/50 hover:border-purple-200">
                {cat.label}
              </Link>
            ))}
          </div>
          <p className="text-ink-500 mt-6 text-sm">Don&apos;t see your category? <Link href="/about" className="text-purple-500 hover:underline">Contact us</Link></p>
        </div>
      </section>

      <section className="py-20 bg-surface-base">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">Ready to get listed?</h2>
          <p className="text-ink-500 mt-4 text-lg">It takes 2 minutes. No credit card needed.</p>
          <Link href="/signup" className="inline-block mt-8 bg-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 transition-colors">
            List Your Business — Free
          </Link>
        </div>
      </section>

      <section id="signup" className="py-20 bg-surface-tint">
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
