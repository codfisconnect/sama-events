import { prisma } from '../config/database';
import { CreateEnquiryInput, EnquiryResponse } from '../types/enquiryTypes';

// In-memory fallback if PostgreSQL is not yet running locally
const inMemoryEnquiries: EnquiryResponse[] = [];

export class EnquiryService {
  public static async createEnquiry(data: CreateEnquiryInput): Promise<EnquiryResponse> {
    try {
      const enquiry = await prisma.enquiry.create({
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          event: data.event || 'Noor-E-Ramzan 2.0',
          enquiryType: data.enquiryType,
          message: data.message,
        },
      });
      return enquiry;
    } catch (error) {
      console.warn('Prisma DB write failed (database may be offline). Falling back to memory buffer:', (error as Error).message);
      const fallbackRecord: EnquiryResponse = {
        id: `mock-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        event: data.event || 'Noor-E-Ramzan 2.0',
        enquiryType: data.enquiryType,
        message: data.message,
        createdAt: new Date(),
      };
      inMemoryEnquiries.push(fallbackRecord);
      return fallbackRecord;
    }
  }

  public static async getAllEnquiries(): Promise<EnquiryResponse[]> {
    try {
      return await prisma.enquiry.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      return inMemoryEnquiries;
    }
  }
}
