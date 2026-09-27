export type GalleryCategory =
  | 'Noor-E-Ramzan'
  | 'Events'
  | 'Food'
  | 'Festivals'
  | 'Noor-E-Ramzan 1.0'
  | 'Noor-E-Ramzan 2.0'
  | 'Future Events';

export interface GalleryImageItem {
  id: string;
  url: string;
  title: string;
  category: GalleryCategory;
  aspectRatio?: 'tall' | 'wide' | 'square';
  caption?: string;
  eventId?: string;
}
