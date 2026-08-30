import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: readonly FaqItem[];
}

/**
 * Native <details> accordion, so FAQ pages stay server components.
 */
export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group bg-white rounded-2xl border-card overflow-hidden"
        >
          <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none text-ink-900 font-semibold hover:text-purple-500 transition-colors">
            {item.question}
            <ChevronDown
              className="w-5 h-5 shrink-0 text-ink-400 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="px-6 pb-6 text-ink-500 text-sm leading-relaxed">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
