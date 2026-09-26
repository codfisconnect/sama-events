import { GuestItem } from '../types/guest';
import { guestImages } from './images';

/**
 * GUEST DATA ARCHITECTURE
 * Note: Dignitary and guest announcements will be officially updated once confirmed.
 * Replace items below with verified names and photos.
 */
export const guestsData: GuestItem[] = [
  {
    id: 'guest-1',
    name: 'Honourable Dignitary (To Be Announced)',
    role: 'Distinguished Public Figure',
    designation: 'Inaugural Keynote & Patron',
    category: 'Chief Guest',
    photo: guestImages.placeholderGuest1,
    bio: 'Invited patron inaugurating the grand opening ceremony.',
    eventId: 'noor-e-ramzan-2',
  },
  {
    id: 'guest-2',
    name: 'Renowned Culinary Icon (To Be Announced)',
    role: 'Master Chef & Food Curator',
    designation: 'Festival Food Ambassador',
    category: 'Special Guest',
    photo: guestImages.placeholderGuest2,
    bio: 'Special guest presiding over the festive culinary showcase.',
    eventId: 'noor-e-ramzan-2',
  },
  {
    id: 'guest-3',
    name: 'Prominent Community Leader (To Be Announced)',
    role: 'Industry & Social Leader',
    designation: 'Honorary Advisor',
    category: 'Guest of Honour',
    photo: guestImages.placeholderGuest3,
    bio: 'Recognized for philanthropic and community development leadership.',
    eventId: 'noor-e-ramzan-2',
  },
];
