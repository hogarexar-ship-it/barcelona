import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { sectors } from "@/lib/pro-sectors-data";

export function ProSectorCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {sectors.map((sector, index) => (
        <Reveal key={sector.trade} delay={index * 120} className="h-full">
          <Link
            href={sector.path}
            className="group flex h-full flex-col rounded-xl2 border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:border-accent-200 hover:shadow-lg"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 transition-transform group-hover:scale-110 group-hover:-rotate-3">
              <Icon name={sector.icon} className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
              {sector.name}
            </h3>
            <p className="mt-2 flex-1 text-ink-600">{sector.cardText}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
              Clientes para {sector.audience}
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
