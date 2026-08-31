import { Check } from "lucide-react";
import type { Metadata } from "next";
import PillButton from "@/components/ui/PillButton";
import SplitHero from "@/components/ui/SplitHero";
import SignupFormSection from "@/components/SignupFormSection";
import { CITY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "List Your Business",
  description: `Add your wedding business to Gathbandhan for free and get discovered by couples in ${CITY}.`,
};

const BENEFITS = [
  "Free listing — no hidden costs",
  "No commission — keep 100% of what you earn",
  "Takes about 2 minutes to submit",
];

export default function SignupPage() {
  return (
    <div>
      <section className="mx-6 mt-4 md:mx-10">
        <SplitHero image={IMAGES.receptionTable} priority>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            For Vendors
          </span>
          <h1 className="mt-3 font-display text-4xl font-normal leading-[1.15] text-ink-900 md:text-5xl">
            List your business <span className="text-brand-500">for free</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Fill in your details and get discovered by couples planning their
            wedding in {CITY}.
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-sm text-ink-500">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <Check
                  className="h-5 w-5 shrink-0 text-gold-700"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <PillButton href="#signup-form" size="lg" fitWidth>
              Start Listing Now
            </PillButton>
          </div>
        </SplitHero>
      </section>

      <SignupFormSection />
    </div>
  );
}
