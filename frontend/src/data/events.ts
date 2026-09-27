import { EventData } from '../types/event';
import { noorERamzan2Images, noorERamzan1Images, futureEventImages } from './images';

export const eventsData: EventData[] = [
  {
    id: 'noor-e-ramzan-2',
    slug: 'noor-e-ramzan-2',
    title: 'NOOR-E-RAMZAN 2.0',
    edition: '2.0',
    theme: 'FOOD • SHOPPING • FESTIVITY',
    tagline: 'ONE DESTINATION | ENDLESS MEMORIES',
    supportingPhrase: 'TOGETHER WE CELEBRATE',
    category: 'Flagship Food & Shopping Festival',
    description:
      'Chennai’s premier festive destination uniting extraordinary culinary flavors, curated boutique shopping, lifestyle pavilions, and family celebrations.',
    longDescription: [
      'Noor-E-Ramzan 2.0 is the flagship festive celebration presented by Sama Events at the prestigious YMCA Royapettah grounds in Chennai.',
      'Spanning 12 grand days from 25 February to 08 March 2027, the festival brings together authentic Ramadan delicacies, boutique shopping, lifestyle pavilions, family entertainment, and comfortable dining spaces.',
      'Join us for 12 memorable evenings celebrating together with food, shopping, and community joy.',
    ],
    startDate: '2027-02-25',
    endDate: '2027-03-08',
    formattedDate: '25 FEB — 08 MAR 2027',
    duration: '12 Days',
    venue: 'YMCA Royapettah',
    city: 'Chennai',
    address: 'No. 149/70, Dr. Besant Road, Royapettah, Chennai - 600014',
    googleMapsUrl: 'https://maps.google.com/?q=YMCA+Royapettah+Chennai',
    status: 'upcoming',
    isFeatured: true,
    heroImage: noorERamzan2Images.hero,
    cardImage: noorERamzan2Images.card,
    highlights: [
      'Exhibition Stalls (S1–S62)',
      'Food Stalls (F1–F22)',
      'Dedicated Family Dining Arena',
      'Kids Play & Activity Zone',
      'On-Site Visitor Parking',
      'Safe Family-Friendly Ambiance',
    ],
    stallInfo: {
      title: 'Stall Categories & Specifications',
      description:
        'Official stall dimensions derived directly from the YMCA Royapettah floor plan.',
      categories: [
        {
          category: 'Exhibition Stalls',
          stallRange: 'Stalls S1 – S62',
          dimensions: '8 × 6 ft',
          description:
            'Retail pavilions with prominent aisle fronts. Suitable for fashion, abayas, kurtis, jewellery, perfumes, home accessories, and festive collections.',
          suitableFor: 'Fashion, Lifestyle, Jewellery, Fragrances, Home Decor',
        },
        {
          category: 'Food Stalls (Large)',
          stallRange: 'Stalls F1 – F9 & F15 – F22',
          dimensions: '6 × 8 ft',
          description:
            'Kitchen stalls adjacent to the main food promenade and central dining court. Designed for live cooking, biryani counters, and specialty grills.',
          suitableFor: 'Live Kitchens, Biryanis, Grills, Main Entrees',
        },
        {
          category: 'Food Stalls (Compact)',
          stallRange: 'Stalls F11 – F16',
          dimensions: '6 × 4 ft',
          description:
            'Compact kiosk stalls optimized for quick-service food concepts, refreshing beverages, and dessert specialties.',
          suitableFor: 'Desserts, Mocktails, Ice Creams, Quick Bites',
        },
      ],
      notes: [
        'All stalls include basic electrical points and standard partition setups.',
        'Stalls are allotted on a first-come, first-served basis upon confirmation.',
      ],
      layoutImageUrl: noorERamzan2Images.stallLayout,
    },
    whatsappMessage:
      'Hello Sama Events, I would like to know more about Noor-E-Ramzan 2.0.',
    metaTitle: 'Noor-E-Ramzan 2.0 | Sama Events',
    metaDescription:
      'Noor-E-Ramzan 2.0 at YMCA Royapettah, Chennai from 25.02.2027 to 08.03.2027. Food, shopping, and festive celebration.',
  },
  {
    id: 'noor-e-ramzan-1',
    slug: 'noor-e-ramzan-1',
    title: 'NOOR-E-RAMZAN 1.0',
    edition: '1.0',
    theme: 'FOOD • SHOPPING • FESTIVITY',
    tagline: 'Successfully Completed',
    supportingPhrase: 'A celebration that brought people together',
    category: 'Previous Chapter / Success Story',
    description:
      'The inaugural 2026 edition that united thousands of visitors, authentic culinary flavors, and festive shopping in Chennai.',
    longDescription: [
      'Noor-E-Ramzan 1.0 was organized in 2026 at YMCA Royapettah as a vibrant celebration of culture, cuisine, and commerce.',
      'The festival brought together enthusiastic visitors, families, home cooks, boutique entrepreneurs, and artisans for an unforgettable series of festive evenings.',
      'The trust, warm memories, and community response from 1.0 paved the way for Noor-E-Ramzan 2.0.',
    ],
    startDate: '2026-03-10',
    endDate: '2026-03-22',
    formattedDate: '2026',
    duration: 'Successfully Completed',
    venue: 'YMCA Royapettah',
    city: 'Chennai',
    address: 'No. 149/70, Dr. Besant Road, Royapettah, Chennai - 600014',
    googleMapsUrl: 'https://maps.google.com/?q=YMCA+Royapettah+Chennai',
    status: 'completed',
    isFeatured: false,
    heroImage: noorERamzan1Images.hero,
    cardImage: noorERamzan1Images.crowdAtmosphere,
    highlights: [
      'Celebrated 2026 Inaugural Edition',
      'Curated Food Court Experience',
      'Boutique Lifestyle Stalls',
      'Festive Lighting & Family Atmosphere',
    ],
    metaTitle: 'Noor-E-Ramzan 1.0 | Sama Events',
    metaDescription:
      'Explore the authentic visual story and moments of Noor-E-Ramzan 1.0 held at YMCA Royapettah, Chennai.',
  },
  {
    id: 'chennai-food-fiesta-2027',
    slug: 'chennai-food-fiesta-2027',
    title: 'CHENNAI FOOD FIESTA 2027',
    edition: '2027',
    theme: 'FLAVORS • STREET FOOD • LIVE MUSIC',
    tagline: 'FLAVORS • STREET FOOD • LIVE MUSIC',
    supportingPhrase: 'Chennai’s upcoming culinary gathering',
    category: 'Food Festival',
    description:
      'An upcoming multi-cuisine culinary gathering curated by Sama Events, bringing regional delicacies, street food artisans, and live dining together.',
    longDescription: [
      'Chennai Food Fiesta is an upcoming gourmet celebration designed to bring food lovers across the city together.',
      'Featuring curated culinary zones, acoustic music, dessert islands, and family picnic seating.',
    ],
    startDate: '2027-07-16',
    endDate: '2027-07-18',
    formattedDate: 'July 2027',
    duration: '3 Days',
    venue: 'Open Grounds / Exhibition Centre',
    city: 'Chennai',
    address: 'Chennai, Tamil Nadu',
    googleMapsUrl: 'https://maps.google.com/?q=Chennai',
    status: 'announced',
    isFeatured: false,
    heroImage: futureEventImages.chennaiFoodFiesta,
    cardImage: futureEventImages.chennaiFoodFiesta,
    highlights: [
      'Curated Regional Food Vendors',
      'Live Grills & Signature Counters',
      'Acoustic Evening Sessions',
      'Family Dining Pavilions',
    ],
    metaTitle: 'Chennai Food Fiesta 2027 | Sama Events',
    metaDescription:
      'Announcing Chennai Food Fiesta 2027 by Sama Events. Flavors, street food, and community celebration.',
  },
  {
    id: 'sama-lifestyle-souk-2027',
    slug: 'sama-lifestyle-souk-2027',
    title: 'SAMA LIFESTYLE & DESIGN SOUK 2027',
    edition: '2027',
    theme: 'FASHION • HOME • WELLNESS • ART',
    tagline: 'FASHION • HOME • WELLNESS • ART',
    supportingPhrase: 'Chennai’s boutique design showcase',
    category: 'Shopping & Lifestyle',
    description:
      'A boutique pop-up market featuring emerging homegrown labels, handcrafted artisanal goods, festive home decor, and contemporary lifestyle brands.',
    longDescription: [
      'The Sama Lifestyle & Design Souk is created for shoppers seeking authentic, premium, and homegrown design creations.',
    ],
    startDate: '2027-10-08',
    endDate: '2027-10-10',
    formattedDate: 'October 2027',
    duration: '3 Days',
    venue: 'Premier Exhibition Pavilion',
    city: 'Chennai',
    address: 'Chennai, Tamil Nadu',
    googleMapsUrl: 'https://maps.google.com/?q=Chennai',
    status: 'announced',
    isFeatured: false,
    heroImage: futureEventImages.festiveSouk,
    cardImage: futureEventImages.festiveSouk,
    highlights: [
      'Curated Apparel & Handcrafted Textiles',
      'Home Decor & Artisan Goods',
      'Organic Beauty & Fragrances',
      'Pop-Up Cafe Lounge',
    ],
    metaTitle: 'Sama Lifestyle & Design Souk 2027 | Sama Events',
    metaDescription:
      'Sama Lifestyle & Design Souk 2027: Chennai showcase for boutique design and artisan brands.',
  },
];

export const getFeaturedEvent = (): EventData => {
  return eventsData.find((e) => e.isFeatured) || eventsData[0];
};

export const getEventBySlug = (slug: string): EventData | undefined => {
  return eventsData.find((e) => e.slug.toLowerCase() === slug.toLowerCase());
};

export const getUpcomingEvents = (): EventData[] => {
  return eventsData.filter((e) => e.status === 'upcoming' || e.status === 'announced');
};

export const getPastEvents = (): EventData[] => {
  return eventsData.filter((e) => e.status === 'completed');
};
