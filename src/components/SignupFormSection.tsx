import SignupForm from "@/components/SignupForm";
import Section from "@/components/ui/Section";

interface SignupFormSectionProps {
  id?: string;
  background?: "base" | "tint";
}

/** The "list your business" form block, shared by /signup and /for-vendors. */
export default function SignupFormSection({
  id = "signup-form",
  background = "tint",
}: SignupFormSectionProps) {
  return (
    <Section id={id} background={background} width="prose">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900">
          List Your Business — It&apos;s Free
        </h2>
        <p className="mt-4 text-lg text-ink-500">
          Takes 2 minutes. No credit card needed.
        </p>
      </div>
      <div className="rounded-3xl border-card bg-white p-8 shadow-card md:p-10">
        <SignupForm />
      </div>
    </Section>
  );
}
