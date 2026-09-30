"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/locales/en/translation.json";
import hi from "@/locales/hi/translation.json";
import fr from "@/locales/fr/translation.json";
import pa from "@/locales/pa/translation.json";
import ta from "@/locales/ta/translation.json";
import te from "@/locales/te/translation.json";
import gu from "@/locales/gu/translation.json";
import mr from "@/locales/mr/translation.json";

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  fr: { translation: fr },
  pa: { translation: pa },
  ta: { translation: ta },
  te: { translation: te },
  gu: { translation: gu },
  mr: { translation: mr },
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      debug: false,
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
      },
    });
}

export default i18n;
