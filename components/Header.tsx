"use client";

import Link from "next/link";
import { Container } from "./Container";
import { NavMenu } from "./NavMenu";
import { useLanguage } from "@/lib/i18n/context";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-30 border-b border-ink-100 bg-cream-50/95 backdrop-blur print:hidden">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display text-xl font-bold text-ink-900">
          {siteConfig.brand}
          <span className="ml-1 text-sm font-medium text-terracotta-500">Barcelona</span>
        </Link>

        <Link
          href="/buscar-servicios"
          aria-label={t.nav.buscarAria}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-900 hover:bg-ink-100 md:hidden"
        >
          <SearchIcon className="h-5 w-5" />
        </Link>

        <NavMenu />
      </Container>
    </header>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
    </svg>
  );
}
