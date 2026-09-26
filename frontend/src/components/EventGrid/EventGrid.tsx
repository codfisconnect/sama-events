import React from 'react';
import { EventData } from '../../types/event';
import EventCard from '../EventCard/EventCard';
import './EventGrid.css';

export interface EventGridProps {
  events: EventData[];
  columns?: 2 | 3 | 4;
}

export const EventGrid: React.FC<EventGridProps> = ({ events, columns = 3 }) => {
  return (
    <div className={`event-grid event-grid--cols-${columns}`}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventGrid;
