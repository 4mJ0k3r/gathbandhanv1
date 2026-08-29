import { Resend } from "resend";

function getApiKey(): string | undefined {
  return process.env.RESEND_API_KEY;
}

let resendClient: import("resend").Resend | null = null;

export function getResend(): import("resend").Resend {
  const key = getApiKey();
  if (!key) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  if (!resendClient) {
    resendClient = new Resend(key);
  }
  return resendClient;
}
