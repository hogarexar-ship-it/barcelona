import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { guidesLink, sectorLinks, serviceLinks } from "@/lib/navigation";
import { defaultWhatsappMessage, primaryCta, siteConfig, telHref, whatsappHref } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-100 print:hidden">
      <Container className="grid gap-10 border-t border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo onDark />
          <p className="mt-4 text-sm">
            {siteConfig.tagline}. Red de clientes y marketing para empresas de reformas, fontaneros y electricistas.
          </p>
        </div>

        <FooterColumn title="Servicios">
          {serviceLinks.map((link) => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
          <FooterLink href={primaryCta.href} label="Empezar ahora" highlight />
        </FooterColumn>

        <FooterColumn title="Sectores">
          {sectorLinks.map((link) => (
            <FooterLink key={link.href} href={link.href} label={`Clientes para ${link.label.toLowerCase()}`} />
          ))}
          <FooterLink href={guidesLink.href} label="Guías para profesionales" />
        </FooterColumn>

        <FooterColumn title="Contacto">
          <li>
            <a href={whatsappHref(defaultWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-300">
              WhatsApp
            </a>
          </li>
          <li>
            <a href={telHref()} className="hover:text-terracotta-300">
              {siteConfig.phoneDisplay}
            </a>
          </li>
          <li>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-terracotta-300">
              {siteConfig.email}
            </a>
          </li>
          <li>{siteConfig.openingHours}</li>
        </FooterColumn>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. {siteConfig.areaServed}.
          </p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="/aviso-legal" className="hover:text-terracotta-300">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link href="/politica-privacidad" className="hover:text-terracotta-300">
                Privacidad
              </Link>
            </li>
            <li>
              <Link href="/politica-cookies" className="hover:text-terracotta-300">
                Cookies
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, label, highlight = false }: { href: string; label: string; highlight?: boolean }) {
  return (
    <li>
      <Link href={href} className={highlight ? "font-semibold text-terracotta-300 hover:text-terracotta-200" : "hover:text-terracotta-300"}>
        {label}
      </Link>
    </li>
  );
}
