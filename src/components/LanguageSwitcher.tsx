"use client";

import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी" },
  { code: "fr", name: "Français" },
  { code: "pa", name: "ਪੰਜਾਬੀ" },
  { code: "ta", name: "தமிழ்" },
  { code: "te", name: "తెలుగు" },
  { code: "gu", name: "ગુજરાતી" },
  { code: "mr", name: "मराठी" },
] as const;

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  const currentLanguage = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "en"
  ).split("-")[0];

  return (
    <label className={`inline-flex items-center ${className}`}>
      <span className="sr-only">Language</span>
      <select
        value={currentLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="min-w-[7.5rem] rounded-full border border-maroon/20 bg-ivory px-3 py-1.5 text-sm text-maroon outline-none hover:border-gold focus:border-gold"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </label>
  );
}
