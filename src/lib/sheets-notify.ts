import type { VendorFormData } from "@/lib/validation";

/**
 * Payload sent to the Apps Script Web App. Keys must exactly match the
 * header row of the Google Sheet; the script appends them as columns in
 * that order plus its own "Submitted At" timestamp.
 */
export interface VendorSheetPayload {
  "Business Name": string;
  Category: string;
  "Contact Person": string;
  "Phone Number": string;
  Email: string;
  Instagram: string;
  "Starting Price (INR)": string;
  "Portfolio Link": string;
  Description: string;
}

/**
 * Mirror a validated vendor submission to the owner's Google Sheet. This is a
 * secondary notification path — MongoDB stays the source of truth. Must be
 * scheduled with `after()` (not awaited): a Sheets failure or misconfiguration
 * must never block the MongoDB save or the vendor's success response, so every
 * error here is logged server-side only.
 */
export async function notifyVendorSubmission(
  data: VendorFormData
): Promise<void> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn(
      "[sheets-notify] GOOGLE_SHEETS_WEBHOOK_URL is not set; skipping Google Sheets notification."
    );
    return;
  }

  const payload: VendorSheetPayload = {
    "Business Name": data.business_name,
    Category: data.category,
    "Contact Person": data.contact_person,
    "Phone Number": data.phone,
    Email: data.email,
    Instagram: data.instagram ?? "",
    "Starting Price (INR)":
      data.starting_price === undefined ? "" : String(data.starting_price),
    "Portfolio Link": data.portfolio_url ?? "",
    Description: data.description ?? "",
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Bounded so a hanging webhook can't pin the request context.
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(
        `[sheets-notify] Google Sheets webhook returned ${response.status}.`
      );
    }
  } catch (error) {
    console.error("[sheets-notify] Failed to notify Google Sheets:", error);
  }
}
