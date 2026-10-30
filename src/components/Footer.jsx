import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Globe, ArrowRight, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="site-footer">
      {/* Main Footer Links */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <Logo light={true} />
            <p className="brand-tagline">
              Your Trusted Solar Company.
            </p>
            <p className="brand-summary">
              Providing comprehensive solar energy solutions through engineering excellence,
              quality installations and sustainable energy practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/why-solar">Why Solar?</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-nav">
              <li><Link to="/services">Residential Solar</Link></li>
              <li><Link to="/services">Commercial Solar</Link></li>
              <li><Link to="/services">Industrial Solar</Link></li>
              <li><Link to="/services">Utility-Scale Projects</Link></li>
              <li><Link to="/services">Solar EPC</Link></li>
              <li><Link to="/services">Operations & Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact Information</h4>
            <ul className="contact-list">
              <li>
                <Globe size={18} className="contact-icon" />
                <a href="https://www.crystalpowercontrols.com" target="_blank" rel="noopener noreferrer">
                  www.crystalpowercontrols.com
                </a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:info@crystalpowercontrols.com">info@crystalpowercontrols.com</a>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+919493163424">+91 94931 63424</a>
              </li>
              <li>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#4ade80', fontWeight: 700, fontSize: '13px' }}>GSTIN:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600, fontFamily: 'monospace', letterSpacing: '0.05em' }}>37AAYFM9190M1Z1</span>
                </div>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 600 }}>Office Locations:</div>
                  <div style={{ color: '#94a3b8' }}>Ongole & Hyderabad</div>
                </div>
              </li>
            </ul>

            <div className="social-links">
              <a href="https://facebook.com/crystalpowercontrols" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://instagram.com/crystalpowercontrols" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/crystal-power-controls" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-flex">
          <div>
            © 2026 Crystal Power Controls. All Rights Reserved. • GSTIN: 37AAYFM9190M1Z1 • <Link to="/terms-and-conditions" style={{ color: '#86efac', textDecoration: 'underline' }}>Terms & Delivery Policy</Link>
          </div>
          <div className="bottom-tagline">
            Clean Energy. Sustainable Tomorrow.
          </div>
        </div>
      </div>

      {/* Floating Animated Back-To-Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
