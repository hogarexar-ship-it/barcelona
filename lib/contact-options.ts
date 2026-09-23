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

/** Situaciones de la home: llegan al formulario por ?situacion= y rellenan el mensaje. */
export const situations: {
  value: string;
  icon: IconName;
  title: Record<Locale, string>;
  message: Record<Locale, string>;
}[] = [
  {
    value: "no-llego",
    icon: "clock",
    title: { es: "Tengo trabajo, pero no llego a todo", ca: "Tinc feina, però no arribo a tot" },
    message: {
      es: "Tengo trabajo, pero no llego a todo y el marketing digital siempre queda para después.",
      ca: "Tinc feina, però no arribo a tot i el màrqueting digital sempre queda per a després.",
    },
  },
  {
    value: "pocas-llamadas",
    icon: "trendingUp",
    title: { es: "No me llaman lo suficiente", ca: "No em truquen prou" },
    message: {
      es: "No recibo suficientes llamadas de clientes y quiero vender más.",
      ca: "No rebo prou trucades de clients i vull vendre més.",
    },
  },
];
