import Link from "next/link";
import { useEffect, useState } from "react";

import { mainNavigation } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/common/Container";
import { BASKET_UPDATED_EVENT, basketService } from "@/services/basket.service";

export function Header() {
  const [basketCount, setBasketCount] = useState(0);

  useEffect(() => {
    function syncBasketCount() {
      setBasketCount(basketService.getTotals().itemCount);
    }

    syncBasketCount();
    window.addEventListener(BASKET_UPDATED_EVENT, syncBasketCount);
    window.addEventListener("storage", syncBasketCount);

    return () => {
      window.removeEventListener(BASKET_UPDATED_EVENT, syncBasketCount);
      window.removeEventListener("storage", syncBasketCount);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[rgba(250,247,242,0.86)] backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
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

          <Button className="relative rounded-[8px]" href="/basket" size="sm" variant="secondary">
            Basket
            {basketCount ? (
              <span className="ml-2 grid h-5 min-w-5 place-items-center rounded-full bg-[var(--color-rosewood)] px-1.5 text-xs text-white">
                {basketCount}
              </span>
            ) : null}
          </Button>
        </div>
        <nav
          className="flex gap-4 overflow-x-auto pb-3 text-sm font-medium text-[var(--color-muted)] md:hidden"
          aria-label="Mobile navigation"
        >
          {mainNavigation.map((item) => (
            <Link
              className="shrink-0 transition-colors hover:text-[var(--color-ink)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
