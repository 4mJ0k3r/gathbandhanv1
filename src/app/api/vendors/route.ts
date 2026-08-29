import { NextResponse } from "next/server";
import { getCollection } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = Math.min(parseInt(searchParams.get("limit") || "12", 10), 50);
    const category = searchParams.get("category");
    const search = searchParams.get("search")?.trim();

    const vendors = await getCollection<any>("vendors");

    const filter: Record<string, unknown> = { status: "approved" };
    if (category && category !== "all") filter.category = category;
    if (search) filter.business_name = { $regex: search, $options: "i" };

    const skip = (page - 1) * limit;
    const cursor = vendors.find(filter).sort({ view_count: -1 }).skip(skip).limit(limit);
    const items = await cursor.toArray();

    const total = await vendors.countDocuments(filter);
    const hasMore = skip + items.length < total;

    return NextResponse.json({
      vendors: items.map((v) => ({ ...v, _id: v._id?.toString() })),
      pagination: { page, limit, total, hasMore },
    });
  } catch (error) {
    console.error("Failed to fetch vendors:", error);
    return NextResponse.json({ vendors: [], pagination: { page: 1, limit: 12, total: 0, hasMore: false } });
  }
}
