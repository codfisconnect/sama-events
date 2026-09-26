import React from 'react';
import { Link } from 'react-router-dom';
import { brandImages } from '../../data/images';
import Button from '../Button/Button';
import { Sparkles, Calendar, ArrowRight, Compass } from 'lucide-react';
import './Hero.css';

export interface HeroProps {
  title?: string;
  tagline?: string;
  subtitle?: string;
  bgImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title = 'SAMA EVENTS',
  tagline = 'Where Every Event Becomes an Experience',
  subtitle = 'Curating Chennai’s most vibrant food festivals, lifestyle shopping exhibitions, and community celebrations that bring people together.',
  bgImage = brandImages.homeHeroBg,
}) => {
  return (
    <section className="sama-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Luxury Gradient Overlays */}
      <div className="sama-hero__overlay-gradient" />
      <div className="sama-hero__overlay-radial" />

      <div className="container sama-hero__container">
        <div className="sama-hero__content">
          {/* Brand Crest Pill */}
          <div className="sama-hero__badge">
            <Sparkles size={16} className="sama-hero__badge-icon" />
            <span>PREMIER EVENT MANAGEMENT & PROMOTIONS</span>
          </div>

          {/* Main Title */}
          <h1 className="sama-hero__title font-serif">
            {title}
            <span className="sama-hero__tagline-text">{tagline}</span>
          </h1>

          {/* Subtitle */}
          <p className="sama-hero__subtitle">{subtitle}</p>

          {/* CTAs */}
          <div className="sama-hero__actions">
            <Link to="/events/noor-e-ramzan-2">
              <Button
                variant="primary"
                size="lg"
                icon={<Calendar size={20} />}
                iconPosition="left"
              >
                Featured Event (2.0)
              </Button>
            </Link>

            <Link to="/events">
              <Button
                variant="outline"
                size="lg"
                icon={<Compass size={20} />}
                iconPosition="left"
                className="sama-hero__btn-secondary"
              >
                Explore Events
              </Button>
            </Link>
          </div>

          {/* Quick Pill Categories */}
          <div className="sama-hero__tags">
            <span className="sama-hero__tag">Food Festivals</span>
            <span className="sama-hero__tag-dot">•</span>
            <span className="sama-hero__tag">Shopping Expos</span>
            <span className="sama-hero__tag-dot">•</span>
            <span className="sama-hero__tag">Cultural Celebrations</span>
            <span className="sama-hero__tag-dot">•</span>
            <span className="sama-hero__tag">Family Gatherings</span>
          </div>
        </div>
      </div>

      {/* Hero Bottom Strip */}
      <div className="sama-hero__strip">
        <div className="container sama-hero__strip-inner">
          <div className="sama-hero__strip-item">
            <strong>Upcoming Flagship</strong>
            <span>NOOR-E-RAMZAN 2.0 • 25 Feb – 08 Mar 2027</span>
          </div>
          <Link to="/events/noor-e-ramzan-2" className="sama-hero__strip-link">
            <span>View Brochure & Stalls</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
