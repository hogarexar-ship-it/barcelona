import type { ReactNode } from "react";

/** Toda la zona profesionales usa la paleta fría con acento verde azulado (ver app/globals.css). */
export default function ProfesionalesLayout({ children }: { children: ReactNode }) {
  return <div className="theme-pro bg-surface-50">{children}</div>;
}
