import React from 'react';
import { openWhatsApp } from '../../utils/whatsapp';
import Button from '../Button/Button';
import { Store, Utensils, Coffee, CheckCircle2, MessageCircle } from 'lucide-react';
import './StallBooking.css';

export interface StallBookingProps {
  eventName?: string;
  theme?: 'light' | 'dark';
}

export const StallBooking: React.FC<StallBookingProps> = ({
  eventName = 'Noor-E-Ramzan 2.0',
  theme = 'light',
}) => {
  const handleWhatsAppBooking = (stallCategory: string) => {
    openWhatsApp({
      type: 'stall',
      eventName,
      customMessage: `Hello Sama Events, I am interested in booking a ${stallCategory} for ${eventName}. Please share the available stall options and pricing.`,
    });
  };

  return (
    <div className={`stall-booking stall-booking--${theme}`} id="stall-booking">
      <div className="stall-booking__grid">
        {/* Card 1: Exhibition Stalls */}
        <div className="stall-booking__card">
          <div className="stall-booking__header">
            <div className="stall-booking__icon-box">
              <Store size={24} />
            </div>
            <div>
              <span className="stall-booking__numbers">Stalls S1 – S62</span>
              <h3 className="stall-booking__title font-serif">Exhibition Stalls</h3>
            </div>
          </div>

          <div className="stall-booking__dimension-box">
            <span className="stall-booking__dim-label">DIMENSIONS</span>
            <strong className="stall-booking__dimension">8 × 6 ft</strong>
          </div>

          <p className="stall-booking__description">
            Retail booths with prominent aisle frontage. Ideal for designer fashion, abayas, kurtis, jewellery, fragrances, and lifestyle collections.
          </p>

          <ul className="stall-booking__features">
            <li>
              <CheckCircle2 size={15} className="stall-booking__check" />
              <span>Octanorm partition setup & fascia name board</span>
            </li>
            <li>
              <CheckCircle2 size={15} className="stall-booking__check" />
              <span>Standard electrical point & spotlight lighting</span>
            </li>
            <li>
              <CheckCircle2 size={15} className="stall-booking__check" />
              <span>High-footfall central shopping walkway</span>
            </li>
          </ul>

          <div className="stall-booking__action">
            <Button
              variant="whatsapp"
              size="md"
              fullWidth
              icon={<MessageCircle size={18} />}
              onClick={() => handleWhatsAppBooking('Exhibition Stall (8x6 ft)')}
            >
              ENQUIRE ABOUT STALLS
            </Button>
          </div>
        </div>

        {/* Card 2: Food Stalls (Large) */}
        <div className="stall-booking__card">
          <div className="stall-booking__header">
            <div className="stall-booking__icon-box">
              <Utensils size={24} />
            </div>
            <div>
              <span className="stall-booking__numbers">Stalls F1–F9 & F15–F22</span>
              <h3 className="stall-booking__title font-serif">Food Stalls (Large)</h3>
            </div>
          </div>

          <div className="stall-booking__dimension-box">
            <span className="stall-booking__dim-label">DIMENSIONS</span>
            <strong className="stall-booking__dimension">6 × 8 ft</strong>
          </div>

          <p className="stall-booking__description">
            High-capacity kitchen stalls positioned around the food promenade. Ideal for live cooking counters, signature biryanis, and specialties.
          </p>

          <ul className="stall-booking__features">
            <li>
              <CheckCircle2 size={15} className="stall-booking__check" />
              <span>Immediate access to covered family dining arena</span>
            </li>
            <li>
              <CheckCircle2 size={15} className="stall-booking__check" />
              <span>Heavy-duty power connection & waste disposal point</span>
            </li>
            <li>
              <CheckCircle2 size={15} className="stall-booking__check" />
              <span>Dedicated kitchen preparation setup</span>
            </li>
          </ul>

          <div className="stall-booking__action">
            <Button
              variant="whatsapp"
              size="md"
              fullWidth
              icon={<MessageCircle size={18} />}
              onClick={() => handleWhatsAppBooking('Food Stall (6x8 ft)')}
            >
              ENQUIRE ABOUT STALLS
            </Button>
          </div>
        </div>

        {/* Card 3: Food Stalls (Compact) */}
        <div className="stall-booking__card">
          <div className="stall-booking__header">
            <div className="stall-booking__icon-box">
              <Coffee size={24} />
            </div>
            <div>
              <span className="stall-booking__numbers">Stalls F11 – F16</span>
              <h3 className="stall-booking__title font-serif">Food Stalls (Compact)</h3>
            </div>
          </div>

          <div className="stall-booking__dimension-box">
            <span className="stall-booking__dim-label">DIMENSIONS</span>
            <strong className="stall-booking__dimension">6 × 4 ft</strong>
          </div>

          <p className="stall-booking__description">
            Compact kiosk counters optimized for quick-service culinary treats, festive desserts, ice creams, juices, and quick bites.
          </p>

          <ul className="stall-booking__features">
            <li>
              <CheckCircle2 size={15} className="stall-booking__check" />
              <span>Dedicated quick-service beverage & dessert counter</span>
            </li>
            <li>
              <CheckCircle2 size={15} className="stall-booking__check" />
              <span>Standard electrical plug point & lighting</span>
            </li>
            <li>
              <CheckCircle2 size={15} className="stall-booking__check" />
              <span>Prime visibility along central dining corridor</span>
            </li>
          </ul>

          <div className="stall-booking__action">
            <Button
              variant="whatsapp"
              size="md"
              fullWidth
              icon={<MessageCircle size={18} />}
              onClick={() => handleWhatsAppBooking('Food Stall (6x4 ft)')}
            >
              ENQUIRE ABOUT STALLS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StallBooking;
