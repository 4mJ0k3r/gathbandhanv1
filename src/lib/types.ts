export type VendorCategory =
  | "photographer"
  | "makeup"
  | "decor"
  | "venue"
  | "mehendi"
  | "choreographer"
  | "cards"
  | "catering";

export type VendorStatus = "pending" | "approved" | "rejected";

/** Public fields for a listing card. No contact details. */
export interface VendorCardData {
  _id: string;
  slug: string;
  business_name: string;
  category: VendorCategory;
  city: string;
  starting_price?: number;
  photos: string[];
  is_verified: boolean;
  view_count: number;
}

/** Public fields for a profile page, including contact details. */
export interface VendorProfileData extends VendorCardData {
  description?: string;
  phone: string;
  email: string;
  instagram?: string;
  portfolio_url?: string;
}
