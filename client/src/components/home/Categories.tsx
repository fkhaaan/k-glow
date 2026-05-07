import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { sectionSpacing } from "@/constants/design";

const categories = [
  "Cleansers",
  "Essences",
  "Serums",
  "Creams",
  "SPF",
  "Masks",
] as const;

export function Categories() {
  return (
    <section className={sectionSpacing} id="categories">
      <Container>
        <SectionTitle
          eyebrow="Routine Layers"
          title="A complete vanity, edited with restraint."
          description="Build a routine around skin barrier comfort, refined texture, and season-ready hydration."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <a
              className="rounded-[8px] border border-[var(--color-line)] bg-white px-4 py-6 text-center text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:border-[var(--color-rosewood)] hover:shadow-[0_14px_34px_rgba(31,27,24,0.07)]"
              href="#best-sellers"
              key={category}
            >
              {category}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
