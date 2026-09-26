import React from 'react';
import { Store, Utensils, Users, Gamepad2, Car, Sparkles, DoorOpen } from 'lucide-react';
import './EventHighlights.css';

export interface HighlightFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const defaultHighlights: HighlightFeature[] = [
  {
    title: 'Exhibition Stalls (S1–S62)',
    description: '62 dedicated 8 x 6 ft exhibition stalls showcasing premier lifestyle, apparel, abayas, jewellery, perfumes, and festive collections.',
    icon: <Store size={24} />,
    tag: 'Retail & Fashion',
  },
  {
    title: 'Gourmet Food Stalls (F1–F22)',
    description: '22 prime food stalls offering mouthwatering traditional Ramadan delicacies, savory street foods, live grills, and sweet desserts.',
    icon: <Utensils size={24} />,
    tag: 'Culinary Court',
  },
  {
    title: 'Spacious Dining Area',
    description: 'Large, comfortable covered dining spaces arranged adjacent to the food court so families can dine together with ease.',
    icon: <Users size={24} />,
    tag: 'Family Dining',
  },
  {
    title: 'Kids Play & Fun Area',
    description: 'A designated and secure play zone filled with exciting rides and entertainment tailored especially for younger children.',
    icon: <Gamepad2 size={24} />,
    tag: 'Kids Entertainment',
  },
  {
    title: 'Dedicated Visitor Parking',
    description: 'Organized vehicular parking inside the YMCA grounds for smooth visitor arrival and vehicle security.',
    icon: <Car size={24} />,
    tag: 'Convenience',
  },
  {
    title: 'Streamlined Entry & Exit',
    description: 'Separate, organized entry and exit gates ensuring safe crowd dispersal and a relaxed strolling experience throughout the venue.',
    icon: <DoorOpen size={24} />,
    tag: 'Venue Layout',
  },
  {
    title: 'Festive Atmosphere & Lights',
    description: 'Illuminated evening bazaar ambiance with grand festive archways, decorative lighting, and vibrant celebration vibes.',
    icon: <Sparkles size={24} />,
    tag: 'Vibrant Experience',
  },
];

export interface EventHighlightsProps {
  highlights?: HighlightFeature[];
  title?: string;
  subtitle?: string;
  theme?: 'light' | 'dark' | 'festive';
}

export const EventHighlights: React.FC<EventHighlightsProps> = ({
  highlights = defaultHighlights,
  theme = 'dark',
}) => {
  return (
    <div className={`event-highlights event-highlights--${theme}`}>
      <div className="event-highlights__grid">
        {highlights.map((item, idx) => (
          <div key={idx} className="event-highlights__card">
            <div className="event-highlights__card-header">
              <div className="event-highlights__icon-box">{item.icon}</div>
              <span className="event-highlights__tag">{item.tag}</span>
            </div>
            <h4 className="event-highlights__title">{item.title}</h4>
            <p className="event-highlights__description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHighlights;
