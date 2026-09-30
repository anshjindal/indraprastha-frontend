import Image from "next/image";
import Link from "next/link";
import { festival, navigation, site } from "@/lib/site";
import { SmartLink } from "./SmartLink";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  const groups = navigation.filter((entry) => "items" in entry);
  const mainLinks = navigation.filter((entry) => !("items" in entry));

  return (
    <footer className="bg-maroon-deep text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/iss-logo.png"
              alt={`${site.name} logo`}
              width={96}
              height={96}
              className="h-24 w-24 rounded-2xl bg-cream p-2"
            />
            <div>
              <p className="text-lg font-bold">{site.name}</p>
              <p className="font-hindi text-sm text-gold-light">{site.hindiName}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-cream/75">
            {site.registration}, founded in {site.founded}. Organisers of the {festival.name}.
          </p>
          <p className="mt-3 font-hindi text-sm text-gold-light">{site.hindiTagline}</p>
          <SocialIcons className="mt-5" />
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Explore</p>
          <nav className="mt-4 flex flex-col gap-2 text-sm text-cream/80" aria-label="Footer">
            {mainLinks.map((entry) =>
              "href" in entry ? (
                <Link key={entry.href} href={entry.href} className="hover:text-gold-light">
                  {entry.label}
                </Link>
              ) : null,
            )}
          </nav>
        </div>

        <div className="grid gap-6">
          {groups.map((group) =>
            "items" in group ? (
              <div key={group.label}>
                <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">{group.label}</p>
                <div className="mt-3 flex flex-col gap-1.5 text-sm text-cream/80">
                  {group.items.map((item) => (
                    <SmartLink key={item.href} href={item.href} className="hover:text-gold-light">
                      {item.label}
                    </SmartLink>
                  ))}
                </div>
              </div>
            ) : null,
          )}
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Get in touch</p>
          {site.offices.map((office) => (
            <address key={office.id} className="mt-4 text-sm not-italic text-cream/80">
              <span className="font-semibold text-cream">{office.label}</span>
              <br />
              {office.lines.join(", ")}
            </address>
          ))}
          <div className="mt-4 space-y-1 text-sm">
            {site.phones.map((phone) => (
              <p key={phone.id}>
                <a href={phone.href} className="hover:text-gold-light">
                  {phone.name}: {phone.display}
                </a>
              </p>
            ))}
            <p>
              <a href={`mailto:${site.email}`} className="break-all hover:text-gold-light">
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-cream/55 md:px-6">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
