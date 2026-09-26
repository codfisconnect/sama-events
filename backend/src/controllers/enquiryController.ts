import { Request, Response, NextFunction } from 'express';
import { EnquiryService } from '../services/enquiryService';
import { CreateEnquiryInput, EnquiryType } from '../types/enquiryTypes';

const validEnquiryTypes: EnquiryType[] = [
  'Event Enquiry',
  'Stall Booking',
  'Sponsorship',
  'Partnership',
  'General Enquiry',
];

export class EnquiryController {
  public static async create(req: Request, res: Response, NextFunction: NextFunction): Promise<void> {
    try {
      const { name, phone, email, event, enquiryType, message } = req.body;

      // Validation
      if (!name || typeof name !== 'string' || name.trim() === '') {
        res.status(400).json({ success: false, error: 'Name is required' });
        return;
      }

      if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
        res.status(400).json({ success: false, error: 'A valid phone number is required' });
        return;
      }

      if (email && typeof email === 'string') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
          res.status(400).json({ success: false, error: 'Please enter a valid email address' });
          return;
        }
      }

      if (!enquiryType || !validEnquiryTypes.includes(enquiryType as EnquiryType)) {
        res.status(400).json({
          success: false,
          error: `Enquiry type must be one of: ${validEnquiryTypes.join(', ')}`,
        });
        return;
      }

      if (!message || typeof message !== 'string' || message.trim() === '') {
        res.status(400).json({ success: false, error: 'Message or enquiry details are required' });
        return;
      }

      const input: CreateEnquiryInput = {
        name: name.trim(),
        phone: phone.trim(),
        email: email ? email.trim() : undefined,
        event: event ? String(event).trim() : 'Noor-E-Ramzan 2.0',
        enquiryType: enquiryType as EnquiryType,
        message: message.trim(),
      };

      const enquiry = await EnquiryService.createEnquiry(input);

      res.status(201).json({
        success: true,
        message: 'Your enquiry has been received successfully. Our team will contact you soon.',
        data: enquiry,
      });
    } catch (error) {
      NextFunction(error);
    }
  }

  public static async list(req: Request, res: Response, NextFunction: NextFunction): Promise<void> {
    try {
      const enquiries = await EnquiryService.getAllEnquiries();
      res.status(200).json({
        success: true,
        data: enquiries,
      });
    } catch (error) {
      NextFunction(error);
    }
  }
}
