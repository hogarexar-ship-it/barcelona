import type { IconName } from "@/components/Icon";
import type { Locale } from "./i18n";
import { sectorPath } from "./navigation";
import type { Trade } from "./navigation";
import { photos } from "./photos";
import type { Photo } from "./photos";
import type { Faq } from "./types";
import { sectorsCa } from "./sectors-data.ca";

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
  /** «Si eres fontanero, probablemente…»: lo que le pasa hoy. */
  symptoms: string[];
  /** Errores habituales que frenan el crecimiento. */
  mistakes: string[];
  /** Lo que cuesta no tener un sistema para conseguir clientes. */
  costs: { icon: IconName; text: string }[];
  /** Las piezas del sistema, todas conectadas. */
  system: string[];
  faqs: Faq[];
};

/** Versión en castellano. La catalana está en sectors-data.ca.ts. */
export const sectors: Sector[] = [
  {
    path: sectorPath("es", "fontaneria"),
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
    symptoms: [
      "Semanas con mucho trabajo y semanas sin nada",
      "Dependes del boca a boca y de los clientes de siempre",
      "Las urgencias se las llevan las empresas grandes",
      "Publicas en redes, pero no te llama nadie",
      "Das presupuestos que nunca se cierran",
    ],
    mistakes: [
      "No tener una forma clara de conseguir clientes nuevos",
      "Depender solo de Instagram o Facebook, sin anuncios",
      "Hacer anuncios sin saber qué llamadas traen",
      "No tener una web pensada para que te llamen",
      "Tener la ficha de Google abandonada y sin reseñas",
    ],
    costs: [
      { icon: "phone", text: "Pierdes trabajos cada día que se lleva otro" },
      { icon: "calendar", text: "Dependes de la temporada y de las urgencias" },
      { icon: "users", text: "No puedes contratar ni crecer" },
      { icon: "euro", text: "Acabas bajando precios para competir" },
    ],
    system: [
      "Anuncios en Google, Facebook e Instagram para gente de tu zona",
      "Una landing page pensada para que te llamen",
      "Botón directo a WhatsApp para responder al momento",
      "Ficha de Google con reseñas que dan confianza",
      "CRM para seguir cada contacto y cada presupuesto",
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
    path: sectorPath("es", "electricidad"),
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
    symptoms: [
      "Trabajo irregular: meses buenos y meses flojos",
      "Pocos trabajos grandes: cuadros, boletines, cargadores",
      "Dependes de que te recomienden",
      "Publicas en redes, pero no ves resultados",
      "Promociones que solo atraen a quien busca lo más barato",
    ],
    mistakes: [
      "No tener una estrategia clara para conseguir clientes nuevos",
      "Depender solo de Instagram o Facebook, sin anuncios",
      "No usar bien la publicidad en Google y Meta",
      "No tener una web que convierta visitas en llamadas",
      "No mostrar que estás habilitado, tus trabajos y tus reseñas",
    ],
    costs: [
      { icon: "phone", text: "Pierdes trabajos cada día que se lleva otro" },
      { icon: "calendar", text: "Dependes de temporadas y de recomendaciones" },
      { icon: "users", text: "No puedes crecer ni montar equipo" },
      { icon: "euro", text: "Acabas bajando precios para conseguir trabajo" },
    ],
    system: [
      "Anuncios en Google, Facebook e Instagram para gente de tu zona",
      "Una landing page por servicio: cuadros, boletines, cargadores",
      "Botón directo a WhatsApp para responder al momento",
      "Ficha de Google con reseñas que dan confianza",
      "CRM para seguir cada contacto y cada presupuesto",
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

export function getSectors(locale: Locale): Sector[] {
  return locale === "ca" ? sectorsCa : sectors;
}

export function getSector(locale: Locale, trade: Trade): Sector {
  const sector = getSectors(locale).find((s) => s.trade === trade);
  if (!sector) throw new Error(`Sector desconocido: ${trade}`);
  return sector;
}
