import { consumerRoutes, proRoutes } from "./navigation";
import type { Trade } from "./navigation";
import { photos } from "./photos";
import type { Photo } from "./photos";
import { siteConfig } from "./site-config";

export type Audience = "consumer" | "pro";

export type Guide = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  /** Respuesta directa de 2-4 frases al inicio del artículo: la parte que citan buscadores y asistentes de IA. */
  summary: string;
  publishedAt: string; // ISO date
  updatedAt: string;
  audience: Audience;
  category: "Fontanería" | "Electricidad" | "Consejos" | "Conseguir clientes" | "Google y SEO" | "Publicidad";
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
      "Guía práctica para fontaneros autónomos en Barcelona: ficha de Google, reseñas, anuncios, administradores de fincas y redes de clientes para dejar de depender del boca a boca.",
    excerpt:
      "El boca a boca funciona, pero no se puede escalar. Estas son las vías que de verdad traen clientes a un fontanero en Barcelona y el esfuerzo que pide cada una.",
    summary:
      "Un fontanero en Barcelona consigue clientes de forma estable combinando cuatro vías: una ficha de Google Business completa y con reseñas, anuncios de Google limitados a su zona y su horario, acuerdos con administradores de fincas y comercios, y una red que le pase avisos. La ficha de Google es la base: es gratis y es lo primero que ve quien busca «fontanero cerca de mí».",
    publishedAt: "2026-09-08",
    updatedAt: "2026-09-22",
    audience: "pro",
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
        heading: "5. Una red que te pase clientes",
        paragraphs: [
          `Si no tienes tiempo para el marketing, la opción más directa es unirte a una red que capte clientes por ti. En ${brand} te pasamos avisos de fontanería de tu zona y pagas comisión solo por los trabajos que cierras.`,
        ],
      },
      {
        heading: "Qué combinación elegir",
        paragraphs: [],
        list: [
          "Si estás empezando: ficha de Google, reseñas y una red de clientes.",
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
    audience: "pro",
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
          `En ${brand} optimizamos y gestionamos la ficha de Google de electricistas de Barcelona dentro de nuestro servicio de marketing. El diagnóstico inicial es gratis.`,
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
    audience: "pro",
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
        heading: "La alternativa: pagar solo por trabajo cerrado",
        paragraphs: [
          `Si no quieres arriesgar presupuesto en anuncios, puedes unirte a una red de clientes: en ${brand} asumimos nosotros la captación y tú pagas comisión solo por los trabajos que cierras. También puedes combinar ambas cosas.`,
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
    audience: "pro",
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
          "Ofrecemos los dos modelos que consideramos más sanos para el profesional: red de clientes a comisión y marketing a medida. Puedes empezar por uno y sumar el otro cuando quieras.",
        ],
      },
    ],
  },
  {
    slug: "como-pedir-resenas-google-clientes",
    photo: photos.cocinaModerna,
    title: "Cómo pedir reseñas en Google a tus clientes (con mensajes listos para copiar)",
    metaDescription:
      "Cuándo y cómo pedir reseñas en Google si eres fontanero o electricista. Mensajes de WhatsApp listos para copiar y errores que evitar.",
    excerpt:
      "Las reseñas deciden a quién llama el cliente. Te damos el momento, el enlace y el mensaje exacto para pedirlas sin resultar pesado.",
    summary:
      "La mejor forma de conseguir reseñas en Google es pedirlas justo al terminar el trabajo, por WhatsApp, con el enlace directo a tu ficha y un mensaje corto y personal. Pide que mencionen el tipo de trabajo y el barrio. No ofrezcas descuentos ni regalos a cambio: va contra las normas de Google.",
    publishedAt: "2026-09-19",
    updatedAt: "2026-09-22",
    audience: "pro",
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
          `En el servicio de marketing de ${brand} dejamos montado un sistema sencillo para pedir reseñas después de cada trabajo y responderlas, para que no dependa de que te acuerdes.`,
        ],
      },
    ],
  },
  {
    slug: "como-aparecer-en-chatgpt-profesional-barcelona",
    photo: photos.sagradaFamilia,
    title: "Cómo aparecer cuando alguien pregunta a ChatGPT por un profesional en Barcelona",
    metaDescription:
      "Qué es el GEO (optimización para motores generativos) y qué puede hacer un fontanero o electricista en Barcelona para que los asistentes de IA le recomienden.",
    excerpt:
      "Cada vez más gente pregunta a ChatGPT, Gemini o Perplexity «qué fontanero me recomiendas en Gràcia». Qué puedes hacer hoy para estar en esas respuestas.",
    summary:
      "Los asistentes de IA recomiendan negocios a partir de información pública que pueden leer y contrastar: fichas de Google y directorios, reseñas, webs con información clara y menciones en otros sitios. Para aparecer, un profesional necesita datos coherentes en todas partes, una web que explique en texto claro qué hace, dónde y en qué plazos, y reseñas que describan trabajos concretos.",
    publishedAt: "2026-09-22",
    updatedAt: "2026-09-22",
    audience: "pro",
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
    slug: "que-hacer-fuga-de-agua-en-casa",
    photo: photos.fontaneroBajoFregadero,
    title: "Qué hacer ante una fuga de agua en casa (paso a paso)",
    metaDescription:
      "Guía práctica para actuar ante una fuga de agua en tu piso de Barcelona: cómo cortar el agua, evitar daños, avisar a los vecinos y al seguro, y cuándo llamar a un fontanero.",
    excerpt:
      "Una fuga puede pasar de goteo molesto a problema serio en minutos. Qué hacer en los primeros cinco minutos y cómo evitar que el daño vaya a más.",
    summary:
      "Ante una fuga de agua en casa: cierra la llave de paso general, corta la luz si el agua está cerca de enchufes o aparatos, recoge el agua y haz fotos del origen y de los daños. Si el agua pasa al piso de abajo, avisa a los vecinos y a tu seguro. Después, pide un fontanero para localizar y reparar la fuga.",
    publishedAt: "2026-09-23",
    updatedAt: "2026-09-23",
    audience: "consumer",
    category: "Fontanería",
    trade: "fontaneria",
    content: [
      {
        heading: "1. Cierra la llave de paso",
        paragraphs: [
          "La llave de paso general suele estar junto al contador, en la cocina, bajo el fregadero o en el baño. Si la fuga viene de un aparato concreto (lavadora, inodoro, termo), a veces basta con cerrar su llave individual.",
        ],
      },
      {
        heading: "2. Corta la luz si hay riesgo",
        paragraphs: [
          "Si el agua se acerca a enchufes, regletas o al cuadro eléctrico, baja el interruptor general antes de tocar nada. El agua y la electricidad son una mala combinación.",
        ],
      },
      {
        heading: "3. Limita los daños y documenta",
        paragraphs: [
          "Recoge el agua con toallas y cubos, aparta muebles y alfombras y haz fotos del origen de la fuga y de las zonas afectadas. Te servirán para el presupuesto del fontanero y para el parte del seguro.",
        ],
      },
      {
        heading: "4. Avisa a vecinos y seguro",
        paragraphs: [
          "En las fincas de Barcelona el agua baja rápido al piso de abajo. Si hay manchas en el techo del vecino, avísale cuanto antes y comunica el siniestro a tu seguro de hogar.",
        ],
      },
      {
        heading: "5. Pide un fontanero",
        paragraphs: [
          `Cuéntanos qué ha pasado y en qué zona estás, y te ponemos en contacto con un fontanero verificado de tu zona. Pedir presupuesto en ${brand} es gratis y sin compromiso.`,
        ],
      },
      {
        heading: "Señales de una fuga que no se ve",
        paragraphs: [],
        list: [
          "El contador de agua gira con todos los grifos cerrados.",
          "Manchas de humedad, pintura abombada o moho en paredes y techos.",
          "Suelos que se levantan o se hunden.",
          "La factura del agua sube sin motivo.",
        ],
      },
    ],
  },
  {
    slug: "salta-el-diferencial-que-hacer",
    photo: photos.electricistaCuadro,
    title: "Salta el diferencial: por qué pasa y qué hacer",
    metaDescription:
      "Si en tu casa salta el diferencial, así puedes encontrar el aparato culpable en pocos minutos, y estas son las señales de que necesitas un electricista en Barcelona.",
    excerpt:
      "Te quedas sin luz, bajas al cuadro y el diferencial está abajo. Así encuentras el origen en pocos minutos y sabes cuándo toca llamar a un electricista.",
    summary:
      "El diferencial salta cuando detecta una fuga de corriente, normalmente por un aparato averiado o humedad en la instalación. Desenchufa todos los aparatos, sube el diferencial y conéctalos de uno en uno: el que lo haga saltar es el culpable. Si salta sin nada conectado, hay una derivación en la instalación y necesitas un electricista.",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-23",
    audience: "consumer",
    category: "Electricidad",
    trade: "electricidad",
    content: [
      {
        heading: "Diferencial, magnetotérmico y general: cuál es cuál",
        paragraphs: [
          "En el cuadro eléctrico hay varios interruptores. El diferencial (suele tener un botón de prueba marcado con una «T») protege a las personas: corta la luz cuando detecta que la corriente se escapa. Los magnetotérmicos («plomos») protegen cada circuito de sobrecargas y cortocircuitos.",
        ],
      },
      {
        heading: "Cómo encontrar el culpable en 5 minutos",
        paragraphs: [],
        list: [
          "Desenchufa todos los aparatos de la casa.",
          "Sube el diferencial.",
          "Ve enchufando los aparatos de uno en uno, esperando unos segundos entre cada uno.",
          "Cuando vuelva a saltar, el último aparato conectado es el sospechoso: no lo uses hasta revisarlo.",
        ],
      },
      {
        heading: "Si salta sin nada enchufado",
        paragraphs: [
          "Baja todos los magnetotérmicos, sube el diferencial y ve subiendo los magnetotérmicos de uno en uno. Así sabrás qué circuito (cocina, baño, enchufes, luces) tiene el problema. Una derivación en la instalación, a menudo por humedad, necesita un electricista.",
        ],
      },
      {
        heading: "Cuándo llamar a un electricista",
        paragraphs: [],
        list: [
          "Si el diferencial salta sin ningún aparato conectado.",
          "Si salta con lluvia o humedad.",
          "Si notas olor a quemado, enchufes calientes o chispas.",
          "Si el diferencial no sube o el botón de prueba no funciona.",
        ],
      },
      {
        heading: "Pide un electricista de tu zona",
        paragraphs: [
          `Cuéntanos qué ocurre y te ponemos en contacto con un electricista verificado de tu zona de Barcelona. Pedir presupuesto en ${brand} es gratis y sin compromiso.`,
        ],
      },
    ],
  },
  {
    slug: "boletin-electrico-barcelona",
    photo: photos.electricistaEnchufes,
    title: "Boletín eléctrico en Barcelona: qué es, cuándo lo necesitas y cómo pedirlo",
    metaDescription:
      "Qué es el boletín eléctrico (Certificado de Instalación Eléctrica, CIE), cuándo te lo piden en Barcelona y cómo conseguirlo con un instalador habilitado.",
    excerpt:
      "Te lo pide la compañía para dar de alta la luz o subir la potencia y no sabes por dónde empezar. Todo lo que necesitas saber sobre el boletín eléctrico.",
    summary:
      "El boletín eléctrico es el nombre popular del Certificado de Instalación Eléctrica (CIE). Lo emite un instalador habilitado tras revisar la instalación y lo necesitas, por ejemplo, para dar de alta el suministro, aumentar la potencia contratada o después de renovar la instalación. Si la instalación no cumple la normativa, primero habrá que adecuarla.",
    publishedAt: "2026-09-19",
    updatedAt: "2026-09-23",
    audience: "consumer",
    category: "Electricidad",
    trade: "electricidad",
    content: [
      {
        heading: "Qué es el boletín eléctrico",
        paragraphs: [
          "Es un documento que certifica que la instalación eléctrica de una vivienda o local cumple el Reglamento Electrotécnico de Baja Tensión. Solo puede emitirlo una empresa instaladora habilitada.",
        ],
      },
      {
        heading: "Cuándo te lo van a pedir",
        paragraphs: [],
        list: [
          "Para dar de alta la luz en un piso que ha estado mucho tiempo sin suministro.",
          "Para aumentar la potencia contratada por encima de lo que permite tu certificado actual.",
          "Después de una reforma que cambia la instalación eléctrica.",
          "En instalaciones nuevas, como un local o una vivienda recién construida.",
        ],
      },
      {
        heading: "Qué pasa si la instalación no cumple",
        paragraphs: [
          "En muchos pisos antiguos de Barcelona el cuadro o el cableado no cumplen la normativa actual. En ese caso, el electricista te explicará qué hay que adecuar (por ejemplo, el cuadro o la toma de tierra) antes de poder emitir el certificado.",
        ],
      },
      {
        heading: "Cómo pedirlo",
        paragraphs: [
          `Cuéntanos para qué necesitas el boletín y dónde está la vivienda, y te ponemos en contacto con un electricista habilitado de tu zona que te dará presupuesto antes de empezar.`,
        ],
      },
    ],
  },
  {
    slug: "como-elegir-fontanero-electricista-de-confianza",
    photo: photos.fontaneroClienteCocina,
    title: "Cómo elegir un fontanero o electricista de confianza en Barcelona",
    metaDescription:
      "Qué comprobar antes de dejar entrar a un fontanero o electricista en casa: presupuesto, seguro, habilitación, reseñas y señales de alerta para evitar sustos.",
    excerpt:
      "Presupuesto claro, seguro en regla y nada de prisas sospechosas. Una lista rápida para acertar con el profesional y evitar sorpresas en la factura.",
    summary:
      "Para elegir un fontanero o electricista de confianza en Barcelona, pide siempre presupuesto antes de empezar, comprueba que está dado de alta y tiene seguro de responsabilidad civil, que está habilitado si el trabajo lo requiere, y revisa reseñas recientes. Desconfía de quien no da precio, exige pagar todo por adelantado o no emite factura.",
    publishedAt: "2026-09-17",
    updatedAt: "2026-09-23",
    audience: "consumer",
    category: "Consejos",
    content: [
      {
        heading: "Lo que siempre debes pedir",
        paragraphs: [],
        list: [
          "Presupuesto antes de empezar, con mano de obra y materiales.",
          "Factura al terminar.",
          "Garantía del trabajo realizado.",
        ],
      },
      {
        heading: "Lo que conviene comprobar",
        paragraphs: [],
        list: [
          "Que está dado de alta como autónomo o empresa.",
          "Que tiene seguro de responsabilidad civil por si algo sale mal.",
          "Que está habilitado para trabajos que lo exigen, como boletines eléctricos o instalaciones de gas.",
          "Reseñas recientes y con detalle de otros clientes.",
        ],
      },
      {
        heading: "Señales de alerta",
        paragraphs: [],
        list: [
          "No quiere dar un precio aproximado antes de empezar.",
          "Pide pagar todo por adelantado.",
          "Te mete prisa para decidir en el momento.",
          "No quiere emitir factura.",
        ],
      },
      {
        heading: "Cómo te ayudamos",
        paragraphs: [
          `En ${brand} verificamos a cada profesional antes de que entre en la red: alta, seguro de responsabilidad civil, experiencia y, cuando hace falta, habilitación. Tú solo nos cuentas qué necesitas.`,
        ],
      },
    ],
  },
];

export function guidePath(guide: Guide): string {
  return `${guide.audience === "pro" ? proRoutes.guides : consumerRoutes.guides}/${guide.slug}`;
}

export function getGuide(audience: Audience, slug: string): Guide | undefined {
  return guides.find((guide) => guide.audience === audience && guide.slug === slug);
}

export function guidesFor(audience: Audience): Guide[] {
  return guides
    .filter((guide) => guide.audience === audience)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
