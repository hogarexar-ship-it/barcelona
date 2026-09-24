import { servicePath } from "./navigation";

export type GlossaryTerm = {
  term: string;
  /** Definición corta y autocontenida: debe poder leerse sola, sin el resto de la página (la citan buscadores y asistentes de IA). */
  definition: string;
  /** Enlace opcional al servicio o guía relacionados. */
  href?: string;
};

/**
 * Glosario de marketing digital para fontaneros y electricistas, en castellano.
 * La versión catalana está en glossary-data.ca.ts. Orden alfabético por `term`.
 */
export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "CAC (coste de adquisición de cliente)",
    definition:
      "Lo que cuesta conseguir un cliente nuevo, sumando lo invertido en anuncios y servicios y dividiéndolo entre los clientes que salieron de ahí. Sirve para saber si un canal (por ejemplo, los anuncios en Google) te sale a cuenta.",
  },
  {
    term: "CTR (click-through rate, tasa de clics)",
    definition:
      "El porcentaje de gente que hace clic en tu anuncio o en tu ficha de Google sobre el total de gente que lo ve. Un CTR bajo suele avisar de que el texto o la foto no llaman la atención.",
  },
  {
    term: "CPC (coste por clic)",
    definition:
      "Lo que pagas a Google o Meta cada vez que alguien hace clic en uno de tus anuncios. Varía según la competencia de tu zona y de tu oficio: en fontanería y electricidad suele ser más alto en las urgencias.",
  },
  {
    term: "CRM (gestor de relación con clientes)",
    definition:
      "Herramienta donde quedan tus contactos, llamadas y presupuestos en un solo sitio, con avisos para no olvidar ningún seguimiento, en vez de apuntarlo en una libreta o en el WhatsApp.",
    href: servicePath("es", "crm"),
  },
  {
    term: "CTA (llamada a la acción)",
    definition:
      "El botón o frase que le dice al visitante qué hacer a continuación: «Pide tu asesoramiento gratis», «Escríbenos por WhatsApp». Una web sin una CTA clara recibe visitas que no se convierten en llamadas.",
  },
  {
    term: "Datos estructurados (schema.org)",
    definition:
      "Etiquetas que se añaden al código de una página para que Google y los asistentes de IA entiendan de qué trata sin tener que adivinarlo: qué servicio ofreces, tus preguntas frecuentes, tu dirección o tus reseñas.",
  },
  {
    term: "Embudo de conversión",
    definition:
      "El camino que recorre alguien desde que te encuentra (en Google, en un anuncio o por recomendación) hasta que te llama o te pide presupuesto. Cada paso donde se pierde gente es un punto a mejorar.",
  },
  {
    term: "Ficha de Google (Google Business Profile)",
    definition:
      "Tu perfil gratuito en Google, el que aparece en el mapa con tus reseñas, tu horario y tus fotos cuando alguien busca «fontanero cerca de mí» o «electricista en Gràcia».",
    href: servicePath("es", "google-business-profile"),
  },
  {
    term: "GEO (Generative Engine Optimization)",
    definition:
      "El trabajo para que asistentes de IA como ChatGPT, Gemini o Perplexity entiendan tu negocio y te recomienden cuando alguien les pregunta por un profesional. Se apoya en información coherente y clara en tu web, tu ficha de Google y tus reseñas.",
    href: servicePath("es", "seo-local"),
  },
  {
    term: "Google Ads",
    definition:
      "La plataforma de anuncios de Google. Permite aparecer arriba de los resultados de búsqueda cuando alguien busca tu servicio, pagando solo cuando hace clic (o cuando llama, en los anuncios de llamada).",
    href: servicePath("es", "anuncios-google-y-meta"),
  },
  {
    term: "Landing page",
    definition:
      "Una página pensada para un único objetivo, normalmente recibir las visitas de una campaña de anuncios, con el teléfono y el WhatsApp a la vista y sin distracciones que alejen al visitante de contactar.",
    href: servicePath("es", "landing-page-y-web"),
  },
  {
    term: "Lead",
    definition:
      "Un contacto: alguien que ha dejado sus datos, ha llamado o ha escrito por WhatsApp porque le interesa tu servicio. Es un cliente potencial, todavía no un trabajo cerrado.",
  },
  {
    term: "Meta Ads",
    definition:
      "Los anuncios de Facebook e Instagram, gestionados desde una única plataforma (Meta). Funcionan bien para mostrar tus trabajos con fotos a gente de tu zona, aunque no esté buscando activamente en ese momento.",
    href: servicePath("es", "anuncios-google-y-meta"),
  },
  {
    term: "Palabra clave (keyword)",
    definition:
      "Lo que escribe alguien en Google cuando busca tu servicio, por ejemplo «electricista urgente Barcelona» o «cambiar termo eléctrico precio». Elegir bien las palabras clave es la base de los anuncios y del SEO.",
  },
  {
    term: "Píxel de seguimiento",
    definition:
      "Un código pequeño en tu web que avisa a Google o Meta cuando alguien hace algo importante (llamar, rellenar el formulario). Así sabes qué anuncios traen clientes de verdad, no solo visitas.",
  },
  {
    term: "Posicionamiento local (SEO local)",
    definition:
      "Trabajar tu web, tu ficha de Google y tus reseñas para que aparezcas en los resultados de Google cuando alguien busca tu servicio en tu zona, sin pagar por cada clic. Es más lento que los anuncios, pero no se detiene si dejas de invertir.",
    href: servicePath("es", "seo-local"),
  },
  {
    term: "Presupuesto de anuncios",
    definition:
      "El dinero que se invierte directamente en Google o Meta para mostrar tus anuncios. Es aparte del precio del servicio de gestión: se paga desde tu propia cuenta de anuncios y decides tú cuánto invertir.",
    href: servicePath("es", "anuncios-google-y-meta"),
  },
  {
    term: "Quality Score (nivel de calidad)",
    definition:
      "Una nota que pone Google a tus anuncios según lo relevantes que son para lo que busca la gente. Cuanto más alta, menos pagas por cada clic y mejor posición consigues.",
  },
  {
    term: "Remarketing (o retargeting)",
    definition:
      "Mostrar anuncios a gente que ya visitó tu web pero no te contactó, para que se acuerde de ti cuando decida pedir presupuesto.",
  },
  {
    term: "Reseña de Google",
    definition:
      "La opinión que deja un cliente en tu ficha de Google. El número de reseñas y la nota media son de lo primero que mira quien te está comparando con otro profesional.",
    href: servicePath("es", "google-business-profile"),
  },
  {
    term: "ROI (retorno de la inversión)",
    definition:
      "Cuánto ganas por cada euro que inviertes en marketing. Si inviertes 300 € en anuncios y consigues 1.500 € en trabajos, el ROI es positivo y compensa seguir invirtiendo.",
  },
  {
    term: "SEM (publicidad en buscadores)",
    definition:
      "El nombre general de la publicidad de pago en buscadores como Google. Incluye los anuncios de búsqueda y los anuncios de llamada, entre otros formatos.",
    href: servicePath("es", "anuncios-google-y-meta"),
  },
  {
    term: "SERP (página de resultados de Google)",
    definition:
      "La página que ves después de buscar algo en Google: anuncios arriba, el mapa con las fichas locales y, debajo, los resultados orgánicos (sin pagar).",
  },
  {
    term: "Tasa de conversión",
    definition:
      "El porcentaje de visitas a tu web que acaban llamando, escribiendo o rellenando el formulario. Una web rápida y con el teléfono a la vista convierte más que una lenta o confusa.",
  },
];
