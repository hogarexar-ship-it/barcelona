import Link from "next/link";
import { Container } from "./Container";
import { CallButton, WhatsAppButton } from "./CtaButtons";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/zonas", label: "Zonas" },
  { href: "/precios", label: "Precios" },
  { href: "/urgencias-24h", label: "Urgencias 24h" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-100 bg-cream-50/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display text-xl font-bold text-ink-900">
          {siteConfig.brand}
          <span className="ml-1 text-sm font-medium text-terracotta-500">Barcelona</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-600 hover:text-terracotta-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <CallButton variant="compact" />
          <WhatsAppButton variant="compact" />
        </div>
      </Container>

      <div className="border-t border-ink-100 lg:hidden">
        <Container className="flex flex-wrap gap-x-4 gap-y-1 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-ink-600 hover:text-terracotta-600"
            >
              {link.label}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
