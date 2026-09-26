import React, { useState } from 'react';
import { GalleryImageItem } from '../../types/gallery';
import { Eye, X, Filter } from 'lucide-react';
import './Gallery.css';

export interface GalleryProps {
  images: GalleryImageItem[];
  defaultCategory?: string;
}

export const Gallery: React.FC<GalleryProps> = ({
  images,
  defaultCategory = 'All',
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(defaultCategory);
  const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);

  const categories = [
    'All',
    'Noor-E-Ramzan 1.0',
    'Noor-E-Ramzan 2.0',
    'Future Events',
  ];

  const filteredImages =
    activeFilter === 'All'
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <div className="sama-gallery-comp">
      {/* Category Filter Pills */}
      <div className="sama-gallery-comp__filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`sama-gallery-comp__filter-btn ${
              activeFilter === cat ? 'sama-gallery-comp__filter-btn--active' : ''
            }`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat === 'All' ? 'All Editions' : cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="sama-gallery-comp__grid">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className={`sama-gallery-comp__card sama-gallery-comp__card--${img.aspectRatio || 'square'}`}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.url}
              alt={img.title}
              className="sama-gallery-comp__img"
              loading="lazy"
            />
            <div className="sama-gallery-comp__card-overlay">
              <span className="sama-gallery-comp__badge">{img.category}</span>
              <h4 className="sama-gallery-comp__card-title">{img.title}</h4>
              {img.caption && <p className="sama-gallery-comp__caption">{img.caption}</p>}
              <div className="sama-gallery-comp__zoom">
                <Eye size={18} />
                <span>Enlarge</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="sama-gallery-comp__lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="sama-gallery-comp__lightbox-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="sama-gallery-comp__lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image modal"
            >
              <X size={26} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="sama-gallery-comp__lightbox-img"
            />
            <div className="sama-gallery-comp__lightbox-details">
              <span className="badge-gold">{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
              {selectedImage.caption && <p>{selectedImage.caption}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
