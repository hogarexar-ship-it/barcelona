import type { IconName } from "@/components/Icon";
import { servicePath } from "./navigation";
import { photos } from "./photos";
import type { Photo } from "./photos";
import type { Faq } from "./types";

export type ServiceSlug = "anuncios-google-y-meta" | "landing-page-y-web" | "google-business-profile" | "seo-local";

export type MarketingService = {
  slug: ServiceSlug;
  path: string;
  icon: IconName;
  name: string;
  short: string;
  /** Beneficio en pocas palabras: lo que se ve en tarjetas y listados. */
  benefit: string;
  photo: Photo;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  /** Situaciones en las que este servicio encaja. */
  signs: string[];
  includes: { icon: IconName; title: string; text: string }[];
  faqs: Faq[];
};

export const marketingServices: MarketingService[] = [
  {
    slug: "anuncios-google-y-meta",
    path: servicePath("anuncios-google-y-meta"),
    icon: "megaphone",
    name: "Anuncios en Google y Meta",
    short: "Campañas en Google Ads, Facebook e Instagram para que te llamen clientes de tu zona cuando necesitan tu servicio.",
    benefit: "Llamadas desde que se activan",
    photo: photos.electricistaLuzTecho,
    metaTitle: "Anuncios en Google y Meta para fontaneros y electricistas en Barcelona",
    metaDescription:
      "Gestión de Google Ads, Facebook e Instagram Ads para fontaneros y electricistas en Barcelona: campañas por zona y horario, anuncios de llamada y medición de cada contacto.",
    heroTitle: "Anuncios en Google y Meta que traen llamadas",
    heroSubtitle: "Google Ads, Facebook e Instagram. Solo en tu zona, en tu horario y midiendo cada euro.",
    signs: [
      "Necesitas llamadas ya, no dentro de seis meses.",
      "Probaste anuncios y gastaste sin ver clientes.",
      "Quieres llenar los huecos de la agenda en los meses flojos.",
    ],
    includes: [
      {
        icon: "search",
        title: "Campañas en Google",
        text: "Apareces cuando alguien busca «fontanero en Gràcia» o «electricista urgente». Pagas por clics de gente que ya necesita el servicio.",
      },
      {
        icon: "phone",
        title: "Anuncios de llamada",
        text: "En el móvil, el cliente te llama directamente desde el anuncio.",
      },
      {
        icon: "users",
        title: "Facebook e Instagram",
        text: "Anuncios con tus trabajos para propietarios de tu zona. Funcionan bien para baños, calentadores, cuadros o cargadores.",
      },
      {
        icon: "mapPin",
        title: "Solo tus zonas y horarios",
        text: "Los anuncios solo se muestran en los barrios y municipios donde trabajas y cuando puedes atender.",
      },
      {
        icon: "chart",
        title: "Llamadas y formularios medidos",
        text: "Sabes cuántos contactos te trae cada euro, no solo cuántos clics.",
      },
      {
        icon: "document",
        title: "Informe mensual",
        text: "Qué se ha gastado, cuántos contactos han llegado y qué vamos a mejorar.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto tengo que invertir en anuncios?",
        answer:
          "Depende de tu zona, tus servicios y cuánto trabajo más puedes asumir. En el asesoramiento gratuito te proponemos una inversión realista para tu caso y la decides tú.",
      },
      {
        question: "¿Cuándo empiezan a llegar llamadas?",
        answer:
          "Los anuncios de Google pueden traer llamadas en cuanto están activos. Las primeras semanas sirven para ajustar las campañas y bajar lo que te cuesta cada cliente.",
      },
      {
        question: "¿La cuenta de anuncios es mía?",
        answer: "Sí. Se crea a tu nombre y tienes acceso siempre, aunque dejemos de trabajar juntos.",
      },
    ],
  },
  {
    slug: "landing-page-y-web",
    path: servicePath("landing-page-y-web"),
    icon: "globe",
    name: "Landing page y página web",
    short: "Una página rápida y clara, pensada para que quien entra te llame o te pida presupuesto.",
    benefit: "Visitas que acaban en llamada",
    photo: photos.fontaneroGrifo,
    metaTitle: "Landing pages y webs para fontaneros y electricistas en Barcelona",
    metaDescription:
      "Diseño de landing pages para campañas y páginas web para fontaneros y electricistas en Barcelona: rápidas en el móvil, con llamada y WhatsApp a la vista y preparadas para Google.",
    heroTitle: "Landing pages y webs que convierten visitas en clientes",
    heroSubtitle: "Rápida en el móvil, con llamada y WhatsApp a un toque.",
    signs: [
      "No tienes web o la que tienes está anticuada.",
      "Haces anuncios y los mandas a tu Facebook o a una web lenta.",
      "La gente entra en tu web pero no te llama.",
    ],
    includes: [
      {
        icon: "document",
        title: "Una landing por campaña",
        text: "Urgencias, calentadores, boletines… cada página con un único objetivo: que te contacten.",
      },
      {
        icon: "phone",
        title: "Contacto en un toque",
        text: "Botones de llamada y WhatsApp siempre visibles en el móvil y un formulario corto.",
      },
      {
        icon: "search",
        title: "Preparada para Google",
        text: "Estructura, textos y velocidad pensados para posicionar en tu zona.",
      },
      {
        icon: "star",
        title: "Tus trabajos y reseñas",
        text: "Fotos reales, reseñas de Google y garantías para generar confianza.",
      },
      {
        icon: "pen",
        title: "Textos para tu cliente",
        text: "Escritos para quien tiene una avería en casa, sin jerga técnica.",
      },
      {
        icon: "wrench",
        title: "Mantenimiento",
        text: "Cambios, actualizaciones y seguridad, si lo necesitas.",
      },
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre una landing page y una web?",
        answer:
          "Una landing page es una sola página con un objetivo, normalmente recibir el tráfico de un anuncio. Una web tiene varias páginas (servicios, zonas, contacto) y también sirve para posicionar en Google.",
      },
      {
        question: "¿El dominio y la web son míos?",
        answer: "Sí. Todo queda a tu nombre.",
      },
      {
        question: "¿Cuánto se tarda en tenerla?",
        answer: "Una landing page suele estar lista en pocos días. Una web completa, en unas semanas, según el contenido que haya que preparar.",
      },
    ],
  },
  {
    slug: "google-business-profile",
    path: servicePath("google-business-profile"),
    icon: "mapPin",
    name: "Google Business Profile",
    short: "Tu ficha de Google optimizada para aparecer en el mapa cuando buscan un fontanero o un electricista cerca.",
    benefit: "Sal en el mapa de tu zona",
    photo: photos.electricistaCuadro,
    metaTitle: "Google Business Profile para fontaneros y electricistas en Barcelona",
    metaDescription:
      "Optimización y gestión del Perfil de Empresa en Google para fontaneros y electricistas en Barcelona: categorías, zona de servicio, fotos, publicaciones y reseñas.",
    heroTitle: "Tu ficha de Google, lista para que te llamen",
    heroSubtitle: "Aparece en el mapa cuando buscan tu oficio cerca, con reseñas y fotos al día.",
    signs: [
      "No apareces en el mapa cuando buscas tu servicio en tu barrio.",
      "Tienes pocas reseñas o están sin responder.",
      "Tu ficha tiene datos incompletos o antiguos.",
    ],
    includes: [
      { icon: "check", title: "Alta y verificación", text: "Creamos o recuperamos tu ficha y la dejamos verificada." },
      { icon: "wrench", title: "Categorías y servicios", text: "Los que de verdad haces, con descripciones claras." },
      { icon: "mapPin", title: "Zona de servicio", text: "Los barrios y municipios donde quieres trabajar." },
      { icon: "camera", title: "Fotos y publicaciones", text: "Trabajos reales y novedades para mantener la ficha activa." },
      { icon: "star", title: "Reseñas", text: "Un sistema sencillo para pedirlas tras cada trabajo y responderlas." },
      { icon: "chart", title: "Seguimiento", text: "Llamadas, visitas y búsquedas que genera tu ficha cada mes." },
    ],
    faqs: [
      {
        question: "¿Cuánto tarda en notarse?",
        answer:
          "Algunos cambios se notan en pocas semanas, pero subir en el mapa es un trabajo continuo de reseñas, fotos y publicaciones.",
      },
      {
        question: "¿Podéis conseguirme reseñas?",
        answer:
          "Te ayudamos a pedirlas a tus clientes reales. No compramos ni inventamos reseñas: va contra las normas de Google y pone en riesgo tu ficha.",
      },
      {
        question: "Trabajo a domicilio, ¿tengo que mostrar mi dirección?",
        answer: "No. Puedes ocultarla y definir una zona de servicio.",
      },
    ],
  },
  {
    slug: "seo-local",
    path: servicePath("seo-local"),
    icon: "search",
    name: "SEO local",
    short: "Posicionamos tu web en Google y en asistentes de IA para búsquedas de tu servicio en tu zona.",
    benefit: "Clientes de Google sin pagar cada clic",
    photo: photos.fontaneroInstalacionBano,
    metaTitle: "SEO local para fontaneros y electricistas en Barcelona",
    metaDescription:
      "Posicionamiento en Google para fontaneros y electricistas en Barcelona y alrededores: palabras clave de tu zona, páginas por servicio, parte técnica y preparación para asistentes de IA.",
    heroTitle: "SEO local para que te encuentren sin pagar cada clic",
    heroSubtitle: "Aparece en Google y en asistentes de IA cuando buscan tu servicio en tu zona.",
    signs: [
      "Dependes solo de anuncios y quieres clientes que no cuesten un clic.",
      "Tu competencia sale antes que tú en Google.",
      "Quieres construir algo que dure a medio plazo.",
    ],
    includes: [
      { icon: "search", title: "Palabras clave de tu zona", text: "Lo que escriben tus clientes: servicio + barrio o municipio." },
      { icon: "document", title: "Páginas por servicio y zona", text: "Contenido útil para cada trabajo que quieres captar." },
      { icon: "wrench", title: "Parte técnica", text: "Velocidad, móvil, estructura y datos estructurados." },
      { icon: "globe", title: "Directorios y menciones", text: "Nombre, teléfono y zona coherentes en toda la red." },
      { icon: "chat", title: "Asistentes de IA", text: "Información clara para que ChatGPT, Gemini o Perplexity te entiendan." },
      { icon: "chart", title: "Informe mensual", text: "Posiciones, visitas y contactos que llegan desde Google." },
    ],
    faqs: [
      {
        question: "¿Cuánto tarda el SEO?",
        answer: "Es la vía más lenta: normalmente meses. Por eso suele combinarse con anuncios, que traen contactos antes.",
      },
      {
        question: "¿Necesito web para hacer SEO?",
        answer: "Sí. Si no tienes, te la hacemos.",
      },
      {
        question: "¿Qué es eso de aparecer en asistentes de IA?",
        answer:
          "Cada vez más gente pregunta a ChatGPT o Gemini por un profesional. Si tu web, tu ficha y tus reseñas explican con claridad qué haces y dónde, es más fácil que te recomienden.",
      },
    ],
  },
];

export const extraServices: { icon: IconName; name: string; text: string }[] = [
  { icon: "camera", name: "Grabación y edición de vídeo", text: "Vídeos cortos de tus trabajos para anuncios, web y redes." },
  { icon: "pen", name: "Diseño gráfico", text: "Logo, tarjetas, rotulación de furgoneta y presupuestos con tu imagen." },
  { icon: "users", name: "Redes sociales", text: "Publicaciones en Instagram y Facebook con tus trabajos, sin que te quite tiempo." },
];

export function getMarketingService(slug: string): MarketingService | undefined {
  return marketingServices.find((service) => service.slug === slug);
}
