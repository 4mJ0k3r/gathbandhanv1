import { getCollection } from "./mongodb";

export async function getFeaturedVendors(limit = 6) {
  try {
    const vendors = await getCollection<any>("vendors");
    const items = await vendors
      .find({ status: "approved" })
      .sort({ view_count: -1 })
      .limit(limit)
      .toArray();

    return items.map((v) => ({ ...v, _id: v._id?.toString() }));
  } catch {
    return [];
  }
}
