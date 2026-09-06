export type WizardOption = {
  value: string;
  label: string;
};

export type WizardQuestion = {
  id: string;
  question: string;
  helpText?: string;
  options: WizardOption[];
};

export type RubroWizardConfig = {
  serviceSlug: string;
  problemQuestion: WizardQuestion;
  detailQuestion?: WizardQuestion;
  /** Valores de problemQuestion/detailQuestion que marcan la solicitud como urgente automáticamente. */
  autoUrgentValues?: string[];
  /** Aviso de seguridad que se muestra si se selecciona un valor de autoUrgentValues. */
  safetyWarning?: string;
};

export const rubroWizardConfigs: Record<string, RubroWizardConfig> = {
  fontaneria: {
    serviceSlug: "fontaneria",
    problemQuestion: {
      id: "problema",
      question: "¿Qué tipo de problema de fontanería tienes?",
      options: [
        { value: "fuga-agua", label: "Fuga de agua" },
        { value: "atasco", label: "Atasco o desagüe obstruido" },
        { value: "griferia", label: "Grifería (cambio o reparación)" },
        { value: "calentador", label: "Calentador o termo" },
        { value: "presion", label: "Problemas de presión de agua" },
        { value: "otro", label: "Otro" },
      ],
    },
    detailQuestion: {
      id: "detalle",
      question: "¿Desde cuándo tienes este problema?",
      options: [
        { value: "ahora-mismo", label: "Está ocurriendo ahora mismo" },
        { value: "hoy", label: "Ha empezado hoy" },
        { value: "dias", label: "Hace unos días" },
        { value: "recurrente", label: "Es un problema recurrente" },
      ],
    },
    autoUrgentValues: ["ahora-mismo"],
    safetyWarning:
      "Si la fuga es activa, cierra la llave de paso general mientras coordinamos al fontanero.",
  },
  electricidad: {
    serviceSlug: "electricidad",
    problemQuestion: {
      id: "problema",
      question: "¿Qué tipo de problema eléctrico tienes?",
      options: [
        { value: "corte-luz", label: "Corte de luz o avería" },
        { value: "cuadro", label: "Cambio de cuadro eléctrico" },
        { value: "instalacion", label: "Instalación nueva (enchufes, puntos de luz)" },
        { value: "boletin", label: "Necesito un boletín eléctrico" },
        { value: "domotica", label: "Domótica o automatización" },
        { value: "otro", label: "Otro" },
      ],
    },
    detailQuestion: {
      id: "detalle",
      question: "¿Hay algún riesgo inmediato (olor a quemado, chispas)?",
      options: [
        { value: "si-riesgo", label: "Sí, hay riesgo ahora mismo" },
        { value: "no-riesgo", label: "No, no hay riesgo inmediato" },
      ],
    },
    autoUrgentValues: ["si-riesgo"],
    safetyWarning: "Si notas olor a quemado, corta el interruptor general antes de nuestra llegada.",
  },
  gas: {
    serviceSlug: "gas",
    problemQuestion: {
      id: "problema",
      question: "¿Qué necesitas de gas?",
      options: [
        { value: "revision", label: "Revisión periódica obligatoria" },
        { value: "averia-caldera", label: "Avería en la caldera" },
        { value: "instalacion", label: "Instalación nueva" },
        { value: "olor-gas", label: "Huelo a gas ahora mismo" },
        { value: "certificado", label: "Certificado para compraventa o alquiler" },
        { value: "otro", label: "Otro" },
      ],
    },
    autoUrgentValues: ["olor-gas"],
    safetyWarning:
      "Cierra la llave de paso, ventila el espacio y no enciendas luces ni llamas. Te recomendamos llamarnos directamente además de enviar la solicitud.",
  },
  pintura: {
    serviceSlug: "pintura",
    problemQuestion: {
      id: "problema",
      question: "¿Qué quieres pintar?",
      options: [
        { value: "piso-completo", label: "Piso completo" },
        { value: "habitacion", label: "Una o varias habitaciones" },
        { value: "fachada", label: "Fachada o exterior" },
        { value: "comunidad", label: "Escalera o zona comunitaria" },
        { value: "otro", label: "Otro" },
      ],
    },
    detailQuestion: {
      id: "detalle",
      question: "¿Cuántos metros cuadrados aproximados?",
      options: [
        { value: "menos-30", label: "Menos de 30 m²" },
        { value: "30-60", label: "Entre 30 y 60 m²" },
        { value: "60-90", label: "Entre 60 y 90 m²" },
        { value: "mas-90", label: "Más de 90 m²" },
      ],
    },
  },
  carpinteria: {
    serviceSlug: "carpinteria",
    problemQuestion: {
      id: "problema",
      question: "¿Qué necesitas?",
      options: [
        { value: "mueble-medida", label: "Mueble a medida" },
        { value: "puerta", label: "Puerta (instalación o reparación)" },
        { value: "ventana", label: "Ventana o cerramiento" },
        { value: "tarima", label: "Tarima o suelo de madera" },
        { value: "reparacion", label: "Reparación puntual (bisagra, cerradura)" },
        { value: "otro", label: "Otro" },
      ],
    },
    detailQuestion: {
      id: "detalle",
      question: "¿Ya tienes las medidas tomadas?",
      options: [
        { value: "si-medidas", label: "Sí, tengo las medidas" },
        { value: "no-medidas", label: "No, necesito que las tomen" },
      ],
    },
  },
  climatizacion: {
    serviceSlug: "climatizacion",
    problemQuestion: {
      id: "problema",
      question: "¿Qué necesitas?",
      options: [
        { value: "instalacion", label: "Instalación de aire acondicionado" },
        { value: "averia", label: "Avería (no enfría o no calienta)" },
        { value: "mantenimiento", label: "Mantenimiento o revisión" },
        { value: "caldera", label: "Caldera de calefacción" },
        { value: "otro", label: "Otro" },
      ],
    },
    detailQuestion: {
      id: "detalle",
      question: "¿Qué tipo de equipo tienes o quieres instalar?",
      options: [
        { value: "split", label: "Split (1x1)" },
        { value: "multisplit", label: "Multisplit (varias unidades)" },
        { value: "conductos", label: "Por conductos" },
        { value: "calefaccion", label: "Radiadores o suelo radiante" },
        { value: "no-se", label: "No lo sé" },
      ],
    },
  },
};

export const contactTimeOptions: WizardOption[] = [
  { value: "manana", label: "Por la mañana" },
  { value: "tarde", label: "Por la tarde" },
  { value: "noche", label: "Por la noche" },
  { value: "cualquiera", label: "Cualquier horario" },
];
