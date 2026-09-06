export type Zone = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighborhoods: string[];
};

export const zones: Zone[] = [
  {
    slug: "eixample",
    name: "Eixample",
    metaTitle: "Servicios para el hogar en Eixample, Barcelona | Hogarex",
    metaDescription:
      "Fontanería, electricidad, gas, pintura, carpintería y climatización en Eixample (Barcelona). Contacta con Hogarex y coordinamos al profesional de nuestra red para tu zona.",
    intro:
      "En el Eixample gestionamos a diario avisos de fontanería, electricidad, gas y reformas, desde fincas de principios del siglo XX hasta edificios reformados. Contacta con nosotros y coordinamos al profesional de nuestra red disponible en la zona.",
    neighborhoods: ["Dreta de l'Eixample", "Antiga Esquerra de l'Eixample", "Nova Esquerra de l'Eixample", "Sant Antoni", "Fort Pienc"],
  },
  {
    slug: "gracia",
    name: "Gràcia",
    metaTitle: "Servicios para el hogar en Gràcia, Barcelona | Hogarex",
    metaDescription:
      "Fontanería, electricidad, gas, pintura, carpintería y climatización en Gràcia (Barcelona). Contacta con Hogarex y coordinamos al profesional de nuestra red para tu zona.",
    intro:
      "Gràcia combina edificios históricos y reformas recientes, lo que exige experiencia tanto en instalaciones antiguas como modernas. Nuestra red de profesionales cubre todo el distrito.",
    neighborhoods: ["Vila de Gràcia", "Camp d'en Grassot", "El Coll", "Vallcarca", "La Salut"],
  },
  {
    slug: "sants-montjuic",
    name: "Sants-Montjuïc",
    metaTitle: "Servicios para el hogar en Sants-Montjuïc, Barcelona | Hogarex",
    metaDescription:
      "Fontanería, electricidad, gas, pintura, carpintería y climatización en Sants-Montjuïc (Barcelona). Contacta con Hogarex y coordinamos al profesional de nuestra red para tu zona.",
    intro:
      "De Sants a Poble Sec, coordinamos avisos de fontanería, electricidad, gas y reformas en todo el distrito de Sants-Montjuïc con profesionales de nuestra red que conocen la zona.",
    neighborhoods: ["Sants", "Poble Sec", "La Bordeta", "Hostafrancs", "La Marina"],
  },
  {
    slug: "sant-marti",
    name: "Sant Martí",
    metaTitle: "Servicios para el hogar en Sant Martí, Barcelona | Hogarex",
    metaDescription:
      "Fontanería, electricidad, gas, pintura, carpintería y climatización en Sant Martí (Barcelona), incluido el Poblenou. Contacta con Hogarex y coordinamos al profesional adecuado.",
    intro:
      "Desde el Poblenou hasta el Clot, gestionamos servicios de fontanería, electricidad, gas y reformas para viviendas y locales de todo el distrito de Sant Martí.",
    neighborhoods: ["Poblenou", "El Clot", "La Vila Olímpica", "Diagonal Mar", "Sant Martí de Provençals"],
  },
  {
    slug: "ciutat-vella",
    name: "Ciutat Vella",
    metaTitle: "Servicios para el hogar en Ciutat Vella, Barcelona | Hogarex",
    metaDescription:
      "Fontanería, electricidad, gas, pintura, carpintería y climatización en Ciutat Vella (Barcelona): Gòtic, Born, Raval y Barceloneta. Contacta con Hogarex.",
    intro:
      "El casco antiguo de Barcelona tiene instalaciones particulares por la antigüedad de los edificios. Nuestra red de profesionales trabaja habitualmente en Ciutat Vella con ese tipo de instalaciones.",
    neighborhoods: ["Barri Gòtic", "El Born", "El Raval", "La Barceloneta"],
  },
  {
    slug: "sarria-sant-gervasi",
    name: "Sarrià-Sant Gervasi",
    metaTitle: "Servicios para el hogar en Sarrià-Sant Gervasi, Barcelona | Hogarex",
    metaDescription:
      "Fontanería, electricidad, gas, pintura, carpintería y climatización en Sarrià-Sant Gervasi (Barcelona). Contacta con Hogarex y coordinamos al profesional de nuestra red.",
    intro:
      "En Sarrià-Sant Gervasi atendemos tanto viviendas unifamiliares como pisos en finca, coordinando profesionales de nuestra red con experiencia en ambos tipos de instalación.",
    neighborhoods: ["Sarrià", "Sant Gervasi - Galvany", "Sant Gervasi - La Bonanova", "Pedralbes", "Vallvidrera"],
  },
];

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find((z) => z.slug === slug);
}
