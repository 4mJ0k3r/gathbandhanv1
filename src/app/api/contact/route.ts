import { NextResponse } from "next/server";
import { getResend } from "@/lib/email";
import { contactSchema } from "@/lib/validation";
import { CONTACT_EMAIL, FROM_EMAIL } from "@/lib/constants";

export const runtime = "nodejs";

const SUBJECT_LABELS: Record<string, string> = {
  general: "General Inquiry",
  vendor: "Vendor Listing",
  inquiry: "Help Finding a Vendor",
  partnership: "Partnership",
  other: "Other",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body._honeypot && String(body._honeypot).trim() !== "") {
      return NextResponse.json({ success: true });
    }

    const validated = contactSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { success: false, errors: validated.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { first_name, last_name, email, subject, message } = validated.data;
    const name = `${first_name} ${last_name}`;
    const topic = SUBJECT_LABELS[subject] ?? subject;

    await getResend().emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `[${topic}] Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #8B5CF6; font-size: 20px;">New contact message</h1>
          <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
          <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #E4E4E7;" />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact message:", error);
    return NextResponse.json(
      {
        success: false,
        message: "We couldn't send your message. Please email us directly instead.",
      },
      { status: 500 }
    );
  }
}
