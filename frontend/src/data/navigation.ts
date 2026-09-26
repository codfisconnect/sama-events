export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export const navigationLinks: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'Featured (2.0)', path: '/events/noor-e-ramzan-2' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const footerLinks = {
  events: [
    { label: 'Noor-E-Ramzan 2.0 (Featured)', path: '/events/noor-e-ramzan-2' },
    { label: 'Noor-E-Ramzan 1.0 (2026)', path: '/events#past' },
    { label: 'All Upcoming Events', path: '/events' },
    { label: 'Book a Stall', path: '/events/noor-e-ramzan-2#stall-booking' },
  ],
  company: [
    { label: 'About Sama Events', path: '/about' },
    { label: 'Event Photo Gallery', path: '/gallery' },
    { label: 'Stall & Sponsor Enquiries', path: '/contact' },
    { label: 'Contact Us', path: '/contact' },
  ],
};
