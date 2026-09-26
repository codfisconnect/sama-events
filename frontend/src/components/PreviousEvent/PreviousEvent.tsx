import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { noorERamzan1Images } from '../../data/images';
import Button from '../Button/Button';
import { ArrowRight, Sparkles, Image as ImageIcon, Eye, X } from 'lucide-react';
import './PreviousEvent.css';

interface GalleryItem {
  src: string;
  alt: string;
  tag: string;
  title: string;
}

const previousMoments: GalleryItem[] = [
  {
    src: noorERamzan1Images.hero,
    alt: 'Noor-E-Ramzan 1.0 Evening Promenade',
    tag: 'Main Atmosphere',
    title: 'Festive Illumination & Crowds',
  },
  {
    src: noorERamzan1Images.crowdAtmosphere,
    alt: 'Visitors and Families at 1.0',
    tag: 'Visitors & Community',
    title: 'Warm Family Gatherings',
  },
  {
    src: noorERamzan1Images.foodCourt,
    alt: 'Food Court at Noor-E-Ramzan 1.0',
    tag: 'Food Court Experience',
    title: 'Aromatic Delicacies & Live Stalls',
  },
  {
    src: noorERamzan1Images.shoppingStalls,
    alt: 'Lifestyle and Retail Stalls',
    tag: 'Shopping Pavilions',
    title: 'Festive Fashion & Boutiques',
  },
  {
    src: noorERamzan1Images.stageAndVibes,
    alt: 'Stage and Cultural Moments',
    tag: 'Celebration Stage',
    title: 'Stage Ceremonies & Evenings',
  },
  {
    src: noorERamzan1Images.eveningLights,
    alt: 'Night Bazaar Ambience',
    tag: 'Night Bazaar',
    title: 'Vibrant Festive Lights',
  },
];

export const PreviousEvent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section className="previous-event">
      {/* Visual Timeline Header */}
      <div className="previous-event__timeline-strip">
        <div className="container previous-event__timeline-inner">
          <div className="previous-event__step previous-event__step--past">
            <span className="previous-event__year">2026</span>
            <strong className="previous-event__step-title">NOOR-E-RAMZAN 1.0</strong>
            <span className="previous-event__step-desc">The Celebrated Inaugural Edition</span>
          </div>

          <div className="previous-event__connector">
            <div className="previous-event__line"></div>
            <div className="previous-event__arrow-crest">
              <Sparkles size={16} />
            </div>
            <div className="previous-event__line"></div>
          </div>

          <div className="previous-event__step previous-event__step--current">
            <span className="previous-event__year previous-event__year--gold">2027</span>
            <strong className="previous-event__step-title">NOOR-E-RAMZAN 2.0</strong>
            <span className="previous-event__step-desc">The Grand Return at YMCA Royapettah</span>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Intro */}
        <div className="previous-event__intro">
          <div className="previous-event__badge">
            <Sparkles size={14} />
            <span>AUTHENTIC FESTIVAL CREDIBILITY</span>
          </div>
          <h2 className="previous-event__title font-serif">
            Where the Journey Began: <span className="gold-gradient-text">Noor-E-Ramzan 1.0</span>
          </h2>
          <p className="previous-event__subtitle">
            Organized in 2026, Noor-E-Ramzan 1.0 united thousands of families, enthusiastic food lovers, and premier retail exhibitors in Chennai. Explore the genuine moments that established the reputation and warmth carried forward into edition 2.0.
          </p>
        </div>

        {/* Previous Event Photo Grid */}
        <div className="previous-event__gallery-grid">
          {previousMoments.map((item, index) => (
            <div
              key={index}
              className={`previous-event__photo-card ${index === 0 ? 'previous-event__photo-card--large' : ''}`}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="previous-event__photo"
                loading="lazy"
              />
              <div className="previous-event__photo-overlay">
                <span className="previous-event__photo-tag">{item.tag}</span>
                <h4 className="previous-event__photo-title">{item.title}</h4>
                <div className="previous-event__zoom-icon">
                  <Eye size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Bridge Box to 2.0 */}
        <div className="previous-event__bridge">
          <div className="previous-event__bridge-content">
            <div className="previous-event__bridge-text">
              <span className="previous-event__bridge-badge">THE CONTINUATION</span>
              <h3 className="previous-event__bridge-title font-serif">
                Ready for Noor-E-Ramzan 2.0?
              </h3>
              <p className="previous-event__bridge-desc">
                Expanding to 12 grand days (25 Feb – 08 Mar 2027) with 62 exhibition stalls, 22 food court stalls, dedicated parking, and a dedicated kids play area at YMCA Royapettah.
              </p>
            </div>
            <div className="previous-event__bridge-actions">
              <Link to="/events/noor-e-ramzan-2">
                <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  Explore Noor-E-Ramzan 2.0
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" size="lg" icon={<ImageIcon size={18} />}>
                  View Full Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="previous-event__lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="previous-event__lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="previous-event__lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close photo preview"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="previous-event__lightbox-img"
            />
            <div className="previous-event__lightbox-caption">
              <span className="previous-event__photo-tag">{selectedImage.tag}</span>
              <h4>{selectedImage.title}</h4>
              <p>Authentic moment captured at Noor-E-Ramzan 1.0 (2026)</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PreviousEvent;
