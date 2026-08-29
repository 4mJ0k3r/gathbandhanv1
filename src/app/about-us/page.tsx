import Link from "next/link";

const TEAM_MEMBERS = [
  {
    name: "Priya Sharma",
    role: "Founder & CEO",
    description: "10+ years in event management and vendor curation across Rajasthan.",
  },
  {
    name: "Rahul Mehta",
    role: "Head of Partnerships",
    description: "Deep relationships with Kota's top photographers, makeup artists, and decorators.",
  },
  {
    name: "Anjali Verma",
    role: "Customer Experience Lead",
    description: "Ensures every couple finds their perfect vendor match.",
  },
];

const VALUES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trusted & Verified",
    description: "Every vendor on our platform is personally reviewed. We verify credentials, check past work, and ensure quality before listing.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Local & Personal",
    description: "We're based in Kota, Rajasthan. We know our vendors personally and build relationships that last beyond a single wedding.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Made for Couples",
    description: "We've been in your shoes. Our platform is built to take the stress out of wedding planning, one vendor at a time.",
  },
];

export default function AboutUsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-surface-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 tracking-tight mt-3">
            Curating Rajasthan&apos;s best wedding vendors
          </h1>
          <p className="text-ink-500 mt-4 text-lg max-w-2xl mx-auto">
            Gathbandhan was born from a simple belief: every couple deserves trusted, verified vendors who make their wedding day unforgettable.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-surface-base">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-ink-900 tracking-tight mb-6">Our Story</h2>
            <div className="text-ink-500 space-y-4 leading-relaxed">
              <p>
                We started Gathbandhan in Kota, Rajasthan — a city that understands the grandeur and intimacy of Indian weddings. After years of helping friends and family find reliable photographers, makeup artists, decorators, and venues, we realized the process was deeply fragmented.
              </p>
              <p>
                Couples were juggling WhatsApp groups, Instagram DMs, and word-of-mouth referrals. Vendors struggled to showcase their best work. There was no single place where trust, quality, and discovery came together.
              </p>
              <p>
                So we built one. Gathbandhan is a curated directory of verified wedding professionals in and around Kota. We personally review every vendor — checking their portfolio, meeting them, understanding their craft — so couples can browse with confidence.
              </p>
              <p>
                Our name, <span className="font-semibold text-ink-800">Gathbandhan</span> (meaning &ldquo;union&rdquo; or &ldquo;alliance&rdquo;), reflects what we do: bringing couples and vendors together in a relationship built on trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mt-3">What drives us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-white rounded-3xl p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-purple-100/30">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 mb-5">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-ink-900 tracking-tight mb-2">{value.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface-base">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">The Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mt-3">Meet the people behind Gathbandhan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 bg-purple-50 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-500">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ink-900 tracking-tight">{member.name}</h3>
                <p className="text-purple-500 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-ink-500 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">Ready to find your perfect vendor?</h2>
          <p className="text-ink-500 mt-4 text-lg max-w-xl mx-auto">Browse our curated directory of verified wedding professionals in Kota and beyond.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/vendors" className="bg-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 transition-colors">
              Browse Vendors
            </Link>
            <Link href="/contact-us" className="bg-white text-purple-500 px-8 py-4 rounded-full font-semibold text-lg border border-purple-100/50 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)] hover:bg-purple-50 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
