import type { ExtraService, MarketingService } from "./marketing-services";
import { servicePath } from "./navigation";
import { photos } from "./photos";

/** Versió en català dels serveis (mateixa estructura que marketing-services.ts). */
export const marketingServicesCa: MarketingService[] = [
  {
    slug: "anuncios-google-y-meta",
    path: servicePath("ca", "anuncios-google-y-meta"),
    icon: "megaphone",
    name: "Anuncis a Google i Meta (Facebook i Instagram)",
    short: "Campanyes a Google Ads, Facebook i Instagram perquè et truquin clients de la teva zona quan necessiten el teu servei.",
    benefit: "Trucades des que s'activen",
    photo: photos.electricistaLuzTecho,
    metaTitle: "Anuncis a Google i Meta per a lampistes i electricistes a Barcelona",
    metaDescription:
      "Gestió de Google Ads, Facebook i Instagram Ads per a lampistes i electricistes a Barcelona: campanyes per zona i horari, anuncis de trucada i mesura de cada contacte.",
    heroTitle: "Anuncis a Google i Meta (Facebook i Instagram) que porten trucades",
    heroSubtitle: "Google Ads, Facebook i Instagram. Només a la teva zona, en el teu horari i mesurant cada euro.",
    signs: [
      "Necessites trucades ja, no d'aquí a sis mesos.",
      "Vas provar anuncis i vas gastar sense veure clients.",
      "Vols omplir els forats de l'agenda en els mesos fluixos.",
    ],
    includes: [
      {
        icon: "search",
        title: "Campanyes a Google",
        text: "Apareixes quan algú cerca «lampista a Gràcia» o «electricista urgent». Pagues per clics de gent que ja necessita el servei.",
      },
      { icon: "phone", title: "Anuncis de trucada", text: "Al mòbil, el client et truca directament des de l'anunci." },
      {
        icon: "users",
        title: "Facebook i Instagram",
        text: "Anuncis amb les teves feines per a propietaris de la teva zona. Funcionen bé per a banys, escalfadors, quadres o carregadors.",
      },
      {
        icon: "mapPin",
        title: "Només les teves zones i horaris",
        text: "Els anuncis només es mostren als barris i municipis on treballes i quan pots atendre.",
      },
      { icon: "chart", title: "Trucades i formularis mesurats", text: "Saps quants contactes et porta cada euro, no només quants clics." },
      { icon: "document", title: "Informe mensual", text: "Què s'ha gastat, quants contactes han arribat i què millorarem." },
    ],
    faqs: [
      {
        question: "Quant he d'invertir en anuncis?",
        answer:
          "Depèn de la teva zona, dels teus serveis i de quanta feina més pots assumir. A l'assessorament gratuït et proposem una inversió realista per al teu cas i la decideixes tu.",
      },
      {
        question: "Quan comencen a arribar trucades?",
        answer:
          "Els anuncis de Google poden portar trucades tan bon punt estan actius. Les primeres setmanes serveixen per ajustar les campanyes i abaixar el que et costa cada client.",
      },
      {
        question: "El compte d'anuncis és meu?",
        answer: "Sí. Es crea al teu nom i hi tens accés sempre, encara que deixem de treballar junts.",
      },
    ],
  },
  {
    slug: "landing-page-y-web",
    path: servicePath("ca", "landing-page-y-web"),
    icon: "globe",
    name: "Landing page i pàgina web",
    short: "Una pàgina ràpida i clara, pensada perquè qui hi entra et truqui o et demani pressupost.",
    benefit: "Visites que acaben en trucada",
    photo: photos.fontaneroGrifo,
    metaTitle: "Landing pages i webs per a lampistes i electricistes a Barcelona",
    metaDescription:
      "Disseny de landing pages per a campanyes i pàgines web per a lampistes i electricistes a Barcelona: ràpides al mòbil, amb trucada i WhatsApp a la vista i preparades per a Google.",
    heroTitle: "Landing pages i webs que converteixen visites en clients",
    heroSubtitle: "Ràpida al mòbil, amb trucada i WhatsApp a un toc.",
    signs: [
      "No tens web o la que tens està antiquada.",
      "Fas anuncis i els envies al teu Facebook o a una web lenta.",
      "La gent entra a la teva web però no et truca.",
    ],
    includes: [
      {
        icon: "document",
        title: "Una landing per campanya",
        text: "Urgències, escalfadors, butlletins… cada pàgina amb un únic objectiu: que et contactin.",
      },
      { icon: "phone", title: "Contacte en un toc", text: "Botons de trucada i WhatsApp sempre visibles al mòbil i un formulari curt." },
      { icon: "search", title: "Preparada per a Google", text: "Estructura, textos i velocitat pensats per posicionar a la teva zona." },
      { icon: "star", title: "Les teves feines i ressenyes", text: "Fotos reals, ressenyes de Google i garanties per generar confiança." },
      { icon: "pen", title: "Textos per al teu client", text: "Escrits per a qui té una avaria a casa, sense argot tècnic." },
      { icon: "wrench", title: "Manteniment", text: "Canvis, actualitzacions i seguretat, si ho necessites." },
    ],
    faqs: [
      {
        question: "Quina diferència hi ha entre una landing page i una web?",
        answer:
          "Una landing page és una sola pàgina amb un objectiu, normalment rebre el trànsit d'un anunci. Una web té diverses pàgines (serveis, zones, contacte) i també serveix per posicionar a Google.",
      },
      { question: "El domini i la web són meus?", answer: "Sí. Tot queda al teu nom." },
      {
        question: "Quant es triga a tenir-la?",
        answer: "Una landing page sol estar llesta en pocs dies. Una web completa, en unes setmanes, segons el contingut que calgui preparar.",
      },
    ],
  },
  {
    slug: "google-business-profile",
    path: servicePath("ca", "google-business-profile"),
    icon: "mapPin",
    name: "Google Business i ressenyes",
    short: "La teva fitxa de Google optimitzada i més ressenyes de clients reals per sortir al mapa quan cerquen un lampista o un electricista a prop.",
    benefit: "Surt al mapa i suma ressenyes",
    photo: photos.electricistaCuadro,
    metaTitle: "Google Business Profile i ressenyes per a lampistes i electricistes a Barcelona",
    metaDescription:
      "Optimització i gestió del Perfil d'Empresa a Google per a lampistes i electricistes a Barcelona: més ressenyes de clients reals, respostes, categories, zona de servei, fotos i publicacions.",
    heroTitle: "La teva fitxa de Google i les teves ressenyes, a punt perquè et truquin",
    heroSubtitle: "Apareix al mapa quan cerquen el teu ofici a prop, amb ressenyes i fotos al dia.",
    signs: [
      "No apareixes al mapa quan cerques el teu servei al teu barri.",
      "Tens poques ressenyes o estan sense resposta.",
      "La teva fitxa té dades incompletes o antigues.",
    ],
    includes: [
      { icon: "star", title: "Més ressenyes", text: "Un enllaç i un missatge a punt per demanar-les per WhatsApp després de cada feina." },
      { icon: "chat", title: "Resposta a ressenyes", text: "Les responem totes, també les negatives, amb educació i a temps." },
      { icon: "check", title: "Alta i verificació", text: "Creem o recuperem la teva fitxa i la deixem verificada." },
      { icon: "wrench", title: "Categories i serveis", text: "Els que fas de veritat, amb descripcions clares." },
      { icon: "mapPin", title: "Zona de servei", text: "Els barris i municipis on vols treballar." },
      { icon: "camera", title: "Fotos i publicacions", text: "Feines reals i novetats per mantenir la fitxa activa." },
      { icon: "chart", title: "Seguiment", text: "Trucades, visites i cerques que genera la teva fitxa cada mes." },
    ],
    faqs: [
      {
        question: "Quant triga a notar-se?",
        answer: "Alguns canvis es noten en poques setmanes, però pujar al mapa és una feina contínua de ressenyes, fotos i publicacions.",
      },
      {
        question: "Em podeu aconseguir ressenyes?",
        answer:
          "T'ajudem a demanar-les als teus clients reals. No comprem ni inventem ressenyes: va contra les normes de Google i posa en risc la teva fitxa.",
      },
      {
        question: "Treballo a domicili, he de mostrar la meva adreça?",
        answer: "No. La pots amagar i definir una zona de servei.",
      },
    ],
  },
  {
    slug: "seo-local",
    path: servicePath("ca", "seo-local"),
    icon: "search",
    name: "SEO i GEO",
    short: "SEO local per posicionar la teva web a Google i GEO perquè assistents d'IA com ChatGPT o Gemini et recomanin a la teva zona.",
    benefit: "Que et trobin Google i la IA",
    photo: photos.fontaneroInstalacionBano,
    metaTitle: "SEO local i GEO per a lampistes i electricistes a Barcelona",
    metaDescription:
      "Posicionament a Google per a lampistes i electricistes a Barcelona i rodalies: paraules clau de la teva zona, pàgines per servei i part tècnica. I GEO per aparèixer a ChatGPT, Gemini i altres assistents d'IA.",
    heroTitle: "SEO i GEO: que et trobin a Google i a la IA",
    heroSubtitle: "SEO per sortir a Google i GEO perquè ChatGPT o Gemini et recomanin. Sense pagar cada clic.",
    signs: [
      "Depens només d'anuncis i vols clients que no costin un clic.",
      "La teva competència surt abans que tu a Google.",
      "Vols construir alguna cosa que duri a mitjà termini.",
      "Els teus clients ja pregunten a ChatGPT per un professional.",
    ],
    includes: [
      { icon: "search", title: "Paraules clau de la teva zona", text: "El que escriuen els teus clients: servei + barri o municipi." },
      { icon: "document", title: "Pàgines per servei i zona", text: "Contingut útil per a cada feina que vols captar." },
      { icon: "wrench", title: "Part tècnica", text: "Velocitat, mòbil, estructura i dades estructurades." },
      { icon: "globe", title: "Directoris i mencions", text: "Nom, telèfon i zona coherents a tota la xarxa." },
      {
        icon: "chat",
        title: "GEO: assistents d'IA",
        text: "Web, fitxa i ressenyes amb informació clara perquè ChatGPT, Gemini o Perplexity t'entenguin i et recomanin.",
      },
      { icon: "chart", title: "Informe mensual", text: "Posicions, visites i contactes que arriben des de Google i des d'assistents d'IA." },
    ],
    faqs: [
      {
        question: "Quant triga el SEO?",
        answer: "És la via més lenta: normalment mesos. Per això se sol combinar amb anuncis, que porten contactes abans.",
      },
      { question: "Necessito web per fer SEO?", answer: "Sí. Si no en tens, te la fem." },
      {
        question: "Què és el GEO?",
        answer:
          "GEO (Generative Engine Optimization) és preparar la teva presència en línia per als assistents d'IA. Cada cop més gent pregunta a ChatGPT o Gemini per un lampista o un electricista. Si la teva web, la teva fitxa i les teves ressenyes expliquen amb claredat què fas i on, és més fàcil que et recomanin.",
      },
    ],
  },
];

export const extraServicesCa: ExtraService[] = [
  { icon: "camera", name: "Gravació i edició de vídeo", text: "Vídeos curts de les teves feines per a anuncis, web i xarxes." },
  { icon: "pen", name: "Disseny gràfic", text: "Logo, targetes, retolació de furgoneta i pressupostos amb la teva imatge." },
  { icon: "users", name: "Xarxes socials", text: "Publicacions a Instagram i Facebook amb les teves feines, sense que et prengui temps." },
];
