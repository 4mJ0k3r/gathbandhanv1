"use client";

import { useEffect, useRef } from "react";

/**
 * Records a profile view once per mount. Fire-and-forget so it never blocks
 * render or surfaces an error to the visitor.
 */
export default function ViewCounter({ slug }: { slug: string }) {
  const recorded = useRef(false);

  useEffect(() => {
    if (recorded.current) return;
    recorded.current = true;
    fetch(`/api/vendors/${slug}/view`, { method: "POST" }).catch(() => {});
  }, [slug]);

  return null;
}
