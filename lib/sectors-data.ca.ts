import { sectorPath } from "./navigation";
import { photos } from "./photos";
import type { Sector } from "./sectors-data";

/** Versió en català de les pàgines per ofici. */
export const sectorsCa: Sector[] = [
  {
    path: sectorPath("ca", "fontaneria"),
    trade: "fontaneria",
    photo: photos.fontaneroCajaHerramientas,
    icon: "droplet",
    tone: { chip: "bg-sky-100 text-sky-900", icon: "text-sky-600", soft: "bg-sky-50", bar: "bg-sky-500" },
    name: "Lampisteria",
    audience: "lampistes",
    person: "lampista",
    metaTitle: "Màrqueting digital per a lampistes a Barcelona: més clients i trucades",
    metaDescription:
      "Màrqueting digital per a lampistes a Barcelona i rodalies: anuncis a Google i Meta (Facebook i Instagram), web, fitxa de Google, ressenyes, SEO i GEO per rebre més trucades de clients de la teva zona. Assessorament gratuït.",
    heroTitle: "Màrqueting digital per a lampistes a Barcelona",
    heroSubtitle: "Que et truquin clients de la teva zona. Del màrqueting digital ens n'encarreguem nosaltres.",
    cardText: "Urgències, escalfadors, desembussos i reformes de bany: apareix quan et cerquen.",
    context: [
      "La lampisteria té demanda tot l'any a Barcelona: fuites, embussos, escalfadors i termos que fallen qualsevol dia. Qui té una urgència cerca al mòbil i truca al primer que li dona confiança.",
      "Si no apareixes al mapa de Google, no tens ressenyes o la teva web no carrega al mòbil, aquesta trucada se l'emporta un altre. I quan estàs tot el dia en obres, el màrqueting digital sempre queda per a després.",
    ],
    searches: [
      { icon: "droplet", label: "lampista urgent Barcelona" },
      { icon: "drain", label: "desembussos a prop meu" },
      { icon: "flame", label: "canviar termo elèctric preu" },
      { icon: "faucet", label: "lampista a Gràcia" },
      { icon: "bath", label: "reforma de bany Barcelona" },
      { icon: "building", label: "lampista per a comunitats" },
    ],
    plan: [
      {
        title: "Fitxa de Google per al mapa",
        text: "Categories, zona de servei, fotos i ressenyes per aparèixer quan cerquen «lampista a prop meu».",
      },
      {
        title: "Anuncis de trucada en el teu horari",
        text: "Campanyes a Google que només es mostren quan pots agafar el telèfon i a les zones on vols anar.",
      },
      {
        title: "Landing per servei",
        text: "Una pàgina per a urgències, una altra per a escalfadors, una altra per a reformes: cadascuna amb trucada i WhatsApp a la vista.",
      },
    ],
    faqs: [
      {
        question: "Em serveix si només vull feines programades, no urgències?",
        answer: "Sí. Les campanyes i la web s'orienten a les feines que tu vols fer i a les hores en què pots atendre.",
      },
      {
        question: "Soc autònom i no tinc temps, què he de fer jo?",
        answer:
          "Molt poc: enviar-nos fotos de les teves feines per WhatsApp i validar el que és important. La gestió del dia a dia la fem nosaltres.",
      },
      {
        question: "Quant costa?",
        answer:
          "Depèn dels serveis i de la teva zona. A l'assessorament gratuït veiem la teva situació i et proposem un pla amb el seu preu, sense compromís.",
      },
    ],
  },
  {
    path: sectorPath("ca", "electricidad"),
    trade: "electricidad",
    photo: photos.electricistaPlafon,
    icon: "bolt",
    tone: { chip: "bg-amber-100 text-amber-900", icon: "text-amber-500", soft: "bg-amber-50", bar: "bg-amber-400" },
    name: "Electricitat",
    audience: "electricistes",
    person: "electricista",
    metaTitle: "Màrqueting digital per a electricistes a Barcelona: més clients i trucades",
    metaDescription:
      "Màrqueting digital per a electricistes a Barcelona i rodalies: anuncis a Google i Meta (Facebook i Instagram), web, fitxa de Google, ressenyes, SEO i GEO per aconseguir més clients d'avaries, butlletins, quadres i carregadors.",
    heroTitle: "Màrqueting digital per a electricistes a Barcelona",
    heroSubtitle: "Més avaries, butlletins, quadres i carregadors a la teva zona. Del màrqueting digital ens n'encarreguem nosaltres.",
    cardText: "Avaries, butlletins, quadres i carregadors: les feines que més cerquen els teus clients.",
    context: [
      "La demanda d'electricistes a Barcelona va més enllà de les avaries: butlletins per a altes i canvis de potència, quadres antics per adequar, punts de càrrega per a cotxe elèctric i autoconsum.",
      "Són feines d'import més alt en què el client cerca un instal·lador habilitat i de confiança. Si la teva presència en línia no ho transmet, truca al següent de la llista.",
    ],
    searches: [
      { icon: "bolt", label: "electricista urgent Barcelona" },
      { icon: "document", label: "butlletí elèctric preu" },
      { icon: "panel", label: "canviar quadre elèctric" },
      { icon: "car", label: "instal·lar carregador cotxe elèctric" },
      { icon: "bulb", label: "electricista a Sants" },
      { icon: "plug", label: "augmentar potència llum" },
    ],
    plan: [
      {
        title: "Que es vegi que estàs habilitat",
        text: "Habilitació, assegurances i garanties visibles a la teva fitxa de Google i a la teva web.",
      },
      {
        title: "Campanyes per servei",
        text: "Anuncis separats per a carregadors, butlletins, quadres o urgències, cadascun amb el seu pressupost i la seva pàgina.",
      },
      {
        title: "Contingut que respon dubtes",
        text: "Pàgines sobre què és un butlletí o quant costa un punt de càrrega, que atrauen clients des de Google i des d'assistents d'IA.",
      },
    ],
    faqs: [
      {
        question: "Em podeu ajudar a aconseguir feines de carregadors o autoconsum?",
        answer:
          "Sí. Són cerques amb molt d'interès i feines d'import més alt: es poden captar amb campanyes i pàgines específiques.",
      },
      {
        question: "Tinc empresa amb diversos tècnics, treballeu també amb empreses?",
        answer: "Sí, amb autònoms i amb empreses. El pla s'adapta a la teva capacitat i als serveis que vulguis impulsar.",
      },
      {
        question: "Quant costa?",
        answer:
          "Depèn dels serveis i de la teva zona. A l'assessorament gratuït veiem la teva situació i et proposem un pla amb el seu preu, sense compromís.",
      },
    ],
  },
];
