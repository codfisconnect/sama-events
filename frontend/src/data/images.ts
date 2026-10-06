/**
 * SAMA EVENTS - CENTRALIZED IMAGE REGISTRY
 *
 * Organized image strategy:
 * /images/branding/
 * /images/noor-e-ramzan-1/
 * /images/noor-e-ramzan-2/
 * /images/events/
 * /images/gallery/
 */

export const brandImages = {
  // Main Sama Events Logo and Branding
  logo: '/images/branding/sama-events-logo.jpeg',
  favicon: '/favicon.svg',

  // Brand Heroes & Visual Backdrops
  homeHeroBg: '/images/branding/Stall-pic.png', // Grand festive celebratory gathering
  aboutHeroBg: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=85',
  contactHeroBg: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1920&q=85',
  galleryHeroBg: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=85',

  // What Sama Events Creates (6 Authentic Visual Categories)
  categories: {
    foodFestivals: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
    shoppingEvents: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=80',
    exhibitions: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80',
    culturalEvents: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
    businessEvents: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
    communityLifestyle: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
  },
};

export const noorERamzan2Images = {
  // Flagship 2027 Event: Noor-E-Ramzan 2.0 (Festive, lantern-lit, vibrant celebratory atmosphere)
  // FIXED: No longer using the logo as the event hero!
  hero: '/images/noor-e-ramzan-2/Nooreramzan-banner.PNG',
  card: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
  venue: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
  stallLayout: '/images/stall-layout-ymca-plan.jpg',
  stallExhibitionSample: '/images/branding/Stall-pic.png',
  stallFoodSample: '/images/noor-e-ramzan-1/food-hero.jpeg',
};

export const noorERamzan1Images = {
  // Noor-E-Ramzan 1.0 (2026 Completed Edition Visual Story)
  hero: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=85',
  crowdAtmosphere: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
  foodCourt: '/images/noor-e-ramzan-1/food-hero.jpeg',
  shoppingStalls: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80',
  stageAndVibes: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80',
  eveningLights: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
  visitorsEnjoying: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
};

export const futureEventImages = {
  chennaiFoodFiesta: '/images/noor-e-ramzan-1/food-hero.jpeg',
  festiveSouk: '/images/noor-e-ramzan-1/Upcoming-events-life-style.png',
  globalLifestyleExpo: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
};

export interface SpecialAppearanceItem {
  id: string;
  image: string;
  name: string;
  role: string;
  organization?: string;
  event: string;
  alt: string;
  isFeatured?: boolean;
}

export const specialAppearances: SpecialAppearanceItem[] = [
  {
    id: 'appearance-sarathkumar',
    image: '/images/appearances/guest-abdulnabeel.jpg',
    name: 'K Abdul Nabeel',
    role: 'Managing Director',
    organization: 'Arabian Garden Restaurant Ltd',
    event: 'NOOR-E-RAMZAN 1.0 • 2026',
    alt: 'K Abdul Nabeel at Noor-E-Ramzan 1.0',
    isFeatured: true,
  },
  {
    id: 'appearance-bharath',
    image: '/images/appearances/guest-bharath.jpg',
    name: 'Bharath',
    role: 'Special Appearance',
    event: 'NOOR-E-RAMZAN 1.0 • 2026',
    alt: 'Bharath at Noor-E-Ramzan 1.0',
  },
  {
    id: 'appearance-kingkong',
    image: '/images/appearances/guest-kingkong.jpg',
    name: 'King Kong',
    role: 'Special Appearance',
    event: 'NOOR-E-RAMZAN 1.0 • 2026',
    alt: 'King Kong at Noor-E-Ramzan 1.0',
  },
  {
    id: 'appearance-launch-ceremony',
    image: '/images/appearances/guest-launch-ceremony.jpg',
    name: 'Special Appearance',
    role: 'Guest Moment',
    event: 'NOOR-E-RAMZAN 1.0 • 2026',
    alt: 'Noor-E-Ramzan brochure launch ceremony with dignitaries',
  },
  {
    id: 'appearance-dignitary',
    image: '/images/appearances/guest-dignitary.jpg',
    name: 'Special Appearance',
    role: 'Guest Moment',
    event: 'NOOR-E-RAMZAN 1.0 • 2026',
    alt: 'Distinguished guest moment at Noor-E-Ramzan 1.0',
  },
];

export default {
  brand: brandImages,
  noor2: noorERamzan2Images,
  noor1: noorERamzan1Images,
  future: futureEventImages,
  appearances: specialAppearances,
};
