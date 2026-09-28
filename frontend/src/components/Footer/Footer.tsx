import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../../data/siteData';
import { openWhatsApp } from '../../utils/whatsapp';
import { Sparkles, MessageCircle, Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sama-footer" aria-label="Sama Events Footer">
      <div className="container">
        {/* ===================================================================
            1. DESKTOP & TABLET MULTI-COLUMN COMPOSITION (> 768px)
            =================================================================== */}
        <div className="sama-footer__desktop-view">
          <div className="sama-footer__grid">
            {/* Column 1: Brand Identity */}
            <div className="sama-footer__col-brand">
              <Link to="/" className="sama-footer__logo" aria-label="Sama Events Home">
                <div className="sama-footer__logo-crest" aria-hidden="true">
                  <Sparkles size={18} />
                </div>
                <div>
                  <span className="sama-footer__brand-title font-serif">SAMA EVENTS</span>
                  <span className="sama-footer__brand-sub">Experiences & Festivals</span>
                </div>
              </Link>
              <p className="sama-footer__tagline">
                Creating experiences worth remembering.
              </p>
              <div className="sama-footer__socials" aria-label="Social media channels">
                <a
                  href={siteData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Sama Events on Instagram"
                  className="sama-footer__social-btn"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href={siteData.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Sama Events on Facebook"
                  className="sama-footer__social-btn"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <button
                  onClick={() => openWhatsApp({ type: 'general' })}
                  aria-label="Chat with Sama Events on WhatsApp"
                  className="sama-footer__social-btn sama-footer__social-btn--whatsapp"
                  type="button"
                >
                  <MessageCircle size={17} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Column 2: Events Links */}
            <div className="sama-footer__col-links">
              <h3 className="sama-footer__heading">EVENTS</h3>
              <ul className="sama-footer__list">
                <li>
                  <Link to="/events/noor-e-ramzan-2" className="sama-footer__nav-link">
                    <span>Noor-E-Ramzan 2.0</span>
                    <ArrowUpRight size={13} className="sama-footer__arrow" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link to="/events/noor-e-ramzan-1" className="sama-footer__nav-link">
                    <span>Noor-E-Ramzan 1.0</span>
                    <ArrowUpRight size={13} className="sama-footer__arrow" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="sama-footer__nav-link">
                    <span>Upcoming Events</span>
                    <ArrowUpRight size={13} className="sama-footer__arrow" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company Links */}
            <div className="sama-footer__col-links">
              <h3 className="sama-footer__heading">COMPANY</h3>
              <ul className="sama-footer__list">
                <li>
                  <Link to="/about" className="sama-footer__nav-link">
                    <span>About</span>
                    <ArrowUpRight size={13} className="sama-footer__arrow" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="sama-footer__nav-link">
                    <span>Gallery</span>
                    <ArrowUpRight size={13} className="sama-footer__arrow" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="sama-footer__nav-link">
                    <span>Contact</span>
                    <ArrowUpRight size={13} className="sama-footer__arrow" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Details */}
            <div className="sama-footer__col-contact">
              <h3 className="sama-footer__heading">CONTACT</h3>
              <div className="sama-footer__contact-items">
                <div className="sama-footer__contact-row">
                  <MapPin size={16} className="sama-footer__icon" aria-hidden="true" />
                  <span>Chennai • Tamil Nadu</span>
                </div>
                <div className="sama-footer__contact-row">
                  <Phone size={16} className="sama-footer__icon" aria-hidden="true" />
                  <a href={`tel:${siteData.contact.phoneDial}`} className="sama-footer__contact-link">
                    {siteData.contact.phoneDisplay}
                  </a>
                </div>
                <div className="sama-footer__contact-row">
                  <Mail size={16} className="sama-footer__icon" aria-hidden="true" />
                  <a href={`mailto:${siteData.contact.email}`} className="sama-footer__contact-link">
                    {siteData.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            2. MOBILE COMPACT COMPOSITION (<= 768px)
            Target height: ~380–450px total
            =================================================================== */}
        <div className="sama-footer__mobile-view">
          {/* Brand Header */}
          <div className="sama-footer__mobile-brand">
            <Link to="/" className="sama-footer__mobile-logo" aria-label="Sama Events Home">
              <span className="sama-footer__brand-title font-serif">SAMA EVENTS</span>
              <span className="sama-footer__brand-sub">Experiences & Festivals</span>
            </Link>
            <p className="sama-footer__mobile-tagline">
              Creating experiences worth remembering.
            </p>
            {/* Social Icons Row */}
            <div className="sama-footer__socials sama-footer__socials--mobile" aria-label="Social media channels">
              <a
                href={siteData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="sama-footer__social-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={siteData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="sama-footer__social-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <button
                onClick={() => openWhatsApp({ type: 'general' })}
                aria-label="WhatsApp"
                className="sama-footer__social-btn sama-footer__social-btn--whatsapp"
                type="button"
              >
                <MessageCircle size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* 2-Column Side-by-Side Links */}
          <div className="sama-footer__mobile-links-grid">
            <div className="sama-footer__mobile-col">
              <span className="sama-footer__heading">EVENTS</span>
              <ul className="sama-footer__list">
                <li><Link to="/events/noor-e-ramzan-2" className="sama-footer__nav-link">Noor-E-Ramzan 2.0</Link></li>
                <li><Link to="/events/noor-e-ramzan-1" className="sama-footer__nav-link">Noor-E-Ramzan 1.0</Link></li>
                <li><Link to="/events" className="sama-footer__nav-link">Upcoming Events</Link></li>
              </ul>
            </div>
            <div className="sama-footer__mobile-col">
              <span className="sama-footer__heading">COMPANY</span>
              <ul className="sama-footer__list">
                <li><Link to="/about" className="sama-footer__nav-link">About</Link></li>
                <li><Link to="/gallery" className="sama-footer__nav-link">Gallery</Link></li>
                <li><Link to="/contact" className="sama-footer__nav-link">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Direct Line */}
          <div className="sama-footer__mobile-contact">
            <span className="sama-footer__mobile-location">CHENNAI • TAMIL NADU</span>
            <a href={`tel:${siteData.contact.phoneDial}`} className="sama-footer__mobile-phone">
              {siteData.contact.phoneDisplay}
            </a>
          </div>
        </div>

        {/* ===================================================================
            3. FOOTER BOTTOM COPYRIGHT BAR
            =================================================================== */}
        <div className="sama-footer__bottom">
          <p className="sama-footer__copyright">
            © {currentYear} {siteData.name}. All rights reserved.
          </p>
          <div className="sama-footer__bottom-phrase font-serif">
            <span>Where Every Event Becomes an Experience</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
