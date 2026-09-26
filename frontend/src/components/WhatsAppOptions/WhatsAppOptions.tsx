import React from 'react';
import { openWhatsApp, WhatsAppEnquiryType } from '../../utils/whatsapp';
import { Calendar, Store, MessageSquare, X } from 'lucide-react';
import './WhatsAppOptions.css';

export interface WhatsAppOptionsProps {
  isOpen: boolean;
  onClose: () => void;
  eventName?: string;
}

export const WhatsAppOptions: React.FC<WhatsAppOptionsProps> = ({
  isOpen,
  onClose,
  eventName = 'Noor-E-Ramzan 2.0',
}) => {
  if (!isOpen) return null;

  const handleSelectOption = (type: WhatsAppEnquiryType) => {
    openWhatsApp({ type, eventName });
    onClose();
  };

  return (
    <div className="whatsapp-options-card">
      <div className="whatsapp-options-card__header">
        <div className="whatsapp-options-card__brand">
          <div className="whatsapp-options-card__status-dot"></div>
          <div>
            <h4 className="whatsapp-options-card__title">Chat with Sama Events</h4>
            <span className="whatsapp-options-card__sub">Typically replies in minutes</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="whatsapp-options-card__close"
          aria-label="Close WhatsApp options"
        >
          <X size={18} />
        </button>
      </div>

      <div className="whatsapp-options-card__intro">
        Choose your enquiry topic to start a direct WhatsApp chat:
      </div>

      <div className="whatsapp-options-card__list">
        <button
          className="whatsapp-options-card__item"
          onClick={() => handleSelectOption('event')}
        >
          <div className="whatsapp-options-card__icon-box">
            <Calendar size={18} />
          </div>
          <div className="whatsapp-options-card__text">
            <strong>Event Enquiry</strong>
            <span>Schedule, timings & general event details</span>
          </div>
        </button>

        <button
          className="whatsapp-options-card__item whatsapp-options-card__item--featured"
          onClick={() => handleSelectOption('stall')}
        >
          <div className="whatsapp-options-card__icon-box">
            <Store size={18} />
          </div>
          <div className="whatsapp-options-card__text">
            <strong>Book a Stall</strong>
            <span>Exhibition & food stall pricing & availability</span>
          </div>
        </button>

        <button
          className="whatsapp-options-card__item"
          onClick={() => handleSelectOption('general')}
        >
          <div className="whatsapp-options-card__icon-box">
            <MessageSquare size={18} />
          </div>
          <div className="whatsapp-options-card__text">
            <strong>General Enquiry</strong>
            <span>Sponsorships, partnerships & media</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppOptions;
