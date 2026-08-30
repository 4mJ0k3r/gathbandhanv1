import type { WithId } from "mongodb";
import { getCollection } from "@/lib/mongodb";
import type {
  VendorCardData,
  VendorCategory,
  VendorProfileData,
  VendorStatus,
} from "@/lib/types";

/** Shape of a vendor document as stored in MongoDB. */
export interface VendorDoc {
  slug: string;
  business_name: string;
  category: VendorCategory;
  city: string;
  contact_person: string;
  phone: string;
  email: string;
  instagram?: string;
  starting_price?: number;
  portfolio_url?: string;
  description?: string;
  photos: string[];
  status: VendorStatus;
  is_verified: boolean;
  is_featured: boolean;
  claimed_by_vendor: boolean;
  view_count: number;
  inquiry_count: number;
  created_at: Date;
  updated_at: Date;
}

/**
 * Fields needed to render a vendor card. Contact details are deliberately
 * excluded so list endpoints can't be harvested for phone numbers and emails —
 * those are served only by the single-vendor lookup.
 */
const CARD_PROJECTION = {
  slug: 1,
  business_name: 1,
  category: 1,
  city: 1,
  starting_price: 1,
  photos: 1,
  is_verified: 1,
  view_count: 1,
} as const;

const PROFILE_PROJECTION = {
  ...CARD_PROJECTION,
  description: 1,
  phone: 1,
  email: 1,
  instagram: 1,
  portfolio_url: 1,
} as const;

/** Ranks verified vendors first, then by popularity. */
const RANKING = { is_verified: -1, view_count: -1 } as const;

export async function getVendorsCollection() {
  return getCollection<VendorDoc>("vendors");
}

function serialize<T extends { _id: unknown }>(doc: T) {
  const { _id, ...rest } = doc;
  return { ...rest, _id: String(_id) };
}

export function toVendorCard(doc: WithId<Partial<VendorDoc>>): VendorCardData {
  return serialize(doc) as unknown as VendorCardData;
}

export function toVendorProfile(doc: WithId<Partial<VendorDoc>>): VendorProfileData {
  return serialize(doc) as unknown as VendorProfileData;
}

export interface VendorQuery {
  category?: string | null;
  search?: string | null;
  page?: number;
  limit?: number;
}

export async function findVendors({
  category,
  search,
  page = 1,
  limit = 12,
}: VendorQuery) {
  const vendors = await getVendorsCollection();

  const filter: Record<string, unknown> = { status: "approved" };
  if (category && category !== "all") filter.category = category;
  if (search) {
    // Escape regex metacharacters so the query is matched literally.
    filter.business_name = {
      $regex: search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      $options: "i",
    };
  }

  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    vendors
      .find(filter)
      .project(CARD_PROJECTION)
      .sort(RANKING)
      .skip(skip)
      .limit(limit)
      .toArray(),
    vendors.countDocuments(filter),
  ]);

  return {
    vendors: items.map((doc) => toVendorCard(doc as WithId<Partial<VendorDoc>>)),
    pagination: { page, limit, total, hasMore: skip + items.length < total },
  };
}

/** Approved vendors with the most views. Shared by the homepage and API. */
export async function getFeaturedVendors(limit = 3): Promise<VendorCardData[]> {
  try {
    const vendors = await getVendorsCollection();
    const items = await vendors
      .find({ status: "approved" })
      .project(CARD_PROJECTION)
      .sort(RANKING)
      .limit(limit)
      .toArray();
    return items.map((doc) => toVendorCard(doc as WithId<Partial<VendorDoc>>));
  } catch (error) {
    console.error("Failed to fetch featured vendors:", error);
    return [];
  }
}

/** A single approved vendor, or null when the slug is unknown. */
export async function getVendorBySlug(
  slug: string
): Promise<VendorProfileData | null> {
  try {
    const vendors = await getVendorsCollection();
    const vendor = await vendors.findOne(
      { slug, status: "approved" },
      { projection: PROFILE_PROJECTION }
    );
    return vendor ? toVendorProfile(vendor as WithId<Partial<VendorDoc>>) : null;
  } catch (error) {
    console.error("Failed to fetch vendor:", error);
    return null;
  }
}

/** Other approved vendors in the same category, for the profile page footer. */
export async function getSimilarVendors(
  category: VendorCategory,
  excludeSlug: string,
  limit = 3
): Promise<VendorCardData[]> {
  try {
    const vendors = await getVendorsCollection();
    const items = await vendors
      .find({ status: "approved", category, slug: { $ne: excludeSlug } })
      .project(CARD_PROJECTION)
      .sort(RANKING)
      .limit(limit)
      .toArray();
    return items.map((doc) => toVendorCard(doc as WithId<Partial<VendorDoc>>));
  } catch (error) {
    console.error("Failed to fetch similar vendors:", error);
    return [];
  }
}
