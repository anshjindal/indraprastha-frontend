"use client";

import { useTranslation } from "react-i18next";
import { site } from "@/lib/site";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-ivory py-16 md:py-24" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-center text-sm tracking-[0.28em] text-gold uppercase">
          {t("contact.eyebrow")}
        </p>
        <h2
          id="contact-heading"
          className="mt-2 text-center text-3xl font-semibold text-maroon md:text-5xl"
        >
          {t("contact.title")}
        </h2>
        <div className="gold-rule mx-auto my-6 max-w-xs" />
        <p className="mx-auto max-w-2xl text-center text-ink/75">
          {t("contact.body", { hours: site.hours.time })}
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-gold/30 bg-cream p-6 text-center">
            <p className="text-xs tracking-[0.18em] text-maroon uppercase">
              {t("contact.phone")}
            </p>
            <ul className="mt-3 space-y-1">
              {site.phones.map((phone) => (
                <li key={phone.id}>
                  <a
                    href={phone.href}
                    className="text-lg font-semibold text-maroon hover:text-gold"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-gold/30 bg-cream p-6 text-center">
            <p className="text-xs tracking-[0.18em] text-maroon uppercase">
              {t("contact.location")}
            </p>
            <address className="mt-3 not-italic">
              <p className="text-lg font-semibold text-maroon">
                {site.address.line1}
              </p>
              <p className="text-ink/75">{site.address.line2}</p>
            </address>
            <a
              href={site.address.googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-gold hover:text-maroon"
            >
              {t("contact.viewOnGoogle")}
            </a>
          </article>

          <article className="rounded-2xl border border-gold/30 bg-cream p-6 text-center">
            <p className="text-xs tracking-[0.18em] text-maroon uppercase">
              {t("contact.email")}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block break-all text-lg font-semibold text-maroon hover:text-gold"
            >
              {site.email}
            </a>
            <p className="mt-2 text-sm text-ink/70">
              {t("common.hoursLabel")} {site.hours.time}
            </p>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={site.address.googleListingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-maroon px-5 py-2.5 text-sm font-medium text-cream hover:bg-maroon-deep"
          >
            {t("contact.openGoogleListing")}
          </a>
          <a
            href={site.address.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-maroon/20 px-5 py-2.5 text-sm font-medium text-maroon hover:border-gold"
          >
            {t("contact.getDirections")}
          </a>
          <a
            href={site.phones[0].href}
            className="rounded-full border border-maroon/20 px-5 py-2.5 text-sm font-medium text-maroon hover:border-gold"
          >
            {t("contact.call", { phone: site.phones[0].display })}
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gold/30 shadow-lg">
          <iframe
            title={t("contact.mapTitle")}
            src={site.address.embedUrl}
            className="h-[380px] w-full border-0 md:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
