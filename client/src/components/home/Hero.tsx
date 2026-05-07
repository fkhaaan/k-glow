import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";

const trustBadges = [
  "Authentic Korean Products",
  "AI Recommendations",
  "Fast Delivery",
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[82svh] overflow-hidden bg-[#f7f0ea]">
      <Image
        alt="Premium Korean skincare bottles and jars arranged on a soft neutral vanity"
        className="object-cover object-[68%_50%]"
        fill
        preload
        quality={84}
        sizes="100vw"
        src="/images/skincare/hero-korean-skincare.png"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,247,242,0.94)_0%,rgba(250,247,242,0.78)_38%,rgba(250,247,242,0.3)_64%,rgba(250,247,242,0.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(250,247,242,0)_0%,rgba(250,247,242,0.9)_100%)]" />

      <Container className="relative z-10 flex min-h-[82svh] items-center py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-rosewood)]">
            Premium Korean Skincare
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-[1.02] text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
            Glow Naturally with Korean Skincare
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl sm:leading-9">
            Discover a curated ritual of authentic Korean formulas, luminous
            textures, and intelligent skin guidance designed for a refined,
            healthy-looking glow.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              className="shadow-[0_18px_42px_rgba(74,56,48,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(74,56,48,0.24)]"
              href="#best-sellers"
              size="lg"
            >
              Shop Now
            </Button>
            <Button
              className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(157,106,93,0.14)]"
              href="#ai-assistant"
              size="lg"
              variant="secondary"
            >
              AI Skin Analysis
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <div
                className="flex items-center gap-2 rounded-full border border-white/80 bg-white/58 px-4 py-2 text-xs font-semibold text-[var(--color-cocoa)] shadow-[0_12px_30px_rgba(112,87,73,0.08)] backdrop-blur-md"
                key={badge}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-rosewood)]" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
