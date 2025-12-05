"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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

export default function CartPage() {
  const { items, updateQty, removeItem, clear, total } = useCart();

  const tax = total * 0.2; // 20% VAT placeholder
  const grand = total + tax;

  return (
    <div className="mx-auto max-w-5xl px-4 pb-10 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Cart</h1>
        {items.length > 0 && (
          <Button variant="outline" onClick={clear}>
            Clear
          </Button>
        )}
      </div>

      {items.length === 0 ? (
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Your cart is empty</CardTitle>
            <CardDescription>Add items from the Shop.</CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-3">
            {items.map((it) => (
              <Card key={it.id} className="border-2">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="relative w-28 h-20 rounded-md overflow-hidden bg-muted">
                    <Image
                      src={it.image}
                      alt={it.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{it.name}</p>
                    <div className="text-sm text-muted-foreground">
                      €{it.price.toFixed(2)}
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <label className="text-xs" htmlFor={`qty-${it.id}`}>
                        Qty
                      </label>
                      <input
                        id={`qty-${it.id}`}
                        type="number"
                        className="w-16 border rounded px-2 py-1 text-sm bg-background"
                        value={it.qty}
                        min={1}
                        onChange={(e) =>
                          updateQty(it.id, Number(e.target.value) || 1)
                        }
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeItem(it.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">
                      €{(it.price * it.qty).toFixed(2)}
                    </Badge>
                  </div>
                </CardContent>
                <CardContent className="pt-0 pb-4 px-4">
                  <Link href={it.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="px-0">
                      Buy on Decathlon ↗
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 h-fit">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
              <CardDescription>Order totals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Estimated VAT</span>
                <span>€{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium pt-2">
                <span>Total</span>
                <span>€{grand.toFixed(2)}</span>
              </div>
              <div className="pt-3">
                <Button
                  className="w-full"
                  onClick={() =>
                    window.alert("Checkout handled on Decathlon per item.")
                  }
                >
                  Proceed
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
