import Link from "next/link";
import { SearchX } from "lucide-react";
import PillButton from "@/components/ui/PillButton";
import { CITY } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-surface-tint py-20">
      <div className="mx-auto max-w-lg px-6 text-center md:px-10">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-50">
          <SearchX
            className="h-8 w-8 text-purple-500"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-ink-500">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <PillButton href="/" size="md">
            Back to Home
          </PillButton>
          <PillButton href="/vendors" size="md" variant="secondary">
            Browse Vendors
          </PillButton>
        </div>
        <p className="mt-6 text-sm text-ink-500">
          Are you a vendor in {CITY}?{" "}
          <Link href="/signup" className="font-medium text-purple-500 hover:underline">
            List your business
          </Link>
        </p>
      </div>
    </div>
  );
}
