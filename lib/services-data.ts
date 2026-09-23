import type { IconName } from "@/components/Icon";
import { servicePath } from "./navigation";
import { photos } from "./photos";
import type { Photo } from "./photos";
import type { Trade } from "./navigation";
import { siteConfig } from "./site-config";
import type { Faq } from "./types";

/** Servicios de la zona particulares: lo que busca el usuario final. */
export type Service = {
  trade: Trade;
  path: string;
  icon: IconName;
  name: string;
  professional: string;
  professionalPlural: string;
  photo: Photo;
  gallery: Photo[];
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  problems: { value: string; label: string; icon: IconName }[];
  subservices: { icon: IconName; title: string; text: string }[];
  faqs: Faq[];
};

export const OTHER_PROBLEM = "otro";

export const services: Service[] = [
  {
    trade: "fontaneria",
    path: servicePath("fontaneria"),
    icon: "droplet",
    name: "Fontanería",
    professional: "fontanero",
    professionalPlural: "fontaneros",
    photo: photos.fontaneroFregadero,
    gallery: [photos.fontaneroBajoFregadero, photos.fontaneroGrifo, photos.fontaneroCajaHerramientas],
    metaTitle: "Fontaneros en Barcelona: fugas, atascos y calentadores",
    metaDescription:
      "¿Necesitas un fontanero en Barcelona? Cuéntanos qué pasa y te ponemos en contacto con un fontanero verificado de tu zona. Fugas, atascos, calentadores y más. Presupuesto sin compromiso.",
    heroTitle: "Fontaneros en Barcelona",
    heroSubtitle:
      "Fugas, atascos, calentadores o grifos. Cuéntanos qué pasa y te ponemos en contacto con un fontanero verificado de tu zona. Pedir presupuesto es gratis.",
    problems: [
      { value: "fuga", label: "Fuga de agua", icon: "droplet" },
      { value: "atasco", label: "Atasco o desagüe lento", icon: "drain" },
      { value: "calentador", label: "Calentador o termo", icon: "flame" },
      { value: "grifo", label: "Grifo o cisterna", icon: "faucet" },
      { value: "instalacion", label: "Instalación en baño o cocina", icon: "bath" },
      { value: OTHER_PROBLEM, label: "Otra cosa", icon: "question" },
    ],
    subservices: [
      {
        icon: "droplet",
        title: "Fugas y reparación de tuberías",
        text: "Localización y reparación de fugas en tuberías, conexiones y bajantes, también las que no se ven.",
      },
      { icon: "drain", title: "Desatascos", text: "Fregaderos, lavabos, duchas, inodoros y bajantes que tragan mal o no tragan." },
      {
        icon: "flame",
        title: "Calentadores y termos",
        text: "Reparación, sustitución e instalación de termos eléctricos y calentadores.",
      },
      {
        icon: "faucet",
        title: "Grifería y sanitarios",
        text: "Grifos que gotean, cisternas que no dejan de cargar, inodoros y platos de ducha.",
      },
      {
        icon: "bath",
        title: "Instalaciones en baño y cocina",
        text: "Tomas de agua y desagües para lavadora, lavavajillas o una reforma.",
      },
      {
        icon: "building",
        title: "Comunidades y locales",
        text: "Averías en zonas comunes y mantenimiento para administradores de fincas y comercios.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta un fontanero en Barcelona?",
        answer: `Depende del trabajo, la urgencia y los materiales. El fontanero te da el presupuesto antes de empezar y pedirlo a través de ${siteConfig.brand} es gratis y sin compromiso.`,
      },
      {
        question: "¿Puede venir hoy si es urgente?",
        answer:
          "Si marcas la solicitud como urgente, buscamos un fontanero disponible en tu zona lo antes posible. La disponibilidad depende del momento y del barrio, y te confirmamos el horario antes de que salga.",
      },
      {
        question: "¿Los fontaneros están verificados?",
        answer:
          "Sí. Antes de entrar en nuestra red comprobamos que están dados de alta, que tienen seguro de responsabilidad civil y que tienen experiencia demostrable.",
      },
      {
        question: "¿Qué hago mientras llega el fontanero si hay una fuga?",
        answer:
          "Cierra la llave de paso general, corta la luz si el agua está cerca de enchufes o aparatos y recoge el agua para limitar daños. Haz fotos: te servirán para el presupuesto y para el seguro.",
      },
      {
        question: "¿A qué zonas llegáis?",
        answer: `A toda la ciudad de Barcelona y a su área metropolitana: L'Hospitalet, Badalona, Cornellà, Esplugues, Sant Adrià y alrededores.`,
      },
    ],
  },
  {
    trade: "electricidad",
    path: servicePath("electricidad"),
    icon: "bolt",
    name: "Electricidad",
    professional: "electricista",
    professionalPlural: "electricistas",
    photo: photos.electricistaLuzTecho,
    gallery: [photos.electricistaCuadro, photos.electricistaEnchufes, photos.electricistaPlafon],
    metaTitle: "Electricistas en Barcelona: averías, boletines y cuadros",
    metaDescription:
      "¿Necesitas un electricista en Barcelona? Te ponemos en contacto con un electricista verificado de tu zona para averías, boletines, cuadros, enchufes o cargadores. Presupuesto sin compromiso.",
    heroTitle: "Electricistas en Barcelona",
    heroSubtitle:
      "Se va la luz, salta el diferencial o necesitas un boletín. Cuéntanos qué pasa y te ponemos en contacto con un electricista verificado de tu zona.",
    problems: [
      { value: "sin-luz", label: "Me he quedado sin luz", icon: "bulb" },
      { value: "diferencial", label: "Salta el diferencial", icon: "bolt" },
      { value: "enchufes", label: "Enchufes, luces o interruptores", icon: "plug" },
      { value: "boletin", label: "Boletín o certificado", icon: "document" },
      { value: "cuadro", label: "Cuadro o potencia", icon: "panel" },
      { value: "cargador", label: "Cargador de coche eléctrico", icon: "car" },
      { value: OTHER_PROBLEM, label: "Otra cosa", icon: "question" },
    ],
    subservices: [
      {
        icon: "bolt",
        title: "Averías eléctricas",
        text: "Cortes de luz, cortocircuitos, diferenciales que saltan y enchufes que no funcionan.",
      },
      {
        icon: "document",
        title: "Boletines y certificados (CIE)",
        text: "Para dar de alta la luz, cambiar de titular o aumentar la potencia, emitidos por instaladores habilitados.",
      },
      {
        icon: "panel",
        title: "Cuadros eléctricos",
        text: "Cambio y adecuación del cuadro a la normativa, sobre todo en pisos antiguos.",
      },
      {
        icon: "plug",
        title: "Enchufes, luces e interruptores",
        text: "Nuevos puntos de luz y enchufes, lámparas e iluminación LED.",
      },
      {
        icon: "car",
        title: "Cargadores de coche eléctrico",
        text: "Instalación de puntos de carga en garajes particulares y comunitarios.",
      },
      {
        icon: "home",
        title: "Instalaciones completas",
        text: "Renovación de la instalación eléctrica en reformas de pisos y locales.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta un electricista en Barcelona?",
        answer: `Depende del trabajo, la urgencia y los materiales. El electricista te da el presupuesto antes de empezar y pedirlo a través de ${siteConfig.brand} es gratis y sin compromiso.`,
      },
      {
        question: "Salta el diferencial, ¿qué hago?",
        answer:
          "Desenchufa todos los aparatos, sube el diferencial y ve conectándolos de uno en uno para ver cuál lo hace saltar. Si salta sin nada conectado, puede haber una derivación en la instalación: no lo fuerces y pide un electricista.",
      },
      {
        question: "¿Qué es el boletín eléctrico y cuándo lo necesito?",
        answer:
          "Es el Certificado de Instalación Eléctrica (CIE). Lo emite un instalador habilitado y se pide, por ejemplo, para dar de alta el suministro, aumentar la potencia contratada o después de renovar la instalación.",
      },
      {
        question: "¿Los electricistas están habilitados?",
        answer:
          "Verificamos su alta, su seguro de responsabilidad civil y, para los trabajos que lo requieren (boletines, cuadros o puntos de carga), su habilitación como empresa instaladora.",
      },
      {
        question: "¿A qué zonas llegáis?",
        answer: `A toda la ciudad de Barcelona y a su área metropolitana: L'Hospitalet, Badalona, Cornellà, Esplugues, Sant Adrià y alrededores.`,
      },
    ],
  },
];

export function getService(trade: Trade): Service {
  const service = services.find((s) => s.trade === trade);
  if (!service) throw new Error(`Servicio desconocido: ${trade}`);
  return service;
}

export const urgencyOptions: { value: string; label: string; icon: IconName }[] = [
  { value: "urgente", label: "Urgente, hoy", icon: "alert" },
  { value: "semana", label: "Esta semana", icon: "calendar" },
  { value: "sin-prisa", label: "Sin prisa", icon: "clock" },
];

export const districts = [
  "Ciutat Vella",
  "Eixample",
  "Sants-Montjuïc",
  "Les Corts",
  "Sarrià-Sant Gervasi",
  "Gràcia",
  "Horta-Guinardó",
  "Nou Barris",
  "Sant Andreu",
  "Sant Martí",
  "L'Hospitalet",
  "Badalona",
  "Cornellà",
  "Esplugues",
  "Sant Adrià",
];
