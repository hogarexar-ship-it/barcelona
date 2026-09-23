import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guides";
import { getGuide, guidePath, guides } from "@/lib/guides-data";
import { buildMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  return buildMetadata({ title: guide.title, description: guide.metaDescription, path: guidePath(guide) });
}

export default function GuiaPage({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} />;
}
