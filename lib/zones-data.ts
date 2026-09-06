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
    metaTitle: "Fontanero, Electricista y Gas en Eixample, Barcelona | Hogarex",
    metaDescription:
      "Servicios de fontanería, electricidad y gas en Eixample (Barcelona). Contactá a Hogarex y coordinamos al profesional de nuestra red para tu zona.",
    intro:
      "En el Eixample gestionamos a diario avisos de fontanería, electricidad y gas, desde fincas de principios del siglo XX hasta edificios reformados. Contactanos y coordinamos al profesional de nuestra red disponible en la zona.",
    neighborhoods: ["Dreta de l'Eixample", "Antiga Esquerra de l'Eixample", "Nova Esquerra de l'Eixample", "Sant Antoni", "Fort Pienc"],
  },
  {
    slug: "gracia",
    name: "Gràcia",
    metaTitle: "Fontanero, Electricista y Gas en Gràcia, Barcelona | Hogarex",
    metaDescription:
      "Servicios de fontanería, electricidad y gas en Gràcia (Barcelona). Contactá a Hogarex y coordinamos al profesional de nuestra red para tu zona.",
    intro:
      "Gràcia combina edificios históricos y reformas recientes, lo que exige experiencia tanto en instalaciones antiguas como modernas. Nuestra red de profesionales cubre todo el distrito.",
    neighborhoods: ["Vila de Gràcia", "Camp d'en Grassot", "El Coll", "Vallcarca", "La Salut"],
  },
  {
    slug: "sants-montjuic",
    name: "Sants-Montjuïc",
    metaTitle: "Fontanero, Electricista y Gas en Sants-Montjuïc, Barcelona | Hogarex",
    metaDescription:
      "Servicios de fontanería, electricidad y gas en Sants-Montjuïc (Barcelona). Contactá a Hogarex y coordinamos al profesional de nuestra red para tu zona.",
    intro:
      "De Sants a Poble Sec, coordinamos avisos de fontanería, electricidad y gas en todo el distrito de Sants-Montjuïc con profesionales de nuestra red que conocen la zona.",
    neighborhoods: ["Sants", "Poble Sec", "La Bordeta", "Hostafrancs", "La Marina"],
  },
  {
    slug: "sant-marti",
    name: "Sant Martí",
    metaTitle: "Fontanero, Electricista y Gas en Sant Martí, Barcelona | Hogarex",
    metaDescription:
      "Servicios de fontanería, electricidad y gas en Sant Martí (Barcelona), incluido el Poblenou. Contactá a Hogarex y coordinamos al profesional adecuado.",
    intro:
      "Desde el Poblenou hasta el Clot, gestionamos servicios de fontanería, electricidad y gas para viviendas y locales de todo el distrito de Sant Martí.",
    neighborhoods: ["Poblenou", "El Clot", "La Vila Olímpica", "Diagonal Mar", "Sant Martí de Provençals"],
  },
  {
    slug: "ciutat-vella",
    name: "Ciutat Vella",
    metaTitle: "Fontanero, Electricista y Gas en Ciutat Vella, Barcelona | Hogarex",
    metaDescription:
      "Servicios de fontanería, electricidad y gas en Ciutat Vella (Barcelona): Gòtic, Born, Raval y Barceloneta. Contactá a Hogarex.",
    intro:
      "El casco antiguo de Barcelona tiene instalaciones particulares por la antigüedad de los edificios. Nuestra red de profesionales trabaja habitualmente en Ciutat Vella con ese tipo de instalaciones.",
    neighborhoods: ["Barri Gòtic", "El Born", "El Raval", "La Barceloneta"],
  },
  {
    slug: "sarria-sant-gervasi",
    name: "Sarrià-Sant Gervasi",
    metaTitle: "Fontanero, Electricista y Gas en Sarrià-Sant Gervasi, Barcelona | Hogarex",
    metaDescription:
      "Servicios de fontanería, electricidad y gas en Sarrià-Sant Gervasi (Barcelona). Contactá a Hogarex y coordinamos al profesional de nuestra red.",
    intro:
      "En Sarrià-Sant Gervasi atendemos tanto viviendas unifamiliares como pisos en finca, coordinando profesionales de nuestra red con experiencia en ambos tipos de instalación.",
    neighborhoods: ["Sarrià", "Sant Gervasi - Galvany", "Sant Gervasi - La Bonanova", "Pedralbes", "Vallvidrera"],
  },
];

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find((z) => z.slug === slug);
}
