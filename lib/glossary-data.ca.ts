import { servicePath } from "./navigation";
import type { GlossaryTerm } from "./glossary-data";

/** Versió en català del glossari (mateix ordre que glossary-data.ts). */
export const glossaryTermsCa: GlossaryTerm[] = [
  {
    term: "CAC (cost d'adquisició de client)",
    definition:
      "El que costa aconseguir un client nou, sumant el que has invertit en anuncis i serveis i dividint-ho entre els clients que han sortit d'aquí. Serveix per saber si un canal (per exemple, els anuncis a Google) et surt a compte.",
  },
  {
    term: "CTR (click-through rate, taxa de clics)",
    definition:
      "El percentatge de gent que fa clic al teu anunci o a la teva fitxa de Google sobre el total de gent que el veu. Un CTR baix sol avisar que el text o la foto no criden l'atenció.",
  },
  {
    term: "CPC (cost per clic)",
    definition:
      "El que pagues a Google o Meta cada vegada que algú fa clic en un dels teus anuncis. Varia segons la competència de la teva zona i del teu ofici: a lampisteria i electricitat sol ser més alt a les urgències.",
  },
  {
    term: "CRM (gestor de relació amb clients)",
    definition:
      "Eina on queden els teus contactes, trucades i pressupostos en un sol lloc, amb avisos per no oblidar cap seguiment, en comptes d'apuntar-ho en una llibreta o al WhatsApp.",
    href: servicePath("ca", "crm"),
  },
  {
    term: "CTA (crida a l'acció)",
    definition:
      "El botó o frase que li diu al visitant què fer a continuació: «Demana el teu assessorament gratis», «Escriu-nos per WhatsApp». Una web sense una CTA clara rep visites que no es converteixen en trucades.",
  },
  {
    term: "Dades estructurades (schema.org)",
    definition:
      "Etiquetes que s'afegeixen al codi d'una pàgina perquè Google i els assistents d'IA entenguin de què tracta sense haver-ho d'endevinar: quin servei ofereixes, les teves preguntes freqüents, la teva adreça o les teves ressenyes.",
  },
  {
    term: "Embut de conversió",
    definition:
      "El camí que recorre algú des que et troba (a Google, en un anunci o per recomanació) fins que et truca o et demana pressupost. Cada pas on es perd gent és un punt a millorar.",
  },
  {
    term: "Fitxa de Google (Google Business Profile)",
    definition:
      "El teu perfil gratuït a Google, el que apareix al mapa amb les teves ressenyes, el teu horari i les teves fotos quan algú cerca «lampista a prop meu» o «electricista a Gràcia».",
    href: servicePath("ca", "google-business-profile"),
  },
  {
    term: "GEO (Generative Engine Optimization)",
    definition:
      "La feina perquè assistents d'IA com ChatGPT, Gemini o Perplexity entenguin el teu negoci i et recomanin quan algú els pregunta per un professional. Es basa en informació coherent i clara a la teva web, la teva fitxa de Google i les teves ressenyes.",
    href: servicePath("ca", "seo-local"),
  },
  {
    term: "Google Ads",
    definition:
      "La plataforma d'anuncis de Google. Permet aparèixer a dalt dels resultats de cerca quan algú cerca el teu servei, pagant només quan fa clic (o quan truca, als anuncis de trucada).",
    href: servicePath("ca", "anuncios-google-y-meta"),
  },
  {
    term: "Landing page",
    definition:
      "Una pàgina pensada per a un únic objectiu, normalment rebre les visites d'una campanya d'anuncis, amb el telèfon i el WhatsApp a la vista i sense distraccions que allunyin el visitant de contactar.",
    href: servicePath("ca", "landing-page-y-web"),
  },
  {
    term: "Lead",
    definition:
      "Un contacte: algú que ha deixat les seves dades, ha trucat o ha escrit per WhatsApp perquè li interessa el teu servei. És un client potencial, encara no una feina tancada.",
  },
  {
    term: "Meta Ads",
    definition:
      "Els anuncis de Facebook i Instagram, gestionats des d'una única plataforma (Meta). Funcionen bé per mostrar les teves feines amb fotos a gent de la teva zona, encara que no estigui buscant activament en aquell moment.",
    href: servicePath("ca", "anuncios-google-y-meta"),
  },
  {
    term: "Paraula clau (keyword)",
    definition:
      "El que escriu algú a Google quan cerca el teu servei, per exemple «electricista urgent Barcelona» o «canviar termo elèctric preu». Triar bé les paraules clau és la base dels anuncis i del SEO.",
  },
  {
    term: "Píxel de seguiment",
    definition:
      "Un codi petit a la teva web que avisa Google o Meta quan algú fa alguna cosa important (trucar, omplir el formulari). Així saps quins anuncis porten clients de veritat, no només visites.",
  },
  {
    term: "Posicionament local (SEO local)",
    definition:
      "Treballar la teva web, la teva fitxa de Google i les teves ressenyes perquè apareguis als resultats de Google quan algú cerca el teu servei a la teva zona, sense pagar per cada clic. És més lent que els anuncis, però no s'atura si deixes d'invertir.",
    href: servicePath("ca", "seo-local"),
  },
  {
    term: "Pressupost d'anuncis",
    definition:
      "Els diners que s'inverteixen directament a Google o Meta per mostrar els teus anuncis. És a part del preu del servei de gestió: es paga des del teu propi compte d'anuncis i decideixes tu quant invertir.",
    href: servicePath("ca", "anuncios-google-y-meta"),
  },
  {
    term: "Quality Score (nivell de qualitat)",
    definition:
      "Una nota que posa Google als teus anuncis segons com de rellevants són per al que busca la gent. Com més alta, menys pagues per cada clic i millor posició aconsegueixes.",
  },
  {
    term: "Remarketing (o retargeting)",
    definition:
      "Mostrar anuncis a gent que ja va visitar la teva web però no et va contactar, perquè es recordi de tu quan decideixi demanar pressupost.",
  },
  {
    term: "Ressenya de Google",
    definition:
      "L'opinió que deixa un client a la teva fitxa de Google. El nombre de ressenyes i la nota mitjana són del primer que mira qui t'està comparant amb un altre professional.",
    href: servicePath("ca", "google-business-profile"),
  },
  {
    term: "ROI (retorn de la inversió)",
    definition:
      "Quant guanyes per cada euro que inverteixes en màrqueting. Si inverteixes 300 € en anuncis i aconsegueixes 1.500 € en feines, el ROI és positiu i compensa continuar invertint.",
  },
  {
    term: "SEM (publicitat en cercadors)",
    definition:
      "El nom general de la publicitat de pagament en cercadors com Google. Inclou els anuncis de cerca i els anuncis de trucada, entre altres formats.",
    href: servicePath("ca", "anuncios-google-y-meta"),
  },
  {
    term: "SERP (pàgina de resultats de Google)",
    definition:
      "La pàgina que veus després de cercar alguna cosa a Google: anuncis a dalt, el mapa amb les fitxes locals i, a sota, els resultats orgànics (sense pagar).",
  },
  {
    term: "Taxa de conversió",
    definition:
      "El percentatge de visites a la teva web que acaben trucant, escrivint o omplint el formulari. Una web ràpida i amb el telèfon a la vista converteix més que una de lenta o confusa.",
  },
];
