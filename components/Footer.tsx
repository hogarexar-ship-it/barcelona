import Link from "next/link";
import { Container } from "./Container";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";
import { zones } from "@/lib/zones-data";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-900 text-cream-100">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold text-white">{siteConfig.brand} Barcelona</p>
          <p className="mt-3 text-sm text-ink-100">{siteConfig.shortTagline}</p>
          <p className="mt-4 text-sm text-ink-100">
            {siteConfig.streetAddress}
            <br />
            {siteConfig.addressLocality}, {siteConfig.addressRegion}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Servicios</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-100">
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
          <p className="text-sm font-semibold text-white">Zonas</p>
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
                Ver todas las zonas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-100">
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
                Aviso legal
              </Link>
            </li>
            <li>
              <Link href="/politica-privacidad" className="hover:text-terracotta-300">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/politica-cookies" className="hover:text-terracotta-300">
                Política de cookies
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-xs text-ink-100">
            © {new Date().getFullYear()} {siteConfig.brand}. {siteConfig.brand} es una marca
            operada en Barcelona, España, en gestión con nuestra red de profesionales
            independientes del hogar. Fundada en Argentina ({siteConfig.foundingArgentina}).
          </p>
        </Container>
      </div>
    </footer>
  );
}
