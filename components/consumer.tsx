import Image from "next/image";
import Link from "next/link";
import { CheckList } from "./CheckList";
import { Container } from "./Container";
import { ConsumerRequestForm } from "./ConsumerRequestForm";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";
import { Marquee } from "./Marquee";
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

/** Collage de fotos para el hero de la home, con elementos flotantes. */
export function HeroPhotos() {
  const main = photos.fontaneroClienteCocina;
  const secondary = photos.sagradaFamilia;

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl2 shadow-2xl shadow-ink-900/15 lg:aspect-[5/6] lg:w-[78%]">
        <Image src={main.src} alt={main.alt} fill priority sizes="(min-width: 1024px) 35vw, 90vw" className="object-cover" />
      </div>
      <div className="absolute -bottom-6 right-0 hidden aspect-square w-[48%] animate-float overflow-hidden rounded-xl2 border-4 border-surface-100 shadow-2xl shadow-ink-900/20 lg:block">
        <Image src={secondary.src} alt={secondary.alt} fill sizes="20vw" className="object-cover" />
      </div>
      <div className="absolute left-4 top-4 flex animate-float items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-ink-900 shadow-lg anim-delay-float">
        <Icon name="shield" className="h-4 w-4 text-accent-600" />
        Profesionales verificados
      </div>
      <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-lg lg:bottom-10">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-soft-ping rounded-full bg-emerald-500" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-semibold text-ink-900">Respondemos por WhatsApp</span>
      </div>
    </div>
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
    <div className="mt-8">
      <p className="text-sm font-semibold text-ink-700">¿Qué te pasa? Empieza por aquí:</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <ProblemChip key={`${item.trade}-${item.value}`} href={requestHref(item.trade, item.value)} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
}

function ProblemChip({ href, icon, label, muted = false }: { href: string; icon: IconName; label: string; muted?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:text-accent-700 ${
        muted ? "bg-surface-100 text-ink-700 hover:bg-accent-50" : "border border-ink-100 bg-white text-ink-800 hover:border-accent-300 hover:shadow-md"
      }`}
    >
      <Icon name={icon} className="h-4 w-4 text-accent-600 transition-transform group-hover:scale-125" />
      {label}
    </Link>
  );
}

/** Cinta animada con todo lo que se puede pedir. */
export function ServiceMarquee() {
  return <Marquee items={services.flatMap((s) => s.subservices.map((sub) => ({ icon: sub.icon, label: sub.title })))} />;
}

export function ServiceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service, index) => (
        <Reveal key={service.trade} delay={index * 150} className="h-full">
          <article className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-ink-100 bg-white transition hover:shadow-xl">
            <Link href={service.path} className="relative block aspect-[16/10] overflow-hidden">
              <Image
                src={service.photo.src}
                alt={service.photo.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-accent-600 shadow-lg">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
            </Link>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-ink-900">
                {service.professionalPlural.charAt(0).toUpperCase() + service.professionalPlural.slice(1)}
              </h3>
              <div className="mt-5 flex flex-1 flex-wrap content-start gap-2">
                {service.problems
                  .filter((p) => p.value !== OTHER_PROBLEM)
                  .map((p) => (
                    <ProblemChip key={p.value} href={requestHref(service.trade, p.value)} icon={p.icon} label={p.label} muted />
                  ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href={requestHref(service.trade)} className="btn btn-primary">
                  Pedir un {service.professional}
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
                <Link href={service.path} className="px-2 text-sm font-semibold text-ink-800 underline-offset-4 hover:underline">
                  Ver servicios de {service.name.toLowerCase()}
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

const trustItems: { icon: IconName; title: string; text: string }[] = [
  { icon: "userCheck", title: "Profesionales verificados", text: "Alta, seguro de responsabilidad civil y experiencia comprobados." },
  { icon: "euro", title: "Presupuesto antes de empezar", text: "Sabes lo que vas a pagar antes de que empiece el trabajo." },
  { icon: "check", title: "Gratis y sin compromiso", text: "Pedir presupuesto no te cuesta nada." },
  { icon: "mapPin", title: "Cerca de ti", text: `Profesionales de tu zona en ${siteConfig.areaServed}.` },
];

export function TrustBar() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {trustItems.map((item, index) => (
        <Reveal key={item.title} delay={index * 100} className="h-full">
          <div className="group flex h-full gap-4 rounded-xl2 border border-ink-100 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-transform group-hover:scale-110">
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
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
    title: "Cuéntanos qué pasa",
    description: "Rellena el formulario o escríbenos por WhatsApp: qué ocurre, dónde y para cuándo.",
  },
  {
    icon: "userCheck",
    title: "Te ponemos en contacto",
    description: "Buscamos en nuestra red al fontanero o electricista verificado que mejor encaja con tu caso y tu zona.",
  },
  {
    icon: "wrench",
    title: "Presupuesto y trabajo",
    description: "El profesional te da presupuesto antes de empezar. Tú decides, sin compromiso.",
  },
];

export function Districts() {
  return (
    <ul className="flex flex-wrap gap-2" data-reveal>
      {districts.map((district) => (
        <li
          key={district}
          className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-white px-3.5 py-2 text-sm font-medium text-ink-700 transition hover:border-accent-300 hover:text-accent-700"
        >
          <Icon name="mapPin" className="h-4 w-4 text-accent-500" />
          {district}
        </li>
      ))}
    </ul>
  );
}

export function RequestSection({
  title = "Pide presupuesto gratis",
  subtitle = "Cuéntanos qué pasa en menos de un minuto. Te ponemos en contacto con un profesional verificado de tu zona.",
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
          <p className="eyebrow">Sin compromiso</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{title}</h2>
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
          <a href={telHref()} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-accent-700">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-accent-600 shadow">
              <Icon name="phone" className="h-4 w-4" />
            </span>
            ¿Prefieres llamar? {siteConfig.phoneDisplay}
          </a>
        </div>
        <Reveal delay={120}>
          <ConsumerRequestForm defaultTrade={defaultTrade} idPrefix="pedir" />
        </Reveal>
      </Container>
    </section>
  );
}
