import Link from "next/link";
import { CheckList } from "./CheckList";
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

export function ServiceGrid() {
  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
      {marketingServices.map((service, index) => (
        <Reveal key={service.slug} delay={(index % 2) * 80}>
          <Link href={service.path} className="group block border-t border-ink-200 pt-6">
            <Icon name={service.icon} className="h-8 w-8 text-accent-600" />
            <h3 className="mt-4 font-display text-xl font-bold text-ink-900 group-hover:text-accent-700">{service.name}</h3>
            <p className="mt-2 text-ink-600">{service.short}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
              Ver servicio
              <Icon name="arrowRight" className="h-4 w-4" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function ExtraServices() {
  return (
    <div className="rounded-xl2 border border-ink-200 bg-white p-6 sm:p-8">
      <p className="font-display text-lg font-bold text-ink-900">Y si lo necesitas, también:</p>
      <ul className="mt-5 grid gap-6 sm:grid-cols-3">
        {extraServices.map((extra) => (
          <li key={extra.name} className="flex gap-3">
            <Icon name={extra.icon} className="mt-0.5 h-6 w-6 shrink-0 text-accent-600" />
            <div>
              <p className="font-semibold text-ink-900">{extra.name}</p>
              <p className="mt-1 text-sm text-ink-600">{extra.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SectorCards() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {sectors.map((sector, index) => (
        <Reveal key={sector.trade} delay={index * 100}>
          <Link href={sector.path} className="group block">
            <PhotoFrame photo={sector.photo} className="aspect-[16/10]" sizes="(min-width: 768px) 50vw, 100vw" />
            <h3 className="mt-5 flex items-center gap-3 font-display text-2xl font-bold text-ink-900 group-hover:text-accent-700">
              <Icon name={sector.icon} className="h-7 w-7 text-accent-600" />
              Para {sector.audience}
            </h3>
            <p className="mt-2 text-ink-600">{sector.cardText}</p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export const consultationSteps: Step[] = [
  {
    icon: "document",
    title: "Rellenas el formulario",
    description: "Tu oficio, tu zona y cómo prefieres que te contactemos. Un par de minutos.",
  },
  {
    icon: "phone",
    title: "Hablamos de tu situación",
    description: "Te contactamos por llamada, WhatsApp o email para entender tu negocio: qué haces, dónde y qué te falta.",
  },
  {
    icon: "chart",
    title: "Te proponemos una estrategia",
    description: "Qué haríamos primero, con qué servicios y con qué inversión. Gratis y sin compromiso.",
  },
];

export function ContactSection({
  title = "Pide tu asesoramiento gratis",
  subtitle = "Cuéntanos cómo está tu negocio y te decimos, sin compromiso, qué estrategia aplicaríamos para conseguirte más clientes.",
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
          <div className="mt-8">
            <CheckList
              items={[
                "Revisamos tu presencia actual: Google, web y anuncios.",
                "Te decimos por dónde empezar según tu situación.",
                "Sin compromiso: decides tú si seguimos.",
              ]}
            />
          </div>
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
