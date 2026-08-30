import type { Metadata } from "next";
import { DM_Sans, Lavishly_Yours } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageOffset from "@/components/PageOffset";
import { CITY } from "@/lib/constants";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

// Script wordmark, used only for the Gathbandhan logo.
const lavishlyYours = Lavishly_Yours({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lavishly-yours",
});

export const metadata: Metadata = {
  title: {
    default: `Gathbandhan — Wedding Vendors in ${CITY}`,
    template: "%s | Gathbandhan",
  },
  description: `Find the best wedding vendors in ${CITY}. Photographers, makeup artists, decorators, venues, and more.`,
  keywords: ["wedding vendors", CITY, "photographers", "makeup artists", "wedding planners"],
  openGraph: {
    title: `Gathbandhan — Wedding Vendors in ${CITY}`,
    description: `Find the best wedding vendors in ${CITY}.`,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${dmSans.variable} ${lavishlyYours.variable}`}
    >
      <body className="min-h-full flex flex-col font-sans bg-surface-base text-ink-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-purple-500 focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <PageOffset>
          <main id="main" className="flex-1">{children}</main>
        </PageOffset>
        <Footer />
      </body>
    </html>
  );
}
