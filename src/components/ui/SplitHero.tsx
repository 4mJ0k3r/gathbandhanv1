import Image from "next/image";
import { type ReactNode } from "react";

interface SplitHeroProps {
  children: ReactNode;
  image: { src: string; alt: string };
  /** Puts the photo on the left at md and up. */
  reversed?: boolean;
  /** Narrower panel for the vendor profile header. */
  textWidth?: "half" | "twoFifths";
  /** Set on above-the-fold heroes so the photo isn't lazy-loaded. */
  priority?: boolean;
}

/**
 * Two-panel card: copy on a tinted panel beside a full-height photo.
 * Used by the signup, for-vendors and vendor profile headers.
 */
export default function SplitHero({
  children,
  image,
  reversed = false,
  textWidth = "half",
  priority = false,
}: SplitHeroProps) {
  const textPanel = textWidth === "half" ? "md:w-1/2" : "md:w-2/5";
  const imagePanel = textWidth === "half" ? "md:w-1/2" : "md:w-3/5";

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-card border-card">
      <div className="md:flex">
        <div
          className={`${textPanel} bg-surface-card p-8 md:p-12 lg:p-16 flex flex-col justify-center ${
            reversed ? "md:order-2" : ""
          }`}
        >
          {children}
        </div>
        <div
          className={`${imagePanel} relative min-h-[300px] md:min-h-[480px] ${
            reversed ? "md:order-1" : ""
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
