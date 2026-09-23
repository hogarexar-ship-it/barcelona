"use client";

import { useEffect } from "react";

/**
 * Efecto de la pila de tarjetas: cuando una tarjeta queda tapada por la
 * siguiente, se achica un poco y se oscurece (variable CSS --p de 0 a 1).
 * Sin efecto si el usuario ha pedido reducir el movimiento.
 */
export function StackScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      document.querySelectorAll<HTMLElement>("[data-stack-list]").forEach((list) => {
        const items = Array.from(list.children) as HTMLElement[];
        items.forEach((item, index) => {
          const next = items[index + 1];
          const card = item.firstElementChild as HTMLElement | null;
          if (!card) return;
          if (!next) {
            card.style.setProperty("--p", "0");
            return;
          }
          const rect = item.getBoundingClientRect();
          const distance = next.getBoundingClientRect().top - rect.top;
          const p = Math.min(1, Math.max(0, 1 - distance / Math.max(rect.height, 1)));
          card.style.setProperty("--p", p.toFixed(3));
        });
      });
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
