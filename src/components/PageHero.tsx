import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  hindi?: string;
  intro?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, hindi, intro, children }: Props) {
  return (
    <section className="sunburst text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-20">
        <nav className="text-xs text-cream/60" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gold-light">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-cream/85">{title}</span>
        </nav>
        {eyebrow ? (
          <p className="mt-6 text-xs font-bold tracking-[0.3em] text-saffron-light uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        {hindi ? <p className="mt-2 font-hindi text-xl text-gold-light">{hindi}</p> : null}
        <div className="gold-rule my-6 max-w-xs" />
        {intro ? <p className="max-w-3xl text-base leading-relaxed text-cream/85 md:text-lg">{intro}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  tone = "ivory",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "ivory" | "cream" | "white";
}) {
  const bg = { ivory: "bg-ivory", cream: "bg-cream", white: "bg-white" }[tone];
  return (
    <section className={bg}>
      <div className={`mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-20 ${className}`}>{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-xs font-bold tracking-[0.3em] text-saffron uppercase">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-bold text-maroon md:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 leading-relaxed text-ink/80">{intro}</p> : null}
    </div>
  );
}

export function Card({ title, children, icon }: { title: string; children: React.ReactNode; icon?: string }) {
  return (
    <div className="rounded-3xl border border-gold/25 bg-white p-6 shadow-sm shadow-maroon/5">
      {icon ? (
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream text-xl" aria-hidden>
          {icon}
        </span>
      ) : null}
      <h3 className={`${icon ? "mt-4" : ""} text-lg font-bold text-maroon`}>{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-ink/80">{children}</div>
    </div>
  );
}
