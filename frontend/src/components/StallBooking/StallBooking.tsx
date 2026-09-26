import React from 'react';
import { openWhatsApp } from '../../utils/whatsapp';
import Button from '../Button/Button';
import { Store, Utensils, Coffee, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import './StallBooking.css';

export interface StallBookingProps {
  eventName?: string;
  theme?: 'light' | 'dark';
}

export const StallBooking: React.FC<StallBookingProps> = ({
  eventName = 'Noor-E-Ramzan 2.0',
  theme = 'light',
}) => {
  const handleWhatsAppBooking = (stallCategory?: string) => {
    const customMessage = stallCategory
      ? `Hello Sama Events, I am interested in booking a ${stallCategory} for ${eventName}. Please share the available stall options and pricing.`
      : undefined;

    openWhatsApp({
      type: 'stall',
      eventName,
      customMessage,
    });
  };

  return (
    <section className={`stall-booking stall-booking--${theme}`} id="stall-booking">
      <div className="stall-booking__grid">
        {/* Card 1: Exhibition Stalls */}
        <div className="stall-booking__card stall-booking__card--featured">
          <div className="stall-booking__card-badge">High Demand Pavilion</div>
          <div className="stall-booking__header">
            <div className="stall-booking__icon-box">
              <Store size={26} />
            </div>
            <div>
              <span className="stall-booking__numbers">Stalls S1 – S62</span>
              <h3 className="stall-booking__title">Exhibition Stalls</h3>
            </div>
          </div>

          <div className="stall-booking__dimension-box">
            <span className="stall-booking__dim-label">Dimensions</span>
            <strong className="stall-booking__dimension">8 x 6 Feet</strong>
          </div>

          <p className="stall-booking__description">
            Prime retail stalls with maximum visitor corridor visibility. Tailored for boutique fashion, abayas, kurtis, jewellery, fragrances, festive gifts, and home accessories.
          </p>

          <ul className="stall-booking__features">
            <li>
              <CheckCircle2 size={16} className="stall-booking__check" />
              <span>Octanorm partition setup & fascia name board</span>
            </li>
            <li>
              <CheckCircle2 size={16} className="stall-booking__check" />
              <span>Basic power connection & spotlights</span>
            </li>
            <li>
              <CheckCircle2 size={16} className="stall-booking__check" />
              <span>High footfall central walkway placement</span>
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
              Book Exhibition Stall
            </Button>
          </div>
        </div>

        {/* Card 2: Food Stalls (Large) */}
        <div className="stall-booking__card">
          <div className="stall-booking__header">
            <div className="stall-booking__icon-box">
              <Utensils size={26} />
            </div>
            <div>
              <span className="stall-booking__numbers">Stalls F1–F9 & F15–F22</span>
              <h3 className="stall-booking__title">Food Stalls (Large)</h3>
            </div>
          </div>

          <div className="stall-booking__dimension-box">
            <span className="stall-booking__dim-label">Dimensions</span>
            <strong className="stall-booking__dimension">6 x 8 Feet</strong>
          </div>

          <p className="stall-booking__description">
            High-capacity kitchen stalls positioned around the buzzing central food court. Ideal for live cooking counters, signature biryanis, kebabs, and hot delicacies.
          </p>

          <ul className="stall-booking__features">
            <li>
              <CheckCircle2 size={16} className="stall-booking__check" />
              <span>Adjacent to covered family dining area</span>
            </li>
            <li>
              <CheckCircle2 size={16} className="stall-booking__check" />
              <span>Heavy-duty power connection & waste disposal point</span>
            </li>
            <li>
              <CheckCircle2 size={16} className="stall-booking__check" />
              <span>Immediate access to ingredient supply corridors</span>
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
              Book 6x8 ft Food Stall
            </Button>
          </div>
        </div>

        {/* Card 3: Food Stalls (Compact) */}
        <div className="stall-booking__card">
          <div className="stall-booking__header">
            <div className="stall-booking__icon-box">
              <Coffee size={26} />
            </div>
            <div>
              <span className="stall-booking__numbers">Stalls F11 – F16</span>
              <h3 className="stall-booking__title">Food Stalls (Compact)</h3>
            </div>
          </div>

          <div className="stall-booking__dimension-box">
            <span className="stall-booking__dim-label">Dimensions</span>
            <strong className="stall-booking__dimension">6 x 4 Feet</strong>
          </div>

          <p className="stall-booking__description">
            Efficient kiosk stalls optimized for quick-service culinary treats, festive desserts, artisanal ice creams, fruit juices, mocktails, and bakery goods.
          </p>

          <ul className="stall-booking__features">
            <li>
              <CheckCircle2 size={16} className="stall-booking__check" />
              <span>Dedicated quick-turnaround beverage & dessert aisle</span>
            </li>
            <li>
              <CheckCircle2 size={16} className="stall-booking__check" />
              <span>Standard electrical plug point & lighting</span>
            </li>
            <li>
              <CheckCircle2 size={16} className="stall-booking__check" />
              <span>Cost-effective entry point for emerging food brands</span>
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
              Book 6x4 ft Food Stall
            </Button>
          </div>
        </div>
      </div>

      {/* Booking Notice Note */}
      <div className="stall-booking__notice">
        <p>
          <strong>Allocation Policy:</strong> Stall numbers are confirmed on a first-come, first-served basis upon advance receipt. Stalls in corner positions and near main entryways have premium visibility.
        </p>
      </div>
    </section>
  );
};

export default StallBooking;
