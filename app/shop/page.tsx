"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, type Product, type ProductCategory } from "@/lib/products";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/cart-context";

const LS = {
  muscles: "ms_sel_muscles",
  equipment: "ms_sel_equipment",
} as const;

function useSelections() {
  const muscles = useMemo<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem(LS.muscles) || "[]");
    } catch {
      return [];
    }
  }, []);
  const equipment = useMemo<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem(LS.equipment) || "[]");
    } catch {
      return [];
    }
  }, []);
  return { muscles, equipment };
}

export default function ShopPage() {
  const { addItem } = useCart();
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const { muscles, equipment } = useSelections();

  const recommended = useMemo(() => {
    const tagged = new Set<string>([...muscles, ...equipment]);
    const scored = products.map((p) => ({
      p,
      score: p.tags.filter((t) => tagged.has(t)).length,
    }));
    return scored
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ p }) => p)
      .slice(0, 6);
  }, [muscles, equipment]);

  const list: Product[] = useMemo(() => {
    const byCat =
      category === "All"
        ? products
        : products.filter((p) => p.category === category);
    return byCat;
  }, [category]);

  const categories: (ProductCategory | "All")[] = [
    "All",
    "Dumbbells",
    "Resistance Bands",
    "Yoga Mats",
    "Clothing",
    "Accessories",
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h1 className="text-2xl font-semibold">Shop</h1>
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((c) => (
            <Button
              key={c}
              size="sm"
              variant={category === c ? "default" : "outline"}
              onClick={() => setCategory(c)}
            >
              {c}
            </Button>
          ))}
        </div>
      </div>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-medium">Recommended</h2>
          <Badge variant="secondary">Based on your selections</Badge>
        </div>
        {recommended.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Select muscles/equipment on Home to get personalized picks.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommended.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={() => addItem(p)} />
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={() => addItem(p)} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: () => void;
}) {
  return (
    <Card className="border-2 h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{product.name}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Badge variant="secondary">{product.category}</Badge>
          <span className="font-medium text-foreground">
            €{product.price.toFixed(2)}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-3">
        <div className="relative w-full aspect-video rounded-md overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-auto flex items-center justify-between gap-2">
          <Button onClick={onAdd}>Add to cart</Button>
          <Link
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button variant="outline">Buy on Decathlon</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
