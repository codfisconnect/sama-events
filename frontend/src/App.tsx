import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routes/AppRoutes';
import './App.css';

export const App: React.FC = () => {
  return (
    <div className="sama-app-shell">
      <ScrollToTop />
      <Navbar />
      <main className="sama-app-main">
        <AppRoutes />
      </main>
      <Footer />
      <WhatsAppButton eventName="Noor-E-Ramzan 2.0" />
    </div>
  );
};

export default App;
