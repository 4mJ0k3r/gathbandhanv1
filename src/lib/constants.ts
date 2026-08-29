import type { VendorCategory, VendorStatus } from "./types";

export type Category = VendorCategory;

export const VENDOR_CATEGORIES: readonly Category[] = [
  "photographer",
  "makeup",
  "decor",
  "venue",
  "mehendi",
  "choreographer",
  "cards",
  "catering",
];

export const VENDOR_STATUSES: readonly VendorStatus[] = ["pending", "approved", "rejected"];

export const CATEGORY_LABELS: Record<string, string> = {
  photographer: "Photographer",
  makeup: "Makeup Artist",
  decor: "Decorator",
  venue: "Venue",
  mehendi: "Mehendi Artist",
  choreographer: "Choreographer",
  cards: "Wedding Cards",
  catering: "Caterer",
};
