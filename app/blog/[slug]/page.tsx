import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { PrimaryCta } from "@/components/CtaButtons";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import { buildMetadata } from "@/lib/metadata";
import { blogPostingSchema } from "@/lib/schema";
import { sectors } from "@/lib/sectors-data";
import { siteConfig } from "@/lib/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const sector = sectors.find((s) => s.slug === post.sector);

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          description: post.metaDescription,
          url,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
        })}
      />

      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Guías", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />
        </Container>
      </div>

      <article className="py-12 sm:py-16">
        <Container className="max-w-2xl">
          <span className="eyebrow">{post.category}</span>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{post.title}</h1>
          <p className="mt-3 text-sm text-ink-400">
            Por el equipo de {siteConfig.brand} · Actualizado el{" "}
            <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
          </p>

          <div className="mt-8 rounded-xl2 border border-terracotta-200 bg-terracotta-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta-700">En resumen</p>
            <p className="mt-2 text-ink-800">{post.summary}</p>
          </div>

          <div className="mt-10 space-y-8">
            {post.content.map((block, index) => (
              <section key={block.heading ?? index}>
                {block.heading && <h2 className="font-display text-2xl font-bold text-ink-900">{block.heading}</h2>}
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-lg leading-relaxed text-ink-600">
                    {paragraph}
                  </p>
                ))}
                {block.list && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-lg text-ink-600 marker:text-terracotta-500">
                    {block.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-xl2 bg-ink-900 p-7 text-white sm:p-9">
            <p className="font-display text-2xl font-bold">¿Quieres más clientes sin hacerlo todo tú?</p>
            <p className="mt-3 text-ink-100">
              Te pasamos trabajos de tu zona a comisión o llevamos tu marketing. Cuéntanos tu caso y te decimos qué
              haríamos primero.
            </p>
            <PrimaryCta
              href={sector ? `/empezar?oficio=${sector.trade}` : "/empezar"}
              className="mt-6"
            />
            {sector && (
              <p className="mt-5 text-sm text-ink-100">
                ¿Eres de {sector.name.toLowerCase()}?{" "}
                <Link href={sector.path} className="font-semibold text-white underline underline-offset-4">
                  Mira cómo ayudamos a {sector.audience}
                </Link>
              </p>
            )}
          </div>
        </Container>
      </article>
    </>
  );
}
