"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

const festivalKeys = ["janmashtami", "diwali", "holi", "radhashtami"] as const;

const festivalImages = {
  janmashtami: "/images/festival-janmashtami.jpg",
  diwali: "/images/festival-diwali.jpg",
  holi: "/images/festival-holi.jpg",
  radhashtami: "/images/diya-lotus.jpg",
} as const;

export function Festivals() {
  const { t } = useTranslation();

  return (
    <section
      id="festivals"
      className="bg-cream py-16 md:py-24"
      aria-labelledby="festivals-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-center text-sm tracking-[0.28em] text-gold uppercase">
          {t("festivals.eyebrow")}
        </p>
        <h2
          id="festivals-heading"
          className="mt-2 text-center text-3xl font-semibold text-maroon md:text-5xl"
        >
          {t("festivals.title")}
        </h2>
        <div className="gold-rule mx-auto my-6 max-w-xs" />
        <p className="mx-auto max-w-2xl text-center text-ink/75">
          {t("festivals.body")}
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {festivalKeys.map((key) => (
            <li
              key={key}
              className="overflow-hidden rounded-2xl bg-ivory shadow-md"
            >
              <Image
                src={festivalImages[key]}
                alt={t(`festivals.items.${key}.alt`)}
                width={600}
                height={400}
                className="h-44 w-full object-cover"
              />
              <div className="px-5 py-4">
                <p className="text-xs tracking-[0.18em] text-gold uppercase">
                  {t(`festivals.items.${key}.note`)}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-maroon">
                  {t(`festivals.items.${key}.title`)}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
