export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
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
    youtube?: string;
    linkedin?: string;
  };
  eventCompanyHighlights: {
    title: string;
    description: string;
    image: string;
  }[];
}

export const siteData: SiteConfig = {
  name: 'Sama Events',
  shortName: 'Sama',
  tagline: 'Where Every Event Becomes an Experience',
  description:
    'Sama Events is a premier event management and promotion company dedicated to curating vibrant food festivals, lifestyle shopping exhibitions, cultural celebrations, and community experiences that bring people together.',
  contact: {
    phoneDisplay: '+91 9198843 66030',
    phoneDial: '+919884366030',
    whatsappNumber: '919884366030',
    email: 'info@samaevents.in',
    address: 'Chennai, Tamil Nadu, India',
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
      title: 'Food Festivals',
      description: 'Curating culinary destinations celebrating diverse cuisines, specialty street foods, live stalls, and dining spaces.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Shopping & Lifestyle Expos',
      description: 'Bringing boutique fashion, artisanal crafts, festive collections, and consumer brands under one grand roof.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Exhibitions & Trade Showcases',
      description: 'High-visibility retail and business pavilions tailored for brands, artisans, entrepreneurs, and established labels.',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Cultural & Festive Celebrations',
      description: 'Immersive festival atmospheres celebrating traditions with decorative illumination, heritage, and joy.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Business & Networking Events',
      description: 'Structured conferences, launch ceremonies, enterprise gatherings, and partner showcases.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Community & Family Gatherings',
      description: 'Safe, welcoming, family-first atmospheres complete with dedicated kids play zones and live community stages.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    },
  ],
};
