import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/PageHero";
import { festival, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quality Manual",
  description: `Quality manual of ${site.name}, based on the NGO Quality Standard (ICONG, version 5), describing how the ${festival.name} and welfare activities are planned, run, measured and improved.`,
  alternates: { canonical: "/quality-manual" },
};

const referenceStandard = {
  title: "NGO Quality Standard, Version 5 (ICONG – Instituto para la Calidad de las ONG)",
  url: "https://icong.org/wp-content/uploads/2020/03/2020_02_Norma_V5_ingles.pdf",
};

const sections = [
  { id: "introduction", title: "1. Introduction & Scope" },
  { id: "mission", title: "2. Mission, Vision & Values" },
  { id: "principles", title: "3. Guiding Principles" },
  { id: "system", title: "4. General System Requirements" },
  { id: "commitment", title: "5. Institutional Commitment" },
  { id: "processes", title: "6. Process-Based Management" },
  { id: "key-processes", title: "7. Key Processes" },
  { id: "support-processes", title: "8. Support Processes" },
  { id: "measurement", title: "9. Measurement & Evaluation" },
  { id: "improvement", title: "10. Improvement" },
  { id: "annex", title: "Annex: References & Revisions" },
];

const principleGroups = [
  {
    title: "People-oriented",
    items: [
      ["Human dignity", "Every visitor, artist, volunteer and beneficiary is treated with equal dignity and respect."],
      ["Defence of rights", "Our programmes are open to all and protect the rights of the people we serve."],
      ["Orientation to each person", "We plan around the needs of devotees, families, children, senior citizens and the underprivileged."],
    ],
  },
  {
    title: "Organisation-focused",
    items: [
      ["Orientation to stakeholders", "Needs of attendees, participants, sponsors, donors, authorities and the community guide our planning."],
      ["Value of volunteering", "Volunteers are the heart of the Samiti and are involved in every activity."],
      ["Participation", "Members, volunteers and the community take part in planning and review."],
      ["Professionalism", "We build the skills of our team through briefing, training and experience."],
      ["Effectiveness & efficiency", "Resources are used carefully to achieve the best results for the community."],
      ["Continuous improvement", "Every festival is reviewed so that the next one is better."],
      ["Mission-oriented management", "All processes are managed as one system aligned with our mission."],
    ],
  },
  {
    title: "Society-oriented",
    items: [
      ["Solidarity", "We cooperate with residents, RWAs, authorities and other organisations for the common good."],
      ["Trust", "We earn the trust of society by staying true to our mission and values."],
      ["Transparency", "Information about our activities, tenders and policies is made public."],
      ["Accountability", "We report on our commitments to members, donors, sponsors and the community."],
      ["Democratic commitment", "Decisions are taken through dialogue within the organising committee and with stakeholders."],
      ["Openness & social involvement", "We engage with social issues such as winter relief and health awareness."],
    ],
  },
] as const;

const processMap = [
  {
    type: "Strategic processes",
    items: ["Mission, policy & objectives", "Annual planning & management review", "Stakeholder relations"],
  },
  {
    type: "Key processes",
    items: [
      `${festival.name} (Ramlila, Pootla Dehen, mela)`,
      "Cultural events & competitions",
      "Social welfare drives (blankets, health awareness)",
    ],
  },
  {
    type: "Support processes",
    items: ["People & volunteer management", "Purchasing & tenders", "Economic management & donations", "Communication"],
  },
  {
    type: "Measurement processes",
    items: ["Indicators & feedback", "Internal audit", "Non-conformities & complaints", "Improvement actions"],
  },
];

const indicators = [
  ["Visitor & participant satisfaction", "Feedback forms, help-desk and online feedback collected during the festival"],
  ["Safety", "Number and severity of incidents recorded at the first-aid and help desks"],
  ["Schedule adherence", "Ramlila episodes staged as per the published daily schedule"],
  ["Complaint handling", "Share of complaints and suggestions answered and closed on time"],
  ["Volunteer readiness", "Share of volunteers registered, briefed and assigned before the festival"],
  ["Vendor performance", "Work completed on time and to specification by tendered vendors"],
  ["Welfare reach", "Blankets distributed and people reached through awareness drives against plan"],
  ["Financial compliance", "Donations receipted and payments made against approved bills"],
];

export default function QualityManualPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Quality Manual"
        intro={`How ${site.name} plans, delivers, measures and improves the ${festival.name} and its social welfare activities — based on the NGO Quality Standard and our Quality Policy.`}
      >
        <dl className="mt-8 grid max-w-3xl gap-3 text-sm sm:grid-cols-2">
          {[
            ["Organisation", site.name],
            ["Reference standard", "NGO Quality Standard v5 (ICONG)"],
            ["Approved by", `${site.chairperson.name}, Chairperson`],
            ["Last reviewed", `September ${festival.year}`],
          ].map(([term, value]) => (
            <div key={term} className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15">
              <dt className="text-xs tracking-[0.15em] text-gold-light uppercase">{term}</dt>
              <dd className="mt-1 font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section className="grid gap-12 lg:grid-cols-[16rem_1fr]">
        <nav className="lg:sticky lg:top-28 lg:self-start" aria-label="Contents">
          <p className="text-xs font-bold tracking-[0.2em] text-saffron uppercase">Contents</p>
          <ol className="mt-4 space-y-2 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-maroon hover:text-saffron">
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
          <a
            href={referenceStandard.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full border border-maroon/25 px-4 py-2 text-xs font-bold text-maroon hover:border-saffron hover:text-saffron"
          >
            Reference standard (PDF) ↗
          </a>
        </nav>

        <article className="prose-iss max-w-3xl text-ink/85">
          <h2 id="introduction" className="!mt-0 scroll-mt-28">1. Introduction &amp; Scope</h2>
          <p>
            This Quality Manual describes the quality management system of {site.name}, a{" "}
            registered society under the Societies Registration Act, founded in {site.founded}. It is based on the principles and requirements
            of the{" "}
            <a href={referenceStandard.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-saffron">
              {referenceStandard.title}
            </a>
            , a quality standard designed for non-governmental social organisations, and supports our goal of working
            towards ISO 9001:2015 certification.
          </p>
          <p>The system applies to:</p>
          <ul>
            <li>
              The annual <strong>{festival.name}</strong> at {festival.venue} — Ramlila, Pootla Dehen, joy rides and the
              Shop/Food Court.
            </li>
            <li>Cultural events and competitions such as Dandiya Night, drawing and dance competitions.</li>
            <li>Social welfare activities, including blanket distribution and health awareness drives.</li>
            <li>The support activities behind them: volunteers, purchasing, finance and communication.</li>
          </ul>

          <h2 id="mission" className="scroll-mt-28">2. Mission, Vision &amp; Values</h2>
          <p>
            <strong>Mission:</strong> To serve society and promote its welfare through cultural and religious programmes,
            social welfare activities and support for the underprivileged.
          </p>
          <p>
            <strong>Vision:</strong> A compassionate, inclusive society where our culture and traditions bring every
            community together, and a trusted, recognised organisation for the Ramleela Dusshera festival.
          </p>
          <p>
            <strong>Values:</strong> <span className="font-hindi">{site.hindiTagline}</span> — Dharma, Sanskriti, Sewa
            and Samaj — together with honesty, transparency and respect for every individual.
          </p>
          <p>
            <strong>Quality Policy:</strong> our commitments are set out in the public{" "}
            <Link href="/quality-policy" className="font-semibold text-saffron">
              Quality Policy
            </Link>
            , which this manual puts into practice.
          </p>

          <h2 id="principles" className="scroll-mt-28">3. Guiding Principles</h2>
          <p>
            Following the reference standard, our quality system is guided by values shared by NGOs. Every requirement in
            this manual is interpreted in the light of these principles:
          </p>
          <div className="mt-6 grid gap-4">
            {principleGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-gold/25 bg-white p-5">
                <p className="text-sm font-bold tracking-[0.15em] text-saffron uppercase">{group.title}</p>
                <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                  {group.items.map(([term, text]) => (
                    <div key={term}>
                      <dt className="font-semibold text-maroon">{term}</dt>
                      <dd className="text-sm leading-relaxed text-ink/75">{text}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <h2 id="system" className="scroll-mt-28">4. General System Requirements</h2>
          <h3>4.1 Needs of beneficiaries and stakeholders</h3>
          <p>
            Our end beneficiaries are the devotees, families and residents who attend our programmes and the
            underprivileged people our welfare drives support. Other stakeholders include volunteers, members, artists,
            participants, sponsors, donors, vendors, local authorities and the neighbouring community. Their needs —
            safety, a meaningful cultural experience, accessibility, cleanliness, fair treatment and clear information —
            are identified each year through feedback, committee meetings and consultation, and recorded as inputs to
            planning.
          </p>
          <h3>4.2 Legal requirements</h3>
          <p>
            The Samiti maintains a register of the legal and regulatory requirements that apply to its activities —
            including its obligations as a registered society and the permissions required for public events (venue,
            police, fire safety, electricity and other local authorities). The register is reviewed before every festival
            and the responsible persons are informed.
          </p>
          <h3>4.3 Documentation</h3>
          <p>The quality management system is documented through:</p>
          <ul>
            <li>Mission, vision, values and the Quality Policy (published on this website).</li>
            <li>This Quality Manual, describing the scope, structure and key processes.</li>
            <li>Operating procedures and checklists for key and support processes.</li>
            <li>Records that demonstrate the system is working (see 4.5).</li>
          </ul>
          <h3>4.4 Document control</h3>
          <p>
            Documents are approved by the Chairperson or the organising committee before use, carry a version and date,
            and are reviewed at least once a year. Only current versions are circulated to the people who need them;
            outdated versions are withdrawn.
          </p>
          <h3>4.5 Record control</h3>
          <p>
            Records — such as permissions, meeting minutes, volunteer rosters, tender files, receipts, incident logs and
            feedback — are kept legibly on paper or digitally for a defined period, in line with applicable law, and
            personal data is protected.
          </p>

          <h2 id="commitment" className="scroll-mt-28">5. Institutional Commitment</h2>
          <h3>5.1 Leadership</h3>
          <p>
            The Chairperson, {site.chairperson.name}, and the organising committee lead the quality system, ensure that
            all activities are consistent with our mission and values, and involve stakeholders in important decisions.
          </p>
          <h3>5.2 Policy and objectives</h3>
          <p>
            The committee sets the Quality Policy and yearly quality objectives for each area (festival, events, welfare
            and support functions), based on stakeholder needs and the previous year&apos;s results.
          </p>
          <h3>5.3 Resources</h3>
          <p>
            The committee ensures the human, financial and material resources needed to meet the objectives — volunteers,
            funds from sponsors and donors, venue, equipment and services — and encourages participation of volunteers and
            beneficiaries in designing and delivering activities.
          </p>
          <h3>5.4 Management review</h3>
          <p>
            At least once a year, after the festival, the committee reviews the effectiveness of the system using audit
            results, feedback and complaints, incidents and non-conformities, achievement of objectives, changes in the
            environment and follow-up of previous actions. Minutes record decisions, responsibilities, deadlines and
            resources.
          </p>
          <h3>5.5 Acceptance of commitments</h3>
          <p>
            Before accepting a sponsorship, grant, partnership or other commitment, the committee checks that it is
            consistent with our mission and values, clearly understands the requirements, confirms our capacity to deliver
            it, documents the agreement and considers any risks.
          </p>
          <h3>5.6 Quality coordinator</h3>
          <p>
            The Chairperson appoints a member of the organising committee as Quality Coordinator, with authority to
            ensure the system is implemented and maintained, and to report on its performance to the committee. The
            appointment is communicated to members and volunteers.
          </p>

          <h2 id="processes" className="scroll-mt-28">6. Process-Based Management</h2>
          <h3>6.1 Continuous improvement cycle</h3>
          <p>Each key process follows a yearly Plan – Execute – Measure – Evaluate cycle:</p>
          <ul>
            <li><strong>Plan:</strong> objectives, schedule, responsibilities and resources for the season.</li>
            <li><strong>Execute:</strong> carry out the activities as planned, with coordination between teams.</li>
            <li><strong>Measure:</strong> collect data and feedback on results (see section 9).</li>
            <li><strong>Evaluate:</strong> analyse results and plan improvements for the next cycle.</li>
          </ul>
          <h3>6.2 Process map</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {processMap.map((group) => (
              <div key={group.type} className="rounded-2xl border border-gold/25 bg-cream p-4">
                <p className="text-sm font-bold text-maroon">{group.type}</p>
                <ul className="mt-2 space-y-1 text-sm text-ink/80">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <h3>6.3 Planning changes</h3>
          <p>
            The committee regularly reviews internal functioning and external changes — such as new regulations, venue
            conditions or community needs — and plans any necessary changes to processes in advance.
          </p>
          <h3>6.4 Quality objectives</h3>
          <p>
            Objectives are set for the organisation as a whole and for each key process. They are consistent with the
            Quality Policy, achievable, measurable through the indicators in section 9, assigned to responsible persons
            and reviewed each year.
          </p>
          <h3>6.5 Roles and responsibilities</h3>
          <ul>
            <li><strong>Chairperson</strong> — overall leadership and approval of plans, budgets and quality documents.</li>
            <li><strong>Organising Committee</strong> — planning, resource allocation, vendor approval and review.</li>
            <li><strong>Quality Coordinator</strong> — maintains the quality system and reports on its performance.</li>
            <li>
              <strong>Area Coordinators</strong> — stage &amp; Ramlila, security &amp; crowd, stalls &amp; food court,
              publicity, finance and welfare.
            </li>
            <li><strong>Volunteers</strong> — carry out assigned duties and report issues to their coordinator.</li>
          </ul>
          <h3>6.6 Participation</h3>
          <p>
            Volunteers and members participate in planning meetings and post-festival reviews. Beneficiaries and visitors
            are invited to share their needs and feedback through help desks, forms and our contact channels.
          </p>
          <h3>6.7 Relations with stakeholders</h3>
          <p>
            The Samiti maintains regular contact with its priority stakeholders — local residents and RWAs, authorities,
            sponsors, donors, artists and partner organisations — and cooperates with them where it helps fulfil our
            mission.
          </p>

          <h2 id="key-processes" className="scroll-mt-28">7. Key Processes</h2>
          <h3>7.1 Quality characteristics</h3>
          <p>For every programme we define what quality means for the people we serve, for example:</p>
          <ul>
            <li>Ramlila staged every evening as per the published schedule, with devotion and artistic quality.</li>
            <li>A safe, clean, well-lit and accessible venue with clear entry and exit routes.</li>
            <li>Hygienic food stalls, drinking water, toilets and first aid available throughout.</li>
            <li>Fair and well-organised competitions with clear rules for participants.</li>
            <li>Welfare aid delivered respectfully to those who need it most.</li>
          </ul>
          <h3>7.2 Delivering programmes</h3>
          <p>
            Each programme is delivered according to its plan and checklists — covering permissions, site layout,
            schedules, volunteer duty rosters, safety arrangements and communication — with coordinators monitoring
            delivery every day of the festival.
          </p>
          <h3>7.3 Rights and duties of visitors and beneficiaries</h3>
          <p>
            Visitors and beneficiaries have the right to free and equal access to our public programmes, a safe
            environment, respectful treatment, clear information and a way to raise complaints. They are expected to
            follow venue rules and safety instructions and to respect other visitors, artists and volunteers.
          </p>

          <h2 id="support-processes" className="scroll-mt-28">8. Support Processes</h2>
          <h3>8.1 People and volunteer management</h3>
          <p>
            Volunteers are registered, assigned to a coordinator and duty roster, and briefed on their role, safety and
            emergency procedures before the festival. Their contribution is recognised, and their feedback is used to
            improve.
          </p>
          <h3>8.2 Purchasing and tenders</h3>
          <p>
            Major works and services are purchased through quotations or tenders published on our{" "}
            <Link href="/tenders" className="font-semibold text-saffron">
              Tenders
            </Link>{" "}
            page. Vendors are selected on quality, safety record, experience and cost; work orders define scope, timelines
            and safety obligations; and vendor performance is evaluated after the festival.
          </p>
          <h3>8.3 Economic management</h3>
          <p>
            Budgets are approved by the committee. Donations and sponsorships are acknowledged with receipts, payments
            are made against approved bills, and accounts are maintained as required for a registered society.
          </p>
          <h3>8.4 Internal and external communication</h3>
          <p>
            Internally, information is shared through committee meetings and volunteer groups. Externally, we inform the
            public through this website, social media, posters and announcements — including the schedule, policies,
            tenders and contact details.
          </p>

          <h2 id="measurement" className="scroll-mt-28">9. Measurement, Analysis &amp; Evaluation</h2>
          <h3>9.1 Process performance indicators</h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gold/25 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-cream text-maroon">
                <tr>
                  <th className="px-4 py-3">Indicator</th>
                  <th className="px-4 py-3">How it is measured</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/20">
                {indicators.map(([name, how]) => (
                  <tr key={name}>
                    <td className="px-4 py-3 font-semibold text-maroon">{name}</td>
                    <td className="px-4 py-3 text-ink/80">{how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Targets for each indicator are set every year during the management review.</p>
          <h3>9.2 Satisfaction of beneficiaries and stakeholders</h3>
          <p>
            Satisfaction is measured through feedback from visitors, participants, volunteers, sponsors and donors during
            and after the festival.
          </p>
          <h3>9.3 Internal audits</h3>
          <p>
            An internal audit of the quality system is carried out at least once a year by persons who are independent of
            the activity being audited. Findings are reported to the committee and followed up.
          </p>
          <h3>9.4 Data analysis</h3>
          <p>
            Indicator results, feedback, audit findings and complaints are analysed to understand trends and identify
            opportunities for improvement.
          </p>
          <h3>9.5 Non-conformities</h3>
          <p>
            Any deviation from our plans or requirements — for example a safety lapse or a vendor failing to deliver — is
            recorded, its cause analysed and corrective action taken.
          </p>
          <h3>9.6 Complaints, suggestions and claims</h3>
          <p>
            Anyone can share a complaint or suggestion at the festival help desk, by phone, through our{" "}
            <Link href="/contact" className="font-semibold text-saffron">
              Contact
            </Link>{" "}
            page or by email at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-saffron">
              {site.email}
            </a>
            . Every complaint is recorded, assigned to the responsible coordinator and closed with a response.
          </p>

          <h2 id="improvement" className="scroll-mt-28">10. Improvement</h2>
          <p>
            Based on the management review, audits, data analysis, non-conformities and feedback, the committee plans
            corrective and preventive actions and improvement projects, with responsibilities and deadlines. Their
            effectiveness is checked in the next cycle, so that every Ramleela Dusshera festival is better than the last.
          </p>

          <h2 id="annex" className="scroll-mt-28">Annex: References &amp; Revisions</h2>
          <ul>
            <li>
              <a href={referenceStandard.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-saffron">
                {referenceStandard.title}
              </a>
            </li>
            <li>ISO 9001:2015 — Quality management systems: Requirements</li>
            <li>
              <Link href="/quality-policy" className="font-semibold text-saffron">
                Quality Policy of {site.name}
              </Link>
            </li>
          </ul>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gold/25 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-cream text-maroon">
                <tr>
                  <th className="px-4 py-3">Version</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Change</th>
                  <th className="px-4 py-3">Approved by</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 font-semibold">1.0</td>
                  <td className="px-4 py-3">September {festival.year}</td>
                  <td className="px-4 py-3">First issue, based on the NGO Quality Standard v5</td>
                  <td className="px-4 py-3">{site.chairperson.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </Section>
    </>
  );
}
