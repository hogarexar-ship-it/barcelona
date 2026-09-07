"use client";

import Link from "next/link";
import { Container } from "./Container";
import { useLanguage } from "@/lib/i18n/context";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";
import { zones } from "@/lib/zones-data";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-ink-100 bg-ink-900 text-cream-100 print:hidden">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="font-display text-lg font-bold text-white">{siteConfig.brand} Barcelona</p>
          <p className="mt-3 text-sm text-ink-100">{t.footer.tagline}</p>
          <p className="mt-4 text-sm text-ink-100">
            {siteConfig.streetAddress}
            <br />
            {siteConfig.addressLocality}, {siteConfig.addressRegion}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">{t.footer.serviciosTitle}</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-100">
            <li>
              <Link href="/buscar-servicios" className="hover:text-terracotta-300">
                {t.footer.buscarUnServicio}
              </Link>
            </li>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/servicios/${service.slug}`} className="hover:text-terracotta-300">
                  {service.name} en Barcelona
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">{t.footer.profesionalesTitle}</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-100">
            <li>
              <Link href="/profesionales" className="font-semibold text-terracotta-300 hover:text-terracotta-200">
                {t.footer.unete}
              </Link>
            </li>
            <li>
              <Link href="/profesionales/cuanto-cobrar" className="hover:text-terracotta-300">
                {t.footer.cuantoCobrar}
              </Link>
            </li>
            <li>
              <Link href="/profesionales/presupuestos" className="hover:text-terracotta-300">
                {t.footer.generadorPresupuestos}
              </Link>
            </li>
            <li>
              <Link href="/profesionales/plantillas-whatsapp" className="hover:text-terracotta-300">
                {t.footer.plantillasWhatsapp}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">{t.footer.zonasTitle}</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-100">
            {zones.slice(0, 5).map((zone) => (
              <li key={zone.slug}>
                <Link href={`/zonas/${zone.slug}`} className="hover:text-terracotta-300">
                  {zone.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/zonas" className="hover:text-terracotta-300">
                {t.footer.verTodasZonas}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">{t.footer.contactoTitle}</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-100">
            <li>
              <Link href="/solicitud" className="font-semibold text-terracotta-300 hover:text-terracotta-200">
                {t.footer.pedirPresupuesto}
              </Link>
            </li>
            <li>
              <a href={`tel:${siteConfig.phoneE164}`} className="hover:text-terracotta-300">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-terracotta-300">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.openingHours}</li>
          </ul>
          <ul className="mt-4 space-y-2 text-sm text-ink-100">
            <li>
              <Link href="/aviso-legal" className="hover:text-terracotta-300">
                {t.footer.avisoLegal}
              </Link>
            </li>
            <li>
              <Link href="/politica-privacidad" className="hover:text-terracotta-300">
                {t.footer.politicaPrivacidad}
              </Link>
            </li>
            <li>
              <Link href="/politica-cookies" className="hover:text-terracotta-300">
                {t.footer.politicaCookies}
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-xs text-ink-100">
            {t.footer.disclaimer(new Date().getFullYear(), siteConfig.brand, siteConfig.foundingArgentina)}
          </p>
        </Container>
      </div>
    </footer>
  );
}
