import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";
import { glossaryTerms } from "@/lib/glossary-data";
import { glossaryTermsCa } from "@/lib/glossary-data.ca";
import { routes } from "@/lib/navigation";
import { glossarySchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

function termsByLetter(locale: Locale) {
  const terms = locale === "ca" ? glossaryTermsCa : glossaryTerms;
  const groups = new Map<string, typeof terms>();
  for (const term of terms) {
    const letter = term.term.charAt(0).toUpperCase();
    groups.set(letter, [...(groups.get(letter) ?? []), term]);
  }
  return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
}

export function GlossaryView({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const terms = locale === "ca" ? glossaryTermsCa : glossaryTerms;
  const title = t(
    "Glosario de marketing digital para fontaneros y electricistas",
    "Glossari de màrqueting digital per a lampistes i electricistes",
  );
  const description = t(
    "Términos de marketing digital explicados en plata, pensados para fontaneros y electricistas sin experiencia previa en marketing.",
    "Termes de màrqueting digital explicats clarament, pensats per a lampistes i electricistes sense experiència prèvia en màrqueting.",
  );

  return (
    <>
      <JsonLd
        data={glossarySchema({
          name: title,
          description,
          url: `${siteConfig.url}${routes[locale].glossary}`,
          terms,
        })}
      />
      <section className="pb-10 pt-6 sm:pb-14">
        <Container>
          <Breadcrumbs locale={locale} items={[{ name: t("Glosario", "Glossari"), href: routes[locale].glossary }]} />
          <div className="mt-8 max-w-2xl border-b border-ink-200 pb-10">
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">{title}</h1>
            <p className="mt-4 text-lg text-ink-600">{description}</p>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="space-y-10">
            {termsByLetter(locale).map(([letter, letterTerms]) => (
              <div key={letter} data-reveal>
                <h2 className="font-display text-2xl font-bold text-accent-600">{letter}</h2>
                <dl className="mt-4 space-y-6 border-t border-ink-200 pt-6">
                  {letterTerms.map((term) => (
                    <div key={term.term}>
                      <dt className="text-lg font-semibold text-ink-900">{term.term}</dt>
                      <dd className="mt-1.5 text-ink-600">
                        {term.definition}
                        {term.href && (
                          <>
                            {" "}
                            <Link href={term.href} className="font-medium text-accent-600 hover:underline">
                              {t("Ver servicio", "Veure servei")} →
                            </Link>
                          </>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        locale={locale}
        title={t("¿Alguna palabra más que no entiendes?", "Alguna paraula més que no entens?")}
        text={t(
          "En el asesoramiento gratuito te lo explicamos todo sin tecnicismos, aplicado a tu negocio.",
          "A l'assessorament gratuït t'ho expliquem tot sense tecnicismes, aplicat al teu negoci.",
        )}
      />
    </>
  );
}
