import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#fbf7f0_0%,#f6ebe4_48%,#edf0e7_100%)]">
      <Container className="grid min-h-[calc(100vh-4rem)] gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-rosewood)]">
            Korean Beauty Rituals
          </p>
          <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.02] text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
            Soft science for luminous everyday skin.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
            Curated Korean cosmetics for balanced skin barriers, featherweight
            layers, and a polished routine that feels quietly luxurious.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#best-sellers" size="lg">
              Shop Best Sellers
            </Button>
            <Button href="#ai-assistant" size="lg" variant="secondary">
              Try AI Skin Match
            </Button>
          </div>
        </div>

        <div className="relative mx-auto flex aspect-[4/5] w-full max-w-md items-end justify-center rounded-[8px] border border-white/70 bg-white/36 p-8 shadow-[0_30px_90px_rgba(112,87,73,0.16)] backdrop-blur">
          <div className="absolute inset-6 rounded-[8px] border border-white/70" />
          <div className="absolute left-8 top-10 h-24 w-24 rounded-full bg-[#e8c7c0]/60 blur-2xl" />
          <div className="absolute right-4 top-28 h-28 w-28 rounded-full bg-[#d5ddca]/70 blur-2xl" />
          <div className="relative z-10 flex items-end gap-5">
            <div className="h-56 w-20 rounded-t-[2.5rem] rounded-b-xl bg-[#fdfaf6] shadow-[0_18px_50px_rgba(31,27,24,0.14)]" />
            <div className="h-72 w-24 rounded-t-[3rem] rounded-b-xl bg-[#fffaf5] shadow-[0_22px_60px_rgba(31,27,24,0.16)]" />
            <div className="h-44 w-16 rounded-t-[2rem] rounded-b-lg bg-[#f2e2dc] shadow-[0_14px_40px_rgba(31,27,24,0.12)]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
