import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../../data/siteData';
import { footerLinks } from '../../data/navigation';
import { openWhatsApp } from '../../utils/whatsapp';
import { Sparkles, MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sama-footer">
      <div className="container sama-footer__main">
        {/* Brand Column */}
        <div className="sama-footer__brand-col">
          <Link to="/" className="sama-footer__logo">
            <div className="sama-footer__logo-crest">
              <Sparkles size={20} />
            </div>
            <span className="sama-footer__brand-title font-serif">{siteData.name.toUpperCase()}</span>
          </Link>
          <p className="sama-footer__description">
            {siteData.description}
          </p>
          <div className="sama-footer__socials">
            <a
              href={siteData.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="sama-footer__social-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <button
              onClick={() => openWhatsApp({ type: 'general' })}
              aria-label="WhatsApp"
              className="sama-footer__social-btn sama-footer__social-btn--whatsapp"
            >
              <MessageCircle size={18} />
            </button>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="sama-footer__links-col">
          <h4 className="sama-footer__col-heading">Events & Editions</h4>
          <ul className="sama-footer__list">
            {footerLinks.events.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="sama-footer__link">
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="sama-footer__link-arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links Column */}
        <div className="sama-footer__links-col">
          <h4 className="sama-footer__col-heading">Company & Enquiries</h4>
          <ul className="sama-footer__list">
            {footerLinks.company.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="sama-footer__link">
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="sama-footer__link-arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="sama-footer__contact-col">
          <h4 className="sama-footer__col-heading">Headquarters</h4>
          <div className="sama-footer__contact-list">
            <div className="sama-footer__contact-item">
              <MapPin size={18} className="sama-footer__contact-icon" />
              <span>{siteData.contact.city}, {siteData.contact.state}, {siteData.contact.country}</span>
            </div>
            <div className="sama-footer__contact-item">
              <Phone size={18} className="sama-footer__contact-icon" />
              <a href={`tel:${siteData.contact.phoneDial}`}>{siteData.contact.phoneDisplay}</a>
            </div>
            <div className="sama-footer__contact-item">
              <Mail size={18} className="sama-footer__contact-icon" />
              <a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a>
            </div>
          </div>
          <div className="sama-footer__badge">
            <span>Official Event Organizer & Promoter</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="sama-footer__bottom">
        <div className="container sama-footer__bottom-inner">
          <p>© {currentYear} {siteData.name}. All rights reserved.</p>
          <div className="sama-footer__bottom-links">
            <span>Where Every Event Becomes an Experience</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
