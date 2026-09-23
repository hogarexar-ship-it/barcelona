import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { PrimaryCta } from "./CtaButtons";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { PhotoFrame } from "./PhotoFrame";
import { ReadingProgress } from "./ReadingProgress";
import { Reveal } from "./Reveal";
import { guidePath } from "@/lib/guides-data";
import type { Guide } from "@/lib/guides-data";
import { routes } from "@/lib/navigation";
import { blogPostingSchema } from "@/lib/schema";
import { getSector } from "@/lib/sectors-data";
import { siteConfig } from "@/lib/site-config";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function GuideCards({
  guides,
  columns = 3,
}: {
  guides: Guide[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}
    >
      {guides.map((guide, index) => (
        <Reveal key={guide.slug} delay={(index % 3) * 120} className="h-full">
          <Link
            href={guidePath(guide)}
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
                {formatDate(guide.publishedAt)}
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
export function GuideFeatured({ guide }: { guide: Guide }) {
  return (
    <Link
      href={guidePath(guide)}
      className="group grid overflow-hidden rounded-xl2 border border-ink-200 bg-white transition-colors hover:border-accent-600 md:grid-cols-[1.2fr_1fr]"
    >
      <PhotoFrame photo={guide.photo} priority className="aspect-[16/10] !rounded-none md:aspect-auto md:min-h-[22rem]" sizes="(min-width: 768px) 55vw, 100vw" />
      <div className="flex flex-col justify-center p-7 sm:p-10">
        <span className="text-sm font-semibold text-accent-700">Última guía · {guide.category}</span>
        <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-ink-900 group-hover:text-accent-700 sm:text-3xl">{guide.title}</h2>
        <p className="mt-3 text-ink-600">{guide.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-ink-900">
          Leer la guía
          <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function GuideArticle({ guide, related }: { guide: Guide; related: Guide[] }) {
  const url = `${siteConfig.url}${guidePath(guide)}`;
  const sector = guide.trade ? getSector(guide.trade) : undefined;
  const contactHref = guide.trade ? `${routes.contact}?oficio=${guide.trade}` : routes.contact;
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
        })}
      />
      <ReadingProgress targetId="guia" />

      <header className="border-b border-ink-200 bg-surface-100">
        <Container className="pb-10 pt-6 sm:pb-14">
          <Breadcrumbs
            items={[
              { name: "Guías", href: routes.guides },
              { name: guide.title, href: guidePath(guide) },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <span className="text-sm font-semibold text-accent-700">{guide.category}</span>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-5xl">{guide.title}</h1>
            <p className="mt-4 text-sm text-ink-400">
              Por el equipo de {siteConfig.brand} · Actualizado el <time dateTime={guide.updatedAt}>{formatDate(guide.updatedAt)}</time>
            </p>
          </div>
        </Container>
      </header>

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[14rem_1fr] lg:gap-16">
        <aside className="hidden lg:block">
          <nav aria-label="Índice de la guía" className="sticky top-24">
            <p className="text-sm font-semibold text-ink-900">En esta guía</p>
            <ol className="mt-4 space-y-2.5 border-l border-ink-200 text-sm">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a href={`#${heading.id}`} className="-ml-px block border-l border-transparent pl-4 text-ink-600 hover:border-ink-900 hover:text-ink-900">
                    {heading.text}
                  </a>
                </li>
              ))}
            </ol>
            <PrimaryCta href={contactHref} className="mt-8 w-full !px-3 text-xs" />
          </nav>
        </aside>

        <article id="guia" className="min-w-0 max-w-2xl">
          <PhotoFrame photo={guide.photo} priority className="aspect-[16/9]" sizes="(min-width: 768px) 672px, 100vw" />

          <div className="mt-8 rounded-xl2 border border-accent-200 bg-accent-50 p-6">
            <p className="font-semibold text-accent-700">En resumen</p>
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
                  <aside className="mt-10 flex flex-col gap-4 rounded-xl2 border-l-4 border-[#EA580C] bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-semibold text-ink-900">¿Prefieres que lo hagamos por ti? Te decimos cómo en el asesoramiento gratuito.</p>
                    <Link href={contactHref} className="inline-flex shrink-0 items-center gap-1.5 font-bold text-[#C2410C] hover:text-ink-900">
                      Pedirlo
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </Link>
                  </aside>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-xl2 bg-ink-900 p-7 text-white sm:p-9">
            <p className="font-display text-2xl font-bold">¿No sabes por dónde empezar?</p>
            <p className="mt-3 text-ink-100">
              Cuéntanos tu situación y en el asesoramiento gratuito te decimos qué haríamos primero en tu caso.
            </p>
            <PrimaryCta href={contactHref} className="mt-6" />
            {sector && (
              <p className="mt-5 text-sm text-ink-100">
                <Link href={sector.path} className="font-semibold text-white underline underline-offset-4">
                  Marketing digital para {sector.audience}
                </Link>
              </p>
            )}
          </div>
        </article>
      </Container>

      {related.length > 0 && (
        <section className="border-t border-ink-200 bg-surface-100 py-14 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Sigue leyendo</h2>
            <div className="mt-8">
              <GuideCards guides={related} />
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
