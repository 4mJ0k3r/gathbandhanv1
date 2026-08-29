interface StatBlockProps {
  value: string;
  label: string;
}

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-ink-900">{value}</p>
      <p className="text-sm text-ink-500 mt-2 font-medium">{label}</p>
    </div>
  );
}
