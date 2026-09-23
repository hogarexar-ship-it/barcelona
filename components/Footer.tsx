import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { WhatsAppIcon } from "./CtaButtons";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { consumerRoutes, proRoutes, sectorPath, servicePath } from "@/lib/navigation";
import { consumerWhatsappMessage, siteConfig, telHref, whatsappHref } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-100 print:hidden">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo onDark />
          <p className="mt-4 text-sm">
            {siteConfig.tagline}. {siteConfig.areaServed}.
          </p>
        </div>

        <FooterColumn title="Para tu casa">
          <FooterLink href={servicePath("fontaneria")} label="Fontaneros en Barcelona" />
          <FooterLink href={servicePath("electricidad")} label="Electricistas en Barcelona" />
          <FooterLink href={consumerRoutes.guides} label="Guías para tu casa" />
          <FooterLink href={consumerRoutes.request} label="Pedir presupuesto" className="font-semibold text-terracotta-300" />
        </FooterColumn>

        <FooterColumn title="Para profesionales">
          <FooterLink href={proRoutes.network} label="Red de clientes" />
          <FooterLink href={proRoutes.marketing} label="Marketing para profesionales" />
          <FooterLink href={sectorPath("fontaneria")} label="Clientes para fontaneros" />
          <FooterLink href={sectorPath("electricidad")} label="Clientes para electricistas" />
          <FooterLink href={proRoutes.guides} label="Guías para profesionales" />
          <FooterLink href={proRoutes.join} label="Unirme a la red" className="font-semibold text-[#6CC0B3]" />
        </FooterColumn>

        <FooterColumn title="Contacto">
          <li>
            <a href={whatsappHref(consumerWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              WhatsApp
            </a>
          </li>
          <li>
            <a href={telHref()} className="inline-flex items-center gap-2 hover:text-white">
              <Icon name="phone" className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </li>
          <li>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Icon name="mail" className="h-4 w-4" />
              {siteConfig.email}
            </a>
          </li>
          <li className="inline-flex items-center gap-2">
            <Icon name="clock" className="h-4 w-4" />
            {siteConfig.openingHours}
          </li>
        </FooterColumn>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}.
          </p>
          <ul className="flex flex-wrap gap-4">
            <FooterLink href="/aviso-legal" label="Aviso legal" />
            <FooterLink href="/politica-privacidad" label="Privacidad" />
            <FooterLink href="/politica-cookies" label="Cookies" />
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

function FooterLink({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  return (
    <li>
      <Link href={href} className={`hover:text-white ${className}`}>
        {label}
      </Link>
    </li>
  );
}
