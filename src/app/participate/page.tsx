import type { Metadata } from "next";
import { Card, PageHero, Section, SectionHeading } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ContactStrip } from "@/components/ContactStrip";
import { festival } from "@/lib/site";

export const metadata: Metadata = {
  title: "Participate",
  description: `Perform in the Ramlila, bring your cultural troupe or set up a stall at the ${festival.name} ${festival.year}.`,
  alternates: { canonical: "/participate" },
};

const ways = [
  { icon: "🏹", title: "Ramlila Artist", body: "Act, sing or play music in the Ramlila. Experienced artists and enthusiastic newcomers are both welcome." },
  { icon: "🎶", title: "Cultural Performer / Troupe", body: "Bhajan mandalis, folk and classical dance groups, and school cultural teams." },
  { icon: "🛍️", title: "Shop / Food Court Stall", body: `Set up a food or shopping stall and meet ~${festival.dailyFootfall} visitors every day.` },
  { icon: "🎡", title: "Joy Ride Operator", body: "Licensed ride and amusement operators for the family fun zone." },
  { icon: "🪔", title: "Devotional Seva", body: "Join the daily aarti, prasad distribution and puja arrangements." },
  { icon: "🤲", title: "Community Groups", body: "RWAs, schools and NGOs can partner with us for awareness stalls and activities." },
];

export default function ParticipatePage() {
  return (
    <>
      <PageHero
        eyebrow="Be on the stage, or behind it"
        title="Participate"
        intro={`The ${festival.name} is built by the community. Here is how you can take part in ${festival.year}.`}
      />

      <Section>
        <SectionHeading title="Ways to participate" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map((way) => (
            <Card key={way.title} title={way.title} icon={way.icon}>
              {way.body}
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="cream" className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <EnquiryForm
          subject="Participation Request"
          fields={[
            { name: "type", label: "I want to participate as", type: "select", options: ways.map((w) => w.title), required: true },
            { name: "name", label: "Name / group name", required: true },
            { name: "phone", label: "Mobile number", type: "tel", required: true },
            { name: "email", label: "Email", type: "email" },
            { name: "members", label: "Number of people", type: "number" },
            { name: "days", label: "Preferred days", placeholder: "e.g. 12–15 Oct, or all days" },
            { name: "details", label: "Experience, stall type or performance details", type: "textarea" },
          ]}
        />
        <div className="space-y-5">
          <Card title="Stall bookings" icon="📍">
            Stall spaces in the food court and shopping area are limited and allotted on a first-come basis. Rates and
            space details are shared by our team on enquiry.
          </Card>
          <ContactStrip />
        </div>
      </Section>
    </>
  );
}
