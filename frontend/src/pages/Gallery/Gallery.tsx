import React, { useEffect } from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import GalleryComponent from '../../components/Gallery/Gallery';
import { galleryData } from '../../data/gallery';
import { brandImages } from '../../data/images';
import './Gallery.css';

export const Gallery: React.FC = () => {
  useEffect(() => {
    document.title = 'Photo Gallery | Sama Events';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section
        className="gallery-hero"
        style={{ backgroundImage: `url(${brandImages.galleryHeroBg})` }}
      >
        <div className="gallery-hero__overlay" />
        <div className="container gallery-hero__container">
          <span className="badge-gold">VISUAL ARCHIVE</span>
          <h1 className="gallery-hero__title font-serif">
            Festival Memories & Previews
          </h1>
          <p className="gallery-hero__subtitle">
            Explore authentic moments from our previous Noor-E-Ramzan 1.0 edition, sneak peeks of Noor-E-Ramzan 2.0, and future festival concepts curated by Sama Events.
          </p>
        </div>
      </section>

      {/* Main Gallery Container */}
      <section className="section-light gallery-main-section">
        <div className="container">
          <GalleryComponent images={galleryData} />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
