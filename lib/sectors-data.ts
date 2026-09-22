import type { IconName } from "@/components/Icon";
import { sectorPath } from "./navigation";
import type { SectorSlug } from "./navigation";
import type { Trade } from "./offers";
import type { Faq } from "./types";

export type Sector = {
  slug: SectorSlug;
  path: string;
  trade: Trade;
  icon: IconName;
  name: string;
  audience: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  cardText: string;
  demand: string[];
  jobTypes: string[];
  networkText: string;
  marketingTactics: { title: string; text: string }[];
  faqs: Faq[];
};

export const sectors: Sector[] = [
  {
    slug: "reformas",
    path: sectorPath("reformas"),
    trade: "reformas",
    icon: "home",
    name: "Reformas",
    audience: "empresas de reformas",
    metaTitle: "Clientes para empresas de reformas en Barcelona",
    metaDescription:
      "Consigue más obras para tu empresa de reformas en Barcelona: te pasamos clientes de tu zona a comisión o llevamos tu marketing en Google, Meta y redes.",
    heroTitle: "Más obras para tu empresa de reformas en Barcelona",
    heroSubtitle:
      "Baños, cocinas y reformas integrales en tu zona. Te pasamos clientes a comisión o hacemos que te encuentren en Google. Tú te centras en la obra.",
    cardText:
      "Baños, cocinas e integrales. El oficio con el ticket más alto y el cliente que más compara antes de decidir.",
    demand: [
      "Barcelona tiene muchísimas viviendas antiguas: fincas del Eixample, Gràcia, Sants o Ciutat Vella con baños, cocinas e instalaciones que piden reforma, además de pisos que se reforman antes de venderse o alquilarse.",
      "La demanda existe, pero conseguir cada cliente sale caro: los anuncios de reformas están entre los más competidos y muchas plataformas reparten el mismo contacto entre varias empresas. Gana la obra quien transmite confianza primero.",
    ],
    jobTypes: [
      "Reformas integrales de pisos",
      "Reformas de baño y cambio de bañera por plato de ducha",
      "Reformas de cocina",
      "Pintura, alisado de paredes y suelos",
      "Pequeñas obras: tabiques, falsos techos, puertas",
      "Reformas de locales comerciales",
    ],
    networkText:
      "Captamos a propietarios que quieren reformar en Barcelona, filtramos qué obra es, dónde está y en qué plazos, y te pasamos solo las que encajan con lo que haces y las zonas donde trabajas. Pagas comisión únicamente por las obras que cierras.",
    marketingTactics: [
      {
        title: "Un portfolio que vende por ti",
        text: "Fotos de antes y después en tu ficha de Google, tu web e Instagram. En reformas el cliente compra con los ojos.",
      },
      {
        title: "Anuncios por tipo de obra y barrio",
        text: "Campañas separadas para baños, cocinas e integrales en los barrios donde quieres trabajar, para no pagar por clics que no te interesan.",
      },
      {
        title: "Reseñas que generan confianza",
        text: "Un sistema para pedir reseñas en cada entrega de obra. Es lo primero que mira quien va a invertir miles de euros.",
      },
    ],
    faqs: [
      {
        question: "¿Qué tipo de obras me pasaríais?",
        answer:
          "Principalmente reformas de baño, cocina e integrales de vivienda en Barcelona y el área metropolitana, además de trabajos más pequeños de albañilería y pintura. Solo te enviamos los tipos de obra y las zonas que nos indiques.",
      },
      {
        question: "¿Tengo que pagar si el cliente no acepta mi presupuesto?",
        answer:
          "No. En la red de clientes pagas una comisión solo cuando cierras un trabajo que te hemos pasado. Las condiciones exactas se acuerdan contigo antes de empezar.",
      },
      {
        question: "¿Me podéis ayudar también con la web o con Instagram?",
        answer:
          "Sí, es nuestro servicio de marketing: ficha de Google, web, anuncios en Google y Meta, marca y redes sociales. Puedes contratar solo lo que necesites y combinarlo con la red de clientes.",
      },
      {
        question: "¿Trabajáis con autónomos o solo con empresas?",
        answer:
          "Con los dos. Lo importante es que estés dado de alta como autónomo o empresa, tengas seguro de responsabilidad civil y puedas enseñarnos trabajos anteriores.",
      },
    ],
  },
  {
    slug: "fontaneros",
    path: sectorPath("fontaneros"),
    trade: "fontaneria",
    icon: "droplet",
    name: "Fontanería",
    audience: "fontaneros",
    metaTitle: "Clientes para fontaneros en Barcelona",
    metaDescription:
      "Más clientes para fontaneros autónomos y empresas de fontanería en Barcelona: te pasamos avisos de tu zona a comisión o hacemos que te llamen desde Google.",
    heroTitle: "Más clientes para fontaneros en Barcelona",
    heroSubtitle:
      "Averías, fugas, calentadores y reformas de fontanería en tu zona. Te pasamos avisos a comisión o hacemos que te llamen directamente desde Google.",
    cardText:
      "Fugas, desatascos, calentadores. Demanda constante todo el año y clientes que llaman al primero que les da confianza.",
    demand: [
      "La fontanería es de los oficios con demanda más constante en Barcelona: fugas, atascos, calentadores y termos fallan cualquier día del año, y las fincas antiguas multiplican las averías en bajantes y montantes.",
      "Para un fontanero el reto no es que haya trabajo, sino que te llegue a ti. Quien tiene una urgencia busca en el móvil y llama al primero con buenas reseñas y el teléfono a la vista.",
    ],
    jobTypes: [
      "Fugas y reparación de tuberías",
      "Desatascos",
      "Instalación y cambio de calentadores y termos",
      "Grifería, sanitarios y cisternas",
      "Fontanería en reformas de baño y cocina",
      "Mantenimiento para comunidades y locales",
    ],
    networkText:
      "Te pasamos avisos de fontanería de las zonas y horarios que tú eliges, con la información clave antes de llamar: qué ocurre, dónde y cuándo lo necesita el cliente. Pagas comisión únicamente por los trabajos que cierras.",
    marketingTactics: [
      {
        title: "Ficha de Google para «fontanero cerca de mí»",
        text: "Categorías, servicios y zona de servicio bien definidos, fotos reales y reseñas constantes para aparecer en el mapa de tu barrio.",
      },
      {
        title: "Anuncios de llamada en tu horario",
        text: "Campañas en Google que solo se muestran cuando puedes coger el teléfono y solo en las zonas donde quieres ir.",
      },
      {
        title: "Clientes recurrentes",
        text: "Presencia y material para administradores de fincas, comunidades y comercios, que necesitan un fontanero de confianza todo el año.",
      },
    ],
    faqs: [
      {
        question: "¿Me pasaréis urgencias?",
        answer:
          "Solo si quieres. Nos dices en qué horarios y zonas aceptas trabajos y respetamos esos límites. Puedes recibir solo trabajos programados, solo urgencias o ambos.",
      },
      {
        question: "¿Cuántos clientes voy a recibir?",
        answer:
          "Depende de tu zona, tus horarios y la época del año. No prometemos cifras inventadas: en la primera llamada te damos una estimación realista para tu caso.",
      },
      {
        question: "¿Puedo seguir con mi propia marca y mis clientes?",
        answer:
          "Sí. La red de clientes es un canal más: sigues trabajando con tus clientes de siempre. Y si quieres reforzar tu propia marca, lo hacemos con el servicio de marketing.",
      },
      {
        question: "¿Qué necesito para unirme?",
        answer:
          "Estar dado de alta como autónomo o empresa, tener seguro de responsabilidad civil y experiencia demostrable en fontanería. Te lo pedimos para proteger la calidad de la red.",
      },
    ],
  },
  {
    slug: "electricistas",
    path: sectorPath("electricistas"),
    trade: "electricidad",
    icon: "bolt",
    name: "Electricidad",
    audience: "electricistas",
    metaTitle: "Clientes para electricistas en Barcelona",
    metaDescription:
      "Más clientes para electricistas y empresas instaladoras en Barcelona: averías, boletines, cuadros y cargadores. Te pasamos trabajos a comisión o llevamos tu marketing.",
    heroTitle: "Más clientes para electricistas en Barcelona",
    heroSubtitle:
      "Averías, boletines, cuadros, cargadores de coche eléctrico y reformas eléctricas. Te pasamos trabajos de tu zona o te posicionamos para que te encuentren.",
    cardText:
      "Averías, boletines, cuadros y cargadores. Trabajos cada vez más técnicos que buscan un instalador de confianza.",
    demand: [
      "La demanda de electricistas en Barcelona va mucho más allá de las averías: boletines y certificados de instalación para altas y cambios de potencia, instalaciones antiguas que hay que adecuar, puntos de carga para coche eléctrico y trabajos ligados al autoconsumo y la climatización.",
      "Son trabajos de más valor en los que el cliente busca a un instalador habilitado y de confianza. Si tu ficha de Google y tu web no lo transmiten, el cliente llama al siguiente.",
    ],
    jobTypes: [
      "Averías y reparaciones",
      "Boletines y certificados de instalación (CIE)",
      "Cambio de cuadro eléctrico y adecuación a normativa",
      "Puntos de carga para coche eléctrico",
      "Reformas eléctricas de viviendas y locales",
      "Iluminación y domótica",
    ],
    networkText:
      "Te pasamos trabajos eléctricos de tus zonas, separados por tipo (averías, boletines, cuadros, cargadores, reformas) para que recibas solo lo que haces. Pagas comisión únicamente por los trabajos que cierras.",
    marketingTactics: [
      {
        title: "Que se vea que estás habilitado",
        text: "Tu habilitación, seguros y garantías visibles en la ficha de Google y la web. En electricidad, la confianza es lo primero.",
      },
      {
        title: "Campañas por servicio",
        text: "Anuncios separados para cargadores, boletines, cambios de cuadro o urgencias, cada uno con su presupuesto y su página.",
      },
      {
        title: "Contenido que responde dudas",
        text: "Páginas que explican qué es un boletín o cuánto cuesta un punto de carga: atraen clientes desde Google y desde asistentes de IA.",
      },
    ],
    faqs: [
      {
        question: "¿Necesito ser empresa instaladora habilitada?",
        answer:
          "Para los trabajos que requieren certificado (boletines, cambios de potencia, puntos de carga o instalaciones nuevas) sí, y te pediremos la documentación al darte de alta. Además necesitas alta como autónomo o empresa y seguro de responsabilidad civil.",
      },
      {
        question: "¿Me pasaréis instalaciones de cargadores de coche eléctrico?",
        answer:
          "Sí, si es un servicio que ofreces. Al darte de alta eliges qué tipos de trabajo quieres recibir y en qué zonas.",
      },
      {
        question: "¿Cómo me ayudáis a aparecer en Google?",
        answer:
          "Optimizamos tu ficha de Google Business, creamos páginas por servicio y barrio en tu web y, si compensa, lanzamos campañas de Google Ads medidas por llamadas y formularios. El diagnóstico inicial es gratis.",
      },
      {
        question: "¿Cuánto cuesta?",
        answer:
          "Unirte a la red de clientes es gratis: pagas comisión solo por los trabajos que cierras. El marketing es un plan mensual a medida y el diagnóstico inicial no tiene coste.",
      },
    ],
  },
];

export function getSector(slug: SectorSlug): Sector {
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) throw new Error(`Sector desconocido: ${slug}`);
  return sector;
}
