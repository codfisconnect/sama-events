export interface GuestItem {
  id: string;
  name: string;
  role: string;
  designation: string;
  category: 'Chief Guest' | 'Special Guest' | 'Guest of Honour' | 'Dignitary';
  photo: string;
  bio?: string;
  eventId?: string;
}
