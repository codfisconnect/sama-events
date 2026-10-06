import React from 'react';
import { brandImages } from '../../data/images';
import Button from '../Button/Button';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

export interface HeroProps {
  title?: string;
  tagline?: string;
  bgImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title = 'SAMA EVENTS',
  tagline = 'Creating experiences worth remembering.',
  bgImage = brandImages.homeHeroBg,
}) => {
  return (
    <section className="sama-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Editorial Gradient & Tint Overlay */}
      <div className="sama-hero__overlay-gradient" />

      <div className="container sama-hero__container">
        <div className="sama-hero__content">
          <div className="sama-hero__eyebrow">
            <span className="sama-hero__eyebrow-line" />
            <span className="sama-hero__eyebrow-text">EXPERIENCE CURATORS</span>
          </div>

          <h1 className="sama-hero__title font-serif">{title}</h1>

          <p className="sama-hero__tagline">{tagline}</p>

          <div className="sama-hero__actions">
            <Button
              to="/events"
              variant="outline"
              size="lg"
              className="sama-hero__btn-explore"
            >
              EXPLORE EVENTS
            </Button>

            <Button
              to="/events/noor-e-ramzan-2"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              className="sama-hero__btn-flagship"
            >
              NOOR-E-RAMZAN 2.0
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
