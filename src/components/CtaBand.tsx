import { SmartLink } from "./SmartLink";

type Props = {
  title: string;
  body?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function CtaBand({ title, body, primary, secondary }: Props) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 pb-16 md:px-6">
        <div className="sunburst flex flex-col items-start gap-6 rounded-[2rem] px-8 py-10 text-cream md:flex-row md:items-center md:justify-between md:px-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
            {body ? <p className="mt-2 text-cream/80">{body}</p> : null}
          </div>
          <div className="flex flex-wrap gap-3">
            <SmartLink
              href={primary.href}
              className="rounded-full bg-saffron-light px-6 py-3 text-sm font-bold text-maroon-deep hover:bg-gold-light"
            >
              {primary.label}
            </SmartLink>
            {secondary ? (
              <SmartLink
                href={secondary.href}
                className="rounded-full border border-cream/50 px-6 py-3 text-sm font-bold text-cream hover:border-gold-light hover:text-gold-light"
              >
                {secondary.label}
              </SmartLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
