"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { vendorSchema, type VendorFormInput } from "@/lib/validation";
import { CATEGORY_OPTIONS, CITY } from "@/lib/constants";

const FIELD_BASE =
  "w-full rounded-xl border bg-white px-4 py-3 text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40";

function fieldClasses(hasError: boolean) {
  return `${FIELD_BASE} ${hasError ? "border-red-500" : "border-ink-200"}`;
}

export default function SignupForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<VendorFormInput>({
    resolver: zodResolver(vendorSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: VendorFormInput) => {
    setServerError(null);

    try {
      const res = await fetch("/api/submit-listing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        router.push("/thank-you");
        return;
      }

      if (result.errors) {
        // Surface server-side field errors next to the offending inputs.
        for (const [field, messages] of Object.entries(
          result.errors as Record<string, string | string[]>
        )) {
          const message = Array.isArray(messages) ? messages[0] : messages;
          if (message) {
            setError(field as keyof VendorFormInput, { type: "server", message });
          }
        }
        setServerError("Please fix the highlighted fields and try again.");
        return;
      }

      setServerError(result.message || "Something went wrong. Please try again.");
    } catch {
      setServerError("Can't reach the server. Check your connection and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input
        type="text"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        {...register("_honeypot")}
      />

      <div aria-live="polite">
        {serverError && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            {serverError}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="business_name" className="mb-1 block text-sm font-medium text-ink-700">
          Business Name <span className="text-red-500">*</span>
        </label>
        <input
          id="business_name"
          {...register("business_name")}
          aria-invalid={!!errors.business_name}
          className={fieldClasses(!!errors.business_name)}
          placeholder="Your business name"
        />
        {errors.business_name && (
          <p className="mt-1 text-sm text-red-500">{errors.business_name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="mb-1 block text-sm font-medium text-ink-700">
          Category <span className="text-red-500">*</span>
        </label>
        <select
          id="category"
          {...register("category")}
          aria-invalid={!!errors.category}
          className={fieldClasses(!!errors.category)}
          defaultValue=""
        >
          <option value="">Select a category</option>
          {CATEGORY_OPTIONS.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact_person" className="mb-1 block text-sm font-medium text-ink-700">
          Contact Person <span className="text-red-500">*</span>
        </label>
        <input
          id="contact_person"
          {...register("contact_person")}
          aria-invalid={!!errors.contact_person}
          className={fieldClasses(!!errors.contact_person)}
          placeholder="Your name"
        />
        {errors.contact_person && (
          <p className="mt-1 text-sm text-red-500">{errors.contact_person.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          aria-invalid={!!errors.phone}
          className={fieldClasses(!!errors.phone)}
          placeholder="+919876543210"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          className={fieldClasses(!!errors.email)}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="instagram" className="mb-1 block text-sm font-medium text-ink-700">
          Instagram
        </label>
        <input
          id="instagram"
          {...register("instagram")}
          className={fieldClasses(!!errors.instagram)}
          placeholder="@yourhandle"
        />
        {errors.instagram && (
          <p className="mt-1 text-sm text-red-500">{errors.instagram.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="starting_price" className="mb-1 block text-sm font-medium text-ink-700">
          Starting Price (INR)
        </label>
        <input
          id="starting_price"
          type="number"
          min={1}
          {...register("starting_price")}
          className={fieldClasses(!!errors.starting_price)}
          placeholder="25000"
        />
        {errors.starting_price && (
          <p className="mt-1 text-sm text-red-500">{errors.starting_price.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="portfolio_url" className="mb-1 block text-sm font-medium text-ink-700">
          Portfolio Link
        </label>
        <input
          id="portfolio_url"
          type="url"
          {...register("portfolio_url")}
          className={fieldClasses(!!errors.portfolio_url)}
          placeholder="https://..."
        />
        {errors.portfolio_url && (
          <p className="mt-1 text-sm text-red-500">{errors.portfolio_url.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="mb-1 block text-sm font-medium text-ink-700">
          Description
        </label>
        <textarea
          id="description"
          rows={3}
          {...register("description")}
          className={`${fieldClasses(!!errors.description)} resize-none`}
          placeholder="Tell couples about your business..."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      <p className="text-sm text-ink-500">
        Listings are for vendors based in {CITY}.
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-purple-500 py-3.5 font-semibold text-white transition-colors hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-purple-300"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          "Submit Listing"
        )}
      </button>
    </form>
  );
}
