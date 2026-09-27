export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  supportingPhrase: string;
  description: string;
  contact: {
    phoneDisplay: string;
    phoneDial: string;
    whatsappNumber: string; // international format without + or spaces for wa.me link
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
  };
  eventCompanyHighlights: {
    id: string;
    title: string;
    shortLabel: string;
    description: string;
    image: string;
  }[];
}

export const siteData: SiteConfig = {
  name: 'Sama Events',
  shortName: 'Sama',
  tagline: 'Creating experiences worth remembering.',
  supportingPhrase: 'Curating premier festivals, lifestyle exhibitions & community gatherings in Chennai.',
  description:
    'Sama Events is an event management and brand promotion enterprise based in Chennai, dedicated to curating food festivals, lifestyle shopping exhibitions, cultural celebrations, and community experiences that bring people together.',
  contact: {
    phoneDisplay: '+91 98843 66030', // CORRECTED: Exactly as instructed (+91 98843 66030)
    phoneDial: '+919884366030',
    whatsappNumber: '919884366030',
    email: 'info@samaevents.in',
    address: 'No. 149/70, Dr. Besant Road, Royapettah',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600014',
    country: 'India',
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/noor.e.ramzan?stkn=Mnc4OWx0NGtwbXFv',
    facebook: 'https://www.instagram.com/noor.e.ramzan?stkn=Mnc4OWx0NGtwbXFv',
  },
  eventCompanyHighlights: [
    {
      id: 'food-festivals',
      title: 'Food Festivals',
      shortLabel: 'FOOD FESTIVALS',
      description: 'Curating large-scale culinary gatherings, specialty street foods, live kitchens, and family dining courts.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'shopping-lifestyle',
      title: 'Shopping & Lifestyle',
      shortLabel: 'SHOPPING & LIFESTYLE',
      description: 'Bringing boutique fashion, artisanal apparel, festive collections, and independent designers under one roof.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'exhibitions',
      title: 'Exhibitions',
      shortLabel: 'EXHIBITIONS',
      description: 'High-visibility commercial retail and brand pavilions structured for maximum footfall and visitor engagement.',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'cultural-festive',
      title: 'Cultural & Festive Events',
      shortLabel: 'CULTURAL EVENTS',
      description: 'Celebratory community festivals honoring heritage, festive illumination, and festive traditions.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'business-networking',
      title: 'Business & Networking',
      shortLabel: 'BUSINESS EVENTS',
      description: 'Curated enterprise gatherings, trade pavilions, brand showcases, and partner forums.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'community-gatherings',
      title: 'Community Events',
      shortLabel: 'COMMUNITY EVENTS',
      description: 'Welcoming family environments featuring children’s amusement, food walks, and community entertainment.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
    },
  ],
};
