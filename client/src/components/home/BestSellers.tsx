import Link from "next/link";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProductCard } from "@/components/product/ProductCard";
import { sectionSpacing } from "@/constants/design";
import { productService } from "@/services/product.service";

const products = productService.getFeaturedProducts();

export function BestSellers() {
  return (
    <section className={sectionSpacing} id="best-sellers">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Best Sellers"
            title="Daily icons with a soft-focus finish."
            description="A refined edit of cushiony creams, glassy serums, calming essences, and featherlight daily SPF."
          />
          <Link
            className="text-sm font-semibold text-[var(--color-rosewood)] hover:text-[var(--color-ink)]"
            href="/shop"
          >
            View full shop
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
