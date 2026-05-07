import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "dew-barrier-cream",
    name: "Dew Barrier Cream",
    category: "Moisturizer",
    price: 42,
    priceLabel: "$42",
    rating: 4.9,
    reviews: 428,
    skinTypes: ["Dry", "Sensitive", "Normal"],
    description:
      "A cushiony daily cream that seals hydration with ceramide, panthenol, and rice extract for a soft, rested glow.",
    benefits: ["Strengthens the moisture barrier", "Softens visible dryness", "Leaves a satin finish"],
    ingredients: ["Ceramide NP", "Panthenol", "Rice extract", "Squalane"],
    howToUse: ["Apply after serum", "Massage over face and neck", "Use morning and evening"],
    stock: 32,
    badge: "Best",
    tone: "cream",
    image: {
      src: "/images/skincare/dew-barrier-cream.png",
      alt: "Pearlescent Korean skincare cream jar on a minimal stone vanity",
    },
    gallery: [
      {
        src: "/images/skincare/dew-barrier-cream.png",
        alt: "Dew Barrier Cream jar product image",
      },
      {
        src: "/images/skincare/hero-korean-skincare.png",
        alt: "Dew Barrier Cream styled with a premium Korean skincare routine",
      },
    ],
  },
  {
    id: "hanbang-glow-serum",
    name: "Hanbang Glow Serum",
    category: "Serum",
    price: 48,
    priceLabel: "$48",
    rating: 4.8,
    reviews: 316,
    skinTypes: ["Dull", "Normal", "Combination"],
    description:
      "A silky hanbang serum with ginseng, niacinamide, and fermented botanicals to brighten and refine tired-looking skin.",
    benefits: ["Boosts radiance", "Smooths uneven tone", "Layers cleanly under cream"],
    ingredients: ["Ginseng root water", "Niacinamide", "Fermented lotus", "Beta-glucan"],
    howToUse: ["Dispense two pumps", "Press into clean skin", "Follow with moisturizer"],
    stock: 24,
    badge: "New",
    tone: "rose",
    image: {
      src: "/images/skincare/hanbang-glow-serum.png",
      alt: "Blush frosted glass Korean skincare serum bottle with soft lighting",
    },
    gallery: [
      {
        src: "/images/skincare/hanbang-glow-serum.png",
        alt: "Hanbang Glow Serum product image",
      },
      {
        src: "/images/skincare/hero-korean-skincare.png",
        alt: "Hanbang Glow Serum in a curated skincare ritual",
      },
    ],
  },
  {
    id: "calm-cica-essence",
    name: "Calm Cica Essence",
    category: "Essence",
    price: 36,
    priceLabel: "$36",
    rating: 4.7,
    reviews: 289,
    skinTypes: ["Sensitive", "Oily", "Combination"],
    description:
      "A featherlight essence powered by cica and heartleaf to visibly calm stressed skin without heaviness.",
    benefits: ["Comforts visible redness", "Hydrates without tackiness", "Preps skin for serum"],
    ingredients: ["Centella asiatica", "Heartleaf", "Madecassoside", "Hyaluronic acid"],
    howToUse: ["Pat onto freshly cleansed skin", "Layer twice on dry areas", "Continue with serum"],
    stock: 41,
    tone: "sage",
    image: {
      src: "/images/skincare/calm-cica-essence.png",
      alt: "Pale sage Korean skincare essence bottle styled with cica leaves",
    },
    gallery: [
      {
        src: "/images/skincare/calm-cica-essence.png",
        alt: "Calm Cica Essence product image",
      },
      {
        src: "/images/skincare/hero-korean-skincare.png",
        alt: "Calm Cica Essence with soft luxury skincare styling",
      },
    ],
  },
  {
    id: "silk-sun-milk",
    name: "Silk Sun Milk SPF",
    category: "SPF",
    price: 34,
    priceLabel: "$34",
    rating: 4.8,
    reviews: 357,
    skinTypes: ["All Skin", "Oily", "Combination"],
    description:
      "A weightless daily SPF milk with a breathable skin-like finish, made for seamless reapplication.",
    benefits: ["Feels light under makeup", "Softens shine", "Supports daily UV protection"],
    ingredients: ["Modern UV filters", "Green tea", "Vitamin E", "Silica"],
    howToUse: ["Shake before use", "Apply generously as the final morning step", "Reapply every two hours outdoors"],
    stock: 55,
    tone: "cream",
    image: {
      src: "/images/skincare/silk-sun-milk.png",
      alt: "Ivory Korean skincare SPF tube on an acrylic riser",
    },
    gallery: [
      {
        src: "/images/skincare/silk-sun-milk.png",
        alt: "Silk Sun Milk SPF product image",
      },
      {
        src: "/images/skincare/hero-korean-skincare.png",
        alt: "Silk Sun Milk SPF in a daylight skincare setup",
      },
    ],
  },
  {
    id: "rice-cloud-cleanser",
    name: "Rice Cloud Cleanser",
    category: "Cleanser",
    price: 28,
    priceLabel: "$28",
    rating: 4.6,
    reviews: 204,
    skinTypes: ["Normal", "Dry", "Sensitive"],
    description:
      "A creamy low-pH cleanser that lifts daily residue while keeping skin plush and comfortable.",
    benefits: ["Cleanses without tightness", "Supports a soft after-feel", "Balances morning routines"],
    ingredients: ["Rice bran water", "Amino acid surfactants", "Oat extract", "Glycerin"],
    howToUse: ["Lather with lukewarm water", "Massage for 45 seconds", "Rinse and follow with essence"],
    stock: 38,
    tone: "cream",
    image: {
      src: "/images/skincare/dew-barrier-cream.png",
      alt: "Soft ivory cleanser placeholder in a premium Korean skincare scene",
    },
    gallery: [
      {
        src: "/images/skincare/dew-barrier-cream.png",
        alt: "Rice Cloud Cleanser product image placeholder",
      },
    ],
  },
  {
    id: "rose-glass-toner",
    name: "Rose Glass Toner",
    category: "Toner",
    price: 31,
    priceLabel: "$31",
    rating: 4.7,
    reviews: 173,
    skinTypes: ["Dull", "Dry", "Normal"],
    description:
      "A petal-soft hydrating toner that replenishes after cleansing and gives skin a translucent bounce.",
    benefits: ["Refreshes dull skin", "Adds watery hydration", "Improves serum glide"],
    ingredients: ["Damask rose water", "Trehalose", "Peony extract", "Sodium PCA"],
    howToUse: ["Sweep on with palms or cotton", "Apply two layers for extra glow", "Follow with serum"],
    stock: 29,
    tone: "rose",
    image: {
      src: "/images/skincare/hanbang-glow-serum.png",
      alt: "Rose toner placeholder with blush Korean skincare styling",
    },
    gallery: [
      {
        src: "/images/skincare/hanbang-glow-serum.png",
        alt: "Rose Glass Toner product image placeholder",
      },
    ],
  },
];
