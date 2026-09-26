import React, { useEffect } from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Button from '../../components/Button/Button';
import { siteData } from '../../data/siteData';
import { brandImages } from '../../data/images';
import { Link } from 'react-router-dom';
import { Sparkles, Target, Compass, Award, Users, Utensils, Store, HeartHandshake, ArrowRight } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Sama Events';
    window.scrollTo(0, 0);
  }, []);

  const corePillars = [
    {
      title: 'Curated Experiences',
      desc: 'Every festival and exhibition is meticulously designed to create immersive environments where visitors linger, discover, and celebrate.',
      icon: <Sparkles size={24} />,
    },
    {
      title: 'Exhibitor Success',
      desc: 'We provide clear stall dimensions, high footfall layouts, standard amenities, and dedicated marketing to maximize exhibitor visibility and sales.',
      icon: <Store size={24} />,
    },
    {
      title: 'Culinary Celebrations',
      desc: 'Food is the heartbeat of community gatherings. We curate top food brands, authentic traditional specialties, and spacious dining arenas.',
      icon: <Utensils size={24} />,
    },
    {
      title: 'Safe Family Ambience',
      desc: 'We engineer secure venues with organized parking, separate entry and exit corridors, and dedicated kids entertainment zones.',
      icon: <Users size={24} />,
    },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${brandImages.aboutHeroBg})` }}
      >
        <div className="about-hero__overlay" />
        <div className="container about-hero__container">
          <span className="badge-gold">ABOUT SAMA EVENTS</span>
          <h1 className="about-hero__title font-serif">
            Where Every Event Becomes an Experience
          </h1>
          <p className="about-hero__subtitle">
            Sama Events is a premier event management and promotion enterprise based in Chennai. We curate large-scale food festivals, shopping lifestyle exhibitions, and celebratory cultural gatherings that bring people together.
          </p>
        </div>
      </section>

      {/* Brand Mission & Vision */}
      <section className="section-light">
        <div className="container">
          <div className="about-vision__grid">
            <div className="about-vision__card">
              <div className="about-vision__icon-wrap">
                <Target size={28} />
              </div>
              <h3 className="about-vision__title font-serif">Our Mission</h3>
              <p className="about-vision__desc">
                To engineer welcoming, festive, and commercially thriving gathering spaces where visitors encounter exceptional food and lifestyle brands, while empowering independent entrepreneurs and established businesses to connect with enthusiastic audiences.
              </p>
            </div>

            <div className="about-vision__card">
              <div className="about-vision__icon-wrap">
                <Compass size={28} />
              </div>
              <h3 className="about-vision__title font-serif">Our Vision</h3>
              <p className="about-vision__desc">
                To stand as Tamil Nadu’s most trusted festival curator and brand showcase platform, celebrated for premium presentation, flawless operational standards, and culturally vibrant community experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sama Events Represents (Cream) */}
      <section className="section-cream">
        <div className="container">
          <SectionHeading
            badge="OUR CORE DOMAINS"
            title="The Spectrum of What We Create"
            subtitle="From mega Ramzan celebrations to upcoming citywide food fiestas and curated lifestyle souks."
            align="center"
            theme="light"
          />

          <div className="about-spectrum__grid">
            {siteData.eventCompanyHighlights.map((item, index) => (
              <div key={index} className="about-spectrum__card">
                <div className="about-spectrum__img-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="about-spectrum__content">
                  <h4 className="about-spectrum__title font-serif">{item.title}</h4>
                  <p className="about-spectrum__desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Operational Pillars (Dark) */}
      <section className="section-dark">
        <div className="container">
          <SectionHeading
            badge="OUR COMMITMENT"
            title="Built on Integrity, Curation & Hospitality"
            subtitle="How we approach event production, visitor hospitality, and partner collaboration."
            align="center"
            theme="dark"
          />

          <div className="about-pillars__grid">
            {corePillars.map((pillar, i) => (
              <div key={i} className="about-pillars__card">
                <div className="about-pillars__icon-box">{pillar.icon}</div>
                <h4 className="about-pillars__title">{pillar.title}</h4>
                <p className="about-pillars__desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-festive about-cta">
        <div className="container">
          <div className="about-cta__inner">
            <span className="badge-gold">FLAGSHIP 2027</span>
            <h2 className="about-cta__title font-serif">
              Discover Noor-E-Ramzan 2.0
            </h2>
            <p className="about-cta__desc">
              Experience the next chapter of Chennai’s favorite Ramzan food & shopping festival at YMCA Royapettah from 25 February to 08 March 2027.
            </p>
            <div className="about-cta__actions">
              <Link to="/events/noor-e-ramzan-2">
                <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  Explore Noor-E-Ramzan 2.0
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Our Team
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
