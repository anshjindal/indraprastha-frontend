import Image from "next/image";
import Link from "next/link";
import { PageHero, Section } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { festival, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Quality Policy",
  description: `Quality Policy of ${site.name}, organisers of the ${festival.name}: beneficiary focus, continuous improvement, ISO 9001:2015 alignment and ethical conduct.`,
  path: "/quality-policy",
});

const principles = [
  {
    icon: "🎯",
    title: "Beneficiary Focus",
    body: "We understand that our success depends on the satisfaction of our stakeholders, including participants, attendees, sponsors, and community members. We are dedicated to meeting their expectations by delivering services that consistently meet or exceed their requirements.",
  },
  {
    icon: "📈",
    title: "Continuous Improvement",
    body: "We believe in the importance of ongoing improvement to enhance our efficiency, effectiveness, and overall performance. We encourage the participation and involvement of our staff and volunteers to identify opportunities for improvement and implement appropriate measures to enhance our processes and services.",
  },
  {
    icon: "📜",
    title: "Compliance with Standards",
    body: "We are determined to adhere to applicable legal and regulatory requirements, as well as international standards and best practices. We are eager to obtain ISO 9001:2015 certification to demonstrate our commitment to quality management systems and continuous improvement.",
  },
  {
    icon: "⚙️",
    title: "Process Approach",
    body: "We recognize the value of a systematic approach to managing our operations. By implementing well-defined processes and procedures, we can ensure consistency, traceability, and reliability in the delivery of our services.",
  },
  {
    icon: "🤝",
    title: "Stakeholder Engagement",
    body: "We actively engage with our stakeholders to understand their needs, expectations, and feedback. By fostering open and transparent communication, we strive to build strong relationships and maintain a customer-centric approach in all our activities.",
  },
  {
    icon: "🎓",
    title: "Training and Development",
    body: "We invest in the continuous training and development of our staff and volunteers to enhance their skills, knowledge, and capabilities. By nurturing a culture of learning, we empower our team to deliver their best and contribute to the overall quality and success of our organization.",
  },
  {
    icon: "🛡️",
    title: "Risk Management",
    body: "We are committed to identifying and managing risks that could impact the quality and safety of our services. Through proactive risk assessment and mitigation measures, we aim to ensure a safe and enjoyable experience for all stakeholders involved in the Ramleela Dusshera festival.",
  },
  {
    icon: "⚖️",
    title: "Ethical Conduct",
    body: "We uphold the highest standards of ethics and integrity in all our interactions and operations. We foster a culture of honesty, transparency, and respect, treating all individuals with fairness and dignity.",
  },
];

export default function QualityPolicyPage() {
  return (
    <>
      <PageHero path="/quality-policy" eyebrow="Governance" title="Quality Policy" hindi={`Quality Policy: ${site.name}`} />

      <Section>
        <p className="max-w-4xl text-lg leading-relaxed text-ink/85 md:text-xl">
          At {site.name}, we are committed to delivering high-quality services and ensuring the utmost satisfaction of
          our stakeholders. As an organization that organizes the annual Ramleela Dusshera festival, we strive for
          excellence in all aspects of our operations. To reinforce this commitment, we have established the following
          quality policy:
        </p>

        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {principles.map((item, index) => (
            <li key={item.title} className="rounded-3xl border border-gold/25 bg-white p-6 shadow-sm shadow-maroon/5 md:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream text-xl" aria-hidden>
                  {item.icon}
                </span>
                <h2 className="text-lg font-bold text-maroon">
                  <span className="mr-1 text-saffron">{index + 1}.</span> {item.title}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/80 md:text-[0.95rem]">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="cream" className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-center">
        <div className="space-y-4 leading-relaxed text-ink/85">
          <p>
            This quality policy serves as a framework to guide our actions and decisions, enabling us to consistently
            deliver high-quality services and meet the expectations of our stakeholders. We review and revise this policy
            periodically to ensure its continued relevance and alignment with our organizational goals and values.
          </p>
          <p>
            By adhering to this quality policy, {site.name} is dedicated to achieving excellence and becoming a trusted
            and recognized organization in the organization of the Ramleela Dusshera festival.
          </p>
          <p className="text-sm">
            See how this policy is put into practice in our{" "}
            <Link href="/quality-manual" className="font-bold text-saffron hover:text-maroon">
              Quality Manual
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-4 rounded-3xl bg-white p-6">
          <Image
            src={site.chairperson.photo}
            alt={site.chairperson.name}
            width={80}
            height={80}
            className="h-20 w-20 shrink-0 rounded-full object-cover object-top"
          />
          <div>
            <p className="text-lg font-bold text-maroon">{site.chairperson.name}</p>
            <p className="text-sm text-ink/70">{site.chairperson.title}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
