import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { specialAppearances, SpecialAppearanceItem } from '../../data/images';
import './SpecialAppearances.css';

interface SpecialAppearancesProps {
  items?: SpecialAppearanceItem[];
  title?: string;
  subtitle?: string;
}

export const SpecialAppearances: React.FC<SpecialAppearancesProps> = ({
  items = specialAppearances,
  title = 'SPECIAL APPEARANCES',
  subtitle = 'Moments made memorable by special guests.',
}) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showPrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! === 0 ? items.length - 1 : prev! - 1));
  }, [activeLightboxIndex, items.length]);

  const showNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! === items.length - 1 ? 0 : prev! + 1));
  }, [activeLightboxIndex, items.length]);

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

  if (!items || items.length === 0) return null;

  const featured = items[0];
  const supporting = items.slice(1);
  const currentLightboxItem = activeLightboxIndex !== null ? items[activeLightboxIndex] : null;

  return (
    <section className="special-appearances" aria-label="Special Appearances">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="special-appearances__header">
          <span className="special-appearances__eyebrow">DISTINGUISHED GUESTS</span>
          <h2 className="special-appearances__title font-serif">{title}</h2>
          {subtitle && <p className="special-appearances__sub">{subtitle}</p>}
        </div>

        {/* Editorial Composition Grid */}
        <div
          className={`special-appearances__grid special-appearances__grid--count-${Math.min(
            items.length,
            4
          )}`}
        >
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
              <div className="special-appearances__overlay" />
              <div className="special-appearances__zoom-icon" aria-hidden="true">
                <Maximize2 size={16} />
              </div>
            </div>

            <div className="special-appearances__caption">
              {featured.name ? (
                <h3 className="special-appearances__name font-serif">{featured.name}</h3>
              ) : (
                <span className="special-appearances__label">SPECIAL APPEARANCE</span>
              )}
              <div className="special-appearances__meta">
                <span className="special-appearances__role">{featured.role}</span>

                {featured.organization && (
                  <>
                    <span className="special-appearances__dot">•</span>
                    <span className="special-appearances__organization">
                      {featured.organization}
                    </span>
                  </>
                )}

                <span className="special-appearances__dot">•</span>

                <span className="special-appearances__event">
                  {featured.event}
                </span>
              </div>
            </div>
          </div>

          {/* Supporting Editorial Tiles (Right) */}
          <div className="special-appearances__supporting">
            {supporting.slice(0, 3).map((item, idx) => {
              const actualIndex = idx + 1;
              return (
                <div
                  key={item.id}
                  className={`special-appearances__item special-appearances__item--tile-${idx + 1}`}
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
                    <div className="special-appearances__overlay" />
                    <div className="special-appearances__zoom-icon" aria-hidden="true">
                      <Maximize2 size={14} />
                    </div>
                  </div>

                  <div className="special-appearances__caption">
                    {item.name ? (
                      <h4 className="special-appearances__name font-serif">{item.name}</h4>
                    ) : (
                      <span className="special-appearances__label">SPECIAL APPEARANCE</span>
                    )}
                    <div className="special-appearances__meta">
                      <span className="special-appearances__role">{item.role}</span>
                      <span className="special-appearances__dot">•</span>
                      <span className="special-appearances__event">{item.event}</span>
                    </div>
                  </div>
                </div>
              );
            })}
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
            {items.length > 1 && (
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

              {items.length > 1 && (
                <div className="special-appearances__lightbox-counter">
                  {activeLightboxIndex! + 1} / {items.length}
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
