"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { site } from "@/lib/site";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative min-h-[72vh] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/images/hero.jpg"
        alt={t("hero.imageAlt")}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-maroon-deep/70" />
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-center px-5 py-20 text-cream md:px-8">
        <p className="text-sm tracking-[0.35em] text-gold-light uppercase">
          {t("hero.welcome")}
        </p>
        <h1
          id="hero-heading"
          className="mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl"
        >
          {site.name}
        </h1>
        <div className="gold-rule my-6 max-w-xs" />
        <p className="max-w-2xl text-base leading-relaxed text-cream/90 md:text-lg">
          {t("hero.body")}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#about"
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-maroon-deep uppercase hover:bg-gold-light"
          >
            {t("hero.aboutCta")}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cream/50 px-6 py-3 text-sm font-semibold tracking-wide text-cream uppercase hover:border-gold hover:text-gold-light"
          >
            {t("hero.visitCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
