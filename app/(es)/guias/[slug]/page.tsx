import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guides";
import { getGuideByUrl, getGuides, guideUrl, guideUrlSlug, sortedGuides } from "@/lib/guides-data";
import { buildMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getGuides("es").map((guide) => ({ slug: guideUrlSlug("es", guide) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideByUrl("es", params.slug);
  if (!guide) return {};
  return buildMetadata({ title: guide.title, description: guide.metaDescription, path: guideUrl("es", guide), locale: "es" });
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuideByUrl("es", params.slug);
  if (!guide) notFound();
  const others = sortedGuides("es").filter((g) => g.id !== guide.id);
  const related = [
    ...others.filter((g) => g.trade && g.trade === guide.trade),
    ...others.filter((g) => !g.trade || g.trade !== guide.trade),
  ].slice(0, 3);
  return <GuideArticle locale="es" guide={guide} related={related} />;
}
