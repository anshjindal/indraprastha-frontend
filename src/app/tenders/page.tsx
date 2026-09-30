import { Card, PageHero, Section, SectionHeading } from "@/components/PageHero";
import { ContactStrip } from "@/components/ContactStrip";
import { tenders } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { festival, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Tenders – Sagarpur Ramleela & Dussehra Mohotsav",
  description: `Open tenders and quotations invited by ${site.name} for the ${festival.seoName} and Dussehra Mohotsav at ${festival.venue}.`,
  path: "/tenders",
});

const categories = [
  "Tent, pandal & stage construction",
  "Lighting, sound & LED screens",
  "Security & crowd management services",
  "Effigy (Pootla) making",
  "Housekeeping & sanitation",
  "Food court & stall management",
  "Joy rides & amusement",
  "Printing, hoardings & publicity",
];

export default function TendersPage() {
  return (
    <>
      <PageHero
        path="/tenders"
        eyebrow="Procurement"
        title="Tenders"
        intro={`${site.name} invites quotations from qualified vendors for the ${festival.name} and other programmes. All tenders are published on this page.`}
      />

      <Section>
        <SectionHeading title="Open tenders" />
        {tenders.length ? (
          <div className="mt-8 overflow-x-auto rounded-3xl border border-gold/25 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-cream text-maroon">
                <tr>
                  <th className="px-5 py-3">Ref. No.</th>
                  <th className="px-5 py-3">Title</th>
                  <th className="px-5 py-3">Published</th>
                  <th className="px-5 py-3">Last date</th>
                  <th className="px-5 py-3">Document</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/20">
                {tenders.map((tender) => (
                  <tr key={tender.ref}>
                    <td className="px-5 py-3 font-semibold">{tender.ref}</td>
                    <td className="px-5 py-3">{tender.title}</td>
                    <td className="px-5 py-3">{tender.published}</td>
                    <td className="px-5 py-3">{tender.closes}</td>
                    <td className="px-5 py-3">
                      {tender.document ? (
                        <a href={tender.document} className="font-bold text-saffron hover:text-maroon">
                          Download
                        </a>
                      ) : (
                        "On request"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border-2 border-dashed border-gold/40 bg-white p-10 text-center">
            <p className="text-lg font-bold text-maroon">There are no open tenders at the moment.</p>
            <p className="mt-2 text-sm text-ink/70">
              Please check back later, or contact us to be informed when new tenders are published.
            </p>
          </div>
        )}
      </Section>

      <Section tone="cream" className="grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading title="Typical categories" intro="Vendors in these areas are encouraged to get in touch:" />
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {categories.map((category) => (
              <li key={category} className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-maroon">
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          <Card title="How the process works" icon="📑">
            <ol className="list-decimal space-y-1 pl-4">
              <li>Tender notice is published on this page with scope and last date.</li>
              <li>Sealed quotations are submitted at the registered office or by email.</li>
              <li>Bids are opened and evaluated by the organising committee.</li>
              <li>The selected vendor is informed and the result is updated here.</li>
            </ol>
          </Card>
          <ContactStrip heading="Tender enquiries" />
        </div>
      </Section>
    </>
  );
}
