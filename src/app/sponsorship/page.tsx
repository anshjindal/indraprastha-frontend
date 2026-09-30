import { Card, PageHero, Section, SectionHeading } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ContactStrip } from "@/components/ContactStrip";
import { pageMetadata } from "@/lib/seo";
import { festival, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: `Ramleela Sponsorship in Delhi ${festival.year} – Reach 5 Lakh+ Visitors`,
  description: `Sponsor the ${festival.seoName} ${festival.year} at ${festival.venue} — title, day and Ravan Dahan sponsorships reaching ${festival.totalFootfall} visitors over ${festival.days} days in South West Delhi (${site.name}).`,
  path: "/sponsorship",
});

const reach = [
  { value: `~${festival.dailyFootfall}`, label: "visitors every day" },
  { value: festival.totalFootfall, label: "total turnout" },
  { value: `${festival.days}`, label: "days of footfall" },
  { value: `Since ${site.founded}`, label: "trusted by the community" },
];

const packages = [
  { title: "Title Sponsor", body: "Top billing across stage backdrop, entry arches, hoardings, posters and all digital promotion." },
  { title: "Co-Sponsor", body: "Prominent branding on stage and gates, with mentions during every evening's programme." },
  { title: "Day Sponsor", body: "Present one evening of the Ramlila — e.g. Ram Janmotsav, Lanka Dahan or Ravan Vadh." },
  { title: "Pootla Dehen Partner", body: "Associate your brand with the grand Dussehra finale seen by the biggest crowd of the festival." },
  { title: "Zone Sponsor", body: "Brand the food court, joy-ride zone, help desk or drinking-water stations." },
  { title: "Media & In-kind Partners", body: "Support with printing, LED screens, sound, water, refreshments or media coverage." },
];

export default function SponsorshipPage() {
  return (
    <>
      <PageHero
        path="/sponsorship"
        eyebrow={`${festival.name} ${festival.year}`}
        title="Sponsorship"
        intro="Put your brand at the heart of South West Delhi's biggest religious and cultural festival — and support a cause that serves the community all year round."
      />

      <section className="border-b border-gold/20 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4 md:px-6">
          {reach.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl font-bold text-saffron">{item.value}</p>
              <p className="mt-1 text-sm text-ink/70">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Opportunities"
          title="Sponsorship packages"
          intro="Every package can be tailored to your goals and budget. Contact us for the detailed sponsorship deck and rates."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <Card key={pkg.title} title={pkg.title}>
              {pkg.body}
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="cream" className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <EnquiryForm
          subject="Sponsorship Enquiry"
          fields={[
            { name: "company", label: "Company / brand", required: true },
            { name: "name", label: "Contact person", required: true },
            { name: "phone", label: "Mobile number", type: "tel", required: true },
            { name: "email", label: "Email", type: "email" },
            { name: "package", label: "Interested in", type: "select", options: [...packages.map((p) => p.title), "Not sure yet"], wide: true },
            { name: "message", label: "Message", type: "textarea" },
          ]}
        />
        <div className="space-y-5">
          <Card title="Why sponsor with us" icon="🌟">
            <ul className="list-disc space-y-1 pl-4">
              <li>Dense, family audience from Sagarpur, Palam, Dwarka and nearby areas</li>
              <li>Eminent dignitaries invited as Chief Guests</li>
              <li>Brand association with culture, faith and social good</li>
            </ul>
          </Card>
          <ContactStrip heading="Talk to the organising committee" />
        </div>
      </Section>
    </>
  );
}
