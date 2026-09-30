"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { site } from "@/lib/site";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-ivory py-16 md:py-24" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-sm tracking-[0.28em] text-gold uppercase">
            {t("about.eyebrow")}
          </p>
          <h2
            id="about-heading"
            className="mt-2 text-3xl font-semibold text-maroon md:text-5xl"
          >
            {t("about.title")}
          </h2>
          <div className="gold-rule my-6 max-w-xs" />
          <p className="text-base leading-8 text-ink/80">{t("about.p1")}</p>
          <p className="mt-4 text-base leading-8 text-ink/80">{t("about.p2")}</p>
          <p className="mt-6 text-sm font-semibold tracking-wide text-maroon uppercase">
            {t("common.hoursLabel")}: {site.hours.time}
          </p>
          <p className="mt-2 text-sm text-ink/70">
            {site.address.line1}, {site.address.line2}
          </p>
        </div>
        <Image
          src="/images/heritage-interior.jpg"
          alt={t("about.imageAlt")}
          width={900}
          height={700}
          className="h-[380px] w-full rounded-2xl object-cover shadow-lg md:h-[460px]"
        />
      </div>
    </section>
  );
}
