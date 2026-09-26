import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { navigationLinks } from '../../data/navigation';
import { siteData } from '../../data/siteData';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import Button from '../Button/Button';
import { Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(40);
  const navigate = useNavigate();

  const handleEnquireClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/contact');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sama-navbar ${isScrolled ? 'sama-navbar--scrolled' : ''}`}>
      <div className="container sama-navbar__inner">
        {/* Brand Logo */}
        <Link to="/" className="sama-navbar__brand" onClick={closeMobileMenu}>
          <div className="sama-navbar__logo-crest">
            <Sparkles size={20} className="sama-navbar__crest-icon" />
          </div>
          <div className="sama-navbar__brand-text">
            <span className="sama-navbar__brand-name font-serif">{siteData.name.toUpperCase()}</span>
            <span className="sama-navbar__brand-tagline">EXPERIENCES & FESTIVALS</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="sama-navbar__nav" aria-label="Main Navigation">
          <ul className="sama-navbar__list">
            {navigationLinks.map((item) => (
              <li key={item.path} className="sama-navbar__item">
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `sama-navbar__link ${isActive ? 'sama-navbar__link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Action CTA */}
        <div className="sama-navbar__actions">
          <Button
            variant="primary"
            size="sm"
            onClick={handleEnquireClick}
            className="sama-navbar__cta-btn"
          >
            Book / Enquire
          </Button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="sama-navbar__hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`sama-navbar__mobile-drawer ${
          isMobileMenuOpen ? 'sama-navbar__mobile-drawer--open' : ''
        }`}
      >
        <div className="sama-navbar__mobile-content">
          <ul className="sama-navbar__mobile-list">
            {navigationLinks.map((item) => (
              <li key={item.path} className="sama-navbar__mobile-item">
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `sama-navbar__mobile-link ${isActive ? 'sama-navbar__mobile-link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="sama-navbar__mobile-actions">
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={handleEnquireClick}
            >
              Book / Enquire
            </Button>
            <Button
              variant="whatsapp"
              size="md"
              fullWidth
              icon={<MessageCircle size={18} />}
              onClick={() => {
                closeMobileMenu();
                navigate('/contact#whatsapp');
              }}
            >
              WhatsApp Support
            </Button>
          </div>

          <div className="sama-navbar__mobile-footer">
            <p>{siteData.tagline}</p>
            <span>Chennai, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
