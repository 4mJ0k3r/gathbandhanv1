import Link from "next/link";
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
    <footer className="bg-surface-tint border-t border-purple-100/50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <Link href="/" className="font-display text-4xl text-purple-500">
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
                        className="text-sm text-ink-500 transition-colors hover:text-purple-500"
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

        <div className="mt-10 border-t border-purple-100/50 pt-6 text-center">
          <p className="text-sm text-ink-400">
            &copy; {new Date().getFullYear()} Gathbandhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
