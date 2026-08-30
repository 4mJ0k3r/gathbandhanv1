import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PillButton from "@/components/ui/PillButton";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your Gathbandhan listing has been submitted for review.",
  robots: { index: false },
};

const NEXT_STEPS = [
  "We verify your details over a quick call",
  "Your listing goes live within 24 hours",
  "Couples start reaching out to you directly",
];

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-surface-tint py-20">
      <div className="mx-auto max-w-lg px-6 text-center md:px-10">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-50">
          <CheckCircle2
            className="h-10 w-10 text-purple-500"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
          Thank you for signing up!
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-500">
          Our team will review your listing within 24 hours. We&apos;ll reach out
          on the phone number you provided once it&apos;s live.
        </p>

        <ol className="mt-10 space-y-3 text-left">
          {NEXT_STEPS.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-4 rounded-2xl border-card bg-white p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm text-ink-700">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <PillButton href="/" size="md">
            Back to Home
          </PillButton>
          <PillButton href="/vendors" size="md" variant="secondary">
            Browse Vendors
          </PillButton>
        </div>
      </div>
    </div>
  );
}
