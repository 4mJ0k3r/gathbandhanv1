import PillButton from "@/components/ui/PillButton";
import Section from "@/components/ui/Section";

interface CtaAction {
  label: string;
  href: string;
}

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  primary: CtaAction;
  secondary?: CtaAction;
  eyebrow?: string;
  background?: "base" | "tint";
}

/** The closing call-to-action shared by every marketing page. */
export default function CtaSection({
  title,
  subtitle,
  primary,
  secondary,
  eyebrow,
  background = "base",
}: CtaSectionProps) {
  return (
    <Section background={background} width="narrow" className="text-center">
      {eyebrow && (
        <span className="text-brand-500 text-xs font-semibold tracking-widest uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-normal text-ink-900 mt-3 md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="text-ink-500 mt-4 text-lg">{subtitle}</p>}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <PillButton href={primary.href} size="lg">
          {primary.label}
        </PillButton>
        {secondary && (
          <PillButton href={secondary.href} size="lg" variant="secondary">
            {secondary.label}
          </PillButton>
        )}
      </div>
    </Section>
  );
}
