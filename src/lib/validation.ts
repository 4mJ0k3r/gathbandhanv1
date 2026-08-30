import { z } from "zod";
import { VENDOR_CATEGORIES } from "@/lib/constants";
import type { VendorCategory } from "@/lib/types";

export const vendorSchema = z.object({
  business_name: z
    .string()
    .trim()
    .min(2, "Business name must be at least 2 characters")
    .max(150, "Business name must be under 150 characters"),
  category: z.enum(VENDOR_CATEGORIES as [VendorCategory, ...VendorCategory[]], {
    message: "Please select a category",
  }),
  contact_person: z
    .string()
    .trim()
    .min(2, "Contact person name is required")
    .max(100, "Contact person name must be under 100 characters"),
  phone: z
    .string()
    .trim()
    .regex(/^\+91[0-9]{10}$/, "Enter a valid phone number (e.g., +919876543210)"),
  email: z.email("Enter a valid email address").toLowerCase().trim(),
  instagram: z
    .string()
    .optional()
    .transform((val) => {
      if (!val || val.trim() === "") return undefined;
      return val.replace(/^@/, "").trim().toLowerCase();
    }),
  starting_price: z
    .union([z.literal(""), z.coerce.number().int().positive()])
    .optional()
    .transform((val) => (val === "" || val === undefined ? undefined : val)),
  portfolio_url: z
    .union([z.literal(""), z.url("Enter a full URL starting with https://")])
    .optional()
    .transform((val) => (val === "" ? undefined : val)),
  description: z
    .string()
    .max(500, "Description must be under 500 characters")
    .optional()
    .transform((val) => (val && val.trim() !== "" ? val.trim() : undefined)),
  _honeypot: z.string().optional(), // anti-spam hidden field
});

export type VendorFormInput = z.input<typeof vendorSchema>;
export type VendorFormData = z.output<typeof vendorSchema>;

export const contactSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(60),
  last_name: z.string().trim().min(1, "Last name is required").max(60),
  email: z.email("Enter a valid email address").toLowerCase().trim(),
  subject: z.enum(["general", "vendor", "inquiry", "partnership", "other"], {
    message: "Please select a topic",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  _honeypot: z.string().optional(),
});

export type ContactFormInput = z.input<typeof contactSchema>;
