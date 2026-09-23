import type { ReactNode } from "react";
import { Container } from "./Container";
import { PrimaryCta, ProCta, ProWhatsAppButton, WhatsAppButton } from "./CtaButtons";

/**
 * Hero de página. `audience="pro"` lo pinta oscuro (zona profesionales);
 * por defecto es claro y cálido (zona particulares).
 */
export function PageHero({
  audience = "consumer",
  eyebrow,
  title,
  subtitle,
  actions,
  aside,
  children,
}: {
  audience?: "consumer" | "pro";
  eyebrow?: string;
  title: string;
  subtitle: string;
  actions?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  const pro = audience === "pro";

  return (
    <section className={`relative overflow-hidden ${pro ? "bg-ink-900 text-white" : "bg-surface-100"}`}>
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl ${
          pro ? "bg-accent-500/25" : "bg-accent-200/50"
        }`}
        aria-hidden="true"
      />
      <Container
        className={`relative py-14 sm:py-20 lg:py-24 ${aside ? "grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center" : ""}`}
      >
        <div className="max-w-2xl">
          {eyebrow && <p className={`eyebrow mb-4 ${pro ? "!text-accent-300" : ""}`}>{eyebrow}</p>}
          <h1
            className={`font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${
              pro ? "text-white" : "text-ink-900"
            }`}
          >
            {title}
          </h1>
          <p className={`mt-5 text-lg sm:text-xl ${pro ? "text-ink-100" : "text-ink-600"}`}>{subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {actions ??
              (pro ? (
                <>
                  <ProCta />
                  <ProWhatsAppButton />
                </>
              ) : (
                <>
                  <PrimaryCta />
                  <WhatsAppButton />
                </>
              ))}
          </div>
          {children}
        </div>
        {aside}
      </Container>
    </section>
  );
}
