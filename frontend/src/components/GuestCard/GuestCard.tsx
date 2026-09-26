import React from 'react';
import { GuestItem } from '../../types/guest';
import { Award, User } from 'lucide-react';
import './GuestCard.css';

export interface GuestCardProps {
  guest: GuestItem;
}

export const GuestCard: React.FC<GuestCardProps> = ({ guest }) => {
  return (
    <div className="guest-card">
      <div className="guest-card__image-box">
        {guest.photo ? (
          <img
            src={guest.photo}
            alt={guest.name}
            className="guest-card__photo"
            loading="lazy"
          />
        ) : (
          <div className="guest-card__photo-fallback">
            <User size={48} />
          </div>
        )}
        <div className="guest-card__category-badge">
          <Award size={13} />
          <span>{guest.category}</span>
        </div>
      </div>

      <div className="guest-card__content">
        <h4 className="guest-card__name font-serif">{guest.name}</h4>
        <span className="guest-card__role">{guest.role}</span>
        <p className="guest-card__designation">{guest.designation}</p>
        {guest.bio && <p className="guest-card__bio">{guest.bio}</p>}
      </div>
    </div>
  );
};

export default GuestCard;
