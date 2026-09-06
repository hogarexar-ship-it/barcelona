"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CallButton, WhatsAppButton } from "./CtaButtons";
import { siteConfig } from "@/lib/site-config";

export const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/buscar-servicios", label: "Buscar servicio" },
  { href: "/zonas", label: "Zonas" },
  { href: "/precios", label: "Precios" },
  { href: "/urgencias-24h", label: "Urgencias 24h" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function NavMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
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
          ¿Eres profesional?
        </Link>
        <Link
          href="/solicitud"
          className="inline-flex items-center justify-center rounded-full bg-terracotta-500 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:bg-terracotta-600 active:scale-95"
        >
          Pedir presupuesto
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-900 hover:bg-ink-100 lg:hidden"
        aria-label="Abrir menú"
        aria-expanded={open}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Cerrar menú"
            className="absolute inset-0 bg-ink-900/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-xs flex-col bg-cream-50 p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold text-ink-900">Menú</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-900 hover:bg-ink-100"
                aria-label="Cerrar menú"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1" aria-label="Navegación móvil">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-base font-medium hover:bg-ink-100 ${
                    pathname === link.href ? "text-terracotta-600" : "text-ink-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/profesionales"
                onClick={() => setOpen(false)}
                className={`rounded-lg border-t border-ink-100 px-3 pt-4 pb-3 text-base font-medium hover:bg-ink-100 ${
                  pathname === "/profesionales" ? "text-terracotta-600" : "text-ink-800"
                }`}
              >
                ¿Eres profesional? Únete a la red
              </Link>
            </nav>

            <Link
              href="/solicitud"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-terracotta-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:bg-terracotta-600 active:scale-95"
            >
              Pedir presupuesto
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
      )}
    </>
  );
}
