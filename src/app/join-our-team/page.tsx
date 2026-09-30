import type { Metadata } from "next";
import { Card, PageHero, Section, SectionHeading } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ContactStrip } from "@/components/ContactStrip";
import { festival, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join our Team",
  description: `Volunteer with ${site.name} for the ${festival.name} ${festival.year} and our social welfare drives.`,
  alternates: { canonical: "/join-our-team" },
};

const roles = [
  { icon: "🎭", title: "Stage & Ramlila Support", body: "Backstage help, costumes, props, sound and lighting coordination." },
  { icon: "🛡️", title: "Crowd & Visitor Management", body: "Guide visitors, manage entry gates and queues, and keep families safe." },
  { icon: "🏪", title: "Stalls & Food Court", body: "Coordinate vendors, hygiene checks and the smooth running of the mela." },
  { icon: "📣", title: "Publicity & Social Media", body: "Posters, WhatsApp groups, reels and live updates from the ground." },
  { icon: "📸", title: "Photography & Video", body: "Capture the Ramlila, Pootla Dehen and cultural events." },
  { icon: "🩺", title: "First Aid & Welfare", body: "Support first-aid desks, lost-and-found and our health awareness drives." },
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer with us"
        title="Join our Team"
        hindi="सेवा ही संगठन है"
        intro={`Every year our volunteers make the ${festival.name} possible. Give a few hours or all ${festival.days} days — every helping hand matters.`}
      />

      <Section>
        <SectionHeading eyebrow="Where you can help" title="Volunteer roles" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <Card key={role.title} title={role.title} icon={role.icon}>
              {role.body}
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="cream" className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <EnquiryForm
          subject="Volunteer Application"
          intro="Tell us a little about yourself and we will reach out before the festival."
          fields={[
            { name: "name", label: "Full name", required: true },
            { name: "phone", label: "Mobile number", type: "tel", required: true },
            { name: "email", label: "Email", type: "email" },
            { name: "age", label: "Age", type: "number" },
            { name: "area", label: "Locality / Area", placeholder: "e.g. Sagarpur, Palam, Dwarka" },
            { name: "role", label: "Preferred role", type: "select", options: [...roles.map((r) => r.title), "Anywhere I'm needed"] },
            {
              name: "availability",
              label: "Availability",
              type: "select",
              options: [`All ${festival.days} days`, "Weekends only", "Evenings only", "Specific days (mention below)"],
              wide: true,
            },
            { name: "message", label: "Anything else we should know?", type: "textarea" },
          ]}
        />
        <div className="space-y-5">
          <Card title="What you get" icon="🙏">
            <ul className="list-disc space-y-1 pl-4">
              <li>Be part of one of Delhi&apos;s biggest Ramleelas</li>
              <li>Certificate of appreciation</li>
              <li>A community that serves together all year round</li>
            </ul>
          </Card>
          <ContactStrip />
        </div>
      </Section>
    </>
  );
}
