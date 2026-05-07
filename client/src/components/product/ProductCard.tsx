import type { Product } from "@/types/product";
import { cn } from "@/utils/cn";

type ProductCardProps = {
  product: Product;
};

const tones: Record<Product["tone"], string> = {
  cream: "from-[#fbf4e9] to-[#efe1cf]",
  rose: "from-[#f8e8e4] to-[#e7c9c2]",
  sage: "from-[#edf0e7] to-[#cfd9c6]",
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group rounded-[8px] border border-[var(--color-line)] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(31,27,24,0.08)]">
      <div
        className={cn(
          "relative flex aspect-[4/5] items-end justify-center overflow-hidden rounded-[6px] bg-gradient-to-br",
          tones[product.tone],
        )}
      >
        <div className="mb-8 h-36 w-16 rounded-t-[2rem] rounded-b-lg bg-white/72 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7),0_18px_38px_rgba(31,27,24,0.12)]" />
        <div className="absolute top-6 h-5 w-10 rounded-full bg-white/80" />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-white/84 px-3 py-1 text-xs font-semibold text-[var(--color-cocoa)]">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">
          {product.name}
        </h3>
        <p className="mt-3 text-sm font-semibold text-[var(--color-rosewood)]">
          {product.price}
        </p>
      </div>
    </article>
  );
}
