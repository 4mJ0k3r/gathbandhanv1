import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-tint border-t border-purple-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-xl font-bold text-purple-500">Gathbandhan</p>
            <p className="text-sm text-ink-500 mt-1">
              Wedding vendors in Kota, Rajasthan
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-sm font-semibold text-ink-700 mb-3">Vendors</p>
              <div className="space-y-2">
                <Link href="/vendors" className="block text-sm text-ink-500 hover:text-purple-500 transition-colors">Browse Vendors</Link>
                <Link href="/for-vendors" className="block text-sm text-ink-500 hover:text-purple-500 transition-colors">For Vendors</Link>
                <Link href="/signup" className="block text-sm text-ink-500 hover:text-purple-500 transition-colors">Join Free</Link>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-700 mb-3">Company</p>
              <div className="space-y-2">
                <Link href="/about" className="block text-sm text-ink-500 hover:text-purple-500 transition-colors">About</Link>
                <Link href="/how-it-works" className="block text-sm text-ink-500 hover:text-purple-500 transition-colors">How It Works</Link>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-700 mb-3">Legal</p>
              <div className="space-y-2">
                <span className="block text-sm text-ink-500">Privacy Policy</span>
                <span className="block text-sm text-ink-500">Terms of Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-100/50 mt-10 pt-6 text-center">
          <p className="text-sm text-ink-300">
            &copy; {new Date().getFullYear()} Gathbandhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
