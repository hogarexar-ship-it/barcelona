"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { guidesLink, sectorLinks, serviceLinks } from "@/lib/navigation";
import { primaryCta } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const sectorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setSectorsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!sectorsOpen) return;
    function onPointerDown(e: PointerEvent) {
      if (sectorsRef.current && !sectorsRef.current.contains(e.target as Node)) setSectorsOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSectorsOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [sectorsOpen]);

  const isActive = (href: string) => pathname === href;
  const sectorActive = sectorLinks.some((link) => isActive(link.href));
  const linkClass = (active: boolean) =>
    `text-sm font-semibold transition-colors hover:text-terracotta-600 ${active ? "text-terracotta-600" : "text-ink-700"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-cream-50/95 backdrop-blur print:hidden">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {serviceLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(isActive(link.href))}>
              {link.label}
            </Link>
          ))}

          <div ref={sectorsRef} className="relative">
            <button
              type="button"
              onClick={() => setSectorsOpen((open) => !open)}
              aria-expanded={sectorsOpen}
              aria-controls="sectores-menu"
              className={`inline-flex items-center gap-1 ${linkClass(sectorActive)}`}
            >
              Sectores
              <svg viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 transition-transform ${sectorsOpen ? "rotate-180" : ""}`} aria-hidden="true">
                <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z" />
              </svg>
            </button>
            {sectorsOpen && (
              <div
                id="sectores-menu"
                className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl border border-ink-100 bg-white p-2 shadow-xl"
              >
                {sectorLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-xl px-4 py-2.5 text-sm font-semibold hover:bg-cream-100 ${
                      isActive(link.href) ? "text-terracotta-600" : "text-ink-800"
                    }`}
                  >
                    Para {link.label.toLowerCase()}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={guidesLink.href} className={linkClass(pathname.startsWith(guidesLink.href))}>
            {guidesLink.label}
          </Link>
        </nav>

        <Link href={primaryCta.href} className="btn btn-primary hidden !px-5 !py-2.5 md:inline-flex">
          {primaryCta.label}
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-900 hover:bg-ink-100 md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="menu-movil"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
            {menuOpen ? <path d="M6 18 18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {menuOpen && (
        <div id="menu-movil" className="absolute inset-x-0 top-full border-b border-ink-100 bg-cream-50 shadow-xl md:hidden">
          <Container className="py-4">
            <nav aria-label="Menú móvil" className="flex flex-col">
              {serviceLinks.map((link) => (
                <MobileLink key={link.href} href={link.href} label={link.label} active={isActive(link.href)} />
              ))}
              <p className="mt-3 px-3 text-xs font-semibold uppercase tracking-wide text-ink-400">Sectores</p>
              {sectorLinks.map((link) => (
                <MobileLink
                  key={link.href}
                  href={link.href}
                  label={`Para ${link.label.toLowerCase()}`}
                  active={isActive(link.href)}
                />
              ))}
              <div className="my-2 border-t border-ink-100" />
              <MobileLink href={guidesLink.href} label={guidesLink.label} active={pathname.startsWith(guidesLink.href)} />
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

function MobileLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between rounded-xl px-3 py-3 text-base font-semibold hover:bg-ink-100 ${
        active ? "text-terracotta-600" : "text-ink-800"
      }`}
    >
      {label}
      <Icon name="arrowRight" className="h-4 w-4 text-ink-400" />
    </Link>
  );
}
