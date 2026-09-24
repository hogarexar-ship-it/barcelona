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
  { value: "google-business-profile", label: { es: "Google Business (Maps & Reseñas)", ca: "Google Business (Maps i Ressenyes)" } },
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
 * Dolores habituales que rotan en los botones de la portada. Cada uno apunta
 * al servicio que lo resuelve: llegan al formulario por ?situacion= y
 * ?servicio=, que rellenan el mensaje y el servicio de interés.
 */
export const situations: {
  value: string;
  icon: IconName;
  service: ServiceSlug;
  title: Record<Locale, string>;
  message: Record<Locale, string>;
}[] = [
  {
    value: "pocas-llamadas",
    icon: "phone",
    service: "anuncios-google-y-meta",
    title: { es: "Me llaman pocos clientes", ca: "Em truquen pocs clients" },
    message: {
      es: "Me llaman pocos clientes y quiero tener más trabajo.",
      ca: "Em truquen pocs clients i vull tenir més feina.",
    },
  },
  {
    value: "competencia",
    icon: "search",
    service: "seo-local",
    title: { es: "Mi competencia sale antes que yo en Google", ca: "La meva competència surt abans que jo a Google" },
    message: {
      es: "Cuando buscan mi servicio en Google sale antes mi competencia y quiero que me encuentren a mí.",
      ca: "Quan cerquen el meu servei a Google surt abans la meva competència i vull que em trobin a mi.",
    },
  },
  {
    value: "no-salgo-mapa",
    icon: "mapPin",
    service: "google-business-profile",
    title: { es: "No salgo en el mapa de Google", ca: "No surto al mapa de Google" },
    message: {
      es: "No salgo en el mapa de Google cuando buscan mi servicio en mi zona.",
      ca: "No surto al mapa de Google quan cerquen el meu servei a la meva zona.",
    },
  },
  {
    value: "se-escapan",
    icon: "inbox",
    service: "crm",
    title: { es: "Se me escapan llamadas y presupuestos", ca: "Se m'escapen trucades i pressupostos" },
    message: {
      es: "Se me escapan llamadas y presupuestos por falta de tiempo para hacer seguimiento.",
      ca: "Se m'escapen trucades i pressupostos per falta de temps per fer seguiment.",
    },
  },
  {
    value: "web-no-llama",
    icon: "globe",
    service: "landing-page-y-web",
    title: { es: "Mi web no me trae llamadas", ca: "La meva web no em porta trucades" },
    message: {
      es: "Tengo web (o no tengo) y no me trae llamadas de clientes.",
      ca: "Tinc web (o no en tinc) i no em porta trucades de clients.",
    },
  },
  {
    value: "anuncios-sin-clientes",
    icon: "megaphone",
    service: "anuncios-google-y-meta",
    title: { es: "Pago anuncios y no veo clientes", ca: "Pago anuncis i no veig clients" },
    message: {
      es: "He pagado anuncios y no he visto clientes.",
      ca: "He pagat anuncis i no he vist clients.",
    },
  },
  {
    value: "pocas-resenas",
    icon: "star",
    service: "google-business-profile",
    title: { es: "Tengo pocas reseñas en Google", ca: "Tinc poques ressenyes a Google" },
    message: {
      es: "Tengo pocas reseñas en Google y la gente llama a otros.",
      ca: "Tinc poques ressenyes a Google i la gent truca a altres.",
    },
  },
  {
    value: "boca-a-boca",
    icon: "users",
    service: "seo-local",
    title: { es: "Solo trabajo por el boca a boca", ca: "Només treballo pel boca-orella" },
    message: {
      es: "Dependo del boca a boca y quiero clientes nuevos de forma constante.",
      ca: "Depenc del boca-orella i vull clients nous de manera constant.",
    },
  },
];
