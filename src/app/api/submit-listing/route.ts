import { NextResponse } from "next/server";
import { getCollection } from "@/lib/mongodb";
import { getResend } from "@/lib/email";
import { vendorSchema } from "@/lib/validation";
import { generateSlug } from "@/lib/utils";
import { VENDOR_CATEGORIES, VENDOR_STATUSES } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Anti-spam: silently reject if honeypot is filled
    if (body._honeypot && body._honeypot.trim() !== "") {
      return NextResponse.json({ success: true }); // fake success to confuse bots
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

    // Check for duplicate phone or email
    const vendors = await getCollection("vendors");
    const existing = await vendors.findOne({
      $or: [
        { phone: { $regex: `^${phone.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, $options: "i" } },
        { email: email.toLowerCase() },
      ],
    });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          errors: {
            email: "This email or phone number is already registered.",
          },
        },
        { status: 409 }
      );
    }

    // Generate unique slug
    const allSlugs = (await vendors.distinct("slug")) as string[];
    const slug = generateSlug(business_name, allSlugs);

    // Clean up optional fields
    const portfolio = portfolio_url && portfolio_url.trim() !== "" ? portfolio_url.trim() : undefined;
    const desc = description && description.trim() !== "" ? description.trim() : undefined;

    // City is fixed to Kota, Rajasthan
    const cityValue = "Kota, Rajasthan";

    const vendor = {
      slug,
      business_name: business_name.trim(),
      category: VENDOR_CATEGORIES.includes(category) ? category : "other",
      city: cityValue,
      contact_person: contact_person.trim(),
      phone: phone.trim(),
      email: email.toLowerCase(),
      instagram,
      starting_price: starting_price ?? undefined,
      portfolio_url: portfolio,
      description: desc,
      photos: [],
      status: VENDOR_STATUSES[0], // "pending"
      is_verified: false,
      is_featured: false,
      claimed_by_vendor: false,
      view_count: 0,
      inquiry_count: 0,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const result = await vendors.insertOne(vendor);
    const vendorId = result.insertedId.toString();

    // Send confirmation email to vendor
    try {
      const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

      await getResend().emails.send({
        from: "Gathbandhan <hello@gathbandhan.in>",
        to: [email],
        subject: "You're on the list — Gathbandhan",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #c81d5e;">Thanks, ${contact_person}!</h1>
            <p>We've received your listing for <strong>${business_name}</strong> in <strong>Kota, Rajasthan</strong>.</p>
            <p>Here's what happens next:</p>
            <ol>
              <li>We'll review your listing within 24 hours</li>
              <li>Your listing goes live on the platform</li>
              <li>We'll give you a call this week to say hi</li>
            </ol>
            <p>Questions? Reply to this email or WhatsApp us.</p>
            <hr style="margin: 24px 0;" />
            <p style="color: #666; font-size: 14px;">— The Gathbandhan Team</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
    }

    return NextResponse.json(
      { success: true, vendor_id: vendorId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in submit-listing:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong on our end. We'll get back to you shortly." },
      { status: 500 }
    );
  }
}
