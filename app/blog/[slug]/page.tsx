import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/CtaButtons";
import { JsonLd } from "@/components/JsonLd";
import { getPostBySlug, blogPosts } from "@/lib/blog-data";
import { buildMetadata } from "@/lib/metadata";
import { blogPostingSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/blog/${post.slug}`;

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
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />
        </Container>
      </div>

      <article className="py-16">
        <Container className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-terracotta-600">
            {post.category}
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            {post.title}
          </h1>
          <time dateTime={post.publishedAt} className="mt-3 block text-sm text-ink-400">
            Publicado el{" "}
            {new Date(post.publishedAt).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>

          <div className="prose-hogarex mt-8 space-y-6">
            {post.content.map((block, index) => (
              <div key={block.heading ?? index}>
                {block.heading && (
                  <h2 className="font-display text-xl font-bold text-ink-900">{block.heading}</h2>
                )}
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-ink-600">
                    {paragraph}
                  </p>
                ))}
                {block.list && (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-600">
                    {block.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl2 border border-ink-100 bg-cream-100 p-6">
            <p className="font-semibold text-ink-900">¿Te está pasando algo parecido?</p>
            <p className="mt-2 text-sm text-ink-600">
              Contanos qué pasa y coordinamos al profesional de nuestra red en Barcelona.
            </p>
            <div className="mt-4">
              <WhatsAppButton />
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
