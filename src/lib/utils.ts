import type { VendorCard, VendorCategory } from "./types";
import { CATEGORY_LABELS } from "./constants";

export function generateSlug(businessName: string, existingSlugs: string[]): string {
  const base = businessName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  let slug = base;
  let counter = 2;
  while (existingSlugs.includes(slug)) {
    slug = `${base}-${counter}`;
    counter++;
  }
  return slug;
}

export function formatPrice(price: number | undefined): string {
  if (!price || price <= 0) return "Price on request";
  return "₹" + price.toLocaleString("en-IN");
}

export function getCategoryLabel(category: string): string {
  return CATEGORY_LABELS[category] || category;
}

export function sortVendors(vendors: VendorCard[]): VendorCard[] {
  return [...vendors].sort((a, b) => {
    if (a.is_verified !== b.is_verified) return b.is_verified ? 1 : -1;
    return (b.view_count || 0) - (a.view_count || 0);
  });
}
