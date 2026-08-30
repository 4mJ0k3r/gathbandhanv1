import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "onDark";
type Size = "sm" | "md" | "lg";

interface PillButtonProps {
  children: ReactNode;
  /** Renders a Link. Omit and pass onClick to render a button instead. */
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  type?: "button" | "submit";
  disabled?: boolean;
  /** Shrinks to content width inside a flex column. */
  fitWidth?: boolean;
  className?: string;
}

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3.5",
  lg: "px-8 py-4 text-lg",
};

const variantClasses: Record<Variant, string> = {
  primary: "bg-purple-500 text-white hover:bg-purple-600",
  secondary:
    "bg-white text-purple-500 border-2 border-purple-500 hover:bg-purple-50",
  outline:
    "bg-white text-ink-700 border border-purple-100 hover:border-purple-300 hover:text-purple-500",
  onDark:
    "bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20",
};

export default function PillButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  fitWidth = false,
  className = "",
}: PillButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2",
    sizeClasses[size],
    variantClasses[variant],
    fitWidth ? "w-fit" : "",
    disabled ? "opacity-60 cursor-not-allowed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
