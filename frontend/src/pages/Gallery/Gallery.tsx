import React, { useEffect } from 'react';
import GalleryComponent from '../../components/Gallery/Gallery';
import { galleryData } from '../../data/gallery';
import './Gallery.css';

export const Gallery: React.FC = () => {
  useEffect(() => {
    document.title = 'Visual Moments | Sama Events Gallery';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery-page">
      {/* 1. Page Header */}
      <section className="gallery-page__hero">
        <div className="container">
          <div className="gallery-page__hero-content">
            <span className="eyebrow-label">VISUAL ARCHIVE</span>
            <h1 className="gallery-page__hero-title font-serif">GALLERY</h1>
            <p className="gallery-page__hero-subtitle">
              Moments of celebration, authentic flavors, and community experiences.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Visual Grid */}
      <section className="section-light gallery-main-section">
        <div className="container">
          <GalleryComponent images={galleryData} />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
