import Image from "next/image";
import Link from "next/link";
import { PageHero, Section } from "@/components/PageHero";
import { achievements } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Achievements & Recognition",
  description: `Certificates and recognition received by ${site.name}, including Navbharat Times' Vishisht Ramleela 2024 award and the Ministry of Education's Vidyanjali certificate.`,
  keywords: ["Vishisht Ramleela", "NBT Dussehra Darpan", "best Ramleela Delhi"],
  path: "/achievements",
});

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        path="/achievements"
        eyebrow="Recognition"
        title="Achievements"
        intro={`Certificates and recognition received by ${site.name} for its service to the community.`}
      />

      <Section className="space-y-10">
        {achievements.map((item) => (
          <article
            key={item.title}
            className="grid gap-8 overflow-hidden rounded-3xl border border-gold/25 bg-white p-6 md:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center"
          >
            <a
              href={item.document ?? item.image.src}
              target="_blank"
              rel="noopener"
              className={`block overflow-hidden rounded-2xl border border-gold/20 ${
                item.image.height > item.image.width ? "mx-auto w-full max-w-sm" : ""
              }`}
            >
              <Image
                src={item.image.src}
                alt={`${item.title} awarded to ${site.name}`}
                width={item.image.width}
                height={item.image.height}
                className="h-auto w-full"
              />
            </a>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-saffron uppercase">
                <time dateTime={item.dateIso}>{item.date}</time>
              </p>
              <h2 className="mt-2 text-2xl font-bold text-maroon md:text-3xl">{item.title}</h2>
              <p className="mt-2 text-sm font-semibold text-ink/70">{item.issuer}</p>
              <p className="mt-4 leading-relaxed text-ink/80">{item.summary}</p>
              {item.document ? (
                <a
                  href={item.document}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-block rounded-full bg-maroon px-6 py-3 text-sm font-bold text-cream hover:bg-saffron"
                >
                  View certificate (PDF)
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </Section>

      <Section tone="cream">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-maroon">Work with us</h2>
          <p className="mt-3 text-ink/75">
            Schools, companies and community groups can partner with us on education, health and welfare drives.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/join-our-team"
              className="rounded-full bg-saffron px-6 py-3 text-sm font-bold text-white hover:bg-maroon"
            >
              Join our Team
            </Link>
            <Link
              href="/sponsorship"
              className="rounded-full border border-maroon/30 px-6 py-3 text-sm font-bold text-maroon hover:border-saffron hover:text-saffron"
            >
              CSR &amp; Sponsorship
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
