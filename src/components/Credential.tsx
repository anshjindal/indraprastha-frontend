export type CredentialItem = { label: string; value: string; note?: string };

export function Credentials({ items, className = "" }: { items: CredentialItem[]; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-gold/30 bg-white ${className}`}>
      <table className="w-full text-left text-sm">
        <tbody className="divide-y divide-gold/20">
          {items.map((item) => (
            <tr key={item.label} className="align-top">
              <th scope="row" className="w-2/5 bg-cream/60 px-5 py-3 font-semibold text-ink/70">
                {item.label}
              </th>
              <td className="px-5 py-3">
                <span className="font-bold break-all text-maroon">{item.value}</span>
                {item.note ? <span className="mt-0.5 block text-xs text-ink/60">{item.note}</span> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
