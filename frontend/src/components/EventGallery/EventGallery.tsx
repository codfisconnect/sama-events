import React, { useState } from 'react';
import { GalleryImageItem } from '../../types/gallery';
import { Eye, X } from 'lucide-react';
import './EventGallery.css';

export interface EventGalleryProps {
  images: GalleryImageItem[];
  title?: string;
  subtitle?: string;
  theme?: 'light' | 'dark';
}

export const EventGallery: React.FC<EventGalleryProps> = ({
  images,
  theme = 'light',
}) => {
  const [activeImage, setActiveImage] = useState<GalleryImageItem | null>(null);

  return (
    <div className={`event-gallery event-gallery--${theme}`}>
      <div className="event-gallery__masonry">
        {images.map((img) => (
          <div
            key={img.id}
            className={`event-gallery__item event-gallery__item--${img.aspectRatio || 'square'}`}
            onClick={() => setActiveImage(img)}
          >
            <img
              src={img.url}
              alt={img.title}
              className="event-gallery__img"
              loading="lazy"
            />
            <div className="event-gallery__overlay">
              <span className="event-gallery__badge">{img.category}</span>
              <h4 className="event-gallery__title">{img.title}</h4>
              {img.caption && <p className="event-gallery__caption">{img.caption}</p>}
              <div className="event-gallery__zoom-badge">
                <Eye size={16} />
                <span>View Full</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="event-gallery__lightbox"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="event-gallery__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="event-gallery__lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <img
              src={activeImage.url}
              alt={activeImage.title}
              className="event-gallery__lightbox-image"
            />
            <div className="event-gallery__lightbox-info">
              <span className="badge-gold">{activeImage.category}</span>
              <h3>{activeImage.title}</h3>
              {activeImage.caption && <p>{activeImage.caption}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGallery;
