import Link from "next/link";
import { CheckList } from "./CheckList";
import { Container } from "./Container";
import { ConsumerRequestForm } from "./ConsumerRequestForm";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";
import { Marquee } from "./Marquee";
import { PhotoFrame } from "./PhotoFrame";
import { Reveal } from "./Reveal";
import type { Step } from "./ProcessSteps";
import { consumerRoutes } from "@/lib/navigation";
import type { Trade } from "@/lib/navigation";
import { photos } from "@/lib/photos";
import { districts, OTHER_PROBLEM, services } from "@/lib/services-data";
import type { Service } from "@/lib/services-data";
import { siteConfig, telHref } from "@/lib/site-config";

export function requestHref(trade?: Trade, problem?: string): string {
  const params = new URLSearchParams();
  if (trade) params.set("servicio", trade);
  if (problem) params.set("problema", problem);
  const query = params.toString();
  return query ? `${consumerRoutes.request}?${query}` : consumerRoutes.request;
}

export function HeroPhoto() {
  return (
    <PhotoFrame
      photo={photos.fontaneroClienteCocina}
      priority
      className="aspect-[4/3] lg:aspect-square"
      sizes="(min-width: 1024px) 40vw, 100vw"
    />
  );
}

/** Accesos rápidos a los problemas más comunes: llevan al formulario ya preseleccionado. */
export function QuickProblems({ trade }: { trade?: Trade }) {
  const items = services
    .filter((s) => !trade || s.trade === trade)
    .flatMap((s) =>
      s.problems
        .filter((p) => p.value !== OTHER_PROBLEM)
        .slice(0, trade ? 6 : 3)
        .map((p) => ({ trade: s.trade, ...p }))
    );

  return (
    <div className="mt-10">
      <p className="text-sm font-semibold text-ink-700">¿Qué te pasa?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <ProblemChip key={`${item.trade}-${item.value}`} href={requestHref(item.trade, item.value)} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
}

/** Cinta animada con todo lo que se puede pedir. */
export function ServiceMarquee() {
  return <Marquee items={services.flatMap((s) => s.subservices.map((sub) => ({ icon: sub.icon, label: sub.title })))} />;
}

function ProblemChip({ href, icon, label }: { href: string; icon: IconName; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-md border border-ink-200 px-3 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-accent-600 hover:text-accent-700"
    >
      <Icon name={icon} className="h-4 w-4 text-accent-600" />
      {label}
    </Link>
  );
}

export function ServiceCards() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {services.map((service, index) => (
        <Reveal key={service.trade} delay={index * 100}>
          <article className="flex h-full flex-col">
            <Link href={service.path} className="block">
              <PhotoFrame photo={service.photo} className="aspect-[16/10]" sizes="(min-width: 768px) 50vw, 100vw" />
            </Link>
            <h3 className="mt-6 flex items-center gap-3 font-display text-2xl font-bold text-ink-900">
              <Icon name={service.icon} className="h-7 w-7 text-accent-600" />
              {service.professionalPlural.charAt(0).toUpperCase() + service.professionalPlural.slice(1)}
            </h3>
            <div className="mt-4 flex flex-1 flex-wrap content-start gap-2">
              {service.problems
                .filter((p) => p.value !== OTHER_PROBLEM)
                .map((p) => (
                  <ProblemChip key={p.value} href={requestHref(service.trade, p.value)} icon={p.icon} label={p.label} />
                ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={requestHref(service.trade)} className="btn btn-primary">
                Pedir un {service.professional}
              </Link>
              <Link href={service.path} className="text-sm font-semibold text-ink-800 underline underline-offset-4 hover:text-accent-700">
                Ver servicios de {service.name.toLowerCase()}
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

const trustItems: { icon: IconName; title: string; text: string }[] = [
  { icon: "userCheck", title: "Profesionales verificados", text: "Comprobamos alta, seguro de responsabilidad civil y experiencia." },
  { icon: "euro", title: "Presupuesto antes de empezar", text: "Sabes lo que vas a pagar antes de que empiece el trabajo." },
  { icon: "check", title: "Gratis y sin compromiso", text: "Pedir presupuesto no te cuesta nada." },
  { icon: "mapPin", title: "Cerca de ti", text: `Profesionales de tu zona en ${siteConfig.areaServed}.` },
];

export function TrustBar() {
  return (
    <div className="grid gap-x-8 gap-y-8 border-y border-ink-200 py-10 sm:grid-cols-2 lg:grid-cols-4">
      {trustItems.map((item, index) => (
        <Reveal key={item.title} delay={index * 80}>
          <div className="flex gap-3">
            <Icon name={item.icon} className="mt-0.5 h-6 w-6 shrink-0 text-accent-600" />
            <div>
              <p className="font-semibold text-ink-900">{item.title}</p>
              <p className="mt-1 text-sm text-ink-600">{item.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export const consumerSteps: Step[] = [
  {
    icon: "chat",
    title: "Nos cuentas qué pasa",
    description: "Por el formulario o por WhatsApp: qué ocurre, dónde y para cuándo.",
  },
  {
    icon: "userCheck",
    title: "Te ponemos en contacto",
    description: "Con el fontanero o electricista de nuestra red que mejor encaja con tu caso y tu zona.",
  },
  {
    icon: "wrench",
    title: "Presupuesto y trabajo",
    description: "El profesional te da presupuesto antes de empezar. Si no te convence, no hay compromiso.",
  },
];

export function Districts() {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3" data-reveal>
      {districts.map((district) => (
        <li key={district} className="flex items-center gap-2 text-ink-700">
          <Icon name="mapPin" className="h-4 w-4 text-accent-600" />
          {district}
        </li>
      ))}
    </ul>
  );
}

export function RequestSection({
  title = "Pide presupuesto",
  subtitle = "Cuéntanos qué pasa y te ponemos en contacto con un profesional verificado de tu zona.",
  defaultTrade,
}: {
  title?: string;
  subtitle?: string;
  defaultTrade?: Service["trade"];
}) {
  return (
    <section id="pedir" className="scroll-mt-28 bg-surface-100 py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div data-reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-ink-600">{subtitle}</p>
          <div className="mt-8">
            <CheckList
              items={[
                "Pedir presupuesto es gratis.",
                "Solo pagas al profesional si aceptas su presupuesto.",
                "Profesionales verificados de tu zona.",
              ]}
            />
          </div>
          <a href={telHref()} className="mt-8 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent-700">
            <Icon name="phone" className="h-5 w-5 text-accent-600" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
        <Reveal delay={80}>
          <ConsumerRequestForm defaultTrade={defaultTrade} idPrefix="pedir" />
        </Reveal>
      </Container>
    </section>
  );
}
