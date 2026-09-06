export type PriceRow = {
  job: string;
  priceRange: string;
  note?: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  namePlural: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string[];
  commonJobs: string[];
  process: { title: string; description: string }[];
  pricing: PriceRow[];
  pricingNote: string;
  faqs: Faq[];
  emergency: boolean;
};

export const services: Service[] = [
  {
    slug: "fontaneria",
    name: "Fontanería",
    namePlural: "Fontaneros",
    shortName: "fontanero",
    metaTitle: "Fontanero en Barcelona 24h | Hogarex",
    metaDescription:
      "¿Fuga de agua, atasco o avería de fontanería en Barcelona? Contactá a Hogarex: coordinamos al fontanero de nuestra red que resuelve tu problema hoy mismo. Presupuesto sin compromiso.",
    heroSubtitle:
      "Fugas, atascos, grifería, calentadores y averías. Nos contás qué pasa y coordinamos al fontanero de nuestra red para resolverlo hoy.",
    intro: [
      "Una fuga de agua o un atasco no esperan. En Hogarex centralizamos la gestión de servicios de fontanería en Barcelona: vos nos escribís o llamás contándonos el problema, y nosotros nos encargamos de asignar al profesional de nuestra red mejor preparado para resolverlo, coordinar el horario y confirmar que el trabajo quede bien hecho.",
      "No tenés que buscar perfiles ni comparar anuncios: es una gestión directa con nuestro equipo, de punta a punta.",
    ],
    commonJobs: [
      "Detección y reparación de fugas de agua",
      "Desatascos de tuberías, bajantes y desagües",
      "Instalación y reparación de grifería",
      "Reparación e instalación de calentadores y termos",
      "Cambio de llaves de paso y válvulas",
      "Revisión e instalación de cisternas e inodoros",
      "Reformas de baño y cocina (parte de fontanería)",
      "Averías de presión de agua",
    ],
    process: [
      {
        title: "Nos contás el problema",
        description:
          "Por WhatsApp, teléfono o el formulario. Cuanta más info nos des (fotos, ubicación, urgencia), más rápido coordinamos.",
      },
      {
        title: "Coordinamos al profesional",
        description:
          "Nuestro equipo asigna, dentro de nuestra red de fontaneros en Barcelona, al que mejor se ajusta al trabajo y a tu zona.",
      },
      {
        title: "Confirmamos horario y presupuesto",
        description:
          "Te confirmamos franja horaria y una estimación de precio antes de que el profesional se presente en tu domicilio.",
      },
      {
        title: "Se resuelve el trabajo",
        description:
          "El profesional realiza el servicio. Hogarex hace seguimiento de que todo haya quedado conforme.",
      },
    ],
    pricing: [
      { job: "Visita de diagnóstico", priceRange: "35€ - 50€", note: "Se descuenta del presupuesto si se realiza el trabajo" },
      { job: "Reparación de fuga simple", priceRange: "60€ - 120€" },
      { job: "Desatasco de desagüe", priceRange: "70€ - 150€" },
      { job: "Cambio de grifo", priceRange: "50€ - 90€", note: "Sin incluir el grifo" },
      { job: "Instalación de termo eléctrico", priceRange: "120€ - 220€", note: "Sin incluir el equipo" },
      { job: "Urgencia fuera de horario / 24h", priceRange: "+30% - 50%", note: "Sobre tarifa base" },
    ],
    pricingNote:
      "Precios orientativos para Barcelona ciudad, a septiembre de 2026. El precio final depende de la complejidad, materiales y horario. Siempre te confirmamos el presupuesto antes de empezar el trabajo.",
    faqs: [
      {
        question: "¿Cuánto cobra un fontanero en Barcelona?",
        answer:
          "Para trabajos simples (reparación de una fuga, cambio de un grifo) el rango habitual va de 60€ a 150€, incluyendo la visita. Trabajos más complejos (instalaciones, reformas) se presupuestan según cada caso. Con Hogarex siempre confirmamos el precio antes de que el profesional empiece.",
      },
      {
        question: "¿Elijo yo al fontanero o lo hace Hogarex?",
        answer:
          "Lo gestionamos nosotros. Vos nos contás el problema y nosotros coordinamos, dentro de nuestra red de profesionales en Barcelona, a quien mejor puede resolverlo según la zona, la urgencia y el tipo de trabajo. No hace falta que compares perfiles ni presupuestos por tu cuenta.",
      },
      {
        question: "¿Tienen servicio de fontanero urgente 24 horas?",
        answer:
          "Sí. Para fugas activas, atascos importantes u otras urgencias fuera del horario habitual, contactanos por WhatsApp o teléfono y coordinamos una atención urgente, con un recargo sobre la tarifa base que te informamos antes de confirmar.",
      },
      {
        question: "¿En cuánto tiempo llega el fontanero?",
        answer:
          "En Barcelona ciudad, para urgencias solemos coordinar una visita en menos de 2 horas. Para trabajos no urgentes, habitualmente ofrecemos turno el mismo día o para el día siguiente.",
      },
    ],
    emergency: true,
  },
  {
    slug: "electricidad",
    name: "Electricidad",
    namePlural: "Electricistas",
    shortName: "electricista",
    metaTitle: "Electricista en Barcelona 24h | Hogarex",
    metaDescription:
      "Cortes de luz, cuadros eléctricos, instalaciones o boletines. Contactá a Hogarex y coordinamos al electricista de nuestra red en Barcelona. Presupuesto claro antes de empezar.",
    heroSubtitle:
      "Cortes de luz, cuadros eléctricos, instalaciones y boletines. Nos contás qué pasa y coordinamos al electricista de nuestra red.",
    intro: [
      "Los problemas eléctricos son delicados y no dan lugar a improvisar. En Hogarex gestionamos el contacto con electricistas certificados en Barcelona: vos nos explicás la avería o el proyecto, y nosotros coordinamos internamente al profesional de nuestra red que corresponde.",
      "Vos hablás solo con nosotros. Nosotros nos ocupamos de que el trabajo llegue a la persona correcta.",
    ],
    commonJobs: [
      "Cortes de luz y averías en el cuadro eléctrico",
      "Cambio e instalación de cuadros eléctricos (ICP, diferencial)",
      "Instalación de enchufes, interruptores y puntos de luz",
      "Boletín eléctrico (CIE) para altas de suministro",
      "Instalación de iluminación interior y exterior",
      "Revisión de instalaciones antiguas",
      "Instalación de puntos de carga para vehículo eléctrico",
      "Domótica básica y automatizaciones del hogar",
    ],
    process: [
      {
        title: "Nos contás el problema",
        description:
          "Por WhatsApp, teléfono o formulario, contanos qué pasa: corte de luz, instalación nueva, boletín, etc.",
      },
      {
        title: "Coordinamos al electricista",
        description:
          "Asignamos, dentro de nuestra red en Barcelona, al profesional certificado adecuado para tu caso.",
      },
      {
        title: "Confirmamos horario y presupuesto",
        description: "Te damos una franja horaria y una estimación antes de la visita.",
      },
      {
        title: "Se resuelve y se documenta",
        description:
          "El electricista realiza el trabajo. Si corresponde, se emite el boletín o certificado necesario.",
      },
    ],
    pricing: [
      { job: "Visita de diagnóstico", priceRange: "35€ - 50€", note: "Se descuenta del presupuesto si se realiza el trabajo" },
      { job: "Reparación de corte / avería simple", priceRange: "60€ - 130€" },
      { job: "Cambio de diferencial o magnetotérmico", priceRange: "80€ - 160€", note: "Sin incluir el mecanismo" },
      { job: "Instalación de punto de luz o enchufe", priceRange: "40€ - 80€", note: "Por punto" },
      { job: "Boletín eléctrico (CIE)", priceRange: "120€ - 220€", note: "Según potencia e instalación" },
      { job: "Urgencia fuera de horario / 24h", priceRange: "+30% - 50%", note: "Sobre tarifa base" },
    ],
    pricingNote:
      "Precios orientativos para Barcelona ciudad, a septiembre de 2026. El precio final depende de la instalación existente, materiales y horario. Confirmamos siempre el presupuesto antes de empezar.",
    faqs: [
      {
        question: "¿Cuánto cobra un electricista en Barcelona?",
        answer:
          "Una avería simple suele costar entre 60€ y 130€, visita incluida. Un boletín eléctrico ronda entre 120€ y 220€ según la instalación. Te confirmamos el presupuesto antes de que el electricista empiece el trabajo.",
      },
      {
        question: "¿Los electricistas de Hogarex están certificados?",
        answer:
          "Sí, trabajamos con profesionales de nuestra red habilitados para operar en instalaciones eléctricas residenciales en Cataluña, incluida la emisión de boletines (CIE) cuando el trabajo lo requiere.",
      },
      {
        question: "¿Puedo elegir qué electricista viene a mi casa?",
        answer:
          "La gestión la hacemos nosotros. Nos contás el problema y coordinamos internamente al profesional de nuestra red disponible más adecuado, para que el trabajo se resuelva lo antes posible.",
      },
      {
        question: "¿Atienden urgencias eléctricas fuera de horario?",
        answer:
          "Sí, para cortes de luz totales u otras situaciones de riesgo contamos con atención de urgencia 24 horas, con recargo sobre la tarifa base que siempre te informamos antes de confirmar.",
      },
    ],
    emergency: true,
  },
  {
    slug: "gas",
    name: "Gas",
    namePlural: "Instaladores de gas",
    shortName: "instalador de gas",
    metaTitle: "Instalador de Gas en Barcelona | Hogarex",
    metaDescription:
      "Revisiones, averías de calderas e instalaciones de gas en Barcelona. Contactá a Hogarex: coordinamos al instalador autorizado de nuestra red para resolverlo con seguridad.",
    heroSubtitle:
      "Calderas, revisiones periódicas e instalaciones de gas. Nos contás qué necesitás y coordinamos al instalador autorizado de nuestra red.",
    intro: [
      "Las instalaciones de gas requieren profesionales autorizados y máxima seguridad. En Hogarex gestionamos ese contacto por vos: nos contás la avería, la revisión pendiente o el proyecto de instalación, y coordinamos internamente al instalador de gas de nuestra red habilitado para resolverlo en Barcelona.",
      "No es un directorio de anuncios: es una gestión directa, con seguimiento de nuestro equipo hasta que el trabajo está resuelto.",
    ],
    commonJobs: [
      "Revisión periódica de instalación de gas (obligatoria)",
      "Reparación de averías en calderas de gas",
      "Instalación y mantenimiento de calderas",
      "Alta y legalización de instalaciones de gas",
      "Detección de fugas y olor a gas",
      "Cambio de calentador a gas",
      "Certificados de instalación para compraventa o alquiler",
      "Adaptación de instalaciones a normativa vigente",
    ],
    process: [
      {
        title: "Nos contás qué necesitás",
        description:
          "Avería, revisión periódica, instalación nueva o certificado. Contanos por WhatsApp, teléfono o formulario.",
      },
      {
        title: "Coordinamos al instalador autorizado",
        description:
          "Asignamos, dentro de nuestra red en Barcelona, al instalador de gas habilitado para tu tipo de trabajo.",
      },
      {
        title: "Confirmamos horario y presupuesto",
        description: "Te damos franja horaria y estimación antes de la visita.",
      },
      {
        title: "Se resuelve y se certifica",
        description:
          "El instalador realiza el trabajo y, cuando corresponde, emite el certificado o boletín de gas.",
      },
    ],
    pricing: [
      { job: "Visita de diagnóstico", priceRange: "40€ - 60€", note: "Se descuenta del presupuesto si se realiza el trabajo" },
      { job: "Revisión periódica de gas", priceRange: "60€ - 100€", note: "Según normativa vigente" },
      { job: "Reparación de avería en caldera", priceRange: "80€ - 180€" },
      { job: "Instalación de caldera nueva", priceRange: "300€ - 700€", note: "Mano de obra, sin incluir el equipo" },
      { job: "Certificado de instalación de gas", priceRange: "100€ - 180€" },
      { job: "Urgencia por olor a gas / fuga", priceRange: "Prioridad inmediata", note: "Atención urgente 24h" },
    ],
    pricingNote:
      "Precios orientativos para Barcelona ciudad, a septiembre de 2026. El precio final depende del tipo de instalación y equipo. Confirmamos siempre el presupuesto antes de empezar. Ante olor a gas, priorizamos la atención inmediata.",
    faqs: [
      {
        question: "¿Cuánto cuesta una revisión de gas en Barcelona?",
        answer:
          "La revisión periódica obligatoria suele costar entre 60€ y 100€, según el tipo de instalación y el número de aparatos. Coordinamos la visita del instalador autorizado de nuestra red en el horario que te convenga.",
      },
      {
        question: "Huelo a gas en casa, ¿qué hago?",
        answer:
          "Ante olor a gas, cortá la llave de paso, ventilá el espacio, no enciendas luces ni llamas, y contactanos de inmediato por teléfono. Priorizamos este tipo de aviso como urgencia y coordinamos atención inmediata.",
      },
      {
        question: "¿Los instaladores de Hogarex están autorizados?",
        answer:
          "Sí, coordinamos exclusivamente con instaladores de gas de nuestra red habilitados para trabajar en Cataluña, incluida la emisión de certificados y boletines cuando el trabajo lo requiere.",
      },
      {
        question: "¿Puedo pedir un certificado de instalación para vender o alquilar mi piso?",
        answer:
          "Sí, gestionamos con nuestra red la revisión y emisión del certificado de instalación de gas necesario para procesos de compraventa o alquiler.",
      },
    ],
    emergency: true,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
