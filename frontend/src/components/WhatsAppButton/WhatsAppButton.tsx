import React, { useState, useRef, useEffect } from 'react';
import WhatsAppOptions from '../WhatsAppOptions/WhatsAppOptions';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export interface WhatsAppButtonProps {
  eventName?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  eventName = 'Noor-E-Ramzan 2.0',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="whatsapp-floating-container" ref={containerRef}>
      <WhatsAppOptions
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        eventName={eventName}
      />

      <button
        className={`whatsapp-floating-btn ${isOpen ? 'whatsapp-floating-btn--active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="WhatsApp quick enquiry options"
        title="Chat on WhatsApp"
      >
        <span className="whatsapp-floating-btn__ping"></span>
        <MessageCircle size={28} className="whatsapp-floating-btn__icon" />
        <span className="whatsapp-floating-btn__label">WhatsApp</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
