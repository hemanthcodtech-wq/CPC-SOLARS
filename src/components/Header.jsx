import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const serviceItems = [
    { name: '01. Residential Solar', path: '/services/residential-solar' },
    { name: '02. Commercial Solar', path: '/services/commercial-solar' },
    { name: '03. Industrial Solar', path: '/services/industrial-solar' },
    { name: '04. Utility-Scale Solar', path: '/services/utility-scale-solar' },
    { name: '05. Solar EPC Solutions', path: '/services/solar-epc' },
    { name: '06. Operations & Maintenance', path: '/services/solar-maintenance' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About Us
          </NavLink>

          {/* Services Dropdown */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `nav-link dropdown-trigger ${isActive ? 'active' : ''}`
              }
            >
              Services <ChevronDown size={14} className="dropdown-arrow" />
            </NavLink>

            {servicesDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/services" className="dropdown-item dropdown-item-all">
                  <strong>All Solar Services →</strong>
                </Link>
                {serviceItems.map((item) => (
                  <Link key={item.path} to={item.path} className="dropdown-item">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/why-solar"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Why Solar
          </NavLink>
          <NavLink
            to="/awards"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Awards
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* Action Button & Quick Contacts */}
        <div className="header-action">
          <div className="header-contact-quick">
            <a
              href="tel:+919493163424"
              className="header-quick-icon header-call-icon"
              title="Call CPC Solar: +91 94931 63424"
              aria-label="Call +91 94931 63424"
            >
              <Phone size={17} />
            </a>
            <a
              href="https://wa.me/919493163424?text=Hello%20Crystal%20Power%20Controls,%20I%20am%20interested%20in%20a%20solar%20energy%20solution."
              target="_blank"
              rel="noopener noreferrer"
              className="header-quick-icon header-wa-icon"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>

          <Link to="/contact" className="btn-quote">
            <span>Get a Quote</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu with Staggered Entrance Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="mobile-menu-inner"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.05 }
                },
                closed: {
                  transition: { staggerChildren: 0.03, staggerDirection: -1 }
                }
              }}
            >
              <motion.div
                variants={{
                  closed: { opacity: 0, x: -16 },
                  open: { opacity: 1, x: 0 }
                }}
              >
                <NavLink to="/" end className="mobile-nav-link">
                  Home
                </NavLink>
              </motion.div>

              <motion.div
                variants={{
                  closed: { opacity: 0, x: -16 },
                  open: { opacity: 1, x: 0 }
                }}
              >
                <NavLink to="/about" className="mobile-nav-link">
                  About Us
                </NavLink>
              </motion.div>

              <motion.div
                className="mobile-dropdown-section"
                variants={{
                  closed: { opacity: 0, x: -16 },
                  open: { opacity: 1, x: 0 }
                }}
              >
                <NavLink to="/services" className="mobile-nav-link">
                  Services
                </NavLink>
                <div className="mobile-sublinks">
                  {serviceItems.map((item) => (
                    <Link key={item.path} to={item.path} className="mobile-sublink">
                      • {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={{
                  closed: { opacity: 0, x: -16 },
                  open: { opacity: 1, x: 0 }
                }}
              >
                <NavLink to="/projects" className="mobile-nav-link">
                  Projects
                </NavLink>
              </motion.div>

              <motion.div
                variants={{
                  closed: { opacity: 0, x: -16 },
                  open: { opacity: 1, x: 0 }
                }}
              >
                <NavLink to="/gallery" className="mobile-nav-link">
                  Gallery
                </NavLink>
              </motion.div>

              <motion.div
                variants={{
                  closed: { opacity: 0, x: -16 },
                  open: { opacity: 1, x: 0 }
                }}
              >
                <NavLink to="/why-solar" className="mobile-nav-link">
                  Why Solar
                </NavLink>
              </motion.div>

              <motion.div
                variants={{
                  closed: { opacity: 0, x: -16 },
                  open: { opacity: 1, x: 0 }
                }}
              >
                <NavLink to="/awards" className="mobile-nav-link">
                  Awards
                </NavLink>
              </motion.div>

              <motion.div
                variants={{
                  closed: { opacity: 0, x: -16 },
                  open: { opacity: 1, x: 0 }
                }}
              >
                <NavLink to="/contact" className="mobile-nav-link">
                  Contact
                </NavLink>
              </motion.div>

              <motion.div
                className="mobile-action"
                variants={{
                  closed: { opacity: 0, y: 12 },
                  open: { opacity: 1, y: 0 }
                }}
              >
                <div className="mobile-contact-quick-row">
                  <a href="tel:+919493163424" className="mobile-quick-call">
                    <Phone size={17} />
                    <span>Call +91 94931 63424</span>
                  </a>
                  <a
                    href="https://wa.me/919493163424?text=Hello%20Crystal%20Power%20Controls,%20I%20am%20interested%20in%20a%20solar%20energy%20solution."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-quick-wa"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
                <Link to="/contact" className="btn-quote mobile-btn">
                  <span>Get a Quote</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
