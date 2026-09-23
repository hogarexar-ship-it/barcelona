import { Icon } from "./Icon";
import type { IconName } from "./Icon";
import { Reveal } from "./Reveal";

export type Feature = { icon: IconName; title: string; text: string; eyebrow?: string };

/** Rejilla de tarjetas con icono protagonista, aparición escalonada y micro-interacción al pasar el ratón. */
export function FeatureGrid({ items, className = "sm:grid-cols-2 lg:grid-cols-3" }: { items: Feature[]; className?: string }) {
  return (
    <div className={`grid gap-5 ${className}`}>
      {items.map((item, index) => (
        <Reveal key={item.title} delay={(index % 4) * 100} className="h-full">
          <article className="group h-full rounded-xl2 border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:border-accent-200 hover:shadow-lg">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 transition-transform group-hover:scale-110 group-hover:-rotate-3">
              <Icon name={item.icon} className="h-7 w-7" />
            </span>
            {item.eyebrow && <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-accent-600">{item.eyebrow}</p>}
            <h3 className={`${item.eyebrow ? "mt-1" : "mt-5"} font-display text-lg font-bold text-ink-900`}>{item.title}</h3>
            <p className="mt-2 text-ink-600">{item.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
