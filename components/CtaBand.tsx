import { Container } from "./Container";
import { PrimaryCta, WhatsAppButton } from "./CtaButtons";
import { Icon } from "./Icon";
import { routes } from "@/lib/navigation";

/** Franja oscura de cierre con la llamada a la acción principal. */
export function CtaBand({
  title = "¿Hablamos de tu negocio?",
  text = "2 minutos. Te decimos qué haríamos en tu caso, gratis.",
  href = routes.contact,
  whatsappMessage,
}: {
  title?: string;
  text?: string;
  href?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="bg-ink-900 py-16 text-white sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div data-reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-white/80">{text}</p>
        </div>
        <div data-reveal className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row lg:justify-end">
          <PrimaryCta href={href} className="py-3.5 text-base" />
          <WhatsAppButton variant="ghost" message={whatsappMessage} className="py-3.5 text-base" />
        </div>
        <p className="flex items-center gap-2 text-sm text-white/60 lg:col-span-2">
          <Icon name="shield" className="h-5 w-5 text-white/60" />
          Sin coste y sin compromiso. Decides tú si seguimos.
        </p>
      </Container>
    </section>
  );
}
