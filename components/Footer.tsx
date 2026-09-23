import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { WhatsAppIcon } from "./CtaButtons";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { marketingServices } from "@/lib/marketing-services";
import { routes, sectorPath } from "@/lib/navigation";
import { primaryCta, siteConfig, telHref, whatsappHref, whatsappMessage } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-100 print:hidden">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo onDark />
          <p className="mt-4 text-sm">
            {siteConfig.tagline} y alrededores.
          </p>
          <Link href={primaryCta.href} className="mt-5 inline-block text-sm font-semibold text-white underline underline-offset-4">
            {primaryCta.label}
          </Link>
        </div>

        <FooterColumn title="Servicios">
          {marketingServices.map((service) => (
            <FooterLink key={service.slug} href={service.path} label={service.name} />
          ))}
          <FooterLink href={routes.services} label="Todos los servicios" />
        </FooterColumn>

        <FooterColumn title="Para quién">
          <FooterLink href={sectorPath("fontaneria")} label="Marketing para fontaneros" />
          <FooterLink href={sectorPath("electricidad")} label="Marketing para electricistas" />
          <FooterLink href={routes.guides} label="Guías" />
        </FooterColumn>

        <FooterColumn title="Contacto">
          <li>
            <a href={whatsappHref(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
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

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="hover:text-white">
        {label}
      </Link>
    </li>
  );
}
