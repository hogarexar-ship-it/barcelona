import type { ReactNode } from "react";

/** Envuelve contenido que aparece con una animación suave al entrar en pantalla (ver ScrollReveal). */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div data-reveal className={className} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
