import type { FaqItem } from "@/lib/faq";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-gold/20 rounded-3xl border border-gold/25 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-maroon marker:hidden">
            <h3 className="text-base md:text-lg">{item.question}</h3>
            <span className="mt-1 shrink-0 text-saffron transition group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-ink/80">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
