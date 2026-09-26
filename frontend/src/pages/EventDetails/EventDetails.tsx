import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEventBySlug, getFeaturedEvent } from '../../data/events';
import { guestsData } from '../../data/guests';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Countdown from '../../components/Countdown/Countdown';
import EventInfo from '../../components/EventInfo/EventInfo';
import EventHighlights from '../../components/EventHighlights/EventHighlights';
import StallBooking from '../../components/StallBooking/StallBooking';
import StallLayout from '../../components/StallLayout/StallLayout';
import GuestCard from '../../components/GuestCard/GuestCard';
import LocationSection from '../../components/LocationSection/LocationSection';
import ContactForm from '../../components/ContactForm/ContactForm';
import Button from '../../components/Button/Button';
import { openWhatsApp } from '../../utils/whatsapp';
import { Sparkles, Calendar, MapPin, Store, MessageCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import './EventDetails.css';

export const EventDetails: React.FC = () => {
  const { eventSlug } = useParams<{ eventSlug?: string }>();
  const slug = eventSlug || 'noor-e-ramzan-2';
  const event = getEventBySlug(slug) || getFeaturedEvent();

  // Dynamic Page Title
  useEffect(() => {
    document.title = `${event.title} | Sama Events`;
    window.scrollTo(0, 0);
  }, [event]);

  const eventGuests = guestsData.filter((g) => !g.eventId || g.eventId === event.id);

  return (
    <div className="event-details-page">
      {/* Event Details Hero */}
      <section
        className="event-details-hero"
        style={{ backgroundImage: `url(${event.heroImage})` }}
      >
        <div className="event-details-hero__overlay" />
        <div className="container event-details-hero__container">
          <Link to="/events" className="event-details-hero__back">
            <ArrowLeft size={16} />
            <span>Back to All Events</span>
          </Link>

          <div className="event-details-hero__content">
            <div className="event-details-hero__badge-row">
              <span className="badge-gold">
                {event.status === 'upcoming'
                  ? 'OFFICIAL 2027 FESTIVAL'
                  : event.status === 'completed'
                  ? 'COMPLETED EDITION'
                  : 'ANNOUNCED EVENT'}
              </span>
              <span className="event-details-hero__category">{event.category}</span>
            </div>

            <h1 className="event-details-hero__title font-serif">{event.title}</h1>
            <p className="event-details-hero__tagline">{event.tagline}</p>

            <div className="event-details-hero__quick-meta">
              <div className="event-details-hero__meta-pill">
                <Calendar size={16} />
                <span>{event.formattedDate}</span>
              </div>
              <div className="event-details-hero__meta-pill">
                <MapPin size={16} />
                <span>{event.venue}, {event.city}</span>
              </div>
            </div>

            <div className="event-details-hero__actions">
              {event.status === 'upcoming' && event.stallInfo && (
                <a href="#stall-booking">
                  <Button variant="primary" size="lg" icon={<Store size={18} />}>
                    Book a Stall
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
                Enquire on WhatsApp
              </Button>
            </div>
          </div>

          {/* Countdown widget for upcoming events */}
          {event.status === 'upcoming' && (
            <div className="event-details-hero__countdown">
              <Countdown targetDate={event.startDate} eventTitle={event.title} />
            </div>
          )}
        </div>
      </section>

      {/* Structured Key Facts */}
      <section className="section-light event-details__info-section">
        <div className="container">
          <EventInfo event={event} theme="light" />
        </div>
      </section>

      {/* Description & Overview */}
      <section className="section-cream">
        <div className="container">
          <div className="event-details__overview-grid">
            <div className="event-details__overview-text">
              <span className="badge-gold">ABOUT THE EXPERIENCE</span>
              <h2 className="event-details__section-title font-serif">
                Festival Concept & Atmosphere
              </h2>
              {event.longDescription ? (
                event.longDescription.map((p, idx) => (
                  <p key={idx} className="event-details__paragraph">
                    {p}
                  </p>
                ))
              ) : (
                <p className="event-details__paragraph">{event.description}</p>
              )}

              <div className="event-details__highlights-list">
                <h4>Festival Key Features:</h4>
                <div className="event-details__highlights-chips">
                  {event.highlights.map((h, i) => (
                    <span key={i} className="event-details__chip">
                      <CheckCircle2 size={16} className="event-details__chip-icon" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="event-details__overview-media">
              <div className="event-details__card-image-box">
                <img
                  src={event.cardImage || event.heroImage}
                  alt={event.title}
                  className="event-details__card-img"
                />
                <div className="event-details__card-caption">
                  <span className="badge-gold">{event.venue}</span>
                  <p>12 Days Festive Atmosphere in Chennai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Component (Brochure Verified) */}
      <section className="section-dark">
        <div className="container">
          <SectionHeading
            badge="AMENITIES & ACTIVITIES"
            title="What Awaits You at the Festival"
            subtitle="Carefully engineered venue layout and entertainment spaces for a relaxing family outing."
            align="center"
            theme="dark"
          />

          <EventHighlights theme="dark" />
        </div>
      </section>

      {/* Stall Booking Section (If Available) */}
      {event.stallInfo && (
        <section className="section-light" id="stall-booking">
          <div className="container">
            <SectionHeading
              badge="STALL RESERVATIONS"
              title="Official Stall Dimensions & Categories"
              subtitle={event.stallInfo.description}
              align="center"
              theme="light"
            />

            <StallBooking eventName={event.title} theme="light" />

            <div className="event-details__layout-wrap">
              <SectionHeading
                badge="FLOOR PLAN BLUEPRINT"
                title="YMCA Royapettah Venue Floor Plan"
                subtitle="Exhibition layout, food stalls, dining spaces, parking, and visitor flow."
                align="center"
                theme="light"
              />
              <StallLayout
                layoutImage={event.stallInfo.layoutImageUrl}
                eventName={event.title}
                theme="light"
              />
            </div>
          </div>
        </section>
      )}

      {/* Dignitaries & Guests Section */}
      <section className="section-cream">
        <div className="container">
          <SectionHeading
            badge="HONOURABLE PATRONS"
            title="Dignitaries & Special Guests"
            subtitle="Distinguished guests and ambassadors participating in our festive ceremonies."
            align="center"
            theme="light"
          />

          <div className="event-details__guests-grid">
            {eventGuests.map((guest) => (
              <GuestCard key={guest.id} guest={guest} />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-light">
        <div className="container">
          <SectionHeading
            badge="GET DIRECTIONS"
            title="Festival Venue & Navigation"
            subtitle="Centrally located at YMCA Royapettah with ample parking and accessibility."
            align="center"
            theme="light"
          />

          <LocationSection
            venueName={event.venue}
            address={event.address}
            city={event.city}
            directionsUrl={event.googleMapsUrl}
            theme="light"
          />
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section-dark">
        <div className="container">
          <div className="event-details__enquiry-layout">
            <div className="event-details__enquiry-text">
              <span className="badge-gold">DIRECT ENQUIRY DESK</span>
              <h2 className="event-details__enquiry-title font-serif">
                Reserve Your Stall or Request Event Information
              </h2>
              <p className="event-details__enquiry-desc">
                Whether you wish to showcase your retail brand, set up a culinary stall in the food court, or sponsor festival activities, submit your details below or chat directly on WhatsApp.
              </p>
              <div className="event-details__wa-action-box">
                <h4>Need an immediate stall rate sheet?</h4>
                <p>Chat directly with the Sama Events committee:</p>
                <Button
                  variant="whatsapp"
                  size="md"
                  icon={<MessageCircle size={18} />}
                  onClick={() => openWhatsApp({ type: 'stall', eventName: event.title })}
                >
                  WhatsApp Stall Desk
                </Button>
              </div>
            </div>

            <div className="event-details__form-col">
              <ContactForm initialEvent={event.title} theme="dark" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
