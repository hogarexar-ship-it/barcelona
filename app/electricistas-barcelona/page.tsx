import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/metadata";
import { getService } from "@/lib/services-data";

const service = getService("electricidad");

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.path,
});

export default function ElectricistasBarcelonaPage() {
  return <ServicePage service={service} />;
}
