import { SITE_URL } from '../config';
import type { Locale } from '../i18n';
import { ATTRACTION as A, NAME_BY_LOCALE, PHOTO_SOURCES } from '../data/site';

const ATTRACTION_ID = `${SITE_URL}/#attraction`;

export interface FaqItem {
  q: string;
  a: string;
}

export function attractionSchema(locale: Locale, url: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': ATTRACTION_ID,
    name: NAME_BY_LOCALE[locale],
    alternateName: [...A.alternateNames],
    description,
    url,
    image: PHOTO_SOURCES.hero,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${A.ward}, ${A.city}`,
      addressLocality: A.city,
      addressRegion: A.province,
      postalCode: A.postalCode,
      addressCountry: A.countryCode
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: A.latitude,
      longitude: A.longitude
    },
    telephone: A.phone,
    hasMap: A.mapUrl,
    isAccessibleForFree: false,
    touristType: ['Photography', 'Sightseeing', 'Family'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '17:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: A.rating,
      reviewCount: A.reviewCount,
      bestRating: 5,
      worstRating: 1
    },
    sameAs: [A.mapUrl, A.officialUrl]
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };
}

export function breadcrumbSchema(locale: Locale, url: string, currentLabel: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: NAME_BY_LOCALE[locale], item: SITE_URL + localizedHome(locale) },
      { '@type': 'ListItem', position: 2, name: currentLabel, item: url }
    ]
  };
}

function localizedHome(locale: Locale): string {
  return locale === 'en' ? '/' : `/${locale}/`;
}

export function websiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL + localizedHome(locale),
    name: NAME_BY_LOCALE[locale],
    inLanguage: locale === 'zh' ? 'zh-Hant' : locale
  };
}
