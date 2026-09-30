import { PageHero, Section } from "@/components/PageHero";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { mediaCoverage } from "@/lib/content";
import { formatMediaDate, groupByYear, resolveMediaCoverage } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
import { festival, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Media Coverage – Sagarpur Ramleela in the News",
  description: `News and TV coverage of the ${festival.name} and ${site.name}'s work in New Delhi.`,
  path: "/media-coverage",
});

export default async function MediaCoveragePage() {
  const groups = groupByYear(await resolveMediaCoverage(mediaCoverage));

  return (
    <>
      <PageHero
        path="/media-coverage"
        eyebrow="In the news"
        title="Media Coverage"
        intro={`News reports and TV coverage of the ${festival.name} and our community work.`}
      />

      <Section className="space-y-14">
        {groups.length > 1 ? (
          <nav aria-label="Coverage by year" className="flex flex-wrap gap-2">
            {groups.map((group) => (
              <a
                key={group.year}
                href={`#year-${group.year}`}
                className="rounded-full border border-gold/40 bg-white px-4 py-1.5 text-sm font-bold text-maroon hover:border-saffron hover:text-saffron"
              >
                {group.year} <span className="font-normal text-ink/60">({group.items.length})</span>
              </a>
            ))}
          </nav>
        ) : null}

        {groups.map((group) => (
          <section key={group.year} id={`year-${group.year}`} className="scroll-mt-28">
            <h2 className="flex items-baseline gap-3 text-3xl font-bold text-maroon">
              {group.year}
              <span className="text-sm font-semibold text-ink/60">
                {group.items.length} {group.items.length === 1 ? "story" : "stories"}
              </span>
            </h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              {group.items.map((item) => (
                <article
                  key={item.url}
                  className="flex flex-col overflow-hidden rounded-3xl border border-gold/25 bg-white"
                >
                  {item.youtube ? (
                    <YouTubeEmbed id={item.youtube.id} start={item.youtube.start} title={item.title} />
                  ) : null}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-bold tracking-[0.2em] text-saffron uppercase">
                      {item.outlet}
                      {item.outlet && item.date ? " · " : null}
                      {item.date ? <time dateTime={item.date}>{formatMediaDate(item.date)}</time> : null}
                    </p>
                    <h3 className="mt-2 text-lg leading-snug font-bold text-maroon">{item.title}</h3>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-4 text-sm font-bold text-saffron hover:text-maroon"
                    >
                      {item.youtube ? "Watch on YouTube →" : "Read the full story →"}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </Section>

      <Section tone="cream">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-maroon">Media enquiries</h2>
          <p className="mt-3 text-ink/75">
            Journalists and channels covering the Ramleela can reach the organising committee on{" "}
            <a href={site.phones[0].href} className="font-semibold text-maroon hover:text-saffron">
              {site.phones[0].display}
            </a>{" "}
            or{" "}
            <a href={`mailto:${site.email}`} className="font-semibold break-all text-maroon hover:text-saffron">
              {site.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
