import React from 'react';
import { SponsorItem } from '../../types/sponsor';
import './SponsorGrid.css';

export interface SponsorGridProps {
  sponsors: SponsorItem[];
  title?: string;
  theme?: 'light' | 'dark';
}

export const SponsorGrid: React.FC<SponsorGridProps> = ({
  sponsors,
  theme = 'light',
}) => {
  return (
    <div className={`sponsor-grid sponsor-grid--${theme}`}>
      <div className="sponsor-grid__logos">
        {sponsors.map((item) => (
          <div key={item.id} className="sponsor-grid__item">
            <span className="sponsor-grid__category">{item.category}</span>
            <div className="sponsor-grid__logo-frame">
              <span className="sponsor-grid__name">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="sponsor-grid__cta">
        <p>Interested in partnering or sponsoring upcoming Sama Events festivals?</p>
        <a href="/contact" className="sponsor-grid__link">
          Explore Brand Sponsorships →
        </a>
      </div>
    </div>
  );
};

export default SponsorGrid;
