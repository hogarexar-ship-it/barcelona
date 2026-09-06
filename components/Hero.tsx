import type { ReactNode } from "react";
import { Container } from "./Container";
import { CallButton, EmergencyBadge, WhatsAppButton } from "./CtaButtons";

export function Hero({
  eyebrow,
  title,
  subtitle,
  showEmergencyBadge = true,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  showEmergencyBadge?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-cream-100">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-terracotta-200/50 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
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
          <h1 className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg text-ink-600">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton />
            <CallButton variant="onDark" className="!border-ink-900 !text-ink-900 hover:!bg-ink-900 hover:!text-white" />
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}
