import React, { useState, useEffect, useCallback } from 'react';
import { specialAppearances } from '../../data/images';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './SpecialAppearances.css';

export const SpecialAppearancesPage: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Special Guests Archive | Sama Events';
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showPrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! === 0 ? specialAppearances.length - 1 : prev! - 1));
  }, [activeLightboxIndex]);

  const showNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! === specialAppearances.length - 1 ? 0 : prev! + 1));
  }, [activeLightboxIndex]);

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

  // Use the existing featured appearance data
  const featuredGuest =
    specialAppearances.find((item) => item.isFeatured) || specialAppearances[0];
  const featuredIndex = specialAppearances.findIndex((item) => item.id === featuredGuest.id);
  const remainingGuests = specialAppearances.filter((item) => item.id !== featuredGuest.id);

  const currentLightboxItem =
    activeLightboxIndex !== null ? specialAppearances[activeLightboxIndex] : null;

  return (
    <div className="special-guests-page">
      {/* 1. Page Header with breathing room below global header */}
      <section className="special-guests-hero">
        <div className="container">
          <div className="special-guests-hero__content">
            <span className="special-guests-hero__eyebrow">DISTINGUISHED GUESTS</span>
            <h1 className="special-guests-hero__title font-serif">SPECIAL APPEARANCES</h1>
            <p className="special-guests-hero__subtitle">
              Moments of honour and community celebration featuring distinguished personalities and guests.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content: Featured Guest + Archive Grid */}
      <section className="special-guests-content">
        <div className="container">
          {/* FEATURED GUEST SECTION */}
          {featuredGuest && (
            <div className="special-guests__featured-section">
              <div className="special-guests__section-label">
                <span className="special-guests__sublabel">FEATURED GUEST</span>
              </div>

              <div
                className="special-guests__featured-card"
                onClick={() => openLightbox(featuredIndex)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(featuredIndex)}
                aria-label={`View ${featuredGuest.name} photograph in fullscreen`}
              >
                <div className="special-guests__featured-media">
                  <img
                    src={featuredGuest.image}
                    alt={featuredGuest.alt || featuredGuest.name}
                    className="special-guests__featured-img"
                    loading="eager"
                  />
                  <div className="special-guests__featured-overlay" />
                  <div className="special-guests__zoom-hint" aria-hidden="true">
                    <Maximize2 size={16} />
                  </div>
                </div>

                <div className="special-guests__featured-details">
                  <h2 className="special-guests__featured-name font-serif">
                    {featuredGuest.name}
                  </h2>
                  {featuredGuest.role && (
                    <div className="special-guests__featured-role">
                      {featuredGuest.role}
                    </div>
                  )}
                  {featuredGuest.organization && (
                    <div className="special-guests__featured-org">
                      {featuredGuest.organization}
                    </div>
                  )}
                  {featuredGuest.event && (
                    <div className="special-guests__featured-event">
                      {featuredGuest.event}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* REMAINING GUESTS ARCHIVE GRID */}
          {remainingGuests.length > 0 && (
            <div className="special-guests__archive-section">
              <div className="special-guests__section-label">
                <span className="special-guests__sublabel">SPECIAL APPEARANCES ARCHIVE</span>
              </div>

              <div className="special-guests__archive-grid">
                {remainingGuests.map((item) => {
                  const itemIndex = specialAppearances.findIndex((g) => g.id === item.id);
                  return (
                    <article
                      key={item.id}
                      className={`special-guests__card special-guests__card--${item.id}`}
                      onClick={() => openLightbox(itemIndex)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(itemIndex)}
                      aria-label={`View ${item.name || 'special guest'} photograph in fullscreen`}
                    >
                      <div className="special-guests__card-media">
                        <img
                          src={item.image}
                          alt={item.alt || item.name}
                          className={`special-guests__card-img special-guests__card-img--${item.id}`}
                          loading="lazy"
                        />
                        <div className="special-guests__card-overlay" />
                        <div className="special-guests__zoom-hint" aria-hidden="true">
                          <Maximize2 size={14} />
                        </div>
                      </div>

                      <div className="special-guests__card-body">
                        <h3 className="special-guests__card-name font-serif">
                          {item.name || 'Special Appearance'}
                        </h3>
                        {item.role && (
                          <div className="special-guests__card-role">
                            {item.role}
                          </div>
                        )}
                        {item.organization && (
                          <div className="special-guests__card-org">
                            {item.organization}
                          </div>
                        )}
                        {item.event && (
                          <div className="special-guests__card-event">
                            {item.event}
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Lightbox Modal */}
      {currentLightboxItem && (
        <div
          className="special-guests__lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Guest photograph view"
        >
          <div
            className="special-guests__lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="special-guests__lightbox-close"
              onClick={closeLightbox}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {/* Navigation Controls */}
            {specialAppearances.length > 1 && (
              <>
                <button
                  className="special-guests__lightbox-nav special-guests__lightbox-nav--prev"
                  onClick={showPrev}
                  aria-label="Previous photograph"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  className="special-guests__lightbox-nav special-guests__lightbox-nav--next"
                  onClick={showNext}
                  aria-label="Next photograph"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            {/* Lightbox Main Image */}
            <div className="special-guests__lightbox-media">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.alt}
                className="special-guests__lightbox-img"
              />
            </div>

            {/* Lightbox Caption & Context */}
            <div className="special-guests__lightbox-footer">
              <div className="special-guests__lightbox-info">
                {currentLightboxItem.name && (
                  <h3 className="special-guests__lightbox-title font-serif">
                    {currentLightboxItem.name}
                  </h3>
                )}
                <div className="special-guests__lightbox-meta">
                  <span className="special-guests__lightbox-role">
                    {currentLightboxItem.role}
                  </span>
                  {currentLightboxItem.organization && (
                    <>
                      <span className="special-guests__lightbox-dot">•</span>
                      <span className="special-guests__lightbox-org">
                        {currentLightboxItem.organization}
                      </span>
                    </>
                  )}
                  <span className="special-guests__lightbox-dot">•</span>
                  <span className="special-guests__lightbox-event">
                    {currentLightboxItem.event}
                  </span>
                </div>
              </div>

              {specialAppearances.length > 1 && (
                <div className="special-guests__lightbox-counter">
                  {activeLightboxIndex! + 1} / {specialAppearances.length}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialAppearancesPage;
