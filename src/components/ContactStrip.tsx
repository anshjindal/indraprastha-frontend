import { site } from "@/lib/site";

export function ContactStrip({ heading = "Prefer to talk to us directly?" }: { heading?: string }) {
  return (
    <div className="rounded-3xl border border-gold/25 bg-cream p-6">
      <p className="font-bold text-maroon">{heading}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {site.phones.map((phone) => (
          <li key={phone.id}>
            <a href={phone.href} className="font-semibold text-maroon hover:text-saffron">
              {phone.display}
            </a>{" "}
            <span className="text-ink/70">— {phone.name}</span>
          </li>
        ))}
        <li>
          <a href={`mailto:${site.email}`} className="break-all font-semibold text-maroon hover:text-saffron">
            {site.email}
          </a>
        </li>
      </ul>
    </div>
  );
}
