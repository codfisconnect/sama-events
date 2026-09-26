import React, { useEffect } from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ContactForm from '../../components/ContactForm/ContactForm';
import Button from '../../components/Button/Button';
import { siteData } from '../../data/siteData';
import { brandImages } from '../../data/images';
import { openWhatsApp } from '../../utils/whatsapp';
import { MapPin, Phone, Mail, MessageCircle, Clock, Store, HelpCircle } from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact & Stall Enquiries | Sama Events';
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: 'How do I reserve an exhibition or food stall for Noor-E-Ramzan 2.0?',
      a: 'You can submit the enquiry form on this page or message us directly on WhatsApp with your preferred stall type (8x6 ft exhibition or 6x8 ft / 6x4 ft food stall). Our team will share the rate card and available layout options.',
    },
    {
      q: 'What are the official dates and location of Noor-E-Ramzan 2.0?',
      a: 'The festival runs for 12 continuous days from 25 February to 08 March 2027 at the YMCA Grounds, Royapettah, Chennai.',
    },
    {
      q: 'Can brands partner with or sponsor Sama Events?',
      a: 'Yes, we offer multiple branding, gate naming, and food court sponsorship tiers for corporate and consumer brands. Select "Sponsorship" in the enquiry form or contact our partnership desk.',
    },
    {
      q: 'Are stall allotments on a first-come, first-served basis?',
      a: 'Yes. Corner stalls and high-footfall aisle fronts are confirmed upon completion of booking requirements.',
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${brandImages.contactHeroBg})` }}
      >
        <div className="contact-hero__overlay" />
        <div className="container contact-hero__container">
          <span className="badge-gold">COMMUNICATION & BOOKINGS</span>
          <h1 className="contact-hero__title font-serif">
            Let’s Connect & Collaborate
          </h1>
          <p className="contact-hero__subtitle">
            Whether you want to book a stall for Noor-E-Ramzan 2.0, propose a brand sponsorship, or enquire about our upcoming festivals, our team is at your service.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section-light contact-main-section">
        <div className="container">
          <div className="contact-page__grid">
            {/* Left Info Column */}
            <div className="contact-page__info-col">
              <span className="badge-gold">OFFICE & DIRECT CONTACT</span>
              <h2 className="contact-page__info-title font-serif">
                Reach Out to Sama Events
              </h2>
              <p className="contact-page__info-desc">
                Have an urgent enquiry about stall rates or event floor plans? Our organizing committee responds promptly across phone, email, and WhatsApp.
              </p>

              <div className="contact-page__cards-list">
                {/* Phone Card */}
                <div className="contact-page__card">
                  <div className="contact-page__card-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="contact-page__card-label">Direct Phone Line</span>
                    <a href={`tel:${siteData.contact.phoneDial}`} className="contact-page__card-value">
                      {siteData.contact.phoneDisplay}
                    </a>
                    <span className="contact-page__card-sub">Mon – Sat, 10 AM to 8 PM</span>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="contact-page__card contact-page__card--wa" id="whatsapp">
                  <div className="contact-page__card-icon contact-page__card-icon--wa">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <span className="contact-page__card-label">WhatsApp Quick Desk</span>
                    <strong className="contact-page__card-value">Instant Chat Assistance</strong>
                    <div className="contact-page__wa-buttons">
                      <Button
                        variant="whatsapp"
                        size="sm"
                        onClick={() => openWhatsApp({ type: 'stall' })}
                      >
                        Stall Booking Chat
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openWhatsApp({ type: 'general' })}
                      >
                        General Chat
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="contact-page__card">
                  <div className="contact-page__card-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="contact-page__card-label">Official Email</span>
                    <a href={`mailto:${siteData.contact.email}`} className="contact-page__card-value">
                      {siteData.contact.email}
                    </a>
                    <span className="contact-page__card-sub">For formal proposals & corporate sponsorship</span>
                  </div>
                </div>

                {/* Location Card */}
                <div className="contact-page__card">
                  <div className="contact-page__card-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="contact-page__card-label">Headquarters</span>
                    <strong className="contact-page__card-value">
                      {siteData.contact.city}, {siteData.contact.state}
                    </strong>
                    <span className="contact-page__card-sub">Chennai, Tamil Nadu - {siteData.contact.pincode}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="contact-page__form-col">
              <ContactForm theme="light" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Cream) */}
      <section className="section-cream">
        <div className="container">
          <SectionHeading
            badge="FREQUENTLY ASKED QUESTIONS"
            title="Stall Booking & Participation Guidance"
            subtitle="Clear answers to common exhibitor questions regarding Noor-E-Ramzan 2.0."
            align="center"
            theme="light"
          />

          <div className="contact-faq__grid">
            {faqs.map((faq, idx) => (
              <div key={idx} className="contact-faq__card">
                <div className="contact-faq__icon">
                  <HelpCircle size={20} />
                </div>
                <div>
                  <h4 className="contact-faq__q font-serif">{faq.q}</h4>
                  <p className="contact-faq__a">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
