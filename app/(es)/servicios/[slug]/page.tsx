import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceView } from "@/components/views/ServiceView";
import { getMarketingServiceByUrl, getMarketingServices } from "@/lib/marketing-services";
import { buildMetadata } from "@/lib/metadata";
import { serviceSlugs } from "@/lib/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return getMarketingServices("es").map((service) => ({ slug: serviceSlugs[service.slug].es }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getMarketingServiceByUrl("es", params.slug);
  if (!service) return {};
  return buildMetadata({ title: service.metaTitle, description: service.metaDescription, path: service.path, locale: "es" });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getMarketingServiceByUrl("es", params.slug);
  if (!service) notFound();
  return <ServiceView locale="es" service={service} />;
}
