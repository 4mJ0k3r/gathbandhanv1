import Image from "next/image";
import PillButton from "@/components/ui/PillButton";
import StatBlock from "@/components/ui/StatBlock";
import { PaisleyDivider } from "@/components/ui/Motifs";
import CategoriesAndVendors from "@/components/CategoriesAndVendors";
import { CITY_SHORT, VENDOR_CATEGORIES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const HERO_STATS = [
  { value: String(VENDOR_CATEGORIES.length), label: "Vendor Categories" },
  { value: CITY_SHORT, label: "City We Serve" },
  { value: "0%", label: "Commission" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative h-[85vh] min-h-[560px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.heroCouple.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        <div className="animate-rise-in relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl font-display text-4xl font-normal leading-[1.15] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Find the Perfect
            <br />
            <span className="text-gold-300">Wedding Vendors</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Discover photographers, venues, makeup artists, and more for your
            wedding in {CITY_SHORT}.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PillButton href="/vendors" size="md">
              Explore Vendors
            </PillButton>
            <PillButton href="/how-it-works" size="md" variant="onDark">
              How It Works
            </PillButton>
          </div>

          <div className="mt-16 flex items-center gap-8 sm:gap-12">
            {HERO_STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
                {i > 0 && <div className="h-10 w-px bg-white/20" aria-hidden="true" />}
                <StatBlock value={stat.value} label={stat.label} tone="onDark" />
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-base to-transparent"
          aria-hidden="true"
        />
      </section>

      {/* Motif punctuation between the hero and the category panel. */}
      <div className="flex justify-center pt-14 text-brand-500/45">
        <PaisleyDivider className="h-9 w-52" />
      </div>

      <CategoriesAndVendors />

      <section className="px-6 pb-20 md:px-10">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl">
          <Image
            src={IMAGES.ceremonyRings.src}
            alt=""
            width={1200}
            height={500}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="h-64 w-full object-cover sm:h-80"
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <h2 className="font-display text-3xl font-normal text-white sm:text-4xl">
                Ready to Plan Your Big Day?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-lg text-white/80">
                Browse verified wedding vendors in {CITY_SHORT} and reach out
                directly.
              </p>
              <div className="mt-8">
                <PillButton href="/signup" size="md">
                  List Your Business — Free
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
