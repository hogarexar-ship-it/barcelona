import Link from "next/link";
import { Icon } from "./Icon";
import { sectors } from "@/lib/sectors-data";

export function SectorCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {sectors.map((sector) => (
        <Link
          key={sector.slug}
          href={sector.path}
          className="group flex flex-col rounded-xl2 border border-ink-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-terracotta-200 hover:shadow-lg"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta-50 text-terracotta-600">
            <Icon name={sector.icon} />
          </span>
          <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{sector.name}</h3>
          <p className="mt-2 flex-1 text-ink-600">{sector.cardText}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600">
            Clientes para {sector.audience}
            <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
