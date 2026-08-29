import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageOffset from "./PageOffset";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gathbandhan — Wedding Vendors in Kota, Rajasthan",
    template: "%s | Gathbandhan",
  },
  description:
    "Find the best wedding vendors in Kota, Rajasthan. Photographers, makeup artists, decorators, venues, and more.",
  keywords: ["wedding vendors", "Kota, Rajasthan", "photographers", "makeup artists", "wedding planners"],
  openGraph: {
    title: "Gathbandhan — Wedding Vendors in Kota, Rajasthan",
    description: "Find the best wedding vendors in Kota, Rajasthan.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Lavishly+Yours&family=Pinyon+Script&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-surface-base text-ink-900" style={{ fontFamily: '"DM Sans", sans-serif' }}>
        <Navbar />
        <PageOffset>
          <main className="flex-1">{children}</main>
        </PageOffset>
        <Footer />
      </body>
    </html>
  );
}
