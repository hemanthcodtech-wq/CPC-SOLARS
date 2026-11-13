import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import CustomCursor from './components/CustomCursor';
import FloatingContact from './components/FloatingContact';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import WhySolar from './pages/WhySolar';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import TermsAndConditions from './pages/TermsAndConditions';
import Awards from './pages/Awards';

// Scroll to top automatically and reliably when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useLayoutEffect(() => {
    // Immediate instantaneous scroll
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Secondary backup in case AnimatePresence or page transitions delay layout shift
    const t = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 20);

    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}

// Page transition wrapper component
function PageTransition({ children }) {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();
  // Splash screen state - check session storage to only show on first visit per session
  const [showSplash, setShowSplash] = useState(() => {
    try {
      const hasSeen = sessionStorage.getItem('cpc_splash_seen');
      return !hasSeen;
    } catch {
      return true;
    }
  });

  const handleSplashComplete = () => {
    setShowSplash(false);
    try {
      sessionStorage.setItem('cpc_splash_seen', 'true');
    } catch (e) {
      console.warn('SessionStorage unavailable', e);
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CustomCursor />
      <FloatingContact />
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <ScrollToTop />
      <Header />
      <main style={{ flexGrow: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/services/:serviceSlug" element={<PageTransition><ServiceDetail /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/projects/:projectSlug" element={<PageTransition><ProjectDetail /></PageTransition>} />
            <Route path="/why-solar" element={<PageTransition><WhySolar /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/awards" element={<PageTransition><Awards /></PageTransition>} />
            <Route path="/terms-and-conditions" element={<PageTransition><TermsAndConditions /></PageTransition>} />
            <Route path="*" element={<PageTransition><Home /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
