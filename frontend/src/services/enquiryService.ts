import api from './api';
import { EnquiryFormData, EnquirySubmissionResponse } from '../types/enquiry';

export class EnquiryService {
  /**
   * Submit enquiry to the backend PostgreSQL/Prisma endpoint
   */
  public static async submitEnquiry(data: EnquiryFormData): Promise<EnquirySubmissionResponse> {
    try {
      const payload = {
        ...data,
        enquiryType: data.enquiryType === 'Stall Enquiry' ? 'Stall Booking' : data.enquiryType,
      };
      const response = await api.post<EnquirySubmissionResponse>('/enquiries', payload);
      return response;
    } catch (error: any) {
      console.warn('API submission notice:', error.message);
      // If server is not running or network fails, provide a helpful message
      throw new Error(
        error.message || 'Unable to connect to the enquiry service. Please check your network or try again.'
      );
    }
  }

  /**
   * Check backend health
   */
  public static async checkHealth(): Promise<boolean> {
    try {
      await api.get('/health');
      return true;
    } catch {
      return false;
    }
  }
}
