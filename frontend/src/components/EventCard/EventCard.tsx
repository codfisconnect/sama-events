import React from 'react';
import { Link } from 'react-router-dom';
import { EventData } from '../../types/event';
import { ArrowRight, Calendar } from 'lucide-react';
import './EventCard.css';

export interface EventCardProps {
  event: EventData;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <article className="sama-event-card">
      <Link to={`/events/${event.slug}`} className="sama-event-card__img-link">
        <div className="sama-event-card__img-wrap">
          <img
            src={event.heroImage || event.cardImage}
            alt={event.title}
            className="sama-event-card__img"
            loading="lazy"
          />
          <div className="sama-event-card__overlay" />
          <span className="sama-event-card__category">{event.category}</span>
        </div>
      </Link>

      <div className="sama-event-card__body">
        <div className="sama-event-card__date">
          <Calendar size={14} className="sama-event-card__date-icon" />
          <span>{event.formattedDate}</span>
        </div>

        <h3 className="sama-event-card__title font-serif">
          <Link to={`/events/${event.slug}`}>{event.title}</Link>
        </h3>

        <Link to={`/events/${event.slug}`} className="sama-event-card__cta">
          <span>VIEW EVENT</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
};

export default EventCard;
