import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Countdown from '../../components/Countdown/Countdown';
import EventInfo from '../../components/EventInfo/EventInfo';
import EventHighlights from '../../components/EventHighlights/EventHighlights';
import EventGrid from '../../components/EventGrid/EventGrid';
import PreviousEvent from '../../components/PreviousEvent/PreviousEvent';
import EventGallery from '../../components/EventGallery/EventGallery';
import StallBooking from '../../components/StallBooking/StallBooking';
import StallLayout from '../../components/StallLayout/StallLayout';
import SponsorGrid from '../../components/SponsorGrid/SponsorGrid';
import LocationSection from '../../components/LocationSection/LocationSection';
import ContactForm from '../../components/ContactForm/ContactForm';
import Button from '../../components/Button/Button';
import { getFeaturedEvent, getUpcomingEvents } from '../../data/events';
import { siteData } from '../../data/siteData';
import { galleryData } from '../../data/gallery';
import { sponsorsData } from '../../data/sponsors';
import { openWhatsApp } from '../../utils/whatsapp';
import {
  Sparkles,
  ArrowRight,
  Store,
  MessageCircle,
  UtensilsCrossed,
  ShoppingBag,
  Award,
  Layers,
  Compass,
} from 'lucide-react';
import './Home.css';

export const Home: React.FC = () => {
  const featuredEvent = getFeaturedEvent();
  const upcomingEvents = getUpcomingEvents().filter((e) => !e.isFeatured);
  const homeGalleryImages = galleryData.slice(0, 6);

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <Hero
        title="SAMA EVENTS"
        tagline="Where Every Event Becomes an Experience"
        subtitle="Curating Chennai’s grandest food festivals, lifestyle shopping expos, cultural celebrations, and community experiences that bring people together."
      />

      {/* 2. Featured Event: NOOR-E-RAMZAN 2.0 (Festive Dark / Luxury Rhythm) */}
      <section className="section-festive home-featured">
        <div className="container">
          <div className="home-featured__grid">
            <div className="home-featured__content">
              <span className="badge-gold">FLAGSHIP 2027 CELEBRATION</span>
              <h2 className="home-featured__title font-serif">
                {featuredEvent.title}
              </h2>
              <span className="home-featured__tagline">
                {featuredEvent.tagline}
              </span>
              <p className="home-featured__description">
                {featuredEvent.description}
              </p>

              <div className="home-featured__facts">
                <div className="home-featured__fact-item">
                  <span className="home-featured__fact-label">Dates</span>
                  <strong>{featuredEvent.formattedDate}</strong>
                </div>
                <div className="home-featured__fact-item">
                  <span className="home-featured__fact-label">Venue</span>
                  <strong>{featuredEvent.venue}, {featuredEvent.city}</strong>
                </div>
                <div className="home-featured__fact-item">
                  <span className="home-featured__fact-label">Duration</span>
                  <strong>{featuredEvent.duration}</strong>
                </div>
              </div>

              <div className="home-featured__actions">
                <Link to={`/events/${featuredEvent.slug}`}>
                  <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                    Explore Noor-E-Ramzan 2.0
                  </Button>
                </Link>
                <Link to={`/events/${featuredEvent.slug}#stall-booking`}>
                  <Button variant="outline" size="lg" icon={<Store size={18} />}>
                    Book a Stall
                  </Button>
                </Link>
                <Button
                  variant="whatsapp"
                  size="lg"
                  icon={<MessageCircle size={18} />}
                  onClick={() => openWhatsApp({ type: 'stall', eventName: featuredEvent.title })}
                >
                  WhatsApp Enquiry
                </Button>
              </div>
            </div>

            {/* Right Card with Countdown & Visual */}
            <div className="home-featured__visual-box">
              <div className="home-featured__img-wrap">
                <img
                  src={featuredEvent.heroImage}
                  alt={featuredEvent.title}
                  className="home-featured__img"
                />
                <div className="home-featured__img-overlay" />
                <div className="home-featured__countdown-wrap">
                  <Countdown
                    targetDate={featuredEvent.startDate}
                    eventTitle={featuredEvent.title}
                    theme="glass"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Event Info Block */}
          <div className="home-featured__info-bar">
            <EventInfo event={featuredEvent} theme="dark" />
          </div>
        </div>
      </section>

      {/* 3. Upcoming Events (Light Rhythm) */}
      <section className="section-light">
        <div className="container">
          <SectionHeading
            badge="EXPANDING HORIZONS"
            title="Upcoming Festivals & Exhibitions"
            subtitle="Discover our growing roster of curated lifestyle expos, culinary fiestas, and community showcases in Chennai."
            align="center"
            theme="light"
          />

          <EventGrid events={upcomingEvents} columns={2} />

          <div className="home__more-events-cta">
            <Link to="/events">
              <Button variant="outline" size="md" icon={<Compass size={18} />}>
                View All Scheduled Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. What Sama Events Creates (Warm Cream Rhythm) */}
      <section className="section-cream">
        <div className="container">
          <SectionHeading
            badge="OUR EVENT PORTFOLIO"
            title="What Sama Events Creates"
            subtitle="We design, curate, and promote distinctive community-scale experiences across hospitality, retail, and culture."
            align="center"
            theme="light"
          />

          <div className="home-categories__grid">
            {siteData.eventCompanyHighlights.map((cat, idx) => (
              <div key={idx} className="home-categories__card">
                <div className="home-categories__img-box">
                  <img src={cat.image} alt={cat.title} loading="lazy" />
                  <div className="home-categories__overlay" />
                </div>
                <div className="home-categories__details">
                  <h4 className="home-categories__title font-serif">{cat.title}</h4>
                  <p className="home-categories__desc">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Noor-E-Ramzan 1.0 → 2.0 Story & Credibility (Dark Rhythm) */}
      <PreviousEvent />

      {/* 6. Featured Event Highlights (Light Rhythm) */}
      <section className="section-light">
        <div className="container">
          <SectionHeading
            badge="OFFICIAL FESTIVAL SPECIFICATIONS"
            title="Noor-E-Ramzan 2.0 Highlights"
            subtitle="Explore the carefully engineered floor amenities, visitor corridors, dining spaces, and entertainment zones."
            align="center"
            theme="light"
          />

          <EventHighlights theme="light" />
        </div>
      </section>

      {/* 7. Stall Booking & YMCA Layout (Cream Rhythm) */}
      <section className="section-cream">
        <div className="container">
          <SectionHeading
            badge="EXHIBITOR OPPORTUNITIES"
            title="Book Your Stall at Noor-E-Ramzan 2.0"
            subtitle="Choose from official 8x6 ft retail exhibition stalls and dedicated 6x8 ft / 6x4 ft gourmet food court stalls."
            align="center"
            theme="light"
          />

          <StallBooking eventName={featuredEvent.title} theme="light" />

          <div className="home__layout-spacing">
            <SectionHeading
              badge="VENUE ARCHITECTURE"
              title="YMCA Royapettah Venue & Stall Layout"
              subtitle="Floor plan layout demonstrating entrance flows, parking zones, dining court, and stall allocations."
              align="center"
              theme="light"
            />
            <StallLayout eventName={featuredEvent.title} theme="light" />
          </div>
        </div>
      </section>

      {/* 8. Event Gallery (Dark Rhythm) */}
      <section className="section-dark">
        <div className="container">
          <SectionHeading
            badge="CAPTURED MOMENTS"
            title="Glimpses of Celebrations"
            subtitle="Experience the festive atmosphere, crowds, artisanal stalls, and joyful visitors through our gallery."
            align="center"
            theme="dark"
          />

          <EventGallery images={homeGalleryImages} theme="dark" />

          <div className="home__gallery-cta">
            <Link to="/gallery">
              <Button variant="outline" size="md" icon={<ArrowRight size={16} />} iconPosition="right">
                Explore Full Festival Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Sponsors / Partners (Light Rhythm) */}
      <section className="section-light">
        <div className="container">
          <SectionHeading
            badge="COLLABORATION & SUPPORT"
            title="Partners & Associations"
            subtitle="Collaborating with visionary brands and community stakeholders to create unforgettable gatherings."
            align="center"
            theme="light"
          />

          <SponsorGrid sponsors={sponsorsData} theme="light" />
        </div>
      </section>

      {/* 10. Venue Location (Cream Rhythm) */}
      <section className="section-cream">
        <div className="container">
          <SectionHeading
            badge="HOW TO REACH"
            title="Festival Venue & Location"
            subtitle="Conveniently situated in the heart of Chennai at YMCA Grounds, Royapettah."
            align="center"
            theme="light"
          />

          <LocationSection
            venueName="YMCA Royapettah"
            address="No. 149/70, Dr. Besant Road, Royapettah"
            city="Chennai"
            pincode="600014"
            landmark="Central Royapettah / Opposite YMCA Campus"
            directionsUrl="https://maps.google.com/?q=YMCA+Royapettah+Chennai"
            theme="light"
          />
        </div>
      </section>

      {/* 11. Contact / WhatsApp CTA (Dark Rhythm) */}
      <section className="section-dark" id="contact-section">
        <div className="container">
          <div className="home-contact__grid">
            <div className="home-contact__intro">
              <span className="badge-gold">CONNECT WITH SAMA EVENTS</span>
              <h2 className="home-contact__title font-serif">
                Plan Your Participation or Stalls Today
              </h2>
              <p className="home-contact__desc">
                Have questions regarding stall booking fees, brand sponsorship packages, or event visitor schedules? Drop us an enquiry and our team will get in touch with you immediately.
              </p>

              <div className="home-contact__quick-wa">
                <h4>Prefer instant answers?</h4>
                <p>Chat directly with our organizing committee via WhatsApp:</p>
                <div className="home-contact__wa-buttons">
                  <Button
                    variant="whatsapp"
                    size="md"
                    icon={<MessageCircle size={18} />}
                    onClick={() => openWhatsApp({ type: 'stall', eventName: featuredEvent.title })}
                  >
                    Stall Booking on WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => openWhatsApp({ type: 'general' })}
                  >
                    General Enquiry
                  </Button>
                </div>
              </div>
            </div>

            <div className="home-contact__form-col">
              <ContactForm initialEvent={featuredEvent.title} theme="dark" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
