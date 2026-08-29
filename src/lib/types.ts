export interface VendorCard {
  _id?: string;
  slug: string;
  business_name: string;
  category: VendorCategory;
  city: string;
  starting_price?: number;
  photos: string[];
  description?: string;
  contact_person: string;
  phone: string;
  email: string;
  instagram?: string;
  portfolio_url?: string;
  is_verified: boolean;
  view_count: number;
  status: VendorStatus;
  _honeypot?: string;
  created_at: Date;
  updated_at: Date;
}

export interface VendorProfile extends VendorCard {
  instagram?: string;
  portfolio_url?: string;
}

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
