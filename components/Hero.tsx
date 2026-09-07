import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { CallButton, EmergencyBadge, WhatsAppButton } from "./CtaButtons";

export function Hero({
  eyebrow,
  title,
  subtitle,
  showEmergencyBadge = true,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  showEmergencyBadge?: boolean;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-cream-100">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-terracotta-200/50 blur-3xl"
        aria-hidden="true"
      />
      <Container className={`relative py-16 sm:py-20 lg:py-24 ${image ? "grid gap-10 lg:grid-cols-2 lg:items-center" : ""}`}>
        <div className="max-w-2xl">
          {showEmergencyBadge && (
            <div className="mb-5">
              <EmergencyBadge />
            </div>
          )}
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-terracotta-600">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-lg text-ink-600 sm:text-xl">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/solicitud"
              className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
            >
              Pedir presupuesto
            </Link>
            <WhatsAppButton />
            <CallButton variant="onDark" className="!border-ink-900 !text-ink-900 hover:!bg-ink-900 hover:!text-white" />
          </div>
          {children}
        </div>

        {image && (
          <div className="relative hidden aspect-square w-full overflow-hidden rounded-xl2 lg:block">
            <Image src={image} alt={imageAlt ?? ""} fill priority className="object-cover" />
          </div>
        )}
      </Container>
    </section>
  );
}
