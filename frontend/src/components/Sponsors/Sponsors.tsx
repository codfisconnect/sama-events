import React from 'react';
import { Link } from 'react-router-dom';
import { SponsorItem } from '../../types/sponsor';
import { sponsorsData } from '../../data/sponsors';
import { ArrowRight } from 'lucide-react';
import './Sponsors.css';

export interface SponsorsProps {
  sponsors?: SponsorItem[];
  title?: string;
  eyebrow?: string;
}

export const Sponsors: React.FC<SponsorsProps> = ({
  sponsors = sponsorsData,
  title = 'SPONSORS & PARTNERS',
  eyebrow = 'COLLABORATION & SUPPORT',
}) => {
  // If no genuine sponsors/partners are supplied yet, safely hide the section per Part 11 Data Integrity
  if (!sponsors || sponsors.length === 0) {
    return null;
  }

  return (
    <section className="sponsors-section" aria-label="Sponsors and Brand Partners">
      <div className="container">
        {/* Section Header */}
        <div className="sponsors__header">
          <span className="sponsors__eyebrow">{eyebrow}</span>
          <h2 className="sponsors__title font-serif">{title}</h2>
        </div>

        {/* Responsive Logo Wall */}
        <div className="sponsors__wall" role="list">
          {sponsors.map((item) => (
            <div key={item.id} className="sponsors__item" role="listitem">
              <div className="sponsors__logo-frame">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="sponsors__logo-img"
                    loading="lazy"
                  />
                ) : (
                  <span className="sponsors__name">{item.name}</span>
                )}
              </div>
              {item.category && (
                <span className="sponsors__category">{item.category}</span>
              )}
            </div>
          ))}
        </div>

        {/* Subtle Partnership Enquiry CTA */}
        <div className="sponsors__cta">
          <Link to="/contact" className="sponsors__cta-link">
            <span>Explore Brand Partnership & Sponsorship Opportunities</span>
            <ArrowRight size={14} className="sponsors__cta-arrow" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
