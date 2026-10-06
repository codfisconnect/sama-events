import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Button from '../../components/Button/Button';
import SpecialAppearances from '../../components/SpecialAppearances/SpecialAppearances';
import Creators from '../../components/Creators/Creators';
import Sponsors from '../../components/Sponsors/Sponsors';
import { getFeaturedEvent, getUpcomingEvents } from '../../data/events';
import { noorERamzan1Images } from '../../data/images';
import { ArrowRight, Calendar, MapPin, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import './Home.css';

const celebrationHighlights = [
  {
    id: 'highlight-pakoda-boyz',
    name: 'Pakoda Boyz',
    image: '/images/influencers/pakoda-boyz.jpg',
  },
  {
    id: 'highlight-jaffer-nation',
    name: 'Jaffer Nation',
    image: '/images/influencers/jaffer-nation.jpg',
  },
  {
    id: 'highlight-f5zeevlogs',
    name: 'f5zeeVlogs',
    image: '/images/influencers/f5zeevlogs.jpg',
  },
  {
    id: 'highlight-officialtahir',
    name: 'OfficialTahir',
    image: '/images/influencers/official-tahir.jpg',
  },
];

export const Home: React.FC = () => {
  const featuredEvent = getFeaturedEvent();
  // Genuine upcoming events (excluding Noor-E-Ramzan 2.0 which is the flagship featured event)
  const upcomingEvents = getUpcomingEvents().filter((e) => !e.isFeatured);
  const [activeUpcomingIndex, setActiveUpcomingIndex] = React.useState(0);
  const upcomingGridRef = React.useRef<HTMLDivElement>(null);

  const handleUpcomingScroll = () => {
    if (!upcomingGridRef.current) return;
    const el = upcomingGridRef.current;
    const firstCard = el.children[0] as HTMLElement | undefined;
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth || 310;
    const index = Math.round(el.scrollLeft / (cardWidth + 14));
    setActiveUpcomingIndex(Math.min(Math.max(index, 0), upcomingEvents.length - 1));
  };

  const handleDotClick = (index: number) => {
    if (!upcomingGridRef.current) return;
    const el = upcomingGridRef.current;
    const cards = el.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
      setActiveUpcomingIndex(index);
    }
  };

  return (
    <div className="home-page">
      {/* 1. HERO — Minimal, Editorial & Impactful */}
      <Hero
        title="SAMA EVENTS"
        tagline="Creating experiences worth remembering."
      />

      {/* 2. CURRENT FLAGSHIP — NOOR-E-RAMZAN 2.0 (Editorial Clickable Feature) */}
      <section className="section-dark home-flagship">
        <div className="container">
          <Link
            to={`/events/${featuredEvent.slug}`}
            className="home-flagship__card"
            aria-label={`Explore ${featuredEvent.title}`}
          >
            <div className="home-flagship__badge-tag">
              FLAGSHIP 2027
            </div>

            <div className="home-flagship__grid">
              {/* Visual Campaign Image - Unobstructed */}
              <div className="home-flagship__media">
                <div className="home-flagship__img-frame">
                  <img
                    src={featuredEvent.heroImage}
                    alt={featuredEvent.title}
                    className="home-flagship__img"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Campaign Narrative */}
              <div className="home-flagship__content">
                <h2 className="home-flagship__title font-serif">
                  {featuredEvent.title}
                </h2>

                <div className="home-flagship__theme">
                  {featuredEvent.theme}
                </div>

                <div className="home-flagship__meta-list">
                  <div className="home-flagship__meta-item">
                    <Calendar size={18} className="home-flagship__meta-icon" />
                    <div>
                      <span className="home-flagship__meta-label">Dates</span>
                      <strong className="home-flagship__meta-val">{featuredEvent.formattedDate}</strong>
                    </div>
                  </div>

                  <div className="home-flagship__meta-item">
                    <MapPin size={18} className="home-flagship__meta-icon" />
                    <div>
                      <span className="home-flagship__meta-label">Venue</span>
                      <strong className="home-flagship__meta-val">{featuredEvent.venue}, {featuredEvent.city}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. UPCOMING EVENTS — Responsive Horizontal Carousel */}
      <section className="section-light home-upcoming">
        <div className="container">
          <div className="home-section-header">
            <span className="eyebrow-label">EXPANDING EXPERIENCES</span>
            <h2 className="home-section-title font-serif">Upcoming Events</h2>
          </div>

          <div
            className="home-upcoming__grid"
            ref={upcomingGridRef}
            onScroll={handleUpcomingScroll}
          >
            {upcomingEvents.map((evt) => (
              <Link
                key={evt.id}
                to={`/events/${evt.slug}`}
                className="home-upcoming__card"
                aria-label={`Explore ${evt.title}`}
              >
                <div className="home-upcoming__img-wrap">
                  <img
                    src={evt.heroImage || evt.cardImage}
                    alt={evt.title}
                    className="home-upcoming__img"
                    loading="lazy"
                  />
                  <div className="home-upcoming__img-overlay" />
                  <span className="home-upcoming__category-pill">{evt.category}</span>
                </div>
                <div className="home-upcoming__body">
                  <div className="home-upcoming__date-tag">{evt.formattedDate}</div>
                  <h3 className="home-upcoming__card-title font-serif">{evt.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Minimal Pagination Dots on Mobile */}
          <div
            className="home-upcoming__dots"
            role="tablist"
            aria-label="Upcoming events pagination"
          >
            {upcomingEvents.map((evt, idx) => (
              <button
                key={evt.id}
                type="button"
                role="tab"
                aria-selected={activeUpcomingIndex === idx}
                aria-label={`Go to ${evt.title}`}
                className={`home-upcoming__dot ${activeUpcomingIndex === idx ? 'home-upcoming__dot--active' : ''}`}
                onClick={() => handleDotClick(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. FROM 1.0 TO 2.0 — Authentic Visual Storytelling */}
      <section className="section-festive home-story">
        <div className="container">
          <Link
            to="/events/noor-e-ramzan-1"
            className="home-story__link"
            aria-label="Explore Noor-E-Ramzan 1.0 moments"
          >
            <div className="home-story__grid">
              <div className="home-story__narrative">
                <span className="eyebrow-label home-story__eyebrow">THE JOURNEY</span>
                <h2 className="home-story__title font-serif">From 1.0 to 2.0</h2>

                <div className="home-story__metadata">
                  <span className="home-story__edition">NOOR-E-RAMZAN 1.0</span>
                  <span className="home-story__status">2026 • SUCCESSFULLY COMPLETED</span>
                </div>

                <p className="home-story__statement font-serif">
                  "A successful first edition. Now returning as 2.0."
                </p>
              </div>

              {/* Visual Collage */}
              <div className="home-story__visual-box">
                <div className="home-story__lead-img-wrap">
                  <img
                    src={noorERamzan1Images.hero}
                    alt="Noor-E-Ramzan 1.0 Celebration"
                    className="home-story__lead-img"
                    loading="lazy"
                  />
                </div>
                <div className="home-story__sub-imgs">
                  <div className="home-story__sub-img-frame">
                    <img
                      src={noorERamzan1Images.foodCourt}
                      alt="Food court moments"
                      loading="lazy"
                    />
                  </div>
                  <div className="home-story__sub-img-frame">
                    <img
                      src={noorERamzan1Images.crowdAtmosphere}
                      alt="Community gathering"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. SPECIAL APPEARANCES — Authentic Celebrity & Distinguished Guest Moments */}
      <SpecialAppearances />

      {/* 6. CREATORS & INFLUENCERS — Responsive Row & Mobile Carousel */}
      <Creators />

      {/* 7. SPONSORS & PARTNERS — Responsive Warm Cream Logo Wall */}
      <Sponsors />

      {/* 8. MOMENTS / GALLERY — Captured Festival Atmosphere */}
      <section className="section-dark home-moments" aria-label="Festival Gallery Moments">
        <div className="container">
          <div className="home-moments__header-row">
            <div>
              <span className="eyebrow-label">CAPTURED MOMENTS</span>
              <h2 className="home-section-title font-serif">Influencers</h2>
            </div>
            <Link
              to="/gallery"
              className="special-appearances__view-all"
              aria-label="Explore full photo gallery"
            >
              <span>VIEW FULL GALLERY</span>
              <ArrowRight size={15} className="special-appearances__view-all-arrow" aria-hidden="true" />
            </Link>
          </div>

          <div className="home-moments__collage">
            {celebrationHighlights.map((item) => (
              <Link to="/gallery" key={item.id} className="home-moments__item" aria-label={`View ${item.name}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
                <div className="home-moments__caption-overlay">
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA — Clean, Confident & Minimal */}
      <section className="section-dark home-final-cta">
        <div className="container">
          <div className="home-final-cta__box">
            <span className="eyebrow-label">COLLABORATE WITH US</span>
            <h2 className="home-final-cta__heading font-serif">
              Planning an event?
            </h2>
            <p className="home-final-cta__sub">
              Let's create something memorable.
            </p>
            <div className="home-final-cta__actions">
              <Link to="/contact">
                <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  TALK TO SAMA EVENTS
                </Button>
              </Link>
              <Button
                variant="whatsapp"
                size="lg"
                icon={<MessageCircle size={18} />}
                onClick={() => openWhatsApp({ type: 'general' })}
              >
                WHATSAPP US
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
