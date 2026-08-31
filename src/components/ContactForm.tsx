"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { contactSchema, type ContactFormInput } from "@/lib/validation";

const FIELD_BASE =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40";

const SUBJECTS = [
  { value: "general", label: "General Inquiry" },
  { value: "vendor", label: "Vendor Listing" },
  { value: "inquiry", label: "Help Finding a Vendor" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
] as const;

function fieldClasses(hasError: boolean) {
  return `${FIELD_BASE} ${hasError ? "border-red-500" : "border-brand-100"}`;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormInput) => {
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("sent");
        reset();
        return;
      }

      setStatus("error");
      setErrorMessage(result.message || "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setErrorMessage("Can't reach the server. Check your connection and try again.");
    }
  };

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-gold-300 bg-gold-100 p-8 text-center"
      >
        <h3 className="text-lg font-semibold text-ink-900">Message sent</h3>
        <p className="mt-2 text-sm text-ink-700">
          Thanks for reaching out — we&apos;ll reply within 24 hours.
        </p>
      </div>
    );
  }

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
        {errorMessage && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            {errorMessage}
          </div>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first_name" className="mb-1.5 block text-sm font-medium text-ink-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="first_name"
            {...register("first_name")}
            aria-invalid={!!errors.first_name}
            className={fieldClasses(!!errors.first_name)}
            placeholder="Priya"
          />
          {errors.first_name && (
            <p className="mt-1 text-sm text-red-500">{errors.first_name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="last_name" className="mb-1.5 block text-sm font-medium text-ink-700">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="last_name"
            {...register("last_name")}
            aria-invalid={!!errors.last_name}
            className={fieldClasses(!!errors.last_name)}
            placeholder="Sharma"
          />
          {errors.last_name && (
            <p className="mt-1 text-sm text-red-500">{errors.last_name.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact_email" className="mb-1.5 block text-sm font-medium text-ink-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="contact_email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          className={fieldClasses(!!errors.email)}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink-700">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          {...register("subject")}
          aria-invalid={!!errors.subject}
          className={fieldClasses(!!errors.subject)}
          defaultValue=""
        >
          <option value="">Select a topic</option>
          {SUBJECTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
          className={`${fieldClasses(!!errors.message)} resize-none`}
          placeholder="Tell us how we can help..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-brand-300"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
