import type { IconName } from "@/components/Icon";
import { commercialTerms } from "./site-config";

export type Interest = "clientes" | "marketing" | "ambos";
export type Trade = "reformas" | "fontaneria" | "electricidad" | "otro";

export const interestOptions: { value: Interest; label: string }[] = [
  { value: "clientes", label: "Recibir clientes" },
  { value: "marketing", label: "Marketing para mi negocio" },
  { value: "ambos", label: "Las dos cosas / aún no lo sé" },
];

export const tradeOptions: { value: Trade; label: string }[] = [
  { value: "reformas", label: "Reformas" },
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
  href: "/conseguir-clientes",
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
  href: "/marketing-para-profesionales",
  name: "Marketing para tu negocio",
  title: "Hacemos que te encuentren",
  summary:
    "Llevamos tu ficha de Google, tus anuncios, tu web, tu marca y tus redes para que el cliente te llame a ti y no a la competencia.",
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
    icon: "sparkles",
    name: "Marca",
    title: "Una imagen que inspira confianza",
    description:
      "Nombre, logo, colores, rotulación de furgoneta, uniformes y presupuestos con tu imagen. Parecer profesional también vende.",
  },
  {
    icon: "chart",
    name: "Estrategia",
    title: "Un plan con números",
    description:
      "Decidimos qué servicios empujar, en qué zonas y con qué presupuesto, y medimos cuánto te cuesta cada cliente.",
  },
  {
    icon: "camera",
    name: "Redes sociales",
    title: "Redes sin perder tiempo",
    description:
      "Contenido de tus trabajos en Instagram, Facebook o TikTok, si lo quieres. Tú nos mandas las fotos por WhatsApp; nosotros hacemos el resto.",
  },
];
