export type ProToolSummary = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: "calculator" | "document" | "chat";
};

export const proTools: ProToolSummary[] = [
  {
    slug: "cuanto-cobrar",
    name: "¿Cuánto cobrar por un trabajo?",
    shortDescription:
      "Guía de precios por oficio en Barcelona y calculadora para saber qué cobrar según horas, materiales y desplazamiento.",
    icon: "calculator",
  },
  {
    slug: "presupuestos",
    name: "Generador de presupuestos",
    shortDescription:
      "Crea un presupuesto profesional para tu cliente en dos minutos y descárgalo o imprímelo en PDF, gratis.",
    icon: "document",
  },
  {
    slug: "plantillas-whatsapp",
    name: "Plantillas de WhatsApp para clientes",
    shortDescription:
      "Mensajes ya redactados para confirmar citas, pedir reseñas o recordar pagos, listos para copiar y pegar.",
    icon: "chat",
  },
];

export const painPoints = [
  {
    title: "Pierdes horas cuadrando presupuestos",
    description: "Cada cliente pide algo distinto y armar el presupuesto te lleva más tiempo que el trabajo en sí.",
  },
  {
    title: "Los clientes no contestan o se olvidan de la cita",
    description: "Escribes, llamas, esperas... y a veces ni te confirman si finalmente quieren el servicio.",
  },
  {
    title: "El marketing es un gasto sin garantías",
    description: "Pagar publicidad o estar en varios directorios no siempre se traduce en trabajos reales.",
  },
  {
    title: "El seguimiento de cobros y reseñas queda en segundo plano",
    description: "Entre trabajo y trabajo, cobrar a tiempo o pedir una reseña termina quedando pendiente.",
  },
];

export const proBenefits = [
  {
    title: "Gestión de clientes",
    description: "Nosotros hablamos primero con el cliente, entendemos qué necesita y te lo derivamos ya filtrado.",
  },
  {
    title: "Agenda de citas",
    description: "Coordinamos horarios con el cliente según tu disponibilidad, sin que tengas que estar pendiente del móvil todo el día.",
  },
  {
    title: "Presupuestos ya acordados",
    description: "Llegas al trabajo con el presupuesto ya hablado con el cliente, sin discusiones de precio en la puerta.",
  },
  {
    title: "Seguimiento y cobro",
    description: "Hacemos seguimiento de que el trabajo quede conforme y ayudamos a que el cobro no se demore.",
  },
  {
    title: "Trabajo constante",
    description: "Formas parte de una red con demanda continua en Barcelona: menos temporadas muertas.",
  },
  {
    title: "Cero gasto en marketing",
    description: "No necesitas pagar publicidad ni estar en varios directorios: nosotros traemos al cliente.",
  },
];

export const howItWorksForPros = [
  {
    title: "Cuéntanos tu oficio y tu zona",
    description: "Rellenas un formulario breve: qué haces, en qué zonas de Barcelona trabajas y tu disponibilidad.",
  },
  {
    title: "Validamos tu perfil",
    description: "Confirmamos tus datos y, cuando corresponde, tu habilitación o certificación (electricidad, gas).",
  },
  {
    title: "Te asignamos trabajos",
    description: "Cuando llega una solicitud que encaja con tu oficio y tu zona, te la ofrecemos con el presupuesto ya hablado.",
  },
  {
    title: "Tú trabajas, nosotros gestionamos",
    description: "Te enfocas en hacer el trabajo. Nosotros nos encargamos del cliente, el seguimiento y la comunicación.",
  },
];

export type MessageTemplate = {
  category: string;
  title: string;
  text: string;
};

export const messageTemplates: MessageTemplate[] = [
  {
    category: "Confirmar cita",
    title: "Confirmar visita",
    text: "Hola [Nombre], soy [Tu nombre]. Te confirmo la visita para [trabajo] el [fecha] a las [hora]. Cualquier cambio, avísame con tiempo. ¡Hasta entonces!",
  },
  {
    category: "Confirmar cita",
    title: "Recordatorio el día antes",
    text: "Hola [Nombre], te escribo para recordarte que mañana [fecha] a las [hora] paso por [dirección] para [trabajo]. ¿Sigue en pie?",
  },
  {
    category: "Presupuesto",
    title: "Enviar presupuesto",
    text: "Hola [Nombre], adjunto el presupuesto para [trabajo]. El importe total es de [importe]. Quedo atento/a a tu confirmación para agendar la fecha.",
  },
  {
    category: "Presupuesto",
    title: "Seguimiento de presupuesto sin respuesta",
    text: "Hola [Nombre], te escribo por el presupuesto de [trabajo] que te envié el [fecha]. ¿Has podido revisarlo? Cualquier duda, encantado/a de resolverla.",
  },
  {
    category: "Después del trabajo",
    title: "Trabajo terminado",
    text: "Hola [Nombre], ya he terminado con [trabajo]. Cualquier cosa que necesites revisar, escríbeme sin problema. ¡Gracias por confiar en mí!",
  },
  {
    category: "Después del trabajo",
    title: "Pedir una reseña",
    text: "Hola [Nombre], me alegra que haya quedado todo bien con [trabajo]. Si tienes un minuto, me ayudaría muchísimo que dejaras una reseña contando tu experiencia. ¡Gracias!",
  },
  {
    category: "Cobros",
    title: "Recordar un pago pendiente",
    text: "Hola [Nombre], te escribo para recordarte el pago pendiente de [importe] por [trabajo] del [fecha]. Cuando puedas hacerlo, me confirmas. ¡Gracias!",
  },
  {
    category: "Cobros",
    title: "Confirmar pago recibido",
    text: "Hola [Nombre], confirmo que he recibido el pago de [importe]. ¡Gracias por la confianza! Cualquier cosa que necesites, aquí estoy.",
  },
];

export const proFaqs = [
  {
    question: "¿Cuánto cuesta unirme a la red de Hogarex?",
    answer:
      "Contarnos tu perfil no tiene coste. Hablamos las condiciones de colaboración (comisión por trabajo derivado) al validar tu alta, según tu oficio y zona.",
  },
  {
    question: "¿Necesito estar dado de alta como autónomo?",
    answer:
      "Sí, para poder derivarte trabajos necesitamos que factures tu actividad como autónomo o empresa, y que cuentes con la habilitación correspondiente cuando el oficio lo requiera (electricidad, gas).",
  },
  {
    question: "¿Puedo seguir trabajando con mis propios clientes?",
    answer:
      "Sí. Unirte a Hogarex no es exclusivo: seguimos derivándote trabajo cuando encaje con tu disponibilidad, sin que dejes tu actividad habitual.",
  },
  {
    question: "¿Cómo se reparten los trabajos entre profesionales?",
    answer:
      "Según oficio, zona de Barcelona y disponibilidad. Cuantas más zonas cubras y más rápido confirmes disponibilidad, más solicitudes te podemos ofrecer.",
  },
  {
    question: "¿Las herramientas como el generador de presupuestos son gratis aunque no me una?",
    answer:
      "Sí, son gratuitas para cualquier profesional del hogar en Barcelona, te unas o no a la red. Eso sí, si te unes, dejas de tener que usarlas tú mismo: lo gestionamos por ti.",
  },
];
