import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Home, Compass } from 'lucide-react';
import './NotFound.css';

export const NotFound: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="container not-found-page__container">
        <span className="badge-gold">404 ERROR</span>
        <h1 className="not-found-page__title font-serif">Page Not Found</h1>
        <p className="not-found-page__desc">
          The event page or resource you are looking for has moved or does not exist. Explore our current festival lineup or return to the homepage.
        </p>
        <div className="not-found-page__actions">
          <Link to="/">
            <Button variant="primary" size="lg" icon={<Home size={18} />}>
              Return to Homepage
            </Button>
          </Link>
          <Link to="/events">
            <Button variant="outline" size="lg" icon={<Compass size={18} />}>
              Explore Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
