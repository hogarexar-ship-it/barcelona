import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { PrimaryCta, ProCta } from "./CtaButtons";
import { JsonLd } from "./JsonLd";
import { PhotoFrame } from "./PhotoFrame";
import { Reveal } from "./Reveal";
import { requestHref } from "./consumer";
import { guidePath } from "@/lib/guides-data";
import type { Guide } from "@/lib/guides-data";
import {
  consumerRoutes,
  proRoutes,
  sectorPath,
  servicePath,
} from "@/lib/navigation";
import { blogPostingSchema } from "@/lib/schema";
import { getService } from "@/lib/services-data";
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

export function GuideArticle({ guide }: { guide: Guide }) {
  const pro = guide.audience === "pro";
  const url = `${siteConfig.url}${guidePath(guide)}`;
  const crumbs = pro
    ? [
        { name: "Profesionales", href: proRoutes.home },
        { name: "Guías", href: proRoutes.guides },
      ]
    : [{ name: "Guías", href: consumerRoutes.guides }];
  const service = guide.trade ? getService(guide.trade) : undefined;

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          title: guide.title,
          description: guide.metaDescription,
          url,
          datePublished: guide.publishedAt,
          dateModified: guide.updatedAt,
          pro,
        })}
      />

      <div className="bg-surface-100 pt-6">
        <Container>
          <Breadcrumbs
            items={[...crumbs, { name: guide.title, href: guidePath(guide) }]}
          />
        </Container>
      </div>

      <article className="py-12 sm:py-16">
        <Container className="max-w-2xl">
          <span className="text-sm font-medium text-accent-700">
            {pro ? `Para profesionales · ${guide.category}` : guide.category}
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-3 text-sm text-ink-400">
            Por el equipo de {siteConfig.brand} · Actualizado el{" "}
            <time dateTime={guide.updatedAt}>
              {formatDate(guide.updatedAt)}
            </time>
          </p>

          <PhotoFrame
            photo={guide.photo}
            priority
            className="mt-8 aspect-[16/9]"
            sizes="(min-width: 768px) 672px, 100vw"
          />

          <div className="mt-8 rounded-xl2 border border-accent-200 bg-accent-50 p-6">
            <p className="font-semibold text-accent-700">
              En resumen
            </p>
            <p className="mt-2 text-ink-800">{guide.summary}</p>
          </div>

          <div className="mt-10 space-y-8">
            {guide.content.map((block, index) => (
              <section key={block.heading ?? index}>
                {block.heading && (
                  <h2 className="font-display text-2xl font-bold text-ink-900">
                    {block.heading}
                  </h2>
                )}
                {block.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 text-lg leading-relaxed text-ink-600"
                  >
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
            ))}
          </div>

          {pro ? (
            <div className="mt-14 rounded-xl2 bg-ink-900 p-7 text-white sm:p-9">
              <p className="font-display text-2xl font-bold">
                ¿Quieres más clientes sin hacerlo todo tú?
              </p>
              <p className="mt-3 text-ink-100">
                Te pasamos trabajos de tu zona a comisión o llevamos tu
                marketing. Cuéntanos tu caso y te decimos qué haríamos primero.
              </p>
              <ProCta
                href={
                  guide.trade
                    ? `${proRoutes.join}?oficio=${guide.trade}`
                    : proRoutes.join
                }
                className="mt-6"
              />
              {guide.trade && (
                <p className="mt-5 text-sm text-ink-100">
                  <Link
                    href={sectorPath(guide.trade)}
                    className="font-semibold text-white underline underline-offset-4"
                  >
                    Cómo ayudamos a{" "}
                    {service?.professionalPlural ?? "profesionales"}
                  </Link>
                </p>
              )}
            </div>
          ) : (
            <div className="mt-14 rounded-xl2 bg-surface-100 p-7 sm:p-9">
              <p className="font-display text-2xl font-bold text-ink-900">
                {service
                  ? `¿Necesitas un ${service.professional} en Barcelona?`
                  : "¿Necesitas un profesional en Barcelona?"}
              </p>
              <p className="mt-3 text-ink-600">
                Cuéntanos qué pasa y te ponemos en contacto con un profesional
                verificado de tu zona. Gratis y sin compromiso.
              </p>
              <PrimaryCta href={requestHref(guide.trade)} className="mt-6" />
              {guide.trade && (
                <p className="mt-5 text-sm text-ink-600">
                  <Link
                    href={servicePath(guide.trade)}
                    className="font-semibold text-ink-900 underline underline-offset-4"
                  >
                    Ver servicios de {service?.name.toLowerCase()}
                  </Link>
                </p>
              )}
            </div>
          )}
        </Container>
      </article>
    </>
  );
}
