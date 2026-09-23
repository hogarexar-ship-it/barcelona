import type { Guide } from "./guides-data";
import { photos } from "./photos";
import { siteConfig } from "./site-config";

const brand = siteConfig.brand;

/** Versió en català de les guies (mateix id que la versió en castellà). */
export const guidesCa: Guide[] = [
  {
    id: "como-conseguir-clientes-fontanero-barcelona",
    photo: photos.fontaneroInstalacionBano,
    title: "Com aconseguir més clients com a lampista a Barcelona",
    metaDescription:
      "Guia pràctica per a lampistes autònoms a Barcelona: fitxa de Google, ressenyes, anuncis, administradors de finques i web per deixar de dependre del boca-orella.",
    excerpt:
      "El boca-orella funciona, però no es pot escalar. Aquestes són les vies que de veritat porten clients a un lampista a Barcelona i l'esforç que demana cadascuna.",
    summary:
      "Un lampista a Barcelona aconsegueix clients de manera estable combinant quatre vies: una fitxa de Google Business completa i amb ressenyes, anuncis de Google limitats a la seva zona i al seu horari, una web que converteixi visites en trucades i acords amb administradors de finques i comerços. La fitxa de Google és la base: és gratis i és el primer que veu qui cerca «lampista a prop meu».",
    publishedAt: "2026-09-08",
    updatedAt: "2026-09-22",
    category: "Aconseguir clients",
    trade: "fontaneria",
    content: [
      {
        heading: "El límit del boca-orella",
        paragraphs: [
          "La majoria de lampistes autònoms comença amb clients de confiança: família, veïns, antics clients. És el millor client possible, però té dos límits: no controles quan arriba i no creix al ritme que necessites quan vols omplir l'agenda o contractar algú.",
          "Per créixer necessites canals que puguis activar i ajustar. Aquests són els que funcionen a Barcelona.",
        ],
      },
      {
        heading: "1. La teva fitxa de Google Business, el primer",
        paragraphs: [
          "Quan algú té una fuita, cerca al mòbil i truca a un dels negocis que apareixen al mapa. Tenir la fitxa completa és gratis i és el canal amb millor relació entre esforç i clients.",
        ],
        list: [
          "Tria «Lampista» com a categoria principal i afegeix-ne de secundàries només si fas aquestes feines.",
          "Defineix la teva zona de servei pels barris o municipis on de veritat vols anar.",
          "Puja fotos reals de feines i de la teva furgoneta, mai imatges d'internet.",
          "Respon totes les ressenyes, també les negatives, amb educació i sense discutir.",
          "Mantén l'horari actualitzat: si a una hora no agafes el telèfon, no la posis.",
        ],
      },
      {
        heading: "2. Ressenyes: el que més pesa en la decisió",
        paragraphs: [
          "Davant d'una urgència, el client no llegeix la teva web: mira estrelles i nombre d'opinions, i truca. Demana la ressenya en acabar, quan el client està content, amb un WhatsApp que inclogui l'enllaç directe a la teva fitxa.",
          "Exemple: «Gràcies per confiar en mi, Marta. Si estàs contenta amb la feina, m'ajudes molt deixant la teva opinió aquí: [enllaç]. Salutacions!»",
        ],
      },
      {
        heading: "3. Google Ads, només amb campanyes ben acotades",
        paragraphs: [
          "Els anuncis de lampisteria a Barcelona són cars perquè hi competeixen moltes empreses d'urgències amb pressupostos grans. Perquè un autònom hi guanyi diners ha d'acotar: només els seus barris, només els seus horaris, només els serveis que li deixen marge, i mesurar trucades en lloc de clics.",
        ],
        list: [
          "Exclou cerques com «curs», «feina», «sou» o «gratis».",
          "Programa els anuncis només en les hores en què pots atendre.",
          "Fes servir anuncis de trucada per a mòbil.",
          "Revisa cada setmana quines cerques reals han activat els teus anuncis.",
        ],
      },
      {
        heading: "4. Administradors de finques, comunitats i comerços",
        paragraphs: [
          "A Barcelona hi ha milers de finques gestionades per administradors que necessiten lampistes de confiança per a baixants, muntants i avaries de zones comunes. És un client recurrent: presenta't amb una targeta, un dossier senzill amb feines i els teus temps de resposta.",
        ],
      },
      {
        heading: "5. Una web que converteixi",
        paragraphs: [
          "Si fas anuncis o et troben a Google, el pas següent és la teva web. Una pàgina per servei, ràpida al mòbil i amb trucada i WhatsApp a la vista converteix moltes més visites en clients que un perfil de Facebook.",
        ],
      },
      {
        heading: "Quina combinació triar",
        paragraphs: [],
        list: [
          "Si estàs començant: fitxa de Google i ressenyes.",
          "Si ja tens base i vols créixer: afegeix Google Ads ben acotat.",
          "Si vols construir marca a llarg termini: web pròpia amb pàgines per servei i barri.",
        ],
      },
    ],
  },
  {
    id: "google-business-profile-electricistas-barcelona",
    photo: photos.electricistaCasco,
    title: "Google Business Profile per a electricistes: com aparèixer al mapa de Google a Barcelona",
    metaDescription:
      "Guia pas a pas perquè un electricista a Barcelona optimitzi la seva fitxa de Google Business: categories, serveis, zona, fotos, ressenyes i errors que cal evitar.",
    excerpt:
      "Quan algú cerca «electricista a prop meu», Google ensenya un mapa amb uns pocs negocis. Així es treballa la fitxa per estar-hi.",
    summary:
      "Per aparèixer al mapa de Google com a electricista a Barcelona necessites una fitxa de Google Business verificada, amb «Electricista» com a categoria principal, serveis concrets (butlletins, quadres, punts de càrrega), una zona de servei realista, fotos reals, ressenyes constants i les mateixes dades de contacte a la teva web i als directoris. Google ordena els resultats locals per rellevància, distància i prominència.",
    publishedAt: "2026-09-12",
    updatedAt: "2026-09-22",
    category: "Google i SEO",
    trade: "electricidad",
    content: [
      {
        heading: "Com decideix Google a qui ensenya",
        paragraphs: [
          "Google explica que ordena els resultats locals per tres factors: rellevància (si la teva fitxa encaixa amb el que es cerca), distància (com n'ets de prop de qui cerca) i prominència (com de conegut és el teu negoci: ressenyes, enllaços, mencions). La distància no la controles; les altres dues, sí.",
        ],
      },
      {
        heading: "Pas 1: categoria i serveis",
        paragraphs: [],
        list: [
          "Categoria principal: «Electricista».",
          "Categories secundàries només per al que fas de veritat, per exemple relacionades amb carregadors de cotxe elèctric o energia solar.",
          "Afegeix cada servei amb una descripció curta: butlletí elèctric (CIE), canvi de quadre, augment de potència, avaries, il·luminació.",
        ],
      },
      {
        heading: "Pas 2: zona de servei i dades de contacte",
        paragraphs: [
          "Si treballes a domicili, amaga la teva adreça i defineix una zona de servei per municipis o barris. Fes servir exactament el mateix nom, telèfon i web a la fitxa, a la teva web i a qualsevol directori: les incoherències resten confiança.",
        ],
      },
      {
        heading: "Pas 3: fotos i publicacions",
        paragraphs: [
          "Puja fotos reals: quadres abans i després, instal·lacions acabades, el teu vehicle retolat. Publica una actualització cada una o dues setmanes: una feina recent, un dubte freqüent o una oferta de temporada.",
        ],
      },
      {
        heading: "Pas 4: ressenyes i respostes",
        paragraphs: [
          "Demana ressenya a cada client satisfet amb l'enllaç directe i respon-les totes en un o dos dies. Si una ressenya és injusta, contesta amb dades i sense entrar en discussió: aquesta resposta la llegeixen els teus pròxims clients.",
        ],
      },
      {
        heading: "Errors habituals",
        paragraphs: [],
        list: [
          "Posar paraules clau al nom del negoci: va contra les normes de Google i pot suspendre la fitxa.",
          "Crear diverses fitxes per al mateix negoci.",
          "Abandonar la fitxa després de crear-la.",
          "Fer servir fotos tretes d'internet.",
        ],
      },
      {
        heading: "Si no tens temps",
        paragraphs: [
          `A ${brand} optimitzem i gestionem la fitxa de Google d'electricistes de Barcelona dins del nostre servei de màrqueting digital. El diagnòstic inicial és gratis.`,
        ],
      },
    ],
  },
  {
    id: "google-ads-para-oficios-cuando-compensa",
    photo: photos.electricistaLuzTecho,
    title: "Google Ads per a lampistes i electricistes: quan compensa i quan no",
    metaDescription:
      "Com saber si al teu negoci de lampisteria o electricitat li compensa invertir en Google Ads a Barcelona, com calcular el teu cost per client i els errors que fan perdre més diners.",
    excerpt:
      "Google Ads et pot omplir l'agenda o buidar-te el compte. La diferència és en tres números que gairebé ningú calcula abans de començar.",
    summary:
      "Google Ads compensa a un professional d'oficis quan el que costa aconseguir un client és clarament menys que el marge que deixa la feina. Per saber-ho cal mesurar trucades i formularis (no clics), acotar zones i horaris i excloure cerques irrellevants. En feines d'import més alt (canvis de quadre, escalfadors, punts de càrrega) sol compensar; en reparacions petites, només amb campanyes molt afinades.",
    publishedAt: "2026-09-15",
    updatedAt: "2026-09-22",
    category: "Publicitat",
    content: [
      {
        heading: "Els tres números que has de conèixer",
        paragraphs: [],
        list: [
          "Cost per contacte: el que gastes en anuncis dividit entre les trucades i formularis que reps.",
          "Taxa de tancament: de cada deu contactes, quants acaben en feina.",
          "Marge per feina: el que et queda després de material i hores.",
        ],
      },
      {
        paragraphs: [
          "Amb aquestes dades calcules el teu cost per client: cost per contacte dividit entre la taxa de tancament. Per exemple, si cada contacte et costa 30 € i en tanques un de cada tres, cada client et costa 90 €. Si el marge mitjà d'aquella feina és de 150 €, compensa; si és de 60 €, no.",
        ],
      },
      {
        heading: "Quan sol compensar",
        paragraphs: [],
        list: [
          "En feines d'import més alt: canvis de quadre, punts de càrrega, escalfadors o instal·lacions completes.",
          "Quan pots atendre ràpid: en urgències, qui no agafa el telèfon perd el client.",
          "Quan ja tens ressenyes: els anuncis porten visites, però la decisió la prenen les estrelles.",
        ],
      },
      {
        heading: "Quan no compensa (encara)",
        paragraphs: [],
        list: [
          "Si no pots mesurar quines trucades arriben dels anuncis.",
          "Si la teva fitxa de Google és buida o sense ressenyes.",
          "Si no tens capacitat per atendre més feina aquesta temporada.",
          "Si el pressupost és tan baix que els anuncis s'apaguen a mig matí.",
        ],
      },
      {
        heading: "Els errors que fan perdre més diners",
        paragraphs: [],
        list: [
          "No afegir paraules clau negatives: acabes pagant per «curs de lampista» o «sou electricista».",
          "Anunciar-te a tota la província quan només treballes a Barcelona.",
          "Enviar les visites a una web lenta o sense el telèfon a la vista.",
          "Acceptar les recomanacions automàtiques de la plataforma sense revisar-les.",
        ],
      },
      {
        heading: "Si no saps per on començar",
        paragraphs: [
          `Si no saps si et compensa, a ${brand} et fem un assessorament gratuït: revisem la teva zona, els teus serveis i la teva presència actual i et diem si començar per anuncis, per la teva fitxa de Google o per la web.`,
        ],
      },
    ],
  },
  {
    id: "pagar-por-clientes-o-hacer-tu-propio-marketing",
    photo: photos.fontaneroGrifo,
    title: "Pagar per clients o fer el teu propi màrqueting? Què li convé a un lampista o electricista",
    metaDescription:
      "Comparativa honesta entre pagar per contacte, treballar a comissió i invertir en el teu propi màrqueting per a lampistes i electricistes a Barcelona.",
    excerpt:
      "Plataformes de pressupostos, xarxes a comissió o màrqueting propi. Avantatges, inconvenients i quan té sentit cada model.",
    summary:
      "Pagar per contacte dona volum ràpid, però pagues encara que no tanquis i sovint competeixes amb altres empreses pel mateix client. Treballar a comissió només costa quan tanques, a canvi d'un percentatge de la feina. El màrqueting propi exigeix inversió i constància, però construeix una marca i clients que són teus. El més sòlid sol ser combinar comissió a curt termini amb màrqueting propi a mitjà termini.",
    publishedAt: "2026-09-17",
    updatedAt: "2026-09-22",
    category: "Aconseguir clients",
    content: [
      {
        heading: "Model 1: pagar per contacte",
        paragraphs: [
          "Plataformes i directoris que et cobren cada sol·licitud de pressupost. Avantatge: volum immediat. Inconvenients: pagues cada contacte encara que no es converteixi, el mateix client pot arribar a diverses empreses alhora i acabes competint per preu.",
        ],
      },
      {
        heading: "Model 2: treballar a comissió",
        paragraphs: [
          "Una xarxa capta el client, te'l passa i només pagues un percentatge quan tanques la feina. Avantatge: risc mínim, pagues per resultat. Inconvenient: el client arriba a través de la xarxa i no de la teva marca, i la comissió redueix el marge d'aquella feina.",
        ],
      },
      {
        heading: "Model 3: el teu propi màrqueting",
        paragraphs: [
          "Fitxa de Google, ressenyes, web, anuncis i xarxes al teu nom. Avantatge: el client és teu, repeteix i et recomana, i a mitjà termini cada client et costa menys. Inconvenient: exigeix inversió inicial, constància i saber mesurar.",
        ],
      },
      {
        heading: "Com decidir",
        paragraphs: [],
        list: [
          "Si necessites feina ja i no vols risc: comissió.",
          "Si tens marge i vols créixer amb marca pròpia: màrqueting.",
          "Si vols les dues coses: comissió per omplir l'agenda mentre el teu màrqueting madura.",
        ],
      },
      {
        heading: `Com ho fem a ${brand}`,
        paragraphs: [
          "Ens centrem en el tercer model: que tinguis els teus propis clients. Portem els teus anuncis, la teva web, la teva fitxa de Google i el teu SEO, i a l'assessorament gratuït et diem per on començar segons la teva situació.",
        ],
      },
    ],
  },
  {
    id: "como-pedir-resenas-google-clientes",
    photo: photos.fontaneroFregadero,
    title: "Com demanar ressenyes a Google als teus clients (amb missatges a punt per copiar)",
    metaDescription:
      "Quan i com demanar ressenyes a Google si ets lampista o electricista. Missatges de WhatsApp a punt per copiar i errors que cal evitar.",
    excerpt:
      "Les ressenyes decideixen a qui truca el client. Et donem el moment, l'enllaç i el missatge exacte per demanar-les sense ser pesat.",
    summary:
      "La millor manera d'aconseguir ressenyes a Google és demanar-les just en acabar la feina, per WhatsApp, amb l'enllaç directe a la teva fitxa i un missatge curt i personal. Demana que mencionin el tipus de feina i el barri. No ofereixis descomptes ni regals a canvi: va contra les normes de Google.",
    publishedAt: "2026-09-19",
    updatedAt: "2026-09-22",
    category: "Google i SEO",
    content: [
      {
        heading: "Per què importen tant",
        paragraphs: [
          "Qui necessita un professional compara fitxes al mapa de Google. El nombre de ressenyes, la nota mitjana i com són de recents influeixen en a qui truca, i a més són un dels senyals que Google té en compte als resultats locals.",
        ],
      },
      {
        heading: "Quan demanar-la",
        paragraphs: [
          "En acabar, quan el client veu el problema resolt. Si esperes una setmana, l'agraïment es refreda. En instal·lacions grans, demana-la en lliurar la feina, amb el client ja gaudint del resultat.",
        ],
      },
      {
        heading: "Com aconseguir el teu enllaç directe",
        paragraphs: [
          "Des del teu Perfil d'Empresa a Google, cerca l'opció per demanar ressenyes i copia l'enllaç. Desa'l com a resposta ràpida a WhatsApp Business per tenir-lo sempre a mà.",
        ],
      },
      {
        heading: "Missatges a punt per copiar",
        paragraphs: [],
        list: [
          "Després d'una avaria: «Hola, [nom]. M'alegro que ja estigui tot solucionat. Si t'ha agradat el servei, m'ajudaries molt amb una ressenya a Google: [enllaç]. Gràcies!»",
          "Després d'una instal·lació: «[Nom], ha estat un plaer fer la vostra instal·lació. Si esteu contents, una ressenya explicant què vam fer i en quin barri ajuda moltíssim altres veïns: [enllaç]»",
          "Recordatori, només una vegada: «Hola, [nom]. Et torno a deixar l'enllaç per si et ve de gust deixar la teva opinió: [enllaç]. Salutacions!»",
        ],
      },
      {
        heading: "El que no has de fer",
        paragraphs: [],
        list: [
          "Oferir descomptes o regals a canvi de ressenyes.",
          "Escriure ressenyes falses o demanar-les a familiars i amics.",
          "Insistir més d'una vegada.",
          "Deixar ressenyes sense resposta.",
        ],
      },
      {
        heading: "Automatitza-ho",
        paragraphs: [
          `Al servei de màrqueting digital d'${brand} deixem muntat un sistema senzill per demanar ressenyes després de cada feina i respondre-les, perquè no depengui que te'n recordis.`,
        ],
      },
    ],
  },
  {
    id: "como-aparecer-en-chatgpt-profesional-barcelona",
    photo: photos.electricistaEnchufes,
    title: "Com aparèixer quan algú pregunta a ChatGPT per un professional a Barcelona",
    metaDescription:
      "Què és el GEO (optimització per a motors generatius) i què pot fer un lampista o electricista a Barcelona perquè els assistents d'IA el recomanin.",
    excerpt:
      "Cada cop més gent pregunta a ChatGPT, Gemini o Perplexity «quin lampista em recomanes a Gràcia». Què pots fer avui per ser en aquestes respostes.",
    summary:
      "Els assistents d'IA recomanen negocis a partir d'informació pública que poden llegir i contrastar: fitxes de Google i directoris, ressenyes, webs amb informació clara i mencions en altres llocs. Per aparèixer-hi, un professional necessita dades coherents a tot arreu, una web que expliqui en text clar què fa, on i en quins terminis, i ressenyes que descriguin feines concretes.",
    publishedAt: "2026-09-22",
    updatedAt: "2026-09-22",
    category: "Google i SEO",
    content: [
      {
        heading: "Què és el GEO",
        paragraphs: [
          "GEO (Generative Engine Optimization) és la feina perquè els motors generatius, com ChatGPT, Gemini, Perplexity o les respostes amb IA de Google, entenguin el teu negoci i el mencionin. No hi ha una fórmula oficial, però sí patrons clars: aquests sistemes es basen en informació pública, ben estructurada i coherent.",
        ],
      },
      {
        heading: "1. Les mateixes dades a tot arreu",
        paragraphs: [
          "Nom, telèfon, zona de servei i web idèntics a la teva fitxa de Google, a la teva web, a les teves xarxes i als directoris. Si cada lloc diu una cosa, un assistent té menys motius per recomanar-te.",
        ],
      },
      {
        heading: "2. Una web que respongui preguntes",
        paragraphs: [
          "Pàgines per servei i zona que diguin, en text clar, què fas, a quins barris i en quins terminis, amb preus orientatius si en pots donar. Afegeix preguntes freqüents amb respostes directes: és just el tipus de text que un assistent pot citar.",
        ],
      },
      {
        heading: "3. Ressenyes que descriuen feines",
        paragraphs: [
          "Una ressenya que menciona «canvi de quadre elèctric a Sants» aporta un context que un assistent pot fer servir quan algú pregunta exactament això.",
        ],
      },
      {
        heading: "4. Mencions fora de la teva web",
        paragraphs: [],
        list: [
          "Directoris professionals i d'associacions del sector.",
          "Proveïdors o fabricants que publiquen llistats d'instal·ladors.",
          "Mitjans i blogs locals del teu barri o municipi.",
        ],
      },
      {
        heading: "5. Dades estructurades",
        paragraphs: [
          "Marcar la teva web amb schema.org (LocalBusiness, Service, FAQPage) ajuda que cercadors i assistents interpretin les teves dades sense ambigüitat.",
        ],
      },
      {
        heading: `Com ho treballem a ${brand}`,
        paragraphs: [
          "Incloem el GEO en el posicionament: la teva web, la teva fitxa de Google i el teu contingut, preparats tant per a Google com per als assistents d'IA.",
        ],
      },
    ],
  },
];
