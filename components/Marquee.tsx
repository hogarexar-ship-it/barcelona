import { Icon } from "./Icon";
import type { IconName } from "./Icon";

/** Cinta de elementos en movimiento continuo. Se pausa al pasar el ratón. */
export function Marquee({ items, onDark = false }: { items: { icon: IconName; label: string }[]; onDark?: boolean }) {
  const loop = [...items, ...items];

  return (
    <div
      className={`overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] ${
        onDark ? "border-y border-white/10 bg-ink-900" : "border-y border-ink-100 bg-white"
      }`}
    >
      <ul className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {loop.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            aria-hidden={index >= items.length ? true : undefined}
            className={`flex shrink-0 items-center gap-2.5 rounded-full px-4 py-2 text-sm font-semibold ${
              onDark ? "bg-white/5 text-ink-100" : "bg-surface-100 text-ink-700"
            }`}
          >
            <span className={onDark ? "text-accent-300" : "text-accent-600"}>
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
