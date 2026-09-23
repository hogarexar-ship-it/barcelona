import type { IconName } from "@/components/Icon";
import type { Locale } from "./i18n";
import type { ServiceSlug } from "./navigation";

/** Etiquetas en castellano y catalán; el valor es el que se envía al webhook. */
export type Option<T extends string> = { value: T; label: Record<Locale, string>; icon: IconName };

export type TradeValue = "fontaneria" | "electricidad" | "otro";
export type BusinessType = "autonomo" | "empresa";
export type ContactMethod = "llamada" | "whatsapp" | "email";

export const tradeOptions: Option<TradeValue>[] = [
  { value: "fontaneria", label: { es: "Fontanería", ca: "Lampisteria" }, icon: "droplet" },
  { value: "electricidad", label: { es: "Electricidad", ca: "Electricitat" }, icon: "bolt" },
  { value: "otro", label: { es: "Otro oficio", ca: "Un altre ofici" }, icon: "wrench" },
];

export const businessTypeOptions: Option<BusinessType>[] = [
  { value: "autonomo", label: { es: "Autónomo / individual", ca: "Autònom / individual" }, icon: "userCheck" },
  { value: "empresa", label: { es: "Empresa", ca: "Empresa" }, icon: "building" },
];

export const contactMethodOptions: Option<ContactMethod>[] = [
  { value: "llamada", label: { es: "Llamada", ca: "Trucada" }, icon: "phone" },
  { value: "whatsapp", label: { es: "WhatsApp", ca: "WhatsApp" }, icon: "chat" },
  { value: "email", label: { es: "Email", ca: "Correu" }, icon: "mail" },
];

export const interestOptions: { value: ServiceSlug | "no-lo-se"; label: Record<Locale, string> }[] = [
  {
    value: "anuncios-google-y-meta",
    label: { es: "Anuncios en Google y Meta (Facebook e Instagram)", ca: "Anuncis a Google i Meta (Facebook i Instagram)" },
  },
  { value: "landing-page-y-web", label: { es: "Landing page o web", ca: "Landing page o web" } },
  { value: "google-business-profile", label: { es: "Google Business y reseñas", ca: "Google Business i ressenyes" } },
  { value: "seo-local", label: { es: "SEO y GEO", ca: "SEO i GEO" } },
  { value: "crm", label: { es: "CRM y seguimiento de clientes", ca: "CRM i seguiment de clients" } },
  { value: "no-lo-se", label: { es: "No lo sé, quiero que me asesoréis", ca: "No ho sé, vull que m'assessoreu" } },
];

export const municipalities = [
  "Barcelona",
  "L'Hospitalet de Llobregat",
  "Badalona",
  "Santa Coloma de Gramenet",
  "Sant Adrià de Besòs",
  "Cornellà de Llobregat",
  "Esplugues de Llobregat",
  "Sant Joan Despí",
  "Sant Just Desvern",
  "El Prat de Llobregat",
  "Castelldefels",
  "Gavà",
  "Viladecans",
  "Sant Cugat del Vallès",
  "Sabadell",
  "Terrassa",
  "Rubí",
  "Mataró",
  "Granollers",
  "Mollet del Vallès",
];

export const limits = { name: 100, business: 120, zone: 80, message: 1000 };

/**
 * Situaciones de la portada: dos formas de decir «necesito más clientes».
 * Llegan al formulario por ?situacion= y rellenan el mensaje.
 */
export const situations: {
  value: string;
  icon: IconName;
  title: Record<Locale, string>;
  message: Record<Locale, string>;
}[] = [
  {
    value: "pocas-llamadas",
    icon: "phone",
    title: { es: "Me llaman pocos clientes", ca: "Em truquen pocs clients" },
    message: {
      es: "Me llaman pocos clientes y quiero tener más trabajo.",
      ca: "Em truquen pocs clients i vull tenir més feina.",
    },
  },
  {
    value: "competencia",
    icon: "search",
    title: { es: "Mi competencia sale antes que yo en Google", ca: "La meva competència surt abans que jo a Google" },
    message: {
      es: "Cuando buscan mi servicio en Google sale antes mi competencia y quiero que me encuentren a mí.",
      ca: "Quan cerquen el meu servei a Google surt abans la meva competència i vull que em trobin a mi.",
    },
  },
];
