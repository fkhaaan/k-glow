import { products } from "@/mocks/products";
import type { Order } from "@/types/order";

export const orders: Order[] = [
  {
    id: "order-1004",
    orderNumber: "KG-2026-1004",
    orderedAt: "2026-05-02",
    status: "Delivered",
    items: [
      { product: products[0], quantity: 1 },
      { product: products[2], quantity: 1 },
    ],
    subtotal: 78,
    deliveryFee: 0,
    total: 78,
  },
  {
    id: "order-1003",
    orderNumber: "KG-2026-1003",
    orderedAt: "2026-04-18",
    status: "Delivered",
    items: [{ product: products[1], quantity: 2 }],
    subtotal: 96,
    deliveryFee: 0,
    total: 96,
  },
  {
    id: "order-1002",
    orderNumber: "KG-2026-1002",
    orderedAt: "2026-03-26",
    status: "Processing",
    items: [
      { product: products[3], quantity: 1 },
      { product: products[4], quantity: 1 },
    ],
    subtotal: 62,
    deliveryFee: 8,
    total: 70,
  },
];
