"use client";

import { useSearchParams } from "next/navigation";
import { SolicitudWizard } from "./SolicitudWizard";

/**
 * Lee ?rubro=<slug>&problema=<valor> de la URL (por ejemplo, enlazado desde
 * una página de servicio o desde el buscador de servicios) para
 * preseleccionar rubro y problema en el wizard. Aislado en su propio
 * componente porque useSearchParams exige un límite <Suspense> alrededor.
 */
export function SolicitudWizardEntry() {
  const searchParams = useSearchParams();
  const rubro = searchParams.get("rubro") ?? undefined;
  const problema = searchParams.get("problema") ?? undefined;

  return <SolicitudWizard initialServiceSlug={rubro} initialProblemValue={problema} />;
}
