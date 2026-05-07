import type { BasketItem } from "@/types/basket";

export type OrderStatus = "Processing" | "Delivered" | "Cancelled";

export type Order = {
  id: string;
  orderNumber: string;
  orderedAt: string;
  status: OrderStatus;
  items: BasketItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
};
