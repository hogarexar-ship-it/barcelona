import Image from "next/image";
import Link from "next/link";
import { CheckList } from "./CheckList";
import { Container } from "./Container";
import { ConsumerRequestForm } from "./ConsumerRequestForm";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";
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

/** Collage de fotos reales para el hero de la home. */
export function HeroPhotos() {
  const main = photos.fontaneroClienteCocina;
  const secondary = photos.sagradaFamilia;

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl2 shadow-2xl shadow-ink-900/15 lg:aspect-[5/6] lg:w-[78%]">
        <Image src={main.src} alt={main.alt} fill priority sizes="(min-width: 1024px) 35vw, 90vw" className="object-cover" />
      </div>
      <div className="absolute -bottom-6 right-0 hidden aspect-square w-[48%] overflow-hidden rounded-xl2 border-4 border-surface-100 shadow-2xl shadow-ink-900/20 lg:block">
        <Image src={secondary.src} alt={secondary.alt} fill sizes="20vw" className="object-cover" />
      </div>
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-ink-900 shadow-lg">
        <Icon name="shield" className="h-4 w-4 text-accent-600" />
        Profesionales verificados
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
          <Link
            key={`${item.trade}-${item.value}`}
            href={requestHref(item.trade, item.value)}
            className="rounded-full border border-ink-100 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition hover:border-accent-300 hover:text-accent-700"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ServiceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service) => (
        <article key={service.trade} className="flex flex-col overflow-hidden rounded-xl2 border border-ink-100 bg-white">
          <Link href={service.path} className="relative block aspect-[16/10] overflow-hidden">
            <Image
              src={service.photo.src}
              alt={service.photo.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </Link>
          <div className="flex flex-1 flex-col p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-display text-2xl font-bold text-ink-900">
                {service.professionalPlural.charAt(0).toUpperCase() + service.professionalPlural.slice(1)}
              </h3>
            </div>
            <p className="mt-3 text-ink-600">{service.cardText}</p>
            <div className="mt-5 flex flex-1 flex-wrap content-start gap-2">
              {service.problems
                .filter((p) => p.value !== OTHER_PROBLEM)
                .map((p) => (
                  <Link
                    key={p.value}
                    href={requestHref(service.trade, p.value)}
                    className="rounded-full bg-surface-100 px-3 py-1.5 text-sm font-medium text-ink-700 hover:bg-accent-50 hover:text-accent-700"
                  >
                    {p.label}
                  </Link>
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
      ))}
    </div>
  );
}

const trustItems: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Profesionales verificados", text: "Comprobamos alta, seguro de responsabilidad civil y experiencia." },
  { icon: "euro", title: "Presupuesto antes de empezar", text: "Sabes lo que vas a pagar antes de que empiece el trabajo." },
  { icon: "check", title: "Gratis y sin compromiso", text: "Pedir presupuesto no te cuesta nada." },
  { icon: "mapPin", title: "Cerca de ti", text: `Profesionales de tu zona en ${siteConfig.areaServed}.` },
];

export function TrustBar() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {trustItems.map((item) => (
        <div key={item.title} className="flex gap-4 rounded-xl2 border border-ink-100 bg-white p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
            <Icon name={item.icon} className="h-5 w-5" />
          </span>
          <div>
            <p className="font-semibold text-ink-900">{item.title}</p>
            <p className="mt-1 text-sm text-ink-600">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export const consumerSteps = [
  {
    title: "Cuéntanos qué pasa",
    description: "Rellena el formulario o escríbenos por WhatsApp: qué ocurre, dónde y para cuándo.",
  },
  {
    title: "Te ponemos en contacto",
    description: "Buscamos en nuestra red al fontanero o electricista verificado que mejor encaja con tu caso y tu zona.",
  },
  {
    title: "Presupuesto y trabajo",
    description: "El profesional te da presupuesto antes de empezar. Tú decides, sin compromiso.",
  },
];

export function Districts() {
  return (
    <ul className="flex flex-wrap gap-2">
      {districts.map((district) => (
        <li key={district} className="rounded-full border border-ink-100 bg-white px-4 py-2 text-sm font-medium text-ink-700">
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
        <div>
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
          <p className="mt-8 text-sm text-ink-600">
            ¿Prefieres llamar?{" "}
            <a href={telHref()} className="font-semibold text-ink-900 underline underline-offset-4">
              {siteConfig.phoneDisplay}
            </a>
          </p>
        </div>
        <ConsumerRequestForm defaultTrade={defaultTrade} idPrefix="pedir" />
      </Container>
    </section>
  );
}
