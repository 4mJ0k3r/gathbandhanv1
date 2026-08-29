import Link from "next/link";
import { getCollection } from "@/lib/mongodb";

async function getFeaturedVendors() {
  try {
    const vendors = await getCollection<any>("vendors");
    const items = await vendors
      .find({ status: "approved" })
      .project({ _id: 1, slug: 1, business_name: 1, category: 1, city: 1, starting_price: 1, photos: 1, is_verified: 1, view_count: 1 })
      .sort({ view_count: -1 })
      .limit(3)
      .toArray();
    return items.map(v => ({ ...v, _id: v._id?.toString() }));
  } catch {
    return [];
  }
}

export default async function ThankYouPage() {
  const featured = await getFeaturedVendors();

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-tint py-12">
      <div className="max-w-lg mx-auto px-6 md:px-10 text-center">
        <div className="w-20 h-20 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">Thank you for signing up!</h1>
        <p className="text-ink-500 mt-4 text-lg leading-relaxed">
          Our team will review your listing within 24 hours. We&apos;ll reach out on the phone number you provided once it&apos;s live.
        </p>

        <div className="mt-10 space-y-3">
          {[
            "We verify your details",
            "Your listing goes live",
            "Couples start reaching out",
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-purple-100/30">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                {i + 1}
              </div>
              <p className="text-ink-700 text-sm text-left">{step}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center mt-10">
          <Link href="/vendors" className="bg-white text-purple-500 border-2 border-purple-500 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
            Browse Vendors
          </Link>
          <Link href="/" className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
