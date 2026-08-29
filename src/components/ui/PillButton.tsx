import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

interface PillButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md";
  onClick?: () => void;
}

const sizeClasses = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3",
};

const styles: Record<Variant, string> = {
  primary: "bg-purple-500 text-white hover:bg-purple-600",
  secondary: "bg-white text-purple-500 border-2 border-purple-500 hover:bg-purple-50",
  outline: "bg-transparent text-ink-600 border border-ink-200 hover:border-ink-300",
};

export default function PillButton({
  href,
  children,
  variant = "primary",
  size = "md",
  onClick,
}: PillButtonProps) {
  const className = `inline-block rounded-full font-medium transition-colors ${sizeClasses[size]} ${styles[variant]}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
