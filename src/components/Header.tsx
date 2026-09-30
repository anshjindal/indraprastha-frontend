"use client";

import Image from "next/image";
import Link from "next/link";
import { SmartLink } from "./SmartLink";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 md:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/iss-logo.png"
            alt={`${site.name} – Ramleela & Dusshera Mohotsav logo`}
            width={64}
            height={64}
            priority
            className="h-14 w-14 md:h-16 md:w-16"
          />
          <span className="leading-tight">
            <span className="block text-base font-bold text-maroon md:text-lg">{site.name}</span>
            <span className="block text-xs text-maroon/70">
              {site.registration.split(" under")[0]} · Since {site.founded}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {navigation.map((entry) =>
            "items" in entry ? (
              <div key={entry.label} className="group relative">
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold ${
                    entry.items.some((i) => isActive(i.href)) ? "text-saffron" : "text-maroon"
                  } hover:text-saffron`}
                  aria-haspopup="true"
                >
                  {entry.label}
                  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden>
                    <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
                  </svg>
                </button>
                <div className="invisible absolute left-0 top-full min-w-56 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-gold/30 bg-white p-2 shadow-xl shadow-maroon/10">
                    {entry.items.map((item) => (
                      <SmartLink
                        key={item.href}
                        href={item.href}
                        className={`block rounded-xl px-4 py-2.5 text-sm ${
                          isActive(item.href) ? "bg-cream font-semibold text-maroon" : "text-ink hover:bg-cream"
                        }`}
                      >
                        {item.label}
                      </SmartLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={entry.href}
                href={entry.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold ${
                  isActive(entry.href) ? "text-saffron" : "text-maroon hover:text-saffron"
                }`}
              >
                {entry.label}
              </Link>
            ),
          )}
          <SmartLink
            href={site.donateUrl}
            className="ml-2 rounded-full bg-saffron px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-saffron/30 hover:bg-maroon"
          >
            Donate
          </SmartLink>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-maroon/20 text-maroon xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-maroon transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute top-1.5 left-0 h-0.5 w-5 bg-maroon transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-maroon transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-gold/20 px-4 pb-6 xl:hidden" aria-label="Mobile">
          {navigation.map((entry) =>
            "items" in entry ? (
              <div key={entry.label} className="mt-4">
                <p className="text-xs font-bold tracking-[0.2em] text-saffron uppercase">{entry.label}</p>
                {entry.items.map((item) => (
                  <SmartLink
                    key={item.href}
                    href={item.href}
                    className={`block py-2 pl-3 text-base ${isActive(item.href) ? "font-semibold text-saffron" : "text-maroon"}`}
                  >
                    {item.label}
                  </SmartLink>
                ))}
              </div>
            ) : (
              <Link
                key={entry.href}
                href={entry.href}
                className={`mt-2 block py-2 text-lg font-semibold ${isActive(entry.href) ? "text-saffron" : "text-maroon"}`}
              >
                {entry.label}
              </Link>
            ),
          )}
          <SmartLink
            href={site.donateUrl}
            className="mt-6 block rounded-full bg-saffron py-3 text-center font-bold text-white"
          >
            Donate
          </SmartLink>
        </nav>
      ) : null}
    </header>
  );
}
