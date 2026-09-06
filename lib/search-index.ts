import { services } from "./services-data";
import { rubroWizardConfigs } from "./wizard-data";

export type SearchableService = {
  id: string;
  serviceSlug: string;
  serviceName: string;
  problemValue: string;
  label: string;
  image: string;
  emergency: boolean;
  keywords: string;
};

/**
 * Índice de trabajos concretos buscables, construido a partir de las
 * opciones del wizard de solicitud (para que cada resultado enlace
 * directamente al paso correcto de `/solicitud`) y enriquecido con los
 * `commonJobs` de cada servicio como texto adicional de búsqueda.
 */
export const searchIndex: SearchableService[] = services.flatMap((service) => {
  const config = rubroWizardConfigs[service.slug];
  if (!config) return [];

  const extraKeywords = service.commonJobs.join(" ").toLowerCase();

  return config.problemQuestion.options
    .filter((option) => option.value !== "otro")
    .map((option) => ({
      id: `${service.slug}-${option.value}`,
      serviceSlug: service.slug,
      serviceName: service.name,
      problemValue: option.value,
      label: option.label,
      image: service.image,
      emergency: config.autoUrgentValues?.includes(option.value) ?? false,
      keywords: `${service.name} ${option.label} ${extraKeywords}`.toLowerCase(),
    }));
});
