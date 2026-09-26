/**
 * SAMA EVENTS - CENTRALIZED IMAGE REGISTRY
 *
 * HOW TO REPLACE IMAGES:
 * 1. Place your new image file in `frontend/public/images/` or copy your uploaded URL.
 * 2. Update the corresponding variable or property value below.
 * 3. Save this file — all components across the entire website will update automatically!
 */

export const brandImages = {
  // Main Sama Events Logo and Branding
  logo: '/images/sama-events-logo.png', // or SVG / web path
  logoDark: '/images/sama-events-logo-dark.png',
  favicon: '/images/favicon.ico',

  // Homepage Hero & Brand Banners
  homeHeroBg: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=85', // Grand festive evening event
  aboutHeroBg: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=85',
  contactHeroBg: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1920&q=85',
  galleryHeroBg: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=85',

  // Brand Experience Category Cards ("What Sama Events Creates")
  categories: {
    foodFestivals: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    shoppingEvents: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    exhibitions: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80',
    culturalEvents: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    businessEvents: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    communityLifestyle: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
  },
};

export const noorERamzan2Images = {
  // Featured Event: Noor-E-Ramzan 2.0 (2027)
  hero: '/images/branding/sama-events-logo.jpeg', // Luxury festive celebration with warm golden lanterns
  card: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80',
  venue: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
  stallLayout: '/images/stall-layout-ymca-plan.jpg', // Layout diagram path
  stallExhibitionSample: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  stallFoodSample: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
};

export const noorERamzan1Images = {
  // Noor-E-Ramzan 1.0 (2026) Previous Edition Credibility & Visual Story
  hero: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=85',
  crowdAtmosphere: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
  foodCourt: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
  shoppingStalls: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80',
  stageAndVibes: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80',
  eveningLights: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
  visitorsEnjoying: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
};

export const futureEventImages = {
  chennaiFoodFiesta: '/images/noor-e-ramzan-1/food-hero.jpeg',
  globalLifestyleExpo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
  festiveSouk: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
};

export const guestImages = {
  placeholderGuest1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  placeholderGuest2: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  placeholderGuest3: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
};

export const sponsorImages = {
  partnerLogo1: '/images/sponsors/sponsor-1.svg',
  partnerLogo2: '/images/sponsors/sponsor-2.svg',
  partnerLogo3: '/images/sponsors/sponsor-3.svg',
  partnerLogo4: '/images/sponsors/sponsor-4.svg',
};

export default {
  brand: brandImages,
  noor2: noorERamzan2Images,
  noor1: noorERamzan1Images,
  future: futureEventImages,
  guests: guestImages,
  sponsors: sponsorImages,
};
