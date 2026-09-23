import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceView } from "@/components/views/ServiceView";
import { getMarketingServiceByUrl, getMarketingServices } from "@/lib/marketing-services";
import { buildMetadata } from "@/lib/metadata";
import { serviceSlugs } from "@/lib/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return getMarketingServices("ca").map((service) => ({ slug: serviceSlugs[service.slug].ca }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getMarketingServiceByUrl("ca", params.slug);
  if (!service) return {};
  return buildMetadata({ title: service.metaTitle, description: service.metaDescription, path: service.path, locale: "ca" });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getMarketingServiceByUrl("ca", params.slug);
  if (!service) notFound();
  return <ServiceView locale="ca" service={service} />;
}
