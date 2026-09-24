import { WhatsAppIcon } from "./CtaButtons";
import { FacebookIcon, GoogleIcon, InstagramIcon, MapPinIcon, MetaIcon, TikTokIcon, YouTubeIcon } from "./PlatformIcons";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";

/**
 * Franja de confianza sobre fondo oscuro: las plataformas reales donde
 * trabajamos para el cliente, con sus colores de marca (a diferencia de la
 * cinta de servicios, que usa iconos de un solo color con tarjetas). No son
 * cifras ni testimonios, solo las herramientas que usamos de verdad.
 */
export function PlatformsTrust({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const items = [
    { icon: <GoogleIcon className="h-6 w-6" />, label: "Google Ads" },
    { icon: <MapPinIcon className="h-6 w-6" />, label: "Google Business Profile" },
    { icon: <MetaIcon className="h-6 w-6" />, label: "Meta Ads" },
    { icon: <FacebookIcon className="h-6 w-6" />, label: "Facebook" },
    { icon: <InstagramIcon className="h-6 w-6" />, label: "Instagram" },
    { icon: <YouTubeIcon className="h-6 w-6" />, label: "YouTube" },
    { icon: <TikTokIcon className="h-6 w-6" />, label: "TikTok" },
    { icon: <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />, label: "WhatsApp" },
  ];
  const loop = [...items, ...items];

  return (
    <div className="bg-ink-900 py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
        {t("Trabajamos con estas plataformas", "Treballem amb aquestes plataformes")}
      </p>
      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee-fast items-center gap-12">
          {loop.map((item, index) => (
            <li
              key={`${item.label}-${index}`}
              aria-hidden={index >= items.length ? true : undefined}
              className="flex shrink-0 items-center gap-2.5 text-base font-semibold text-white/90"
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
