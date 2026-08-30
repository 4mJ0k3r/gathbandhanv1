import { NextResponse } from "next/server";
import { getVendorsCollection } from "@/lib/vendors";

export const runtime = "nodejs";

/** Fire-and-forget view counter, called from the vendor profile page. */
export async function POST(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const vendors = await getVendorsCollection();
    await vendors.updateOne({ slug, status: "approved" }, { $inc: { view_count: 1 } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to record vendor view:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
