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
    tag: "Anuncis",
    title: "Aconsegueix trucades de clients ja",
    keywords: "Google Ads · Meta Ads (Facebook i Instagram)",
    short: "Campanyes a Google Ads, Facebook i Instagram perquè et truquin clients de la teva zona quan necessiten el teu servei.",
    pain: "Si avui no et truquen, demà no factures. Els anuncis et posen davant de qui necessita un lampista o un electricista just ara, a la teva zona.",
    outcomes: ["Trucades de gent que necessita el servei ara", "Només a les teves zones i en el teu horari", "Saps quant et costa cada client"],
    photo: photos.electricistaLuzTecho,
    metaTitle: "Anuncis a Google i Meta per a lampistes i electricistes a Barcelona",
    metaDescription:
      "Gestió de Google Ads, Facebook i Instagram Ads per a lampistes i electricistes a Barcelona: campanyes per zona i horari, anuncis de trucada i mesura de cada contacte.",
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
        question: "El pressupost d'anuncis està inclòs en el vostre preu?",
        answer:
          "No. El nostre preu és per crear i gestionar les campanyes. El que s'inverteix en els anuncis va a part: es paga directament a Google i Meta des del teu propi compte d'anuncis i tu decideixes quant.",
      },
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
    tag: "Web",
    title: "Una web que fa que et truquin",
    keywords: "Landing page · Pàgina web",
    short: "Una pàgina ràpida i clara, pensada perquè qui hi entra et truqui o et demani pressupost.",
    pain: "Si la teva web és lenta, està antiquada o no existeix, el client se'n va amb un altre en segons. Encara que t'hagi trobat.",
    outcomes: ["Més visites que acaben en trucada o WhatsApp", "Una imatge professional que dona confiança", "Preparada per sortir a Google"],
    photo: photos.fontaneroGrifo,
    metaTitle: "Landing pages i webs per a lampistes i electricistes a Barcelona",
    metaDescription:
      "Disseny de landing pages per a campanyes i pàgines web per a lampistes i electricistes a Barcelona: ràpides al mòbil, amb trucada i WhatsApp a la vista i preparades per a Google.",
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
    tag: "Google Maps",
    title: "Surt al mapa de Google amb bones ressenyes",
    keywords: "Google Business Profile · Ressenyes de Google",
    short: "La teva fitxa de Google optimitzada i més ressenyes de clients reals per sortir al mapa quan cerquen un lampista o un electricista a prop.",
    pain: "Quan algú cerca «electricista a prop», truca a un dels primers del mapa. Si no hi ets o tens poques ressenyes, aquesta trucada és per a un altre.",
    outcomes: ["Apareixes quan et cerquen a prop", "Més ressenyes de clients reals", "Més confiança abans que et truquin"],
    photo: photos.electricistaCuadro,
    metaTitle: "Google Business Profile i ressenyes per a lampistes i electricistes a Barcelona",
    metaDescription:
      "Optimització i gestió del Perfil d'Empresa a Google per a lampistes i electricistes a Barcelona: més ressenyes de clients reals, respostes, categories, zona de servei, fotos i publicacions.",
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
    tag: "SEO i GEO",
    title: "Apareix a Google sense pagar per cada clic",
    keywords: "SEO local · GEO (ChatGPT, Gemini i altres IA)",
    short: "SEO local per posicionar la teva web a Google i GEO perquè assistents d'IA com ChatGPT o Gemini et recomanin a la teva zona.",
    pain: "Dependre només d'anuncis surt car: el dia que deixes de pagar, deixen de trucar-te. I cada cop més clients pregunten directament a ChatGPT.",
    outcomes: ["Clients que et troben sols, mes a mes", "També et recomanen ChatGPT i altres IA", "Cada client et costa menys amb el temps"],
    photo: photos.fontaneroInstalacionBano,
    metaTitle: "SEO local i GEO per a lampistes i electricistes a Barcelona",
    metaDescription:
      "Posicionament a Google per a lampistes i electricistes a Barcelona i rodalies: paraules clau de la teva zona, pàgines per servei i part tècnica. I GEO per aparèixer a ChatGPT, Gemini i altres assistents d'IA.",
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
  {
    slug: "crm",
    path: servicePath("ca", "crm"),
    icon: "inbox",
    name: "CRM i seguiment de clients",
    tag: "CRM",
    title: "Que no se t'escapi cap client",
    keywords: "CRM · Seguiment de clients i pressupostos",
    short: "Tots els teus contactes, trucades i pressupostos en un sol lloc, amb avisos per no oblidar cap seguiment.",
    pain: "Trucades que no tornes, pressupostos sense resposta i clients que no tornen: són diners que ja havies guanyat i es perden per falta de temps.",
    outcomes: ["Tots els teus contactes i pressupostos en un sol lloc", "Avisos per trucar i seguir cada pressupost", "Saps d'on ve cada client"],
    photo: photos.electricistaEnchufes,
    metaTitle: "CRM per a lampistes i electricistes a Barcelona: seguiment de clients i pressupostos",
    metaDescription:
      "CRM senzill per a lampistes i electricistes a Barcelona: tots els contactes en un lloc, seguiment de pressupostos, respostes automàtiques per WhatsApp i petició de ressenyes.",
    heroSubtitle: "Tots els teus clients, trucades i pressupostos en un sol lloc, amb avisos perquè no se t'oblidi cap.",
    signs: [
      "Se t'oblida tornar trucades o seguir pressupostos.",
      "Apuntes els clients en una llibreta, en notes o al WhatsApp.",
      "No saps quins anuncis o canals et porten feina.",
    ],
    includes: [
      { icon: "inbox", title: "Tots els contactes en un lloc", text: "Trucades, WhatsApp, formularis de la web i anuncis, ordenats en una sola llista." },
      { icon: "document", title: "Seguiment de pressupostos", text: "Recordatoris per trucar a qui no ha contestat i tancar més feines." },
      { icon: "chat", title: "Respostes automàtiques", text: "Un missatge de WhatsApp o correu al moment quan no pots agafar el telèfon." },
      { icon: "star", title: "Petició de ressenyes", text: "En tancar una feina, el client rep l'enllaç per deixar la seva ressenya." },
      { icon: "calendar", title: "Clients que repeteixen", text: "Avisos de revisions i manteniments per tornar a treballar amb el mateix client." },
      { icon: "chart", title: "D'on ve cada client", text: "Quin canal et porta més feina, per invertir on funciona." },
    ],
    faqs: [
      {
        question: "Què és un CRM?",
        answer: "És una eina per tenir tots els teus clients, trucades i pressupostos en un sol lloc, amb avisos per no oblidar cap seguiment.",
      },
      {
        question: "És complicat de fer servir?",
        answer: "No. El deixem configurat per a la teva manera de treballar i es fa servir des del mòbil.",
      },
      {
        question: "Quin CRM feu servir?",
        answer: "Triem l'eina segons la teva mida i el teu pressupost: pot ser molt senzilla si treballes sol i créixer amb tu quan muntis equip.",
      },
    ],
  },
];

export const extraServicesCa: ExtraService[] = [
  { icon: "camera", name: "Gravació i edició de vídeo", text: "Vídeos curts de les teves feines per a anuncis, web i xarxes." },
  { icon: "pen", name: "Disseny gràfic", text: "Logo, targetes, retolació de furgoneta i pressupostos amb la teva imatge." },
  { icon: "users", name: "Xarxes socials", text: "Publicacions a Instagram i Facebook amb les teves feines, sense que et prengui temps." },
];
