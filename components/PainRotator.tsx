"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";

export type PainItem = { value: string; icon: IconName; title: string; href: string };

const INTERVAL = 3600;
// El primer cambio llega rápido, para que se note desde el primer segundo
// que los botones van rotando, incluso antes de que el usuario haga scroll.
const FIRST_DELAY = 1400;

/**
 * Dos botones de la portada que van cambiando entre dolores habituales.
 * Empiezan a rotar nada más cargar la página (primer cambio a 1,4 s) y el
 * segundo botón va desfasado respecto al primero para que no salten a la vez.
 * Se detienen mientras el usuario tiene el ratón o el foco encima y no se
 * mueven si ha pedido reducir el movimiento.
 */
export function PainRotator({ items }: { items: PainItem[] }) {
  // Alternos: el primer botón usa los dolores pares y el segundo los impares.
  const slots = [items.filter((_, i) => i % 2 === 0), items.filter((_, i) => i % 2 === 1)].filter((slot) => slot.length > 0);
  const [indexes, setIndexes] = useState(slots.map(() => 0));
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timers = slots.map((slot, slotIndex) => {
      let interval = 0;
      const tick = () => setIndexes((current) => current.map((value, i) => (i === slotIndex ? (value + 1) % slot.length : value)));
      const start = window.setTimeout(
        () => {
          tick();
          interval = window.setInterval(tick, INTERVAL);
        },
        FIRST_DELAY + slotIndex * (FIRST_DELAY / 2),
      );
      return () => {
        window.clearTimeout(start);
        window.clearInterval(interval);
      };
    });
    return () => timers.forEach((clear) => clear());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, items]);

  return (
    <div
      className="mt-3 grid gap-3 sm:grid-cols-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slots.map((slot, slotIndex) => {
        const item = slot[indexes[slotIndex] ?? 0] ?? slot[0];
        if (!item) return null;
        return (
          <Link
            key={slotIndex}
            href={item.href}
            className="group flex min-h-[4.75rem] items-center gap-4 overflow-hidden rounded-md border border-white/30 bg-white/10 p-4 backdrop-blur-md transition-colors hover:border-[#CE6A27] hover:bg-white/20"
          >
            <span key={item.value} className="flex flex-1 animate-pain-in items-center gap-4">
              <Icon name={item.icon} className="h-7 w-7 shrink-0 text-accent-300" />
              <span className="flex-1 font-display text-lg font-bold leading-snug">{item.title}</span>
            </span>
            <Icon name="arrowRight" className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        );
      })}
    </div>
  );
}
