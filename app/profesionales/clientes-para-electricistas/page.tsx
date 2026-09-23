import type { Metadata } from "next";
import { ProSectorPage } from "@/components/ProSectorPage";
import { buildMetadata } from "@/lib/metadata";
import { getSector } from "@/lib/pro-sectors-data";

const sector = getSector("electricidad");

export const metadata: Metadata = buildMetadata({
  title: sector.metaTitle,
  description: sector.metaDescription,
  path: sector.path,
});

export default function ClientesElectricistasPage() {
  return <ProSectorPage sector={sector} />;
}
