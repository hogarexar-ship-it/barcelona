import Link from "next/link";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { PhotoHero } from "@/components/PhotoHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { consultationSteps, ContactSection, ExtraServices, SectorCards, ServiceGrid } from "@/components/sections";
import { situations } from "@/lib/contact-options";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";
import { getExtraServices, getMarketingServices } from "@/lib/marketing-services";
import { routes } from "@/lib/navigation";
import { photos } from "@/lib/photos";
import { faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import type { Faq } from "@/lib/types";

const brand = siteConfig.brand;

export const homeFaqs: Record<Locale, Faq[]> = {
  es: [
    {
      question: `¿Qué hace ${brand}?`,
      answer: `${brand} ayuda a fontaneros y electricistas de Barcelona y alrededores a conseguir más clientes: gestionamos anuncios en Google y Meta (Facebook e Instagram), creamos landing pages y webs, optimizamos tu ficha de Google Business, te ayudamos a conseguir reseñas y trabajamos tu SEO y GEO (aparecer en asistentes de IA).`,
    },
    {
      question: "¿En qué consiste el asesoramiento gratuito?",
      answer:
        "Hablamos de tu negocio (servicios, zona, cómo te llegan hoy los clientes), revisamos tu presencia en Google, tu web y tus anuncios, y te proponemos una estrategia con los primeros pasos. No tiene coste ni compromiso.",
    },
    {
      question: "¿Cuánto cuesta trabajar con vosotros?",
      answer:
        "Depende de los servicios y de tu zona. Tras el asesoramiento te damos un plan con su precio. Puedes empezar por un solo servicio, por ejemplo tu ficha de Google o una campaña, y ampliar después.",
    },
    {
      question: "¿Trabajáis con autónomos o solo con empresas?",
      answer: "Con los dos. El plan se adapta a si trabajas solo o con un equipo.",
    },
    {
      question: "¿Las cuentas y la web son mías?",
      answer: "Sí. La ficha de Google, las cuentas de anuncios, el dominio y la web quedan a tu nombre.",
    },
    {
      question: "¿En qué zonas trabajáis?",
      answer:
        "Con profesionales de Barcelona y alrededores: L'Hospitalet, Badalona, Sabadell, Terrassa, Sant Cugat, Mataró y el resto del área metropolitana.",
    },
  ],
  ca: [
    {
      question: `Què fa ${brand}?`,
      answer: `${brand} ajuda lampistes i electricistes de Barcelona i rodalies a aconseguir més clients: gestionem anuncis a Google i Meta (Facebook i Instagram), creem landing pages i webs, optimitzem la teva fitxa de Google Business, t'ajudem a aconseguir ressenyes i treballem el teu SEO i GEO (aparèixer als assistents d'IA).`,
    },
    {
      question: "En què consisteix l'assessorament gratuït?",
      answer:
        "Parlem del teu negoci (serveis, zona, com t'arriben avui els clients), revisem la teva presència a Google, la teva web i els teus anuncis, i et proposem una estratègia amb els primers passos. No té cost ni compromís.",
    },
    {
      question: "Quant costa treballar amb vosaltres?",
      answer:
        "Depèn dels serveis i de la teva zona. Després de l'assessorament et donem un pla amb el seu preu. Pots començar per un sol servei, per exemple la teva fitxa de Google o una campanya, i ampliar després.",
    },
    {
      question: "Treballeu amb autònoms o només amb empreses?",
      answer: "Amb tots dos. El pla s'adapta a si treballes sol o amb un equip.",
    },
    {
      question: "Els comptes i la web són meus?",
      answer: "Sí. La fitxa de Google, els comptes d'anuncis, el domini i la web queden al teu nom.",
    },
    {
      question: "A quines zones treballeu?",
      answer:
        "Amb professionals de Barcelona i rodalies: l'Hospitalet, Badalona, Sabadell, Terrassa, Sant Cugat, Mataró i la resta de l'àrea metropolitana.",
    },
  ],
};

export function HomeView({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const faqs = homeFaqs[locale];

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <PhotoHero
        photo={photos.electricistaLuzTecho}
        title={t("Más clientes para fontaneros y electricistas en Barcelona", "Més clients per a lampistes i electricistes a Barcelona")}
        subtitle={t("Nos ocupamos de tu marketing digital. Tú, de trabajar.", "Ens ocupem del teu màrqueting digital. Tu, de treballar.")}
      >
        <p className="mt-10 font-semibold text-white/90">{t("¿Qué te pasa ahora mismo?", "Què et passa ara mateix?")}</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {situations.map((situation) => (
            <Link
              key={situation.value}
              href={`${routes[locale].contact}?situacion=${situation.value}`}
              className="group flex items-center gap-4 rounded-md border border-white/30 bg-white/10 p-4 backdrop-blur-md transition-colors hover:border-[#EA580C] hover:bg-white/20"
            >
              <Icon name={situation.icon} className="h-7 w-7 shrink-0 text-accent-300" />
              <span className="flex-1 font-display text-lg font-bold leading-snug">{situation.title[locale]}</span>
              <Icon name="arrowRight" className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
        <p className="mt-5 flex items-center gap-2 text-sm text-white/75">
          <Icon name="check" className="h-5 w-5 text-accent-300" />
          {t("Asesoramiento gratis · Barcelona y alrededores", "Assessorament gratis · Barcelona i rodalies")}
        </p>
      </PhotoHero>

      <Marquee
        items={[
          ...getMarketingServices(locale).map((s) => ({ icon: s.icon, label: s.name })),
          ...getExtraServices(locale).map((s) => ({ icon: s.icon, label: s.name })),
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title={t("Qué hacemos", "Què fem")} />
          <div className="mt-8">
            <ServiceGrid locale={locale} />
          </div>
          <div className="mt-6">
            <ExtraServices locale={locale} />
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-20">
        <Container>
          <SectionHeading title={t("¿A qué te dedicas?", "A què et dediques?")} />
          <div className="mt-8">
            <SectorCards locale={locale} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title={t("Cómo empezamos", "Com comencem")} />
          <div className="mt-8">
            <ProcessSteps steps={consultationSteps(locale)} />
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={faqs} title={t("Preguntas frecuentes", "Preguntes freqüents")} />
        </Container>
      </section>

      <ContactSection locale={locale} />
    </>
  );
}
