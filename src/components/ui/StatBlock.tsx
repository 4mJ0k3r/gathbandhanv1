type Tone = "card" | "plain" | "onDark";

interface StatBlockProps {
  value: string;
  label: string;
  /**
   * `card` sits in a white card, `plain` in a bare row, `onDark` over a photo.
   */
  tone?: Tone;
}

const valueClasses: Record<Tone, string> = {
  card: "text-4xl md:text-5xl font-bold text-brand-500",
  plain: "text-2xl md:text-3xl font-bold text-ink-900",
  onDark: "text-2xl sm:text-3xl font-semibold text-white",
};

const labelClasses: Record<Tone, string> = {
  card: "text-sm text-ink-500 mt-2 font-medium",
  plain: "text-xs text-ink-500 mt-1 font-medium",
  onDark: "text-sm text-white/70 mt-1",
};

const wrapperClasses: Record<Tone, string> = {
  card: "bg-white rounded-3xl p-8 text-center shadow-card border-card",
  plain: "",
  onDark: "text-center",
};

export default function StatBlock({ value, label, tone = "card" }: StatBlockProps) {
  return (
    <dl className={wrapperClasses[tone]}>
      <dd className={valueClasses[tone]}>{value}</dd>
      <dt className={labelClasses[tone]}>{label}</dt>
    </dl>
  );
}
