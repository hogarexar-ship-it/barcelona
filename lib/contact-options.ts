import type { IconName } from "@/components/Icon";
import type { ServiceSlug } from "./marketing-services";

export type Option<T extends string> = { value: T; label: string; icon: IconName };

export type TradeValue = "fontaneria" | "electricidad" | "otro";
export type BusinessType = "autonomo" | "empresa";
export type ContactMethod = "llamada" | "whatsapp" | "email";

export const tradeOptions: Option<TradeValue>[] = [
  { value: "fontaneria", label: "Fontanería", icon: "droplet" },
  { value: "electricidad", label: "Electricidad", icon: "bolt" },
  { value: "otro", label: "Otro oficio", icon: "wrench" },
];

export const businessTypeOptions: Option<BusinessType>[] = [
  { value: "autonomo", label: "Autónomo / individual", icon: "userCheck" },
  { value: "empresa", label: "Empresa", icon: "building" },
];

export const contactMethodOptions: Option<ContactMethod>[] = [
  { value: "llamada", label: "Llamada", icon: "phone" },
  { value: "whatsapp", label: "WhatsApp", icon: "chat" },
  { value: "email", label: "Email", icon: "mail" },
];

export const interestOptions: { value: ServiceSlug | "no-lo-se"; label: string }[] = [
  { value: "anuncios-google-y-meta", label: "Anuncios en Google y Meta" },
  { value: "landing-page-y-web", label: "Landing page o web" },
  { value: "google-business-profile", label: "Google Business Profile" },
  { value: "seo-local", label: "SEO local" },
  { value: "no-lo-se", label: "No lo sé, quiero que me asesoréis" },
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
