import { type ReactNode } from "react";

type Background = "base" | "tint";
type Width = "wide" | "narrow" | "prose";

interface SectionProps {
  children: ReactNode;
  background?: Background;
  /** `wide` for grids, `narrow` for centered CTAs, `prose` for body copy. */
  width?: Width;
  id?: string;
  className?: string;
}

const backgroundClasses: Record<Background, string> = {
  base: "bg-surface-base",
  tint: "bg-surface-tint",
};

const widthClasses: Record<Width, string> = {
  wide: "max-w-7xl",
  narrow: "max-w-3xl",
  prose: "max-w-xl",
};

export default function Section({
  children,
  background = "base",
  width = "wide",
  id,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${backgroundClasses[background]} ${className}`}>
      <div className={`${widthClasses[width]} mx-auto px-6 md:px-10`}>{children}</div>
    </section>
  );
}
