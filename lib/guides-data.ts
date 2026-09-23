import { routes } from "./navigation";
import type { Trade } from "./navigation";
import { photos } from "./photos";
import type { Photo } from "./photos";
import { siteConfig } from "./site-config";

export type Guide = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  /** Respuesta directa de 2-4 frases al inicio del artículo: la parte que citan buscadores y asistentes de IA. */
  summary: string;
  publishedAt: string; // ISO date
  updatedAt: string;
  category: "Conseguir clientes" | "Google y SEO" | "Publicidad";
  trade?: Trade;
  photo: Photo;
  content: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

const brand = siteConfig.brand;

export const guides: Guide[] = [
  {
    slug: "como-conseguir-clientes-fontanero-barcelona",
    photo: photos.fontaneroInstalacionBano,
    title: "Cómo conseguir más clientes siendo fontanero en Barcelona",
    metaDescription:
      "Guía práctica para fontaneros autónomos en Barcelona: ficha de Google, reseñas, anuncios, administradores de fincas y web para dejar de depender del boca a boca.",
    excerpt:
      "El boca a boca funciona, pero no se puede escalar. Estas son las vías que de verdad traen clientes a un fontanero en Barcelona y el esfuerzo que pide cada una.",
    summary:
      "Un fontanero en Barcelona consigue clientes de forma estable combinando cuatro vías: una ficha de Google Business completa y con reseñas, anuncios de Google limitados a su zona y su horario, una web que convierta visitas en llamadas y acuerdos con administradores de fincas y comercios. La ficha de Google es la base: es gratis y es lo primero que ve quien busca «fontanero cerca de mí».",
    publishedAt: "2026-09-08",
    updatedAt: "2026-09-22",
    category: "Conseguir clientes",
    trade: "fontaneria",
    content: [
      {
        heading: "El límite del boca a boca",
        paragraphs: [
          "La mayoría de fontaneros autónomos empieza con clientes de confianza: familia, vecinos, antiguos clientes. Es el mejor cliente posible, pero tiene dos límites: no controlas cuándo llega y no crece al ritmo que necesitas cuando quieres llenar la agenda o contratar a alguien.",
          "Para crecer necesitas canales que puedas activar y ajustar. Estos son los que funcionan en Barcelona.",
        ],
      },
      {
        heading: "1. Tu ficha de Google Business, lo primero",
        paragraphs: [
          "Cuando alguien tiene una fuga, busca en el móvil y llama a uno de los negocios que aparecen en el mapa. Tener la ficha completa es gratis y es el canal con mejor relación entre esfuerzo y clientes.",
        ],
        list: [
          "Elige «Fontanero» como categoría principal y añade secundarias solo si haces esos trabajos.",
          "Define tu zona de servicio por los barrios o municipios a los que de verdad quieres ir.",
          "Sube fotos reales de trabajos y de tu furgoneta, nunca imágenes de internet.",
          "Responde a todas las reseñas, también a las negativas, con educación y sin discutir.",
          "Mantén el horario actualizado: si a una hora no coges el teléfono, no la pongas.",
        ],
      },
      {
        heading: "2. Reseñas: lo que más pesa en la decisión",
        paragraphs: [
          "Ante una urgencia, el cliente no lee tu web: mira estrellas y número de opiniones, y llama. Pide la reseña al terminar, cuando el cliente está contento, con un WhatsApp que incluya el enlace directo a tu ficha.",
          "Ejemplo: «Gracias por confiar en mí, Marta. Si estás contenta con el trabajo, me ayudas mucho dejando tu opinión aquí: [enlace]. ¡Un saludo!»",
        ],
      },
      {
        heading: "3. Google Ads, solo con campañas bien acotadas",
        paragraphs: [
          "Los anuncios de fontanería en Barcelona son caros porque compiten muchas empresas de urgencias con presupuestos grandes. Para que un autónomo gane dinero con ellos tiene que acotar: solo sus barrios, solo sus horarios, solo los servicios que le dejan margen, y medir llamadas en lugar de clics.",
        ],
        list: [
          "Excluye búsquedas como «curso», «trabajo», «sueldo» o «gratis».",
          "Programa los anuncios solo en las horas en que puedes atender.",
          "Usa anuncios de llamada para móvil.",
          "Revisa cada semana qué búsquedas reales activaron tus anuncios.",
        ],
      },
      {
        heading: "4. Administradores de fincas, comunidades y comercios",
        paragraphs: [
          "En Barcelona hay miles de fincas gestionadas por administradores que necesitan fontaneros de confianza para bajantes, montantes y averías de zonas comunes. Es un cliente recurrente: preséntate con una tarjeta, un dossier sencillo con trabajos y tus tiempos de respuesta.",
        ],
      },
      {
        heading: "5. Una web que convierta",
        paragraphs: [
          "Si haces anuncios o te encuentran en Google, el siguiente paso es tu web. Una página por servicio, rápida en el móvil y con llamada y WhatsApp a la vista convierte muchas más visitas en clientes que un perfil de Facebook.",
        ],
      },
      {
        heading: "Qué combinación elegir",
        paragraphs: [],
        list: [
          "Si estás empezando: ficha de Google y reseñas.",
          "Si ya tienes base y quieres crecer: añade Google Ads bien acotado.",
          "Si quieres construir marca a largo plazo: web propia con páginas por servicio y barrio.",
        ],
      },
    ],
  },
  {
    slug: "google-business-profile-electricistas-barcelona",
    photo: photos.electricistaCasco,
    title: "Google Business Profile para electricistas: cómo aparecer en el mapa de Google en Barcelona",
    metaDescription:
      "Guía paso a paso para que un electricista en Barcelona optimice su ficha de Google Business: categorías, servicios, zona, fotos, reseñas y errores que evitar.",
    excerpt:
      "Cuando alguien busca «electricista cerca de mí», Google enseña un mapa con unos pocos negocios. Así se trabaja la ficha para estar entre ellos.",
    summary:
      "Para aparecer en el mapa de Google como electricista en Barcelona necesitas una ficha de Google Business verificada, con «Electricista» como categoría principal, servicios concretos (boletines, cuadros, puntos de carga), una zona de servicio realista, fotos reales, reseñas constantes y los mismos datos de contacto en tu web y en directorios. Google ordena los resultados locales por relevancia, distancia y prominencia.",
    publishedAt: "2026-09-12",
    updatedAt: "2026-09-22",
    category: "Google y SEO",
    trade: "electricidad",
    content: [
      {
        heading: "Cómo decide Google a quién enseña",
        paragraphs: [
          "Google explica que ordena los resultados locales por tres factores: relevancia (si tu ficha encaja con lo que se busca), distancia (lo cerca que estás de quien busca) y prominencia (lo conocido que es tu negocio: reseñas, enlaces, menciones). La distancia no la controlas; las otras dos, sí.",
        ],
      },
      {
        heading: "Paso 1: categoría y servicios",
        paragraphs: [],
        list: [
          "Categoría principal: «Electricista».",
          "Categorías secundarias solo para lo que de verdad haces, por ejemplo relacionadas con cargadores de coche eléctrico o energía solar.",
          "Añade cada servicio con una descripción corta: boletín eléctrico (CIE), cambio de cuadro, aumento de potencia, averías, iluminación.",
        ],
      },
      {
        heading: "Paso 2: zona de servicio y datos de contacto",
        paragraphs: [
          "Si trabajas a domicilio, oculta tu dirección y define una zona de servicio por municipios o barrios. Usa exactamente el mismo nombre, teléfono y web en la ficha, en tu web y en cualquier directorio: las incoherencias restan confianza.",
        ],
      },
      {
        heading: "Paso 3: fotos y publicaciones",
        paragraphs: [
          "Sube fotos reales: cuadros antes y después, instalaciones terminadas, tu vehículo rotulado. Publica una actualización cada una o dos semanas: un trabajo reciente, una duda frecuente o una oferta de temporada.",
        ],
      },
      {
        heading: "Paso 4: reseñas y respuestas",
        paragraphs: [
          "Pide reseña a cada cliente satisfecho con el enlace directo y responde a todas en uno o dos días. Si una reseña es injusta, contesta con datos y sin entrar en discusión: esa respuesta la leen tus próximos clientes.",
        ],
      },
      {
        heading: "Errores habituales",
        paragraphs: [],
        list: [
          "Meter palabras clave en el nombre del negocio: va contra las normas de Google y puede suspender la ficha.",
          "Crear varias fichas para el mismo negocio.",
          "Abandonar la ficha después de crearla.",
          "Usar fotos sacadas de internet.",
        ],
      },
      {
        heading: "Si no tienes tiempo",
        paragraphs: [
          `En ${brand} optimizamos y gestionamos la ficha de Google de electricistas de Barcelona dentro de nuestro servicio de marketing digital. El diagnóstico inicial es gratis.`,
        ],
      },
    ],
  },
  {
    slug: "google-ads-para-oficios-cuando-compensa",
    photo: photos.electricistaLuzTecho,
    title: "Google Ads para fontaneros y electricistas: cuándo compensa y cuándo no",
    metaDescription:
      "Cómo saber si a tu negocio de fontanería o electricidad le compensa invertir en Google Ads en Barcelona, cómo calcular tu coste por cliente y los errores que más dinero hacen perder.",
    excerpt:
      "Google Ads puede llenarte la agenda o vaciarte la cuenta. La diferencia está en tres números que casi nadie calcula antes de empezar.",
    summary:
      "Google Ads compensa a un profesional de oficios cuando lo que cuesta conseguir un cliente es claramente menor que el margen que deja el trabajo. Para saberlo hay que medir llamadas y formularios (no clics), acotar zonas y horarios y excluir búsquedas irrelevantes. En trabajos de más importe (cambios de cuadro, calentadores, puntos de carga) suele compensar; en reparaciones pequeñas, solo con campañas muy afinadas.",
    publishedAt: "2026-09-15",
    updatedAt: "2026-09-22",
    category: "Publicidad",
    content: [
      {
        heading: "Los tres números que tienes que conocer",
        paragraphs: [],
        list: [
          "Coste por contacto: lo que gastas en anuncios dividido entre las llamadas y formularios que recibes.",
          "Tasa de cierre: de cada diez contactos, cuántos acaban en trabajo.",
          "Margen por trabajo: lo que te queda después de material y horas.",
        ],
      },
      {
        paragraphs: [
          "Con esos datos calculas tu coste por cliente: coste por contacto dividido entre la tasa de cierre. Por ejemplo, si cada contacto te cuesta 30 € y cierras uno de cada tres, cada cliente te cuesta 90 €. Si el margen medio de ese trabajo es de 150 €, compensa; si es de 60 €, no.",
        ],
      },
      {
        heading: "Cuándo suele compensar",
        paragraphs: [],
        list: [
          "En trabajos de más importe: cambios de cuadro, puntos de carga, calentadores o instalaciones completas.",
          "Cuando puedes atender rápido: en urgencias, quien no coge el teléfono pierde el cliente.",
          "Cuando ya tienes reseñas: los anuncios llevan visitas, pero la decisión la toman las estrellas.",
        ],
      },
      {
        heading: "Cuándo no compensa (todavía)",
        paragraphs: [],
        list: [
          "Si no puedes medir qué llamadas llegan de los anuncios.",
          "Si tu ficha de Google está vacía o sin reseñas.",
          "Si no tienes capacidad para atender más trabajo esta temporada.",
          "Si el presupuesto es tan bajo que los anuncios se apagan a media mañana.",
        ],
      },
      {
        heading: "Los errores que más dinero hacen perder",
        paragraphs: [],
        list: [
          "No añadir palabras clave negativas: acabas pagando por «curso de fontanero» o «sueldo electricista».",
          "Anunciarte en toda la provincia cuando solo trabajas en Barcelona.",
          "Enviar las visitas a una web lenta o sin el teléfono a la vista.",
          "Aceptar las recomendaciones automáticas de la plataforma sin revisarlas.",
        ],
      },
      {
        heading: "Si no sabes por dónde empezar",
        paragraphs: [
          `Si no sabes si te compensa, en ${brand} te hacemos un asesoramiento gratuito: revisamos tu zona, tus servicios y tu presencia actual y te decimos si empezar por anuncios, por tu ficha de Google o por la web.`,
        ],
      },
    ],
  },
  {
    slug: "pagar-por-clientes-o-hacer-tu-propio-marketing",
    photo: photos.fontaneroGrifo,
    title: "¿Pagar por clientes o hacer tu propio marketing? Qué le conviene a un fontanero o electricista",
    metaDescription:
      "Comparativa honesta entre pagar por contacto, trabajar a comisión e invertir en tu propio marketing para fontaneros y electricistas en Barcelona.",
    excerpt:
      "Plataformas de presupuestos, redes a comisión o marketing propio. Ventajas, inconvenientes y cuándo tiene sentido cada modelo.",
    summary:
      "Pagar por contacto da volumen rápido, pero pagas aunque no cierres y a menudo compites con otras empresas por el mismo cliente. Trabajar a comisión solo cuesta cuando cierras, a cambio de un porcentaje del trabajo. El marketing propio exige inversión y constancia, pero construye una marca y clientes que son tuyos. Lo más sólido suele ser combinar comisión a corto plazo con marketing propio a medio plazo.",
    publishedAt: "2026-09-17",
    updatedAt: "2026-09-22",
    category: "Conseguir clientes",
    content: [
      {
        heading: "Modelo 1: pagar por contacto",
        paragraphs: [
          "Plataformas y directorios que te cobran cada solicitud de presupuesto. Ventaja: volumen inmediato. Inconvenientes: pagas cada contacto aunque no se convierta, el mismo cliente puede llegar a varias empresas a la vez y acabas compitiendo por precio.",
        ],
      },
      {
        heading: "Modelo 2: trabajar a comisión",
        paragraphs: [
          "Una red capta al cliente, te lo pasa y solo pagas un porcentaje cuando cierras el trabajo. Ventaja: riesgo mínimo, pagas por resultado. Inconveniente: el cliente llega a través de la red y no de tu marca, y la comisión reduce el margen de ese trabajo.",
        ],
      },
      {
        heading: "Modelo 3: tu propio marketing",
        paragraphs: [
          "Ficha de Google, reseñas, web, anuncios y redes a tu nombre. Ventaja: el cliente es tuyo, repite y te recomienda, y a medio plazo cada cliente te cuesta menos. Inconveniente: exige inversión inicial, constancia y saber medir.",
        ],
      },
      {
        heading: "Cómo decidir",
        paragraphs: [],
        list: [
          "Si necesitas trabajo ya y no quieres riesgo: comisión.",
          "Si tienes margen y quieres crecer con marca propia: marketing.",
          "Si quieres las dos cosas: comisión para llenar la agenda mientras tu marketing madura.",
        ],
      },
      {
        heading: `Cómo lo hacemos en ${brand}`,
        paragraphs: [
          "Nos centramos en el tercer modelo: que tengas tus propios clientes. Llevamos tus anuncios, tu web, tu ficha de Google y tu SEO, y en el asesoramiento gratuito te decimos por dónde empezar según tu situación.",
        ],
      },
    ],
  },
  {
    slug: "como-pedir-resenas-google-clientes",
    photo: photos.fontaneroFregadero,
    title: "Cómo pedir reseñas en Google a tus clientes (con mensajes listos para copiar)",
    metaDescription:
      "Cuándo y cómo pedir reseñas en Google si eres fontanero o electricista. Mensajes de WhatsApp listos para copiar y errores que evitar.",
    excerpt:
      "Las reseñas deciden a quién llama el cliente. Te damos el momento, el enlace y el mensaje exacto para pedirlas sin resultar pesado.",
    summary:
      "La mejor forma de conseguir reseñas en Google es pedirlas justo al terminar el trabajo, por WhatsApp, con el enlace directo a tu ficha y un mensaje corto y personal. Pide que mencionen el tipo de trabajo y el barrio. No ofrezcas descuentos ni regalos a cambio: va contra las normas de Google.",
    publishedAt: "2026-09-19",
    updatedAt: "2026-09-22",
    category: "Google y SEO",
    content: [
      {
        heading: "Por qué importan tanto",
        paragraphs: [
          "Quien necesita un profesional compara fichas en el mapa de Google. El número de reseñas, la nota media y lo recientes que son influyen en a quién llama, y además son una de las señales que Google tiene en cuenta en los resultados locales.",
        ],
      },
      {
        heading: "Cuándo pedirla",
        paragraphs: [
          "Al terminar, cuando el cliente ve el problema resuelto. Si esperas una semana, el agradecimiento se enfría. En instalaciones grandes, pídela al entregar el trabajo, con el cliente ya disfrutando del resultado.",
        ],
      },
      {
        heading: "Cómo conseguir tu enlace directo",
        paragraphs: [
          "Desde tu Perfil de Empresa en Google, busca la opción para pedir reseñas y copia el enlace. Guárdalo como respuesta rápida en WhatsApp Business para tenerlo siempre a mano.",
        ],
      },
      {
        heading: "Mensajes listos para copiar",
        paragraphs: [],
        list: [
          "Después de una avería: «Hola, [nombre]. Me alegro de que ya esté todo solucionado. Si te ha gustado el servicio, me ayudarías mucho con una reseña en Google: [enlace]. ¡Gracias!»",
          "Tras una instalación: «[Nombre], ha sido un placer hacer vuestra instalación. Si estáis contentos, una reseña contando qué hicimos y en qué barrio ayuda muchísimo a otros vecinos: [enlace]»",
          "Recordatorio, una sola vez: «Hola, [nombre]. Te dejo otra vez el enlace por si te apetece dejar tu opinión: [enlace]. ¡Un saludo!»",
        ],
      },
      {
        heading: "Lo que no debes hacer",
        paragraphs: [],
        list: [
          "Ofrecer descuentos o regalos a cambio de reseñas.",
          "Escribir reseñas falsas o pedírselas a familiares y amigos.",
          "Insistir más de una vez.",
          "Dejar reseñas sin responder.",
        ],
      },
      {
        heading: "Automatízalo",
        paragraphs: [
          `En el servicio de marketing digital de ${brand} dejamos montado un sistema sencillo para pedir reseñas después de cada trabajo y responderlas, para que no dependa de que te acuerdes.`,
        ],
      },
    ],
  },
  {
    slug: "como-aparecer-en-chatgpt-profesional-barcelona",
    photo: photos.electricistaEnchufes,
    title: "Cómo aparecer cuando alguien pregunta a ChatGPT por un profesional en Barcelona",
    metaDescription:
      "Qué es el GEO (optimización para motores generativos) y qué puede hacer un fontanero o electricista en Barcelona para que los asistentes de IA le recomienden.",
    excerpt:
      "Cada vez más gente pregunta a ChatGPT, Gemini o Perplexity «qué fontanero me recomiendas en Gràcia». Qué puedes hacer hoy para estar en esas respuestas.",
    summary:
      "Los asistentes de IA recomiendan negocios a partir de información pública que pueden leer y contrastar: fichas de Google y directorios, reseñas, webs con información clara y menciones en otros sitios. Para aparecer, un profesional necesita datos coherentes en todas partes, una web que explique en texto claro qué hace, dónde y en qué plazos, y reseñas que describan trabajos concretos.",
    publishedAt: "2026-09-22",
    updatedAt: "2026-09-22",
    category: "Google y SEO",
    content: [
      {
        heading: "Qué es el GEO",
        paragraphs: [
          "GEO (Generative Engine Optimization) es el trabajo para que los motores generativos, como ChatGPT, Gemini, Perplexity o las respuestas con IA de Google, entiendan tu negocio y lo mencionen. No hay una fórmula oficial, pero sí patrones claros: estos sistemas se apoyan en información pública, bien estructurada y coherente.",
        ],
      },
      {
        heading: "1. Los mismos datos en todas partes",
        paragraphs: [
          "Nombre, teléfono, zona de servicio y web idénticos en tu ficha de Google, tu web, tus redes y los directorios. Si cada sitio dice una cosa, un asistente tiene menos motivos para recomendarte.",
        ],
      },
      {
        heading: "2. Una web que responda preguntas",
        paragraphs: [
          "Páginas por servicio y zona que digan, en texto claro, qué haces, en qué barrios y en qué plazos, con precios orientativos si puedes darlos. Añade preguntas frecuentes con respuestas directas: es justo el tipo de texto que un asistente puede citar.",
        ],
      },
      {
        heading: "3. Reseñas que describen trabajos",
        paragraphs: [
          "Una reseña que menciona «cambio de cuadro eléctrico en Sants» aporta un contexto que un asistente puede usar cuando alguien pregunta exactamente eso.",
        ],
      },
      {
        heading: "4. Menciones fuera de tu web",
        paragraphs: [],
        list: [
          "Directorios profesionales y de asociaciones del sector.",
          "Proveedores o fabricantes que publican listados de instaladores.",
          "Medios y blogs locales de tu barrio o municipio.",
        ],
      },
      {
        heading: "5. Datos estructurados",
        paragraphs: [
          "Marcar tu web con schema.org (LocalBusiness, Service, FAQPage) ayuda a que buscadores y asistentes interpreten tus datos sin ambigüedad.",
        ],
      },
      {
        heading: `Cómo lo trabajamos en ${brand}`,
        paragraphs: [
          "Incluimos el GEO en el posicionamiento: tu web, tu ficha de Google y tu contenido, preparados tanto para Google como para los asistentes de IA.",
        ],
      },
    ],
  },
];

export function guidePath(guide: Guide): string {
  return `${routes.guides}/${guide.slug}`;
}

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function sortedGuides(): Guide[] {
  return [...guides].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
