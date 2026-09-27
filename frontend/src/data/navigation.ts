export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export const navigationLinks: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const footerLinks = {
  events: [
    { label: 'Noor-E-Ramzan 2.0', path: '/events/noor-e-ramzan-2' },
    { label: 'Noor-E-Ramzan 1.0 (2026)', path: '/events/noor-e-ramzan-1' },
    { label: 'Upcoming Events', path: '/events' },
    { label: 'Stall Enquiries', path: '/events/noor-e-ramzan-2#stalls' },
  ],
  company: [
    { label: 'About Sama Events', path: '/about' },
    { label: 'Gallery Moments', path: '/gallery' },
    { label: 'Contact & Talk to Us', path: '/contact' },
  ],
};
