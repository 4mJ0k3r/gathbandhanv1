import { type ReactNode } from "react";

type Align = "center" | "left";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: Align;
  /** Tightens the bottom margin where a section's content follows immediately. */
  tight?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tight = false,
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClasses} ${tight ? "mb-8" : "mb-12"}`}>
      {eyebrow && (
        <span className="text-brand-500 text-xs font-semibold tracking-widest uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-normal text-ink-900 mt-3 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-ink-500 mt-4 text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
