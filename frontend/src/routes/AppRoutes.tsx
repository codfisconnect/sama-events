import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Events from '../pages/Events/Events';
import EventDetails from '../pages/EventDetails/EventDetails';
import NoorERamzan1 from '../pages/NoorERamzan1/NoorERamzan1';
import About from '../pages/About/About';
import Gallery from '../pages/Gallery/Gallery';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/noor-e-ramzan-1" element={<NoorERamzan1 />} />
      <Route path="/events/:eventSlug" element={<EventDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
