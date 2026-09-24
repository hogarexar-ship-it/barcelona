import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { PrimaryCta } from "./CtaButtons";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { PhotoFrame } from "./PhotoFrame";
import { ReadingProgress } from "./ReadingProgress";
import { Reveal } from "./Reveal";
import { guideUrl } from "@/lib/guides-data";
import type { Guide } from "@/lib/guides-data";
import type { Locale } from "@/lib/i18n";
import { dateLocale, translator } from "@/lib/i18n";
import { routes } from "@/lib/navigation";
import { blogPostingSchema } from "@/lib/schema";
import { getSector } from "@/lib/sectors-data";
import { siteConfig } from "@/lib/site-config";

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(dateLocale[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function GuideCards({
  locale,
  guides,
  columns = 3,
}: {
  locale: Locale;
  guides: Guide[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}
    >
      {guides.map((guide, index) => (
        <Reveal key={guide.id} delay={(index % 3) * 120} className="h-full">
          <Link
            href={guideUrl(locale, guide)}
            className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-ink-200 bg-white transition-colors hover:border-accent-600"
          >
            <div className="overflow-hidden">
              <div>
                <PhotoFrame
                  photo={guide.photo}
                  className="aspect-[16/9] !rounded-none"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-sm font-medium text-accent-700">
                {guide.category}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-ink-900 group-hover:text-accent-600">
                {guide.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-600">
                {guide.excerpt}
              </p>
              <time
                dateTime={guide.publishedAt}
                className="mt-4 text-xs text-ink-400"
              >
                {formatDate(guide.publishedAt, locale)}
              </time>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Guía destacada del índice: foto grande y texto al lado. */
export function GuideFeatured({ locale, guide }: { locale: Locale; guide: Guide }) {
  const t = translator(locale);
  return (
    <Link
      href={guideUrl(locale, guide)}
      className="group grid overflow-hidden rounded-xl2 border border-ink-200 bg-white transition-colors hover:border-accent-600 md:grid-cols-[1.2fr_1fr]"
    >
      <PhotoFrame photo={guide.photo} priority className="aspect-[16/10] !rounded-none md:aspect-auto md:min-h-[22rem]" sizes="(min-width: 768px) 55vw, 100vw" />
      <div className="flex flex-col justify-center p-7 sm:p-10">
        <span className="text-sm font-semibold text-accent-700">
          {t("Última guía", "Darrera guia")} · {guide.category}
        </span>
        <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-ink-900 group-hover:text-accent-700 sm:text-3xl">{guide.title}</h2>
        <p className="mt-3 text-ink-600">{guide.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-ink-900">
          {t("Leer la guía", "Llegir la guia")}
          <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function GuideArticle({ locale, guide, related }: { locale: Locale; guide: Guide; related: Guide[] }) {
  const t = translator(locale);
  const path = guideUrl(locale, guide);
  const url = `${siteConfig.url}${path}`;
  const sector = guide.trade ? getSector(locale, guide.trade) : undefined;
  const contactHref = guide.trade ? `${routes[locale].contact}?oficio=${guide.trade}` : routes[locale].contact;
  const headings = guide.content.flatMap((block) => (block.heading ? [{ id: slugify(block.heading), text: block.heading }] : []));
  const midpoint = Math.ceil(guide.content.length / 2);

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          title: guide.title,
          description: guide.metaDescription,
          url,
          datePublished: guide.publishedAt,
          dateModified: guide.updatedAt,
          locale,
        })}
      />
      <ReadingProgress targetId="guia" />

      <header className="border-b border-ink-200 bg-surface-100">
        <Container className="pb-10 pt-6 sm:pb-14">
          <Breadcrumbs
            locale={locale}
            items={[
              { name: t("Guías", "Guies"), href: routes[locale].guides },
              { name: guide.title, href: path },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <span className="text-sm font-semibold text-accent-700">{guide.category}</span>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-5xl">{guide.title}</h1>
            <p className="mt-4 text-sm text-ink-400">
              {t("Por el equipo de", "Per l'equip d'")}{locale === "ca" ? "" : " "}
              {siteConfig.brand} · {t("Actualizado el", "Actualitzat el")}{" "}
              <time dateTime={guide.updatedAt}>{formatDate(guide.updatedAt, locale)}</time>
            </p>
          </div>
        </Container>
      </header>

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[14rem_1fr] lg:gap-16">
        <aside className="hidden lg:block">
          <nav aria-label={t("Índice de la guía", "Índex de la guia")} className="sticky top-24">
            <p className="text-sm font-semibold text-ink-900">{t("En esta guía", "En aquesta guia")}</p>
            <ol className="mt-4 space-y-2.5 border-l border-ink-200 text-sm">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a href={`#${heading.id}`} className="-ml-px block border-l border-transparent pl-4 text-ink-600 hover:border-ink-900 hover:text-ink-900">
                    {heading.text}
                  </a>
                </li>
              ))}
            </ol>
            <PrimaryCta locale={locale} href={contactHref} className="mt-8 w-full !px-3 text-xs" />
          </nav>
        </aside>

        <article id="guia" className="min-w-0 max-w-2xl">
          <PhotoFrame photo={guide.photo} priority className="aspect-[16/9]" sizes="(min-width: 768px) 672px, 100vw" />

          <div className="mt-8 rounded-xl2 border border-accent-200 bg-accent-50 p-6">
            <p className="font-semibold text-accent-700">{t("En resumen", "En resum")}</p>
            <p className="mt-2 text-ink-800">{guide.summary}</p>
          </div>

          <div className="mt-10 space-y-8">
            {guide.content.map((block, index) => (
              <div key={block.heading ?? index}>
                <section>
                  {block.heading && (
                    <h2 id={slugify(block.heading)} className="scroll-mt-24 font-display text-2xl font-bold text-ink-900">
                      {block.heading}
                    </h2>
                  )}
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-lg leading-relaxed text-ink-600">
                      {paragraph}
                    </p>
                  ))}
                  {block.list && (
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-lg text-ink-600 marker:text-accent-500">
                      {block.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
                {index === midpoint - 1 && guide.content.length > 2 && (
                  <aside className="mt-10 flex flex-col gap-4 rounded-xl2 border-l-4 border-[#CE6A27] bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-semibold text-ink-900">
                      {t(
                        "¿Prefieres que lo hagamos por ti? Te decimos cómo en el asesoramiento gratuito.",
                        "Prefereixes que ho fem per tu? Et diem com a l'assessorament gratuït.",
                      )}
                    </p>
                    <Link href={contactHref} className="inline-flex shrink-0 items-center gap-1.5 font-bold text-[#AD5921] hover:text-ink-900">
                      {t("Pedirlo", "Demanar-lo")}
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </Link>
                  </aside>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-xl2 bg-ink-900 p-7 text-white sm:p-9">
            <p className="font-display text-2xl font-bold">{t("¿No sabes por dónde empezar?", "No saps per on començar?")}</p>
            <p className="mt-3 text-ink-100">
              {t(
                "Cuéntanos tu situación y en el asesoramiento gratuito te decimos qué haríamos primero en tu caso.",
                "Explica'ns la teva situació i a l'assessorament gratuït et diem què faríem primer en el teu cas.",
              )}
            </p>
            <PrimaryCta locale={locale} href={contactHref} className="mt-6" />
            {sector && (
              <p className="mt-5 text-sm text-ink-100">
                <Link href={sector.path} className="font-semibold text-white underline underline-offset-4">
                  {t("Marketing digital para", "Màrqueting digital per a")} {sector.audience}
                </Link>
              </p>
            )}
          </div>
        </article>
      </Container>

      {related.length > 0 && (
        <section className="border-t border-ink-200 bg-surface-100 py-14 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">{t("Sigue leyendo", "Continua llegint")}</h2>
            <div className="mt-8">
              <GuideCards locale={locale} guides={related} />
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
