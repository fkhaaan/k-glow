import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import type { Product } from "@/types/product";
import { cn } from "@/utils/cn";

type ProductCardProps = {
  product: Product;
  onAddToBasket?: (product: Product) => void;
  onToggleFavorite?: (product: Product) => void;
  isFavorite?: boolean;
  showActions?: boolean;
};

const tones: Record<Product["tone"], string> = {
  cream: "from-[#fbf4e9] to-[#efe1cf]",
  rose: "from-[#f8e8e4] to-[#e7c9c2]",
  sage: "from-[#edf0e7] to-[#cfd9c6]",
};

export function ProductCard({
  product,
  onAddToBasket,
  onToggleFavorite,
  isFavorite = false,
  showActions = false,
}: ProductCardProps) {
  return (
    <article className="group rounded-[8px] border border-[var(--color-line)] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(31,27,24,0.08)]">
      <Link
        aria-label={`View ${product.name}`}
        className={cn(
          "relative block aspect-[4/5] overflow-hidden rounded-[6px] bg-gradient-to-br",
          tones[product.tone],
        )}
        href={`/shop/${product.id}`}
      >
        <Image
          alt={product.image.alt}
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
          fill
          quality={82}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          src={product.image.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_58%,rgba(31,27,24,0.08)_100%)]" />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-white/84 px-3 py-1 text-xs font-semibold text-[var(--color-cocoa)]">
            {product.badge}
          </span>
        ) : null}
      </Link>
      <div className="pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {product.category}
        </p>
        <Link
          className="mt-2 block text-lg font-semibold text-[var(--color-ink)] transition-colors hover:text-[var(--color-rosewood)]"
          href={`/shop/${product.id}`}
        >
          {product.name}
        </Link>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-[var(--color-rosewood)]">
            {product.priceLabel}
          </p>
          <p className="text-xs font-semibold text-[var(--color-muted)]">
            {product.rating.toFixed(1)} / 5
          </p>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--color-muted)]">
          {product.description}
        </p>
        {showActions ? (
          <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
            <Button
              className="rounded-[8px]"
              onClick={() => onAddToBasket?.(product)}
              size="sm"
              type="button"
            >
              Add to Basket
            </Button>
            <button
              aria-label={`${isFavorite ? "Remove from" : "Add to"} favorites`}
              className={cn(
                "h-10 w-10 rounded-[8px] border border-[var(--color-line)] bg-white text-sm font-semibold text-[var(--color-cocoa)] transition hover:border-[var(--color-rosewood)]",
                isFavorite && "border-[var(--color-rosewood)] bg-[var(--color-soft)]",
              )}
              onClick={() => onToggleFavorite?.(product)}
              type="button"
            >
              {isFavorite ? "♥" : "♡"}
            </button>
          </div>
        ) : null}
      </div>
    </article>
  );
}
