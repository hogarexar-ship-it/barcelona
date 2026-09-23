import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";
import { buildMetadata } from "@/lib/metadata";
import { getSector } from "@/lib/sectors-data";

const sector = getSector("ca", "fontaneria");

export const metadata: Metadata = buildMetadata({
  title: sector.metaTitle,
  description: sector.metaDescription,
  path: sector.path,
  locale: "ca",
});

export default function SectorFontaneriaPage() {
  return <SectorPage locale="ca" sector={sector} />;
}
