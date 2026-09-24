"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";
import { Logo } from "./Logo";
import type { Locale } from "@/lib/i18n";
import { localeFromPath, locales } from "@/lib/i18n";
import { alternatePath, mainNav, routes } from "@/lib/navigation";
import { primaryCta, siteConfig } from "@/lib/site-config";

/** Selector ES / CA: lleva a la misma página en el otro idioma. */
function LanguageSwitch({ locale, pathname, className = "" }: { locale: Locale; pathname: string; className?: string }) {
  return (
    <div className={`flex items-center rounded-md border border-ink-200 text-xs font-bold ${className}`} role="group" aria-label="Idioma">
      {locales.map((l) => (
        <Link
          key={l}
          href={l === locale ? pathname : alternatePath(pathname, l)}
          hrefLang={l}
          lang={l}
          aria-current={l === locale ? "true" : undefined}
          className={`px-2.5 py-1.5 uppercase transition-colors ${l === locale ? "bg-ink-900 text-white" : "text-ink-700 hover:text-ink-900"} ${
            l === "es" ? "rounded-l-md" : "rounded-r-md"
          }`}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}

export type MenuService = { href: string; label: string; icon: IconName };

export function Header({ menuServices = [] }: { menuServices?: MenuService[] }) {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const cta = primaryCta(locale);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Con el menú abierto la página de detrás no se mueve.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => href === pathname || pathname.startsWith(`${href}/`);
  const linkClass = (active: boolean) =>
    `text-sm font-semibold transition-colors hover:text-accent-700 ${active ? "text-accent-700" : "text-ink-700"}`;
  const nav = mainNav(locale);
  const ca = locale === "ca";

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-surface-50 print:hidden">
      <Container className="flex h-16 items-stretch justify-between gap-6">
        <div className="flex items-center">
          <Logo locale={locale} />
        </div>

        <nav className="hidden h-full items-stretch gap-7 lg:flex" aria-label="Principal">
          {nav.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`-mb-px flex items-center border-b-2 ${active ? "border-[#CE6A27]" : "border-transparent"} ${linkClass(active)}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch locale={locale} pathname={pathname} />
          <Link href={cta.href} className="btn btn-primary hidden !px-5 !py-2.5 md:inline-flex">
            {cta.label}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink-900 hover:bg-ink-100 lg:hidden"
            aria-label={menuOpen ? (ca ? "Tancar menú" : "Cerrar menú") : ca ? "Obrir menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              {menuOpen ? <path d="M6 18 18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div
          id="menu-movil"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-ink-200 bg-surface-50 lg:hidden"
        >
          <Container className="flex min-h-full flex-col py-4">
            <nav aria-label="Menú" className="flex flex-col">
              {[{ href: routes[locale].home, label: ca ? "Inici" : "Inicio" }, ...nav].map((link, index) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`flex items-center justify-between py-4 font-display text-3xl font-bold tracking-tight ${
                      pathname === link.href || (index > 0 && isActive(link.href)) ? "text-accent-700" : "text-ink-900"
                    }`}
                  >
                    {link.label}
                    <Icon name="arrowRight" className="h-6 w-6 text-ink-400" />
                  </Link>
                  {link.href === routes[locale].services && menuServices.length > 0 && (
                    <ul className="mb-3 grid grid-cols-2 gap-2">
                      {menuServices.map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            className={`flex items-center gap-2 rounded-md px-3 py-3 text-base font-semibold ${
                              pathname === service.href ? "bg-ink-900 text-white" : "bg-surface-200 text-ink-800"
                            }`}
                          >
                            <Icon
                              name={service.icon}
                              className={`h-5 w-5 shrink-0 ${pathname === service.href ? "text-accent-300" : "text-accent-600"}`}
                            />
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-auto pt-6">
              <Link href={cta.href} className="btn btn-primary w-full py-4 text-lg">
                {cta.label}
              </Link>
              <div className="mt-4 flex items-center justify-between gap-4 pb-2 text-sm font-semibold text-ink-900">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-700">
                  {siteConfig.email}
                </a>
                <LanguageSwitch locale={locale} pathname={pathname} />
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
