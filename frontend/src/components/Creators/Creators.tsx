import React, { useState, useRef, useCallback } from 'react';
import { CreatorItem } from '../../types/creator';
import { creatorsData } from '../../data/creators';
import './Creators.css';

export interface CreatorsProps {
  creators?: CreatorItem[];
  title?: string;
  eyebrow?: string;
}

export const Creators: React.FC<CreatorsProps> = ({
  creators = creatorsData,
  title = 'CREATORS & INFLUENCERS',
  eyebrow = 'COMMUNITY & VOICES',
}) => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  const handleMobileScroll = useCallback(() => {
    if (!mobileTrackRef.current) return;
    const container = mobileTrackRef.current;
    const scrollLeft = container.scrollLeft;
    const firstCard = container.querySelector('.creators__card') as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth : 270;
    const gap = 12;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveDotIndex(Math.max(0, Math.min(creators.length - 1, index)));
  }, [creators.length]);

  const scrollToSlide = (index: number) => {
    if (!mobileTrackRef.current) return;
    const cards = mobileTrackRef.current.querySelectorAll('.creators__card');
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
      setActiveDotIndex(index);
    }
  };

  // If no genuine creators are provided yet, gracefully hide the section as per Part 11 Data Integrity
  if (!creators || creators.length === 0) {
    return null;
  }

  return (
    <section className="creators-section" aria-label="Creators and Influencers">
      <div className="container">
        {/* Section Header */}
        <div className="creators__header">
          <span className="creators__eyebrow">{eyebrow}</span>
          <h2 className="creators__title font-serif">{title}</h2>
        </div>

        {/* ===================================================================
            1. DESKTOP & TABLET ROW (> 768px)
            4 columns on large desktop, 3 columns on tablet landscape
            =================================================================== */}
        <div className="creators__desktop-grid">
          {creators.map((creator) => (
            <div key={creator.id} className="creators__card">
              <div className="creators__media">
                <img
                  src={creator.photo}
                  alt={creator.name}
                  className="creators__img"
                  loading="lazy"
                />
                <div className="creators__gradient" />
                <div className="creators__info">
                  <h3 className="creators__name font-serif">{creator.name}</h3>
                  <span className="creators__handle">{creator.handle}</span>
                  {creator.category && (
                    <span className="creators__tag">{creator.category}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===================================================================
            2. MOBILE HORIZONTAL SWIPE CAROUSEL (<= 768px)
            =================================================================== */}
        <div className="creators__mobile-view">
          <div
            className="creators__mobile-track"
            ref={mobileTrackRef}
            onScroll={handleMobileScroll}
            role="region"
            aria-label="Creators carousel"
          >
            {creators.map((creator) => (
              <div key={creator.id} className="creators__card creators__card--mobile">
                <div className="creators__media">
                  <img
                    src={creator.photo}
                    alt={creator.name}
                    className="creators__img"
                    loading="lazy"
                  />
                  <div className="creators__gradient" />
                  <div className="creators__info">
                    <h3 className="creators__name font-serif">{creator.name}</h3>
                    <span className="creators__handle">{creator.handle}</span>
                    {creator.category && (
                      <span className="creators__tag">{creator.category}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          {creators.length > 1 && (
            <div className="creators__dots" role="tablist" aria-label="Creators pagination">
              {creators.map((c, idx) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={activeDotIndex === idx}
                  aria-label={`Go to creator ${idx + 1}: ${c.name}`}
                  className={`creators__dot ${activeDotIndex === idx ? 'creators__dot--active' : ''}`}
                  onClick={() => scrollToSlide(idx)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Creators;
