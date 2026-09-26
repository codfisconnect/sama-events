import React, { useState } from 'react';
import { openWhatsApp } from '../../utils/whatsapp';
import Button from '../Button/Button';
import { Maximize2, X, MapPin, Eye, Store, Utensils, MessageCircle, HelpCircle } from 'lucide-react';
import './StallLayout.css';

export interface StallLayoutProps {
  layoutImage?: string;
  eventName?: string;
  theme?: 'light' | 'dark';
}

export const StallLayout: React.FC<StallLayoutProps> = ({
  layoutImage = '/images/stall-layout-ymca-plan.jpg',
  eventName = 'Noor-E-Ramzan 2.0',
  theme = 'light',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={`stall-layout stall-layout--${theme}`}>
      <div className="stall-layout__container">
        {/* Visual Map Diagram / Preview Card */}
        <div className="stall-layout__preview-card">
          <div
            className="stall-layout__image-wrapper"
            onClick={() => setIsModalOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge YMCA venue and stall floor plan"
          >
            {/* Architectural diagram graphic if image is loading or custom */}
            <div className="stall-layout__blueprint">
              <div className="stall-layout__blueprint-header">
                <span className="stall-layout__blueprint-title">
                  YMCA ROYAPETTAH - VENUE & STALL MASTER LAYOUT
                </span>
                <span className="stall-layout__blueprint-scale">CHENNAI • 12 DAYS FESTIVAL</span>
              </div>

              {/* Schematic Map Representation */}
              <div className="stall-layout__schematic">
                <div className="stall-layout__zone stall-layout__zone--parking">
                  <span>P • Visitor Parking Zone</span>
                </div>
                <div className="stall-layout__zone stall-layout__zone--entry">
                  <span>Entry & Security Gate</span>
                </div>
                <div className="stall-layout__zone stall-layout__zone--exhibition">
                  <div className="stall-layout__zone-icon"><Store size={18} /></div>
                  <strong>Exhibition Pavilions</strong>
                  <span>Stalls S1 – S62 (8 x 6 ft)</span>
                </div>
                <div className="stall-layout__zone stall-layout__zone--dining">
                  <strong>Central Covered Dining Arena</strong>
                  <span>Seating Capacity for Families</span>
                </div>
                <div className="stall-layout__zone stall-layout__zone--food">
                  <div className="stall-layout__zone-icon"><Utensils size={18} /></div>
                  <strong>Food Court Stalls</strong>
                  <span>Stalls F1 – F22 (6x8 ft & 6x4 ft)</span>
                </div>
                <div className="stall-layout__zone stall-layout__zone--kids">
                  <span>🎡 Kids Play & Activity Zone</span>
                </div>
                <div className="stall-layout__zone stall-layout__zone--exit">
                  <span>Exit & Egress Gate</span>
                </div>
              </div>

              <div className="stall-layout__zoom-prompt">
                <Maximize2 size={20} />
                <span>Click to View Full Layout Plan</span>
              </div>
            </div>
          </div>

          {/* Plan Info Details */}
          <div className="stall-layout__legend">
            <h4 className="stall-layout__legend-title">Venue Highlights from Floor Plan</h4>
            <div className="stall-layout__legend-grid">
              <div className="stall-layout__legend-item">
                <span className="stall-layout__legend-dot stall-layout__legend-dot--gold"></span>
                <div>
                  <strong>Exhibition Stalls (S1–S62)</strong>
                  <p>8 x 6 ft retail pavilions with prominent aisle fronts</p>
                </div>
              </div>
              <div className="stall-layout__legend-item">
                <span className="stall-layout__legend-dot stall-layout__legend-dot--green"></span>
                <div>
                  <strong>Food Court (F1–F22)</strong>
                  <p>6 x 8 ft & 6 x 4 ft food preparation and service counters</p>
                </div>
              </div>
              <div className="stall-layout__legend-item">
                <span className="stall-layout__legend-dot stall-layout__legend-dot--blue"></span>
                <div>
                  <strong>Central Dining & Amenities</strong>
                  <p>Covered dining court, restrooms & emergency stations</p>
                </div>
              </div>
              <div className="stall-layout__legend-item">
                <span className="stall-layout__legend-dot stall-layout__legend-dot--purple"></span>
                <div>
                  <strong>Kids Zone & Vehicle Parking</strong>
                  <p>Dedicated amusement zone and on-site parking</p>
                </div>
              </div>
            </div>

            <div className="stall-layout__actions">
              <Button
                variant="outline"
                size="md"
                icon={<Eye size={18} />}
                onClick={() => setIsModalOpen(true)}
              >
                View Full Stall Layout
              </Button>
              <Button
                variant="whatsapp"
                size="md"
                icon={<MessageCircle size={18} />}
                onClick={() =>
                  openWhatsApp({
                    type: 'stall',
                    eventName,
                    customMessage: `Hello Sama Events, I would like to check stall availability on the YMCA Royapettah layout plan for ${eventName}.`,
                  })
                }
              >
                Check Stall Availability
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div
          className="stall-layout__modal"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="stall-layout__modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="stall-layout__modal-header">
              <div>
                <h3>YMCA Royapettah Floor & Stall Layout</h3>
                <span>Noor-E-Ramzan 2.0 • 25.02.2027 – 08.03.2027</span>
              </div>
              <button
                className="stall-layout__modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close layout modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="stall-layout__modal-body">
              <div className="stall-layout__modal-schematic">
                <div className="stall-layout__zone stall-layout__zone--parking">
                  <span>P • Dedicated Parking Grounds</span>
                </div>
                <div className="stall-layout__zone stall-layout__zone--entry">
                  <span>Main Entrance & Welcome Gate</span>
                </div>
                <div className="stall-layout__zone stall-layout__zone--exhibition">
                  <Store size={24} />
                  <strong>Stalls S1 to S62 — Exhibition Pavilions</strong>
                  <span>8 x 6 Feet Octanorm Stalls</span>
                </div>
                <div className="stall-layout__zone stall-layout__zone--dining">
                  <strong>Central Covered Family Dining Hall</strong>
                  <span>Spacious Seating Area</span>
                </div>
                <div className="stall-layout__zone stall-layout__zone--food">
                  <Utensils size={24} />
                  <strong>Stalls F1 to F22 — Food Court Counters</strong>
                  <span>6 x 8 Feet & 6 x 4 Feet Kitchen Stalls</span>
                </div>
                <div className="stall-layout__zone stall-layout__zone--kids">
                  <span>🎪 Children Play Zone & Entertainment</span>
                </div>
                <div className="stall-layout__zone stall-layout__zone--exit">
                  <span>Main Exit Gate</span>
                </div>
              </div>

              <div className="stall-layout__modal-footer-note">
                <HelpCircle size={18} />
                <span>
                  For exact stall numbering reservations and corner position allotments, speak with the Sama Events desk on WhatsApp.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StallLayout;
