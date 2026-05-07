import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { sectionSpacing } from "@/constants/design";

export function BrandStory() {
  return (
    <section className={sectionSpacing} id="brand-story">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <div className="aspect-[5/4] rounded-[8px] bg-[linear-gradient(135deg,#efe1cf,#f8e8e4_52%,#edf0e7)] p-8">
          <div className="h-full rounded-[8px] border border-white/70 bg-white/28" />
        </div>

        <div>
          <SectionTitle
            eyebrow="Brand Story"
            title="Korean ritual care, refined for a modern shelf."
            description="K-Glow is structured around thoughtful product discovery, editorial merchandising, and scalable AI-assisted guidance."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Clean feel", "Soft neutrals", "Routine-first"].map((value) => (
              <div
                className="rounded-[8px] border border-[var(--color-line)] bg-white p-5"
                key={value}
              >
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
