import React, { useEffect } from 'react';
import { noorERamzan1Images } from '../../data/images';
import Button from '../../components/Button/Button';
import { ArrowRight } from 'lucide-react';
import './NoorERamzan1.css';

export const NoorERamzan1: React.FC = () => {
  useEffect(() => {
    document.title = 'Noor-E-Ramzan 1.0 (2026) | Sama Events Visual Story';
    window.scrollTo(0, 0);
  }, []);

  const storyChapters = [
    {
      label: 'CHAPTER 01',
      title: 'Opening Moment',
      caption: 'The inaugural evening welcoming visitors to YMCA Royapettah.',
      image: noorERamzan1Images.hero,
      layout: 'lead',
    },
    {
      label: 'CHAPTER 02',
      title: 'Food Court & Flavors',
      caption: 'Aromatic delicacies, traditional street recipes, and bustling live counters.',
      image: noorERamzan1Images.foodCourt,
      layout: 'split',
    },
    {
      label: 'CHAPTER 03',
      title: 'Boutique Shopping',
      caption: 'Curated retail pavilions showcasing festive fashion, perfumes, and handcrafted goods.',
      image: noorERamzan1Images.shoppingStalls,
      layout: 'split',
    },
    {
      label: 'CHAPTER 04',
      title: 'The Crowd',
      caption: 'Thousands of families and patrons uniting in celebration each evening.',
      image: noorERamzan1Images.crowdAtmosphere,
      layout: 'lead',
    },
    {
      label: 'CHAPTER 05',
      title: 'Festive Moments',
      caption: 'Radiant illumination and warm communal energy under the Chennai night sky.',
      image: noorERamzan1Images.eveningLights,
      layout: 'split',
    },
    {
      label: 'CHAPTER 06',
      title: 'Memories Created',
      caption: 'The foundation of trust, laughter, and hospitality that inspired Noor-E-Ramzan 2.0.',
      image: noorERamzan1Images.stageAndVibes,
      layout: 'split',
    },
  ];

  return (
    <div className="noor1-story-page">
      {/* 1. STORY HERO */}
      <section className="noor1-hero" style={{ backgroundImage: `url(${noorERamzan1Images.hero})` }}>
        <div className="noor1-hero__overlay" />
        <div className="container noor1-hero__container">
          <div className="noor1-hero__content">
            <span className="eyebrow-label">A VISUAL RETROSPECTIVE</span>
            <h1 className="noor1-hero__title font-serif">NOOR-E-RAMZAN 1.0</h1>
            
            <div className="noor1-hero__status-row">
              <span className="noor1-hero__year">2026</span>
              <span className="noor1-hero__sep">•</span>
              <span className="noor1-hero__badge">SUCCESSFULLY COMPLETED</span>
            </div>

            <p className="noor1-hero__intro font-serif">
              A celebration that brought people together.
            </p>
          </div>
        </div>
      </section>

      {/* 2. VISUAL CHRONICLE CHAPTERS */}
      <section className="section-dark noor1-chapters">
        <div className="container">
          <div className="noor1-chapters__timeline">
            {storyChapters.map((ch, idx) => (
              <article key={idx} className={`noor1-chapter-card noor1-chapter-card--${ch.layout}`}>
                <div className="noor1-chapter-card__img-frame">
                  <img src={ch.image} alt={ch.title} loading="lazy" />
                </div>
                <div className="noor1-chapter-card__info">
                  <span className="noor1-chapter-card__label">{ch.label}</span>
                  <h2 className="noor1-chapter-card__title font-serif">{ch.title}</h2>
                  <p className="noor1-chapter-card__caption">{ch.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. READY FOR 2.0 BRIDGE */}
      <section className="section-festive noor1-bridge">
        <div className="container">
          <div className="noor1-bridge__box">
            <span className="eyebrow-label">THE NEXT CHAPTER</span>
            <h2 className="noor1-bridge__heading font-serif">
              Ready for 2.0?
            </h2>
            <p className="noor1-bridge__sub">
              Noor-E-Ramzan returns bigger and grander from 25 February to 08 March 2027 at YMCA Royapettah.
            </p>
            <div className="noor1-bridge__action">
              <Button to="/events/noor-e-ramzan-2" variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                EXPLORE NOOR-E-RAMZAN 2.0
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoorERamzan1;
