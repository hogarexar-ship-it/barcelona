"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavDrawer, useNavLinks } from "./NavDrawer";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/context";

/**
 * Navegación del header. En escritorio (`lg`+) muestra el menú horizontal
 * completo. En tablet (`md` a `lg`) se reduce a un botón de hamburguesa,
 * porque por debajo de `md` la navegación principal ya vive en la barra
 * inferior tipo app (MobileBottomBar), que tiene su propio acceso al mismo
 * panel a través de su botón "Más" — así nunca hay dos navegaciones
 * activas a la vez en la misma pantalla.
 */
export function NavMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const navLinks = useNavLinks();

  return (
    <>
      <nav className="hidden items-center gap-6 lg:flex" aria-label={t.nav.menu}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium hover:text-terracotta-600 ${
              pathname === link.href ? "text-terracotta-600" : "text-ink-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden items-center gap-4 lg:flex">
        <Link href="/profesionales" className="text-sm font-medium text-ink-400 hover:text-terracotta-600">
          {t.nav.eresProfesional}
        </Link>
        <LanguageSwitcher />
        <Link
          href="/solicitud"
          className="inline-flex items-center justify-center rounded-full bg-terracotta-500 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:bg-terracotta-600 active:scale-95"
        >
          {t.nav.pedirPresupuesto}
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden h-10 w-10 items-center justify-center rounded-full text-ink-900 hover:bg-ink-100 md:inline-flex lg:hidden"
        aria-label={t.nav.abrirMenu}
        aria-expanded={open}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <NavDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
