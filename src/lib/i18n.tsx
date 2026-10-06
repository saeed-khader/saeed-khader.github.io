import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "@/data/portfolio";

type Bi = { ar: string; en: string };

type Ctx = {
  lang: Lang;
  dir: "rtl" | "ltr";
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (v: Bi) => string;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const stored = localStorage.getItem("saeed-lang");
    if (stored === "ar" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.documentElement.dataset["lang"] = lang;
    localStorage.setItem("saeed-lang", lang);
  }, [lang, dir]);

  const value: Ctx = {
    lang,
    dir,
    setLang,
    toggle: () => setLang((l) => (l === "ar" ? "en" : "ar")),
    t: (v) => (v ? v[lang] : ""),
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
