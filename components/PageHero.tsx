import type { ReactNode } from "react";
import { Container } from "./Container";
import { PrimaryCta, WhatsAppButton } from "./CtaButtons";

export function PageHero({
  title,
  subtitle,
  actions,
  aside,
  asideDesktopOnly = false,
  children,
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
  aside?: ReactNode;
  asideDesktopOnly?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="bg-surface-100">
      <Container
        className={`py-14 sm:py-20 lg:py-24 ${aside ? "grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center" : ""}`}
      >
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-lg text-ink-600 sm:text-xl">{subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {actions ?? (
              <>
                <PrimaryCta />
                <WhatsAppButton />
              </>
            )}
          </div>
          {children}
        </div>
        {aside && <div className={asideDesktopOnly ? "hidden lg:block" : ""}>{aside}</div>}
      </Container>
    </section>
  );
}
