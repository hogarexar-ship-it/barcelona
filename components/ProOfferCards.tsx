import Link from "next/link";
import { CheckList } from "./CheckList";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { proRoutes } from "@/lib/navigation";
import { marketingOffer, networkOffer } from "@/lib/offers";
import type { Offer } from "@/lib/offers";

export function ProOfferCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Reveal className="h-full">
        <OfferCard offer={networkOffer} number={1} icon="inbox" />
      </Reveal>
      <Reveal delay={150} className="h-full">
        <OfferCard offer={marketingOffer} number={2} icon="megaphone" dark />
      </Reveal>
    </div>
  );
}

function OfferCard({ offer, number, icon, dark = false }: { offer: Offer; number: number; icon: IconName; dark?: boolean }) {
  return (
    <article
      className={`flex h-full flex-col rounded-xl2 p-7 sm:p-9 ${dark ? "bg-ink-900 text-white" : "border border-ink-200 bg-white"}`}
    >
      <div className={`flex items-center gap-3 ${dark ? "text-accent-300" : "text-accent-700"}`}>
        <Icon name={icon} className="h-8 w-8" />
        <p className="text-sm font-medium">
          {number}. {offer.name}
        </p>
      </div>
      <h3 className={`mt-5 font-display text-3xl font-bold ${dark ? "text-white" : "text-ink-900"}`}>{offer.title}</h3>
      <p className={`mt-3 text-lg ${dark ? "text-ink-100" : "text-ink-600"}`}>{offer.summary}</p>
      <div className="mt-6 flex-1">
        <CheckList items={offer.bullets} onDark={dark} />
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link href={`${proRoutes.join}?interes=${offer.interest}`} className={`btn ${dark ? "btn-light" : "btn-primary"}`}>
          {offer.cta}
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
        <Link
          href={offer.href}
          className={`px-2 text-sm font-semibold underline-offset-4 hover:underline ${dark ? "text-surface-100" : "text-ink-800"}`}
        >
          Cómo funciona
        </Link>
      </div>
    </article>
  );
}
