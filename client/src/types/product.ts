export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  priceLabel: string;
  rating: number;
  reviews: number;
  skinTypes: string[];
  description: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string[];
  stock: number;
  badge?: string;
  tone: "rose" | "sage" | "cream";
  image: {
    src: string;
    alt: string;
  };
  gallery: {
    src: string;
    alt: string;
  }[];
};
