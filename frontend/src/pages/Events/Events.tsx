import React, { useState } from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import EventCard from '../../components/EventCard/EventCard';
import EventGrid from '../../components/EventGrid/EventGrid';
import Button from '../../components/Button/Button';
import { eventsData, getUpcomingEvents, getPastEvents } from '../../data/events';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, CheckCircle2, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import './Events.css';

export const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'past'>('all');

  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  const displayedEvents =
    activeTab === 'all'
      ? eventsData
      : activeTab === 'upcoming'
      ? upcomingEvents
      : pastEvents;

  return (
    <div className="events-page">
      {/* Page Header Banner */}
      <section className="events-page__hero">
        <div className="container">
          <div className="events-page__hero-content">
            <span className="badge-gold">CURATED EXPERIENCES</span>
            <h1 className="events-page__hero-title font-serif">
              Festivals, Expos & Gatherings
            </h1>
            <p className="events-page__hero-subtitle">
              From our flagship Ramzan celebration at YMCA Royapettah to upcoming gourmet food fiestas and boutique design souks across Chennai.
            </p>

            {/* Filter Tabs */}
            <div className="events-page__tabs">
              <button
                className={`events-page__tab-btn ${activeTab === 'all' ? 'events-page__tab-btn--active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Events ({eventsData.length})
              </button>
              <button
                className={`events-page__tab-btn ${activeTab === 'upcoming' ? 'events-page__tab-btn--active' : ''}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming & Flagship ({upcomingEvents.length})
              </button>
              <button
                className={`events-page__tab-btn ${activeTab === 'past' ? 'events-page__tab-btn--active' : ''}`}
                onClick={() => setActiveTab('past')}
              >
                Past Editions ({pastEvents.length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="section-light">
        <div className="container">
          <EventGrid events={displayedEvents} columns={3} />
        </div>
      </section>

      {/* Featured Banner Callout */}
      <section className="section-festive events-page__callout">
        <div className="container">
          <div className="events-page__callout-inner">
            <div>
              <span className="badge-gold">FEATURED FLAGSHIP 2027</span>
              <h2 className="events-page__callout-title font-serif">
                Noor-E-Ramzan 2.0 at YMCA Royapettah
              </h2>
              <p className="events-page__callout-desc">
                25 February – 08 March 2027 • 12 Days of Food, Shopping & Festive Joy. Stall bookings are now open for exhibitors and food entrepreneurs.
              </p>
            </div>
            <div className="events-page__callout-actions">
              <Link to="/events/noor-e-ramzan-2">
                <Button variant="primary" size="lg">
                  Explore Noor-E-Ramzan 2.0
                </Button>
              </Link>
              <Button
                variant="whatsapp"
                size="lg"
                icon={<MessageCircle size={18} />}
                onClick={() => openWhatsApp({ type: 'stall', eventName: 'Noor-E-Ramzan 2.0' })}
              >
                Book Stall on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
