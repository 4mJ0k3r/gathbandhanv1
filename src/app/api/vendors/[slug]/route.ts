import { NextResponse } from "next/server";
import { getCollection } from "@/lib/mongodb";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const vendors = await getCollection<any>("vendors");
    const vendor = await vendors.findOne({ slug, status: "approved" });

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
    }

    await vendors.updateOne(
      { _id: vendor._id },
      { $inc: { view_count: 1 }, $set: { updated_at: new Date() } }
    );

    return NextResponse.json({
      ...vendor,
      _id: vendor._id?.toString(),
      view_count: (vendor.view_count || 0) + 1,
    });
  } catch (error) {
    console.error("Error fetching vendor:", error);
    return NextResponse.json({ error: "Failed to fetch vendor" }, { status: 500 });
  }
}
