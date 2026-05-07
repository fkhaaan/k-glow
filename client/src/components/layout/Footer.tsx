import Link from "next/link";

import { Container } from "@/components/common/Container";
import { mainNavigation } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink)] text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <Link href="/" className="font-serif text-3xl font-semibold">
            K-Glow
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/68">
            Premium Korean cosmetics curated for clean daily rituals, luminous
            skin, and a calm modern vanity.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/74">
            {mainNavigation.map((item) => (
              <Link className="hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-white/48">
            © {new Date().getFullYear()} K-Glow Beauty.
          </p>
        </div>
      </Container>
    </footer>
  );
}
