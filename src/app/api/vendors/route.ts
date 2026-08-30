import { NextResponse } from "next/server";
import { findVendors } from "@/lib/vendors";

export const runtime = "nodejs";

const DEFAULT_LIMIT = 12;
const MAX_LIMIT = 50;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(parseInt(searchParams.get("page") || "1", 10) || 1, 1);
    const limit = Math.min(
      parseInt(searchParams.get("limit") || String(DEFAULT_LIMIT), 10) || DEFAULT_LIMIT,
      MAX_LIMIT
    );

    const result = await findVendors({
      category: searchParams.get("category"),
      search: searchParams.get("search")?.trim(),
      page,
      limit,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to fetch vendors:", error);
    return NextResponse.json(
      {
        vendors: [],
        pagination: { page: 1, limit: DEFAULT_LIMIT, total: 0, hasMore: false },
      },
      { status: 500 }
    );
  }
}
