export type EnquiryType =
  | 'Event Enquiry'
  | 'Stall Booking'
  | 'Sponsorship'
  | 'Partnership'
  | 'General Enquiry';

export interface CreateEnquiryInput {
  name: string;
  phone: string;
  email?: string;
  event?: string;
  enquiryType: EnquiryType;
  message: string;
}

export interface EnquiryResponse {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  event: string;
  enquiryType: string;
  message: string;
  createdAt: Date;
}
