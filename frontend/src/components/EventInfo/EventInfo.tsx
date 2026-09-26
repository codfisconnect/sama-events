import React from 'react';
import { EventData } from '../../types/event';
import { Calendar, Clock, MapPin, Tag, Navigation, Building2 } from 'lucide-react';
import './EventInfo.css';

export interface EventInfoProps {
  event: EventData;
  theme?: 'light' | 'dark';
}

export const EventInfo: React.FC<EventInfoProps> = ({ event, theme = 'light' }) => {
  return (
    <div className={`event-info event-info--${theme}`}>
      <div className="event-info__card">
        <div className="event-info__icon-wrapper">
          <Calendar size={24} />
        </div>
        <div className="event-info__detail">
          <span className="event-info__label">Date & Schedule</span>
          <strong className="event-info__value">{event.formattedDate}</strong>
          <span className="event-info__subtext">{event.duration}</span>
        </div>
      </div>

      <div className="event-info__card">
        <div className="event-info__icon-wrapper">
          <Clock size={24} />
        </div>
        <div className="event-info__detail">
          <span className="event-info__label">Duration & Timings</span>
          <strong className="event-info__value">{event.duration}</strong>
          <span className="event-info__subtext">Evening Festivities & Night Bazaar</span>
        </div>
      </div>

      <div className="event-info__card">
        <div className="event-info__icon-wrapper">
          <Building2 size={24} />
        </div>
        <div className="event-info__detail">
          <span className="event-info__label">Official Venue</span>
          <strong className="event-info__value">{event.venue}</strong>
          <span className="event-info__subtext">{event.city}</span>
        </div>
      </div>

      <div className="event-info__card">
        <div className="event-info__icon-wrapper">
          <Tag size={24} />
        </div>
        <div className="event-info__detail">
          <span className="event-info__label">Category & Focus</span>
          <strong className="event-info__value">{event.category}</strong>
          <span className="event-info__subtext">{event.tagline}</span>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
