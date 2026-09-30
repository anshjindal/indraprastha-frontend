"use client";

import { useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/i18n";

function HtmlLangSync({ children }: { children: React.ReactNode }) {
  const { i18n: i18nInstance } = useTranslation();

  useEffect(() => {
    const lang = (i18nInstance.resolvedLanguage || i18nInstance.language || "en").split(
      "-",
    )[0];
    document.documentElement.lang = lang;
  }, [i18nInstance.language, i18nInstance.resolvedLanguage]);

  return children;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <HtmlLangSync>{children}</HtmlLangSync>
    </I18nextProvider>
  );
}
