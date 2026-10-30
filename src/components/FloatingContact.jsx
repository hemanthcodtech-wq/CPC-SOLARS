import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import './FloatingContact.css';

/**
 * Floating Quick Contact Widget (WhatsApp & Call)
 * - Positioned on bottom-left to avoid colliding with back-to-top button on bottom-right
 * - Smooth entrance and pulsing ambient glow
 * - Opens direct WhatsApp chat and telephone dialing
 */
export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+919493163424';
  const whatsappUrl = 'https://wa.me/919493163424?text=Hello%20Crystal%20Power%20Controls,%20I%20am%20interested%20in%20a%20solar%20energy%20solution.';

  return (
    <div className="floating-contact-container">
      {/* Expanded quick action pill list */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="floating-action-menu"
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* WhatsApp option */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="floating-sub-btn whatsapp-btn"
              aria-label="Chat on WhatsApp"
            >
              <div className="sub-icon-box wa-color">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div className="sub-btn-info">
                <span className="sub-btn-title">WhatsApp Chat</span>
                <span className="sub-btn-desc">Instant Project Query</span>
              </div>
            </a>

            {/* Direct Call option */}
            <a
              href={`tel:${phoneNumber}`}
              className="floating-sub-btn call-btn"
              aria-label="Direct Phone Call"
            >
              <div className="sub-icon-box call-color">
                <Phone size={18} />
              </div>
              <div className="sub-btn-info">
                <span className="sub-btn-title">Direct Call</span>
                <span className="sub-btn-desc">+91 94931 63424</span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`floating-main-trigger ${isOpen ? 'active' : ''}`}
        aria-label="Open contact quick options"
      >
        <span className="trigger-pulse-glow" />
        <div className="trigger-icon-wrap">
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <div className="dual-contact-icons">
              <MessageCircle size={24} className="wa-bubble-icon" />
            </div>
          )}
        </div>
      </button>
    </div>
  );
}

