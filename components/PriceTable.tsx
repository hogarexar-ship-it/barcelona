import type { PriceRow } from "@/lib/services-data";

export function PriceTable({ rows, note }: { rows: PriceRow[]; note: string }) {
  return (
    <div>
      <div className="overflow-x-auto rounded-xl2 border border-ink-100">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-ink-900 text-white">
              <th scope="col" className="px-4 py-3 font-semibold">
                Trabajo
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Precio orientativo
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 bg-white">
            {rows.map((row) => (
              <tr key={row.job}>
                <td className="px-4 py-3 text-ink-800">
                  {row.job}
                  {row.note && <span className="block text-xs text-ink-400">{row.note}</span>}
                </td>
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-terracotta-600">
                  {row.priceRange}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink-400">{note}</p>
    </div>
  );
}
