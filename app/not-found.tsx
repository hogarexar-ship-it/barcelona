import Link from "next/link";
import { Container } from "@/components/Container";
import { PrimaryCta } from "@/components/CtaButtons";
import { SiteChrome } from "@/components/SiteChrome";
import { routes } from "@/lib/navigation";

export default function NotFound() {
  return (
    <SiteChrome locale="es">
      <section className="py-24">
        <Container className="max-w-xl text-center">
          <p className="font-display text-6xl font-bold text-accent-500">404</p>
          <h1 className="mt-4 font-display text-2xl font-bold text-ink-900">No encontramos esta página</h1>
          <p className="mt-3 text-ink-600">
            Puede que el enlace esté roto o que la página se haya movido. Vuelve al inicio o pide tu asesoramiento gratuito.
          </p>
          <p className="mt-2 text-sm text-ink-400" lang="ca">
            No trobem aquesta pàgina.{" "}
            <Link href={routes.ca.home} className="underline">
              Tornar a l&apos;inici
            </Link>
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={routes.es.home} className="btn btn-outline">
              Volver al inicio
            </Link>
            <PrimaryCta />
          </div>
        </Container>
      </section>
    </SiteChrome>
  );
}
