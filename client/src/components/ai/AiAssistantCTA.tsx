import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { sectionSpacing } from "@/constants/design";

export function AiAssistantCTA() {
  return (
    <section className={sectionSpacing} id="ai-assistant">
      <Container>
        <div className="grid gap-8 rounded-[8px] bg-[var(--color-ink)] p-6 text-white sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e7c9c2]">
              AI Skin Match
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-4xl">
              Prepare for intelligent routine discovery.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/68">
              A dedicated service boundary is ready for future skin profile,
              ingredient preference, and product recommendation flows.
            </p>
          </div>

          <div className="rounded-[8px] border border-white/12 bg-white/7 p-5">
            <div className="space-y-3">
              {["Skin type", "Main concern", "Texture preference"].map((item) => (
                <div
                  className="flex items-center justify-between rounded-[6px] bg-white/8 px-4 py-3 text-sm"
                  key={item}
                >
                  <span className="text-white/72">{item}</span>
                  <span className="h-2 w-16 rounded-full bg-[#e7c9c2]" />
                </div>
              ))}
            </div>
            <Button className="mt-5 w-full" href="#best-sellers" variant="secondary">
              Preview Ritual Picks
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
