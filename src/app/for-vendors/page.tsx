import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  MessageCircle,
  PiggyBank,
  Share2,
  Tag,
  type LucideIcon,
} from "lucide-react";
import Card from "@/components/ui/Card";
import CtaSection from "@/components/ui/CtaSection";
import PillButton from "@/components/ui/PillButton";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SplitHero from "@/components/ui/SplitHero";
import SignupFormSection from "@/components/SignupFormSection";
import { CATEGORY_OPTIONS, CITY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "For Vendors",
  description: `Why list your wedding business on Gathbandhan — free listings, direct inquiries, and no commission in ${CITY}.`,
};

const VALUE_PROPS: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Free Listing",
    desc: "Create your business profile for free. No hidden costs.",
    icon: Tag,
  },
  {
    title: "Direct Inquiries",
    desc: "Couples reach out to you directly. No middlemen.",
    icon: MessageCircle,
  },
  {
    title: "No Commission",
    desc: "Keep 100% of what you earn. We don't take a cut.",
    icon: PiggyBank,
  },
  {
    title: "Verified Badge",
    desc: "Build trust with couples through our verification process.",
    icon: BadgeCheck,
  },
  {
    title: "Easy to Share",
    desc: "Send couples a single link to your listing, on WhatsApp or Instagram.",
    icon: Share2,
  },
];

const STEPS = [
  {
    step: "1",
    title: "List your business",
    desc: "Fill in your details, pricing, and portfolio link. Takes 2 minutes.",
  },
  {
    step: "2",
    title: "We review and publish",
    desc: "We verify your details and publish your listing within 24 hours.",
  },
  {
    step: "3",
    title: "Get inquiries",
    desc: "Couples find your listing and reach out to you directly.",
  },
];

export default function ForVendorsPage() {
  return (
    <div>
      <section className="mx-6 mt-4 md:mx-10">
        <SplitHero image={IMAGES.balloonRelease} priority>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            For Vendors
          </span>
          <h1 className="mt-3 font-display text-4xl font-normal leading-[1.15] text-ink-900 md:text-5xl">
            Get discovered by couples{" "}
            <span className="text-brand-500">planning their wedding</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            List your business for free on Gathbandhan and start getting
            inquiries from couples in {CITY}.
          </p>
          <div className="mt-8">
            <PillButton href="/signup" size="lg" fitWidth>
              List Your Business — It&apos;s Free
            </PillButton>
          </div>
        </SplitHero>
      </section>

      <Section background="tint">
        <SectionHeading
          eyebrow="Why Gathbandhan"
          title="Why list on Gathbandhan?"
          subtitle={`Couples are searching for vendors in ${CITY} right now. Be there when they do.`}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((prop) => {
            const Icon = prop.icon;
            return (
              <Card key={prop.title}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink-900">{prop.title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{prop.desc}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How It Works"
          title="Getting listed takes 2 minutes"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border-card bg-surface-tint p-8 text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-xl font-bold text-white">
                {item.step}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="tint" className="text-center">
        <SectionHeading
          eyebrow="Categories"
          title="Categories we're looking for"
          tight
        />
        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {CATEGORY_OPTIONS.map((cat) => (
            <li key={cat.value}>
              <Link
                href={`/vendors?category=${cat.value}`}
                className="inline-block rounded-full border border-brand-100 bg-white px-5 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-500"
              >
                {cat.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-500">
          Don&apos;t see your category?{" "}
          <Link href="/contact-us" className="text-brand-500 hover:underline">
            Contact us
          </Link>
        </p>
      </Section>

      <CtaSection
        title="Ready to get listed?"
        subtitle="It takes 2 minutes. No credit card needed."
        primary={{ label: "List Your Business — Free", href: "/signup" }}
      />

      <SignupFormSection id="signup" />
    </div>
  );
}
