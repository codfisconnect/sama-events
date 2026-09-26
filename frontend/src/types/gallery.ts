export interface GalleryImageItem {
  id: string;
  url: string;
  title: string;
  category: 'Noor-E-Ramzan 1.0' | 'Noor-E-Ramzan 2.0' | 'Future Events' | 'Crowd & Vibes' | 'Food & Stalls';
  aspectRatio?: 'tall' | 'wide' | 'square';
  caption?: string;
  eventId?: string;
}
