import type { IconName } from "@/components/Icon";
import { proRoutes } from "./navigation";
import type { Trade } from "./navigation";
import { commercialTerms } from "./site-config";

export type Interest = "clientes" | "marketing" | "ambos";
export type ProTrade = Trade | "otro";

export const interestOptions: { value: Interest; label: string; icon: IconName }[] = [
  { value: "clientes", label: "Recibir clientes", icon: "inbox" },
  { value: "marketing", label: "Marketing para mi negocio", icon: "megaphone" },
  { value: "ambos", label: "Las dos cosas / aún no lo sé", icon: "question" },
];

export const tradeOptions: { value: ProTrade; label: string }[] = [
  { value: "fontaneria", label: "Fontanería" },
  { value: "electricidad", label: "Electricidad" },
  { value: "otro", label: "Otro oficio" },
];

export type Offer = {
  href: string;
  name: string;
  title: string;
  summary: string;
  bullets: string[];
  cta: string;
  interest: Interest;
};

export const networkOffer: Offer = {
  href: proRoutes.network,
  name: "Red de clientes",
  title: "Te pasamos clientes",
  summary:
    "Captamos a personas y empresas de Barcelona que necesitan tu oficio y te pasamos las que encajan con tu zona y tu tipo de trabajo.",
  bullets: [
    "Clientes de tu oficio y de tu zona",
    `${commercialTerms.network.signupFee}, ${commercialTerms.network.noFixedFee.toLowerCase()}`,
    "Comisión solo por trabajo cerrado",
    "Tú decides qué trabajos aceptas",
  ],
  cta: "Quiero recibir clientes",
  interest: "clientes",
};

export const marketingOffer: Offer = {
  href: proRoutes.marketing,
  name: "Marketing para tu negocio",
  title: "Llevamos tu marketing",
  summary:
    "Llevamos tu ficha de Google, tus anuncios, tu web, tu marca y tus redes para que recibas más llamadas de tu zona.",
  bullets: [
    "Google Business Profile optimizado",
    "Anuncios en Google Ads y Meta",
    "Posicionamiento SEO y en asistentes de IA",
    "Marca, estrategia y redes sociales",
  ],
  cta: "Quiero el diagnóstico gratis",
  interest: "marketing",
};

export type MarketingService = {
  icon: IconName;
  name: string;
  title: string;
  description: string;
};

export const marketingServices: MarketingService[] = [
  {
    icon: "mapPin",
    name: "Google Business Profile",
    title: "Aparece en el mapa de Google",
    description:
      "Optimizamos tu ficha (categorías, servicios, zonas, fotos y publicaciones) y montamos un sistema para conseguir reseñas después de cada trabajo.",
  },
  {
    icon: "megaphone",
    name: "Google Ads",
    title: "Anuncios que traen llamadas",
    description:
      "Campañas por servicio y por barrio, en el horario en que puedes atender, con presupuesto controlado y seguimiento de llamadas y formularios.",
  },
  {
    icon: "users",
    name: "Meta Ads",
    title: "Llega a los vecinos de tu zona",
    description:
      "Anuncios en Facebook e Instagram con trabajos reales de antes y después, dirigidos a propietarios de las zonas donde quieres trabajar.",
  },
  {
    icon: "globe",
    name: "SEO y web",
    title: "Una web que posiciona y convierte",
    description:
      "Web rápida con páginas por servicio y barrio, preparada para Google y para asistentes de IA como ChatGPT, Gemini o Perplexity.",
  },
  {
    icon: "bulb",
    name: "Marca",
    title: "Una imagen que inspira confianza",
    description:
      "Nombre, logo, colores, rotulación de furgoneta, uniformes y presupuestos con tu imagen.",
  },
  {
    icon: "chart",
    name: "Estrategia",
    title: "Plan de marketing",
    description:
      "Decidimos qué servicios empujar, en qué zonas y con qué presupuesto, y medimos cuánto te cuesta cada cliente.",
  },
  {
    icon: "camera",
    name: "Redes sociales",
    title: "Publicaciones de tus trabajos",
    description:
      "Contenido de tus trabajos en Instagram, Facebook o TikTok, si lo quieres. Tú nos mandas las fotos por WhatsApp; nosotros hacemos el resto.",
  },
];
