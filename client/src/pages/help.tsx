import { Container } from "@/components/common/Container";
import { SEO } from "@/components/common/SEO";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    question: "Are these products authentic Korean formulas?",
    answer:
      "Yes. K-Glow is modeled around a curated catalog of authentic Korean skincare products and future verified supplier data.",
  },
  {
    question: "Can I shop by skin type?",
    answer:
      "Use the shop skin type filter to narrow products for sensitive, dry, oily, combination, dull, or normal skin.",
  },
  {
    question: "When will checkout connect to real orders?",
    answer:
      "The frontend is structured for a future basket, auth, and order API without changing the page architecture.",
  },
];

export default function HelpPage() {
  return (
    <>
      <SEO title="Help" canonicalPath="/help" />
      <section className="border-b border-[var(--color-line)] bg-[var(--color-soft)] py-14">
        <Container>
          <SectionTitle
            eyebrow="Help"
            title="Support for shipping, returns, and product guidance."
            description="Clear ecommerce support sections with mock content ready for CMS or service desk data."
          />
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
            <div className="space-y-5">
              <section className="rounded-[8px] border border-[var(--color-line)] bg-white/82 p-6">
                <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)]">
                  FAQ
                </h2>
                <div className="mt-5 divide-y divide-[var(--color-line)]">
                  {faqs.map((faq) => (
                    <details className="group py-4" key={faq.question}>
                      <summary className="cursor-pointer text-base font-semibold text-[var(--color-ink)]">
                        {faq.question}
                      </summary>
                      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[8px] border border-[var(--color-line)] bg-white/82 p-6">
                  <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)]">
                    Shipping Info
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    Standard shipping is free on mock orders over $75. Delivery estimates,
                    tracking, and carrier details are ready to map to backend fulfillment.
                  </p>
                </div>
                <div className="rounded-[8px] border border-[var(--color-line)] bg-white/82 p-6">
                  <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)]">
                    Return Policy
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    Unopened items can be prepared for return review within 30 days.
                    Opened skincare returns should route through support for skin safety.
                  </p>
                </div>
              </section>
            </div>

            <aside className="h-fit rounded-[8px] border border-[var(--color-line)] bg-white p-6 shadow-[0_22px_60px_rgba(31,27,24,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-rosewood)]">
                Contact
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-[var(--color-ink)]">
                Need support?
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                Send order questions, routine concerns, or account issues to the future
                K-Glow support queue.
              </p>
              <Button className="mt-6 w-full rounded-[8px]" type="button">
                Contact Support
              </Button>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
