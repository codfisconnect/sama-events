import React from 'react';
import { Link } from 'react-router-dom';
import { EventData } from '../../types/event';
import { Calendar, MapPin, Clock, ArrowRight, Store } from 'lucide-react';
import './EventCard.css';

export interface EventCardProps {
  event: EventData;
  featured?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ event, featured = false }) => {
  const isUpcoming = event.status === 'upcoming';
  const isFeaturedEvent = event.isFeatured || featured;

  return (
    <article className={`event-card ${isFeaturedEvent ? 'event-card--featured' : ''}`}>
      <div className="event-card__image-wrap">
        <img
          src={event.cardImage || event.heroImage}
          alt={event.title}
          className="event-card__image"
          loading="lazy"
        />
        <div className="event-card__badge-row">
          {event.isFeatured && (
            <span className="event-card__badge event-card__badge--gold">
              Featured Flagship
            </span>
          )}
          <span className={`event-card__badge event-card__badge--${event.status}`}>
            {event.status === 'upcoming'
              ? 'Upcoming Festival'
              : event.status === 'completed'
              ? 'Past Edition'
              : 'Announced'}
          </span>
        </div>
        <div className="event-card__category-tag">{event.category}</div>
      </div>

      <div className="event-card__content">
        <div className="event-card__header">
          <span className="event-card__tagline">{event.tagline}</span>
          <h3 className="event-card__title font-serif">
            <Link to={`/events/${event.slug}`}>{event.title}</Link>
          </h3>
        </div>

        <p className="event-card__desc">{event.description}</p>

        <div className="event-card__meta">
          <div className="event-card__meta-item">
            <Calendar size={16} className="event-card__meta-icon" />
            <span>{event.formattedDate}</span>
          </div>
          <div className="event-card__meta-item">
            <Clock size={16} className="event-card__meta-icon" />
            <span>{event.duration}</span>
          </div>
          <div className="event-card__meta-item">
            <MapPin size={16} className="event-card__meta-icon" />
            <span>{event.venue}, {event.city}</span>
          </div>
        </div>

        <div className="event-card__footer">
          <Link to={`/events/${event.slug}`} className="event-card__action-link">
            <span>Explore Details</span>
            <ArrowRight size={16} />
          </Link>

          {isUpcoming && event.stallInfo && (
            <Link
              to={`/events/${event.slug}#stall-booking`}
              className="event-card__stall-btn"
              title="Book a Stall"
            >
              <Store size={15} />
              <span>Stalls</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default EventCard;
