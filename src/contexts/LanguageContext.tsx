import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { locales, LocaleContent } from "../lib/locales";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  content: LocaleContent;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Sync with saved selection or default to English
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("zool-lang") as Language;
      if (saved === "en" || saved === "ar") return saved;
    }
    return "en";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "ar" : "en";
      localStorage.setItem("zool-lang", next);
      return next;
    });
  };

  const isRtl = language === "ar";
  const content = locales[language];

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", language);
    root.setAttribute("dir", isRtl ? "rtl" : "ltr");
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
