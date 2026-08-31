"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import PillButton from "@/components/ui/PillButton";
import { CATEGORY_OPTIONS } from "@/lib/constants";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Browse Vendors",
    href: "/vendors",
    children: [
      { label: "All Vendors", href: "/vendors" },
      ...CATEGORY_OPTIONS.map((cat) => ({
        label: cat.label,
        href: `/vendors?category=${cat.value}`,
      })),
    ],
  },
  { label: "For Vendors", href: "/for-vendors" },
  { label: "How It Works", href: "/how-it-works" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
];

const SCROLL_THRESHOLD = 20;

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** Subscribes to window scroll without a state-syncing effect. */
function useHasScrolled() {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > SCROLL_THRESHOLD,
    () => false
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const hasScrolled = useHasScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const navRef = useRef<HTMLElement>(null);

  // The transparent overlay style only applies to the homepage hero.
  const pillMode = pathname !== "/" || hasScrolled;

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Escape closes an open dropdown; a click or focus outside the nav does too.
  useEffect(() => {
    if (!activeDropdown) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDropdown(null);
    };
    const handleOutside = (e: Event) => {
      if (!navRef.current?.contains(e.target as Node)) setActiveDropdown(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutside);
    document.addEventListener("focusin", handleOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutside);
      document.removeEventListener("focusin", handleOutside);
    };
  }, [activeDropdown]);

  const closeMenus = () => {
    setMobileOpen(false);
    setExpandedSections([]);
    setActiveDropdown(null);
  };

  const toggleSection = (label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = search.trim();
    router.push(q ? `/vendors?search=${encodeURIComponent(q)}` : "/vendors");
    closeMenus();
  };

  const searchIconClasses =
    "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400 pointer-events-none";

  return (
    <nav
      ref={navRef}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
        pillMode ? "top-3 md:top-4" : "top-0"
      }`}
    >
      <div className="w-full">
        <div
          className={`flex items-center transition-all duration-500 ease-out ${
            pillMode
              ? "max-w-6xl mx-auto bg-white rounded-full shadow-card px-3 md:px-5 py-2"
              : "max-w-7xl mx-auto bg-transparent px-4 md:px-6"
          }`}
        >
          <Link href="/" className="flex-shrink-0" onClick={closeMenus}>
            <span
              className={`font-display text-3xl tracking-tight transition-colors duration-500 md:text-4xl ${
                pillMode ? "text-brand-600" : "text-white drop-shadow-sm"
              }`}
            >
              Gathbandhan
            </span>
          </Link>

          <div className="flex-1" />

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isOpen = activeDropdown === item.label;
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={closeMenus}
                      className={`flex items-center rounded-full px-2 py-1 text-base font-medium transition-colors duration-300 ${
                        pillMode
                          ? "text-ink-700 hover:text-brand-500"
                          : "text-white/90 hover:text-white"
                      } ${
                        isOpen
                          ? pillMode
                            ? "text-brand-500 bg-brand-50"
                            : "text-white bg-white/10"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        aria-label={`${item.label} menu`}
                        className={`rounded-full p-1 transition-colors ${
                          pillMode
                            ? "text-ink-700 hover:text-brand-500"
                            : "text-white/90 hover:text-white"
                        }`}
                      >
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </span>

                  {isOpen && item.children && (
                    <div className="absolute left-0 top-full pt-2">
                      <ul className="min-w-[200px] rounded-2xl border border-ink-100 bg-white py-2 shadow-card">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={closeMenus}
                              className="mx-1 block rounded-lg px-4 py-2.5 text-base text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-500"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <form
            onSubmit={submitSearch}
            role="search"
            className="hidden md:flex flex-1 justify-center px-4 lg:px-8"
          >
            <div className="relative w-full max-w-md">
              <label htmlFor="nav-search" className="sr-only">
                Search vendors
              </label>
              <Search className={searchIconClasses} aria-hidden="true" />
              <input
                id="nav-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search vendors..."
                className={`w-full rounded-full border py-2 pl-10 pr-4 text-sm transition-colors duration-500 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40 ${
                  pillMode
                    ? "bg-ink-100 border-ink-100 text-ink-700"
                    : "bg-white/10 border-white/30 text-white placeholder:text-white/70"
                }`}
              />
              {/* A submit control makes Enter submit reliably in every engine. */}
              <button type="submit" className="sr-only">
                Search
              </button>
            </div>
          </form>

          <div className="hidden lg:block">
            <PillButton href="/signup" size="sm">
              Join Free
            </PillButton>
          </div>

          <button
            type="button"
            className={`ml-2 -mr-2 p-2 transition-colors duration-300 lg:hidden ${
              pillMode ? "text-ink-700" : "text-white"
            }`}
            onClick={() => (mobileOpen ? closeMenus() : setMobileOpen(true))}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="mx-3 mt-3 overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card lg:hidden">
            <form onSubmit={submitSearch} role="search" className="p-4 pb-2 md:hidden">
              <div className="relative">
                <label htmlFor="mobile-search" className="sr-only">
                  Search vendors
                </label>
                <Search className={searchIconClasses} aria-hidden="true" />
                <input
                  id="mobile-search"
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search vendors..."
                  className="w-full rounded-full border border-ink-100 bg-ink-100 py-2.5 pl-10 pr-4 text-sm text-ink-700 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                />
                <button type="submit" className="sr-only">
                  Search
                </button>
              </div>
            </form>

            <div className="px-4 py-2">
              {NAV_ITEMS.map((item) => {
                const isExpanded = expandedSections.includes(item.label);
                return (
                  <div key={item.label} className="border-b border-ink-100 last:border-b-0">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className="flex-1 py-3.5 text-base font-medium text-ink-700 transition-colors hover:text-brand-500"
                        onClick={closeMenus}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          type="button"
                          onClick={() => toggleSection(item.label)}
                          className="p-2 text-ink-400 transition-colors hover:text-brand-500"
                          aria-expanded={isExpanded}
                          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label}`}
                        >
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      )}
                    </div>
                    {item.children && isExpanded && (
                      <ul className="space-y-1 pb-3 pl-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block border-l-2 border-ink-100 py-2.5 pl-2 text-sm text-ink-500 transition-colors hover:border-brand-500 hover:text-brand-500"
                              onClick={closeMenus}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-4 pt-2">
              <PillButton href="/signup" size="sm" className="w-full">
                Join Free
              </PillButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
