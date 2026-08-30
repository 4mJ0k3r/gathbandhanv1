import { NextResponse } from "next/server";
import { getFeaturedVendors } from "@/lib/vendors";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(parseInt(searchParams.get("limit") || "3", 10) || 3, 12);

  const vendors = await getFeaturedVendors(limit);
  return NextResponse.json({ vendors });
}
