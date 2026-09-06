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
  image: string;
};

export const services: Service[] = [
  {
    slug: "fontaneria",
    name: "Fontanería",
    namePlural: "Fontaneros",
    shortName: "fontanero",
    metaTitle: "Fontanero en Barcelona 24h | Hogarex",
    metaDescription:
      "¿Fuga de agua, atasco o avería de fontanería en Barcelona? Contacta con Hogarex: coordinamos al fontanero de nuestra red que resuelve tu problema hoy mismo. Presupuesto sin compromiso.",
    heroSubtitle:
      "Fugas, atascos, grifería, calentadores y averías. Cuéntanos qué pasa y coordinamos al fontanero de nuestra red para resolverlo hoy.",
    intro: [
      "Una fuga de agua o un atasco no esperan. En Hogarex centralizamos la gestión de servicios de fontanería en Barcelona: tú nos escribes o llamas contándonos el problema, y nosotros nos encargamos de asignar al profesional de nuestra red mejor preparado para resolverlo, coordinar el horario y confirmar que el trabajo quede bien hecho.",
      "No tienes que buscar perfiles ni comparar anuncios: es una gestión directa con nuestro equipo, de principio a fin.",
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
        title: "Nos cuentas el problema",
        description:
          "Por WhatsApp, teléfono o formulario. Cuanta más información nos des (fotos, ubicación, urgencia), más rápido lo coordinamos.",
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
      "Precios orientativos para Barcelona ciudad, a septiembre de 2026. El precio final depende de la complejidad, los materiales y el horario. Siempre te confirmamos el presupuesto antes de empezar el trabajo.",
    faqs: [
      {
        question: "¿Cuánto cobra un fontanero en Barcelona?",
        answer:
          "Para trabajos sencillos (reparar una fuga, cambiar un grifo) el rango habitual va de 60€ a 150€, visita incluida. Los trabajos más complejos (instalaciones, reformas) se presupuestan según cada caso. Con Hogarex siempre confirmamos el precio antes de que el profesional empiece.",
      },
      {
        question: "¿Elijo yo al fontanero o lo hace Hogarex?",
        answer:
          "Lo gestionamos nosotros. Tú nos cuentas el problema y nosotros coordinamos, dentro de nuestra red de profesionales en Barcelona, a quien mejor puede resolverlo según la zona, la urgencia y el tipo de trabajo. No hace falta que compares perfiles ni presupuestos por tu cuenta.",
      },
      {
        question: "¿Tenéis servicio de fontanero urgente 24 horas?",
        answer:
          "Sí. Para fugas activas, atascos importantes u otras urgencias fuera del horario habitual, contacta con nosotros por WhatsApp o teléfono y coordinamos una atención urgente, con un recargo sobre la tarifa base que te informamos antes de confirmar.",
      },
      {
        question: "¿Cuánto tarda en llegar el fontanero?",
        answer:
          "En Barcelona ciudad, para urgencias solemos coordinar una visita en menos de 2 horas. Para trabajos no urgentes, habitualmente ofrecemos cita el mismo día o para el día siguiente.",
      },
    ],
    emergency: true,
    image: "/images/services/fontaneria.svg",
  },
  {
    slug: "electricidad",
    name: "Electricidad",
    namePlural: "Electricistas",
    shortName: "electricista",
    metaTitle: "Electricista en Barcelona 24h | Hogarex",
    metaDescription:
      "Cortes de luz, cuadros eléctricos, instalaciones o boletines. Contacta con Hogarex y coordinamos al electricista de nuestra red en Barcelona. Presupuesto claro antes de empezar.",
    heroSubtitle:
      "Cortes de luz, cuadros eléctricos, instalaciones y boletines. Cuéntanos qué pasa y coordinamos al electricista de nuestra red.",
    intro: [
      "Los problemas eléctricos son delicados y no dan lugar a improvisar. En Hogarex gestionamos el contacto con electricistas certificados en Barcelona: tú nos explicas la avería o el proyecto, y nosotros coordinamos internamente al profesional de nuestra red que corresponde.",
      "Tú hablas solo con nosotros. Nosotros nos ocupamos de que el trabajo llegue a la persona adecuada.",
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
        title: "Nos cuentas el problema",
        description:
          "Por WhatsApp, teléfono o formulario, cuéntanos qué pasa: corte de luz, instalación nueva, boletín, etc.",
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
      "Precios orientativos para Barcelona ciudad, a septiembre de 2026. El precio final depende de la instalación existente, los materiales y el horario. Confirmamos siempre el presupuesto antes de empezar.",
    faqs: [
      {
        question: "¿Cuánto cobra un electricista en Barcelona?",
        answer:
          "Una avería sencilla suele costar entre 60€ y 130€, visita incluida. Un boletín eléctrico ronda entre 120€ y 220€ según la instalación. Te confirmamos el presupuesto antes de que el electricista empiece el trabajo.",
      },
      {
        question: "¿Los electricistas de Hogarex están certificados?",
        answer:
          "Sí, trabajamos con profesionales de nuestra red habilitados para operar en instalaciones eléctricas residenciales en Cataluña, incluida la emisión de boletines (CIE) cuando el trabajo lo requiere.",
      },
      {
        question: "¿Puedo elegir qué electricista viene a mi casa?",
        answer:
          "La gestión la hacemos nosotros. Nos cuentas el problema y coordinamos internamente al profesional de nuestra red disponible más adecuado, para que el trabajo se resuelva cuanto antes.",
      },
      {
        question: "¿Atendéis urgencias eléctricas fuera de horario?",
        answer:
          "Sí, para cortes de luz totales u otras situaciones de riesgo contamos con atención de urgencia 24 horas, con un recargo sobre la tarifa base que siempre te informamos antes de confirmar.",
      },
    ],
    emergency: true,
    image: "/images/services/electricidad.svg",
  },
  {
    slug: "gas",
    name: "Gas",
    namePlural: "Gasistas",
    shortName: "gasista",
    metaTitle: "Gasista en Barcelona | Hogarex",
    metaDescription:
      "Revisiones, averías de calderas e instalaciones de gas en Barcelona. Contacta con Hogarex: coordinamos al gasista autorizado de nuestra red para resolverlo con seguridad.",
    heroSubtitle:
      "Calderas, revisiones periódicas e instalaciones de gas. Cuéntanos qué necesitas y coordinamos al gasista autorizado de nuestra red.",
    intro: [
      "Las instalaciones de gas requieren profesionales autorizados y máxima seguridad. En Hogarex gestionamos ese contacto por ti: nos cuentas la avería, la revisión pendiente o el proyecto de instalación, y coordinamos internamente al gasista de nuestra red habilitado para resolverlo en Barcelona.",
      "No es un directorio de anuncios: es una gestión directa, con seguimiento de nuestro equipo hasta que el trabajo queda resuelto.",
    ],
    commonJobs: [
      "Revisión periódica de instalación de gas (obligatoria)",
      "Reparación de averías en calderas de gas",
      "Instalación y mantenimiento de calderas",
      "Alta y legalización de instalaciones de gas",
      "Detección de fugas y olor a gas",
      "Cambio de calentador a gas",
      "Certificados de instalación para compraventa o alquiler",
      "Adaptación de instalaciones a la normativa vigente",
    ],
    process: [
      {
        title: "Nos cuentas qué necesitas",
        description:
          "Avería, revisión periódica, instalación nueva o certificado. Cuéntanoslo por WhatsApp, teléfono o formulario.",
      },
      {
        title: "Coordinamos al gasista autorizado",
        description:
          "Asignamos, dentro de nuestra red en Barcelona, al instalador de gas habilitado para tu tipo de trabajo.",
      },
      {
        title: "Confirmamos horario y presupuesto",
        description: "Te damos franja horaria y una estimación antes de la visita.",
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
          "La revisión periódica obligatoria suele costar entre 60€ y 100€, según el tipo de instalación y el número de aparatos. Coordinamos la visita del gasista autorizado de nuestra red en el horario que te convenga.",
      },
      {
        question: "Huelo a gas en casa, ¿qué hago?",
        answer:
          "Ante olor a gas, cierra la llave de paso, ventila el espacio, no enciendas luces ni llamas, y llámanos de inmediato. Priorizamos este tipo de aviso como urgencia y coordinamos atención inmediata.",
      },
      {
        question: "¿Los gasistas de Hogarex están autorizados?",
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
    image: "/images/services/gas.svg",
  },
  {
    slug: "pintura",
    name: "Pintura",
    namePlural: "Pintores",
    shortName: "pintor",
    metaTitle: "Pintor en Barcelona | Hogarex",
    metaDescription:
      "Pintura de pisos, habitaciones y fachadas en Barcelona. Contacta con Hogarex: coordinamos al pintor de nuestra red y te confirmamos presupuesto por metro cuadrado antes de empezar.",
    heroSubtitle:
      "Pintura de interiores, exteriores y fachadas. Cuéntanos qué espacio quieres renovar y coordinamos al pintor de nuestra red.",
    intro: [
      "Pintar un piso entero o solo una habitación requiere planificar bien los tiempos y elegir los materiales adecuados. En Hogarex gestionamos ese trabajo por ti: nos cuentas qué espacio quieres pintar y coordinamos al pintor de nuestra red que se ajusta al proyecto y a tu zona en Barcelona.",
      "Presupuesto por metro cuadrado, sin sorpresas, y seguimiento de nuestro equipo hasta que el trabajo queda terminado.",
    ],
    commonJobs: [
      "Pintura de pisos completos",
      "Pintura de una o varias habitaciones",
      "Pintura de fachadas y exteriores",
      "Alisado y reparación de paredes con gotelé",
      "Pintura de comunidades y escaleras de vecinos",
      "Pintura decorativa y esmaltes especiales",
      "Barnizado de puertas y carpintería de madera",
      "Retoques tras una reforma o mudanza",
    ],
    process: [
      {
        title: "Nos cuentas el proyecto",
        description:
          "Por WhatsApp, teléfono o formulario: qué espacio quieres pintar y los metros aproximados.",
      },
      {
        title: "Coordinamos al pintor",
        description:
          "Asignamos, dentro de nuestra red en Barcelona, al profesional adecuado según el tipo y el tamaño del trabajo.",
      },
      {
        title: "Confirmamos presupuesto por m²",
        description: "Te damos una estimación de precio y de plazos antes de empezar.",
      },
      {
        title: "Se realiza el trabajo",
        description: "El pintor ejecuta el proyecto. Hogarex hace seguimiento del acabado final.",
      },
    ],
    pricing: [
      { job: "Visita y presupuesto", priceRange: "Gratuita", note: "Sin compromiso" },
      { job: "Pintura de habitación (hasta 15 m²)", priceRange: "150€ - 300€", note: "Pintura incluida" },
      { job: "Pintura de piso completo (60-80 m²)", priceRange: "800€ - 1.600€", note: "Según estado de las paredes" },
      { job: "Alisado de pared con gotelé (por m²)", priceRange: "12€ - 20€" },
      { job: "Pintura de fachada", priceRange: "Presupuesto a medida", note: "Según altura y accesos" },
      { job: "Barnizado de puerta", priceRange: "40€ - 80€", note: "Por unidad" },
    ],
    pricingNote:
      "Precios orientativos para Barcelona ciudad, a septiembre de 2026. El precio final depende de los metros cuadrados, el estado de las paredes y el tipo de pintura elegido. Confirmamos siempre el presupuesto antes de empezar.",
    faqs: [
      {
        question: "¿Cuánto cuesta pintar un piso en Barcelona?",
        answer:
          "Para un piso de 60-80 m² en buen estado, el rango habitual va de 800€ a 1.600€, pintura incluida. El precio final depende del estado de las paredes y de si hay que alisar gotelé o reparar grietas.",
      },
      {
        question: "¿El presupuesto incluye la pintura y los materiales?",
        answer:
          "Sí, en el presupuesto que te confirmamos antes de empezar se especifica si la pintura y los materiales están incluidos o se facturan aparte, para que no haya sorpresas.",
      },
      {
        question: "¿Pintáis también comunidades de vecinos?",
        answer:
          "Sí, coordinamos pintores de nuestra red con experiencia en escaleras, portales y fachadas de comunidades, con presupuesto adaptado a cada finca.",
      },
      {
        question: "¿Cuánto tardan en pintar un piso completo?",
        answer:
          "Un piso de tamaño medio suele llevar entre 3 y 6 días laborables, según los metros cuadrados y el estado de las paredes. Te lo confirmamos junto con el presupuesto.",
      },
    ],
    emergency: false,
    image: "/images/services/pintura.svg",
  },
  {
    slug: "carpinteria",
    name: "Carpintería",
    namePlural: "Carpinteros",
    shortName: "carpintero",
    metaTitle: "Carpintero en Barcelona | Hogarex",
    metaDescription:
      "Muebles a medida, puertas, ventanas y tarima en Barcelona. Contacta con Hogarex: coordinamos al carpintero de nuestra red para tu proyecto.",
    heroSubtitle:
      "Muebles a medida, puertas, ventanas y tarima. Cuéntanos tu proyecto y coordinamos al carpintero de nuestra red.",
    intro: [
      "Desde una puerta que no cierra bien hasta un armario a medida, en Hogarex gestionamos el contacto con carpinteros en Barcelona: nos cuentas qué necesitas y coordinamos al profesional de nuestra red que mejor se ajusta al proyecto.",
      "Presupuesto claro antes de empezar y seguimiento de nuestro equipo hasta que el mueble o la reparación queda instalada.",
    ],
    commonJobs: [
      "Muebles y armarios a medida",
      "Instalación y ajuste de puertas interiores",
      "Cambio de ventanas y cerramientos",
      "Instalación de tarima flotante o de madera",
      "Reparación de bisagras, cerraduras y persianas",
      "Vestidores y muebles de cocina a medida",
      "Restauración de muebles de madera",
      "Montaje de mobiliario",
    ],
    process: [
      {
        title: "Nos cuentas el proyecto",
        description: "Por WhatsApp, teléfono o formulario: qué necesitas y las medidas aproximadas si las tienes.",
      },
      {
        title: "Coordinamos al carpintero",
        description:
          "Asignamos, dentro de nuestra red en Barcelona, al profesional adecuado según el tipo de trabajo.",
      },
      {
        title: "Confirmamos presupuesto y plazos",
        description: "Te damos una estimación de precio y de plazos de fabricación o instalación antes de empezar.",
      },
      {
        title: "Se fabrica y se instala",
        description: "El carpintero realiza el trabajo. Hogarex hace seguimiento del acabado final.",
      },
    ],
    pricing: [
      { job: "Visita y presupuesto", priceRange: "Gratuita", note: "Sin compromiso" },
      { job: "Ajuste o reparación de puerta", priceRange: "50€ - 100€" },
      { job: "Instalación de puerta interior", priceRange: "90€ - 180€", note: "Sin incluir la puerta" },
      { job: "Tarima flotante (por m²)", priceRange: "18€ - 35€", note: "Instalación incluida" },
      { job: "Mueble a medida", priceRange: "Presupuesto a medida", note: "Según diseño y materiales" },
      { job: "Cambio de bisagras o cerradura", priceRange: "40€ - 80€" },
    ],
    pricingNote:
      "Precios orientativos para Barcelona ciudad, a septiembre de 2026. El precio final depende del material, el diseño y las medidas del proyecto. Confirmamos siempre el presupuesto antes de empezar.",
    faqs: [
      {
        question: "¿Cuánto cuesta un mueble a medida en Barcelona?",
        answer:
          "Depende mucho del diseño, los materiales y las medidas, así que siempre se presupuesta caso por caso. Coordinamos una visita del carpintero de nuestra red para tomar medidas y darte un precio cerrado.",
      },
      {
        question: "¿Hacéis instalación de tarima?",
        answer:
          "Sí, coordinamos la instalación de tarima flotante o de madera con carpinteros de nuestra red, con presupuesto por metro cuadrado según el material elegido.",
      },
      {
        question: "¿Puedo pedir solo una reparación puntual, como una puerta que no cierra?",
        answer:
          "Sí, gestionamos tanto proyectos grandes (muebles, tarimas) como reparaciones puntuales de puertas, cerraduras o persianas.",
      },
      {
        question: "¿Cuánto tardan en fabricar un mueble a medida?",
        answer:
          "El plazo habitual va de 2 a 4 semanas desde que se confirma el diseño, según la complejidad y la carga de trabajo del taller. Te lo confirmamos junto con el presupuesto.",
      },
    ],
    emergency: false,
    image: "/images/services/carpinteria.svg",
  },
  {
    slug: "climatizacion",
    name: "Aire acondicionado y calefacción",
    namePlural: "Técnicos de climatización",
    shortName: "técnico de climatización",
    metaTitle: "Aire Acondicionado y Calefacción en Barcelona | Hogarex",
    metaDescription:
      "Instalación, avería y mantenimiento de aire acondicionado y calefacción en Barcelona. Contacta con Hogarex y coordinamos al técnico de nuestra red.",
    heroSubtitle:
      "Instalación, avería y mantenimiento de aire acondicionado y calefacción. Cuéntanos qué necesitas y coordinamos al técnico de nuestra red.",
    intro: [
      "Un aire acondicionado que no enfría o una calefacción que falla justo cuando más se necesita son un problema urgente. En Hogarex gestionamos el contacto con técnicos de climatización en Barcelona: nos cuentas la avería o el proyecto y coordinamos al profesional de nuestra red adecuado.",
      "Presupuesto confirmado antes de la visita y seguimiento de nuestro equipo hasta que el equipo funciona correctamente.",
    ],
    commonJobs: [
      "Instalación de aire acondicionado (split, multisplit, conductos)",
      "Reparación de averías de aire acondicionado",
      "Mantenimiento y recarga de gas refrigerante",
      "Instalación y reparación de calderas de calefacción",
      "Instalación de radiadores y suelo radiante",
      "Limpieza y desinfección de equipos",
      "Termostatos inteligentes y programación",
      "Revisión anual de equipos antes del verano o el invierno",
    ],
    process: [
      {
        title: "Nos cuentas qué necesitas",
        description: "Por WhatsApp, teléfono o formulario: instalación nueva, avería o mantenimiento.",
      },
      {
        title: "Coordinamos al técnico",
        description:
          "Asignamos, dentro de nuestra red en Barcelona, al técnico de climatización adecuado para tu equipo.",
      },
      {
        title: "Confirmamos horario y presupuesto",
        description: "Te damos franja horaria y una estimación antes de la visita.",
      },
      {
        title: "Se resuelve el trabajo",
        description: "El técnico realiza la instalación o reparación. Hogarex hace seguimiento del resultado.",
      },
    ],
    pricing: [
      { job: "Visita de diagnóstico", priceRange: "35€ - 55€", note: "Se descuenta del presupuesto si se realiza el trabajo" },
      { job: "Mantenimiento anual de aire acondicionado", priceRange: "50€ - 90€", note: "Por unidad" },
      { job: "Recarga de gas refrigerante", priceRange: "80€ - 150€", note: "Según tipo de gas" },
      { job: "Instalación de split (1x1)", priceRange: "300€ - 500€", note: "Mano de obra, sin incluir el equipo" },
      { job: "Reparación de caldera de calefacción", priceRange: "80€ - 180€" },
      { job: "Urgencia fuera de horario / 24h", priceRange: "+30% - 50%", note: "Sobre tarifa base" },
    ],
    pricingNote:
      "Precios orientativos para Barcelona ciudad, a septiembre de 2026. El precio final depende del tipo y la potencia del equipo. Confirmamos siempre el presupuesto antes de empezar el trabajo.",
    faqs: [
      {
        question: "¿Cuánto cuesta instalar un aire acondicionado en Barcelona?",
        answer:
          "La mano de obra de instalación de un split sencillo suele ir de 300€ a 500€, sin incluir el equipo. El precio final depende de la potencia, la distancia entre unidades y la accesibilidad de la fachada.",
      },
      {
        question: "¿Hacéis mantenimiento preventivo antes del verano?",
        answer:
          "Sí, coordinamos revisiones y limpiezas de equipos de aire acondicionado antes de la temporada de calor, para evitar averías en pleno verano.",
      },
      {
        question: "Mi caldera de calefacción no calienta, ¿es urgente?",
        answer:
          "Depende de la época del año y de si hay agua caliente disponible. Cuéntanoslo por WhatsApp o teléfono y valoramos la urgencia para coordinar la visita cuanto antes.",
      },
      {
        question: "¿Los técnicos están cualificados para manipular gases refrigerantes?",
        answer:
          "Sí, coordinamos exclusivamente con técnicos de nuestra red habilitados para la manipulación de gases fluorados, tal y como exige la normativa.",
      },
    ],
    emergency: true,
    image: "/images/services/climatizacion.svg",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
