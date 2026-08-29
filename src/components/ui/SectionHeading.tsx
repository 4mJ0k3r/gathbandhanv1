import { type ReactNode } from "react";

type Align = "center" | "left";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: Align;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClasses} mb-12`}>
      {eyebrow && (
        <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mt-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-ink-500 mt-4 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
