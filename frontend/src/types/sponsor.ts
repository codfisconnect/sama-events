export interface SponsorItem {
  id: string;
  name: string;
  logo: string;
  category: 'Title Sponsor' | 'Powered By' | 'Associate Partner' | 'Food Partner' | 'Media Partner';
  websiteUrl?: string;
}
