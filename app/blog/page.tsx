import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = buildMetadata({
  title: "Blog: guías de fontanería, electricidad y gas",
  description:
    "Guías prácticas sobre fontanería, electricidad y gas para tu hogar en Barcelona: qué hacer ante averías, revisiones obligatorias y mantenimiento preventivo.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
        </Container>
      </div>
      <Hero
        eyebrow="Blog"
        title="Guías para el hogar en Barcelona"
        subtitle="Consejos prácticos sobre fontanería, electricidad y gas, escritos por el equipo de Hogarex."
        showEmergencyBadge={false}
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl2 border border-ink-100 bg-white p-6 hover:shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-terracotta-600">
                  {post.category}
                </span>
                <p className="mt-2 font-display text-lg font-bold text-ink-900 group-hover:text-terracotta-600">
                  {post.title}
                </p>
                <p className="mt-2 text-sm text-ink-600">{post.excerpt}</p>
                <time dateTime={post.publishedAt} className="mt-4 text-xs text-ink-400">
                  {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
