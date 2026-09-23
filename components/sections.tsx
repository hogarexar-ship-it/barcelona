import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { PhotoFrame } from "./PhotoFrame";
import type { Step } from "./ProcessSteps";
import { Reveal } from "./Reveal";
import type { TradeValue } from "@/lib/contact-options";
import { extraServices, marketingServices } from "@/lib/marketing-services";
import { sectors } from "@/lib/sectors-data";
import { siteConfig, telHref } from "@/lib/site-config";

/** Los cuatro servicios en tarjetas cortas: icono, nombre y beneficio. */
export function ServiceGrid({ iconClass = "text-accent-600" }: { iconClass?: string }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {marketingServices.map((service, index) => (
        <li key={service.slug}>
          <Reveal delay={index * 60} className="h-full">
            <Link
              href={service.path}
              className="group flex h-full flex-col rounded-xl2 border border-ink-200 bg-white p-5 transition-colors hover:border-ink-900"
            >
              <Icon name={service.icon} className={`h-8 w-8 ${iconClass}`} />
              <span className="mt-4 font-display text-lg font-bold leading-snug text-ink-900">{service.name}</span>
              <span className="mt-1 flex-1 text-sm text-ink-600">{service.benefit}</span>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink-900">
                Ver más
                <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/** Servicios complementarios en una sola línea. */
export function ExtraServices() {
  return (
    <p className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-600">
      <span className="font-semibold text-ink-900">Y si lo necesitas:</span>
      {extraServices.map((extra) => (
        <span key={extra.name} className="inline-flex items-center gap-2">
          <Icon name={extra.icon} className="h-5 w-5 text-accent-600" />
          {extra.name}
        </span>
      ))}
    </p>
  );
}

/** Dos accesos grandes por oficio. */
export function SectorCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {sectors.map((sector, index) => (
        <Reveal key={sector.trade} delay={index * 100}>
          <Link href={sector.path} className="group relative block overflow-hidden rounded-xl2">
            <PhotoFrame photo={sector.photo} className="aspect-[16/9] !rounded-none" sizes="(min-width: 768px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5 text-white sm:p-6">
              <span className="flex items-center gap-3 font-display text-2xl font-bold">
                <Icon name={sector.icon} className={`h-7 w-7 ${sector.tone.icon}`} />
                Soy {sector.person}
              </span>
              <Icon name="arrowRight" className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export const consultationSteps: Step[] = [
  { icon: "document", title: "Rellenas el formulario", description: "2 minutos." },
  { icon: "phone", title: "Te contactamos", description: "Por llamada, WhatsApp o email." },
  { icon: "chart", title: "Te proponemos un plan", description: "Gratis y sin compromiso." },
];

export function ContactSection({
  title = "Pide tu asesoramiento gratis",
  subtitle = "2 minutos. Te decimos qué haríamos en tu caso, sin compromiso.",
  defaultTrade,
  defaultInterest,
}: {
  title?: string;
  subtitle?: string;
  defaultTrade?: TradeValue;
  defaultInterest?: string;
}) {
  return (
    <section id="asesoramiento" className="scroll-mt-20 bg-surface-100 py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div data-reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-ink-600">{subtitle}</p>
          <a href={telHref()} className="mt-8 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent-700">
            <Icon name="phone" className="h-5 w-5 text-accent-600" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
        <Reveal delay={80}>
          <ContactForm defaultTrade={defaultTrade} defaultInterest={defaultInterest} idPrefix="seccion" />
        </Reveal>
      </Container>
    </section>
  );
}
