import { Icon } from "./Icon";
import type { IconName } from "./Icon";
import { Reveal } from "./Reveal";

export type Feature = { icon: IconName; title: string; text: string; label?: string };

export function FeatureGrid({ items, className = "sm:grid-cols-2 lg:grid-cols-3" }: { items: Feature[]; className?: string }) {
  return (
    <div className={`grid gap-x-8 gap-y-10 ${className}`}>
      {items.map((item, index) => (
        <Reveal key={item.title} delay={(index % 3) * 80}>
          <article className="border-t border-ink-200 pt-5">
            <Icon name={item.icon} className="h-7 w-7 text-accent-600" />
            {item.label && <p className="mt-4 text-sm font-medium text-ink-400">{item.label}</p>}
            <h3 className={`${item.label ? "mt-1" : "mt-4"} font-display text-lg font-bold text-ink-900`}>{item.title}</h3>
            <p className="mt-2 text-ink-600">{item.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
