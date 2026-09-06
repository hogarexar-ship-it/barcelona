import { siteConfig } from "./site-config";
import type { Faq } from "./services-data";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.brand,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry,
    },
    areaServed: {
      "@type": "City",
      name: "Barcelona",
    },
    openingHours: "Mo-Su 08:00-21:00",
    sameAs: Object.values(siteConfig.socials),
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: args.name,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.brand,
      "@id": `${siteConfig.url}/#business`,
    },
    areaServed: {
      "@type": "City",
      name: "Barcelona",
    },
    name: args.name,
    description: args.description,
    url: args.url,
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function blogPostingSchema(args: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    description: args.description,
    url: args.url,
    datePublished: args.datePublished,
    dateModified: args.dateModified,
    author: {
      "@type": "Organization",
      name: siteConfig.brand,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brand,
    },
  };
}
