"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { mainNav } from "@/lib/navigation";
import { primaryCta } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => href === pathname || pathname.startsWith(`${href}/`);
  const linkClass = (active: boolean) =>
    `text-sm font-semibold transition-colors hover:text-accent-700 ${active ? "text-accent-700" : "text-ink-700"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-ink-200 bg-surface-50 print:hidden">
      <Container className="flex h-16 items-stretch justify-between gap-6">
        <div className="flex items-center">
          <Logo />
        </div>

        <nav className="hidden h-full items-stretch gap-7 lg:flex" aria-label="Principal">
          {mainNav.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`-mb-px flex items-center border-b-2 ${active ? "border-[#EA580C]" : "border-transparent"} ${linkClass(active)}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href={primaryCta.href} className="btn btn-primary hidden !px-5 !py-2.5 md:inline-flex">
            {primaryCta.label}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink-900 hover:bg-ink-100 lg:hidden"
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
        <div id="menu-movil" className="absolute inset-x-0 top-full border-b border-ink-200 bg-surface-50 lg:hidden">
          <Container className="py-4">
            <nav aria-label="Menú" className="flex flex-col">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`flex items-center justify-between rounded-md border-l-2 px-3 py-3 text-base hover:bg-ink-100 ${isActive(link.href) ? "border-[#EA580C] bg-ink-50" : "border-transparent"} ${linkClass(isActive(link.href))}`}
                >
                  {link.label}
                  <Icon name="arrowRight" className="h-4 w-4 opacity-50" />
                </Link>
              ))}
            </nav>
            <Link href={primaryCta.href} className="btn btn-primary mt-4 w-full">
              {primaryCta.label}
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
