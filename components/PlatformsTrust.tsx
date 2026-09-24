import type { ReactNode } from "react";
import { WhatsAppIcon } from "./CtaButtons";
import { FacebookIcon, GoogleAdsIcon, InstagramIcon, MapPinIcon, MetaIcon, TikTokIcon, YouTubeIcon } from "./PlatformIcons";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";

type PlatformItem = { icon: ReactNode; label: string };

/**
 * Franja de confianza sobre fondo oscuro: las plataformas reales donde
 * trabajamos para el cliente, con sus colores de marca (a diferencia de la
 * cinta de servicios, que usa iconos de un solo color con tarjetas). No son
 * cifras ni testimonios, solo las herramientas que usamos de verdad.
 */
export function PlatformsTrust({ locale }: { locale: Locale }) {
  const t = translator(locale);
  // Orden: primero las herramientas de negocio (anuncios, ficha, contacto),
  // las redes sociales al final.
  const items: PlatformItem[] = [
    { icon: <GoogleAdsIcon className="h-6 w-6" />, label: "Google Ads" },
    { icon: <MapPinIcon className="h-6 w-6" />, label: "Google Business Profile" },
    { icon: <MetaIcon className="h-6 w-6" />, label: "Meta Ads" },
    { icon: <TikTokIcon className="h-6 w-6" />, label: "TikTok Ads" },
    { icon: <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />, label: "WhatsApp" },
    { icon: <FacebookIcon className="h-6 w-6" />, label: "Facebook" },
    { icon: <InstagramIcon className="h-6 w-6" />, label: "Instagram" },
    { icon: <YouTubeIcon className="h-6 w-6" />, label: "YouTube" },
    { icon: <TikTokIcon className="h-6 w-6" />, label: "TikTok" },
  ];
  // Un hueco invisible del ancho de la pantalla antes del primer elemento:
  // así, al arrancar, todo (incluido Google Ads) entra desde fuera por la
  // derecha, en vez de aparecer ya a la vista y desaparecer sin dar tiempo a leerlo.
  const withGap: PlatformItem[] = [{ icon: null, label: "" }, ...items];
  const loop = [...withGap, ...withGap];

  return (
    <div className="bg-ink-900 py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
        {t("Trabajamos con estas plataformas", "Treballem amb aquestes plataformes")}
      </p>
      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee-fast items-center gap-12">
          {loop.map((item, index) =>
            item.label === "" ? (
              <li key={`gap-${index}`} aria-hidden="true" className="w-[100vw] shrink-0" />
            ) : (
              <li
                key={`${item.label}-${index}`}
                aria-hidden={index >= withGap.length ? true : undefined}
                className="flex shrink-0 items-center gap-2.5 text-base font-semibold text-white/90"
              >
                {item.icon}
                {item.label}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
