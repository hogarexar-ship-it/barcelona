import type { IconName } from "@/components/Icon";
import { sectorPath } from "./navigation";
import type { Trade } from "./navigation";
import { photos } from "./photos";
import type { Photo } from "./photos";
import type { Faq } from "./types";

export type Sector = {
  path: string;
  trade: Trade;
  photo: Photo;
  icon: IconName;
  /** Color propio del oficio (clases literales para que Tailwind las genere). */
  tone: { chip: string; icon: string; soft: string; bar: string };
  name: string;
  audience: string;
  /** Singular: «Soy fontanero». */
  person: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  cardText: string;
  context: string[];
  /** Búsquedas reales que hace el cliente: donde tienes que aparecer. */
  searches: { icon: IconName; label: string }[];
  plan: { title: string; text: string }[];
  faqs: Faq[];
};

export const sectors: Sector[] = [
  {
    path: sectorPath("fontaneria"),
    trade: "fontaneria",
    photo: photos.fontaneroCajaHerramientas,
    icon: "droplet",
    tone: { chip: "bg-sky-100 text-sky-900", icon: "text-sky-600", soft: "bg-sky-50", bar: "bg-sky-500" },
    name: "Fontanería",
    audience: "fontaneros",
    person: "fontanero",
    metaTitle: "Marketing digital para fontaneros en Barcelona: más clientes y llamadas",
    metaDescription:
      "Marketing digital para fontaneros en Barcelona y alrededores: anuncios en Google y Meta (Facebook e Instagram), web, ficha de Google, reseñas, SEO y GEO para recibir más llamadas de clientes de tu zona. Asesoramiento gratuito.",
    heroTitle: "Marketing digital para fontaneros en Barcelona",
    heroSubtitle: "Que te llamen clientes de tu zona. Del marketing digital nos encargamos nosotros.",
    cardText: "Urgencias, calentadores, desatascos y reformas de baño: aparece cuando te buscan.",
    context: [
      "La fontanería tiene demanda todo el año en Barcelona: fugas, atascos, calentadores y termos que fallan cualquier día. Quien tiene una urgencia busca en el móvil y llama al primero que le da confianza.",
      "Si no apareces en el mapa de Google, no tienes reseñas o tu web no carga en el móvil, esa llamada se la lleva otro. Y cuando estás todo el día en obras, el marketing digital siempre queda para después.",
    ],
    searches: [
      { icon: "droplet", label: "fontanero urgente Barcelona" },
      { icon: "drain", label: "desatascos cerca de mí" },
      { icon: "flame", label: "cambiar termo eléctrico precio" },
      { icon: "faucet", label: "fontanero en Gràcia" },
      { icon: "bath", label: "reforma de baño Barcelona" },
      { icon: "building", label: "fontanero para comunidades" },
    ],
    plan: [
      {
        title: "Ficha de Google para el mapa",
        text: "Categorías, zona de servicio, fotos y reseñas para aparecer cuando buscan «fontanero cerca de mí».",
      },
      {
        title: "Anuncios de llamada en tu horario",
        text: "Campañas en Google que solo se muestran cuando puedes coger el teléfono y en las zonas donde quieres ir.",
      },
      {
        title: "Landing por servicio",
        text: "Una página para urgencias, otra para calentadores, otra para reformas: cada una con llamada y WhatsApp a la vista.",
      },
    ],
    faqs: [
      {
        question: "¿Me sirve si solo quiero trabajos programados, no urgencias?",
        answer: "Sí. Las campañas y la web se orientan a los trabajos que tú quieres hacer y a las horas en que puedes atender.",
      },
      {
        question: "Soy autónomo y no tengo tiempo, ¿qué tengo que hacer yo?",
        answer:
          "Muy poco: mandarnos fotos de tus trabajos por WhatsApp y validar lo importante. La gestión del día a día la hacemos nosotros.",
      },
      {
        question: "¿Cuánto cuesta?",
        answer:
          "Depende de los servicios y de tu zona. En el asesoramiento gratuito vemos tu situación y te proponemos un plan con su precio, sin compromiso.",
      },
    ],
  },
  {
    path: sectorPath("electricidad"),
    trade: "electricidad",
    photo: photos.electricistaPlafon,
    icon: "bolt",
    tone: { chip: "bg-amber-100 text-amber-900", icon: "text-amber-500", soft: "bg-amber-50", bar: "bg-amber-400" },
    name: "Electricidad",
    audience: "electricistas",
    person: "electricista",
    metaTitle: "Marketing digital para electricistas en Barcelona: más clientes y llamadas",
    metaDescription:
      "Marketing digital para electricistas en Barcelona y alrededores: anuncios en Google y Meta (Facebook e Instagram), web, ficha de Google, reseñas, SEO y GEO para conseguir más clientes de averías, boletines, cuadros y cargadores.",
    heroTitle: "Marketing digital para electricistas en Barcelona",
    heroSubtitle: "Más averías, boletines, cuadros y cargadores en tu zona. Del marketing digital nos encargamos nosotros.",
    cardText: "Averías, boletines, cuadros y cargadores: los trabajos que más buscan tus clientes.",
    context: [
      "La demanda de electricistas en Barcelona va más allá de las averías: boletines para altas y cambios de potencia, cuadros antiguos que adecuar, puntos de carga para coche eléctrico y autoconsumo.",
      "Son trabajos de más importe en los que el cliente busca un instalador habilitado y de confianza. Si tu presencia online no lo transmite, llama al siguiente de la lista.",
    ],
    searches: [
      { icon: "bolt", label: "electricista urgente Barcelona" },
      { icon: "document", label: "boletín eléctrico precio" },
      { icon: "panel", label: "cambiar cuadro eléctrico" },
      { icon: "car", label: "instalar cargador coche eléctrico" },
      { icon: "bulb", label: "electricista en Sants" },
      { icon: "plug", label: "aumentar potencia luz" },
    ],
    plan: [
      {
        title: "Que se vea que estás habilitado",
        text: "Habilitación, seguros y garantías visibles en tu ficha de Google y en tu web.",
      },
      {
        title: "Campañas por servicio",
        text: "Anuncios separados para cargadores, boletines, cuadros o urgencias, cada uno con su presupuesto y su página.",
      },
      {
        title: "Contenido que responde dudas",
        text: "Páginas sobre qué es un boletín o cuánto cuesta un punto de carga, que atraen clientes desde Google y asistentes de IA.",
      },
    ],
    faqs: [
      {
        question: "¿Podéis ayudarme a conseguir trabajos de cargadores o autoconsumo?",
        answer:
          "Sí. Son búsquedas con mucho interés y trabajos de más importe: se pueden captar con campañas y páginas específicas.",
      },
      {
        question: "Tengo empresa con varios técnicos, ¿trabajáis también con empresas?",
        answer: "Sí, con autónomos y con empresas. El plan se adapta a tu capacidad y a los servicios que quieras empujar.",
      },
      {
        question: "¿Cuánto cuesta?",
        answer:
          "Depende de los servicios y de tu zona. En el asesoramiento gratuito vemos tu situación y te proponemos un plan con su precio, sin compromiso.",
      },
    ],
  },
];

export function getSector(trade: Trade): Sector {
  const sector = sectors.find((s) => s.trade === trade);
  if (!sector) throw new Error(`Sector desconocido: ${trade}`);
  return sector;
}
