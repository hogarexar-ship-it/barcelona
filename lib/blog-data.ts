export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string; // ISO date
  updatedAt: string;
  category: "Fontanería" | "Electricidad" | "Gas" | "Hogar";
  content: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "que-hacer-ante-una-fuga-de-agua",
    title: "Qué hacer ante una fuga de agua en tu casa (paso a paso)",
    metaDescription:
      "Guía práctica para actuar ante una fuga de agua: cómo cortar el suministro, minimizar daños y cuándo llamar a un profesional en Barcelona.",
    excerpt:
      "Una fuga de agua puede pasar de ser un goteo molesto a un problema serio en minutos. Te contamos qué hacer mientras coordinamos al fontanero.",
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-10",
    category: "Fontanería",
    content: [
      {
        paragraphs: [
          "Detectar una fuga de agua a tiempo puede evitar daños importantes en tu vivienda y en la de tus vecinos. Estos son los pasos que recomendamos seguir mientras coordinamos al profesional que va a resolver el problema.",
        ],
      },
      {
        heading: "1. Corta el suministro de agua",
        paragraphs: [
          "Localiza la llave de paso general (suele estar cerca del contador o bajo la pila de la cocina) y ciérrala. Si la fuga es de un aparato puntual (lavadora, inodoro), cierra solo su llave individual si es posible.",
        ],
      },
      {
        heading: "2. Corta la electricidad de la zona afectada si hay riesgo",
        paragraphs: [
          "Si el agua está cerca de enchufes o del cuadro eléctrico, corta el interruptor general antes de manipular nada.",
        ],
      },
      {
        heading: "3. Contén el agua y documenta el daño",
        paragraphs: [
          "Usa toallas o cubos para minimizar el daño mientras esperas. Saca fotos del origen de la fuga y de las zonas afectadas: te van a servir tanto para el presupuesto como para un eventual parte de seguro.",
        ],
      },
      {
        heading: "4. Contacta con Hogarex",
        paragraphs: [
          "Escríbenos por WhatsApp o llámanos contándonos qué ha pasado. Coordinamos al fontanero de nuestra red disponible en tu zona de Barcelona, y te confirmamos horario y presupuesto antes de que llegue a tu casa.",
        ],
      },
    ],
  },
  {
    slug: "cuando-hacer-revision-instalacion-gas",
    title: "¿Cada cuánto hay que revisar la instalación de gas?",
    metaDescription:
      "Te explicamos la periodicidad de la revisión de gas obligatoria en Cataluña, qué incluye y qué pasa si no la haces a tiempo.",
    excerpt:
      "La revisión periódica de gas es obligatoria y tiene una periodicidad legal. Te contamos cada cuánto corresponde y qué incluye.",
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    category: "Gas",
    content: [
      {
        paragraphs: [
          "La instalación de gas de tu vivienda debe pasar por una revisión periódica obligatoria, realizada por un instalador autorizado. No hacerla a tiempo puede implicar el corte del suministro por parte de la compañía distribuidora.",
        ],
      },
      {
        heading: "¿Cada cuánto se revisa?",
        paragraphs: [
          "La periodicidad habitual en Cataluña es de 5 años para instalaciones individuales, aunque puede variar según el tipo de instalación y el uso (doméstico, colectivo, o gas natural vs. GLP). Tu distribuidora te va a notificar cuándo corresponde.",
        ],
      },
      {
        heading: "¿Qué revisa el instalador?",
        paragraphs: [
          "Se comprueba el estado de tuberías, conexiones, ventilación de la caldera o calentador, y el correcto funcionamiento de los aparatos conectados a la instalación.",
        ],
        list: [
          "Estanqueidad de la instalación (ausencia de fugas)",
          "Estado de tubos flexibles y conexiones",
          "Ventilación de la sala donde está el aparato",
          "Combustión correcta de calderas y calentadores",
        ],
      },
      {
        heading: "Coordinamos la revisión por ti",
        paragraphs: [
          "Escríbenos contándonos si te ha llegado el aviso de revisión y coordinamos al instalador de gas autorizado de nuestra red para que la realice en el horario que te convenga.",
        ],
      },
    ],
  },
  {
    slug: "senales-de-que-necesitas-un-electricista",
    title: "5 señales de que necesitas revisar tu instalación eléctrica",
    metaDescription:
      "Luces que parpadean, olor a quemado, disyuntor que salta seguido. Te contamos qué señales indican que necesitas un electricista en Barcelona.",
    excerpt:
      "Algunas señales eléctricas no deberían ignorarse. Repasamos las más comunes y cuándo conviene llamar a un profesional.",
    publishedAt: "2026-04-18",
    updatedAt: "2026-04-18",
    category: "Electricidad",
    content: [
      {
        paragraphs: [
          "Muchos problemas eléctricos graves empiezan con señales pequeñas que se ignoran. Estas son las más comunes que vemos en avisos de electricidad en Barcelona.",
        ],
      },
      {
        heading: "1. El diferencial salta con frecuencia",
        paragraphs: [
          "Si el interruptor diferencial salta varias veces por semana, algo en la instalación tiene una fuga de corriente. No es normal y conviene revisarlo pronto.",
        ],
      },
      {
        heading: "2. Olor a quemado cerca de enchufes o el cuadro",
        paragraphs: [
          "Es una señal de riesgo real. Corta la electricidad de esa zona y contacta con nosotros de inmediato.",
        ],
      },
      {
        heading: "3. Luces que parpadean sin motivo",
        paragraphs: [
          "Puede deberse a una mala conexión, sobrecarga del circuito o un problema en el propio cuadro eléctrico.",
        ],
      },
      {
        heading: "4. Enchufes calientes al tacto",
        paragraphs: [
          "Un enchufe que se calienta al usar un aparato normal indica una conexión defectuosa o un cableado inadecuado para la carga.",
        ],
      },
      {
        heading: "5. La instalación no tiene boletín o es muy antigua",
        paragraphs: [
          "Si tu instalación tiene más de 25-30 años y nunca se actualizó, una revisión preventiva puede evitar sustos. Coordinamos con nuestra red de electricistas certificados en Barcelona una revisión completa.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
