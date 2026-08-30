import type { VendorCategory, VendorStatus } from "./types";

/** The single city served in phase 1. Multi-city is deliberately out of scope. */
export const CITY = "Kota, Rajasthan";
export const CITY_SHORT = "Kota";

/** Contact details. Update these before launch — they appear on the contact page. */
export const CONTACT_EMAIL = "hello@gathbandhan.in";
export const CONTACT_PHONE = "+91 98765 43210";
export const CONTACT_HOURS = "Mon – Sat, 10am – 7pm IST";
export const FROM_EMAIL = "Gathbandhan <hello@gathbandhan.in>";

export const VENDOR_CATEGORIES: readonly VendorCategory[] = [
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

/** Singular label, for a single vendor's category line. */
export const CATEGORY_LABELS: Record<VendorCategory, string> = {
  photographer: "Photographer",
  makeup: "Makeup Artist",
  decor: "Decorator",
  venue: "Venue",
  mehendi: "Mehendi Artist",
  choreographer: "Choreographer",
  cards: "Wedding Cards",
  catering: "Caterer",
};

/** Plural label, for filter pills and category grids. */
export const CATEGORY_LABELS_PLURAL: Record<VendorCategory, string> = {
  photographer: "Photographers",
  makeup: "Makeup Artists",
  decor: "Decorators",
  venue: "Venues",
  mehendi: "Mehendi Artists",
  choreographer: "Choreographers",
  cards: "Wedding Cards",
  catering: "Caterers",
};

/** Ready-made list for rendering category links and pills. */
export const CATEGORY_OPTIONS: readonly { value: VendorCategory; label: string }[] =
  VENDOR_CATEGORIES.map((value) => ({ value, label: CATEGORY_LABELS_PLURAL[value] }));
