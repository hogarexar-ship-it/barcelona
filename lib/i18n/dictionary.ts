import type { Locale } from "./context";

export type Dictionary = {
  nav: {
    servicios: string;
    buscarServicio: string;
    zonas: string;
    precios: string;
    urgencias: string;
    blog: string;
    sobreNosotros: string;
    contacto: string;
    eresProfesional: string;
    eresProfesionalLargo: string;
    pedirPresupuesto: string;
    menu: string;
    abrirMenu: string;
    cerrarMenu: string;
    buscarAria: string;
  };
  bottomBar: {
    inicio: string;
    servicios: string;
    solicitar: string;
    whatsapp: string;
    mas: string;
  };
  footer: {
    tagline: string;
    serviciosTitle: string;
    buscarUnServicio: string;
    profesionalesTitle: string;
    unete: string;
    cuantoCobrar: string;
    generadorPresupuestos: string;
    plantillasWhatsapp: string;
    zonasTitle: string;
    verTodasZonas: string;
    contactoTitle: string;
    pedirPresupuesto: string;
    avisoLegal: string;
    politicaPrivacidad: string;
    politicaCookies: string;
    disclaimer: (year: number, brand: string, founding: string) => string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    elegirProblema: string;
    verTodosServicios: string;
    quickProblems: { label: string; rubro: string; problema: string }[];
    comoFunciona: {
      title: string;
      subtitle: string;
      steps: { title: string; description: string }[];
      cta: string;
    };
    servicios: { title: string; subtitle: string };
    trabajos: { title: string; subtitle: string; items: { title: string; zone: string }[] };
    zonas: { title: string; subtitle: string; verCobertura: string };
    confianza: { title: string; points: { title: string; description: string }[] };
    testimonios: { title: string; items: { name: string; zone: string; text: string }[] };
    urgencia: { title: string; subtitle: string };
    faq: { title: string; items: { question: string; answer: string }[] };
  };
  wizard: {
    saludoInicial: string;
    tituloRubro: string;
    atras: string;
    siguiente: string;
    cerrar: string;
    pasoDe: (step: number, total: number) => string;
    avisoSeguridad: string;
    zona: {
      title: string;
      barrioLabel: string;
      barrioPlaceholder: string;
      direccionLabel: string;
      direccionPlaceholder: string;
      esUrgente: string;
      siUrgente: string;
      noUrgente: string;
      urgenteAuto: string;
    };
    contacto: {
      title: string;
      nombreLabel: string;
      nombrePlaceholder: string;
      telefonoLabel: string;
      telefonoPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      horarioLabel: string;
    };
    resumen: {
      title: string;
      servicio: string;
      problema: string;
      detalle: string;
      zona: string;
      direccion: string;
      noIndicada: string;
      urgente: string;
      si: string;
      no: string;
      nombre: string;
      telefono: string;
      email: string;
      noIndicado: string;
      horario: string;
      enviarBtn: string;
      llamarAhora: string;
      confirmacion: string;
    };
    entry: { steps: string[]; cta: string; ctaHint: string };
  };
};

const es: Dictionary = {
  nav: {
    servicios: "Servicios",
    buscarServicio: "Buscar servicio",
    zonas: "Zonas",
    precios: "Precios",
    urgencias: "Urgencias 24h",
    blog: "Blog",
    sobreNosotros: "Sobre nosotros",
    contacto: "Contacto",
    eresProfesional: "¿Eres profesional?",
    eresProfesionalLargo: "¿Eres profesional? Únete a la red",
    pedirPresupuesto: "Pedir presupuesto",
    menu: "Menú",
    abrirMenu: "Abrir menú",
    cerrarMenu: "Cerrar menú",
    buscarAria: "Buscar un servicio",
  },
  bottomBar: {
    inicio: "Inicio",
    servicios: "Servicios",
    solicitar: "Solicitar",
    whatsapp: "WhatsApp",
    mas: "Más",
  },
  footer: {
    tagline: "Red de profesionales de oficio en Barcelona",
    serviciosTitle: "Servicios",
    buscarUnServicio: "Buscar un servicio",
    profesionalesTitle: "Profesionales",
    unete: "Únete a la red",
    cuantoCobrar: "¿Cuánto cobrar?",
    generadorPresupuestos: "Generador de presupuestos",
    plantillasWhatsapp: "Plantillas de WhatsApp",
    zonasTitle: "Zonas",
    verTodasZonas: "Ver todas las zonas",
    contactoTitle: "Contacto",
    pedirPresupuesto: "Pedir presupuesto",
    avisoLegal: "Aviso legal",
    politicaPrivacidad: "Política de privacidad",
    politicaCookies: "Política de cookies",
    disclaimer: (year, brand, founding) =>
      `© ${year} ${brand}. ${brand} es una marca operada en Barcelona, España, en gestión con nuestra red de profesionales independientes del hogar. Fundada en Argentina (${founding}).`,
  },
  home: {
    heroTitle: "Te conectamos con los mejores profesionales de Barcelona",
    heroSubtitle:
      "Red de profesionales de oficio en Barcelona: fontanería, electricidad, gas, pintura, carpintería y climatización.",
    elegirProblema: "¿Cuál es tu problema? Elige uno:",
    verTodosServicios: "Ver todos los servicios →",
    quickProblems: [
      { label: "Fuga de agua", rubro: "fontaneria", problema: "fuga-agua" },
      { label: "Corte de luz", rubro: "electricidad", problema: "corte-luz" },
      { label: "Huelo a gas", rubro: "gas", problema: "olor-gas" },
      { label: "Pintar una habitación", rubro: "pintura", problema: "habitacion" },
      { label: "Mueble a medida", rubro: "carpinteria", problema: "mueble-medida" },
      { label: "Aire acondicionado averiado", rubro: "climatizacion", problema: "averia" },
    ],
    comoFunciona: {
      title: "Cómo funciona",
      subtitle: "Una gestión directa, no un directorio de anuncios",
      steps: [
        {
          title: "Nos cuentas el problema",
          description: "Con el formulario de solicitud, por WhatsApp o por teléfono: qué pasa y en qué zona de Barcelona estás.",
        },
        {
          title: "Nosotros coordinamos",
          description: "Asignamos, dentro de nuestra red, al profesional adecuado y te confirmamos horario y presupuesto.",
        },
        {
          title: "El trabajo se resuelve",
          description: "El profesional hace el trabajo y nuestro equipo hace seguimiento de que quede conforme.",
        },
      ],
      cta: "Empezar mi solicitud",
    },
    servicios: {
      title: "Servicios que gestionamos en Barcelona",
      subtitle: "Fontanería, electricidad, gas, pintura, carpintería y climatización, con seguimiento de nuestro equipo de principio a fin",
    },
    trabajos: {
      title: "Trabajos gestionados en Barcelona",
      subtitle: "Una muestra de los tipos de trabajo que coordinamos cada semana en la ciudad",
      items: [
        { title: "Reparación de fuga", zone: "Eixample" },
        { title: "Cambio de cuadro eléctrico", zone: "Gràcia" },
        { title: "Instalación de caldera", zone: "Sant Martí" },
        { title: "Pintura de salón", zone: "Sants-Montjuïc" },
        { title: "Armario a medida", zone: "Ciutat Vella" },
        { title: "Instalación de aire acondicionado", zone: "Sarrià-Sant Gervasi" },
      ],
    },
    zonas: {
      title: "Zonas de Barcelona donde operamos",
      subtitle: "Cobertura en toda la ciudad",
      verCobertura: "Ver cobertura completa por barrio →",
    },
    confianza: {
      title: "Por qué confiar en Hogarex",
      points: [
        { title: "Presupuesto antes de empezar", description: "Confirmamos el precio estimado antes de que el profesional se presente." },
        { title: "Profesionales de nuestra red", description: "Coordinamos siempre con profesionales habituales, no con anuncios sueltos." },
        { title: "Seguimiento del trabajo", description: "Hacemos seguimiento hasta que el trabajo queda resuelto a tu satisfacción." },
        { title: "Atención en toda Barcelona", description: "Cobertura en los principales distritos de la ciudad." },
      ],
    },
    testimonios: {
      title: "Lo que dicen quienes ya nos contactaron",
      items: [
        {
          name: "Marta G.",
          zone: "Eixample",
          text: "Llamé por una fuga un domingo y en menos de dos horas ya tenía al fontanero en casa. Todo coordinado por WhatsApp, sin complicaciones.",
        },
        {
          name: "Jordi P.",
          zone: "Gràcia",
          text: "Pedí presupuesto para pintar el piso entero y me lo confirmaron antes de empezar. El precio final fue el mismo que el presupuesto.",
        },
        {
          name: "Laia S.",
          zone: "Sant Martí",
          text: "Se encargaron de todo: desde la primera llamada hasta el boletín eléctrico final. No tuve que buscar a nadie por mi cuenta.",
        },
      ],
    },
    urgencia: {
      title: "¿Tienes una urgencia ahora mismo?",
      subtitle: "Fugas activas, cortes de luz u olor a gas: contacta con nosotros y priorizamos tu caso.",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Hogarex es un marketplace donde elijo el profesional?",
          answer:
            "No. En Hogarex Barcelona nos contactas directamente a nosotros, nos cuentas el problema, y nuestro equipo coordina internamente al profesional de nuestra red que va a resolverlo. No hay perfiles públicos para comparar ni sistema de búsqueda: la gestión es directa con nosotros de principio a fin.",
        },
        {
          question: "¿Qué servicios gestiona Hogarex en Barcelona?",
          answer:
            "Gestionamos servicios de fontanería, electricidad, gas, pintura, carpintería y aire acondicionado/calefacción para hogares en Barcelona ciudad: desde averías urgentes hasta instalaciones, revisiones y reformas puntuales.",
        },
        {
          question: "¿Cómo pido un servicio?",
          answer:
            "Con el formulario de solicitud, por WhatsApp o por teléfono. Cuéntanos qué necesitas y en qué zona estás, y coordinamos al profesional de nuestra red adecuado, confirmándote horario y presupuesto antes de la visita.",
        },
        {
          question: "¿Tenéis atención de urgencias 24 horas?",
          answer:
            "Sí, para averías urgentes de fontanería, electricidad, gas o climatización ofrecemos coordinación de atención fuera del horario habitual, con un recargo que te informamos antes de confirmar.",
        },
      ],
    },
  },
  wizard: {
    saludoInicial: "Hola Hogarex, quiero solicitar un servicio a través del formulario de solicitud.",
    tituloRubro: "¿Qué tipo de profesional necesitas?",
    atras: "Atrás",
    siguiente: "Siguiente",
    cerrar: "Cerrar",
    pasoDe: (step, total) => `Paso ${step} de ${total}`,
    avisoSeguridad: "Aviso de seguridad",
    zona: {
      title: "¿Dónde es el trabajo?",
      barrioLabel: "Barrio o zona de Barcelona",
      barrioPlaceholder: "Ej: Gràcia, Eixample, Sants...",
      direccionLabel: "Dirección (opcional)",
      direccionPlaceholder: "Calle y número",
      esUrgente: "¿Es urgente?",
      siUrgente: "Sí, es urgente",
      noUrgente: "No es urgente",
      urgenteAuto: "Hemos marcado esta solicitud como urgente según tu respuesta anterior.",
    },
    contacto: {
      title: "Tus datos de contacto",
      nombreLabel: "Nombre",
      nombrePlaceholder: "Tu nombre",
      telefonoLabel: "Teléfono",
      telefonoPlaceholder: "600 000 000",
      emailLabel: "Email (opcional)",
      emailPlaceholder: "tu@email.com",
      horarioLabel: "Mejor horario para contactarte",
    },
    resumen: {
      title: "Revisa tu solicitud",
      servicio: "Servicio",
      problema: "Problema",
      detalle: "Detalle",
      zona: "Zona",
      direccion: "Dirección",
      noIndicada: "No indicada",
      urgente: "Urgente",
      si: "Sí",
      no: "No",
      nombre: "Nombre",
      telefono: "Teléfono",
      email: "Email",
      noIndicado: "No indicado",
      horario: "Horario preferido",
      enviarBtn: "Enviar solicitud por WhatsApp",
      llamarAhora: "Llamar ahora",
      confirmacion:
        "Hemos abierto WhatsApp con tu solicitud ya redactada. Confirma el envío desde ahí y te contactaremos para coordinar al profesional adecuado.",
    },
    entry: {
      steps: [
        "Elige el tipo de profesional que necesitas",
        "Cuéntanos el problema y tu zona en Barcelona",
        "Te confirmamos horario y presupuesto",
      ],
      cta: "Iniciar solicitud",
      ctaHint: "Tarda menos de un minuto. Sin registro.",
    },
  },
};

const ca: Dictionary = {
  nav: {
    servicios: "Serveis",
    buscarServicio: "Cercar servei",
    zonas: "Zones",
    precios: "Preus",
    urgencias: "Urgències 24h",
    blog: "Blog",
    sobreNosotros: "Sobre nosaltres",
    contacto: "Contacte",
    eresProfesional: "Ets professional?",
    eresProfesionalLargo: "Ets professional? Uneix-te a la xarxa",
    pedirPresupuesto: "Demanar pressupost",
    menu: "Menú",
    abrirMenu: "Obrir menú",
    cerrarMenu: "Tancar menú",
    buscarAria: "Cercar un servei",
  },
  bottomBar: {
    inicio: "Inici",
    servicios: "Serveis",
    solicitar: "Sol·licitar",
    whatsapp: "WhatsApp",
    mas: "Més",
  },
  footer: {
    tagline: "Xarxa de professionals d'ofici a Barcelona",
    serviciosTitle: "Serveis",
    buscarUnServicio: "Cercar un servei",
    profesionalesTitle: "Professionals",
    unete: "Uneix-te a la xarxa",
    cuantoCobrar: "Quant cobrar?",
    generadorPresupuestos: "Generador de pressupostos",
    plantillasWhatsapp: "Plantilles de WhatsApp",
    zonasTitle: "Zones",
    verTodasZonas: "Veure totes les zones",
    contactoTitle: "Contacte",
    pedirPresupuesto: "Demanar pressupost",
    avisoLegal: "Avís legal",
    politicaPrivacidad: "Política de privacitat",
    politicaCookies: "Política de cookies",
    disclaimer: (year, brand, founding) =>
      `© ${year} ${brand}. ${brand} és una marca operada a Barcelona, Espanya, en gestió amb la nostra xarxa de professionals independents de la llar. Fundada a l'Argentina (${founding}).`,
  },
  home: {
    heroTitle: "Et connectem amb els millors professionals de Barcelona",
    heroSubtitle:
      "Xarxa de professionals d'ofici a Barcelona: fontaneria, electricitat, gas, pintura, fusteria i climatització.",
    elegirProblema: "Quin és el teu problema? Tria'n un:",
    verTodosServicios: "Veure tots els serveis →",
    quickProblems: [
      { label: "Fuga d'aigua", rubro: "fontaneria", problema: "fuga-agua" },
      { label: "Tall de llum", rubro: "electricidad", problema: "corte-luz" },
      { label: "Faig olor de gas", rubro: "gas", problema: "olor-gas" },
      { label: "Pintar una habitació", rubro: "pintura", problema: "habitacion" },
      { label: "Moble a mida", rubro: "carpinteria", problema: "mueble-medida" },
      { label: "Aire condicionat espatllat", rubro: "climatizacion", problema: "averia" },
    ],
    comoFunciona: {
      title: "Com funciona",
      subtitle: "Una gestió directa, no un directori d'anuncis",
      steps: [
        {
          title: "Ens expliques el problema",
          description: "Amb el formulari de sol·licitud, per WhatsApp o per telèfon: què passa i en quina zona de Barcelona ets.",
        },
        {
          title: "Nosaltres coordinem",
          description: "Assignem, dins la nostra xarxa, el professional adequat i et confirmem horari i pressupost.",
        },
        {
          title: "La feina es resol",
          description: "El professional fa la feina i el nostre equip fa seguiment perquè quedi conforme.",
        },
      ],
      cta: "Començar la meva sol·licitud",
    },
    servicios: {
      title: "Serveis que gestionem a Barcelona",
      subtitle: "Fontaneria, electricitat, gas, pintura, fusteria i climatització, amb seguiment del nostre equip de principi a fi",
    },
    trabajos: {
      title: "Feines gestionades a Barcelona",
      subtitle: "Una mostra dels tipus de feina que coordinem cada setmana a la ciutat",
      items: [
        { title: "Reparació de fuga", zone: "Eixample" },
        { title: "Canvi de quadre elèctric", zone: "Gràcia" },
        { title: "Instal·lació de caldera", zone: "Sant Martí" },
        { title: "Pintura de saló", zone: "Sants-Montjuïc" },
        { title: "Armari a mida", zone: "Ciutat Vella" },
        { title: "Instal·lació d'aire condicionat", zone: "Sarrià-Sant Gervasi" },
      ],
    },
    zonas: {
      title: "Zones de Barcelona on operem",
      subtitle: "Cobertura a tota la ciutat",
      verCobertura: "Veure cobertura completa per barri →",
    },
    confianza: {
      title: "Per què confiar en Hogarex",
      points: [
        { title: "Pressupost abans de començar", description: "Confirmem el preu estimat abans que el professional es presenti." },
        { title: "Professionals de la nostra xarxa", description: "Coordinem sempre amb professionals habituals, no amb anuncis solts." },
        { title: "Seguiment de la feina", description: "Fem seguiment fins que la feina queda resolta a la teva satisfacció." },
        { title: "Atenció a tota Barcelona", description: "Cobertura als principals districtes de la ciutat." },
      ],
    },
    testimonios: {
      title: "El que diuen qui ja ens ha contactat",
      items: [
        {
          name: "Marta G.",
          zone: "Eixample",
          text: "Vaig trucar per una fuga un diumenge i en menys de dues hores ja tenia el lampista a casa. Tot coordinat per WhatsApp, sense complicacions.",
        },
        {
          name: "Jordi P.",
          zone: "Gràcia",
          text: "Vaig demanar pressupost per pintar el pis sencer i me'l van confirmar abans de començar. El preu final va ser el mateix que el pressupost.",
        },
        {
          name: "Laia S.",
          zone: "Sant Martí",
          text: "Es van encarregar de tot: des de la primera trucada fins al butlletí elèctric final. No vaig haver de buscar ningú pel meu compte.",
        },
      ],
    },
    urgencia: {
      title: "Tens una urgència ara mateix?",
      subtitle: "Fugues actives, talls de llum o olor de gas: contacta amb nosaltres i prioritzem el teu cas.",
    },
    faq: {
      title: "Preguntes freqüents",
      items: [
        {
          question: "Hogarex és un marketplace on trio el professional?",
          answer:
            "No. A Hogarex Barcelona ens contactes directament a nosaltres, ens expliques el problema, i el nostre equip coordina internament el professional de la nostra xarxa que ho resoldrà. No hi ha perfils públics per comparar ni sistema de cerca: la gestió és directa amb nosaltres de principi a fi.",
        },
        {
          question: "Quins serveis gestiona Hogarex a Barcelona?",
          answer:
            "Gestionem serveis de fontaneria, electricitat, gas, pintura, fusteria i aire condicionat/calefacció per a llars a la ciutat de Barcelona: des d'avaries urgents fins a instal·lacions, revisions i reformes puntuals.",
        },
        {
          question: "Com demano un servei?",
          answer:
            "Amb el formulari de sol·licitud, per WhatsApp o per telèfon. Explica'ns què necessites i en quina zona ets, i coordinem el professional de la nostra xarxa adequat, confirmant-te horari i pressupost abans de la visita.",
        },
        {
          question: "Teniu atenció d'urgències 24 hores?",
          answer:
            "Sí, per a avaries urgents de fontaneria, electricitat, gas o climatització oferim coordinació d'atenció fora de l'horari habitual, amb un recàrrec que t'informem abans de confirmar.",
        },
      ],
    },
  },
  wizard: {
    saludoInicial: "Hola Hogarex, vull sol·licitar un servei a través del formulari de sol·licitud.",
    tituloRubro: "Quin tipus de professional necessites?",
    atras: "Enrere",
    siguiente: "Següent",
    cerrar: "Tancar",
    pasoDe: (step, total) => `Pas ${step} de ${total}`,
    avisoSeguridad: "Avís de seguretat",
    zona: {
      title: "On és la feina?",
      barrioLabel: "Barri o zona de Barcelona",
      barrioPlaceholder: "Ex: Gràcia, Eixample, Sants...",
      direccionLabel: "Adreça (opcional)",
      direccionPlaceholder: "Carrer i número",
      esUrgente: "És urgent?",
      siUrgente: "Sí, és urgent",
      noUrgente: "No és urgent",
      urgenteAuto: "Hem marcat aquesta sol·licitud com a urgent segons la teva resposta anterior.",
    },
    contacto: {
      title: "Les teves dades de contacte",
      nombreLabel: "Nom",
      nombrePlaceholder: "El teu nom",
      telefonoLabel: "Telèfon",
      telefonoPlaceholder: "600 000 000",
      emailLabel: "Email (opcional)",
      emailPlaceholder: "tu@email.com",
      horarioLabel: "Millor horari per contactar-te",
    },
    resumen: {
      title: "Revisa la teva sol·licitud",
      servicio: "Servei",
      problema: "Problema",
      detalle: "Detall",
      zona: "Zona",
      direccion: "Adreça",
      noIndicada: "No indicada",
      urgente: "Urgent",
      si: "Sí",
      no: "No",
      nombre: "Nom",
      telefono: "Telèfon",
      email: "Email",
      noIndicado: "No indicat",
      horario: "Horari preferit",
      enviarBtn: "Enviar sol·licitud per WhatsApp",
      llamarAhora: "Trucar ara",
      confirmacion:
        "Hem obert WhatsApp amb la teva sol·licitud ja redactada. Confirma l'enviament des d'allà i et contactarem per coordinar el professional adequat.",
    },
    entry: {
      steps: [
        "Tria el tipus de professional que necessites",
        "Explica'ns el problema i la teva zona a Barcelona",
        "Et confirmem horari i pressupost",
      ],
      cta: "Iniciar sol·licitud",
      ctaHint: "Triga menys d'un minut. Sense registre.",
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = { es, ca };
