"use client";

import { usePathname } from "next/navigation";

interface PageOffsetProps {
  children: React.ReactNode;
}

export default function PageOffset({ children }: PageOffsetProps) {
  const pathname = usePathname();
  // Homepage overlays navbar on hero — no offset needed.
  // Inner pages need offset so content isn't hidden under the fixed navbar.
  const isHomepage = pathname === "/";

  return (
    <div className={isHomepage ? "" : "pt-20 md:pt-24"}>
      {children}
    </div>
  );
}
