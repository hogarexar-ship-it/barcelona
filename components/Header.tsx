"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { consumerNav, consumerRoutes, isProPath, proNav, proRoutes } from "@/lib/navigation";
import { consumerCta, proCta, siteConfig, telHref } from "@/lib/site-config";

/**
 * Cabecera con dos modos. Particulares: clara y cálida (terracota).
 * Profesionales (/profesionales/*): oscura con acento verde azulado.
 * El selector superior deja claro a quién se le habla y permite cambiar.
 */
export function Header() {
  const pathname = usePathname();
  const pro = isProPath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const nav = pro ? proNav : consumerNav;
  const cta = pro ? proCta : consumerCta;
  const isActive = (href: string) => href === pathname || (href.length > 1 && !href.includes("#") && pathname.startsWith(`${href}/`));
  const linkClass = (active: boolean) =>
    pro
      ? `text-sm font-semibold transition-colors hover:text-white ${active ? "text-accent-300" : "text-ink-100"}`
      : `text-sm font-semibold transition-colors hover:text-accent-600 ${active ? "text-accent-600" : "text-ink-700"}`;

  return (
    <header
      className={`sticky top-0 z-40 print:hidden ${
        pro ? "theme-pro bg-ink-900 text-white" : "border-b border-ink-100 bg-surface-50/95 backdrop-blur"
      }`}
    >
      <div className={pro ? "border-b border-white/10" : "bg-ink-900"}>
        <Container className="flex h-10 items-center justify-between gap-4 text-xs sm:text-sm">
          <nav aria-label="Tipo de usuario" className="flex gap-1">
            <AudienceTab href={consumerRoutes.home} label="Busco un profesional" active={!pro} />
            <AudienceTab href={proRoutes.home} label="Soy profesional" active={pro} />
          </nav>
          <a href={telHref()} className="hidden font-semibold text-ink-100 hover:text-white sm:inline">
            {siteConfig.phoneDisplay}
          </a>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo onDark={pro} href={pro ? proRoutes.home : consumerRoutes.home} />
          {pro && (
            <span className="rounded-full bg-accent-500/20 px-2.5 py-1 text-xs font-semibold text-accent-200">
              Profesionales
            </span>
          )}
        </div>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {nav.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(isActive(link.href))}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href={cta.href} className="btn btn-primary hidden !px-5 !py-2.5 md:inline-flex">
            {cta.label}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
              pro ? "text-white hover:bg-white/10" : "text-ink-900 hover:bg-ink-100"
            }`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
              {menuOpen ? <path d="M6 18 18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div
          id="menu-movil"
          className={`absolute inset-x-0 top-full shadow-xl lg:hidden ${
            pro ? "border-b border-white/10 bg-ink-900" : "border-b border-ink-100 bg-surface-50"
          }`}
        >
          <Container className="py-4">
            <nav aria-label="Menú" className="flex flex-col">
              {nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-3 py-3 text-base ${linkClass(isActive(link.href))} ${
                    pro ? "hover:bg-white/5" : "hover:bg-ink-100"
                  }`}
                >
                  {link.label}
                  <Icon name="arrowRight" className="h-4 w-4 opacity-50" />
                </Link>
              ))}
            </nav>
            <Link href={cta.href} className="btn btn-primary mt-4 w-full">
              {cta.label}
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}

function AudienceTab({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`rounded-full px-3 py-1 font-semibold transition-colors ${
        active ? "bg-accent-500 text-white" : "text-ink-100 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}
