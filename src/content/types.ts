export interface GuideContent {
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroTitle: string;
  heroSub: string;
  heroLead: string;
  heroStats: { value: string; label: string }[];
  about: { kicker: string; title: string; paragraphs: string[]; breadcrumb: string };
  highlights: { kicker: string; title: string; intro: string; items: { title: string; text: string }[] };
  route: { kicker: string; title: string; intro: string; steps: { no: string; label: string; title: string; text: string }[] };
  nearby: { kicker: string; title: string; text: string };
  history: { kicker: string; title: string; paragraphs: string[]; note: string };
  visit: { kicker: string; title: string; rows: { label: string; value: string }[] };
  facilities: { kicker: string; title: string; intro: string; items: { title: string; text: string }[] };
  seasonal: {
    kicker: string;
    title: string;
    intro: string;
    note: string;
    columns: { season: string; weather: string; tip: string };
    rows: { season: string; weather: string; tip: string }[];
  };
  itineraries: { kicker: string; title: string; intro: string; items: { title: string; text: string }[] };
  responsibility: { kicker: string; title: string; intro: string; items: { title: string; text: string }[] };
  reviews: { kicker: string; title: string; cta: string; note: string };
  sources: { kicker: string; title: string; items: { label: string; text: string }[] };
  faq: { kicker: string; title: string; items: { q: string; a: string }[] };
  explore: { kicker: string; title: string; intro: string };
  footerTagline: string;
  photoAlt: Record<'hero' | 'tunnel' | 'lake' | 'tunnel2' | 'lake2', string>;
  photoCredit: string;
  disclaimer: string;
}

export interface TopicContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  card: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  faq: { q: string; a: string }[];
  updated: string;
}
