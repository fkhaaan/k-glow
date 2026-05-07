import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProductCard } from "@/components/product/ProductCard";
import { sectionSpacing } from "@/constants/design";
import type { Product } from "@/types/product";

const products: Product[] = [
  {
    id: "dew-barrier-cream",
    name: "Dew Barrier Cream",
    category: "Moisturizer",
    price: "$42",
    badge: "Best",
    tone: "cream",
  },
  {
    id: "hanbang-glow-serum",
    name: "Hanbang Glow Serum",
    category: "Serum",
    price: "$48",
    badge: "New",
    tone: "rose",
  },
  {
    id: "calm-cica-essence",
    name: "Calm Cica Essence",
    category: "Essence",
    price: "$36",
    tone: "sage",
  },
  {
    id: "silk-sun-milk",
    name: "Silk Sun Milk SPF",
    category: "SPF",
    price: "$34",
    tone: "cream",
  },
];

export function BestSellers() {
  return (
    <section className={sectionSpacing} id="best-sellers">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Best Sellers"
            title="Daily icons with a soft-focus finish."
            description="Placeholder products establish the ecommerce grid for future inventory data."
          />
          <a
            className="text-sm font-semibold text-[var(--color-rosewood)] hover:text-[var(--color-ink)]"
            href="#categories"
          >
            View routine categories
          </a>
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
