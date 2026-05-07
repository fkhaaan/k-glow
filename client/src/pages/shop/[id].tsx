import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/common/Container";
import { SEO } from "@/components/common/SEO";
import { Toast } from "@/components/common/Toast";
import { Button } from "@/components/ui/Button";
import { products } from "@/mocks/products";
import { basketService } from "@/services/basket.service";
import { productService } from "@/services/product.service";
import type { Product } from "@/types/product";
import { cn } from "@/utils/cn";

const tones: Record<Product["tone"], string> = {
  cream: "from-[#fbf4e9] to-[#efe1cf]",
  rose: "from-[#f8e8e4] to-[#e7c9c2]",
  sage: "from-[#edf0e7] to-[#cfd9c6]",
};

type ProductDetailProps = {
  product: Product;
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: products.map((product) => ({ params: { id: product.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProductDetailProps> = (context) => {
  const id = context.params?.id;
  const product = typeof id === "string" ? productService.getProductById(id) : undefined;

  if (!product) {
    return { notFound: true };
  }

  return { props: { product } };
};

export default function ProductDetailPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [toastMessage, setToastMessage] = useState("");

  function addToBasket() {
    basketService.addProduct(product);
    setToastMessage(`${product.name} added to basket.`);
  }

  return (
    <>
      <SEO
        title={product.name}
        description={product.description}
        canonicalPath={`/shop/${product.id}`}
      />
      <section className="py-10 sm:py-14 lg:py-18">
        <Container>
          <Link
            className="text-sm font-semibold text-[var(--color-rosewood)] hover:text-[var(--color-ink)]"
            href="/shop"
          >
            Back to shop
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="grid gap-4 sm:grid-cols-[1fr_0.34fr]">
              <div
                className={cn(
                  "relative aspect-[4/5] overflow-hidden rounded-[8px] bg-gradient-to-br",
                  tones[product.tone],
                )}
              >
                <Image
                  alt={product.image.alt}
                  className="object-cover"
                  fill
                  priority
                  quality={86}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={product.image.src}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                {product.gallery.map((image) => (
                  <div
                    className={cn(
                      "relative aspect-square overflow-hidden rounded-[8px] bg-gradient-to-br",
                      tones[product.tone],
                    )}
                    key={image.alt}
                  >
                    <Image
                      alt={image.alt}
                      className="object-cover"
                      fill
                      quality={78}
                      sizes="(max-width: 640px) 45vw, 15vw"
                      src={image.src}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[8px] border border-[var(--color-line)] bg-white/82 p-6 shadow-[0_22px_60px_rgba(31,27,24,0.06)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-rosewood)]">
                {product.category}
              </p>
              <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-[var(--color-ink)] sm:text-5xl">
                {product.name}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <p className="text-2xl font-semibold text-[var(--color-cocoa)]">
                  {product.priceLabel}
                </p>
                <p className="rounded-full bg-[var(--color-soft)] px-3 py-1 text-sm font-semibold text-[var(--color-muted)]">
                  {product.rating.toFixed(1)} / 5 from {product.reviews} reviews
                </p>
              </div>
              <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
                {product.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.skinTypes.map((skin) => (
                  <span
                    className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1 text-xs font-semibold text-[var(--color-cocoa)]"
                    key={skin}
                  >
                    {skin}
                  </span>
                ))}
              </div>
              <Button
                className="mt-8 w-full rounded-[8px]"
                onClick={addToBasket}
                size="lg"
                type="button"
              >
                Add to Basket
              </Button>
              <Button
                className="mt-3 w-full rounded-[8px]"
                href="/basket"
                size="lg"
                variant="secondary"
              >
                View Basket
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              ["Benefits", product.benefits],
              ["Ingredients", product.ingredients],
              ["How to use", product.howToUse],
            ].map(([title, items]) => (
              <section
                className="rounded-[8px] border border-[var(--color-line)] bg-white/72 p-6"
                key={title as string}
              >
                <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)]">
                  {title as string}
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                  {(items as string[]).map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-rosewood)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </section>
      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </>
  );
}
