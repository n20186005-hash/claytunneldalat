import { ATTRACTION as A } from '../data/site';
import type { GuideContent } from './types';

const dong = (v: number) => `${v.toLocaleString('en-US')} VND`;

export const en: GuideContent = {
  metaTitle: `Clay Tunnel Da Lat (Đường Hầm Điêu Khắc): Entrance Fee ${dong(A.ticketAdult)}, Opening Hours & How to Get There`,
  metaDescription: `Plan a visit to the Clay Tunnel (${A.nameVi}) in ${A.city}, ${A.province}: ${dong(A.ticketAdult)} entrance fee, 07:00–17:00 daily, how to get there from Da Lat centre, what to see and nearby Tuyen Lam Lake. Rated ${A.rating}/5.`,
  heroKicker: `${A.city} · ${A.province} · ${A.country}`,
  heroTitle: A.nameVi,
  heroSub: `Clay Tunnel · ${A.city}`,
  heroLead: `A kilometre-long open-air clay sculpture park on the wooded hills above ${A.nearby1}. Clay tableaux retell the story of ${A.city} and the Central Highlands — a quiet, photogenic stop about ${A.distanceFromCentreKm} km south of the city centre.`,
  heroStats: [
    { value: `${A.lengthKm} km`, label: 'sculpture path' },
    { value: `${A.distanceFromCentreKm} km`, label: 'from the centre' },
    { value: `★ ${A.rating}`, label: `${A.reviewCount.toLocaleString('en-US')} reviews` }
  ],
  about: {
    kicker: 'From clay to landmark',
    title: `About ${A.nameVi}`,
    paragraphs: [
      `${A.nameVi} — listed on maps as ${A.legalName} and known in English as the ${A.nameEn} or Sculpture Tunnel — is an open-air clay sculpture park in ${A.ward}, ${A.city}, ${A.province}, ${A.country}. A single winding path of roughly ${A.lengthKm} km leads past large clay tableaux that recount the history, culture and landscapes of ${A.city} and the Central Highlands.`,
      `The site sits in the pine hills above ${A.nearby1}, about ${A.distanceFromCentreKm} km south of the city centre. Most visitors combine it with ${A.nearby1} and ${A.nearby2} in one half-day loop, which is why it appears on many ${A.city} day itineraries.`,
      `It is a family-built attraction rather than a municipal park: the clay works are modelled and maintained by a local artisan family, so the place reads as much like a craft workshop as a sightseeing stop.`
    ],
    breadcrumb: `${A.nameVi} → ${A.city} → ${A.province} → ${A.country}`
  },
  highlights: {
    kicker: 'What you see',
    title: 'Highlights of the sculpture path',
    intro: 'The route is linear and easy to follow. These are the stops visitors remember most.',
    items: [
      {
        title: 'The clay tableaux',
        text: `Dozens of large clay reliefs and free-standing figures line the path: scenes of highland village life, ethnic-cultural motifs, and miniature versions of ${A.city} landmarks. The modelling style is deliberately rustic and handmade.`
      },
      {
        title: 'The tunnel sections',
        text: `Parts of the path pass through covered, tunnel-like stretches cut into the hillside, which is where the name ${A.nameVi} ("sculpture tunnel") comes from. They are the coolest, most photographed stretches on a sunny day.`
      },
      {
        title: 'The lake viewpoint',
        text: `Towards the lower end of the route the trees open towards ${A.nearby1}. It is the best spot for a wide landscape photo and a natural break before you loop back.`
      },
      {
        title: 'Photo spots',
        text: `Because almost every tableau is built at human scale, the park is one of ${A.city}'s most photographed attractions: visitors pose beside the figures, and the soft morning light suits the clay colours best.`
      }
    ]
  },
  route: {
    kicker: 'Suggested route · 45–90 min',
    title: `How to visit the ${A.nameEn}`,
    intro: 'The site is compact: buy a ticket, follow the single sculpture path, pause at the lake viewpoint, and loop back.',
    steps: [
      {
        no: '01',
        label: 'Get there',
        title: `From ${A.city} centre`,
        text: `Roughly ${A.distanceFromCentreKm} km south, along the road that continues to ${A.nearby1}. A taxi or motorbike takes about 25–35 minutes; the road passes ${A.nearby2}.`
      },
      {
        no: '02',
        label: 'Enter',
        title: 'Buy a ticket at the gate',
        text: `Entrance is ${dong(A.ticketAdult)} for visitors over 1.3 m and ${dong(A.ticketChild)} for children under 1.3 m. Prices are indicative — confirm the current figure at the gate on the day.`
      },
      {
        no: '03',
        label: 'Walk',
        title: 'Follow the clay path',
        text: `One winding path, dozens of tableaux, and a few covered tunnel stretches. Allow 45–90 minutes depending on how often you stop to photograph.`
      },
      {
        no: '04',
        label: 'Combine',
        title: 'Add the landmarks nearby',
        text: `Pair the visit with ${A.nearby1} and ${A.nearby2}, both a few minutes further down the same road.`
      }
    ]
  },
  nearby: {
    kicker: 'Landmarks nearby',
    title: `Around the ${A.nameEn}`,
    text: `The sculpture tunnel sits inside the cluster of ${A.city}'s southern highlights. Within a few minutes' drive are ${A.nearby1} — a calm lake ringed by pine forest — and ${A.nearby2}, a hillside Zen monastery above the water, reached by the ${A.city} cable car. Many half-day itineraries combine all three.`
  },
  history: {
    kicker: 'From a hobby to a landmark',
    title: `History of ${A.nameVi}`,
    paragraphs: [
      `${A.nameVi} began in the early 2000s as the clay-sculpting project of a local artisan family near ${A.nearby1}. What started as a personal craft grew into a kilometre-long open-air gallery that retells the story of ${A.city} and the Central Highlands — from the city's founding and its French colonial villas to highland ethnic cultures and natural landmarks — modelled entirely in clay.`,
      `The attraction reflects the region's hands-on craft tradition and has become one of ${A.city}'s distinctive family-built sights: a place where local history, folklore and landscape are read slowly, on foot, one tableau at a time. New works are still added, so repeat visitors often find something different from their last trip.`
    ],
    note: 'Dates and chronology are summarised from travel references; the founders continue to expand the site.'
  },
  visit: {
    kicker: 'Plan your visit',
    title: 'Essential information',
    rows: [
      { label: 'Address', value: `${A.ward}, ${A.city}, ${A.province} ${A.postalCode}, ${A.country}` },
      { label: 'Plus Code', value: A.plusCode },
      { label: 'Phone', value: A.phoneDisplay },
      { label: 'Opening hours', value: 'Daily 07:00 – 17:00 (indicative — check before travelling).' },
      { label: 'Entrance fee', value: `${dong(A.ticketAdult)} per adult (over 1.3 m) · ${dong(A.ticketChild)} per child (under 1.3 m). Confirm at the gate.` },
      { label: 'Time needed', value: '45–90 minutes for the full path.' },
      { label: 'Best for', value: 'Photography, a relaxed walk, local crafts and lake views.' }
    ]
  },
  facilities: {
    kicker: 'On site',
    title: 'Visitor facilities',
    intro: 'Facilities are simple and change with the season. These are the types of services visitors usually find at the entrance area and along the route.',
    items: [
      { title: 'Parking', text: 'Space for motorbikes and cars at the entrance area; tour buses usually drop off at the gate.' },
      { title: 'Restrooms', text: 'Available near the ticket area; carry your own tissues and hand sanitiser.' },
      { title: 'Drinks & snacks', text: 'Small stalls and refreshment points around the entrance; bring water for the walk itself.' },
      { title: 'Shade & rest stops', text: 'Covered tunnel stretches and benches along the path offer breaks from the highland sun.' },
      { title: 'Clay workshops & souvenirs', text: 'Clay craft is the theme of the site, so small clay items and local souvenirs are typically on display near the entrance.' },
      { title: 'Accessibility', text: 'Most of the route is a gentle walk, but there are steps and unpaved sections; sturdy shoes help after rain.' }
    ]
  },
  seasonal: {
    kicker: 'Dry season vs rainy season',
    title: 'When to visit',
    intro: `${A.city} has a marked dry season and rainy season. Both are visit-able; they simply call for different timing.`,
    note: 'Climate description based on the general Da Lat / Central Highlands seasonal pattern; always check a same-day forecast before you set out.',
    columns: { season: 'Season', weather: 'Typical weather', tip: 'How to plan' },
    rows: [
      {
        season: 'Nov – Apr (dry season)',
        weather: 'Cool mornings, sunny middays, little rain; peak tourist season.',
        tip: 'Arrive around 08:00–10:00 for soft light and thinner crowds; carry a light jacket for early mornings.'
      },
      {
        season: 'May – Oct (rainy season)',
        weather: 'Frequent afternoon showers, misty mornings, greener hills.',
        tip: 'Visit in the morning before the usual afternoon rain; the covered tunnel stretches keep part of the route usable.'
      },
      {
        season: 'Dec – Jan (holiday peak)',
        weather: 'Coolest months of the year; nights can drop near 10 °C.',
        tip: 'Combine an early-morning visit with a warm layer; expect the busiest gates of the year.'
      },
      {
        season: 'Year round',
        weather: 'Highland climate around 1,500 m: mild days, cool evenings.',
        tip: 'A compact rain jacket is more useful than an umbrella on the exposed hillside sections.'
      }
    ]
  },
  itineraries: {
    kicker: 'Ready-made plans',
    title: 'Suggested itineraries',
    intro: 'Three ways to fit the sculpture tunnel into a day in Da Lat.',
    items: [
      {
        title: 'Half day: tunnel + lake (3–4 h)',
        text: `Morning drive south to ${A.nameVi} (45–90 min inside), then continue to ${A.nearby1} for lunch, and finish at ${A.nearby2} or the cable car in the afternoon.`
      },
      {
        title: 'Full day: southern Da Lat loop (7–8 h)',
        text: `Clay Tunnel → ${A.nearby1} → ${A.nearby2} and the cable car → a flower garden or coffee stop on the way back into town.`
      },
      {
        title: 'For families & photographers',
        text: `Come early for the light and cooler temperatures, plan 90 minutes so children can stop at every tableau, and take the pram-friendly entrance stretches first.`
      }
    ]
  },
  responsibility: {
    kicker: 'Visit well',
    title: 'Responsible visiting',
    intro: 'The sculptures are handmade and continuously maintained, and the hillside around them is working pine forest.',
    items: [
      { title: 'Do not touch or climb the clay', text: 'The works are fragile; climbing them for photos causes visible damage that has to be repaired by hand.' },
      { title: 'Stay on the path', text: 'The hillside is erodible pine woodland; cutting switchbacks widens erosion channels after rain.' },
      { title: 'Carry out your litter', text: 'Bins are limited along the route; pack out what you bring, especially bottles and tissues.' },
      { title: 'Keep noise down', text: 'The site borders a monastery area and residential hillside — quiet visiting is appreciated.' },
      { title: 'Ask before photographing people', text: 'Staff, artisans and other visitors are not props; a quick ask is enough.' }
    ]
  },
  reviews: {
    kicker: 'Visitor ratings & reviews',
    title: 'What visitors say',
    cta: 'See all reviews on Google Maps ↗',
    note: `Rating and review count are synchronised from Google Maps user reviews (${A.ratingMonth}) and are shown for reference only.`
  },
  sources: {
    kicker: 'Sources & references',
    title: 'Facts, not legends',
    items: [
      {
        label: 'Google Maps',
        text: `Location, Plus Code ${A.plusCode}, coordinates ${A.latitude}, ${A.longitude} and the visitor rating shown above.`
      },
      {
        label: 'Vietnam National Administration of Tourism',
        text: 'Official national tourism portal used for regional travel context: vietnam.travel.'
      },
      {
        label: 'Travel references',
        text: 'Opening hours and ticket prices are given as typically published and should be confirmed at the gate on the day of your visit.'
      }
    ]
  },
  faq: {
    kicker: 'Before you go',
    title: 'Frequently asked questions',
    items: [
      {
        q: 'How much is the entrance fee for the Clay Tunnel in Da Lat?',
        a: `The ticket is ${dong(A.ticketAdult)} per person for visitors over 1.3 m tall and ${dong(A.ticketChild)} for children under 1.3 m. Prices are indicative and can change seasonally, so confirm the current figure at the gate on the day.`
      },
      {
        q: 'What are the opening hours?',
        a: 'The site is open daily, typically from 07:00 to 17:00. Last entry is usually in the mid-afternoon; arriving before 10:00 gives you the softest light and the fewest crowds.'
      },
      {
        q: 'Where is the Clay Tunnel (Đường Hầm Điêu Khắc) located?',
        a: `${A.ward}, ${A.city} City, ${A.province} ${A.postalCode}, ${A.country}, on the hills above ${A.nearby1}, about ${A.distanceFromCentreKm} km south of the city centre. Plus Code: ${A.plusCode}.`
      },
      {
        q: 'How do I get there from Da Lat centre?',
        a: `By taxi or ride-hailing car it takes about 25–35 minutes heading south on the road to ${A.nearby1}, passing ${A.nearby2}. A rented motorbike is the most flexible option; many day tours include the stop.`
      },
      {
        q: 'What exactly is the Clay Tunnel?',
        a: `It is a roughly ${A.lengthKm} km open-air clay sculpture park: a winding path lined with large clay tableaux about the history, culture and landscapes of ${A.city} and the Central Highlands, including covered tunnel-like stretches cut into the hillside.`
      },
      {
        q: 'How long does a visit take?',
        a: 'Most visitors spend 45–90 minutes. Photographers and families who stop at every tableau often stay closer to two hours.'
      },
      {
        q: 'Is it worth visiting in the rainy season?',
        a: `Yes, with timing: showers in ${A.city} usually arrive in the afternoon, so a morning visit often stays dry, and the covered tunnel stretches shelter part of the route. Wear shoes with grip because the path gets slick.`
      },
      {
        q: 'Is photography allowed?',
        a: 'Yes. Photography is the main reason many people come. Tripods are fine in quiet hours; please do not climb the sculptures for a shot.'
      },
      {
        q: 'Is it suitable for children and older visitors?',
        a: 'The route is mostly a gentle walk with some steps and unpaved sections. Families with small children usually manage fine at an unhurried pace; a carrier is easier than a pram on the narrower stretches.'
      },
      {
        q: 'Is there parking and are there toilets?',
        a: 'Parking for motorbikes and cars is available at the entrance area and restrooms are near the ticket office. Bring a little cash for tickets, drinks and small purchases.'
      },
      {
        q: 'What can I visit nearby?',
        a: `${A.nearby1} and ${A.nearby2} are both a few minutes further along the same road, and the ${A.city} cable car connects the monastery area to Robin Hill.`
      }
    ]
  },
  explore: {
    kicker: 'Go deeper',
    title: 'Plan the details',
    intro: 'Three focused guides for the questions visitors ask most.'
  },
  footerTagline: `Independent visitor guide for ${A.nameVi} (${A.nameEn}) in ${A.city}, ${A.province}, ${A.country}. Not the official site of the attraction.`,
  photoAlt: {
    hero: `${A.nameVi} — entrance path of the clay sculpture tunnel in ${A.city}`,
    tunnel: `Clay sculptures inside ${A.nameVi} (${A.nameEn})`,
    lake: `${A.nearby1} seen from the hills near ${A.nameVi}`,
    tunnel2: `Covered tunnel section of ${A.nameVi} in ${A.city}`,
    lake2: `Pine hills and water around ${A.nearby1}, ${A.city}`
  },
  photoCredit: 'Photo: Wikimedia Commons (Panoramio) · CC BY-SA.',
  disclaimer: 'Opening hours and ticket prices are indicative and may change; please confirm at the gate before travelling.'
};
