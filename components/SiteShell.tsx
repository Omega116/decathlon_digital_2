"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/components/i18n-context";

function LangToggle() {
  const { lang, setLang } = useI18n();
  return (
    <button
      aria-label="Toggle language"
      className="text-xs px-2 py-1 rounded-md border hover:bg-accent hover:text-accent-foreground"
      onClick={() => setLang(lang === "en" ? "fr" : "en")}
    >
      {lang === "en" ? "FR" : "EN"}
    </button>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="font-semibold">
            Muscle Selector
          </Link>
          <nav className="flex items-center gap-3 text-sm">
            <Link
              className="px-2 py-1 rounded hover:bg-accent hover:text-accent-foreground"
              href="/"
            >
              {t("home")}
            </Link>
            <Link
              className="px-2 py-1 rounded hover:bg-accent hover:text-accent-foreground"
              href="/quiz"
            >
              {t("quiz")}
            </Link>
            <Link
              className="px-2 py-1 rounded hover:bg-accent hover:text-accent-foreground"
              href="/assistant"
            >
              {t("assistant")}
            </Link>
            <Link
              className="px-2 py-1 rounded hover:bg-accent hover:text-accent-foreground"
              href="/shop"
            >
              {t("shop")}
            </Link>
            <Link
              className="px-2 py-1 rounded hover:bg-accent hover:text-accent-foreground"
              href="/cart"
            >
              {t("cart")}
            </Link>
            <LangToggle />
          </nav>
        </div>
      </header>
      <main className="pt-4 md:pt-6">{children}</main>
    </div>
  );
}
