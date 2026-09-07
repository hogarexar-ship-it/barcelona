import { rubroWizardConfigs } from "@/lib/wizard-data";
import type { RubroWizardConfig, WizardOption } from "@/lib/wizard-data";
import type { Locale } from "./context";

/**
 * Traducción al catalán del contenido del wizard por rubro. Los `value`
 * de cada opción se mantienen IDÉNTICOS a `lib/wizard-data.ts` a
 * propósito: son los que viajan en la URL (`?rubro=&problema=`) y en la
 * lógica de urgencia automática, así que solo cambian los textos
 * visibles (`label`, `question`, `safetyWarning`).
 */
const rubroWizardConfigsCa: Record<string, RubroWizardConfig> = {
  fontaneria: {
    serviceSlug: "fontaneria",
    problemQuestion: {
      id: "problema",
      question: "Quin tipus de problema de fontaneria tens?",
      options: [
        { value: "fuga-agua", label: "Fuga d'aigua" },
        { value: "atasco", label: "Embús o desguàs obstruït" },
        { value: "griferia", label: "Aixetes (canvi o reparació)" },
        { value: "calentador", label: "Escalfador o termo" },
        { value: "presion", label: "Problemes de pressió d'aigua" },
        { value: "otro", label: "Un altre" },
      ],
    },
    detailQuestion: {
      id: "detalle",
      question: "Des de quan tens aquest problema?",
      options: [
        { value: "ahora-mismo", label: "Està passant ara mateix" },
        { value: "hoy", label: "Ha començat avui" },
        { value: "dias", label: "Fa uns dies" },
        { value: "recurrente", label: "És un problema recurrent" },
      ],
    },
    autoUrgentValues: ["ahora-mismo"],
    safetyWarning:
      "Si la fuga és activa, tanca la clau de pas general mentre coordinem el lampista.",
  },
  electricidad: {
    serviceSlug: "electricidad",
    problemQuestion: {
      id: "problema",
      question: "Quin tipus de problema elèctric tens?",
      options: [
        { value: "corte-luz", label: "Tall de llum o avaria" },
        { value: "cuadro", label: "Canvi de quadre elèctric" },
        { value: "instalacion", label: "Instal·lació nova (endolls, punts de llum)" },
        { value: "boletin", label: "Necessito un butlletí elèctric" },
        { value: "domotica", label: "Domòtica o automatització" },
        { value: "otro", label: "Un altre" },
      ],
    },
    detailQuestion: {
      id: "detalle",
      question: "Hi ha algun risc immediat (olor de cremat, espurnes)?",
      options: [
        { value: "si-riesgo", label: "Sí, hi ha risc ara mateix" },
        { value: "no-riesgo", label: "No, no hi ha risc immediat" },
      ],
    },
    autoUrgentValues: ["si-riesgo"],
    safetyWarning: "Si notes olor de cremat, talla l'interruptor general abans que arribem.",
  },
  gas: {
    serviceSlug: "gas",
    problemQuestion: {
      id: "problema",
      question: "Què necessites de gas?",
      options: [
        { value: "revision", label: "Revisió periòdica obligatòria" },
        { value: "averia-caldera", label: "Avaria a la caldera" },
        { value: "instalacion", label: "Instal·lació nova" },
        { value: "olor-gas", label: "Faig olor de gas ara mateix" },
        { value: "certificado", label: "Certificat per a compravenda o lloguer" },
        { value: "otro", label: "Un altre" },
      ],
    },
    autoUrgentValues: ["olor-gas"],
    safetyWarning:
      "Tanca la clau de pas, ventila l'espai i no encenguis llums ni flames. Et recomanem trucar-nos directament a més d'enviar la sol·licitud.",
  },
  pintura: {
    serviceSlug: "pintura",
    problemQuestion: {
      id: "problema",
      question: "Què vols pintar?",
      options: [
        { value: "piso-completo", label: "Pis complet" },
        { value: "habitacion", label: "Una o diverses habitacions" },
        { value: "fachada", label: "Façana o exterior" },
        { value: "comunidad", label: "Escala o zona comunitària" },
        { value: "otro", label: "Un altre" },
      ],
    },
    detailQuestion: {
      id: "detalle",
      question: "Quants metres quadrats aproximats?",
      options: [
        { value: "menos-30", label: "Menys de 30 m²" },
        { value: "30-60", label: "Entre 30 i 60 m²" },
        { value: "60-90", label: "Entre 60 i 90 m²" },
        { value: "mas-90", label: "Més de 90 m²" },
      ],
    },
  },
  carpinteria: {
    serviceSlug: "carpinteria",
    problemQuestion: {
      id: "problema",
      question: "Què necessites?",
      options: [
        { value: "mueble-medida", label: "Moble a mida" },
        { value: "puerta", label: "Porta (instal·lació o reparació)" },
        { value: "ventana", label: "Finestra o tancament" },
        { value: "tarima", label: "Tarima o terra de fusta" },
        { value: "reparacion", label: "Reparació puntual (frontissa, pany)" },
        { value: "otro", label: "Un altre" },
      ],
    },
    detailQuestion: {
      id: "detalle",
      question: "Ja tens les mides preses?",
      options: [
        { value: "si-medidas", label: "Sí, tinc les mides" },
        { value: "no-medidas", label: "No, necessito que les prenguin" },
      ],
    },
  },
  climatizacion: {
    serviceSlug: "climatizacion",
    problemQuestion: {
      id: "problema",
      question: "Què necessites?",
      options: [
        { value: "instalacion", label: "Instal·lació d'aire condicionat" },
        { value: "averia", label: "Avaria (no refreda o no escalfa)" },
        { value: "mantenimiento", label: "Manteniment o revisió" },
        { value: "caldera", label: "Caldera de calefacció" },
        { value: "otro", label: "Un altre" },
      ],
    },
    detailQuestion: {
      id: "detalle",
      question: "Quin tipus d'equip tens o vols instal·lar?",
      options: [
        { value: "split", label: "Split (1x1)" },
        { value: "multisplit", label: "Multisplit (diverses unitats)" },
        { value: "conductos", label: "Per conductes" },
        { value: "calefaccion", label: "Radiadors o terra radiant" },
        { value: "no-se", label: "No ho sé" },
      ],
    },
  },
};

const contactTimeOptionsCa: WizardOption[] = [
  { value: "manana", label: "Al matí" },
  { value: "tarde", label: "A la tarda" },
  { value: "noche", label: "Al vespre" },
  { value: "cualquiera", label: "Qualsevol horari" },
];

export const rubroWizardConfigsByLocale: Record<Locale, Record<string, RubroWizardConfig>> = {
  es: rubroWizardConfigs,
  ca: rubroWizardConfigsCa,
};

export const contactTimeOptionsByLocale: Record<Locale, WizardOption[]> = {
  es: [
    { value: "manana", label: "Por la mañana" },
    { value: "tarde", label: "Por la tarde" },
    { value: "noche", label: "Por la noche" },
    { value: "cualquiera", label: "Cualquier horario" },
  ],
  ca: contactTimeOptionsCa,
};
