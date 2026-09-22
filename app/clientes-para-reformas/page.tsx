import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { buildMetadata } from "@/lib/metadata";
import { getSector } from "@/lib/sectors-data";

const sector = getSector("reformas");

export const metadata: Metadata = buildMetadata({
  title: sector.metaTitle,
  description: sector.metaDescription,
  path: sector.path,
});

export default function ClientesReformasPage() {
  return <SectorPage sector={sector} />;
}
