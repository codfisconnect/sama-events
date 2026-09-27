import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { brandImages } from '../../data/images';
import { siteData } from '../../data/siteData';
import Button from '../../components/Button/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Sama Events | Creating Experiences Worth Remembering';
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      title: 'Food Festivals',
      label: 'CULINARY',
      desc: 'Large-scale food courts, live cooking counters, and diverse culinary showcases.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Festivals & Celebrations',
      label: 'FESTIVE',
      desc: 'Atmospheric festive gatherings honoring tradition, festive illumination, and community joy.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Exhibitions',
      label: 'COMMERCIAL',
      desc: 'High-footfall retail pavilions connecting brands with thousands of active visitors.',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Shopping & Lifestyle',
      label: 'BOUTIQUE',
      desc: 'Curated fashion pop-ups, artisanal clothing, jewellery, fragrances, and home decor.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Cultural Experiences',
      label: 'CULTURE',
      desc: 'Shared moments of celebration, heritage, hospitality, and seasonal festivities.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Community Events',
      label: 'COMMUNITY',
      desc: 'Family-friendly environments with comfortable covered seating and dedicated kids play areas.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="about-editorial-page">
      {/* 1. HERO — Strong Visual & Short Brand Statement */}
      <section
        className="about-editorial-hero"
        style={{ backgroundImage: `url(${brandImages.aboutHeroBg})` }}
      >
        <div className="about-editorial-hero__overlay" />
        <div className="container about-editorial-hero__container">
          <div className="about-editorial-hero__content">
            <span className="eyebrow-label">WHO WE ARE</span>
            <h1 className="about-editorial-hero__title font-serif">
              WE CREATE EXPERIENCES THAT BRING PEOPLE TOGETHER.
            </h1>
            <p className="about-editorial-hero__desc">
              Sama Events is an event management and brand promotion enterprise based in Chennai. We curate large-scale food festivals, lifestyle shopping expos, cultural celebrations, and community experiences.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SIMPLE STORY */}
      <section className="section-light about-story-section">
        <div className="container">
          <div className="about-story-box">
            <div className="about-story-text">
              <span className="eyebrow-label">OUR PHILOSOPHY</span>
              <h2 className="about-story-heading font-serif">
                Thoughtful Curation, Memorable Gatherings.
              </h2>
              <p>
                At Sama Events, we believe great events are defined by atmosphere, hospitality, and shared moments. Whether transforming an open ground into an illuminated festive bazaar or organizing a curated lifestyle showcase, our focus is always on creating welcoming environments for visitors and thriving platforms for exhibitors.
              </p>
              <p>
                From our inaugural Noor-E-Ramzan 1.0 celebration in 2026 to our flagship Noor-E-Ramzan 2.0 at YMCA Royapettah in 2027 and upcoming culinary and design festivals, we craft experiences that linger in memory.
              </p>
            </div>
            <div className="about-story-media">
              <img
                src={brandImages.logo}
                alt="Sama Events Brand"
                className="about-story-logo-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITY CATEGORIES */}
      <section className="section-cream about-capabilities-section">
        <div className="container">
          <div className="campaign-section-header">
            <span className="eyebrow-label">WHAT SAMA EVENTS CREATES</span>
            <h2 className="campaign-section-title font-serif">Our Capabilities</h2>
            <p className="campaign-section-sub">
              Diverse event formats curated with premium production and community warmth.
            </p>
          </div>

          <div className="about-capabilities-grid">
            {capabilities.map((item, idx) => (
              <div key={idx} className="about-cap-card">
                <div className="about-cap-card__img-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="about-cap-card__badge">{item.label}</span>
                </div>
                <div className="about-cap-card__body">
                  <h3 className="about-cap-card__title font-serif">{item.title}</h3>
                  <p className="about-cap-card__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="section-festive about-editorial-cta">
        <div className="container">
          <div className="about-editorial-cta__box">
            <span className="eyebrow-label">GET IN TOUCH</span>
            <h2 className="about-editorial-cta__heading font-serif">
              Let's Create Something Memorable
            </h2>
            <p className="about-editorial-cta__sub">
              Explore our current event roster or speak with our team regarding brand showcases and partnerships.
            </p>
            <div className="about-editorial-cta__actions">
              <Link to="/events">
                <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  EXPLORE EVENTS
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  TALK TO SAMA EVENTS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
