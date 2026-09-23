import { Icon } from "./Icon";
import type { IconName } from "./Icon";

/**
 * Cinta de elementos en movimiento continuo. Se pausa al pasar el ratón.
 * El difuminado de los extremos se aplica solo a la fila de tarjetas (no al
 * contenedor con fondo), así las tarjetas se funden con el color de la cinta.
 */
export function Marquee({ items, onDark = false }: { items: { icon: IconName; label: string }[]; onDark?: boolean }) {
  const loop = [...items, ...items];

  return (
    <div className={`py-5 ${onDark ? "border-y border-white/10 bg-ink-900" : "border-y border-ink-100 bg-surface-50"}`}>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {loop.map((item, index) => (
            <li
              key={`${item.label}-${index}`}
              aria-hidden={index >= items.length ? true : undefined}
              className={`flex shrink-0 items-center gap-2.5 rounded-md border px-4 py-2 text-sm font-semibold ${
                onDark ? "border-white/15 text-ink-100" : "border-ink-200 text-ink-700"
              }`}
            >
              <Icon name={item.icon} className={`h-5 w-5 ${onDark ? "text-accent-300" : "text-accent-600"}`} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
