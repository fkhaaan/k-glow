import { useCallback, useMemo, useState } from "react";

import { Container } from "@/components/common/Container";
import { SEO } from "@/components/common/SEO";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Toast } from "@/components/common/Toast";
import { ProductCard } from "@/components/product/ProductCard";
import { basketService } from "@/services/basket.service";
import { productService, type ProductQuery } from "@/services/product.service";
import type { Product } from "@/types/product";

const categories = productService.getCategories();
const skinTypes = productService.getSkinTypes();

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [skinType, setSkinType] = useState("All");
  const [sort, setSort] = useState<ProductQuery["sort"]>("featured");
  const [favorites, setFavorites] = useState<string[]>(["hanbang-glow-serum"]);
  const [toastMessage, setToastMessage] = useState("");

  const products = useMemo(
    () => productService.getProducts({ search, category, skinType, sort }),
    [category, search, skinType, sort],
  );

  function toggleFavorite(product: Product) {
    setFavorites((current) =>
      current.includes(product.id)
        ? current.filter((id) => id !== product.id)
        : [...current, product.id],
    );
  }

  const addToBasket = useCallback((product: Product) => {
    basketService.addProduct(product);
    setToastMessage(`${product.name} added to basket.`);
  }, []);

  return (
    <>
      <SEO
        title="Shop"
        description="Shop premium Korean skincare by category, skin type, rating, and ritual."
        canonicalPath="/shop"
      />
      <section className="border-b border-[var(--color-line)] bg-[var(--color-soft)] py-14 sm:py-18">
        <Container>
          <SectionTitle
            eyebrow="K-Glow Shop"
            title="Curated Korean skincare for every daily ritual."
            description="Search a refined edit of barrier creams, brightening serums, calming essences, and featherlight SPF."
          />
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-3 rounded-[8px] border border-[var(--color-line)] bg-white/78 p-4 shadow-[0_20px_50px_rgba(31,27,24,0.05)] md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <label className="block text-sm font-semibold text-[var(--color-cocoa)]">
              Search
              <input
                className="mt-2 h-11 w-full rounded-[8px] border border-[var(--color-line)] bg-white px-3 text-sm outline-none focus:border-[var(--color-rosewood)]"
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Serum, cica, SPF..."
                value={search}
              />
            </label>
            <label className="block text-sm font-semibold text-[var(--color-cocoa)]">
              Category
              <select
                className="mt-2 h-11 w-full rounded-[8px] border border-[var(--color-line)] bg-white px-3 text-sm outline-none focus:border-[var(--color-rosewood)]"
                onChange={(event) => setCategory(event.target.value)}
                value={category}
              >
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold text-[var(--color-cocoa)]">
              Skin Type
              <select
                className="mt-2 h-11 w-full rounded-[8px] border border-[var(--color-line)] bg-white px-3 text-sm outline-none focus:border-[var(--color-rosewood)]"
                onChange={(event) => setSkinType(event.target.value)}
                value={skinType}
              >
                {skinTypes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold text-[var(--color-cocoa)]">
              Sort
              <select
                className="mt-2 h-11 w-full rounded-[8px] border border-[var(--color-line)] bg-white px-3 text-sm outline-none focus:border-[var(--color-rosewood)]"
                onChange={(event) => setSort(event.target.value as ProductQuery["sort"])}
                value={sort}
              >
                <option value="featured">Featured</option>
                <option value="rating">Top rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </label>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 text-sm text-[var(--color-muted)]">
            <p>{products.length} products</p>
            <p>Frontend mock basket and favorites are ready for API wiring.</p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                isFavorite={favorites.includes(product.id)}
                key={product.id}
                onAddToBasket={addToBasket}
                onToggleFavorite={toggleFavorite}
                product={product}
                showActions
              />
            ))}
          </div>
        </Container>
      </section>
      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}
