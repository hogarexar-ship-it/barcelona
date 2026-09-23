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
    symptoms: [
      "Setmanes amb molta feina i setmanes sense res",
      "Depens del boca-orella i dels clients de sempre",
      "Les urgències se les emporten les empreses grans",
      "Publiques a les xarxes, però no et truca ningú",
      "Fas pressupostos que no es tanquen mai",
    ],
    mistakes: [
      "No tenir una manera clara d'aconseguir clients nous",
      "Dependre només d'Instagram o Facebook, sense anuncis",
      "Fer anuncis sense saber quines trucades porten",
      "No tenir una web pensada perquè et truquin",
      "Tenir la fitxa de Google abandonada i sense ressenyes",
    ],
    costs: [
      { icon: "phone", text: "Perds feines cada dia que s'emporta un altre" },
      { icon: "calendar", text: "Depens de la temporada i de les urgències" },
      { icon: "users", text: "No pots contractar ni créixer" },
      { icon: "euro", text: "Acabes abaixant preus per competir" },
    ],
    system: [
      "Anuncis a Google, Facebook i Instagram per a gent de la teva zona",
      "Una landing page pensada perquè et truquin",
      "Botó directe a WhatsApp per respondre al moment",
      "Fitxa de Google amb ressenyes que donen confiança",
      "CRM per seguir cada contacte i cada pressupost",
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
    symptoms: [
      "Feina irregular: mesos bons i mesos fluixos",
      "Poques feines grans: quadres, butlletins, carregadors",
      "Depens que et recomanin",
      "Publiques a les xarxes, però no veus resultats",
      "Promocions que només atrauen qui busca el més barat",
    ],
    mistakes: [
      "No tenir una estratègia clara per aconseguir clients nous",
      "Dependre només d'Instagram o Facebook, sense anuncis",
      "No fer servir bé la publicitat a Google i Meta",
      "No tenir una web que converteixi visites en trucades",
      "No mostrar que estàs habilitat, les teves feines i les teves ressenyes",
    ],
    costs: [
      { icon: "phone", text: "Perds feines cada dia que s'emporta un altre" },
      { icon: "calendar", text: "Depens de temporades i de recomanacions" },
      { icon: "users", text: "No pots créixer ni muntar equip" },
      { icon: "euro", text: "Acabes abaixant preus per aconseguir feina" },
    ],
    system: [
      "Anuncis a Google, Facebook i Instagram per a gent de la teva zona",
      "Una landing page per servei: quadres, butlletins, carregadors",
      "Botó directe a WhatsApp per respondre al moment",
      "Fitxa de Google amb ressenyes que donen confiança",
      "CRM per seguir cada contacte i cada pressupost",
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
