import { Icon } from "./Icon";
import { WhatsAppIcon } from "./CtaButtons";
import { FacebookIcon, GoogleIcon, MetaIcon } from "./PlatformIcons";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";

/**
 * Franja de confianza: las plataformas reales donde trabajamos para el
 * cliente (no son testimonios ni cifras, solo las herramientas que usamos).
 */
export function PlatformsTrust({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const items = [
    { icon: <GoogleIcon className="h-5 w-5 text-accent-600" />, label: "Google Ads" },
    { icon: <Icon name="mapPin" className="h-5 w-5 text-accent-600" />, label: "Google Business Profile" },
    { icon: <MetaIcon className="h-5 w-5 text-accent-600" />, label: "Meta Ads" },
    { icon: <FacebookIcon className="h-5 w-5 text-accent-600" />, label: "Facebook" },
    { icon: <Icon name="camera" className="h-5 w-5 text-accent-600" />, label: "Instagram" },
    { icon: <WhatsAppIcon className="h-5 w-5 text-accent-600" />, label: "WhatsApp" },
  ];
  const loop = [...items, ...items];

  return (
    <div className="border-y border-ink-100 bg-white py-6">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-ink-400">
        {t("Trabajamos con estas plataformas", "Treballem amb aquestes plataformes")}
      </p>
      <div className="mt-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee gap-3">
          {loop.map((item, index) => (
            <li
              key={`${item.label}-${index}`}
              aria-hidden={index >= items.length ? true : undefined}
              className="flex shrink-0 items-center gap-2.5 rounded-md border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-700"
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
