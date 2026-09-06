"use client";

import { useSearchParams } from "next/navigation";
import { SolicitudWizard } from "./SolicitudWizard";

/**
 * Lee ?rubro=<slug> de la URL (por ejemplo, enlazado desde una página de
 * servicio) para preseleccionar el rubro en el wizard. Aislado en su propio
 * componente porque useSearchParams exige un límite <Suspense> alrededor.
 */
export function SolicitudWizardEntry() {
  const searchParams = useSearchParams();
  const rubro = searchParams.get("rubro") ?? undefined;

  return <SolicitudWizard initialServiceSlug={rubro} />;
}
