import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import CtaSection from "@/components/ui/CtaSection";
import FaqAccordion, { type FaqItem } from "@/components/ui/FaqAccordion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From listing to inquiry, here's how Gathbandhan connects wedding vendors with couples.",
};

const STEPS = [
  {
    step: "1",
    title: "Fill in your details",
    desc: "Add your business info, pricing, and portfolio link. Takes 2 minutes.",
    items: [
      "Business name and category",
      "Contact details and starting price",
      "Portfolio link and description",
    ],
    image: IMAGES.receptionTable,
  },
  {
    step: "2",
    title: "We review and publish",
    desc: "Our team verifies your details and publishes your listing within 24 hours.",
    items: ["We call to verify your details", "Your listing goes live", "No fees, ever"],
    image: IMAGES.ceremonyChairs,
  },
  {
    step: "3",
    title: "Start getting inquiries",
    desc: "Couples find your listing and reach out to you directly by phone or WhatsApp.",
    items: [
      "Couples discover your work",
      "Direct calls and messages",
      "No commission on bookings",
    ],
    image: IMAGES.balloonRelease,
  },
];

const FAQS: readonly FaqItem[] = [
  {
    question: "Is it really free?",
    answer:
      "Yes. Listing your business on Gathbandhan is completely free. No listing fees, no commission on bookings.",
  },
  {
    question: "How do couples contact me?",
    answer:
      "Couples call, WhatsApp, or email you directly using the contact details on your listing. Nothing routes through us.",
  },
  {
    question: "Can I update my listing later?",
    answer:
      "Yes. Contact us with the changes you want and we'll update your listing for you — there's no vendor login yet.",
  },
  {
    question: "How do I get verified?",
    answer:
      "Once you submit your listing, our team calls you to confirm your details. Verified listings show a badge on your profile.",
  },
  {
    question: "How long does it take to go live?",
    answer: "Most listings are published within 24 hours of submission, once verified.",
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      <Section background="tint" className="text-center">
        <div className="mx-auto max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-500">
            How It Works
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 md:text-5xl">
            From listing to inquiry
          </h1>
          <p className="mt-4 text-lg text-ink-500">
            Three steps, and the first one takes two minutes.
          </p>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          {STEPS.map((item, i) => {
            const photoRight = i % 2 === 1;
            return (
              <div
                key={item.step}
                className="overflow-hidden rounded-3xl border-card bg-white shadow-card"
              >
                <div className="md:flex">
                  <div
                    className={`relative min-h-[240px] md:w-1/2 ${
                      photoRight ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`flex flex-col justify-center p-8 md:w-1/2 md:p-12 ${
                      photoRight ? "md:order-1" : ""
                    }`}
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-ink-900">
                      {item.title}
                    </h2>
                    <p className="mb-4 text-ink-500">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.items.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-center gap-2 text-sm text-ink-700"
                        >
                          <Check
                            className="h-4 w-4 shrink-0 text-lime-600"
                            strokeWidth={2.5}
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section id="faq" background="tint" width="narrow">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <FaqAccordion items={FAQS} />
      </Section>

      <CtaSection
        title="Ready to get started?"
        subtitle="List your business for free and start getting inquiries."
        primary={{ label: "List Your Business — Free", href: "/signup" }}
      />
    </div>
  );
}
