import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Button from '../../components/Button/Button';
import SpecialAppearances from '../../components/SpecialAppearances/SpecialAppearances';
import { getFeaturedEvent, getUpcomingEvents } from '../../data/events';
import { noorERamzan1Images } from '../../data/images';
import { ArrowRight, Calendar, MapPin, Store, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import './Home.css';

export const Home: React.FC = () => {
  const featuredEvent = getFeaturedEvent();
  // Genuine upcoming events (excluding Noor-E-Ramzan 2.0 which is the flagship featured event)
  const upcomingEvents = getUpcomingEvents().filter((e) => !e.isFeatured);

  return (
    <div className="home-page">
      {/* 1. HERO — Minimal, Editorial & Impactful */}
      <Hero
        title="SAMA EVENTS"
        tagline="Creating experiences worth remembering."
      />

      {/* 2. CURRENT FLAGSHIP — NOOR-E-RAMZAN 2.0 (Editorial Split Composition) */}
      <section className="section-dark home-flagship">
        <div className="container">
          <div className="home-flagship__grid">
            {/* Visual Campaign Image */}
            <div className="home-flagship__media">
              <div className="home-flagship__img-frame">
                <img
                  src={featuredEvent.heroImage}
                  alt={featuredEvent.title}
                  className="home-flagship__img"
                  loading="eager"
                />
                <div className="home-flagship__badge-tag">
                  FLAGSHIP 2027
                </div>
              </div>
            </div>

            {/* Campaign Narrative */}
            <div className="home-flagship__content">
              <span className="eyebrow-label">CURRENT FLAGSHIP EVENT</span>
              
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

              <p className="home-flagship__tagline-text">
                One destination. Endless memories.
              </p>

              <div className="home-flagship__actions">
                <Link to={`/events/${featuredEvent.slug}`}>
                  <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                    EXPLORE EVENT
                  </Button>
                </Link>

                <Link to={`/events/${featuredEvent.slug}#stalls`}>
                  <Button variant="outline" size="lg" icon={<Store size={18} />}>
                    STALL ENQUIRY
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. UPCOMING EVENTS — Clean Editorial Visual Grid */}
      <section className="section-light home-upcoming">
        <div className="container">
          <div className="home-section-header">
            <span className="eyebrow-label">EXPANDING EXPERIENCES</span>
            <h2 className="home-section-title font-serif">Upcoming Events</h2>
          </div>

          <div className="home-upcoming__grid">
            {upcomingEvents.map((evt) => (
              <div key={evt.id} className="home-upcoming__card">
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
                  <Link to={`/events/${evt.slug}`} className="home-upcoming__explore-link">
                    <span>EXPLORE</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FROM 1.0 TO 2.0 — Authentic Visual Storytelling */}
      <section className="section-festive home-story">
        <div className="container">
          <div className="home-story__grid">
            <div className="home-story__narrative">
              <span className="eyebrow-label">THE JOURNEY</span>
              <h2 className="home-story__title font-serif">From 1.0 to 2.0</h2>

              <div className="home-story__status-pill">
                <span className="home-story__year">2026</span>
                <span className="home-story__sep">•</span>
                <span className="home-story__edition">NOOR-E-RAMZAN 1.0</span>
                <span className="home-story__sep">•</span>
                <span className="home-story__tag">SUCCESSFULLY COMPLETED</span>
              </div>

              <p className="home-story__statement">
                A celebration that brought people together — now returning as Noor-E-Ramzan 2.0.
              </p>

              <div className="home-story__cta-wrap">
                <Link to="/events/noor-e-ramzan-1">
                  <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                    VIEW 1.0 MOMENTS
                  </Button>
                </Link>
              </div>
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
        </div>
      </section>

      {/* 5. SPECIAL APPEARANCES — Authentic Celebrity & Distinguished Guest Moments */}
      <SpecialAppearances />

      {/* 6. FINAL CTA — Clean, Confident & Minimal */}
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
