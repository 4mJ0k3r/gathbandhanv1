import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/ui/Card";
import FaqAccordion, { type FaqItem } from "@/components/ui/FaqAccordion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  CITY,
  CITY_SHORT,
  CONTACT_EMAIL,
  CONTACT_HOURS,
  CONTACT_PHONE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the Gathbandhan team in ${CITY}.`,
};

const CONTACT_METHODS = [
  { icon: Mail, title: "Email", detail: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  {
    icon: Phone,
    title: "Phone",
    detail: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}`,
  },
  { icon: Clock, title: "Hours", detail: CONTACT_HOURS },
  { icon: MapPin, title: "Location", detail: CITY },
];

const FAQS: readonly FaqItem[] = [
  {
    question: "How do I list my business on Gathbandhan?",
    answer:
      "Use the vendor sign-up form on our For Vendors page. Our team reviews every listing personally and publishes it within 24 hours.",
  },
  {
    question: "Do you charge vendors to be listed?",
    answer:
      "No. Listing your business on Gathbandhan is completely free, and we take no commission on bookings.",
  },
  {
    question: "How do I contact a vendor?",
    answer:
      "Every vendor profile shows their phone number, email, and Instagram. You contact them directly — nothing routes through us.",
  },
  {
    question: `Do you cover cities outside ${CITY_SHORT}?`,
    answer: `Not yet. We're focused on ${CITY} for now so we can cover it properly. Get in touch if you'd like us in your city next.`,
  },
];

const QUICK_LINKS = [
  { label: "Browse Vendors", href: "/vendors" },
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "List Your Business", href: "/signup" },
];

export default function ContactUsPage() {
  return (
    <div>
      <Section background="tint" className="text-center">
        <div className="mx-auto max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-500">
            Contact
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-ink-500">
            Have a question, want to list your business, or need help finding a
            vendor? We&apos;re here for you.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_METHODS.map((method) => {
            const Icon = method.icon;
            const body = (
              <>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-500">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  {method.title}
                </p>
                <p className="mt-1 text-sm font-medium text-ink-900">{method.detail}</p>
              </>
            );

            return (
              <div
                key={method.title}
                className="rounded-2xl border-card bg-white p-6 text-center shadow-card-sm"
              >
                {method.href ? (
                  <a
                    href={method.href}
                    className="block transition-colors hover:text-purple-500"
                  >
                    {body}
                  </a>
                ) : (
                  body
                )}
              </div>
            );
          })}
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-ink-900">
              Send us a message
            </h2>
            <p className="mb-8 text-sm text-ink-500">
              Fill out the form below and we&apos;ll respond within 24 hours.
            </p>
            <ContactForm />
          </div>

          <div className="lg:col-span-2">
            <Card>
              <h2 className="mb-4 text-lg font-bold tracking-tight text-ink-900">
                Quick Links
              </h2>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-500 transition-colors hover:text-purple-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="tint" width="narrow">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <FaqAccordion items={FAQS} />
      </Section>
    </div>
  );
}
