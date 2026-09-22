import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/lib/blog-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Guías para conseguir más clientes: reformas, fontanería y electricidad",
  description:
    "Guías prácticas para profesionales de oficios en Barcelona: cómo conseguir clientes, Google Business Profile, Google Ads, reseñas, marca y posicionamiento en asistentes de IA.",
  path: "/blog",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <>
      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Guías", href: "/blog" }]} />
        </Container>
      </div>
      <PageHero
        eyebrow="Guías para profesionales"
        title="Consigue más clientes para tu oficio"
        subtitle="Consejos prácticos y sin humo para empresas de reformas, fontaneros y electricistas de Barcelona: Google, anuncios, reseñas y marca."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl2 border border-ink-100 bg-white p-6 transition hover:border-terracotta-200 hover:shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-terracotta-600">{post.category}</span>
                <h2 className="mt-2 font-display text-lg font-bold text-ink-900 group-hover:text-terracotta-600">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-ink-600">{post.excerpt}</p>
                <time dateTime={post.publishedAt} className="mt-4 text-xs text-ink-400">
                  {formatDate(post.publishedAt)}
                </time>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
