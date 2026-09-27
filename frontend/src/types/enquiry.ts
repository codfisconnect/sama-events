export type EnquiryType =
  | 'General Enquiry'
  | 'Event Enquiry'
  | 'Stall Enquiry'
  | 'Partnership'
  | 'Stall Booking';

export interface EnquiryFormData {
  name: string;
  phone: string;
  email?: string;
  event?: string;
  enquiryType: EnquiryType;
  message: string;
}

export interface EnquirySubmissionResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    name: string;
    phone: string;
    email?: string | null;
    event?: string;
    enquiryType: string;
    message: string;
    createdAt: string;
  };
  error?: string;
}
