import Link from "next/link";
import { CheckList } from "./CheckList";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { PhotoFrame } from "./PhotoFrame";
import { photos } from "@/lib/photos";
import { proRoutes } from "@/lib/navigation";
import { commercialTerms } from "@/lib/site-config";

/**
 * Invitación a profesionales dentro de la zona particulares. Usa la paleta
 * de la zona profesionales para que se reconozca de un vistazo que el
 * mensaje va dirigido a otro público.
 */
export function ProBand({ compact = false, professional }: { compact?: boolean; professional?: string }) {
  const title = professional ? `¿Eres ${professional}?` : "¿Eres fontanero o electricista?";

  if (compact) {
    return (
      <section className="theme-pro bg-ink-900 py-10 text-white">
        <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-300">Para profesionales</p>
            <p className="mt-1 font-display text-2xl font-bold">{title} Recibe clientes de tu zona.</p>
            <p className="mt-1 text-ink-100">
              {commercialTerms.network.signupFee}. Pagas comisión solo por los trabajos que cierras.
            </p>
          </div>
          <Link href={proRoutes.home} className="btn btn-primary shrink-0">
            Soy profesional
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="theme-pro bg-ink-900 py-16 text-white sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex rounded-full bg-accent-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-200">
            Para profesionales
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title} Te pasamos clientes de tu zona.</h2>
          <p className="mt-4 text-lg text-ink-100">
            Cada día hay vecinos de Barcelona que necesitan un profesional. Únete a nuestra red y te los pasamos, o deja
            que llevemos tu marketing para que te encuentren a ti.
          </p>
          <div className="mt-8">
            <CheckList
              onDark
              items={[
                `${commercialTerms.network.signupFee} y ${commercialTerms.network.noFixedFee.toLowerCase()}`,
                "Comisión solo por trabajo cerrado",
                "Tú eliges zonas, horarios y tipos de trabajo",
              ]}
            />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={proRoutes.home} className="btn btn-primary">
              Soy profesional
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
            <Link href={proRoutes.join} className="btn btn-ghost-light">
              Unirme a la red
            </Link>
          </div>
        </div>
        <PhotoFrame photo={photos.electricistaCasco} className="aspect-[16/10]" sizes="(min-width: 1024px) 50vw, 100vw" />
      </Container>
    </section>
  );
}
