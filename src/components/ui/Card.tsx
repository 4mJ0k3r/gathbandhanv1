import { type ReactNode } from "react";

type Padding = "sm" | "md" | "lg";

interface CardProps {
  children: ReactNode;
  /** `md` is the section-level card, `sm` the compact one. */
  padding?: Padding;
  className?: string;
}

const paddingClasses: Record<Padding, string> = {
  sm: "p-6",
  md: "p-8",
  lg: "p-8 md:p-10",
};

export default function Card({
  children,
  padding = "md",
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-3xl shadow-card border-card ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
