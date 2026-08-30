import { after, NextResponse } from "next/server";
import { getResend } from "@/lib/email";
import { vendorSchema } from "@/lib/validation";
import { generateSlug } from "@/lib/utils";
import { CITY, FROM_EMAIL } from "@/lib/constants";
import { getVendorsCollection } from "@/lib/vendors";
import { notifyVendorSubmission } from "@/lib/sheets-notify";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Anti-spam: silently accept if the hidden honeypot field is filled.
    if (body._honeypot && String(body._honeypot).trim() !== "") {
      return NextResponse.json({ success: true });
    }

    const validated = vendorSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { success: false, errors: validated.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const {
      business_name,
      category,
      contact_person,
      phone,
      email,
      instagram,
      starting_price,
      portfolio_url,
      description,
    } = validated.data;

    const vendors = await getVendorsCollection();
    const existing = await vendors.findOne({ $or: [{ phone }, { email }] });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          errors: { email: "This email or phone number is already registered." },
        },
        { status: 409 }
      );
    }

    const allSlugs = await vendors.distinct("slug");
    const slug = generateSlug(business_name, allSlugs as string[]);
    const now = new Date();

    const result = await vendors.insertOne({
      slug,
      business_name,
      category,
      city: CITY,
      contact_person,
      phone,
      email,
      instagram,
      starting_price,
      portfolio_url,
      description,
      photos: [],
      status: "pending",
      is_verified: false,
      is_featured: false,
      claimed_by_vendor: false,
      view_count: 0,
      inquiry_count: 0,
      created_at: now,
      updated_at: now,
    });

    // A failed confirmation email must not fail the submission.
    try {
      await getResend().emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: "You're on the list — Gathbandhan",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #8B5CF6;">Thanks, ${contact_person}!</h1>
            <p>We've received your listing for <strong>${business_name}</strong> in <strong>${CITY}</strong>.</p>
            <p>Here's what happens next:</p>
            <ol>
              <li>We'll review your listing within 24 hours</li>
              <li>Your listing goes live on the platform</li>
              <li>We'll give you a call this week to say hi</li>
            </ol>
            <p>Questions? Just reply to this email.</p>
            <hr style="margin: 24px 0; border: none; border-top: 1px solid #E4E4E7;" />
            <p style="color: #6B7280; font-size: 14px;">— The Gathbandhan Team</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
    }

    // Secondary notification path: mirror the submission to the owner's
    // Google Sheet. Runs after the response is sent, fire-and-forget — a
    // Sheets failure must not fail the submission, so it only logs.
    after(() => notifyVendorSubmission(validated.data));

    return NextResponse.json({ success: true, vendor_id: result.insertedId.toString() });
  } catch (error) {
    console.error("Error in submit-listing:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong on our end. We'll get back to you shortly.",
      },
      { status: 500 }
    );
  }
}
