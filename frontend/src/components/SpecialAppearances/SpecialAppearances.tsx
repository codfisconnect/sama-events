import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowRight } from 'lucide-react';
import { specialAppearances, SpecialAppearanceItem } from '../../data/images';
import './SpecialAppearances.css';

interface SpecialAppearancesProps {
  items?: SpecialAppearanceItem[];
  title?: string;
}

export const SpecialAppearances: React.FC<SpecialAppearancesProps> = ({
  items = specialAppearances,
  title = 'SPECIAL APPEARANCES',
}) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  // Exactly 5 curated homepage guests: prioritize isFeatured entries, then genuine available entries
  const curatedGuests = useMemo(() => {
    if (!items || items.length === 0) return [];
    const featured = items.filter((item) => item.isFeatured);
    const nonFeatured = items.filter((item) => !item.isFeatured);
    return [...featured, ...nonFeatured].slice(0, 5);
  }, [items]);

  const handleMobileScroll = useCallback(() => {
    if (!mobileTrackRef.current) return;
    const container = mobileTrackRef.current;
    const scrollLeft = container.scrollLeft;
    const firstCard = container.querySelector('.special-appearances__mobile-card') as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth : 310;
    const gap = 12;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    const clamped = Math.max(0, Math.min(curatedGuests.length - 1, index));
    setActiveDotIndex(clamped);
  }, [curatedGuests.length]);

  const scrollToMobileSlide = (index: number) => {
    if (!mobileTrackRef.current) return;
    const container = mobileTrackRef.current;
    const cards = container.querySelectorAll('.special-appearances__mobile-card');
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
      setActiveDotIndex(index);
    }
  };

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showPrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! === 0 ? curatedGuests.length - 1 : prev! - 1));
  }, [activeLightboxIndex, curatedGuests.length]);

  const showNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! === curatedGuests.length - 1 ? 0 : prev! + 1));
  }, [activeLightboxIndex, curatedGuests.length]);

  // Handle keyboard events (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeLightboxIndex, showPrev, showNext]);

  if (!curatedGuests || curatedGuests.length === 0) return null;

  const featured = curatedGuests[0];
  const supporting = curatedGuests.slice(1, 5);
  const currentLightboxItem = activeLightboxIndex !== null ? curatedGuests[activeLightboxIndex] : null;

  return (
    <section id="special-appearances" className="special-appearances" aria-label="Special Appearances">
      {/* =====================================================================
          1. DESKTOP VIEWPORT (> 768px) — UNCHANGED ACCEPTED DESIGN
          ===================================================================== */}
      <div className="special-appearances__desktop">
        <div className="container">
          {/* Editorial Section Header */}
          <div className="special-appearances__header">
            <span className="special-appearances__eyebrow">DISTINGUISHED GUESTS</span>
            <h2 className="special-appearances__title font-serif">{title}</h2>
          </div>

          {/* Editorial Composition Grid */}
          <div className="special-appearances__grid">
            {/* Featured Large Photograph (Left) */}
            <div
              className="special-appearances__item special-appearances__item--featured"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(0)}
              aria-label={`View ${featured.name || 'special appearance'} photograph`}
            >
              <div className="special-appearances__img-wrap">
                <img
                  src={featured.image}
                  alt={featured.alt || 'Special guest appearance'}
                  className="special-appearances__img"
                  loading="lazy"
                />
                <div className="special-appearances__overlay special-appearances__overlay--featured" />
                <div className="special-appearances__zoom-icon" aria-hidden="true">
                  <Maximize2 size={16} />
                </div>
              </div>

              <div className="special-appearances__caption special-appearances__caption--featured">
                <h3 className="special-appearances__name special-appearances__name--featured font-serif">
                  {featured.name}
                </h3>
                {featured.role && (
                  <div className="special-appearances__role special-appearances__role--featured">
                    {featured.role}
                  </div>
                )}
                {featured.organization && (
                  <div className="special-appearances__org">
                    {featured.organization}
                  </div>
                )}
                {featured.event && (
                  <div className="special-appearances__event special-appearances__event--featured">
                    {featured.event}
                  </div>
                )}
              </div>
            </div>

            {/* Supporting Editorial Tiles (Right, 2x2 grid) */}
            <div className="special-appearances__supporting">
              {supporting.map((item, idx) => {
                const actualIndex = idx + 1;
                return (
                  <div
                    key={item.id}
                    className={`special-appearances__item special-appearances__item--supporting special-appearances__item--tile-${idx + 1}`}
                    onClick={() => openLightbox(actualIndex)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(actualIndex)}
                    aria-label={`View ${item.name || 'special appearance'} photograph`}
                  >
                    <div className="special-appearances__img-wrap">
                      <img
                        src={item.image}
                        alt={item.alt || 'Special guest appearance'}
                        className="special-appearances__img"
                        loading="lazy"
                      />
                      <div className="special-appearances__overlay special-appearances__overlay--supporting" />
                      <div className="special-appearances__zoom-icon" aria-hidden="true">
                        <Maximize2 size={13} />
                      </div>
                    </div>

                    <div className="special-appearances__caption special-appearances__caption--supporting">
                      <h4 className="special-appearances__name special-appearances__name--supporting font-serif">
                        {item.name || 'Special Appearance'}
                      </h4>
                      <div className="special-appearances__meta-supporting">
                        <span className="special-appearances__role-supporting">
                          {item.role || 'Special Appearance'}
                        </span>
                        {item.event && (
                          <>
                            <span className="special-appearances__dot">•</span>
                            <span className="special-appearances__event-supporting">
                              {item.event}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop View All CTA */}
          <div className="special-appearances__action">
            <Link
              to="/special-appearances"
              className="special-appearances__view-all"
              aria-label="View all special guests"
            >
              <span>VIEW ALL SPECIAL GUESTS</span>
              <ArrowRight size={16} className="special-appearances__view-all-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. MOBILE VIEWPORT (<= 768px) — REBUILT DEDICATED CAROUSEL
          ===================================================================== */}
      <div className="special-appearances__mobile">
        <div className="special-appearances__mobile-inner">
          {/* Mobile Header: Compact, No Paragraphs */}
          <div className="special-appearances__mobile-header">
            <span className="special-appearances__mobile-eyebrow">DISTINGUISHED GUESTS</span>
            <h2 className="special-appearances__mobile-title font-serif">{title}</h2>
          </div>

          {/* Dedicated Horizontal Touch Carousel Track */}
          <div
            className="special-appearances__mobile-track"
            ref={mobileTrackRef}
            onScroll={handleMobileScroll}
            role="region"
            aria-label="Special guests carousel"
          >
            {curatedGuests.map((item, idx) => (
              <div
                key={item.id}
                className={`special-appearances__mobile-card special-appearances__mobile-card--${item.id}`}
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(idx)}
                aria-label={`View ${item.name || 'special guest'} photograph`}
              >
                <div className="special-appearances__mobile-card-inner">
                  <img
                    src={item.image}
                    alt={item.alt || item.name || 'Special guest appearance'}
                    className={`special-appearances__mobile-img special-appearances__mobile-img--${item.id}`}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  {/* Localized Bottom Gradient Overlay */}
                  <div className="special-appearances__mobile-gradient" />
                  <div className="special-appearances__mobile-zoom" aria-hidden="true">
                    <Maximize2 size={13} />
                  </div>

                  {/* Text Sitting Inside the Photograph at Bottom */}
                  <div className="special-appearances__mobile-info">
                    <h3 className="special-appearances__mobile-name font-serif">
                      {item.name || 'Special Guest'}
                    </h3>
                    {item.role && (
                      <div className="special-appearances__mobile-role">
                        {item.role}
                      </div>
                    )}
                    {item.organization && (
                      <div className="special-appearances__mobile-org">
                        {item.organization}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots (5 curated guests) */}
          <div
            className="special-appearances__mobile-dots"
            role="tablist"
            aria-label="Guest carousel pagination"
          >
            {curatedGuests.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeDotIndex === idx}
                aria-label={`Go to slide ${idx + 1}: ${item.name || 'Special Guest'}`}
                className={`special-appearances__mobile-dot ${
                  activeDotIndex === idx ? 'special-appearances__mobile-dot--active' : ''
                }`}
                onClick={() => scrollToMobileSlide(idx)}
              />
            ))}
          </div>

          {/* Mobile VIEW ALL SPECIAL GUESTS CTA */}
          <div className="special-appearances__mobile-cta-wrap">
            <Link
              to="/special-appearances"
              className="special-appearances__view-all special-appearances__view-all--mobile"
              aria-label="View all special guests"
            >
              <span>VIEW ALL SPECIAL GUESTS</span>
              <ArrowRight size={15} className="special-appearances__view-all-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div
          className="special-appearances__lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Guest photograph view"
        >
          <div
            className="special-appearances__lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="special-appearances__lightbox-close"
              onClick={closeLightbox}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {/* Navigation Controls */}
            {curatedGuests.length > 1 && (
              <>
                <button
                  className="special-appearances__lightbox-nav special-appearances__lightbox-nav--prev"
                  onClick={showPrev}
                  aria-label="Previous photograph"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  className="special-appearances__lightbox-nav special-appearances__lightbox-nav--next"
                  onClick={showNext}
                  aria-label="Next photograph"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            {/* Lightbox Main Image */}
            <div className="special-appearances__lightbox-media">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.alt}
                className="special-appearances__lightbox-img"
              />
            </div>

            {/* Lightbox Caption & Context */}
            <div className="special-appearances__lightbox-footer">
              <div className="special-appearances__lightbox-info">
                {currentLightboxItem.name && (
                  <h3 className="special-appearances__lightbox-title font-serif">
                    {currentLightboxItem.name}
                  </h3>
                )}
                <div className="special-appearances__lightbox-meta">
                  <span className="special-appearances__lightbox-role">
                    {currentLightboxItem.role}
                  </span>
                  <span className="special-appearances__dot">•</span>
                  <span className="special-appearances__lightbox-event">
                    {currentLightboxItem.event}
                  </span>
                </div>
              </div>

              {curatedGuests.length > 1 && (
                <div className="special-appearances__lightbox-counter">
                  {activeLightboxIndex! + 1} / {curatedGuests.length}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SpecialAppearances;
