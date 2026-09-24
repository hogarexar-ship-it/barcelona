import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { WhatsAppIcon } from "./CtaButtons";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";
import { getMarketingServices } from "@/lib/marketing-services";
import { routes, sectorPath } from "@/lib/navigation";
import { primaryCta, siteConfig, siteText, telHref, whatsappHref, whatsappMessage } from "@/lib/site-config";

export function Footer({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const cta = primaryCta(locale);
  return (
    <footer className="bg-ink-900 text-ink-100 print:hidden">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo onDark locale={locale} />
          <p className="mt-4 text-sm">
            {siteText[locale].tagline} {t("y alrededores", "i rodalies")}.
          </p>
          <Link href={cta.href} className="mt-5 inline-block text-sm font-semibold text-white underline underline-offset-4">
            {cta.label}
          </Link>
        </div>

        <FooterColumn title={t("Servicios", "Serveis")}>
          {getMarketingServices(locale).map((service) => (
            <FooterLink key={service.slug} href={service.path} label={service.name} />
          ))}
          <FooterLink href={routes[locale].services} label={t("Todos los servicios", "Tots els serveis")} />
        </FooterColumn>

        <FooterColumn title={t("Para quién", "Per a qui")}>
          <FooterLink
            href={sectorPath(locale, "fontaneria")}
            label={t("Marketing digital para fontaneros", "Màrqueting digital per a lampistes")}
          />
          <FooterLink
            href={sectorPath(locale, "electricidad")}
            label={t("Marketing digital para electricistas", "Màrqueting digital per a electricistes")}
          />
          <FooterLink href={routes[locale].guides} label={t("Guías", "Guies")} />
          <FooterLink href={routes[locale].glossary} label={t("Glosario", "Glossari")} />
        </FooterColumn>

        <FooterColumn title={t("Contacto", "Contacte")}>
          <li>
            <a href={whatsappHref(whatsappMessage(locale))} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
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
            {siteText[locale].openingHours}
          </li>
        </FooterColumn>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}.
          </p>
          <ul className="flex flex-wrap gap-4">
            <FooterLink href={routes[locale].legal} label={t("Aviso legal", "Avís legal")} />
            <FooterLink href={routes[locale].privacy} label={t("Privacidad", "Privacitat")} />
            <FooterLink href={routes[locale].cookies} label={t("Cookies", "Galetes")} />
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
