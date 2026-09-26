import type { Locale } from "./i18n";
import { guidePath, guideSlugs } from "./navigation";
import type { Trade } from "./navigation";
import { photos } from "./photos";
import type { Photo } from "./photos";
import { siteConfig } from "./site-config";
import { guidesCa } from "./guides-data.ca";

export type Guide = {
  /** Clave común a los dos idiomas (la URL de cada idioma está en navigation.ts). */
  id: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  /** Respuesta directa de 2-4 frases al inicio del artículo: la parte que citan buscadores y asistentes de IA. */
  summary: string;
  publishedAt: string; // ISO date
  updatedAt: string;
  category: string;
  trade?: Trade;
  photo: Photo;
  content: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

const brand = siteConfig.brand;

/** Versión en castellano. La catalana está en guides-data.ca.ts. */

export const guides: Guide[] = [
  {
    id: "como-conseguir-clientes-fontanero-barcelona",
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
    id: "google-business-profile-electricistas-barcelona",
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
    id: "google-ads-para-oficios-cuando-compensa",
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
    id: "pagar-por-clientes-o-hacer-tu-propio-marketing",
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
    id: "como-pedir-resenas-google-clientes",
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
    id: "como-aparecer-en-chatgpt-profesional-barcelona",
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
  {
    id: "cuanto-cuesta-marketing-digital-fontaneros-electricistas",
    photo: photos.fontaneroCajaHerramientas,
    title: "Cuánto cuesta el marketing digital para un fontanero o electricista (precios orientativos)",
    metaDescription:
      "Rangos orientativos de precio de la ficha de Google, la web, los anuncios y el SEO local para fontaneros y electricistas en Barcelona, y por qué el presupuesto de anuncios va siempre aparte.",
    excerpt:
      "«¿Y esto cuánto cuesta?» es la primera pregunta, y la respuesta depende de lo que ya tengas. Estos son los rangos orientativos habituales del sector, explicados servicio a servicio.",
    summary:
      "El marketing digital para un fontanero o electricista suele tener dos partidas separadas: el servicio de gestión (lo que se paga a la agencia) y el presupuesto de anuncios (lo que se paga directamente a Google y Meta). Como orientación de mercado: una ficha de Google gestionada ronda los 50-100 €/mes, una landing page un pago único de 300-900 €, la gestión de anuncios 150-400 €/mes más el presupuesto de anuncios, y el SEO local 150-350 €/mes. Son rangos habituales del sector, no una tarifa fija: el precio real depende de tu zona, tu competencia y qué necesitas ya.",
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    category: "Precios",
    content: [
      {
        heading: "De qué depende el precio",
        paragraphs: [
          "No hay una tarifa única para «marketing digital»: es un conjunto de servicios que se pueden contratar juntos o por separado, y el precio cambia según cuántos de ellos necesites, tu competencia en Barcelona y si partes de cero o ya tienes algo hecho.",
          "Los rangos de este artículo son orientativos, para que sepas qué esperar antes de pedir presupuesto. No son la tarifa de ningún proveedor en concreto ni una promesa de precio cerrado.",
        ],
      },
      {
        heading: "Ficha de Google Business y reseñas",
        paragraphs: [
          "Crear la ficha es gratis, pero optimizarla y mantenerla activa (fotos, publicaciones, respuestas a reseñas) es un trabajo continuo. Como gestión mensual, suele rondar los 50-100 €/mes dentro de un servicio más amplio.",
        ],
      },
      {
        heading: "Landing page o web",
        paragraphs: [
          "Una landing page pensada para convertir visitas en llamadas (rápida, con el teléfono y el WhatsApp a la vista) suele ser un pago único, orientativamente entre 300 y 900 € según cuántas páginas de servicio necesites. Una web más completa, con varias páginas por servicio y zona, puede superar ese rango.",
        ],
      },
      {
        heading: "Anuncios en Google y Meta: el presupuesto va aparte",
        paragraphs: [
          "Aquí es donde más se confunde la gente: el precio de gestionar los anuncios no es lo mismo que el dinero que se gasta en ellos.",
        ],
        list: [
          "Servicio de gestión: lo que se paga a quien lleva las campañas (estrategia, creatividades, ajustes). Orientativamente, 150-400 €/mes.",
          "Presupuesto de anuncios: el dinero que Google o Meta cobran por los clics o las llamadas. Se paga desde tu propia cuenta de anuncios, tú decides cuánto y puedes subirlo, bajarlo o pausarlo cuando quieras. En fontanería y electricidad en Barcelona, muchos negocios empiezan con 200-500 €/mes de presupuesto y lo ajustan según los resultados.",
        ],
      },
      {
        heading: "SEO local y GEO",
        paragraphs: [
          "Trabajar el posicionamiento en Google y en asistentes de IA es un servicio continuo, no algo que se contrate una vez: orientativamente 150-350 €/mes. Es más lento que los anuncios, pero el resultado se acumula y no se detiene si un mes decides pausar la inversión en anuncios.",
        ],
      },
      {
        heading: "CRM y seguimiento de clientes",
        paragraphs: [
          "Suele venir incluido dentro de un servicio de marketing más amplio, o como un añadido de 30-60 €/mes si se contrata solo. Su función es evitar que se pierda algún contacto o presupuesto por no hacer seguimiento.",
        ],
      },
      {
        heading: "Qué mirar además del precio",
        paragraphs: [],
        list: [
          "Qué incluye exactamente el precio: ¿el presupuesto de anuncios está incluido o va aparte?",
          "Si tienes acceso a tu propia cuenta de anuncios y a tu ficha de Google, o si quedan a nombre de la agencia.",
          "Si hay permanencia mínima o puedes darte de baja cuando quieras.",
          "Si te enseñan resultados reales (llamadas, formularios) y no solo clics o «me gusta».",
        ],
      },
      {
        heading: `Cómo lo hacemos en ${brand}`,
        paragraphs: [
          "No damos un precio cerrado sin conocer tu situación: en el asesoramiento gratuito revisamos tu zona, tu competencia y lo que ya tienes hecho, y te decimos exactamente qué te costaría y qué resultado orientativo puedes esperar.",
        ],
      },
    ],
  },
  {
    id: "por-que-no-me-llaman-clientes-nuevos-fontanero-barcelona",
    photo: photos.fontaneroFregadero,
    title: "Por qué no te llaman clientes nuevos aunque hagas buen trabajo",
    metaDescription:
      "Eres buen fontanero y aun así no entran clientes nuevos. Las cuatro razones más habituales por las que un fontanero en Barcelona no aparece cuando alguien lo busca, y cómo comprobar cuál es la tuya.",
    excerpt:
      "Currar bien no es el problema. El problema es que, si no te encuentran, da igual lo bien que curres: ese trabajo se lo lleva otro.",
    summary:
      "Un fontanero en Barcelona que no recibe clientes nuevos casi siempre tiene uno de estos cuatro problemas: no aparece en el mapa de Google cuando alguien busca «fontanero cerca de mí», tiene pocas reseñas o ninguna, su ficha de Google está incompleta, o depende solo del boca a boca sin ningún canal que traiga gente nueva. Ninguno tiene que ver con la calidad del trabajo: son cosas que se revisan y se arreglan en días, no en meses.",
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    category: "Conseguir clientes",
    trade: "fontaneria",
    content: [
      {
        heading: "El trabajo bien hecho no se ve solo",
        paragraphs: [
          "Es la queja más habitual de un fontanero autónomo: «llevo años currando bien, mis clientes están contentos, ¿por qué no me llama gente nueva?». La respuesta casi nunca tiene que ver con el oficio. Tiene que ver con que, hoy, la mayoría de la gente que necesita un fontanero no pregunta a un vecino: abre Google en el móvil y llama al primero que le da confianza en diez segundos.",
          "Si en esos diez segundos no apareces tú, no es que hayas perdido ese cliente por mal trabajo. Es que nunca llegó a saber que existías.",
        ],
      },
      {
        heading: "1. No apareces en el mapa cuando buscan «fontanero cerca de mí»",
        paragraphs: [
          "Es la causa más común y la más fácil de comprobar: busca tú mismo «fontanero» desde el móvil, con la ubicación activada, desde tu barrio. Si no sales entre los primeros resultados del mapa, ese es tu problema número uno, y probablemente no tiene que ver con tu ficha de Google sino con que no está verificada, no tiene categoría correcta o directamente no existe.",
        ],
      },
      {
        heading: "2. Tienes pocas reseñas, o ninguna",
        paragraphs: [
          "Ante una urgencia, la gente no compara presupuestos: compara estrellas. Un fontanero con 4 reseñas gana a otro con 40 aunque el segundo cobre menos, simplemente porque genera más confianza en el momento de decidir. Si nunca has pedido una reseña a un cliente contento, ese es el segundo punto a revisar.",
        ],
      },
      {
        heading: "3. Tu ficha de Google está a medias",
        paragraphs: [],
        list: [
          "Sin fotos, o con fotos genéricas de internet en vez de tus propios trabajos.",
          "Sin horario actualizado, o con un horario que no coincide con cuándo realmente coges el teléfono.",
          "Sin zona de servicio definida, así que Google no sabe si trabajas en tu barrio o en toda Cataluña.",
          "Sin categoría de «Fontanero» como principal, a veces por error queda como «Contratista general» o algo parecido.",
        ],
      },
      {
        heading: "4. Dependes solo del boca a boca",
        paragraphs: [
          "El boca a boca es el mejor cliente que existe, pero tiene un límite: no lo controlas. No decides cuándo llega ni cuántos llegan. Si es tu único canal, tu agenda sube y baja según la suerte, no según lo que necesitas ese mes.",
        ],
      },
      {
        heading: "Cómo saber cuál es tu caso",
        paragraphs: [
          "Haz la prueba: busca tu oficio desde el móvil como lo haría un cliente. Mira si sales, cuántas reseñas tienes y si las fotos y el horario son reales. En la mayoría de los casos, con eso ya se ve claro por dónde falla.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "En el asesoramiento gratuito hacemos esa misma prueba contigo: miramos tu ficha de Google, tu posición en el mapa y tus reseñas, y te decimos exactamente qué está fallando y qué haríamos primero en tu caso.",
        ],
      },
    ],
  },
  {
    id: "cuanto-gana-un-fontanero-autonomo-en-barcelona",
    photo: photos.fontaneroGrifo,
    title: "Cuánto gana un fontanero autónomo en Barcelona (y qué lo cambia)",
    metaDescription:
      "Qué factores hacen que un fontanero autónomo en Barcelona gane más o menos: volumen de avisos, tipo de trabajo, zona y cómo consigue clientes. Rangos orientativos, no una cifra inventada.",
    excerpt:
      "No hay una cifra única para «lo que gana un fontanero»: depende de cuatro cosas muy concretas, y las cuatro se pueden trabajar.",
    summary:
      "Lo que gana un fontanero autónomo en Barcelona depende sobre todo de cuatro factores: cuántos avisos recibe al mes, si son reparaciones pequeñas o trabajos de más importe (reformas, instalaciones), la zona donde trabaja y si tiene un sistema para conseguir clientes o depende solo del boca a boca. Dos fontaneros con la misma habilidad técnica pueden tener ingresos muy distintos según cómo gestionen estos cuatro puntos, no según lo bien que trabajen con las manos.",
    publishedAt: "2026-09-26",
    updatedAt: "2026-09-26",
    category: "Tu negocio",
    trade: "fontaneria",
    content: [
      {
        heading: "Por qué no hay una cifra única",
        paragraphs: [
          "Es una de las preguntas que más se busca en Google y en asistentes de IA, y la respuesta honesta es que no existe una cifra real y verificable que sirva para todos: no publicamos estadísticas inventadas. Lo que sí se puede explicar son los factores que hacen que un fontanero autónomo en Barcelona gane más o menos, y esos sí son reales y se pueden trabajar uno a uno.",
        ],
      },
      {
        heading: "1. Cuántos avisos recibe al mes",
        paragraphs: [
          "Es el factor más obvio, pero el que menos se controla si el único canal es el boca a boca. Un fontanero que solo depende de que le llamen antiguos clientes tiene meses buenos y meses flojos sin poder hacer nada. Uno que además tiene ficha de Google activa, reseñas y algún anuncio bien acotado puede suavizar esos altibajos.",
        ],
      },
      {
        heading: "2. El tipo de trabajo: avería o reforma",
        paragraphs: [
          "Una reparación pequeña (un grifo, una fuga puntual) tiene un tope de precio bajo, por mucha prisa que corra. Una instalación completa, un cambio de bañera por ducha o una reforma de baño entera mueve un importe muy distinto por cada trabajo. Un fontanero que solo recibe avisos de avería tiene el techo de ingresos más bajo que uno que también capta trabajos de obra.",
        ],
      },
      {
        heading: "3. La zona donde trabaja",
        paragraphs: [
          "No es lo mismo cubrir solo tu barrio que tener capacidad de moverte por Barcelona y el área metropolitana (L'Hospitalet, Badalona, Sant Cugat, Cornellà…). Más zona bien gestionada significa más avisos posibles, aunque también más tiempo de desplazamiento a tener en cuenta.",
        ],
      },
      {
        heading: "4. Si tiene un sistema o improvisa",
        paragraphs: [],
        list: [
          "Ficha de Google completa y con reseñas: es gratis y es el canal con mejor relación entre esfuerzo y resultado.",
          "Alguna vía de captación activa (anuncios, web) además del boca a boca, para no depender solo de la suerte.",
          "Un mínimo de seguimiento de presupuestos: cuántos mandas, cuántos se aceptan, para saber qué está funcionando.",
        ],
      },
      {
        heading: "Qué puedes cambiar ya",
        paragraphs: [
          "De los cuatro factores, el volumen de avisos y el sistema para conseguirlos son los que más rápido se pueden mover: completar la ficha de Google y pedir reseñas no cuesta dinero y ya cambia cuánta gente te encuentra. El tipo de trabajo (ir a por reformas, no solo averías) es un cambio de estrategia a medio plazo.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "En el asesoramiento gratuito miramos tu situación actual —avisos, zona, tipo de trabajo— y te decimos qué palanca movería más en tu caso: normalmente no es la que se piensa al principio.",
        ],
      },
    ],
  },
  {
    id: "palabras-que-buscan-tus-clientes-en-google-fontanero",
    photo: photos.fontaneroCajaHerramientas,
    title: "Las palabras que de verdad buscan tus clientes en Google (y seguro no las usas)",
    metaDescription:
      "Qué escribe la gente en Google cuando necesita un fontanero en Barcelona: no es «servicios de fontanería», es mucho más directo. Cómo usar esas palabras en tu ficha y tu web.",
    excerpt:
      "Nadie busca «servicios integrales de fontanería». Busca «se me ha roto la cisterna» o «fontanero urgente Gràcia». La diferencia importa más de lo que parece.",
    summary:
      "La gente no busca en Google con el lenguaje que usaría un fontanero para describir su propio negocio: busca con el problema que tiene en ese momento («fuga de agua», «atasco wc», «cisterna rota») o con la urgencia del momento («fontanero urgente», «fontanero 24 horas»), casi siempre añadiendo su barrio o municipio. Usar esas palabras, no un lenguaje corporativo, en tu ficha de Google y en tu web es lo que hace que aparezcas cuando de verdad te buscan.",
    publishedAt: "2026-09-27",
    updatedAt: "2026-09-27",
    category: "Google y SEO",
    trade: "fontaneria",
    content: [
      {
        heading: "El error más habitual: escribir como una empresa, no como busca la gente",
        paragraphs: [
          "Muchas fichas de Google y webs de fontaneros están escritas con un lenguaje que nadie busca de verdad: «servicios integrales de fontanería», «soluciones profesionales para el hogar». Suena bien, pero no es lo que alguien escribe en Google cuando se le rompe una tubería a las diez de la noche. Escribe el problema, tal cual lo tiene delante.",
        ],
      },
      {
        heading: "Lo que la gente escribe de verdad",
        paragraphs: [],
        list: [
          "El problema concreto: «fuga de agua», «atasco en el wc», «grifo que no cierra», «cisterna rota», «no tengo agua caliente».",
          "La urgencia: «fontanero urgente», «fontanero 24 horas», «fontanero ahora mismo».",
          "El oficio más el sitio: «fontanero Gràcia», «fontanero cerca de mí», «fontanero L'Hospitalet».",
          "La duda antes de llamar: «cuánto cuesta arreglar una fuga», «cuánto cobra un fontanero por venir».",
        ],
      },
      {
        heading: "Dónde usar estas palabras",
        paragraphs: [
          "No hace falta un experto en SEO para aplicarlo: en la descripción de tu ficha de Google, en los nombres de los servicios que añades (en vez de «fontanería general», pon «reparación de fugas», «desatascos», «cambio de grifería») y en tu web, si tienes, usando esas mismas frases en los títulos de cada sección.",
        ],
      },
      {
        heading: "El barrio importa más de lo que parece",
        paragraphs: [
          "Google prioriza resultados cercanos a quien busca. Si tu ficha y tu web mencionan explícitamente los barrios y municipios donde trabajas (Gràcia, Sants, Eixample, L'Hospitalet, Badalona…), tienes más opciones de aparecer cuando alguien busca desde esa zona en concreto que si solo pones «Barcelona» en general.",
        ],
      },
      {
        heading: "Un efecto extra: también ayuda con los asistentes de IA",
        paragraphs: [
          "Cuando alguien le pregunta a ChatGPT o Gemini «qué fontanero me recomiendas en Sants», el asistente no inventa la respuesta: la construye a partir de información real y pública, como tu ficha de Google y tu web. Si esa información está escrita con las palabras reales que la gente usa, es más fácil que te mencione.",
        ],
      },
      {
        heading: `Cómo lo trabajamos en ${brand}`,
        paragraphs: [
          "Parte de nuestro trabajo de SEO local es justo esto: encontrar las palabras que de verdad busca tu cliente potencial en tu zona y colocarlas donde Google (y los asistentes de IA) las leen.",
        ],
      },
    ],
  },
  {
    id: "fontanero-urgencias-barcelona-como-aparecer",
    photo: photos.fontaneroInstalacionBano,
    title: "Fontanero de urgencias en Barcelona: cómo aparecer cuando de verdad importa",
    metaDescription:
      "Cómo prepara un fontanero su ficha de Google y su forma de trabajar para captar avisos urgentes en Barcelona: horario, tiempo de respuesta y lo que de verdad mira quien busca con prisa.",
    excerpt:
      "En una urgencia no hay tiempo de comparar diez presupuestos. Se llama al primero que da confianza rápido. Así se trabaja para ser ese primero.",
    summary:
      "Para captar avisos urgentes, un fontanero en Barcelona necesita tres cosas: que su ficha de Google refleje con precisión cuándo está disponible de verdad (no un horario genérico), que el teléfono se conteste en los primeros segundos o al menos se devuelva la llamada muy rápido, y reseñas recientes que mencionen rapidez, porque ante una urgencia la gente decide en segundos y sin comparar mucho.",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    category: "Google y SEO",
    trade: "fontaneria",
    content: [
      {
        heading: "Una urgencia se decide distinto a un presupuesto normal",
        paragraphs: [
          "Cuando alguien pide presupuesto para una reforma, compara con calma: dos o tres fontaneros, varios días. Cuando tiene una fuga inundando el baño a las once de la noche, no compara nada: llama al primero que parece que va a coger el teléfono y llegar rápido. Si quieres ese tipo de aviso, tienes que estar preparado para ese tipo de decisión.",
        ],
      },
      {
        heading: "1. Un horario que sea verdad",
        paragraphs: [
          "El error más caro es poner en tu ficha de Google un horario de «24 horas» o «urgencias» si en realidad no coges el teléfono a las tres de la madrugada. Genera una mala reseña casi garantizada, justo en el peor momento (alguien con una urgencia real que se siente abandonado). Es mejor poner el horario real, aunque sea más corto, que prometer algo que no vas a cumplir.",
        ],
      },
      {
        heading: "2. Responder rápido, aunque sea para decir que no puedes",
        paragraphs: [
          "Si no puedes coger el teléfono al momento, un mensaje automático de WhatsApp Business («Ahora mismo no puedo atender, te devuelvo la llamada en X minutos») ya marca la diferencia frente a no contestar nada. En una urgencia, el silencio se interpreta como un no.",
        ],
      },
      {
        heading: "3. Reseñas que mencionen rapidez",
        paragraphs: [
          "Cuando pidas una reseña después de una urgencia resuelta, es el momento perfecto para que el cliente mencione lo rápido que llegaste, sin que tengas que pedírselo expresamente: suele salir solo, porque es justo lo que más agradeció. Esas reseñas son las que más pesan para el siguiente cliente con prisa.",
        ],
      },
      {
        heading: "4. La zona de servicio, ajustada de verdad",
        paragraphs: [
          "Si aceptas urgencias solo en ciertos barrios o municipios, dilo claramente en tu ficha de Google. Aparecer como disponible en toda Barcelona y luego no poder llegar a tiempo genera la misma mala experiencia que un horario falso.",
        ],
      },
      {
        heading: "Urgencias sí, pero no como único ingreso",
        paragraphs: [
          "Las urgencias son un canal potente porque decide rápido y compara poco, pero no conviene construir todo el negocio solo sobre ellas: son imprevisibles y agotan si son la única vía. Lo ideal es que sean un complemento, no la base.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "Ajustamos tu ficha de Google para que el horario, la zona y las categorías reflejen exactamente cómo trabajas, y montamos el sistema de reseñas para que las urgencias resueltas se conviertan en la prueba social que convence al siguiente cliente con prisa.",
        ],
      },
    ],
  },
  {
    id: "reformas-bano-barcelona-como-captar-clientes-obra",
    photo: photos.fontaneroFregadero,
    title: "Reformas de baño en Barcelona: cómo captar clientes de obra, no solo de avería",
    metaDescription:
      "Cómo un fontanero en Barcelona puede pasar de vivir solo de averías a captar también reformas de baño y cambios de bañera por ducha, con más margen por trabajo.",
    excerpt:
      "Una fuga te paga el día. Una reforma de baño te paga el mes. Son clientes distintos y se captan de forma distinta.",
    summary:
      "Para captar clientes de reforma de baño (no solo averías), un fontanero necesita mostrar ese tipo de trabajo de forma explícita: fotos de antes y después en su ficha de Google, una categoría o descripción que lo mencione claramente, y presencia donde busca ese cliente concreto, que suele buscar con más antelación y comparando presupuestos, a diferencia del cliente de urgencia que decide en minutos.",
    publishedAt: "2026-09-29",
    updatedAt: "2026-09-29",
    category: "Conseguir clientes",
    trade: "fontaneria",
    content: [
      {
        heading: "Dos clientes muy distintos",
        paragraphs: [
          "El cliente de una fuga decide en minutos y paga un trabajo puntual. El cliente de una reforma de baño se lo piensa durante semanas, pide dos o tres presupuestos y paga un importe muy superior por todo el proyecto: cambiar la bañera por un plato de ducha, renovar la grifería, mover el inodoro. Si tu ficha de Google y tu forma de mostrarte solo hablan de reparaciones urgentes, ese segundo cliente ni te tiene en el radar.",
        ],
      },
      {
        heading: "1. Que se vea que también haces reformas",
        paragraphs: [
          "Si en tu ficha de Google solo hay fotos de reparaciones puntuales o del cuadro de válvulas de una comunidad, nadie va a pensar en ti para renovar un baño entero. Sube fotos de antes y después de las reformas que ya has hecho, aunque sean pocas: es la prueba que busca este tipo de cliente.",
        ],
      },
      {
        heading: "2. Añade el servicio explícitamente",
        paragraphs: [
          "En los servicios de tu ficha de Google, además de «reparación de fugas» o «desatascos», añade específicamente «reforma de baños», «cambio de bañera por ducha» o «instalación de sanitarios». Son búsquedas distintas y Google necesita que se lo digas para enseñarte en esos resultados.",
        ],
      },
      {
        heading: "3. Este cliente compara más, así que las reseñas pesan doble",
        paragraphs: [
          "Como decide con más calma, un cliente de reforma sí que va a leer varias reseñas antes de llamarte, no solo mirar las estrellas por encima. Reseñas que mencionen puntualidad, limpieza al acabar la obra y que el presupuesto se cumplió sin sorpresas son las que más convencen en este tipo de trabajo.",
        ],
      },
      {
        heading: "4. Un presupuesto claro cierra más que uno barato",
        paragraphs: [
          "En una reforma, el cliente teme más los extras sorpresa que el precio en sí. Un presupuesto detallado por escrito (qué incluye, qué no, plazos) transmite más confianza que competir solo por ser el más barato, y evita discusiones a mitad de obra.",
        ],
      },
      {
        heading: "Por qué merece la pena ir a por este tipo de trabajo",
        paragraphs: [
          "Aunque cuesta más captarlo (decide más despacio, compara más), una reforma de baño mueve un importe muy superior a varias reparaciones puntuales juntas, y suele generar buenas reseñas de peso si el trabajo queda bien. Es el tipo de cliente que, además, más fácilmente te recomienda a vecinos con proyectos parecidos.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "Trabajamos tu ficha de Google y tu web para que muestren también este tipo de trabajo, con las fotos y las palabras que busca quien está pensando en reformar, no solo quien tiene una fuga ahora mismo.",
        ],
      },
    ],
  },
  {
    id: "ficha-google-competencia-fontanero-que-mirar",
    photo: photos.fontaneroGrifo,
    title: "Qué mirar en la ficha de Google de tu competencia (y qué copiarle)",
    metaDescription:
      "Cómo un fontanero en Barcelona puede analizar la ficha de Google de otros fontaneros de su zona para ver qué están haciendo mejor y qué se puede mejorar en la propia.",
    excerpt:
      "No hace falta adivinar qué funciona: los fontaneros que más aparecen en tu zona ya te lo están enseñando, gratis, en su propia ficha de Google.",
    summary:
      "Mirar la ficha de Google de los fontaneros que más aparecen en tu zona (buscando «fontanero» desde tu barrio) revela rápidamente qué se puede mejorar en la tuya: cuántas reseñas tienen, qué categorías y servicios han añadido, qué fotos usan y con qué frecuencia publican novedades. No se trata de copiar el negocio de nadie, sino de detectar qué prácticas concretas les están funcionando para aparecer antes que tú.",
    publishedAt: "2026-09-30",
    updatedAt: "2026-09-30",
    category: "Google y SEO",
    trade: "fontaneria",
    content: [
      {
        heading: "Antes de trabajar tu ficha, mira las que ya funcionan",
        paragraphs: [
          "Busca «fontanero» desde el móvil, con la ubicación activada, en tu propio barrio. Los dos o tres primeros que aparecen en el mapa no están ahí por suerte: algo en su ficha de Google está funcionando mejor que en la del resto. Antes de tocar la tuya, merece la pena entender qué es.",
        ],
      },
      {
        heading: "Qué mirar exactamente",
        paragraphs: [],
        list: [
          "Número de reseñas y nota media: ¿cuántas tienen y cada cuánto reciben una nueva?",
          "Categorías y servicios añadidos: ¿solo «Fontanero» o también «Reparación de fugas», «Desatascos», «Reforma de baños»?",
          "Fotos: ¿reales de sus trabajos o genéricas de internet? ¿Cuántas y de qué calidad?",
          "Respuestas a reseñas: ¿contestan a todas, incluidas las negativas, o dejan la ficha muda?",
          "Publicaciones recientes: ¿suben novedades cada pocas semanas o la ficha lleva meses sin actividad?",
        ],
      },
      {
        heading: "Lo que no debes copiar",
        paragraphs: [
          "No tiene sentido copiar literalmente su descripción o sus fotos: además de no ser correcto, a Google no le convence el contenido duplicado. Lo que sí puedes «copiar» es la estrategia: si ellos tienen 40 reseñas y tú 4, el aprendizaje no es imitar sus palabras, es empezar a pedir reseñas tú también, de forma sistemática.",
        ],
      },
      {
        heading: "Un hueco que suele quedar libre",
        paragraphs: [
          "Muchas veces, ni siquiera los que mejor aparecen lo hacen todo bien: puede que tengan muchas reseñas pero fotos pobres, o buena ficha pero cero respuesta a reseñas negativas. Ese hueco (lo que ni el líder de tu zona hace bien) es exactamente donde puedes diferenciarte tú.",
        ],
      },
      {
        heading: "Hazlo también con búsquedas específicas",
        paragraphs: [
          "Repite el ejercicio con búsquedas más concretas: «fontanero urgente [tu barrio]», «reforma de baño [tu barrio]». A veces quien gana en «fontanero» general no es el mismo que gana en estas búsquedas más específicas, y ahí puede haber una oportunidad más fácil de conseguir.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "En el asesoramiento gratuito hacemos este análisis de competencia por ti: te decimos exactamente qué están haciendo mejor los fontaneros que más aparecen en tu zona y qué es lo primero que deberías cambiar en tu ficha.",
        ],
      },
    ],
  },
  {
    id: "presupuesto-whatsapp-cierra-mas-trabajos-fontanero",
    photo: photos.fontaneroCajaHerramientas,
    title: "Por qué un presupuesto por WhatsApp cierra más trabajos que una llamada",
    metaDescription:
      "Por qué mandar el presupuesto por WhatsApp, con foto y precio claro, convierte más contactos en trabajos reales que decirlo por teléfono. Cómo hacerlo bien como fontanero.",
    excerpt:
      "Por teléfono, un precio se olvida en cinco minutos. Por WhatsApp, se queda ahí, se puede releer y enseñar a la pareja antes de decidir.",
    summary:
      "Un presupuesto enviado por WhatsApp, por escrito y con foto del trabajo, convierte más contactos en clientes reales que uno dado solo de palabra por teléfono: queda registrado, el cliente puede consultarlo con calma o enseñárselo a otra persona antes de decidir, y evita malentendidos sobre qué incluye. Para un fontanero, es un cambio sencillo con impacto directo en cuántos presupuestos se acaban aceptando.",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    category: "Conseguir clientes",
    trade: "fontaneria",
    content: [
      {
        heading: "Un precio dicho se olvida; un precio escrito se queda",
        paragraphs: [
          "Cuando das un precio por teléfono, el cliente lo retiene unos minutos y ya está: no lo tiene delante para pensarlo con calma, ni para comentarlo con su pareja o su comunidad de vecinos antes de decidir. Un presupuesto por WhatsApp, en cambio, se queda ahí. Se puede releer, reenviar, consultar dos días después. Eso, por sí solo, ya hace que más gente acabe diciendo que sí.",
        ],
      },
      {
        heading: "Qué debe llevar un buen presupuesto por WhatsApp",
        paragraphs: [],
        list: [
          "El precio claro, sin «depende» ni rangos amplios si ya has visto el problema (con foto o en persona).",
          "Qué incluye exactamente: mano de obra, materiales, desplazamiento si lo cobras aparte.",
          "Una foto o vídeo corto del problema, si es posible: genera más confianza que solo texto.",
          "El plazo: cuándo podrías hacerlo, no dejarlo en el aire.",
        ],
      },
      {
        heading: "Por qué funciona mejor que la llamada",
        paragraphs: [
          "No se trata de dejar de hablar por teléfono, sino de rematar por escrito lo que se habló de palabra. El cliente que recibe un mensaje claro con precio y qué incluye tiene mucho menos motivo para «llamar a otro para comparar»: ya tiene la información que necesitaba para decidir sin más vueltas.",
        ],
      },
      {
        heading: "Evita el problema de los extras sorpresa",
        paragraphs: [
          "Uno de los motivos por los que un cliente no cierra, o cierra y luego se queja, es no tener claro qué estaba incluido. Ponerlo por escrito, aunque sea en dos líneas de WhatsApp, evita esa discusión antes de que empiece.",
        ],
      },
      {
        heading: "Un mensaje tipo para empezar",
        paragraphs: [
          "«Hola [nombre], según lo que me has contado/mandado en la foto, sería [trabajo] por [precio], incluye [qué incluye]. Podría hacerlo [día/franja]. Cualquier duda me dices.» Corto, claro, y queda ahí para cuando decida.",
        ],
      },
      {
        heading: `Cómo lo trabajamos en ${brand}`,
        paragraphs: [
          "Parte de montar tu sistema de CRM y seguimiento de clientes es justo esto: tener plantillas de WhatsApp listas para presupuestar rápido y bien, y no perder de vista qué presupuestos están pendientes de respuesta.",
        ],
      },
    ],
  },
  {
    id: "fontanero-anunciarse-toda-barcelona-o-solo-tu-zona",
    photo: photos.fontaneroInstalacionBano,
    title: "¿Conviene anunciarte en toda Barcelona o solo en tu zona?",
    metaDescription:
      "Si eres fontanero autónomo, anunciarte en toda Barcelona puede salir más caro y traer menos resultado que acotar tus anuncios y tu ficha de Google a tu zona real de trabajo.",
    excerpt:
      "Anunciarte en toda la ciudad suena a más oportunidades. En la práctica, suele significar pagar más por clientes que están demasiado lejos.",
    summary:
      "Para la mayoría de fontaneros autónomos en Barcelona compensa acotar sus anuncios y su ficha de Google a la zona donde de verdad pueden llegar rápido (su barrio y los colindantes, o un puñado de municipios concretos), en vez de anunciarse en toda la ciudad: cuesta menos por contacto, compite con menos empresas grandes y evita desplazamientos largos que no compensan para trabajos pequeños.",
    publishedAt: "2026-10-02",
    updatedAt: "2026-10-02",
    category: "Publicidad",
    trade: "fontaneria",
    content: [
      {
        heading: "«Cuanto más grande, mejor» no siempre es verdad",
        paragraphs: [
          "Parece lógico pensar que anunciarte en toda Barcelona te da más oportunidades que hacerlo solo en tu barrio. En la práctica, para un autónomo que trabaja solo o con un ayudante, suele pasar lo contrario: acabas compitiendo por palabras muy caras contra empresas grandes de urgencias, y cuando te llaman, es desde zonas a las que tardas cuarenta minutos en llegar.",
        ],
      },
      {
        heading: "Lo que pasa si te anuncias en toda la ciudad",
        paragraphs: [],
        list: [
          "Pagas el mismo precio por clic que empresas grandes con más margen para pujar alto.",
          "Recibes avisos de zonas donde tardas demasiado en llegar, sobre todo si es una urgencia.",
          "Tu ficha de Google compite con muchas más fichas a la vez.",
          "Es más difícil generar reseñas de vecinos que se conocen entre sí y se recomiendan.",
        ],
      },
      {
        heading: "Lo que gana quien se acota a su zona",
        paragraphs: [
          "Al limitar tus anuncios y tu ficha a tu barrio y los colindantes (o a un grupo concreto de municipios, si trabajas en varios), compites con menos negocios, el coste por contacto suele bajar, y puedes llegar de verdad rápido cuando hace falta. Además, entre vecinos de una misma zona el boca a boca corre más y se refuerza con las reseñas.",
        ],
      },
      {
        heading: "Cómo decidir tu zona real",
        paragraphs: [
          "No la definas por lo que te gustaría cubrir, sino por dónde puedes llegar en un tiempo razonable sin perder rentabilidad en el desplazamiento. Para la mayoría de fontaneros autónomos en Barcelona esto suele ser su barrio, los dos o tres colindantes, y quizás un municipio cercano si ya tiene clientes habituales ahí.",
        ],
      },
      {
        heading: "Cuándo sí tiene sentido ampliar",
        paragraphs: [
          "Si ya tienes equipo (más de una persona trabajando) o te especializas en algo puntual que poca gente ofrece (por ejemplo, un tipo de instalación concreta), ampliar la zona puede compensar. Para el resto, empezar acotado y crecer poco a poco suele dar mejor resultado que abarcar demasiado desde el principio.",
        ],
      },
      {
        heading: `Cómo lo trabajamos en ${brand}`,
        paragraphs: [
          "Cuando gestionamos tus anuncios y tu ficha de Google, empezamos siempre acotando la zona a lo que de verdad puedes atender bien, y la vamos ajustando según los resultados reales, no según lo que «suena mejor».",
        ],
      },
    ],
  },
  {
    id: "por-que-un-cliente-elige-a-un-fontanero-y-no-a-otro",
    photo: photos.fontaneroFregadero,
    title: "Por qué un cliente te elige a ti y no a otro fontanero (no es el precio)",
    metaDescription:
      "Qué hace que alguien elija a un fontanero en vez de otro en Barcelona cuando hay varios con precios parecidos: confianza, rapidez de respuesta y lo que se ve antes de llamar.",
    excerpt:
      "Cuando dos presupuestos son parecidos, el precio deja de decidir. Lo que decide es lo que el cliente vio de ti antes de coger el teléfono.",
    summary:
      "Cuando varios fontaneros tienen precios similares, lo que hace que un cliente elija a uno y no a otro suele ser: quién responde antes, quién genera más confianza a través de sus reseñas y fotos, y quién explica con más claridad qué va a hacer. El precio importa, pero deja de ser el factor decisivo en cuanto hay varias opciones parecidas: entonces gana la confianza que el cliente sintió antes de la primera llamada.",
    publishedAt: "2026-10-03",
    updatedAt: "2026-10-03",
    category: "Tu negocio",
    trade: "fontaneria",
    content: [
      {
        heading: "El precio decide menos de lo que se piensa",
        paragraphs: [
          "Muchos fontaneros dan por hecho que, si no consiguen un trabajo, es porque cobraban más caro que otro. A veces es así, pero muchas otras veces el precio era parecido y lo que decidió fue otra cosa: quién respondió antes, quién parecía más de fiar, quién explicó mejor qué iba a hacer.",
        ],
      },
      {
        heading: "1. Quién responde primero",
        paragraphs: [
          "Cuando alguien pide presupuesto a dos o tres fontaneros a la vez (algo muy habitual), el primero que contesta con una respuesta clara arranca con ventaja, incluso antes de hablar de precio. No responder en las primeras horas suele significar quedar directamente fuera de la decisión.",
        ],
      },
      {
        heading: "2. Lo que se ve antes de llamar",
        paragraphs: [
          "Antes de coger el teléfono, el cliente ya se ha hecho una idea de ti a través de tu ficha de Google: tus reseñas, tus fotos, si pareces un negocio serio o uno improvisado. Esa primera impresión, que se forma sin que tú estés presente, pesa mucho en la decisión final.",
        ],
      },
      {
        heading: "3. Cómo explicas lo que vas a hacer",
        paragraphs: [
          "Un presupuesto que solo dice «300 €» genera más dudas que uno que dice «300 €: cambio de la válvula, sellado y prueba de presión, con garantía de X meses». No es cuestión de escribir más, es explicar lo suficiente para que el cliente entienda qué está pagando.",
        ],
      },
      {
        heading: "4. La sensación de que «te importa» el problema",
        paragraphs: [
          "Preguntar un par de cosas concretas sobre el problema (cuándo empezó, si ya lo tocó alguien más) antes de dar un precio genera más confianza que un presupuesto genérico y rápido. Da la sensación de que estás mirando su caso, no repitiendo una tarifa.",
        ],
      },
      {
        heading: "Lo que puedes trabajar esta semana",
        paragraphs: [],
        list: [
          "Revisa cuánto tardas de media en responder a un presupuesto pedido, y si puedes bajarlo.",
          "Mira tu ficha de Google como si fueras un cliente que no te conoce: ¿transmite confianza?",
          "La próxima vez que mandes un presupuesto, añade una frase explicando qué incluye, no solo el número.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "Trabajamos la parte que el cliente ve antes de llamarte —tu ficha de Google, tus reseñas, tu web si tienes— para que esa primera impresión juegue a tu favor, no en tu contra.",
        ],
      },
    ],
  },
  {
    id: "temporada-alta-baja-fontanero-barcelona-como-no-depender",
    photo: photos.fontaneroGrifo,
    title: "Temporada alta y baja para fontaneros: cómo no depender solo de las urgencias",
    metaDescription:
      "Cómo suaviza un fontanero en Barcelona los meses flojos combinando avisos de urgencia con reformas y mantenimiento, en vez de depender solo de que haya averías.",
    excerpt:
      "Si tu agenda depende de que se rompan cosas, tu agenda no depende de ti. Hay formas de que no sea así.",
    summary:
      "Un fontanero que depende solo de avisos de avería tiene una agenda que sube y baja según la suerte, sin ningún control sobre ello. Combinar ese tipo de aviso con trabajos que se pueden planificar (reformas de baño, mantenimiento de comunidades, revisiones preventivas) da una base de ingresos más estable, porque esos trabajos se pueden captar y programar con antelación, no solo esperar a que pase algo.",
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
    category: "Tu negocio",
    trade: "fontaneria",
    content: [
      {
        heading: "Vivir de que se rompan cosas es vivir sin control",
        paragraphs: [
          "Si el negocio depende solo de que haya averías, no hay forma de planificar: unos meses hay muchos avisos, otros casi ninguno, y no depende de nada que puedas decidir tú. La avería es un canal real y rentable, pero no debería ser el único, porque no lo controlas.",
        ],
      },
      {
        heading: "Trabajos que sí se pueden planificar",
        paragraphs: [],
        list: [
          "Reformas de baño: se deciden con semanas de antelación y se pueden programar en la agenda.",
          "Mantenimiento de comunidades de vecinos: revisiones periódicas de bajantes, montantes, válvulas.",
          "Revisiones preventivas para particulares: detectar una fuga pequeña antes de que sea una urgencia cara.",
          "Instalaciones nuevas: cocinas, baños, locales que se reforman o abren.",
        ],
      },
      {
        heading: "Por qué esto suaviza los meses flojos",
        paragraphs: [
          "A diferencia de una avería, que no sabes cuándo va a llegar, una reforma o un contrato de mantenimiento se agenda con semanas o meses de margen. Tener un par de estos trabajos ya cerrados te da una base de ingresos que no depende de que ese mes haya suerte con las urgencias.",
        ],
      },
      {
        heading: "Cómo empezar a captar este tipo de trabajo",
        paragraphs: [
          "Si nunca has ido a por administradores de fincas o comunidades, es un buen punto de partida: presentarte con una tarjeta y explicar que atiendes bajantes y montantes de zonas comunes abre una vía de trabajo recurrente, distinta a la avería puntual de un particular.",
        ],
      },
      {
        heading: "No hace falta elegir uno u otro",
        paragraphs: [
          "No se trata de dejar de atender urgencias, sino de no depender solo de ellas. Las urgencias siguen siendo un canal válido y rápido; lo que cambia es que dejan de ser tu única fuente de ingresos, así que un mes flojo de averías ya no significa un mes flojo del todo.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "En el asesoramiento gratuito miramos cómo está repartida hoy tu agenda entre avería y trabajo planificable, y te ayudamos a mostrar en tu ficha de Google y tus anuncios también ese segundo tipo de trabajo, para que no dependa todo de la suerte del mes.",
        ],
      },
    ],
  },
  {
    id: "como-conseguir-clientes-electricista-barcelona",
    photo: photos.electricistaCuadro,
    title: "Cómo conseguir más clientes siendo electricista en Barcelona",
    metaDescription:
      "Guía práctica para electricistas autónomos en Barcelona: ficha de Google, reseñas, anuncios, boletines eléctricos de comunidades y web para dejar de depender del boca a boca.",
    excerpt:
      "El boca a boca funciona, pero no se puede escalar. Estas son las vías que de verdad traen clientes a un electricista en Barcelona.",
    summary:
      "Un electricista en Barcelona consigue clientes de forma estable combinando cuatro vías: una ficha de Google Business completa y con reseñas, anuncios de Google acotados a su zona y horario, acuerdos con administradores de fincas para boletines y revisiones de comunidades, y una web que convierta visitas en llamadas. La ficha de Google es la base: es gratis y es lo primero que ve quien busca «electricista cerca de mí».",
    publishedAt: "2026-10-05",
    updatedAt: "2026-10-05",
    category: "Conseguir clientes",
    trade: "electricidad",
    content: [
      {
        heading: "El límite del boca a boca",
        paragraphs: [
          "La mayoría de electricistas autónomos empieza con clientes de confianza: familia, vecinos, antiguos clientes. Es el mejor cliente posible, pero no lo controlas: no decides cuándo llega ni si llega suficiente para llenar la agenda cuando lo necesitas.",
          "Para crecer hacen falta canales que se puedan activar y ajustar. Estos son los que funcionan en Barcelona.",
        ],
      },
      {
        heading: "1. Tu ficha de Google Business, lo primero",
        paragraphs: [
          "Cuando salta un diferencial o se va la luz de medio piso, la gente busca en el móvil y llama a uno de los negocios del mapa. Tener la ficha completa es gratis y es el canal con mejor relación entre esfuerzo y clientes.",
        ],
        list: [
          "Elige «Electricista» como categoría principal.",
          "Añade cada servicio con su nombre real: boletín eléctrico (CIE), cambio de cuadro, subida de potencia, averías, domótica, punto de recarga.",
          "Sube fotos reales de cuadros e instalaciones, nunca imágenes de internet.",
          "Responde a todas las reseñas, también a las negativas, con educación y sin discutir.",
          "Mantén el horario actualizado: si a una hora no coges el teléfono, no la pongas.",
        ],
      },
      {
        heading: "2. Reseñas: lo que más pesa en la decisión",
        paragraphs: [
          "Ante un corte de luz, el cliente no lee tu web: mira estrellas y número de opiniones, y llama. Pide la reseña al terminar, cuando el cliente ve la luz encendida de nuevo, con un WhatsApp que incluya el enlace directo a tu ficha.",
        ],
      },
      {
        heading: "3. Google Ads, solo con campañas bien acotadas",
        paragraphs: [
          "Los anuncios de electricidad en Barcelona son caros porque compiten empresas grandes de mantenimiento con presupuestos altos. Para que un autónomo gane dinero con ellos tiene que acotar: solo sus barrios, solo sus horarios, solo los servicios que le dejan margen, y medir llamadas en lugar de clics.",
        ],
        list: [
          "Excluye búsquedas como «curso», «trabajo», «sueldo» o «gratis».",
          "Programa los anuncios solo en las horas en que puedes atender.",
          "Usa anuncios de llamada para móvil.",
          "Revisa cada semana qué búsquedas reales activaron tus anuncios.",
        ],
      },
      {
        heading: "4. Administradores de fincas y boletines de comunidades",
        paragraphs: [
          "En Barcelona hay miles de comunidades que necesitan un electricista de confianza para el boletín periódico del cuadro general, la iluminación de zonas comunes o el mantenimiento del ascensor. Es un cliente recurrente y con facturación estable: preséntate a administradores con una tarjeta y un dossier sencillo con tus tiempos de respuesta.",
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
          "Si quieres ingresos estables: acuerdos con administradores de fincas.",
        ],
      },
    ],
  },
  {
    id: "por-que-no-me-llaman-clientes-nuevos-electricista-barcelona",
    photo: photos.electricistaEnchufes,
    title: "Por qué no te llaman clientes nuevos aunque hagas buenas instalaciones",
    metaDescription:
      "Eres buen electricista y aun así no entran clientes nuevos. Las cuatro razones más habituales por las que un electricista en Barcelona no aparece cuando alguien lo busca.",
    excerpt:
      "Instalar bien no es el problema. El problema es que, si no te encuentran, ese aviso se lo lleva otro electricista.",
    summary:
      "Un electricista en Barcelona que no recibe clientes nuevos casi siempre tiene uno de estos cuatro problemas: no aparece en el mapa de Google cuando alguien busca «electricista cerca de mí», tiene pocas reseñas o ninguna, su ficha de Google está incompleta o mal categorizada, o depende solo del boca a boca sin ningún canal que traiga gente nueva. Ninguno tiene que ver con la calidad de tus instalaciones: son cosas que se revisan y se arreglan en días, no en meses.",
    publishedAt: "2026-10-06",
    updatedAt: "2026-10-06",
    category: "Conseguir clientes",
    trade: "electricidad",
    content: [
      {
        heading: "El trabajo bien hecho no se ve solo",
        paragraphs: [
          "«Llevo años instalando bien, mis clientes están contentos, ¿por qué no me llama gente nueva?». La respuesta casi nunca tiene que ver con el oficio. Tiene que ver con que, hoy, quien tiene un problema eléctrico no pregunta a un vecino: abre Google en el móvil y llama al primero que le da confianza en diez segundos.",
        ],
      },
      {
        heading: "1. No apareces en el mapa cuando buscan «electricista cerca de mí»",
        paragraphs: [
          "Es la causa más común y la más fácil de comprobar: busca tú mismo «electricista» desde el móvil, con la ubicación activada, desde tu barrio. Si no sales entre los primeros resultados del mapa, ese es tu problema número uno, y suele deberse a que la ficha no está verificada, tiene una categoría incorrecta o directamente no existe.",
        ],
      },
      {
        heading: "2. Tienes pocas reseñas, o ninguna",
        paragraphs: [
          "Ante un corte de luz, la gente no compara presupuestos: compara estrellas. Un electricista con 4 reseñas gana a otro con 40 aunque el segundo cobre menos, porque genera más confianza en el momento de decidir.",
        ],
      },
      {
        heading: "3. Tu ficha de Google está a medias",
        paragraphs: [],
        list: [
          "Sin fotos, o con fotos genéricas de internet en vez de tus propios cuadros e instalaciones.",
          "Sin servicios concretos añadidos: boletín, subida de potencia, domótica.",
          "Sin zona de servicio definida, así que Google no sabe si trabajas en tu barrio o en toda Cataluña.",
          "Con «Contratista general» como categoría en vez de «Electricista».",
        ],
      },
      {
        heading: "4. Dependes solo del boca a boca",
        paragraphs: [
          "El boca a boca es el mejor cliente que existe, pero tiene un límite: no lo controlas. Si es tu único canal, tu agenda sube y baja según la suerte, no según lo que necesitas ese mes.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "En el asesoramiento gratuito hacemos esa misma prueba contigo: miramos tu ficha de Google, tu posición en el mapa y tus reseñas, y te decimos exactamente qué está fallando y qué haríamos primero en tu caso.",
        ],
      },
    ],
  },
  {
    id: "cuanto-gana-un-electricista-autonomo-en-barcelona",
    photo: photos.electricistaLuzTecho,
    title: "Cuánto gana un electricista autónomo en Barcelona (y qué lo cambia)",
    metaDescription:
      "Qué factores hacen que un electricista autónomo en Barcelona gane más o menos: volumen de avisos, tipo de trabajo, zona y cómo consigue clientes. Rangos orientativos, no una cifra inventada.",
    excerpt:
      "No hay una cifra única para «lo que gana un electricista»: depende de cuatro cosas muy concretas, y las cuatro se pueden trabajar.",
    summary:
      "Lo que gana un electricista autónomo en Barcelona depende sobre todo de cuatro factores: cuántos avisos recibe al mes, si son averías puntuales o trabajos de más importe (cambios de cuadro, subidas de potencia, puntos de recarga, instalaciones completas), la zona donde trabaja y si tiene un sistema para conseguir clientes o depende solo del boca a boca. No publicamos una cifra inventada: publicamos los factores reales que la mueven.",
    publishedAt: "2026-10-07",
    updatedAt: "2026-10-07",
    category: "Tu negocio",
    trade: "electricidad",
    content: [
      {
        heading: "Por qué no hay una cifra única",
        paragraphs: [
          "Es una de las preguntas que más se busca en Google, y la respuesta honesta es que no existe una cifra real y verificable que sirva para todos. Lo que sí se puede explicar son los factores que hacen que un electricista autónomo en Barcelona gane más o menos, y esos sí son reales y se pueden trabajar uno a uno.",
        ],
      },
      {
        heading: "1. Cuántos avisos recibe al mes",
        paragraphs: [
          "Un electricista que solo depende de que le llamen antiguos clientes tiene meses buenos y meses flojos sin poder hacer nada. Uno que además tiene ficha de Google activa, reseñas y algún anuncio bien acotado puede suavizar esos altibajos.",
        ],
      },
      {
        heading: "2. El tipo de trabajo: avería o instalación",
        paragraphs: [
          "Una avería puntual (un enchufe, un diferencial que salta) tiene un tope de precio bajo. Un cambio de cuadro completo, una subida de potencia, un punto de recarga de coche eléctrico o una instalación nueva mueve un importe muy distinto por cada trabajo. Un electricista que solo recibe avisos de avería tiene el techo de ingresos más bajo que uno que también capta obra.",
        ],
      },
      {
        heading: "3. La zona donde trabaja",
        paragraphs: [
          "No es lo mismo cubrir solo tu barrio que tener capacidad de moverte por Barcelona y el área metropolitana. Más zona bien gestionada significa más avisos posibles, aunque también más desplazamiento a tener en cuenta.",
        ],
      },
      {
        heading: "4. Si tiene un sistema o improvisa",
        paragraphs: [],
        list: [
          "Ficha de Google completa y con reseñas: es gratis y es el canal con mejor relación entre esfuerzo y resultado.",
          "Alguna vía de captación activa además del boca a boca.",
          "Un mínimo de seguimiento de presupuestos: cuántos mandas, cuántos se aceptan.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "En el asesoramiento gratuito miramos tu situación actual —avisos, zona, tipo de trabajo— y te decimos qué palanca movería más en tu caso.",
        ],
      },
    ],
  },
  {
    id: "palabras-que-buscan-tus-clientes-en-google-electricista",
    photo: photos.electricistaCasco,
    title: "Las palabras que de verdad buscan tus clientes en Google (electricista)",
    metaDescription:
      "Qué escribe la gente en Google cuando tiene un problema eléctrico en Barcelona: no es «servicios eléctricos integrales», es mucho más directo. Cómo usar esas palabras en tu ficha y tu web.",
    excerpt:
      "Nadie busca «soluciones eléctricas profesionales». Busca «se ha ido la luz» o «electricista urgente Sants». La diferencia importa más de lo que parece.",
    summary:
      "La gente no busca en Google con el lenguaje que usaría un electricista para describir su propio negocio: busca con el problema que tiene en ese momento («se ha ido la luz», «salta el diferencial», «subir potencia») o con la urgencia del momento («electricista urgente», «electricista 24 horas»), casi siempre añadiendo su barrio. Usar esas palabras, no un lenguaje corporativo, en tu ficha de Google y en tu web es lo que hace que aparezcas cuando de verdad te buscan.",
    publishedAt: "2026-10-08",
    updatedAt: "2026-10-08",
    category: "Google y SEO",
    trade: "electricidad",
    content: [
      {
        heading: "El error más habitual: escribir como una empresa, no como busca la gente",
        paragraphs: [
          "Muchas fichas de Google y webs de electricistas están escritas con un lenguaje que nadie busca de verdad: «soluciones eléctricas integrales», «servicios profesionales para el hogar». Suena bien, pero no es lo que alguien escribe en Google cuando se le va la luz a las diez de la noche. Escribe el problema, tal cual lo tiene delante.",
        ],
      },
      {
        heading: "Lo que la gente escribe de verdad",
        paragraphs: [],
        list: [
          "El problema concreto: «se ha ido la luz», «salta el diferencial», «no funciona un enchufe», «huele a quemado el cuadro».",
          "Lo que necesita: «subir potencia», «boletín eléctrico», «instalar punto de recarga coche eléctrico».",
          "La urgencia: «electricista urgente», «electricista 24 horas», «electricista ahora mismo».",
          "El oficio más el sitio: «electricista Gràcia», «electricista cerca de mí», «electricista L'Hospitalet».",
        ],
      },
      {
        heading: "Dónde usar estas palabras",
        paragraphs: [
          "No hace falta un experto en SEO para aplicarlo: en la descripción de tu ficha de Google, en los nombres de los servicios que añades (en vez de «electricidad general», pon «boletín eléctrico», «cambio de cuadro», «subida de potencia») y en tu web, si tienes, usando esas mismas frases en los títulos de cada sección.",
        ],
      },
      {
        heading: "El barrio importa más de lo que parece",
        paragraphs: [
          "Google prioriza resultados cercanos a quien busca. Si tu ficha y tu web mencionan explícitamente los barrios y municipios donde trabajas, tienes más opciones de aparecer cuando alguien busca desde esa zona en concreto que si solo pones «Barcelona» en general.",
        ],
      },
      {
        heading: `Cómo lo trabajamos en ${brand}`,
        paragraphs: [
          "Parte de nuestro trabajo de SEO local es justo esto: encontrar las palabras que de verdad busca tu cliente potencial en tu zona y colocarlas donde Google las lee.",
        ],
      },
    ],
  },
  {
    id: "electricista-urgencias-barcelona-como-aparecer",
    photo: photos.electricistaPlafon,
    title: "Electricista de urgencias en Barcelona: cómo aparecer cuando de verdad importa",
    metaDescription:
      "Cómo prepara un electricista su ficha de Google y su forma de trabajar para captar avisos urgentes en Barcelona: horario, tiempo de respuesta y lo que de verdad mira quien busca con prisa.",
    excerpt:
      "Un corte de luz o un cortocircuito no espera. Se llama al primero que da confianza rápido. Así se trabaja para ser ese primero.",
    summary:
      "Para captar avisos urgentes, un electricista en Barcelona necesita tres cosas: que su ficha de Google refleje con precisión cuándo está disponible de verdad (no un horario genérico), que el teléfono se conteste en los primeros segundos o al menos se devuelva la llamada muy rápido, y reseñas recientes que mencionen rapidez, porque ante un corte de luz o un riesgo eléctrico la gente decide en segundos.",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-09",
    category: "Google y SEO",
    trade: "electricidad",
    content: [
      {
        heading: "Una urgencia eléctrica se decide distinto a un presupuesto normal",
        paragraphs: [
          "Cuando alguien pide presupuesto para una reforma, compara con calma. Cuando se queda sin luz o huele a quemado en el cuadro, no compara nada: llama al primero que parece que va a coger el teléfono y llegar rápido. Si quieres ese tipo de aviso, tienes que estar preparado para ese tipo de decisión.",
        ],
      },
      {
        heading: "1. Un horario que sea verdad",
        paragraphs: [
          "El error más caro es poner en tu ficha de Google un horario de «24 horas» si en realidad no coges el teléfono a las tres de la madrugada. Genera una mala reseña casi garantizada, justo en el peor momento. Es mejor poner el horario real, aunque sea más corto.",
        ],
      },
      {
        heading: "2. Responder rápido, aunque sea para decir que no puedes",
        paragraphs: [
          "Si no puedes coger el teléfono al momento, un mensaje automático de WhatsApp Business ya marca la diferencia frente a no contestar nada. En una urgencia, el silencio se interpreta como un no.",
        ],
      },
      {
        heading: "3. Reseñas que mencionen rapidez y seguridad",
        paragraphs: [
          "Cuando pidas una reseña después de una urgencia resuelta, suele salir sola la mención a lo rápido que llegaste y a que dejaste la instalación segura, sin que tengas que pedírselo. Esas reseñas son las que más pesan para el siguiente cliente con prisa.",
        ],
      },
      {
        heading: "Urgencias sí, pero no como único ingreso",
        paragraphs: [
          "Las urgencias son un canal potente porque decide rápido y compara poco, pero no conviene construir todo el negocio solo sobre ellas: son imprevisibles y agotan si son la única vía.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "Ajustamos tu ficha de Google para que el horario y la zona reflejen exactamente cómo trabajas, y montamos el sistema de reseñas para que las urgencias resueltas se conviertan en la prueba social que convence al siguiente cliente con prisa.",
        ],
      },
    ],
  },
  {
    id: "reformas-electricas-barcelona-como-captar-clientes-obra",
    photo: photos.electricistaCuadro,
    title: "Reformas eléctricas en Barcelona: cómo captar instalaciones, no solo averías",
    metaDescription:
      "Cómo un electricista en Barcelona puede pasar de vivir solo de averías a captar también cambios de cuadro completos, adaptaciones a normativa y puntos de recarga, con más margen por trabajo.",
    excerpt:
      "Una avería te paga el día. Un cambio de cuadro completo o una instalación nueva te paga el mes. Son clientes distintos y se captan de forma distinta.",
    summary:
      "Para captar clientes de obra eléctrica (no solo averías), un electricista necesita mostrar ese tipo de trabajo de forma explícita: fotos de antes y después en su ficha de Google, servicios concretos añadidos (cambio de cuadro, adaptación a normativa REBT, puntos de recarga), y presencia donde busca ese cliente concreto, que suele buscar con más antelación y comparando presupuestos, a diferencia del cliente de urgencia que decide en minutos.",
    publishedAt: "2026-10-10",
    updatedAt: "2026-10-10",
    category: "Conseguir clientes",
    trade: "electricidad",
    content: [
      {
        heading: "Dos clientes muy distintos",
        paragraphs: [
          "El cliente de una avería decide en minutos y paga un trabajo puntual. El cliente de una reforma eléctrica se lo piensa durante semanas, pide dos o tres presupuestos y paga un importe muy superior por todo el proyecto: cambiar un cuadro antiguo, adaptar una instalación de aluminio a normativa actual, instalar un punto de recarga. Si tu ficha de Google solo habla de reparaciones urgentes, ese segundo cliente ni te tiene en el radar.",
        ],
      },
      {
        heading: "1. Que se vea que también haces instalaciones",
        paragraphs: [
          "Si en tu ficha de Google solo hay fotos de averías puntuales, nadie va a pensar en ti para renovar un cuadro entero. Sube fotos de antes y después de las instalaciones que ya has hecho, aunque sean pocas: es la prueba que busca este tipo de cliente.",
        ],
      },
      {
        heading: "2. Añade el servicio explícitamente",
        paragraphs: [
          "En los servicios de tu ficha de Google, además de «reparación de averías», añade específicamente «cambio de cuadro eléctrico», «adaptación a normativa» o «instalación de punto de recarga». Son búsquedas distintas y Google necesita que se lo digas para enseñarte en esos resultados.",
        ],
      },
      {
        heading: "3. Este cliente compara más, así que las reseñas pesan doble",
        paragraphs: [
          "Como decide con más calma, un cliente de reforma sí que va a leer varias reseñas antes de llamarte. Reseñas que mencionen cumplimiento de plazos, orden en la obra y que el boletín se entregó sin retrasos son las que más convencen en este tipo de trabajo.",
        ],
      },
      {
        heading: "4. Un presupuesto claro cierra más que uno barato",
        paragraphs: [
          "En una instalación, el cliente teme más los extras sorpresa que el precio en sí. Un presupuesto detallado por escrito (materiales, mano de obra, boletín incluido o aparte, plazos) transmite más confianza que competir solo por ser el más barato.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "Trabajamos tu ficha de Google y tu web para que muestren también este tipo de trabajo, con las fotos y las palabras que busca quien está pensando en una instalación, no solo quien tiene una avería ahora mismo.",
        ],
      },
    ],
  },
  {
    id: "ficha-google-competencia-electricista-que-mirar",
    photo: photos.electricistaEnchufes,
    title: "Qué mirar en la ficha de Google de tu competencia (electricista)",
    metaDescription:
      "Cómo un electricista en Barcelona puede analizar la ficha de Google de otros electricistas de su zona para ver qué están haciendo mejor y qué se puede mejorar en la propia.",
    excerpt:
      "No hace falta adivinar qué funciona: los electricistas que más aparecen en tu zona ya te lo están enseñando, gratis, en su propia ficha de Google.",
    summary:
      "Mirar la ficha de Google de los electricistas que más aparecen en tu zona (buscando «electricista» desde tu barrio) revela rápidamente qué se puede mejorar en la tuya: cuántas reseñas tienen, qué servicios han añadido, qué fotos usan y con qué frecuencia publican novedades. No se trata de copiar el negocio de nadie, sino de detectar qué prácticas concretas les están funcionando para aparecer antes que tú.",
    publishedAt: "2026-10-11",
    updatedAt: "2026-10-11",
    category: "Google y SEO",
    trade: "electricidad",
    content: [
      {
        heading: "Antes de trabajar tu ficha, mira las que ya funcionan",
        paragraphs: [
          "Busca «electricista» desde el móvil, con la ubicación activada, en tu propio barrio. Los dos o tres primeros que aparecen en el mapa no están ahí por suerte: algo en su ficha de Google está funcionando mejor que en la del resto.",
        ],
      },
      {
        heading: "Qué mirar exactamente",
        paragraphs: [],
        list: [
          "Número de reseñas y nota media: ¿cuántas tienen y cada cuánto reciben una nueva?",
          "Servicios añadidos: ¿solo «Electricista» o también «Boletín eléctrico», «Domótica», «Puntos de recarga»?",
          "Fotos: ¿reales de sus cuadros e instalaciones o genéricas de internet?",
          "Respuestas a reseñas: ¿contestan a todas, incluidas las negativas, o dejan la ficha muda?",
          "Publicaciones recientes: ¿suben novedades cada pocas semanas o la ficha lleva meses sin actividad?",
        ],
      },
      {
        heading: "Lo que no debes copiar",
        paragraphs: [
          "No tiene sentido copiar literalmente su descripción o sus fotos. Lo que sí puedes «copiar» es la estrategia: si ellos tienen 40 reseñas y tú 4, el aprendizaje no es imitar sus palabras, es empezar a pedir reseñas tú también, de forma sistemática.",
        ],
      },
      {
        heading: "Hazlo también con búsquedas específicas",
        paragraphs: [
          "Repite el ejercicio con búsquedas más concretas: «electricista urgente [tu barrio]», «boletín eléctrico [tu barrio]». A veces quien gana en «electricista» general no es el mismo que gana en estas búsquedas más específicas, y ahí puede haber una oportunidad más fácil de conseguir.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "En el asesoramiento gratuito hacemos este análisis de competencia por ti: te decimos exactamente qué están haciendo mejor los electricistas que más aparecen en tu zona y qué es lo primero que deberías cambiar en tu ficha.",
        ],
      },
    ],
  },
  {
    id: "presupuesto-whatsapp-cierra-mas-trabajos-electricista",
    photo: photos.electricistaLuzTecho,
    title: "Por qué un presupuesto por WhatsApp cierra más trabajos que una llamada (electricista)",
    metaDescription:
      "Por qué mandar el presupuesto por WhatsApp, con foto y precio claro, convierte más contactos en trabajos reales que decirlo por teléfono. Cómo hacerlo bien como electricista.",
    excerpt:
      "Por teléfono, un precio se olvida en cinco minutos. Por WhatsApp, se queda ahí, se puede releer y enseñar a la pareja antes de decidir.",
    summary:
      "Un presupuesto enviado por WhatsApp, por escrito y con foto del cuadro o la instalación, convierte más contactos en clientes reales que uno dado solo de palabra por teléfono: queda registrado, deja claro si el boletín está incluido o aparte, y evita malentendidos sobre qué material se usa. Para un electricista, es un cambio sencillo con impacto directo en cuántos presupuestos se acaban aceptando.",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    category: "Conseguir clientes",
    trade: "electricidad",
    content: [
      {
        heading: "Un precio dicho se olvida; un precio escrito se queda",
        paragraphs: [
          "Cuando das un precio por teléfono, el cliente lo retiene unos minutos y ya está. Un presupuesto por WhatsApp, en cambio, se queda ahí: se puede releer, reenviar, consultar dos días después. Eso, por sí solo, ya hace que más gente acabe diciendo que sí.",
        ],
      },
      {
        heading: "Qué debe llevar un buen presupuesto por WhatsApp",
        paragraphs: [],
        list: [
          "El precio claro, sin «depende» si ya has visto el problema (con foto o en persona).",
          "Qué incluye exactamente: material (diferencial, magnetotérmicos), mano de obra, boletín incluido o aparte.",
          "Una foto del cuadro o la avería, si es posible: genera más confianza que solo texto.",
          "El plazo: cuándo podrías hacerlo, no dejarlo en el aire.",
        ],
      },
      {
        heading: "Evita el problema de los extras sorpresa",
        paragraphs: [
          "Uno de los motivos por los que un cliente no cierra, o cierra y luego se queja, es no tener claro si el boletín o los materiales estaban incluidos. Ponerlo por escrito, aunque sea en dos líneas de WhatsApp, evita esa discusión antes de que empiece.",
        ],
      },
      {
        heading: "Un mensaje tipo para empezar",
        paragraphs: [
          "«Hola [nombre], según lo que me has contado/mandado en la foto, sería [trabajo] por [precio], incluye [material y boletín si aplica]. Podría hacerlo [día/franja]. Cualquier duda me dices.»",
        ],
      },
      {
        heading: `Cómo lo trabajamos en ${brand}`,
        paragraphs: [
          "Parte de montar tu sistema de CRM y seguimiento de clientes es justo esto: tener plantillas de WhatsApp listas para presupuestar rápido y bien.",
        ],
      },
    ],
  },
  {
    id: "electricista-anunciarse-toda-barcelona-o-solo-tu-zona",
    photo: photos.electricistaCasco,
    title: "¿Conviene anunciarte en toda Barcelona o solo en tu zona? (electricista)",
    metaDescription:
      "Si eres electricista autónomo, anunciarte en toda Barcelona puede salir más caro y traer menos resultado que acotar tus anuncios y tu ficha de Google a tu zona real de trabajo.",
    excerpt:
      "Anunciarte en toda la ciudad suena a más oportunidades. En la práctica, suele significar pagar más por clientes que están demasiado lejos.",
    summary:
      "Para la mayoría de electricistas autónomos en Barcelona compensa acotar sus anuncios y su ficha de Google a la zona donde de verdad pueden llegar rápido, en vez de anunciarse en toda la ciudad: cuesta menos por contacto, compite con menos empresas grandes de mantenimiento y evita desplazamientos largos que no compensan para trabajos pequeños.",
    publishedAt: "2026-10-13",
    updatedAt: "2026-10-13",
    category: "Publicidad",
    trade: "electricidad",
    content: [
      {
        heading: "«Cuanto más grande, mejor» no siempre es verdad",
        paragraphs: [
          "Parece lógico pensar que anunciarte en toda Barcelona te da más oportunidades que hacerlo solo en tu barrio. En la práctica, para un autónomo que trabaja solo o con un ayudante, suele pasar lo contrario: acabas compitiendo por palabras muy caras contra empresas grandes de mantenimiento, y cuando te llaman, es desde zonas a las que tardas cuarenta minutos en llegar.",
        ],
      },
      {
        heading: "Lo que pasa si te anuncias en toda la ciudad",
        paragraphs: [],
        list: [
          "Pagas el mismo precio por clic que empresas grandes con más margen para pujar alto.",
          "Recibes avisos de zonas donde tardas demasiado en llegar, sobre todo si es una urgencia.",
          "Tu ficha de Google compite con muchas más fichas a la vez.",
          "Es más difícil generar reseñas de vecinos que se conocen entre sí y se recomiendan.",
        ],
      },
      {
        heading: "Lo que gana quien se acota a su zona",
        paragraphs: [
          "Al limitar tus anuncios y tu ficha a tu barrio y los colindantes, compites con menos negocios, el coste por contacto suele bajar, y puedes llegar de verdad rápido cuando hace falta.",
        ],
      },
      {
        heading: "Cuándo sí tiene sentido ampliar",
        paragraphs: [
          "Si ya tienes equipo o te especializas en algo puntual que poca gente ofrece (por ejemplo, puntos de recarga o domótica), ampliar la zona puede compensar. Para el resto, empezar acotado y crecer poco a poco suele dar mejor resultado.",
        ],
      },
      {
        heading: `Cómo lo trabajamos en ${brand}`,
        paragraphs: [
          "Cuando gestionamos tus anuncios y tu ficha de Google, empezamos siempre acotando la zona a lo que de verdad puedes atender bien, y la vamos ajustando según los resultados reales.",
        ],
      },
    ],
  },
  {
    id: "por-que-un-cliente-elige-a-un-electricista-y-no-a-otro",
    photo: photos.electricistaPlafon,
    title: "Por qué un cliente te elige a ti y no a otro electricista (no es el precio)",
    metaDescription:
      "Qué hace que alguien elija a un electricista en vez de otro en Barcelona cuando hay varios con precios parecidos: confianza, rapidez de respuesta y lo que se ve antes de llamar.",
    excerpt:
      "Cuando dos presupuestos son parecidos, el precio deja de decidir. Lo que decide es lo que el cliente vio de ti antes de coger el teléfono.",
    summary:
      "Cuando varios electricistas tienen precios similares, lo que hace que un cliente elija a uno y no a otro suele ser: quién responde antes, quién genera más confianza a través de sus reseñas y fotos, y quién explica con más claridad qué va a hacer y si el boletín está incluido. El precio importa, pero deja de ser el factor decisivo en cuanto hay varias opciones parecidas.",
    publishedAt: "2026-10-14",
    updatedAt: "2026-10-14",
    category: "Tu negocio",
    trade: "electricidad",
    content: [
      {
        heading: "El precio decide menos de lo que se piensa",
        paragraphs: [
          "Muchos electricistas dan por hecho que, si no consiguen un trabajo, es porque cobraban más caro que otro. A veces es así, pero muchas otras veces el precio era parecido y lo que decidió fue otra cosa: quién respondió antes, quién parecía más de fiar, quién explicó mejor qué iba a hacer.",
        ],
      },
      {
        heading: "1. Quién responde primero",
        paragraphs: [
          "Cuando alguien pide presupuesto a dos o tres electricistas a la vez, el primero que contesta con una respuesta clara arranca con ventaja, incluso antes de hablar de precio.",
        ],
      },
      {
        heading: "2. Lo que se ve antes de llamar",
        paragraphs: [
          "Antes de coger el teléfono, el cliente ya se ha hecho una idea de ti a través de tu ficha de Google: tus reseñas, tus fotos de cuadros e instalaciones, si pareces un negocio serio o uno improvisado.",
        ],
      },
      {
        heading: "3. Cómo explicas lo que vas a hacer",
        paragraphs: [
          "Un presupuesto que solo dice «250 €» genera más dudas que uno que dice «250 €: cambio del diferencial, comprobación del cuadro y boletín incluido». No es cuestión de escribir más, es explicar lo suficiente para que el cliente entienda qué está pagando.",
        ],
      },
      {
        heading: "Lo que puedes trabajar esta semana",
        paragraphs: [],
        list: [
          "Revisa cuánto tardas de media en responder a un presupuesto pedido.",
          "Mira tu ficha de Google como si fueras un cliente que no te conoce.",
          "La próxima vez que mandes un presupuesto, aclara si el boletín está incluido.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "Trabajamos la parte que el cliente ve antes de llamarte —tu ficha de Google, tus reseñas, tu web si tienes— para que esa primera impresión juegue a tu favor.",
        ],
      },
    ],
  },
  {
    id: "temporada-alta-baja-electricista-barcelona-como-no-depender",
    photo: photos.electricistaCuadro,
    title: "Temporada alta y baja para electricistas: cómo no depender solo de las urgencias",
    metaDescription:
      "Cómo suaviza un electricista en Barcelona los meses flojos combinando avisos de urgencia con boletines, reformas e instalaciones, en vez de depender solo de que haya averías.",
    excerpt:
      "Si tu agenda depende de que salte un diferencial, tu agenda no depende de ti. Hay formas de que no sea así.",
    summary:
      "Un electricista que depende solo de avisos de avería tiene una agenda que sube y baja según la suerte. Combinar ese tipo de aviso con trabajos que se pueden planificar (boletines de comunidades, cambios de cuadro, instalación de puntos de recarga, reformas eléctricas) da una base de ingresos más estable, porque esos trabajos se pueden captar y programar con antelación.",
    publishedAt: "2026-10-15",
    updatedAt: "2026-10-15",
    category: "Tu negocio",
    trade: "electricidad",
    content: [
      {
        heading: "Vivir de que salte un diferencial es vivir sin control",
        paragraphs: [
          "Si el negocio depende solo de averías, no hay forma de planificar: unos meses hay muchos avisos (por ejemplo con las subidas de potencia del aire acondicionado en verano), otros casi ninguno. La avería es un canal real y rentable, pero no debería ser el único.",
        ],
      },
      {
        heading: "Trabajos que sí se pueden planificar",
        paragraphs: [],
        list: [
          "Boletines eléctricos de comunidades: se agendan con antelación y son recurrentes.",
          "Cambios de cuadro completos: se deciden con semanas de margen.",
          "Puntos de recarga de coche eléctrico: una demanda creciente que se planifica, no una urgencia.",
          "Reformas eléctricas de vivienda: se agendan junto con la obra general.",
        ],
      },
      {
        heading: "Por qué esto suaviza los meses flojos",
        paragraphs: [
          "A diferencia de una avería, un boletín o una instalación se agenda con semanas de margen. Tener un par de estos trabajos ya cerrados te da una base de ingresos que no depende de que ese mes haya suerte con las urgencias.",
        ],
      },
      {
        heading: "No hace falta elegir uno u otro",
        paragraphs: [
          "No se trata de dejar de atender urgencias, sino de no depender solo de ellas. Las urgencias siguen siendo un canal válido; lo que cambia es que dejan de ser tu única fuente de ingresos.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "En el asesoramiento gratuito miramos cómo está repartida hoy tu agenda entre avería y trabajo planificable, y te ayudamos a mostrar en tu ficha de Google también ese segundo tipo de trabajo.",
        ],
      },
    ],
  },
  {
    id: "boletin-electrico-cie-via-de-clientes-electricista-barcelona",
    photo: photos.electricistaEnchufes,
    title: "El boletín eléctrico (CIE): una vía de clientes que muchos electricistas no explotan",
    metaDescription:
      "Quién necesita un boletín eléctrico (CIE) en Barcelona (venta de piso, alquiler, cambio de potencia, seguro) y cómo un electricista puede captar este tipo de aviso de forma recurrente.",
    excerpt:
      "No solo lo pide quien reforma. Lo pide quien vende, quien alquila y quien cambia de compañía. Y casi ningún electricista lo pone como servicio explícito.",
    summary:
      "El boletín eléctrico o CIE (certificado de instalación eléctrica) no lo piden solo quienes reforman: también lo necesita quien vende o alquila un piso, quien sube la potencia contratada o quien lo exige su seguro o su compañía eléctrica. Es un trabajo rápido y bien pagado que muchos electricistas no muestran como servicio propio en su ficha de Google, perdiendo avisos de gente que ya sabe exactamente lo que necesita y solo busca «boletín eléctrico Barcelona».",
    publishedAt: "2026-10-16",
    updatedAt: "2026-10-16",
    category: "Conseguir clientes",
    trade: "electricidad",
    content: [
      {
        heading: "Un trabajo que casi nadie anuncia como tal",
        paragraphs: [
          "La mayoría de electricistas hace boletines como parte de otro trabajo (una reforma, un cambio de cuadro), pero pocos lo ponen como servicio independiente y buscable en su ficha de Google. Eso significa perder a todo el que busca directamente «boletín eléctrico» sin necesitar ninguna otra obra.",
        ],
      },
      {
        heading: "Quién necesita un boletín sin estar reformando nada",
        paragraphs: [],
        list: [
          "Quien vende un piso: muchas notarías y compradores lo piden para cerrar la operación.",
          "Quien alquila: cada vez más agencias inmobiliarias lo exigen antes de publicar el anuncio.",
          "Quien sube la potencia contratada: la compañía eléctrica pide el boletín actualizado.",
          "Quien renueva el seguro del hogar: algunas aseguradoras lo solicitan en instalaciones antiguas.",
        ],
      },
      {
        heading: "Cómo captar este tipo de aviso",
        paragraphs: [
          "Añade «boletín eléctrico» o «certificado de instalación eléctrica (CIE)» como servicio explícito en tu ficha de Google, con una frase que diga para qué sirve (venta, alquiler, cambio de potencia). Es exactamente lo que alguien escribe en Google cuando ya sabe qué necesita y solo busca quién se lo haga.",
        ],
      },
      {
        heading: "Inmobiliarias y gestorías: una fuente recurrente",
        paragraphs: [
          "Las inmobiliarias y administradores de fincas gestionan boletines constantemente para sus operaciones. Presentarte a dos o tres agencias de tu zona como el electricista de referencia para boletines rápidos puede convertirse en un goteo constante de avisos cortos y bien pagados.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "Añadimos este tipo de servicios concretos a tu ficha de Google y a tu web, para que no dependa solo de que alguien te lo pida sabiendo que tú también lo haces.",
        ],
      },
    ],
  },
  {
    id: "instagram-no-trae-clientes-fontanero-electricista-que-hacer",
    photo: photos.fontaneroCajaHerramientas,
    title: "Por qué tu Instagram no te trae clientes (y qué sí funciona)",
    metaDescription:
      "Por qué tener seguidores en Instagram no se traduce en avisos para un fontanero o electricista en Barcelona, y qué papel real puede cumplir esa red en tu captación de clientes.",
    excerpt:
      "Cuando alguien tiene una fuga o se le va la luz, no abre Instagram: abre Google. Eso no significa que Instagram no sirva, significa que sirve para otra cosa.",
    summary:
      "Instagram casi nunca es el canal donde un cliente descubre que necesita un fontanero o electricista: ese descubrimiento pasa por Google, en el momento del problema. Donde sí aporta es después, como refuerzo de confianza (alguien que ya te encontró en Google entra a tu perfil para ver más trabajos) y como escaparate de tu trabajo con fotos y vídeos reales. Publicar solo por publicar, sin enlazar a tu ficha de Google, no genera avisos por sí solo.",
    publishedAt: "2026-10-17",
    updatedAt: "2026-10-17",
    category: "Redes sociales",
    content: [
      {
        heading: "El malentendido más habitual",
        paragraphs: [
          "Muchos profesionales piensan que si consiguen más seguidores en Instagram, les van a llegar más avisos. Rara vez funciona así en un oficio como fontanería o electricidad: nadie hace scroll en Instagram cuando tiene una fuga a las once de la noche. En ese momento, abre Google y busca «fontanero cerca de mí».",
        ],
      },
      {
        heading: "Entonces, ¿para qué sirve Instagram?",
        paragraphs: [
          "Para lo que pasa después de encontrarte: alguien te encuentra en el mapa de Google, entra a tu ficha, y a veces también busca tu perfil para ver más fotos o vídeos de trabajos antes de decidir. Ahí es donde Instagram aporta, como refuerzo de confianza, no como punto de partida.",
        ],
      },
      {
        heading: "Qué sí funciona en Instagram para un oficio",
        paragraphs: [],
        list: [
          "Vídeos cortos de trabajos reales, de antes y después: son el contenido que más se entiende sin necesidad de leer nada.",
          "Enlazar siempre tu ficha de Google o tu WhatsApp en la biografía: sin ese enlace, un interesado no sabe cómo contactarte.",
          "Etiquetar la ubicación en Barcelona o tu barrio: ayuda a que te encuentre quien busca justo ahí.",
          "Publicar con constancia moderada (una o dos veces por semana) antes que perseguir viralidad.",
        ],
      },
      {
        heading: "Lo que no vale la pena perseguir",
        paragraphs: [
          "Comprar seguidores o interacción falsa no genera ni un aviso real, y a veces incluso resta credibilidad si se nota. El objetivo no es tener muchos seguidores: es que quien ya te está considerando vea trabajo real y decida con más confianza.",
        ],
      },
      {
        heading: `Cómo lo enfocamos en ${brand}`,
        paragraphs: [
          "Priorizamos siempre tu ficha de Google y tu web, que son donde de verdad se decide un cliente, y usamos Instagram como escaparate que refuerza esa decisión, no como sustituto.",
        ],
      },
    ],
  },
  {
    id: "meta-ads-fontaneros-electricistas-cuando-compensa",
    photo: photos.electricistaLuzTecho,
    title: "Facebook e Instagram Ads para fontaneros y electricistas: cuándo compensan",
    metaDescription:
      "Diferencia entre Google Ads y Meta Ads (Facebook e Instagram) para fontaneros y electricistas en Barcelona: qué tipo de trabajo capta cada uno y cuándo tiene sentido invertir en Meta.",
    excerpt:
      "Google Ads capta a quien ya busca un problema. Meta Ads interrumpe a alguien que no estaba buscando nada. Son herramientas distintas para momentos distintos.",
    summary:
      "Google Ads funciona porque capta a alguien que ya está buscando activamente un fontanero o electricista en ese momento. Meta Ads (Facebook e Instagram) interrumpe a alguien que no estaba buscando nada, así que rinde peor para urgencias y mejor para trabajos que se pueden planificar (reformas, instalaciones, mantenimiento de comunidades), donde plantar la idea con tiempo sí puede convertir semanas después.",
    publishedAt: "2026-10-18",
    updatedAt: "2026-10-18",
    category: "Publicidad",
    content: [
      {
        heading: "Dos lógicas distintas",
        paragraphs: [
          "En Google Ads, el anuncio aparece cuando alguien ya escribió «fontanero urgente Gràcia»: hay una necesidad ya activa. En Meta Ads, el anuncio aparece mientras alguien mira fotos de amigos, sin que esté buscando nada relacionado con fontanería o electricidad en ese momento. Por eso Meta funciona mucho peor para captar una urgencia y mucho mejor para plantar una idea que se decide con calma.",
        ],
      },
      {
        heading: "Dónde sí puede compensar Meta Ads",
        paragraphs: [],
        list: [
          "Reformas de baño o instalaciones eléctricas completas: decisiones que se piensan durante semanas.",
          "Ofertas de temporada dirigidas a un barrio concreto (por ejemplo, revisión de instalación antes del invierno).",
          "Mantenimiento de comunidades: contenido dirigido a administradores de fincas de tu zona.",
        ],
      },
      {
        heading: "Dónde casi nunca compensa",
        paragraphs: [
          "Para urgencias (fugas, cortes de luz) casi no tiene sentido: nadie decide contratar una urgencia a partir de un anuncio que vio ayer en Instagram. Ese cliente busca en Google en el momento exacto del problema.",
        ],
      },
      {
        heading: "Qué formato funciona mejor",
        paragraphs: [
          "Un vídeo corto de un antes y después real convierte mejor que una foto con texto. Los formularios instantáneos (que se rellenan sin salir de la app) generan más leads que enviar a una web lenta, aunque conviene revisar la calidad de esos contactos, no solo la cantidad.",
        ],
      },
      {
        heading: `Cómo lo hacemos en ${brand}`,
        paragraphs: [
          "Recomendamos Meta Ads solo cuando ya tienes cubierta la captación de urgencias por Google, y como complemento para el tipo de trabajo que se decide con más calma: reformas, instalaciones y comunidades.",
        ],
      },
    ],
  },
  {
    id: "coste-no-responder-rapido-llamadas-perdidas-fontanero-electricista",
    photo: photos.fontaneroGrifo,
    title: "El coste de no responder rápido: lo que pierdes por cada llamada perdida",
    metaDescription:
      "Por qué cada llamada que no coges como fontanero o electricista en Barcelona no vuelve a intentarlo: casi siempre acaba llamando al siguiente resultado en Google.",
    excerpt:
      "Quien te llama y no le coges, no suele insistir. Cuelga y llama al siguiente nombre que ve en el mapa de Google.",
    summary:
      "Cuando alguien busca un fontanero o electricista en Google y llama, casi siempre tiene dos o tres opciones más a un clic de distancia. Si no coges esa llamada y no la devuelves rápido, lo habitual no es que espere: es que llame al siguiente de la lista. Cada llamada perdida sin seguimiento es, con mucha probabilidad, un cliente que ya está hablando con otro profesional en ese mismo momento.",
    publishedAt: "2026-10-19",
    updatedAt: "2026-10-19",
    category: "Tu negocio",
    content: [
      {
        heading: "Quien busca en Google tiene alternativas a un clic",
        paragraphs: [
          "A diferencia de un cliente que te conoce y te pide explícitamente a ti, quien busca «fontanero cerca de mí» o «electricista urgente» ve un mapa con varios negocios. Si no le coges el teléfono, no tiene que esforzarse para buscar otra opción: la tiene justo debajo, en el mismo resultado de Google.",
        ],
      },
      {
        heading: "Por qué casi nadie deja mensaje ni vuelve a llamar",
        paragraphs: [
          "Con una urgencia (una fuga, un corte de luz), esperar no es una opción cómoda. La reacción más común ante una llamada sin respuesta es colgar y marcar el siguiente número, no dejar un mensaje de voz y esperar a que le devuelvas la llamada horas después.",
        ],
      },
      {
        heading: "Qué hacer si de verdad no puedes coger el teléfono",
        paragraphs: [],
        list: [
          "Activa un mensaje automático de WhatsApp Business con un tiempo de respuesta realista («Te devuelvo la llamada en menos de 30 minutos»).",
          "Revisa las llamadas perdidas al menos dos veces al día, no solo cuando puedas atender.",
          "Si trabajas con alguien más, define quién responde cuando el otro no puede.",
          "Considera un desvío de llamadas a otro número en tus horas de mayor volumen.",
        ],
      },
      {
        heading: "Antes de invertir en más anuncios, revisa esto",
        paragraphs: [
          "Es habitual pensar que hacen falta más anuncios o más presencia en Google cuando el problema real es que llegan avisos y no se responden a tiempo. Antes de gastar más en captación, merece la pena revisar cuántas llamadas se están perdiendo hoy sin devolver.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "Dentro del CRM que montamos como parte del servicio, dejamos un sistema para que ninguna llamada o mensaje se quede sin seguimiento, aunque no lo hayas podido coger en el momento.",
        ],
      },
    ],
  },
  {
    id: "formulario-contacto-web-no-genera-leads-fontanero-electricista",
    photo: photos.fontaneroInstalacionBano,
    title: "Formularios de contacto en tu web: por qué la mayoría no genera ni un lead",
    metaDescription:
      "Errores habituales en los formularios de contacto de webs de fontaneros y electricistas en Barcelona, y qué cambiar para que de verdad generen llamadas y mensajes.",
    excerpt:
      "Un formulario con demasiados campos y sin el teléfono a la vista no capta clientes: los espanta antes de que lo rellenen.",
    summary:
      "La mayoría de formularios de contacto en webs de oficios fallan por lo mismo: piden demasiados campos, no muestran el teléfono ni el WhatsApp de forma visible, y usan un texto genérico («contacta con nosotros») que no da ninguna razón para escribir ahora. Un formulario que convierte pide solo lo imprescindible, deja el teléfono siempre visible y explica en una frase qué va a pasar después de enviarlo.",
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    category: "Google y SEO",
    content: [
      {
        heading: "El formulario no es el canal principal, es la red de seguridad",
        paragraphs: [
          "Para una urgencia, casi nadie rellena un formulario: llama directamente. El formulario capta a quien prefiere escribir, a quien busca fuera de tu horario, o a quien está comparando presupuestos con calma. Por eso tiene que estar pensado para esos casos, no copiado de una plantilla genérica.",
        ],
      },
      {
        heading: "Los errores más habituales",
        paragraphs: [],
        list: [
          "Pedir demasiados campos (dirección completa, cómo nos conociste, mensaje largo obligatorio) antes de saber si va a ser un cliente.",
          "Esconder el teléfono y el WhatsApp, obligando a rellenar el formulario aunque el visitante prefiera llamar.",
          "Un botón genérico («Enviar») sin ninguna indicación de qué pasa después.",
          "Ninguna confirmación clara tras enviarlo, así que el visitante no sabe si ha funcionado.",
        ],
      },
      {
        heading: "Qué debería llevar un formulario que sí convierte",
        paragraphs: [
          "Pocos campos (nombre, teléfono, qué necesitas), el teléfono y el WhatsApp visibles por encima del formulario para quien prefiera esa vía, y un mensaje de confirmación con plazo real: «Te contestamos en menos de dos horas en horario laboral».",
        ],
      },
      {
        heading: "El teléfono siempre gana la primera opción",
        paragraphs: [
          "En un oficio como fontanería o electricidad, buena parte del tráfico móvil prefiere pulsar para llamar antes que escribir. Un formulario nunca debería ser la única forma de contacto de la página: siempre debe convivir con un botón de llamada y de WhatsApp visibles.",
        ],
      },
      {
        heading: `Cómo lo hacemos en ${brand}`,
        paragraphs: [
          "Cuando construimos tu landing page, el formulario es siempre lo segundo, nunca lo único: el teléfono y el WhatsApp van primero, y el formulario se queda con los campos justos para no perder a nadie por el camino.",
        ],
      },
    ],
  },
  {
    id: "que-preguntar-primera-llamada-fontanero-electricista-barcelona",
    photo: photos.fontaneroCajaHerramientas,
    title: "Qué preguntar en la primera llamada para no perder tiempo con presupuestos que no cierran",
    metaDescription:
      "Preguntas clave que un fontanero o electricista en Barcelona puede hacer en la primera llamada para priorizar los avisos que de verdad van a convertirse en trabajo.",
    excerpt:
      "No todos los avisos valen lo mismo. Unas preguntas concretas al principio evitan perder horas en presupuestos que ya sabías, en el fondo, que no iban a cerrar.",
    summary:
      "No todos los contactos que llegan tienen la misma probabilidad de convertirse en trabajo real: algunos ya han decidido contratar y solo comparan precio final, otros están pidiendo cinco presupuestos por costumbre sin intención real de avanzar pronto. Unas pocas preguntas en la primera llamada (urgencia real, si ya tienen otro profesional mirando el caso, plazo con el que cuentan) ayudan a priorizar el tiempo hacia los avisos que de verdad van a cerrar.",
    publishedAt: "2026-10-21",
    updatedAt: "2026-10-21",
    category: "Conseguir clientes",
    content: [
      {
        heading: "No todos los avisos merecen el mismo tiempo",
        paragraphs: [
          "Es habitual pasar la misma media hora preparando un presupuesto detallado para alguien con una urgencia real que para alguien que está pidiendo precio a cinco profesionales sin ninguna prisa por decidir. Ese tiempo no vale lo mismo en los dos casos, y unas pocas preguntas al principio ayudan a saber dónde merece la pena invertirlo.",
        ],
      },
      {
        heading: "Preguntas que ayudan a priorizar",
        paragraphs: [],
        list: [
          "«¿Es algo urgente o lo estás planificando para las próximas semanas?»: separa una urgencia real de una consulta con calma.",
          "«¿Ya has hablado con algún otro profesional?»: si ya tiene tres presupuestos, quizás solo falta el tuyo para comparar, y conviene ser directo con el precio.",
          "«¿Para cuándo necesitarías que estuviera hecho?»: si el plazo no encaja con tu agenda, mejor saberlo antes de invertir tiempo en el presupuesto.",
          "«¿Sabes más o menos qué presupuesto tenías en mente?»: evita preparar una propuesta muy por encima de lo que la persona está dispuesta a pagar.",
        ],
      },
      {
        heading: "No es para descartar clientes, es para no perder tiempo",
        paragraphs: [
          "El objetivo no es rechazar a nadie: es saber si conviene mandar un presupuesto rápido por WhatsApp o si merece la pena una visita para valorarlo con calma. Un aviso urgente y claro se responde en minutos; una consulta genérica sin prisa puede esperar a un hueco tranquilo del día.",
        ],
      },
      {
        heading: "El error de tratar todos los avisos igual",
        paragraphs: [
          "Sin estas preguntas, es fácil acabar dedicando horas a presupuestos detallados que nunca se van a cerrar, mientras un aviso urgente y real espera más de lo que debería. Priorizar no es cuestión de suerte, es cuestión de preguntar lo justo al principio.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "En el CRM que montamos como parte del servicio, dejamos un campo simple para marcar la urgencia y el plazo de cada contacto, para que se vea de un vistazo a quién responder primero.",
        ],
      },
    ],
  },
  {
    id: "crm-sencillo-no-perder-clientes-fontanero-electricista",
    photo: photos.electricistaCuadro,
    title: "Cómo un CRM sencillo evita que se te escape un cliente",
    metaDescription:
      "Qué es en la práctica un CRM sencillo para un fontanero o electricista autónomo en Barcelona, sin complicarse con software de empresa grande, y qué problema resuelve de verdad.",
    excerpt:
      "No es un software complicado de empresa grande. Es, simplemente, no perder de vista quién te escribió y qué le respondiste.",
    summary:
      "Para un fontanero o electricista autónomo, un CRM no tiene que ser un programa complejo: puede ser tan simple como una lista con cada contacto, cuándo escribió, qué presupuesto se le mandó y si hay que hacer seguimiento. Lo que resuelve es un problema muy concreto: presupuestos que se envían y se olvidan, sin que nadie vuelva a escribir para preguntar «¿al final qué tal, seguimos adelante?», que es justo la pregunta que cierra muchos trabajos que de otro modo se pierden por pura falta de seguimiento.",
    publishedAt: "2026-10-22",
    updatedAt: "2026-10-22",
    category: "Tu negocio",
    content: [
      {
        heading: "El problema no suele ser conseguir contactos, es no perderlos",
        paragraphs: [
          "Muchos autónomos ya reciben avisos suficientes al mes, pero pierden trabajos por otra razón: mandan un presupuesto por WhatsApp y, si el cliente no responde enseguida, se olvida de él entre el resto de mensajes del día. Ese cliente, en muchos casos, sí estaba dispuesto a contratar, simplemente necesitaba que alguien retomara la conversación.",
        ],
      },
      {
        heading: "Qué es un CRM sencillo en la práctica",
        paragraphs: [
          "No hace falta un software de empresa grande. Puede ser una lista (en una hoja de cálculo o una herramienta sencilla) con cada contacto: nombre, qué necesitaba, qué presupuesto se le mandó, en qué fecha, y si sigue pendiente de respuesta. Lo importante no es la herramienta, es que exista y se revise.",
        ],
      },
      {
        heading: "La pregunta que cierra trabajos olvidados",
        paragraphs: [
          "Un simple «Hola [nombre], ¿al final qué tal, seguimos adelante con el presupuesto?» a los tres o cuatro días de mandarlo recupera una parte de los presupuestos que, de otro modo, se quedan sin respuesta para siempre. Muchas veces el cliente solo estaba esperando decidir con calma y agradece el recordatorio.",
        ],
      },
      {
        heading: "Qué automatizar y qué no",
        paragraphs: [
          "Recordatorios de seguimiento (a los 3, a los 7 días) sí conviene automatizarlos para no depender de acordarte. La conversación en sí, en cambio, siempre debería sonar personal, con el nombre y el trabajo concreto de esa persona, no un mensaje genérico que se nota que es plantilla.",
        ],
      },
      {
        heading: `Cómo lo montamos en ${brand}`,
        paragraphs: [
          "Como parte del servicio de marketing digital, dejamos montado este sistema de seguimiento para que ningún presupuesto se quede sin respuesta por simple olvido.",
        ],
      },
    ],
  },
  {
    id: "fidelizar-comunidades-vecinos-cliente-recurrente-fontanero-electricista",
    photo: photos.fontaneroFregadero,
    title: "Fidelizar comunidades de vecinos: el cliente que más rentabilidad da a largo plazo",
    metaDescription:
      "Por qué trabajar de forma recurrente con administradores de fincas y comunidades de vecinos en Barcelona da más estabilidad a un fontanero o electricista que solo captar particulares sueltos.",
    excerpt:
      "Un particular te llama una vez y quizás no vuelve en años. Una comunidad de vecinos te puede llamar varias veces al año, si eres su fontanero o electricista de confianza.",
    summary:
      "Un administrador de fincas gestiona muchas comunidades a la vez y necesita profesionales de confianza para avisos recurrentes: averías en zonas comunes, mantenimiento preventivo, boletines periódicos. Conseguir ser ese profesional de referencia para varias comunidades da una base de trabajo mucho más estable que depender solo de particulares sueltos que, en su mayoría, no vuelven a necesitarte en mucho tiempo.",
    publishedAt: "2026-10-23",
    updatedAt: "2026-10-23",
    category: "Conseguir clientes",
    content: [
      {
        heading: "Un particular y una comunidad no valen lo mismo a largo plazo",
        paragraphs: [
          "Un particular te llama por una avería puntual y, si todo va bien, puede que no vuelva a necesitarte en años. Una comunidad de vecinos, en cambio, tiene averías, revisiones y mantenimiento de forma constante: bajantes, montantes, cuadros generales, zonas comunes. Si te conviertes en su profesional de confianza, ese aviso se repite varias veces al año, no una sola vez.",
        ],
      },
      {
        heading: "Qué busca un administrador de fincas",
        paragraphs: [],
        list: [
          "Tiempo de respuesta claro: saber cuánto tardas en atender una avería en zona común.",
          "Facturación ordenada: presupuestos y facturas claras que pueda justificar ante la comunidad.",
          "Seguro de responsabilidad civil en regla: es habitual que lo pidan antes de trabajar contigo.",
          "Continuidad: prefieren un profesional fijo antes que buscar uno distinto cada vez.",
        ],
      },
      {
        heading: "Cómo dar el primer paso",
        paragraphs: [
          "No hace falta una gran presentación: una visita breve con una tarjeta, explicando qué haces, tu zona y tu tiempo de respuesta habitual, ya deja constancia. Muchos administradores solo cambian de profesional cuando el actual falla, así que estar en su lista para ese momento ya es un avance.",
        ],
      },
      {
        heading: "Por qué compensa el esfuerzo inicial",
        paragraphs: [
          "El primer contacto con un administrador de fincas no genera un trabajo inmediato, pero una comunidad fija puede convertirse en varios avisos al año durante mucho tiempo. Es una inversión de tiempo que rinde a medio plazo, no un canal de resultado instantáneo como un anuncio.",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "Te ayudamos a preparar el material (dossier, ficha de servicios) para presentarte a administradores de fincas de tu zona, además de tu ficha de Google y tus anuncios orientados a particulares.",
        ],
      },
    ],
  },
  {
    id: "diferenciar-negocio-fontanero-electricista-mas-alla-rapido-confianza",
    photo: photos.electricistaPlafon,
    title: "Cómo diferenciarte cuando todos dicen «servicio rápido y de confianza»",
    metaDescription:
      "Por qué frases como «servicio rápido y de confianza» no diferencian a un fontanero o electricista en Barcelona, y qué sí funciona para destacar frente a la competencia.",
    excerpt:
      "Si en tu ficha de Google pone lo mismo que en la de tus diez competidores, para el cliente eres exactamente igual que ellos.",
    summary:
      "Frases como «servicio rápido y de confianza» o «profesional y económico» no diferencian a nadie porque las usa prácticamente todo el sector: para el cliente, todos los negocios parecen iguales. Lo que sí diferencia es lo concreto: un tiempo de respuesta expresado en minutos y no en adjetivos, una especialización real, una garantía por escrito, o fotos y reseñas que muestran trabajos específicos en vez de afirmaciones genéricas sobre lo bueno que eres.",
    publishedAt: "2026-10-24",
    updatedAt: "2026-10-24",
    category: "Tu negocio",
    content: [
      {
        heading: "El problema de decir lo mismo que todos",
        paragraphs: [
          "Busca «fontanero» o «electricista» en tu zona y lee las descripciones de las fichas de Google: casi todas dicen algo parecido a «servicio rápido, profesional y de confianza». Si tu ficha dice exactamente lo mismo, no le estás dando al cliente ningún motivo real para elegirte a ti en vez de al de al lado.",
        ],
      },
      {
        heading: "Lo concreto diferencia; lo genérico no",
        paragraphs: [
          "«Rápido» no dice nada. «Respondemos en menos de 30 minutos en horario laboral» sí dice algo, porque es una promesa concreta que se puede cumplir o no. Lo mismo pasa con «de confianza» frente a «con reseñas verificadas de vecinos de tu barrio»: lo segundo se puede comprobar, lo primero es solo una palabra.",
        ],
      },
      {
        heading: "Formas reales de diferenciarte",
        paragraphs: [],
        list: [
          "Un tiempo de respuesta concreto, no un adjetivo: «te devolvemos la llamada en menos de 20 minutos».",
          "Una especialización clara: no ser «fontanero general» sino «especialista en reformas de baño» o «electricista especializado en puntos de recarga».",
          "Una garantía por escrito sobre el trabajo, con su duración exacta.",
          "Fotos de antes y después de trabajos concretos, no imágenes genéricas de herramientas.",
        ],
      },
      {
        heading: "No hace falta inventar nada",
        paragraphs: [
          "Diferenciarte no significa prometer algo que no vas a cumplir: significa contar con datos concretos lo que ya haces bien, en vez de resumirlo en un adjetivo que usa todo el mundo. Si ya respondes rápido, dilo con un número. Si ya tienes buenas reseñas, que se lean, no que se resuman en «de confianza».",
        ],
      },
      {
        heading: `Cómo te ayuda ${brand}`,
        paragraphs: [
          "En el asesoramiento gratuito te ayudamos a identificar qué haces mejor que tu competencia y a convertirlo en algo concreto y comprobable en tu ficha de Google y tu web, no en una frase que podría llevar cualquiera.",
        ],
      },
    ],
  },
];

export function getGuides(locale: Locale): Guide[] {
  return locale === "ca" ? guidesCa : guides;
}

export function guideUrl(locale: Locale, guide: Guide): string {
  return guidePath(locale, guide.id);
}

/** Busca una guía por la parte final de su URL en ese idioma. */
export function getGuideByUrl(locale: Locale, urlSlug: string): Guide | undefined {
  return getGuides(locale).find((guide) => (guideSlugs[guide.id]?.[locale] ?? guide.id) === urlSlug);
}

export function guideUrlSlug(locale: Locale, guide: Guide): string {
  return guideSlugs[guide.id]?.[locale] ?? guide.id;
}

export function sortedGuides(locale: Locale): Guide[] {
  return [...getGuides(locale)].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
