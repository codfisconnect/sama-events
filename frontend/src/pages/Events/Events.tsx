import React, { useEffect } from 'react';
import { getUpcomingEvents, getPastEvents } from '../../data/events';
import EventCard from '../../components/EventCard/EventCard';
import './Events.css';

export const Events: React.FC = () => {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  useEffect(() => {
    document.title = 'Events & Experiences | Sama Events';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="events-page">
      {/* 1. Page Hero */}
      <section className="events-hero">
        <div className="container">
          <div className="events-hero__content">
            <span className="eyebrow-label">EXPERIENCE PORTFOLIO</span>
            <h1 className="events-hero__title font-serif">EVENTS</h1>
            <p className="events-hero__subtitle">
              Explore upcoming and past experiences by Sama Events.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Upcoming Events */}
      <section className="section-light events-section">
        <div className="container">
          <div className="events-section__header">
            <span className="eyebrow-label">CURRENT & ANNOUNCED</span>
            <h2 className="events-section__title font-serif">Upcoming Events</h2>
          </div>

          <div className="events-portfolio-grid">
            {upcomingEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Past Events */}
      <section className="section-cream events-section">
        <div className="container">
          <div className="events-section__header">
            <span className="eyebrow-label">PREVIOUS CHAPTERS</span>
            <h2 className="events-section__title font-serif">Past Events</h2>
          </div>

          <div className="events-portfolio-grid">
            {pastEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
