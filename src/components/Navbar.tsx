"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PillButton from "@/components/ui/PillButton";

// ------------------------------------------------------------------
// Data
// ------------------------------------------------------------------

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
      { label: "Popular Cities", href: "/cities" },
      { label: "Categories", href: "/categories" },
      { label: "Community Picks", href: "/community-picks" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Wedding Venues", href: "/services/venues" },
      { label: "Decorators", href: "/services/decorators" },
      { label: "Photographers", href: "/services/photographers" },
      { label: "Invitations", href: "/services/invitations" },
      { label: "Catering", href: "/services/catering" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    label: "Categories",
    href: "/vendors",
    children: [
      { label: "All Categories", href: "/vendors" },
      { label: "Photographers", href: "/vendors?category=photographer" },
      { label: "Makeup Artists", href: "/vendors?category=makeup" },
      { label: "Decorators", href: "/vendors?category=decor" },
      { label: "Venues", href: "/vendors?category=venue" },
      { label: "Mehendi Artists", href: "/vendors?category=mehendi" },
      { label: "Choreographers", href: "/vendors?category=choreographer" },
      { label: "Wedding Cards", href: "/vendors?category=cards" },
      { label: "Caterers", href: "/vendors?category=catering" },
    ],
  },
  {
    label: "Resources",
    href: "/how-it-works",
    children: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Budget Guide", href: "/how-it-works#budget" },
      { label: "Vendor Tips", href: "/how-it-works#tips" },
      { label: "FAQ", href: "/how-it-works#faq" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story" },
      { label: "Team", href: "/about#team" },
      { label: "Blog", href: "/blog" },
      { label: "Press & Media", href: "/about#press" },
    ],
  },
];

// ------------------------------------------------------------------
// Component
// ------------------------------------------------------------------

export default function Navbar() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [pillMode, setPillMode] = useState(!isHomepage);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Scroll detection
  useEffect(() => {
    if (!isHomepage) {
      setPillMode(true);
      return;
    }
    const handleScroll = () => setPillMode(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setExpandedSections([]);
  }, [pathname]);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  return (
    <>
      {/* Backdrop for open dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
          pillMode ? "top-3 md:top-4" : "top-0"
        }`}
      >
        {/* Full-width outer wrapper */}
        <div className="w-full">
          {/* Inner content: max-width + pill styling */}
          <div
            className={`
              flex items-center transition-all duration-500 ease-out
              ${pillMode
                ? "max-w-6xl mx-auto bg-white rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] px-3 md:px-5 py-2"
                : "max-w-7xl mx-auto bg-transparent rounded-none shadow-none px-4 md:px-6"
              }
            `}
          >
            {/* ========== LEFT: Logo ========== */}
            <Link href="/" className="flex-shrink-0">
              <span
                className="text-5xl md:text-6xl tracking-tight transition-colors duration-500"
                style={{ fontFamily: '"Lavishly Yours", cursive' }}
              >
                <span className={pillMode ? "text-purple-500" : "text-white drop-shadow-sm"}>
                  Gathbandhan
                </span>
              </span>
            </Link>

            {/* Spacer pushes everything right */}
            <div className="flex-1" />

            {/* ========== RIGHT: Nav Links ========== */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`
                      text-base font-medium transition-colors duration-300
                      flex items-center gap-1 py-1 px-2 rounded-full
                      ${pillMode
                        ? "text-ink-700 hover:text-purple-500"
                        : "text-white/90 hover:text-white"
                      }
                      ${activeDropdown === item.label
                        ? pillMode
                          ? "text-purple-500 bg-purple-50"
                          : "text-white bg-white/10"
                        : ""
                      }
                    `}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {activeDropdown === item.label && item.children && (
                    <div
                      className="absolute top-full pt-2"
                      style={{ left: 0 }}
                    >
                      <div className="relative">
                        {/* Arrow */}
                        <div
                          className="absolute -top-1.5 w-3 h-3 bg-white rotate-45
                            border-l border-t border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                        />
                        <ul
                          className="bg-white rounded-2xl py-2 min-w-[200px]
                            shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08)]
                            border border-gray-50"
                        >
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-4 py-2.5 text-base text-ink-700
                                  hover:text-purple-500 hover:bg-purple-50
                                  transition-colors rounded-lg mx-1"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* ========== RIGHT: Search Bar (hidden on mobile) ========== */}
            <div className="hidden md:flex flex-1 justify-center px-4 lg:px-8">
              <div className="relative w-full max-w-md">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search vendors, services..."
                  className={`
                    w-full pl-10 pr-4 py-2 text-sm rounded-full
                    border transition-colors duration-500
                    focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500
                    placeholder:text-ink-300
                    ${pillMode
                      ? "bg-gray-50 border-gray-100 text-ink-700"
                      : "bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    }
                  `}
                />
              </div>
            </div>

            {/* ========== RIGHT: CTA ========== */}
            <div className="hidden lg:block">
              <PillButton href="/signup" size="sm">Join Free</PillButton>
            </div>

            {/* ========== Mobile Hamburger ========== */}
            <button
              className={`
                lg:hidden p-2 -mr-2 transition-colors duration-300 ml-2
                ${pillMode ? "text-ink-700" : "text-white"}
              `}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6h12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* ========== Mobile Menu ========== */}
          {mobileOpen && (
            <div className="lg:hidden mt-3 mx-3 bg-white rounded-3xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-50">
              {/* Search (mobile) */}
              <div className="p-4 pb-2 md:hidden">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search vendors, services..."
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-full bg-gray-50 border border-gray-100 text-ink-700 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Nav links with collapsible children */}
              <div className="px-4 py-2">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="border-b border-gray-50 last:border-b-0">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className="flex-1 py-3.5 text-ink-700 font-medium text-base hover:text-purple-500 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() => toggleSection(item.label)}
                          className="p-2 text-ink-300 hover:text-purple-500 transition-colors"
                          aria-expanded={expandedSections.includes(item.label)}
                        >
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${
                              expandedSections.includes(item.label) ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>
                    {item.children && expandedSections.includes(item.label) && (
                      <div className="pb-3 pl-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2.5 text-sm text-ink-500 hover:text-purple-500 transition-colors pl-2 border-l-2 border-gray-100 hover:border-purple-500"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="p-4 pt-2">
                <Link
                  href="/signup"
                  className="block w-full bg-purple-500 text-white text-center px-5 py-3 rounded-full font-semibold text-sm hover:bg-purple-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Join Free
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
