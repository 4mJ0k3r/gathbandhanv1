"use client";

import { useState, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { type VendorFormInput } from "@/lib/validation";
import { CATEGORY_LABELS } from "@/lib/constants";

interface SignupFormProps {
  preselectedCategory?: string;
  onSuccess?: () => void;
}

export default function SignupForm({ preselectedCategory, onSuccess }: SignupFormProps) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VendorFormInput>({
    
    defaultValues: {
      ...(preselectedCategory && { category: preselectedCategory as VendorFormInput["category"] }),
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: Record<string, unknown>) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/submit-listing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        reset();
        onSuccess?.();
      } else if (result.errors) {
        // Field-level errors handled by react-hook-form
      } else {
        setServerError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Can't reach the server. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-xl font-semibold text-green-800">You&apos;re on the list!</h3>
        <p className="text-green-600 mt-2">
          We&apos;ll review your listing within 24 hours and get back to you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("_honeypot")} />

      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
          {serverError}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Business Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register("business_name")}
          className={`w-full px-4 py-3 rounded-xl border ${errors.business_name ? "border-red-500" : "border-gray-200"} focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition`}
          placeholder="Your business name"
        />
        {errors.business_name && <p className="text-red-500 text-sm mt-1">{errors.business_name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category <span className="text-red-500">*</span>
        </label>
        <select
          {...register("category")}
          className={`w-full px-4 py-3 rounded-xl border ${errors.category ? "border-red-500" : "border-gray-200"} focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition`}
        >
          <option value="">Select a category</option>
          {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Contact Person <span className="text-red-500">*</span>
        </label>
        <input
          {...register("contact_person")}
          className={`w-full px-4 py-3 rounded-xl border ${errors.contact_person ? "border-red-500" : "border-gray-200"} focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition`}
          placeholder="Your name"
        />
        {errors.contact_person && <p className="text-red-500 text-sm mt-1">{errors.contact_person.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          {...register("phone")}
          className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? "border-red-500" : "border-gray-200"} focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition`}
          placeholder="+919876543210"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          {...register("email")}
          type="email"
          className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-200"} focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition`}
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
        <input
          {...register("instagram")}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition"
          placeholder="@yourhandle"
        />
        {errors.instagram && <p className="text-red-500 text-sm mt-1">{errors.instagram.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Starting Price (INR)</label>
        <input
          {...register("starting_price")}
          type="number"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition"
          placeholder="25000"
        />
        {errors.starting_price && <p className="text-red-500 text-sm mt-1">{errors.starting_price.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio Link</label>
        <input
          {...register("portfolio_url")}
          className={`w-full px-4 py-3 rounded-xl border ${errors.portfolio_url ? "border-red-500" : "border-gray-200"} focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition`}
          placeholder="https://..."
        />
        {errors.portfolio_url && <p className="text-red-500 text-sm mt-1">{errors.portfolio_url.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          {...register("description")}
          rows={3}
          className={`w-full px-4 py-3 rounded-xl border ${errors.description ? "border-red-500" : "border-gray-200"} focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition resize-none`}
          placeholder="Tell couples about your business..."
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-rose-600 text-white py-3.5 rounded-full font-medium hover:bg-rose-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting...
          </>
        ) : (
          "Submit Listing →"
        )}
      </button>
    </form>
  );
}
