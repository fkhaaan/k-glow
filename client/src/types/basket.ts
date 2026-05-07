import type { Product } from "@/types/product";

export type BasketItem = {
  product: Product;
  quantity: number;
};

export type BasketTotals = {
  subtotal: number;
  deliveryFee: number;
  total: number;
  itemCount: number;
};
