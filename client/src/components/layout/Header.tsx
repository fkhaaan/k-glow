import Link from "next/link";

import { mainNavigation } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/common/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[rgba(250,247,242,0.86)] backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold text-[var(--color-ink)]"
          aria-label="K-Glow home"
        >
          K-Glow
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-[var(--color-muted)] md:flex"
          aria-label="Primary navigation"
        >
          {mainNavigation.map((item) => (
            <Link
              className="transition-colors hover:text-[var(--color-ink)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="#ai-assistant" size="sm" variant="secondary">
          Find My Ritual
        </Button>
      </Container>
    </header>
  );
}
