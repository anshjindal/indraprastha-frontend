"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { site } from "@/lib/site";

const navItems = [
  { href: "#top", key: "home" },
  { href: "#about", key: "about" },
  { href: "#festivals", key: "festivals" },
  { href: "#contact", key: "contact" },
] as const;

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-maroon-deep py-14 text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3 md:px-8">
        <div>
          <Image
            src="/images/logo.png"
            alt={`${site.name} logo`}
            width={72}
            height={72}
            className="h-[72px] w-[72px] rounded-full bg-black object-cover"
          />
          <p className="mt-4 font-semibold">{site.name}</p>
          <p className="mt-2 text-sm leading-6 text-cream/70">
            {t("footer.blurb")}
          </p>
        </div>

        <div>
          <p className="text-sm tracking-[0.2em] text-gold uppercase">
            {t("footer.navigation")}
          </p>
          <nav className="mt-4 flex flex-col gap-2 text-cream/80" aria-label="Footer">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold-light">
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <a
              href={site.address.googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-light"
            >
              {t("nav.googleListing")}
            </a>
          </nav>
        </div>

        <div>
          <p className="text-sm tracking-[0.2em] text-gold uppercase">
            {t("footer.getInTouch")}
          </p>
          <address className="mt-4 text-sm not-italic text-cream/80">
            {site.address.line1}
            <br />
            {site.address.line2}
          </address>
          <p className="mt-3 text-sm">
            <a href={`mailto:${site.email}`} className="hover:text-gold-light">
              {site.email}
            </a>
          </p>
          {site.phones.map((phone) => (
            <p key={phone.id} className="text-sm">
              <a href={phone.href} className="hover:text-gold-light">
                {phone.display}
              </a>
            </p>
          ))}
          <p className="mt-3 text-sm text-cream/70">
            {t("footer.daily", { hours: site.hours.time })}
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-center text-sm text-cream/50 md:px-8">
        © {new Date().getFullYear()} {site.name}. {t("footer.rights")}
      </p>
    </footer>
  );
}
