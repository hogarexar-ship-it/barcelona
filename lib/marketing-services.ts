import type { IconName } from "@/components/Icon";
import type { Locale } from "./i18n";
import { serviceSlugs, servicePath } from "./navigation";
import type { ServiceSlug } from "./navigation";
import { extraServicesCa, marketingServicesCa } from "./marketing-services.ca";
import { photos } from "./photos";
import type { Photo } from "./photos";
import type { Faq } from "./types";

export type { ServiceSlug };

export type MarketingService = {
  slug: ServiceSlug;
  path: string;
  icon: IconName;
  /** Nombre corto y técnico (pestañas, pie, formulario). */
  name: string;
  /** Etiqueta corta de la tarjeta (Anuncios, Web, CRM…). */
  tag: string;
  /** Título explicativo en lenguaje del cliente: lo que consigue. */
  title: string;
  /** Frase de una sola línea: qué se logra con el servicio (lista simple de /servicios). */
  oneLiner: string;
  /** Palabras clave técnicas que van debajo del título (SEO, GEO, CRM…). */
  keywords: string;
  short: string;
  /** Por qué lo necesita: el problema que resuelve. */
  pain: string;
  /** Qué consigue con el servicio. */
  outcomes: string[];
  photo: Photo;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  /** Situaciones en las que este servicio encaja. */
  signs: string[];
  includes: { icon: IconName; title: string; text: string }[];
  faqs: Faq[];
  /** Solo el CRM: desplegable «¿Qué es un CRM?» junto a su tarjeta. */
  whatIs?: { question: string; answer: string };
};

/** Versión en castellano. La catalana está en marketing-services.ca.ts. */
export const marketingServices: MarketingService[] = [
  {
    slug: "anuncios-google-y-meta",
    path: servicePath("es", "anuncios-google-y-meta"),
    icon: "megaphone",
    name: "Anuncios en Google y Meta (Facebook e Instagram)",
    tag: "Anuncios",
    title: "Consigue más llamadas o consultas de clientes",
    oneLiner: "Anuncios en Google, Facebook e Instagram que te traen llamadas.",
    keywords: "Google Ads · Meta Ads (Facebook e Instagram)",
    short: "Campañas en Google Ads, Facebook e Instagram para que te llamen clientes de tu zona cuando necesitan tu servicio.",
    pain: "Si hoy no te llaman, mañana no facturas. Los anuncios te ponen delante de quien necesita un fontanero o un electricista justo ahora, en tu zona.",
    outcomes: [
      "Llamadas de gente que necesita el servicio ahora",
      "Solo en tus zonas y en tu horario",
      "Sabes cuánto te cuesta cada cliente",
    ],
    photo: photos.electricistaLuzTecho,
    metaTitle: "Anuncios en Google y Meta para fontaneros y electricistas en Barcelona",
    metaDescription:
      "Gestión de Google Ads, Facebook e Instagram Ads para fontaneros y electricistas en Barcelona: campañas por zona y horario, anuncios de llamada y medición de cada contacto.",
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
        question: "¿El presupuesto de anuncios está incluido en vuestro precio?",
        answer:
          "No. Nuestro precio es por crear y gestionar las campañas. Lo que se invierte en los anuncios va aparte: se paga directamente a Google y Meta desde tu propia cuenta de anuncios y tú decides cuánto.",
      },
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
    path: servicePath("es", "landing-page-y-web"),
    icon: "globe",
    name: "Landing page y página web",
    tag: "Web",
    title: "Una web que hace que te llamen",
    oneLiner: "Una web rápida en el móvil, pensada para que te llamen.",
    keywords: "Landing page · Página web",
    short: "Una página rápida y clara, pensada para que quien entra te llame o te pida presupuesto.",
    pain: "Si tu web es lenta, está anticuada o no existe, el cliente se va con otro en segundos. Aunque te haya encontrado.",
    outcomes: ["Más visitas que acaban en llamada o WhatsApp", "Una imagen profesional que da confianza", "Preparada para salir en Google"],
    photo: photos.fontaneroGrifo,
    metaTitle: "Landing pages y webs para fontaneros y electricistas en Barcelona",
    metaDescription:
      "Diseño de landing pages para campañas y páginas web para fontaneros y electricistas en Barcelona: rápidas en el móvil, con llamada y WhatsApp a la vista y preparadas para Google.",
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
        answer:
          "Una landing page suele estar lista en pocos días. Una web completa, en unas semanas, según el contenido que haya que preparar.",
      },
    ],
  },
  {
    slug: "google-business-profile",
    path: servicePath("es", "google-business-profile"),
    icon: "mapPin",
    name: "Google Business y reseñas",
    tag: "Google Maps",
    title: "Sal en el mapa de Google con buenas reseñas",
    oneLiner: "Tu ficha de Google con más reseñas y mejor posición en el mapa.",
    keywords: "Google Business Profile · Reseñas de Google",
    short:
      "Tu ficha de Google optimizada y más reseñas de clientes reales para aparecer en el mapa cuando buscan un fontanero o un electricista cerca.",
    pain: "Cuando alguien busca «electricista cerca», llama a uno de los primeros del mapa. Si no estás ahí o tienes pocas reseñas, esa llamada es para otro.",
    outcomes: ["Apareces cuando te buscan cerca", "Más reseñas de clientes reales", "Más confianza antes de que te llamen"],
    photo: photos.electricistaCuadro,
    metaTitle: "Google Business Profile y reseñas para fontaneros y electricistas en Barcelona",
    metaDescription:
      "Optimización y gestión del Perfil de Empresa en Google para fontaneros y electricistas en Barcelona: más reseñas de clientes reales, respuestas, categorías, zona de servicio, fotos y publicaciones.",
    heroSubtitle: "Aparece en el mapa cuando buscan tu oficio cerca, con reseñas y fotos al día.",
    signs: [
      "No apareces en el mapa cuando buscas tu servicio en tu barrio.",
      "Tienes pocas reseñas o están sin responder.",
      "Tu ficha tiene datos incompletos o antiguos.",
    ],
    includes: [
      { icon: "star", title: "Más reseñas", text: "Un enlace y un mensaje listos para pedirlas por WhatsApp tras cada trabajo." },
      { icon: "chat", title: "Respuesta a reseñas", text: "Respondemos todas, también las negativas, con educación y a tiempo." },
      { icon: "check", title: "Alta y verificación", text: "Creamos o recuperamos tu ficha y la dejamos verificada." },
      { icon: "wrench", title: "Categorías y servicios", text: "Los que de verdad haces, con descripciones claras." },
      { icon: "mapPin", title: "Zona de servicio", text: "Los barrios y municipios donde quieres trabajar." },
      { icon: "camera", title: "Fotos y publicaciones", text: "Trabajos reales y novedades para mantener la ficha activa." },
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
    path: servicePath("es", "seo-local"),
    icon: "search",
    name: "SEO y GEO",
    tag: "SEO y GEO",
    title: "Aparece en las búsquedas de Google y en los chats de IA",
    oneLiner: "Que te encuentren en Google y en los asistentes de IA.",
    keywords: "SEO local · GEO (ChatGPT, Gemini y otras IA)",
    short: "SEO local para posicionar tu web en Google y GEO para que asistentes de IA como ChatGPT o Gemini te recomienden en tu zona.",
    pain: "Depender solo de anuncios sale caro: el día que dejas de pagar, dejan de llamarte. Y cada vez más clientes preguntan directamente a ChatGPT.",
    outcomes: [
      "Clientes que te encuentran solos, mes a mes",
      "También te recomiendan ChatGPT y otras IA",
      "Cada cliente te cuesta menos con el tiempo",
    ],
    photo: photos.fontaneroInstalacionBano,
    metaTitle: "SEO local y GEO para fontaneros y electricistas en Barcelona",
    metaDescription:
      "Posicionamiento en Google para fontaneros y electricistas en Barcelona y alrededores: palabras clave de tu zona, páginas por servicio y parte técnica. Y GEO para aparecer en ChatGPT, Gemini y otros asistentes de IA.",
    heroSubtitle: "SEO para salir en Google y GEO para que ChatGPT o Gemini te recomienden. Sin pagar cada clic.",
    signs: [
      "Dependes solo de anuncios y quieres clientes que no cuesten un clic.",
      "Tu competencia sale antes que tú en Google.",
      "Quieres construir algo que dure a medio plazo.",
      "Tus clientes ya preguntan a ChatGPT por un profesional.",
    ],
    includes: [
      { icon: "search", title: "Palabras clave de tu zona", text: "Lo que escriben tus clientes: servicio + barrio o municipio." },
      { icon: "document", title: "Páginas por servicio y zona", text: "Contenido útil para cada trabajo que quieres captar." },
      { icon: "wrench", title: "Parte técnica", text: "Velocidad, móvil, estructura y datos estructurados." },
      { icon: "globe", title: "Directorios y menciones", text: "Nombre, teléfono y zona coherentes en toda la red." },
      {
        icon: "chat",
        title: "GEO: asistentes de IA",
        text: "Web, ficha y reseñas con información clara para que ChatGPT, Gemini o Perplexity te entiendan y te recomienden.",
      },
      {
        icon: "chart",
        title: "Informe mensual",
        text: "Posiciones, visitas y contactos que llegan desde Google y desde asistentes de IA.",
      },
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
        question: "¿Qué es el GEO?",
        answer:
          "GEO (Generative Engine Optimization) es preparar tu presencia online para asistentes de IA. Cada vez más gente pregunta a ChatGPT o Gemini por un fontanero o un electricista. Si tu web, tu ficha y tus reseñas explican con claridad qué haces y dónde, es más fácil que te recomienden.",
      },
    ],
  },
  {
    slug: "crm",
    path: servicePath("es", "crm"),
    icon: "inbox",
    name: "CRM y seguimiento de clientes",
    tag: "CRM",
    title: "Que ningún cliente se te escape",
    oneLiner: "Organiza tus contactos y presupuestos para no perder ningún cliente.",
    keywords: "CRM · Seguimiento de clientes y presupuestos",
    short: "Todos tus contactos, llamadas y presupuestos en un solo sitio, con avisos para no olvidar ningún seguimiento.",
    pain: "Llamadas que no devuelves, presupuestos sin respuesta y clientes que no vuelven: es dinero que ya habías ganado y se pierde por falta de tiempo.",
    outcomes: [
      "Todos tus contactos y presupuestos en un solo sitio",
      "Avisos para llamar y seguir cada presupuesto",
      "Sabes de dónde viene cada cliente",
    ],
    photo: photos.electricistaEnchufes,
    metaTitle: "CRM para fontaneros y electricistas en Barcelona: seguimiento de clientes y presupuestos",
    metaDescription:
      "CRM sencillo para fontaneros y electricistas en Barcelona: todos los contactos en un sitio, seguimiento de presupuestos, respuestas automáticas por WhatsApp y petición de reseñas.",
    heroSubtitle: "Todos tus clientes, llamadas y presupuestos en un solo sitio, con avisos para que no se te olvide ninguno.",
    signs: [
      "Se te olvida devolver llamadas o seguir presupuestos.",
      "Apuntas los clientes en una libreta, en notas o en el WhatsApp.",
      "No sabes qué anuncios o canales te traen trabajo.",
    ],
    includes: [
      {
        icon: "inbox",
        title: "Todos los contactos en un sitio",
        text: "Llamadas, WhatsApp, formularios de la web y anuncios, ordenados en una sola lista.",
      },
      {
        icon: "document",
        title: "Seguimiento de presupuestos",
        text: "Recordatorios para llamar a quien no ha contestado y cerrar más trabajos.",
      },
      {
        icon: "chat",
        title: "Respuestas automáticas",
        text: "Un mensaje de WhatsApp o email al momento cuando no puedes coger el teléfono.",
      },
      { icon: "star", title: "Petición de reseñas", text: "Al cerrar un trabajo, el cliente recibe el enlace para dejar su reseña." },
      {
        icon: "calendar",
        title: "Clientes que repiten",
        text: "Avisos de revisiones y mantenimientos para volver a trabajar con el mismo cliente.",
      },
      { icon: "chart", title: "De dónde viene cada cliente", text: "Qué canal te trae más trabajo, para invertir donde funciona." },
    ],
    faqs: [
      {
        question: "¿Qué es un CRM?",
        answer:
          "Es una herramienta para tener todos tus clientes, llamadas y presupuestos en un solo sitio, con avisos para no olvidar ningún seguimiento.",
      },
      {
        question: "¿Es complicado de usar?",
        answer: "No. Lo dejamos configurado para tu forma de trabajar y se usa desde el móvil.",
      },
      {
        question: "¿Qué CRM usáis?",
        answer:
          "Elegimos la herramienta según tu tamaño y presupuesto: puede ser muy sencilla si trabajas solo y crecer contigo cuando montes equipo.",
      },
    ],
    whatIs: {
      question: "¿Qué es un CRM?",
      answer:
        "Un CRM (gestor de relación con clientes) es donde quedan guardados todos tus contactos, llamadas y presupuestos en un solo sitio, con avisos para no olvidar ningún seguimiento. En vez de apuntarlo en una libreta o en el WhatsApp, lo tienes todo ordenado y accesible desde el móvil.",
    },
  },
];

export const extraServices: ExtraService[] = [
  { icon: "camera", name: "Grabación y edición de vídeo", text: "Vídeos cortos de tus trabajos para anuncios, web y redes." },
  { icon: "pen", name: "Diseño gráfico", text: "Logo, tarjetas, rotulación de furgoneta y presupuestos con tu imagen." },
  { icon: "users", name: "Redes sociales", text: "Publicaciones en Instagram y Facebook con tus trabajos, sin que te quite tiempo." },
];

export type ExtraService = { icon: IconName; name: string; text: string };

export function getMarketingServices(locale: Locale): MarketingService[] {
  return locale === "ca" ? marketingServicesCa : marketingServices;
}

export function getExtraServices(locale: Locale): ExtraService[] {
  return locale === "ca" ? extraServicesCa : extraServices;
}

export function getMarketingService(locale: Locale, slug: string): MarketingService | undefined {
  return getMarketingServices(locale).find((service) => service.slug === slug);
}

/** Busca un servicio por la parte final de su URL en ese idioma. */
export function getMarketingServiceByUrl(locale: Locale, urlSlug: string): MarketingService | undefined {
  return getMarketingServices(locale).find((service) => serviceSlugs[service.slug][locale] === urlSlug);
}
