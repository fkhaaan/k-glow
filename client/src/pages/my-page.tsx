import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { Container } from "@/components/common/Container";
import { SEO } from "@/components/common/SEO";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/Button";
import { authService } from "@/services/auth.service";
import { basketService } from "@/services/basket.service";
import { orderService } from "@/services/order.service";
import { productService } from "@/services/product.service";
import type { BasketItem } from "@/types/basket";
import type { Order } from "@/types/order";

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export default function MyPage() {
  const user = authService.getCurrentUser();
  const favorites = productService.getProducts().slice(0, 3);
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  const basketTotals = useMemo(() => basketService.getTotals(basketItems), [basketItems]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setBasketItems(basketService.getItems());
      setRecentOrders(orderService.getRecentOrders());
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <SEO title="My Page" canonicalPath="/my-page" />
      <section className="border-b border-[var(--color-line)] bg-[var(--color-soft)] py-14">
        <Container>
          <SectionTitle
            eyebrow="My Page"
            title="Your personal skincare dashboard."
            description="Review profile details, skin preferences, basket status, recent orders, and saved favorites."
          />
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="space-y-6">
              <section className="rounded-[8px] border border-[var(--color-line)] bg-white p-6 shadow-[0_22px_60px_rgba(31,27,24,0.06)]">
                <div className="flex items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-soft)] font-serif text-2xl text-[var(--color-cocoa)]">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold text-[var(--color-ink)]">
                      {user.name}
                    </h1>
                    <p className="text-sm text-[var(--color-muted)]">{user.email}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  <Button className="rounded-[8px]" href="/shop">
                    Shop
                  </Button>
                  <Button className="rounded-[8px]" href="/orders" variant="secondary">
                    Orders
                  </Button>
                  <Button className="rounded-[8px]" href="/basket" variant="secondary">
                    Basket
                  </Button>
                </div>
                <Button
                  className="mt-3 w-full rounded-[8px]"
                  onClick={() => authService.logout()}
                  type="button"
                  variant="ghost"
                >
                  Logout
                </Button>
              </section>

              <section className="rounded-[8px] border border-[var(--color-line)] bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-rosewood)]">
                  Skin Profile
                </p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[var(--color-muted)]">Skin type</dt>
                    <dd className="font-semibold text-[var(--color-cocoa)]">{user.skinType}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[var(--color-muted)]">Concerns</dt>
                    <dd className="font-semibold text-[var(--color-cocoa)]">Barrier, glow</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[var(--color-muted)]">Routine</dt>
                    <dd className="font-semibold text-[var(--color-cocoa)]">Morning and night</dd>
                  </div>
                </dl>
              </section>
            </aside>

            <div className="space-y-6">
              <section className="rounded-[8px] border border-[var(--color-line)] bg-white/82 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)]">
                      Basket Summary
                    </h2>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      {basketTotals.itemCount
                        ? `${basketTotals.itemCount} items ready for a mock order.`
                        : "Your basket is empty."}
                    </p>
                  </div>
                  <Button className="rounded-[8px]" href="/basket" size="sm" variant="secondary">
                    View Basket
                  </Button>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[8px] bg-[var(--color-soft)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Items
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">
                      {basketTotals.itemCount}
                    </p>
                  </div>
                  <div className="rounded-[8px] bg-[var(--color-soft)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Subtotal
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">
                      {formatPrice(basketTotals.subtotal)}
                    </p>
                  </div>
                  <div className="rounded-[8px] bg-[var(--color-soft)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Delivery
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">
                      {basketTotals.deliveryFee === 0 ? "Free" : formatPrice(basketTotals.deliveryFee)}
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-[8px] border border-[var(--color-line)] bg-white/82 p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)]">
                    Recent Orders
                  </h2>
                  <Link className="text-sm font-semibold text-[var(--color-rosewood)]" href="/orders">
                    View all
                  </Link>
                </div>
                <div className="mt-5 space-y-3">
                  {recentOrders.length ? (
                    recentOrders.map((order) => (
                      <div
                        className="flex flex-col gap-2 rounded-[8px] bg-[var(--color-soft)] p-4 sm:flex-row sm:items-center sm:justify-between"
                        key={order.id}
                      >
                        <div>
                          <p className="font-semibold text-[var(--color-ink)]">
                            {order.orderNumber}
                          </p>
                          <p className="text-sm text-[var(--color-muted)]">
                            {order.orderedAt} · {order.status}
                          </p>
                        </div>
                        <p className="font-semibold text-[var(--color-cocoa)]">
                          {formatPrice(order.total)}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-[8px] bg-[var(--color-soft)] p-5 text-sm text-[var(--color-muted)]">
                      No mock orders yet. Place one from your basket to preview it here.
                    </div>
                  )}
                </div>
              </section>

              <section className="rounded-[8px] border border-[var(--color-line)] bg-white/82 p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)]">
                    Favorite Products
                  </h2>
                  <Link className="text-sm font-semibold text-[var(--color-rosewood)]" href="/shop">
                    Shop all
                  </Link>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {favorites.map((product) => (
                    <Link
                      className="rounded-[8px] border border-[var(--color-line)] bg-white p-4 transition hover:border-[var(--color-rosewood)]"
                      href={`/shop/${product.id}`}
                      key={product.id}
                    >
                      <p className="text-sm font-semibold text-[var(--color-ink)]">
                        {product.name}
                      </p>
                      <p className="mt-2 text-sm text-[var(--color-muted)]">
                        {product.priceLabel}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
