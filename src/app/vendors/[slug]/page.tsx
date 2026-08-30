import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, AtSign, BadgeCheck, Mail, Phone } from "lucide-react";
import Card from "@/components/ui/Card";
import PillButton from "@/components/ui/PillButton";
import StatBlock from "@/components/ui/StatBlock";
import VendorCard from "@/components/VendorCard";
import ViewCounter from "@/components/ViewCounter";
import { formatPrice, getCategoryLabel } from "@/lib/utils";
import { getVendorBySlug, getSimilarVendors } from "@/lib/vendors";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vendor = await getVendorBySlug(slug);

  if (!vendor) {
    return { title: "Vendor not found" };
  }

  const label = getCategoryLabel(vendor.category);
  return {
    title: vendor.business_name,
    description:
      vendor.description ??
      `${vendor.business_name} — ${label} in ${vendor.city}. Contact them directly on Gathbandhan.`,
  };
}

export default async function VendorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const vendor = await getVendorBySlug(slug);

  if (!vendor) notFound();

  const similar = await getSimilarVendors(vendor.category, vendor.slug, 3);
  const coverPhoto = vendor.photos?.[0] ?? null;
  const galleryPhotos = vendor.photos?.slice(1) ?? [];
  const whatsappMessage = encodeURIComponent(
    `Hi! I found your listing on Gathbandhan and I'm interested.`
  );
  const whatsappUrl = `https://wa.me/${vendor.phone.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  const contactRows = [
    { icon: Phone, label: vendor.phone, href: `tel:${vendor.phone}` },
    { icon: Mail, label: vendor.email, href: `mailto:${vendor.email}` },
    ...(vendor.instagram
      ? [
          {
            icon: AtSign,
            label: `@${vendor.instagram}`,
            href: `https://instagram.com/${vendor.instagram}`,
            external: true,
          },
        ]
      : []),
  ];

  return (
    <div className="bg-surface-tint">
      <ViewCounter slug={vendor.slug} />
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <Link
          href="/vendors"
          className="mb-6 inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-purple-500"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to all vendors
        </Link>

        <div className="mb-8 overflow-hidden rounded-3xl border-card bg-white shadow-card">
          <div className="md:flex">
            <div className="flex flex-col justify-between bg-surface-card p-8 md:w-2/5 md:p-10">
              <div>
                {vendor.is_verified && (
                  <span className="mb-4 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-purple-700">
                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    Verified
                  </span>
                )}
                <h1 className="text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
                  {vendor.business_name}
                </h1>
                <p className="mt-2 text-ink-500">
                  {getCategoryLabel(vendor.category)} · {vendor.city}
                </p>
                {vendor.description && (
                  <p className="mt-4 leading-relaxed text-ink-500">
                    {vendor.description}
                  </p>
                )}
              </div>

              <div className="mt-8">
                <PillButton href={whatsappUrl} fitWidth>
                  Enquire on WhatsApp
                </PillButton>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-purple-100/50 pt-6">
                <StatBlock
                  value={formatPrice(vendor.starting_price)}
                  label="Starting price"
                  tone="plain"
                />
                <StatBlock
                  value={String(vendor.view_count)}
                  label="Profile views"
                  tone="plain"
                />
              </div>
            </div>

            <div className="relative min-h-[300px] bg-surface-tint md:min-h-[480px] md:w-3/5">
              {coverPhoto ? (
                <Image
                  src={coverPhoto}
                  alt={`Work by ${vendor.business_name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-purple-200 to-purple-100 p-8">
                  <span className="text-center text-2xl font-semibold text-purple-500">
                    {vendor.business_name}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <Card padding="lg" className="mb-8">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-ink-900">
            Get in Touch
          </h2>
          <ul className="space-y-4">
            {contactRows.map((row) => {
              const Icon = row.icon;
              return (
                <li key={row.href}>
                  <a
                    href={row.href}
                    {...("external" in row && row.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-3 text-ink-700 transition-colors hover:text-purple-500"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-500">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="font-medium">{row.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          {vendor.portfolio_url && (
            <p className="mt-6 text-sm text-ink-500">
              More work:{" "}
              <a
                href={vendor.portfolio_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-purple-500 hover:underline"
              >
                {vendor.portfolio_url}
              </a>
            </p>
          )}
        </Card>

        {galleryPhotos.length > 0 && (
          <Card padding="lg" className="mb-8">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-ink-900">
              Portfolio
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {galleryPhotos.map((photo, i) => (
                <div
                  key={photo}
                  className="relative aspect-square overflow-hidden rounded-2xl bg-surface-tint"
                >
                  <Image
                    src={photo}
                    alt={`${vendor.business_name} portfolio photo ${i + 2}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Card>
        )}

        {similar.length > 0 && (
          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-ink-900">
              Similar {getCategoryLabel(vendor.category)}s in {vendor.city}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {similar.map((item) => (
                <VendorCard key={item.slug} vendor={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
