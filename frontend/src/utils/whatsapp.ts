import { siteData } from '../data/siteData';

export type WhatsAppEnquiryType = 'event' | 'stall' | 'general' | 'custom';

export interface WhatsAppOptions {
  type?: WhatsAppEnquiryType;
  customMessage?: string;
  eventName?: string;
  phoneNumber?: string;
}

export const WHATSAPP_MESSAGES = {
  event: (eventName = 'Noor-E-Ramzan 2.0') =>
    `Hello Sama Events, I would like to know more about ${eventName}.`,
  stall: (eventName = 'Noor-E-Ramzan 2.0') =>
    `Hello Sama Events, I am interested in booking a stall for ${eventName}. Please share the available stall options and pricing.`,
  general: () =>
    `Hello Sama Events, I would like to make a general enquiry.`,
};

/**
 * Generate a valid wa.me URL with clean encoded parameters
 */
export const getWhatsAppUrl = (options: WhatsAppOptions = {}): string => {
  const phone = options.phoneNumber || siteData.contact.whatsappNumber;
  let text = '';

  if (options.customMessage) {
    text = options.customMessage;
  } else {
    switch (options.type) {
      case 'event':
        text = WHATSAPP_MESSAGES.event(options.eventName);
        break;
      case 'stall':
        text = WHATSAPP_MESSAGES.stall(options.eventName);
        break;
      case 'general':
      default:
        text = WHATSAPP_MESSAGES.general();
        break;
    }
  }

  const encodedText = encodeURIComponent(text.trim());
  return `https://wa.me/${phone}?text=${encodedText}`;
};

/**
 * Open WhatsApp in a new browser tab/app
 */
export const openWhatsApp = (options: WhatsAppOptions = {}): void => {
  const url = getWhatsAppUrl(options);
  window.open(url, '_blank', 'noopener,noreferrer');
};
