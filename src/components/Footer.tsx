import Link from "next/link";
import { ToranBorder } from "@/components/ui/Motifs";
import { CITY } from "@/lib/constants";

const LINK_GROUPS = [
  {
    heading: "Vendors",
    links: [
      { label: "Browse Vendors", href: "/vendors" },
      { label: "For Vendors", href: "/for-vendors" },
      { label: "Join Free", href: "/signup" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-surface-tint">
      {/* Toran-inspired scalloped edge on the top of the footer only. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-2.5 overflow-hidden text-brand-500/45"
        aria-hidden="true"
      >
        <div className="flex h-2.5 w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <ToranBorder key={i} className="h-2.5 w-8 shrink-0" />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-14 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <Link href="/" className="font-display text-3xl text-brand-600">
              Gathbandhan
            </Link>
            <p className="mt-1 text-sm text-ink-500">Wedding vendors in {CITY}</p>
          </div>

          <div className="flex gap-12">
            {LINK_GROUPS.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <h2 className="mb-3 text-sm font-semibold text-ink-700">
                  {group.heading}
                </h2>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-500 transition-colors hover:text-brand-500"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-brand-100/50 pt-6 text-center">
          <p className="text-sm text-ink-400">
            &copy; {new Date().getFullYear()} Gathbandhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
