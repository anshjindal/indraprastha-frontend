import Image from "next/image";
import { PageHero, Section } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { ScheduleTable } from "@/components/ScheduleTable";
import { schedule2026 } from "@/lib/schedule";
import { pageMetadata } from "@/lib/seo";
import { festival, mapsDirectionsUrl } from "@/lib/site";
import { eventLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: `Ramleela Schedule ${festival.year} – Sagarpur, Delhi (${festival.dateLabel})`,
  description: `Day-by-day Ramlila schedule of the ${festival.seoName} ${festival.year} at ${festival.venue}: Ram Janmotsav 12 Oct, Sita Haran 16 Oct, Lanka Dahan 18 Oct and Ravan Dahan on Dussehra, 20 Oct.`,
  path: "/schedule",
  keywords: ["Ramleela schedule 2026", "Ramlila time table Delhi", "Ravan Dahan date 2026", "रामलीला कार्यक्रम 2026"],
});

export default function SchedulePage() {
  return (
    <>
      <JsonLd data={eventLd} />
      <PageHero
        path="/schedule"
        eyebrow={`कार्यक्रम · ${festival.year}`}
        title={`Ramleela Schedule ${festival.year}`}
        hindi={`${festival.hindiName} ${festival.year}`}
        intro={`${festival.days} days of Ramlila at ${festival.venue}, ${festival.dateLabel}. आप सभी सादर आमंत्रित हैं — you are all warmly invited.`}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={festival.poster}
            download="Ramleela-Sagarpur-Schedule-2026.jpg"
            className="rounded-full bg-saffron-light px-6 py-3 text-sm font-bold text-maroon-deep hover:bg-gold-light"
          >
            Download Poster
          </a>
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/50 px-6 py-3 text-sm font-bold hover:border-gold-light hover:text-gold-light"
          >
            Directions to {festival.venue}
          </a>
        </div>
      </PageHero>

      <Section className="grid gap-12 lg:grid-cols-[1.7fr_1fr]">
        <ScheduleTable days={schedule2026} />
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <a href={festival.poster} target="_blank" rel="noopener" className="block">
            <Image
              src={festival.poster}
              alt={`${festival.name} ${festival.year} schedule poster`}
              width={723}
              height={1024}
              className="w-full rounded-3xl shadow-xl shadow-maroon/15"
            />
          </a>
          <p className="text-center font-hindi text-maroon">सत्य की विजय • अधर्म का अंत • मर्यादा का संदेश</p>
        </aside>
      </Section>
    </>
  );
}
