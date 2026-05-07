import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Container } from "@/components/common/Container";
import { SEO } from "@/components/common/SEO";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Toast } from "@/components/common/Toast";
import { Button } from "@/components/ui/Button";
import { orderService } from "@/services/order.service";
import type { Order, OrderStatus } from "@/types/order";

const statusStyles: Record<OrderStatus, string> = {
  Processing: "bg-[#fbf4e9] text-[var(--color-cocoa)]",
  Delivered: "bg-[#edf0e7] text-[#4f6848]",
  Cancelled: "bg-[#f3ebe3] text-[var(--color-muted)]",
};

function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export default function OrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const timeout = window.setTimeout(() => setOrders(orderService.getOrders()), 0);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (router.query.success === "1") {
      const timeout = window.setTimeout(() => {
        setToastMessage("Mock order placed. Your basket has been cleared.");
        void router.replace("/orders", undefined, { shallow: true });
      }, 0);

      return () => window.clearTimeout(timeout);
    }
  }, [router]);

  return (
    <>
      <SEO title="Orders" canonicalPath="/orders" />
      <section className="border-b border-[var(--color-line)] bg-[var(--color-soft)] py-14">
        <Container>
          <SectionTitle
            eyebrow="Orders"
            title="Track your skincare orders."
            description="Mock orders are saved in this browser until a customer account API is connected."
          />
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          {orders.length ? (
            <div className="space-y-4">
              {orders.map((order) => (
                <article
                  className="rounded-[8px] border border-[var(--color-line)] bg-white/82 p-5 shadow-[0_18px_48px_rgba(31,27,24,0.05)]"
                  key={order.id}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-lg font-semibold text-[var(--color-ink)]">
                          {order.orderNumber}
                        </h2>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[order.status]}`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[var(--color-muted)]">
                        Ordered on {order.orderedAt}
                      </p>
                      <div className="mt-4 space-y-2 text-sm leading-6 text-[var(--color-muted)]">
                        {order.items.map((item) => (
                          <div className="flex justify-between gap-4" key={item.product.id}>
                            <span>
                              {item.product.name} x {item.quantity}
                            </span>
                            <span>{formatPrice(item.product.price * item.quantity)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="sm:min-w-40 sm:text-right">
                      <p className="text-sm text-[var(--color-muted)]">Total</p>
                      <p className="mt-1 text-xl font-semibold text-[var(--color-cocoa)]">
                        {formatPrice(order.total)}
                      </p>
                      <Button
                        className="mt-4 rounded-[8px]"
                        size="sm"
                        type="button"
                        variant="secondary"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-[8px] border border-[var(--color-line)] bg-white/82 p-8 text-center shadow-[0_22px_60px_rgba(31,27,24,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-rosewood)]">
                No Orders
              </p>
              <h1 className="mt-4 font-serif text-3xl font-medium text-[var(--color-ink)]">
                Place a mock order from your basket.
              </h1>
              <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                Your order cards will appear here with status, date, product list, and total.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Button className="rounded-[8px]" href="/shop">
                  Shop Products
                </Button>
                <Button className="rounded-[8px]" href="/basket" variant="secondary">
                  View Basket
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>
      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}
