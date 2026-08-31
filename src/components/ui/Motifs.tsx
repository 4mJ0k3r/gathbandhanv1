/**
 * Thin-line motif accents. Single color, low opacity, used as punctuation
 * between sections — never as a repeating background.
 */

/** Centre lotus bud on a thin rule, for a section divider. */
export function PaisleyDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 60"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 30h104" />
      {/* Lotus bud */}
      <path d="M150 14c-7 8-11 15-11 21 0 6 5 11 11 11s11-5 11-11c0-6-4-13-11-21z" />
      {/* Side leaves */}
      <path d="M139 35c-6-4-12-4-16 0M161 35c6-4 12-4 16 0" />
      <path d="M196 30h104" />
    </svg>
  );
}

/** Lotus with side petals and a base cradle. Legible down to 14px. */
export function LotusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Centre petal */}
      <path d="M12 3.5c-2.6 3.4-3.9 6.2-3.9 8.6 0 2.4 1.7 4.2 3.9 4.2s3.9-1.8 3.9-4.2c0-2.4-1.3-5.2-3.9-8.6z" />
      {/* Side petals */}
      <path d="M8.1 12.1C6.2 10 4 9.2 1.8 9.8c.4 3.3 3 5.9 6.3 6.4M15.9 12.1c1.9-2.1 4.1-2.9 6.3-2.3-.4 3.3-3 5.9-6.3 6.4" />
      {/* Base cradle */}
      <path d="M5.2 17c1.8 2 4.2 3 6.8 3s5-1 6.8-3" />
    </svg>
  );
}

/**
 * Toran-inspired scalloped edge: a row of shallow arcs on a hairline rule.
 * Tiled horizontally by the consumer.
 */
export function ToranBorder({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 10"
      className={className}
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 1h32" />
      <path d="M0 1c0 4.4 3.6 8 8 8s8-3.6 8-8" />
      <path d="M16 1c0 4.4 3.6 8 8 8s8-3.6 8-8" />
    </svg>
  );
}
