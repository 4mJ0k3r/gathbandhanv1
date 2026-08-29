import { z } from "zod";
import { Category, VENDOR_CATEGORIES } from "@/lib/constants";

export const vendorSchema = z.object({
  business_name: z
    .string()
    .min(2, "Business name must be at least 2 characters")
    .max(150, "Business name must be under 150 characters")
    .trim(),
  category: z.enum(VENDOR_CATEGORIES as [Category, ...Category[]], {
    message: "Please select a category",
  }),
  contact_person: z
    .string()
    .min(2, "Contact person name is required")
    .max(100, "Contact person name must be under 100 characters")
    .trim(),
  phone: z
    .string()
    .regex(/^\+91[0-9]{10}$/, "Enter a valid phone number (e.g., +919876543210)"),
  email: z.string().email("Enter a valid email address").toLowerCase().trim(),
  instagram: z
    .string()
    .optional()
    .transform((val) => {
      if (!val || val.trim() === "") return undefined;
      return val.replace(/^@/, "").trim().toLowerCase();
    }),
  starting_price: z.coerce
    .number()
    .int("Price must be a whole number")
    .positive("Price must be greater than 0")
    .optional(),
  portfolio_url: z.string().optional(),
  description: z
    .string()
    .max(500, "Description must be under 500 characters")
    .optional()
    .or(z.literal("")),
  _honeypot: z.string().optional(), // anti-spam hidden field
});

export type VendorFormInput = z.infer<typeof vendorSchema>;
