"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CallButton, WhatsAppButton } from "./CtaButtons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/context";
import { siteConfig } from "@/lib/site-config";

export function useNavLinks() {
  const { t } = useLanguage();
  return [
    { href: "/servicios", label: t.nav.servicios },
    { href: "/buscar-servicios", label: t.nav.buscarServicio },
    { href: "/zonas", label: t.nav.zonas },
    { href: "/precios", label: t.nav.precios },
    { href: "/urgencias-24h", label: t.nav.urgencias },
    { href: "/blog", label: t.nav.blog },
    { href: "/sobre-nosotros", label: t.nav.sobreNosotros },
    { href: "/contacto", label: t.nav.contacto },
  ];
}

/**
 * Panel de navegación completo, compartido por el header (hamburguesa en
 * tablet, md..lg) y la barra inferior tipo app (botón "Más" en móvil,
 * <md). Nunca están abiertos los dos a la vez porque sus disparadores
 * viven en breakpoints distintos, pero cada uno gestiona su propio estado
 * `open` para no acoplar componentes de ramas de layout diferentes.
 */
export function NavDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const navLinks = useNavLinks();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button type="button" aria-label={t.nav.cerrarMenu} className="absolute inset-0 bg-ink-900/50" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-xs flex-col overflow-y-auto bg-cream-50 p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-bold text-ink-900">{t.nav.menu}</span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-900 hover:bg-ink-100"
            aria-label={t.nav.cerrarMenu}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-4">
          <LanguageSwitcher />
        </div>

        <nav className="mt-6 flex flex-col gap-1" aria-label={t.nav.menu}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`rounded-lg px-3 py-3 text-base font-medium hover:bg-ink-100 ${
                pathname === link.href ? "text-terracotta-600" : "text-ink-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/profesionales"
            onClick={onClose}
            className={`rounded-lg border-t border-ink-100 px-3 pt-4 pb-3 text-base font-medium hover:bg-ink-100 ${
              pathname === "/profesionales" ? "text-terracotta-600" : "text-ink-800"
            }`}
          >
            {t.nav.eresProfesionalLargo}
          </Link>
        </nav>

        <Link
          href="/solicitud"
          onClick={onClose}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-terracotta-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:bg-terracotta-600 active:scale-95"
        >
          {t.nav.pedirPresupuesto}
        </Link>

        <div className="mt-4 flex flex-col gap-3">
          <CallButton className="justify-center" />
          <WhatsAppButton className="justify-center" />
        </div>

        <p className="mt-auto pt-6 text-xs text-ink-400">
          {siteConfig.phoneDisplay} · {siteConfig.email}
        </p>
      </div>
    </div>
  );
}
