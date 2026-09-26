import { EventData } from '../types/event';
import { noorERamzan2Images, noorERamzan1Images, futureEventImages } from './images';

export const eventsData: EventData[] = [
  {
    id: 'noor-e-ramzan-2',
    slug: 'noor-e-ramzan-2',
    title: 'NOOR-E-RAMZAN 2.0',
    edition: '2.0',
    tagline: 'FOOD • SHOPPING • FESTIVITY',
    category: 'Food / Shopping / Festivity',
    description:
      'The biggest Ramzan food & shopping festival in Chennai, uniting extraordinary culinary flavors, curated boutique shopping, lifestyle pavilions, and an unforgettable family festive atmosphere.',
    longDescription: [
      'Welcome to Noor-E-Ramzan 2.0, the flagship festival presented by Sama Events at the prestigious YMCA Royapettah grounds in Chennai.',
      'Spanning 12 grand days from 25 February to 08 March 2027, the festival delivers an unparalleled festive ambiance illuminated with elegant Ramadan decor, mouthwatering aromatic delicacies, boutique lifestyle shopping, dedicated kids entertainment, and comfortable dining spaces.',
      'Whether you are looking to shop for Eid collections, indulge in signature cuisines, spend joyous evenings with your family, or showcase your brand to thousands of enthusiastic shoppers, Noor-E-Ramzan 2.0 is the definitive destination of 2027.',
    ],
    startDate: '2027-02-25',
    endDate: '2027-03-08',
    formattedDate: '25 February 2027 – 08 March 2027',
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
      'Spacious Dedicated Dining Area',
      'Kids Play & Activity Zone',
      'Dedicated Visitor Parking Area',
      'Safe Family-Friendly Atmosphere',
      'Streamlined Entrance & Exit Gates',
    ],
    stallInfo: {
      title: 'Stall Categories & Specifications',
      description:
        'Official stall dimensions derived from the YMCA Royapettah venue floor plan. Book your prime location now to ensure prime visibility for your business.',
      categories: [
        {
          category: 'Exhibition Stalls',
          stallRange: 'Stalls S1 – S62',
          dimensions: '8 x 6 Feet',
          description: 'Spacious octanorm retail stalls designed with prime aisle frontage. Perfect for designer clothing, abayas, kurtis, jewellery, perfumes, footwear, accessories, home decor, and gifts.',
          suitableFor: 'Fashion, Lifestyle, Jewellery, Fragrances, Home Decor',
        },
        {
          category: 'Food Stalls (Large)',
          stallRange: 'Stalls F1 – F9 & F15 – F22',
          dimensions: '6 x 8 Feet',
          description: 'High-capacity kitchen stalls positioned directly adjacent to the main food promenade and central dining court. Ideal for live cooking, biryani counters, and specialty grills.',
          suitableFor: 'Live Kitchens, Biryanis, Grills, Main Entrees',
        },
        {
          category: 'Food Stalls (Compact)',
          stallRange: 'Stalls F11 – F16',
          dimensions: '6 x 4 Feet',
          description: 'Dedicated compact kiosk stalls optimized for quick-service food concepts, refreshing beverages, and dessert specialties.',
          suitableFor: 'Desserts, Mocktails, Ice Creams, Quick Bites, Chaat',
        },
      ],
      notes: [
        'All stalls include basic electrical points and standard partition setups.',
        'Stall allocations are allotted on a first-come, first-served basis upon confirmation.',
        'Prime corner stalls have multi-side visitor visibility.',
      ],
      layoutImageUrl: noorERamzan2Images.stallLayout,
    },
    whatsappMessage:
      'Hello Sama Events, I would like to know more about Noor-E-Ramzan 2.0.',
    metaTitle: 'Noor-E-Ramzan 2.0 | Sama Events - Food, Shopping, Festivity',
    metaDescription:
      'Experience Noor-E-Ramzan 2.0 at YMCA Royapettah Chennai from 25.02.2027 to 08.03.2027. Stalls, food court, shopping, and family celebrations.',
  },
  {
    id: 'noor-e-ramzan-1',
    slug: 'noor-e-ramzan-1',
    title: 'NOOR-E-RAMZAN 1.0',
    edition: '1.0',
    tagline: 'FOOD • SHOPPING • FESTIVITY',
    category: 'Food / Shopping / Festivity',
    description:
      'The inaugural 2026 edition that laid the foundation for premier community celebrations in Chennai, bringing together crowds, authentic flavors, and festive shopping.',
    longDescription: [
      'Noor-E-Ramzan 1.0 was organized in 2026 as a vibrant celebration of culture, cuisine, and commerce in Chennai.',
      'The festival brought together enthusiastic visitors, families, home cooks, boutique entrepreneurs, and traditional artisans for an unforgettable series of festive evenings.',
      'The success, trust, and warm community response from 1.0 directly paved the way for the larger, grander Noor-E-Ramzan 2.0 edition.',
    ],
    startDate: '2026-03-10',
    endDate: '2026-03-22',
    formattedDate: 'March 2026',
    duration: 'Completed Edition',
    venue: 'YMCA Royapettah',
    city: 'Chennai',
    address: 'Royapettah, Chennai',
    status: 'completed',
    isFeatured: false,
    heroImage: noorERamzan1Images.hero,
    cardImage: noorERamzan1Images.crowdAtmosphere,
    highlights: [
      'Celebrated 2026 Inaugural Edition',
      'Curated Food Court Experience',
      'Boutique Lifestyle Stalls',
      'Festive Lighting & Family Ambience',
      'Community Celebrations',
    ],
    metaTitle: 'Noor-E-Ramzan 1.0 (2026) | Sama Events Previous Edition',
    metaDescription:
      'Relive the memorable moments of Noor-E-Ramzan 1.0 held in 2026 at YMCA Royapettah, Chennai.',
  },
  {
    id: 'chennai-food-fiesta-2027',
    slug: 'chennai-food-fiesta-2027',
    title: 'CHENNAI FOOD FIESTA',
    edition: '2027',
    tagline: 'FLAVORS • STREET FOOD • LIVE MUSIC',
    category: 'Food Festival',
    description:
      'An upcoming multi-cuisine culinary extravaganza curated by Sama Events, gathering the finest regional delicacies, master chefs, and artisan street vendors.',
    longDescription: [
      'Chennai Food Fiesta is an upcoming gourmet celebration designed to bring food lovers across the city together.',
      'Featuring curated culinary zones, acoustic live music, dessert islands, and family picnic lounges.',
    ],
    startDate: '2027-07-16',
    endDate: '2027-07-18',
    formattedDate: 'July 2027 (Announced)',
    duration: '3 Days',
    venue: 'Chennai Trade Centre / Open Grounds',
    city: 'Chennai',
    address: 'Nandambakkam, Chennai',
    status: 'announced',
    isFeatured: false,
    heroImage: futureEventImages.chennaiFoodFiesta,
    cardImage: futureEventImages.chennaiFoodFiesta,
    highlights: [
      'Over 50+ Curated Food Vendors',
      'Live Chef Demos & Workshops',
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
    title: 'SAMA LIFESTYLE & DESIGN SOUK',
    edition: 'Autumn 2027',
    tagline: 'FASHION • HOME • WELLNESS • ART',
    category: 'Shopping & Lifestyle',
    description:
      'A boutique pop-up market featuring emerging homegrown labels, handcrafted artisanal goods, festive home decor, and contemporary lifestyle brands.',
    longDescription: [
      'The Sama Lifestyle & Design Souk is created for discerning shoppers seeking authentic, premium and homegrown design creations.',
    ],
    startDate: '2027-10-08',
    endDate: '2027-10-10',
    formattedDate: 'October 2027 (Announced)',
    duration: '3 Days',
    venue: 'Premier Exhibition Pavilion',
    city: 'Chennai',
    address: 'Chennai, Tamil Nadu',
    status: 'announced',
    isFeatured: false,
    heroImage: futureEventImages.festiveSouk,
    cardImage: futureEventImages.globalLifestyleExpo,
    highlights: [
      'Curated Apparel & Handcrafted Textiles',
      'Home Decor & Artisan Pottery',
      'Organic Beauty & Fragrances',
      'Exclusive Pop-Up Cafes',
    ],
    metaTitle: 'Sama Lifestyle & Design Souk 2027 | Sama Events',
    metaDescription:
      'Sama Lifestyle & Design Souk: Chennai premier autumn pop-up showcase for boutique design and artisan brands.',
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
