import type { Metadata } from "next";
import { Heart, ShieldCheck, Users } from "lucide-react";
import Card from "@/components/ui/Card";
import CtaSection from "@/components/ui/CtaSection";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StatBlock from "@/components/ui/StatBlock";
import { CITY, CITY_SHORT, VENDOR_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Gathbandhan connects couples in ${CITY} with wedding vendors they can trust — no commissions, no middlemen.`,
};

const STATS = [
  { value: String(VENDOR_CATEGORIES.length), label: "Categories Covered" },
  { value: "100%", label: "Free for Vendors" },
  { value: CITY_SHORT, label: "City We Serve" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Verified, not scraped",
    description:
      "We call every vendor before publishing their listing. If a business is on Gathbandhan, someone here has spoken to them.",
  },
  {
    icon: Users,
    title: "Direct connections",
    description:
      "Couples contact vendors directly by phone or WhatsApp. We don't intercept inquiries or charge for introductions.",
  },
  {
    icon: Heart,
    title: `Built for ${CITY_SHORT}`,
    description: `We're focused on one city. Depth in ${CITY_SHORT} matters more to us than a thin directory spread across India.`,
  },
];

export default function AboutPage() {
  return (
    <div>
      <Section background="tint" className="text-center">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            About
          </span>
          <h1 className="mt-3 font-display text-4xl font-normal text-ink-900 md:text-5xl">
            Connecting couples in {CITY_SHORT} with wedding vendors they can trust
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">
            Gathbandhan exists to make wedding planning simpler for couples and
            growth easier for local vendors — with no commissions, no middlemen,
            and no hidden costs.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STATS.map((stat) => (
            <StatBlock key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Section>

      <Section id="story" background="tint" width="narrow">
        <h2 className="mb-6 font-display text-3xl font-normal text-ink-900 md:text-4xl">
          Our Story
        </h2>
        <div className="space-y-4 leading-relaxed text-ink-500">
          <p>
            We started Gathbandhan in {CITY} — a city that understands both the
            grandeur and the intimacy of Indian weddings. After years of helping
            friends and family find reliable photographers, makeup artists,
            decorators, and venues, we kept running into the same problem: the
            process was completely fragmented.
          </p>
          <p>
            Couples were juggling WhatsApp groups, Instagram DMs, and
            word-of-mouth referrals. Vendors had no good way to showcase their
            best work. There was no single place where trust, quality, and
            discovery came together.
          </p>
          <p>
            So we built one. Gathbandhan is a curated directory of wedding
            professionals in and around {CITY_SHORT}. We review every vendor
            personally — checking their portfolio, speaking with them,
            understanding their craft — so couples can browse with confidence.
          </p>
          <p>
            Our name, <span className="font-semibold text-ink-800">Gathbandhan</span>{" "}
            (meaning &ldquo;union&rdquo; or &ldquo;alliance&rdquo;), reflects
            what we do: bringing couples and vendors together in a relationship
            built on trust.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our Values" title="What we believe in" />
        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-ink-900">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      <CtaSection
        background="tint"
        title="Ready to be part of it?"
        subtitle={`Join the wedding vendors listed in ${CITY}.`}
        primary={{ label: "List Your Business", href: "/signup" }}
        secondary={{ label: "Browse Vendors", href: "/vendors" }}
      />
    </div>
  );
}
