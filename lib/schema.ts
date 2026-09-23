import { siteConfig } from "./site-config";
import type { Faq } from "./types";

const businessId = `${siteConfig.url}/#organization`;

export const proAudience = {
  "@type": "BusinessAudience",
  audienceType: "Fontaneros y electricistas de Barcelona",
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": businessId,
    name: siteConfig.brand,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry,
    },
    areaServed: { "@type": "City", name: "Barcelona" },
    openingHours: "Mo-Fr 09:00-19:00",
    audience: proAudience,
    knowsAbout: [
      "Google Ads",
      "Meta Ads",
      "Landing pages",
      "Google Business Profile",
      "SEO local",
      "Marketing para fontaneros",
      "Marketing para electricistas",
    ],
    sameAs: Object.values(siteConfig.socials),
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    serviceType: args.serviceType ?? args.name,
    description: args.description,
    url: args.url,
    provider: { "@type": "ProfessionalService", "@id": businessId, name: siteConfig.brand },
    areaServed: { "@type": "City", name: "Barcelona" },
    audience: proAudience,
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
    inLanguage: "es-ES",
    audience: proAudience,
    author: { "@type": "Organization", "@id": businessId, name: siteConfig.brand },
    publisher: { "@type": "Organization", "@id": businessId, name: siteConfig.brand },
  };
}
