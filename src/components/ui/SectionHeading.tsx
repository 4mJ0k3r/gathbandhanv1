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
        <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mt-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-ink-500 mt-4 text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
