import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guides";
import { getGuide, guidePath, guidesFor } from "@/lib/guides-data";
import { buildMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return guidesFor("pro").map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuide("pro", params.slug);
  if (!guide) return {};
  return buildMetadata({ title: guide.title, description: guide.metaDescription, path: guidePath(guide) });
}

export default function GuiaProfesionalPage({ params }: { params: { slug: string } }) {
  const guide = getGuide("pro", params.slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} />;
}
