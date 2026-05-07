import { products } from "@/mocks/products";
import type { Product } from "@/types/product";

export type ProductQuery = {
  search?: string;
  category?: string;
  skinType?: string;
  sort?: "featured" | "price-asc" | "price-desc" | "rating";
};

export const productService = {
  getProducts(query: ProductQuery = {}): Product[] {
    const search = query.search?.trim().toLowerCase();
    const category = query.category ?? "All";
    const skinType = query.skinType ?? "All";

    const filtered = products.filter((product) => {
      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search);
      const matchesCategory = category === "All" || product.category === category;
      const matchesSkinType =
        skinType === "All" || product.skinTypes.includes(skinType);

      return matchesSearch && matchesCategory && matchesSkinType;
    });

    return [...filtered].sort((a, b) => {
      if (query.sort === "price-asc") {
        return a.price - b.price;
      }

      if (query.sort === "price-desc") {
        return b.price - a.price;
      }

      if (query.sort === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  },

  getProductById(id: string): Product | undefined {
    return products.find((product) => product.id === id);
  },

  getFeaturedProducts(): Product[] {
    return products.slice(0, 4);
  },

  getCategories(): string[] {
    return ["All", ...Array.from(new Set(products.map((product) => product.category)))];
  },

  getSkinTypes(): string[] {
    return [
      "All",
      ...Array.from(new Set(products.flatMap((product) => product.skinTypes))),
    ];
  },
};
