import { orders } from "@/mocks/orders";
import type { BasketItem, BasketTotals } from "@/types/basket";
import type { Order } from "@/types/order";
import { readStorage, writeStorage } from "@/utils/storage";

export const ORDER_STORAGE_KEY = "k-glow:orders";

function createOrderNumber() {
  const today = new Date();
  const datePart = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("");
  const sequence = String(today.getTime()).slice(-5);

  return `KG-${datePart}-${sequence}`;
}

function getStoredOrders(): Order[] {
  return readStorage<Order[]>(ORDER_STORAGE_KEY, []);
}

export const orderService = {
  getOrders(): Order[] {
    return getStoredOrders();
  },

  getRecentOrders(limit = 2): Order[] {
    return getStoredOrders().slice(0, limit);
  },

  getDemoOrders(): Order[] {
    return orders;
  },

  createMockOrder(items: BasketItem[], totals: BasketTotals): Order {
    const order: Order = {
      id: `order-${Date.now()}`,
      orderNumber: createOrderNumber(),
      orderedAt: new Date().toISOString().slice(0, 10),
      status: "Processing",
      items,
      subtotal: totals.subtotal,
      deliveryFee: totals.deliveryFee,
      total: totals.total,
    };
    const nextOrders = [order, ...getStoredOrders()];
    writeStorage(ORDER_STORAGE_KEY, nextOrders);

    return order;
  },
};
