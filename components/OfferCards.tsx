import Link from "next/link";
import { CheckList } from "./CheckList";
import { Icon } from "./Icon";
import { marketingOffer, networkOffer } from "@/lib/offers";
import type { Offer } from "@/lib/offers";

export function OfferCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <OfferCard offer={networkOffer} number={1} />
      <OfferCard offer={marketingOffer} number={2} dark />
    </div>
  );
}

function OfferCard({ offer, number, dark = false }: { offer: Offer; number: number; dark?: boolean }) {
  return (
    <article
      className={`flex flex-col rounded-xl2 p-7 sm:p-9 ${
        dark ? "bg-ink-900 text-white" : "border border-ink-100 bg-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta-500 font-display text-sm font-bold text-white">
          {number}
        </span>
        <p className={`text-sm font-semibold uppercase tracking-wide ${dark ? "text-terracotta-300" : "text-terracotta-600"}`}>
          {offer.name}
        </p>
      </div>
      <h3 className={`mt-5 font-display text-3xl font-bold ${dark ? "text-white" : "text-ink-900"}`}>{offer.title}</h3>
      <p className={`mt-3 text-lg ${dark ? "text-ink-100" : "text-ink-600"}`}>{offer.summary}</p>
      <div className="mt-6 flex-1">
        <CheckList items={offer.bullets} onDark={dark} />
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link href={`/empezar?interes=${offer.interest}`} className={`btn ${dark ? "btn-light" : "btn-primary"}`}>
          {offer.cta}
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
        <Link
          href={offer.href}
          className={`px-2 text-sm font-semibold underline-offset-4 hover:underline ${dark ? "text-cream-100" : "text-ink-800"}`}
        >
          Cómo funciona
        </Link>
      </div>
    </article>
  );
}
