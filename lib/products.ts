export type ProductCategory =
  | "Dumbbells"
  | "Resistance Bands"
  | "Yoga Mats"
  | "Clothing"
  | "Accessories";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number; // in EUR
  image: string; // Remote image URL (Decathlon public CDN when possible)
  url: string; // External product page (Decathlon)
  tags: string[]; // e.g. equipment type for recommendations
}

export const products: Product[] = [
  {
    id: "db-hex-10kg",
    name: "Hex Dumbbells 10kg (Pair)",
    category: "Dumbbells",
    price: 59.99,
    image:
      "https://contents.mediadecathlon.com/p2154143/k$87736fb3b02f3f4cb37fb770f5bd7420/hex-dumbbells.jpg",
    url: "https://www.decathlon.com/",
    tags: ["dumbbell", "chest", "shoulders", "arms"],
  },
  {
    id: "db-adjust-20kg",
    name: "Adjustable Dumbbells 20kg",
    category: "Dumbbells",
    price: 89.99,
    image:
      "https://contents.mediadecathlon.com/p2036380/k$9b4b3f5053acb3e5fede95ca8ea1fdc3/adjustable-dumbbell.jpg",
    url: "https://www.decathlon.com/",
    tags: ["dumbbell", "home", "strength"],
  },
  {
    id: "band-set",
    name: "Resistance Bands Set (Light/Medium/Heavy)",
    category: "Resistance Bands",
    price: 24.99,
    image:
      "https://contents.mediadecathlon.com/p1801133/k$1a3a9f9a83a5d7a21d0e7a06a731e0a7/resistance-bands.jpg",
    url: "https://www.decathlon.com/",
    tags: ["band", "rehab", "mobility"],
  },
  {
    id: "yoga-mat",
    name: "Comfort Yoga Mat 8mm",
    category: "Yoga Mats",
    price: 19.99,
    image:
      "https://contents.mediadecathlon.com/p1475250/k$73f2613d3e62f7e46f0f4004eaf78e0d/yoga-mat.jpg",
    url: "https://www.decathlon.com/",
    tags: ["mat", "core", "stretch"],
  },
  {
    id: "pullup-bar",
    name: "Doorway Pull-Up Bar",
    category: "Accessories",
    price: 34.99,
    image:
      "https://contents.mediadecathlon.com/p1563426/k$3d6ddfb8ea142777da153eba6d9a9f9b/pullup-bar.jpg",
    url: "https://www.decathlon.com/",
    tags: ["pull-up-bar", "back", "lats"],
  },
  {
    id: "kb-12kg",
    name: "Kettlebell 12kg",
    category: "Accessories",
    price: 39.99,
    image:
      "https://contents.mediadecathlon.com/p2169932/k$4a3b4b17e0d7b29c2a6a9ff3d9a67b84/kettlebell.jpg",
    url: "https://www.decathlon.com/",
    tags: ["kettlebell", "glutes", "hamstrings"],
  },
  {
    id: "tee-dryfit",
    name: "Dry-Fit Training T-Shirt",
    category: "Clothing",
    price: 14.99,
    image:
      "https://contents.mediadecathlon.com/p1576956/k$b2ddf2999a92ac50b0ca0d91c4630b27/training-shirt.jpg",
    url: "https://www.decathlon.com/",
    tags: ["clothing"],
  },
  {
    id: "bench-flat",
    name: "Flat Training Bench",
    category: "Accessories",
    price: 79.99,
    image:
      "https://contents.mediadecathlon.com/p1743969/k$39f061a76011e75e58269fdc880b1bf9/flat-bench.jpg",
    url: "https://www.decathlon.com/",
    tags: ["bench", "chest", "triceps"],
  },
];
