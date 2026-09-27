import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEventBySlug, getFeaturedEvent } from '../../data/events';
import StallBooking from '../../components/StallBooking/StallBooking';
import StallLayout from '../../components/StallLayout/StallLayout';
import Button from '../../components/Button/Button';
import { openWhatsApp } from '../../utils/whatsapp';
import {
  Calendar,
  MapPin,
  Sparkles,
  Store,
  MessageCircle,
  ExternalLink,
  Utensils,
  ShoppingBag,
  Users,
  Compass,
  ArrowRight,
  Smile,
} from 'lucide-react';
import './EventDetails.css';

export const EventDetails: React.FC = () => {
  const { eventSlug } = useParams<{ eventSlug?: string }>();
  const slug = eventSlug || 'noor-e-ramzan-2';
  const event = getEventBySlug(slug) || getFeaturedEvent();

  useEffect(() => {
    document.title = `${event.title} | Sama Events`;
    window.scrollTo(0, 0);
  }, [event]);

  // What to Expect concise visual tiles
  const expectations = [
    {
      title: 'Food Court & Delicacies',
      label: 'FOOD',
      desc: 'Authentic Ramadan specialties, signature kebabs, haleem, biryani, and live dessert counters.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Boutique Shopping',
      label: 'SHOPPING',
      desc: 'Curated apparel, festive abayas, kurtis, fine jewellery, and artisanal accessories.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Exhibition Pavilions',
      label: 'EXHIBITION',
      desc: 'Spacious retail stalls featuring established brands and homegrown independent designers.',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Family Gathering Area',
      label: 'FAMILY',
      desc: 'Safe, welcoming environment complete with covered seating arenas and family dining halls.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Kids Play Zone',
      label: 'KIDS',
      desc: 'Dedicated amusement area and engaging activities for children and young families.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Festive Atmosphere',
      label: 'CELEBRATION',
      desc: 'Illuminated archways, evening ambience, and community warmth celebrating together.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    },
  ];

  // Visual experience photography
  const experienceImages = [
    {
      url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80',
      caption: 'Evening Illumination',
    },
    {
      url: '/images/noor-e-ramzan-1/food-hero.jpeg',
      caption: 'Culinary Experiences',
    },
    {
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
      caption: 'Community Celebrations',
    },
  ];

  return (
    <div className="event-campaign-page">
      {/* SECTION 1: CINEMATIC HERO */}
      <section
        className="campaign-hero"
        style={{ backgroundImage: `url(${event.heroImage})` }}
      >
        <div className="campaign-hero__overlay" />
        <div className="container campaign-hero__container">
          <div className="campaign-hero__content">
            <span className="eyebrow-label">OFFICIAL FESTIVAL MICROSITE</span>
            <h1 className="campaign-hero__title font-serif">{event.title}</h1>
            
            <div className="campaign-hero__meta-strip">
              <span className="campaign-hero__date-pill">{event.formattedDate}</span>
              <span className="campaign-hero__meta-divider">•</span>
              <span className="campaign-hero__venue-pill">{event.venue}, {event.city}</span>
            </div>

            <div className="campaign-hero__actions">
              {event.stallInfo && (
                <a href="#stalls">
                  <Button variant="primary" size="lg" icon={<Store size={18} />}>
                    STALL ENQUIRY
                  </Button>
                </a>
              )}
              <Button
                variant="whatsapp"
                size="lg"
                icon={<MessageCircle size={18} />}
                onClick={() =>
                  openWhatsApp({
                    type: 'event',
                    eventName: event.title,
                  })
                }
              >
                WHATSAPP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: QUICK FACTS (VISUAL) */}
      <section className="section-cream campaign-facts">
        <div className="container">
          <div className="campaign-facts__grid">
            <div className="campaign-facts__card">
              <span className="campaign-facts__label">DATE</span>
              <strong className="campaign-facts__value font-serif">{event.formattedDate}</strong>
            </div>

            <div className="campaign-facts__card">
              <span className="campaign-facts__label">VENUE</span>
              <strong className="campaign-facts__value font-serif">{event.venue}</strong>
              <span className="campaign-facts__sub">{event.city}</span>
            </div>

            <div className="campaign-facts__card">
              <span className="campaign-facts__label">THEME</span>
              <strong className="campaign-facts__value font-serif">{event.theme || event.tagline}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT TO EXPECT (CONCISE VISUAL TILES) */}
      <section className="section-light campaign-expect">
        <div className="container">
          <div className="campaign-section-header">
            <span className="eyebrow-label">EXPERIENCE HIGHLIGHTS</span>
            <h2 className="campaign-section-title font-serif">What to Expect</h2>
          </div>

          <div className="campaign-expect__grid">
            {expectations.map((item, idx) => (
              <div key={idx} className="campaign-expect-tile">
                <div className="campaign-expect-tile__img-box">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="campaign-expect-tile__overlay" />
                  <span className="campaign-expect-tile__badge">{item.label}</span>
                </div>
                <div className="campaign-expect-tile__body">
                  <h3 className="campaign-expect-tile__title font-serif">{item.title}</h3>
                  <p className="campaign-expect-tile__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: STALLS (OFFICIAL DIMENSIONS, NO FAKE PRICING) */}
      {event.stallInfo && (
        <section className="section-cream campaign-stalls" id="stalls">
          <div className="container">
            <div className="campaign-section-header">
              <span className="eyebrow-label">EXHIBITOR OPPORTUNITIES</span>
              <h2 className="campaign-section-title font-serif">Stall Specifications</h2>
              <p className="campaign-section-sub">
                Official dimensions derived from YMCA Royapettah floor plan.
              </p>
            </div>

            <StallBooking eventName={event.title} theme="light" />
          </div>
        </section>
      )}

      {/* SECTION 5: VENUE PLAN (LARGE VISUAL WITH ENLARGE/LIGHTBOX) */}
      {event.stallInfo && (
        <section className="section-light campaign-venue-plan">
          <div className="container">
            <div className="campaign-section-header">
              <span className="eyebrow-label">FLOOR ARCHITECTURE</span>
              <h2 className="campaign-section-title font-serif">Venue Plan</h2>
              <p className="campaign-section-sub">
                Master layout for stalls, entry points, dining arena, and parking.
              </p>
            </div>

            <StallLayout
              layoutImage={event.stallInfo.layoutImageUrl}
              eventName={event.title}
              theme="light"
            />
          </div>
        </section>
      )}

      {/* SECTION 6: EVENT EXPERIENCE (PHOTOGRAPHY) */}
      <section className="section-dark campaign-experience">
        <div className="container">
          <div className="campaign-section-header">
            <span className="eyebrow-label">GENUINE ATMOSPHERE</span>
            <h2 className="campaign-section-title font-serif">Event Experience</h2>
          </div>

          <div className="campaign-experience__grid">
            {experienceImages.map((img, i) => (
              <div key={i} className="campaign-experience__card">
                <img src={img.url} alt={img.caption} loading="lazy" />
                <div className="campaign-experience__caption">
                  <span>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: LOCATION */}
      <section className="section-light campaign-location">
        <div className="container">
          <div className="campaign-location__box">
            <div className="campaign-location__content">
              <span className="eyebrow-label">HOW TO REACH</span>
              <h2 className="campaign-location__title font-serif">{event.venue}, {event.city}</h2>
              <p className="campaign-location__address">
                {event.address}
              </p>
              <div className="campaign-location__cta">
                <a
                  href={event.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(event.venue + ' ' + event.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="md" icon={<ExternalLink size={16} />} iconPosition="right">
                    OPEN IN GOOGLE MAPS
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL PARTICIPATION CTA */}
      <section className="section-festive campaign-final-cta">
        <div className="container">
          <div className="campaign-final-cta__box">
            <span className="eyebrow-label">RESERVE YOUR SPACE</span>
            <h2 className="campaign-final-cta__heading font-serif">
              Interested in Participating?
            </h2>
            <p className="campaign-final-cta__sub">
              Secure your exhibition stall or food court counter for Noor-E-Ramzan 2.0 today.
            </p>
            <div className="campaign-final-cta__actions">
              <Button
                variant="primary"
                size="lg"
                icon={<Store size={18} />}
                onClick={() => openWhatsApp({ type: 'stall', eventName: event.title })}
              >
                STALL ENQUIRY
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openWhatsApp({ type: 'event', eventName: event.title })}
              >
                EVENT ENQUIRY
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                icon={<MessageCircle size={18} />}
                onClick={() => openWhatsApp({ type: 'general' })}
              >
                WHATSAPP
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
