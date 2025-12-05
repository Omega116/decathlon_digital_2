"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type Lang = "en" | "fr";

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const I18N_STORAGE_KEY = "ms_i18n_lang";

const DICT: Record<Lang, Record<string, string>> = {
  en: {
    home: "Home",
    quiz: "Quiz",
    assistant: "Assistant",
    shop: "Shop",
    cart: "Cart",
    filters: "Workout Filters",
    equipment: "Equipment",
    difficulty: "Difficulty",
    required: "Required",
    optional: "Optional",
    selected: "selected",
    muscleSelector: "Muscle Selector",
  },
  fr: {
    home: "Accueil",
    quiz: "Quiz",
    assistant: "Assistant",
    shop: "Boutique",
    cart: "Panier",
    filters: "Filtres d'entraînement",
    equipment: "Équipement",
    difficulty: "Difficulté",
    required: "Requis",
    optional: "Optionnel",
    selected: "sélectionné(s)",
    muscleSelector: "Sélection des muscles",
  },
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem(I18N_STORAGE_KEY) as Lang | null;
    return saved === "en" || saved === "fr" ? saved : "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(I18N_STORAGE_KEY, l);
    } catch {}
  };

  const t = useMemo(() => {
    const dict = DICT[lang];
    return (key: string) => dict[key] ?? key;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
