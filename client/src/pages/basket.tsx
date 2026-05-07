import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

import { Container } from "@/components/common/Container";
import { SEO } from "@/components/common/SEO";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Toast } from "@/components/common/Toast";
import { Button } from "@/components/ui/Button";
import { basketService } from "@/services/basket.service";
import { orderService } from "@/services/order.service";
import type { BasketItem } from "@/types/basket";

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export default function BasketPage() {
  const router = useRouter();
  const [items, setItems] = useState<BasketItem[]>([]);
  const [toastMessage, setToastMessage] = useState("");
  const totals = useMemo(() => basketService.getTotals(items), [items]);

  useEffect(() => {
    const timeout = window.setTimeout(() => setItems(basketService.getItems()), 0);
    return () => window.clearTimeout(timeout);
  }, []);

  function updateQuantity(productId: string, quantity: number) {
    setItems(basketService.updateQuantity(productId, quantity));
  }

  function removeItem(productId: string) {
    setItems(basketService.removeItem(productId));
    setToastMessage("Item removed from basket.");
  }

  function clearBasket() {
    setItems(basketService.clearBasket());
    setToastMessage("Basket cleared.");
  }

  async function placeMockOrder() {
    if (!items.length) {
      return;
    }

    orderService.createMockOrder(items, totals);
    setItems(basketService.clearBasket());
    await router.push("/orders?success=1");
  }

  return (
    <>
      <SEO title="Basket" canonicalPath="/basket" />
      <section className="border-b border-[var(--color-line)] bg-[var(--color-soft)] py-14">
        <Container>
          <SectionTitle
            eyebrow="Basket"
            title="Review your glow ritual before ordering."
            description="Adjust quantities, confirm delivery, then place a frontend-only mock order."
          />
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          {items.length ? (
            <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
              <div className="space-y-4">
                {items.map((item) => (
                  <article
                    className="grid gap-4 rounded-[8px] border border-[var(--color-line)] bg-white/82 p-4 shadow-[0_16px_42px_rgba(31,27,24,0.05)] sm:grid-cols-[7rem_1fr_auto]"
                    key={item.product.id}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-[8px] bg-[var(--color-soft)]">
                      <Image
                        alt={item.product.image.alt}
                        className="object-cover"
                        fill
                        sizes="112px"
                        src={item.product.image.src}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-rosewood)]">
                        {item.product.category}
                      </p>
                      <h2 className="mt-2 text-xl font-semibold text-[var(--color-ink)]">
                        {item.product.name}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {item.product.description}
                      </p>
                      <button
                        className="mt-4 text-sm font-semibold text-[var(--color-rosewood)] hover:text-[var(--color-ink)]"
                        onClick={() => removeItem(item.product.id)}
                        type="button"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex items-center justify-between gap-5 sm:block sm:text-right">
                      <p className="font-semibold text-[var(--color-cocoa)]">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                      <div className="mt-0 inline-flex h-10 items-center rounded-[8px] border border-[var(--color-line)] bg-white sm:mt-4">
                        <button
                          aria-label={`Decrease ${item.product.name} quantity`}
                          className="h-10 w-10 text-lg text-[var(--color-cocoa)] disabled:opacity-35"
                          disabled={item.quantity <= 1}
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          type="button"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          aria-label={`Increase ${item.product.name} quantity`}
                          className="h-10 w-10 text-lg text-[var(--color-cocoa)]"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="h-fit rounded-[8px] border border-[var(--color-line)] bg-white p-6 shadow-[0_22px_60px_rgba(31,27,24,0.06)]">
                <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)]">
                  Order Summary
                </h2>
                <div className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
                  <div className="flex justify-between">
                    <span>Items</span>
                    <span>{totals.itemCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(totals.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>{totals.deliveryFee === 0 ? "Free" : formatPrice(totals.deliveryFee)}</span>
                  </div>
                  <div className="border-t border-[var(--color-line)] pt-4 text-base font-semibold text-[var(--color-ink)]">
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span>{formatPrice(totals.total)}</span>
                    </div>
                  </div>
                </div>
                <Button className="mt-6 w-full rounded-[8px]" onClick={placeMockOrder} type="button">
                  Place Mock Order
                </Button>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <Button className="rounded-[8px]" href="/shop" variant="secondary">
                    Continue Shopping
                  </Button>
                  <Button className="rounded-[8px]" onClick={clearBasket} type="button" variant="ghost">
                    Clear Basket
                  </Button>
                </div>
              </aside>
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-[8px] border border-[var(--color-line)] bg-white/82 p-8 text-center shadow-[0_22px_60px_rgba(31,27,24,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-rosewood)]">
                Empty Basket
              </p>
              <h1 className="mt-4 font-serif text-3xl font-medium text-[var(--color-ink)]">
                Your skincare ritual starts in the shop.
              </h1>
              <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                Add a serum, cream, essence, or SPF to build a mock order.
              </p>
              <Button className="mt-6 rounded-[8px]" href="/shop">
                Continue Shopping
              </Button>
            </div>
          )}
        </Container>
      </section>
      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}
