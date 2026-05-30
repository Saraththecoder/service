import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Dynamic lazy-loaded routes for optimal LCP & Core Web Vitals
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AcServicePage = lazy(() => import('./pages/AcServicePage'));
const FridgeServicePage = lazy(() => import('./pages/FridgeServicePage'));
const WasherServicePage = lazy(() => import('./pages/WasherServicePage'));
const BookPage = lazy(() => import('./pages/BookPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Premium, lightweight page skeleton spinner loader
const PageLoader = () => (
  <div className="min-h-[60vh] w-full flex flex-col items-center justify-center bg-white text-slate-900 gap-4">
    <div className="relative flex items-center justify-center w-12 h-12">
      <div className="absolute inset-0 rounded-full border-3 border-[#1565FF]/10 animate-pulse" />
      <div className="absolute inset-0 rounded-full border-3 border-t-[#1565FF] animate-spin" style={{ animationDuration: '0.7s' }} />
    </div>
    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1565FF]/70 animate-pulse">
      Loading Dispatcher...
    </span>
  </div>
);

// Automatic Scroll Restoration on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

// Route wrapper logic for cross-component redirects (e.g. CTA selectors)
const AppContent = () => {
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
    navigate('/book');
  };

  const handleResetSelectedService = () => {
    setSelectedService('');
  };

  const handleBookTrigger = () => {
    navigate('/book');
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-500/20 selection:text-blue-700">
      
      {/* Scroll Restoration */}
      <ScrollToTop />

      {/* Sticky Frost Glass Navbar */}
      <Navbar />

      {/* Main Multi-Page Router Area with Dynamic Suspense Loading */}
      <main className="w-full">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route 
              path="/" 
              element={<Home onBookClick={handleBookTrigger} />} 
            />
            <Route 
              path="/services" 
              element={<ServicesPage onSelectService={handleSelectService} />} 
            />
            <Route 
              path="/services/ac-repair-nellore" 
              element={<AcServicePage />} 
            />
            <Route 
              path="/services/refrigerator-repair-nellore" 
              element={<FridgeServicePage />} 
            />
            <Route 
              path="/services/washing-machine-repair-nellore" 
              element={<WasherServicePage />} 
            />
            <Route 
              path="/book" 
              element={
                <BookPage 
                  selectedService={selectedService} 
                  resetSelectedService={handleResetSelectedService} 
                />
              } 
            />
            <Route 
              path="/faqs" 
              element={<FaqPage />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
          </Routes>
        </Suspense>
      </main>

      {/* Premium Graphical Footer */}
      <Footer />

      {/* Floating Call & WhatsApp support links */}
      <FloatingActions />

    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
