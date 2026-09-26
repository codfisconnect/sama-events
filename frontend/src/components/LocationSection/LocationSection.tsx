import React from 'react';
import Button from '../Button/Button';
import { MapPin, Navigation, Car, Train, Clock, ExternalLink } from 'lucide-react';
import './LocationSection.css';

export interface LocationSectionProps {
  venueName?: string;
  address?: string;
  city?: string;
  pincode?: string;
  landmark?: string;
  mapEmbedUrl?: string;
  directionsUrl?: string;
  theme?: 'light' | 'dark';
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  venueName = 'YMCA Royapettah',
  address = 'No. 149/70, Dr. Besant Road, Royapettah',
  city = 'Chennai',
  pincode = '600014',
  landmark = 'Opposite YMCA Grounds / Central Royapettah',
  directionsUrl = 'https://maps.google.com/?q=YMCA+Royapettah+Chennai',
  theme = 'light',
}) => {
  return (
    <section className={`location-section location-section--${theme}`}>
      <div className="location-section__grid">
        {/* Left Information Card */}
        <div className="location-section__info-card">
          <div className="location-section__badge">
            <MapPin size={16} />
            <span>PRIME CHENNAI VENUE</span>
          </div>

          <h3 className="location-section__venue-title font-serif">{venueName}</h3>
          <p className="location-section__full-address">
            {address}, {city} - {pincode}
          </p>

          <div className="location-section__meta-list">
            <div className="location-section__meta-item">
              <Navigation size={18} className="location-section__meta-icon" />
              <div>
                <strong>Landmark Location</strong>
                <span>{landmark}</span>
              </div>
            </div>

            <div className="location-section__meta-item">
              <Car size={18} className="location-section__meta-icon" />
              <div>
                <strong>Visitor Parking</strong>
                <span>On-site spacious parking ground inside YMCA</span>
              </div>
            </div>

            <div className="location-section__meta-item">
              <Train size={18} className="location-section__meta-icon" />
              <div>
                <strong>Connectivity</strong>
                <span>Easily reachable via Thousand Lights Metro & Royapettah bus routes</span>
              </div>
            </div>

            <div className="location-section__meta-item">
              <Clock size={18} className="location-section__meta-icon" />
              <div>
                <strong>Festival Hours</strong>
                <span>Daily from late afternoon until midnight during festival dates</span>
              </div>
            </div>
          </div>

          <div className="location-section__actions">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location-section__btn-link"
            >
              <Button
                variant="primary"
                size="md"
                icon={<ExternalLink size={18} />}
                iconPosition="right"
              >
                Get Directions on Google Maps
              </Button>
            </a>
          </div>
        </div>

        {/* Right Map Embed / Interactive View */}
        <div className="location-section__map-wrapper">
          <iframe
            title={`Map of ${venueName}`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.812224726229!2d80.26359557577583!3d13.047596013210452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52662fd914619d%3A0xeae06c6463d1a3be!2sYMCA%20Grounds%2C%20Royapettah%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            className="location-section__iframe"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="location-section__map-overlay-badge">
            <MapPin size={14} />
            <span>{venueName}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
