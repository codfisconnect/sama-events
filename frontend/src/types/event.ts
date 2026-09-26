export type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'announced';

export interface EventHighlightItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface StallDimensionInfo {
  category: string;
  stallRange: string;
  dimensions: string;
  description: string;
  suitableFor?: string;
}

export interface StallBookingDetails {
  title: string;
  description: string;
  categories: StallDimensionInfo[];
  notes?: string[];
  layoutImageUrl?: string;
}

export interface EventData {
  id: string;
  slug: string;
  title: string;
  edition?: string;
  tagline: string;
  category: string;
  description: string;
  longDescription?: string[];
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  formattedDate: string;
  duration: string;
  venue: string;
  city: string;
  address: string;
  googleMapsUrl?: string;
  status: EventStatus;
  isFeatured: boolean;
  heroImage: string;
  cardImage: string;
  highlights: string[];
  stallInfo?: StallBookingDetails;
  whatsappMessage?: string;
  metaTitle?: string;
  metaDescription?: string;
}
