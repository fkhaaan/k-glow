import type { BasketItem, BasketTotals } from "@/types/basket";
import type { Product } from "@/types/product";
import { readStorage, writeStorage } from "@/utils/storage";

export const BASKET_STORAGE_KEY = "k-glow:basket";
export const BASKET_UPDATED_EVENT = "k-glow:basket-updated";

const FREE_DELIVERY_THRESHOLD = 75;
const DELIVERY_FEE = 8;

function persistBasket(items: BasketItem[]) {
  writeStorage(BASKET_STORAGE_KEY, items);

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(BASKET_UPDATED_EVENT));
  }
}

function getBasketItems(): BasketItem[] {
  return readStorage<BasketItem[]>(BASKET_STORAGE_KEY, []);
}

export const basketService = {
  getItems(): BasketItem[] {
    return getBasketItems();
  },

  addProduct(product: Product, quantity = 1): BasketItem[] {
    const items = getBasketItems();
    const existingItem = items.find((item) => item.product.id === product.id);
    const nextItems = existingItem
      ? items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      : [...items, { product, quantity }];

    persistBasket(nextItems);
    return nextItems;
  },

  updateQuantity(productId: string, quantity: number): BasketItem[] {
    const nextItems = getBasketItems()
      .map((item) =>
        item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item,
      )
      .filter((item) => item.quantity > 0);

    persistBasket(nextItems);
    return nextItems;
  },

  removeItem(productId: string): BasketItem[] {
    const nextItems = getBasketItems().filter((item) => item.product.id !== productId);
    persistBasket(nextItems);
    return nextItems;
  },

  clearBasket(): BasketItem[] {
    persistBasket([]);
    return [];
  },

  getTotals(items = getBasketItems()): BasketTotals {
    const subtotal = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
    const deliveryFee = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;

    return {
      subtotal,
      deliveryFee,
      total: subtotal + deliveryFee,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    };
  },
};
