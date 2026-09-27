import React, { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Button from '../../components/Button/Button';
import { siteData } from '../../data/siteData';
import { openWhatsApp } from '../../utils/whatsapp';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact & Enquiries | Sama Events';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-editorial-page">
      {/* 1. Header */}
      <section className="contact-editorial-hero">
        <div className="container">
          <div className="contact-editorial-hero__content">
            <span className="eyebrow-label">GET IN TOUCH</span>
            <h1 className="contact-editorial-hero__title font-serif">LET'S TALK</h1>
            <p className="contact-editorial-hero__subtitle">
              Have questions regarding Noor-E-Ramzan 2.0 stalls, upcoming festivals, or partnerships? Reach out to the Sama Events desk.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="section-light contact-main-section">
        <div className="container">
          <div className="contact-editorial-grid">
            {/* Direct Contact Column */}
            <div className="contact-direct-col">
              <span className="eyebrow-label">DIRECT CHANNELS</span>
              <h2 className="contact-direct-heading font-serif">Reach Sama Events</h2>

              <div className="contact-cards-stack">
                {/* Phone */}
                <div className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-info-card__details">
                    <span className="contact-info-card__label">Phone</span>
                    <a href={`tel:${siteData.contact.phoneDial}`} className="contact-info-card__value">
                      {siteData.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp with contextual actions */}
                <div className="contact-info-card contact-info-card--wa">
                  <div className="contact-info-card__icon contact-info-card__icon--wa">
                    <MessageCircle size={20} />
                  </div>
                  <div className="contact-info-card__details">
                    <span className="contact-info-card__label">WhatsApp</span>
                    <span className="contact-info-card__value">{siteData.contact.phoneDisplay}</span>
                    <div className="contact-wa-pills">
                      <button
                        type="button"
                        className="contact-wa-pill"
                        onClick={() => openWhatsApp({ type: 'general' })}
                      >
                        General Enquiry
                      </button>
                      <button
                        type="button"
                        className="contact-wa-pill"
                        onClick={() => openWhatsApp({ type: 'event', eventName: 'Noor-E-Ramzan 2.0' })}
                      >
                        Event Enquiry
                      </button>
                      <button
                        type="button"
                        className="contact-wa-pill"
                        onClick={() => openWhatsApp({ type: 'stall', eventName: 'Noor-E-Ramzan 2.0' })}
                      >
                        Stall Enquiry
                      </button>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-info-card__details">
                    <span className="contact-info-card__label">Email</span>
                    <a href={`mailto:${siteData.contact.email}`} className="contact-info-card__value">
                      {siteData.contact.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-info-card__details">
                    <span className="contact-info-card__label">Location</span>
                    <span className="contact-info-card__value">
                      {siteData.contact.city}, {siteData.contact.state}, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-col">
              <span className="eyebrow-label">SEND A MESSAGE</span>
              <h2 className="contact-form-heading font-serif">Submit an Enquiry</h2>
              <ContactForm theme="light" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
