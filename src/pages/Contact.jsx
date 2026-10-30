import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import MagneticButton from '../components/MagneticButton';
import {
  Phone,
  MapPin,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Building,
  ShieldCheck,
  Calendar,
  MessageSquare,
  Clock,
  ArrowRight,
  Sun,
  FileCheck,
  Check
} from 'lucide-react';
import './Contact.css';

const CONTACT_FAQS = [
  {
    q: 'Can I request a solar quotation?',
    a: 'Yes. Submit your project details through the enquiry form or contact our team directly at +91 94931 63424 to receive a personalized feasibility review and quote.'
  },
  {
    q: 'Do you provide commercial and industrial solar solutions?',
    a: 'Yes. Crystal Power Controls works across different customer segments, including commercial rooftops, industrial factories, educational institutions, cold storages, and dairy processing plants.'
  },
  {
    q: 'Can I discuss CAPEX and OPEX options?',
    a: 'Yes. Contact our team to understand the available investment models and their suitability for your project, whether you prefer 100% self-owned asset savings or zero-upfront PPA structures.'
  },
  {
    q: 'Do you handle solar installation projects?',
    a: 'Crystal Power Controls provides solar project design, engineering, equipment supply, on-site installation, CEIG compliance testing, and formal grid commissioning services.'
  },
  {
    q: 'How can I schedule a consultation?',
    a: 'Call +91 94931 63424 or submit the enquiry form below with your property details.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    cityLocation: '',
    customerType: 'Commercial',
    solarServiceRequired: 'Commercial Solar',
    approximateCapacity: '10–50 kW',
    investmentPreference: 'CAPEX',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Build formatted message for WhatsApp
    const lines = [
      `*New Contact Enquiry - Crystal Power Controls*`,
      `---------------------------------------`,
      `👤 *Name:* ${formData.fullName || 'Not provided'}`,
      formData.companyName ? `🏢 *Company:* ${formData.companyName}` : null,
      `📞 *Mobile:* ${formData.phoneNumber || 'Not provided'}`,
      `✉️ *Email:* ${formData.emailAddress || 'Not provided'}`,
      `📍 *City/Location:* ${formData.cityLocation || 'Not provided'}`,
      `🏷️ *Customer Type:* ${formData.customerType || 'Not specified'}`,
      `⚡ *Service Required:* ${formData.solarServiceRequired || 'Not specified'}`,
      `🔋 *Capacity:* ${formData.approximateCapacity || 'Not specified'}`,
      `💼 *Model Preference:* ${formData.investmentPreference || 'CAPEX'}`,
      formData.message ? `📝 *Message:* ${formData.message}` : null
    ].filter(Boolean);

    const waText = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/919493163424?text=${waText}`;

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div className="contact-main-page">
      {/* ========================================================
          HERO SECTION (ENHANCED PREMIUM)
          ======================================================== */}
      <section className="contact-hero-section">
        <div className="contact-hero-bg">
          <img
            src="/images/hero-banner-2.jpg"
            alt="Crystal Power Controls Engineering Hub"
            className="contact-hero-img"
          />
          <div className="contact-hero-overlay"></div>
          <div className="contact-hero-glow"></div>
        </div>

        <div className="container contact-hero-container">
          <div className="contact-hero-grid">
            <div className="contact-hero-content">
              <motion.div
                className="contact-eyebrow-pill"
                initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Sparkles size={14} className="badge-sparkle" />
                <span>CONTACT CRYSTAL POWER CONTROLS</span>
              </motion.div>

              <motion.h1
                className="contact-hero-title"
                initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                Let's Power Your Future with{' '}
                <span className="contact-hero-highlight">Solar Energy.</span>
              </motion.h1>

              <motion.p
                className="contact-hero-lead"
                initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Have questions about solar energy or planning a solar installation? Our
                engineering team is ready to understand your requirements and help you
                explore the right solar solution.
              </motion.p>

              <motion.div
                className="contact-hero-buttons"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                <MagneticButton>
                  <a href="#enquiry-section" className="btn-hero-primary">
                    <span>Get a Solar Consultation</span>
                    <ArrowRight size={17} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="tel:+919493163424" className="btn-hero-secondary">
                    <Phone size={16} />
                    <span>Call +91 94931 63424</span>
                  </a>
                </MagneticButton>
              </motion.div>

              {/* Trust Indicators */}
              <div className="contact-trust-strip">
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>Direct Engineering Support</span>
                </div>
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>Offices: Ongole & Hyderabad</span>
                </div>
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>GSTIN Registered EPC</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Contact Quick Card */}
            <div className="contact-hero-card-col">
              <div className="contact-floating-glass-card">
                <div className="contact-glass-header">
                  <div className="contact-glass-icon-circle">
                    <Sun size={26} color="#4ade80" />
                  </div>
                  <div>
                    <h3 className="contact-glass-title">Direct Consultation Line</h3>
                    <p className="contact-glass-sub">Mon – Sat: 9:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="contact-glass-info-list">
                  <div className="c-glass-row">
                    <span className="c-glass-label">Primary Hotline</span>
                    <a href="tel:+919493163424" className="c-glass-val">
                      +91 94931 63424
                    </a>
                  </div>
                  <div className="c-glass-row">
                    <span className="c-glass-label">Official Email</span>
                    <a href="mailto:info@crystalpowercontrols.com" className="c-glass-val">
                      info@crystalpowercontrols.com
                    </a>
                  </div>
                  <div className="c-glass-row">
                    <span className="c-glass-label">Corporate Hubs</span>
                    <span className="c-glass-val">Ongole & Hyderabad</span>
                  </div>
                  <div className="c-glass-row">
                    <span className="c-glass-label">GSTIN</span>
                    <span className="c-glass-val font-mono">37AAYFM9190M1Z1</span>
                  </div>
                </div>

                <div className="contact-glass-footer">
                  <ShieldCheck size={18} color="#22c55e" />
                  <span>Quick response within 24 business hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          1. GET IN TOUCH (3 Premium Information Cards)
          ======================================================== */}
      <section className="touch-cards-section">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">COMMUNICATION CHANNELS</span>
              <h2 className="section-title">Get in Touch with Our Team</h2>
              <p className="section-desc centered-desc">
                Whether you are planning a residential rooftop installation, a commercial
                solar project, or a large-scale industrial installation, connect with Crystal
                Power Controls.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="touch-cards-grid">
            {/* Card 1: Call Us */}
            <div className="touch-card">
              <div className="touch-icon-box">
                <Phone size={24} />
              </div>
              <h3 className="touch-card-title">Call Us</h3>
              <a href="tel:+919493163424" className="touch-card-link">
                +91 94931 63424
              </a>
              <p className="touch-card-p">
                Speak with our team about your solar project requirements, technical sizing, and timelines.
              </p>
            </div>

            {/* Card 2: Visit Our Offices */}
            <div className="touch-card touch-card-highlight">
              <div className="touch-icon-box">
                <MapPin size={24} />
              </div>
              <h3 className="touch-card-title">Visit Our Offices</h3>
              <div className="touch-office-names">
                <div>Ongole, Andhra Pradesh</div>
                <div>Hyderabad, Telangana</div>
              </div>
              <p className="touch-card-p">
                Contact our team for office location, local site visit scheduling, and appointment details.
              </p>
            </div>

            {/* Card 3: Business Enquiries */}
            <div className="touch-card">
              <div className="touch-icon-box">
                <Mail size={24} />
              </div>
              <h3 className="touch-card-title">Business Enquiries</h3>
              <a href="#enquiry-section" className="touch-card-link">
                Submit Online Form →
              </a>
              <p className="touch-card-p">
                For project discussions, technical proposals, and solar installation requirements, please submit the enquiry form below.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          2. SEND US AN ENQUIRY (Comprehensive Form with all Fields)
          ======================================================== */}
      <section className="contact-enquiry-section" id="enquiry-section">
        <div className="container">
          <Reveal direction="scale" delay={0.1}>
            <div className="enquiry-wrapper-box">
            <div className="enquiry-form-header text-center">
              <span className="section-kicker">PROJECT INTAKE</span>
              <h2 className="section-title">Tell Us About Your Solar Project</h2>
              <p className="section-desc centered-desc">
                Share a few details about your requirements. Our engineering team will get
                in touch to discuss the next steps and provide feasibility advice.
              </p>
            </div>

            {submitted ? (
              <div className="contact-success-card">
                <CheckCircle2 size={58} color="#16a34a" />
                <h3 className="success-heading">Thank you for contacting Crystal Power Controls!</h3>
                <p className="success-body">
                  Your enquiry has been received. Our team will contact you shortly at{' '}
                  <strong>{formData.phoneNumber}</strong> to discuss your requirements.
                </p>
                <button
                  className="btn-solid-green"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '20px' }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-full-form">
                <div className="form-two-col">
                  {/* Full Name */}
                  <div className="c-form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>

                  {/* Company / Organisation Name */}
                  <div className="c-form-group">
                    <label>Company / Organisation Name</label>
                    <input
                      type="text"
                      placeholder="Company, School, or Business Name"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-two-col">
                  {/* Phone Number */}
                  <div className="c-form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 94931 63424"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneNumber: e.target.value })
                      }
                    />
                  </div>

                  {/* Email Address */}
                  <div className="c-form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={formData.emailAddress}
                      onChange={(e) =>
                        setFormData({ ...formData, emailAddress: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-two-col">
                  {/* City / Location */}
                  <div className="c-form-group">
                    <label>City / Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ongole, Hyderabad, Guntur, Vijayawada"
                      value={formData.cityLocation}
                      onChange={(e) =>
                        setFormData({ ...formData, cityLocation: e.target.value })
                      }
                    />
                  </div>

                  {/* Customer Type */}
                  <div className="c-form-group">
                    <label>Customer Type *</label>
                    <select
                      value={formData.customerType}
                      onChange={(e) =>
                        setFormData({ ...formData, customerType: e.target.value })
                      }
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Agricultural">Agricultural</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-three-col">
                  {/* Solar Service Required */}
                  <div className="c-form-group">
                    <label>Solar Service Required *</label>
                    <select
                      value={formData.solarServiceRequired}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          solarServiceRequired: e.target.value
                        })
                      }
                    >
                      <option value="Residential Solar">Residential Solar</option>
                      <option value="Commercial Solar">Commercial Solar</option>
                      <option value="Industrial Solar">Industrial Solar</option>
                      <option value="Utility-Scale Solar">Utility-Scale Solar</option>
                      <option value="Solar EPC">Solar EPC</option>
                      <option value="Maintenance & Support">Maintenance & Support</option>
                    </select>
                  </div>

                  {/* Approximate System Capacity */}
                  <div className="c-form-group">
                    <label>Approximate Capacity</label>
                    <select
                      value={formData.approximateCapacity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          approximateCapacity: e.target.value
                        })
                      }
                    >
                      <option value="Below 10 kW">Below 10 kW</option>
                      <option value="10–50 kW">10–50 kW</option>
                      <option value="50–100 kW">50–100 kW</option>
                      <option value="100–500 kW">100–500 kW</option>
                      <option value="Above 500 kW">Above 500 kW</option>
                      <option value="Not Sure">Not Sure (Need guidance)</option>
                    </select>
                  </div>

                  {/* Investment Preference */}
                  <div className="c-form-group">
                    <label>Investment Preference</label>
                    <select
                      value={formData.investmentPreference}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          investmentPreference: e.target.value
                        })
                      }
                    >
                      <option value="CAPEX">CAPEX (Customer-Owned)</option>
                      <option value="OPEX">OPEX (PPA Model)</option>
                      <option value="Need Guidance">Need Guidance</option>
                    </select>
                  </div>
                </div>

                {/* Message / Project Details */}
                <div className="c-form-group full-width">
                  <label>Message / Project Details *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your rooftop area, monthly power consumption, sanction load or specific installation expectations..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <MagneticButton>
                  <button type="submit" className="btn-send-enquiry">
                    <Send size={16} />
                    <span>Send Enquiry</span>
                  </button>
                </MagneticButton>
              </form>
            )}
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          3. OUR OFFICE LOCATIONS (2 Location Cards)
          ======================================================== */}
      <section className="offices-section">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">REGIONAL PRESENCE</span>
              <h2 className="section-title">Connect with Our Team</h2>
              <p className="section-desc centered-desc">
                Crystal Power Controls operates from its active regional hubs across Andhra Pradesh and Telangana.
                For directions and office visits, please contact us in advance.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="offices-grid">
            <div className="office-card">
              <div className="office-img-wrap">
                <img
                  src="/images/project-rise-college.jpg"
                  alt="Ongole Andhra Pradesh Solar Operations"
                  className="office-photo"
                />
                <span className="office-badge">Corporate Hub</span>
              </div>
              <div className="office-body">
                <h3 className="office-city">Ongole, Andhra Pradesh</h3>
                <p className="office-note">
                  Serving Prakasam, Bapatla, Guntur and surrounding districts with residential, industrial and agricultural cold chain solar plants.
                </p>
                <div className="office-contact-row">
                  <Phone size={15} color="#16a34a" />
                  <a href="tel:+919493163424">+91 94931 63424</a>
                </div>
              </div>
            </div>

            <div className="office-card">
              <div className="office-img-wrap">
                <img
                  src="/images/project-airport.jpg"
                  alt="Hyderabad Telangana Solar Engineering Operations"
                  className="office-photo"
                />
                <span className="office-badge">Engineering Hub</span>
              </div>
              <div className="office-body">
                <h3 className="office-city">Hyderabad, Telangana</h3>
                <p className="office-note">
                  Headquarters for design, PVSyst engineering simulations, airport infrastructure execution, and commercial corporate parks.
                </p>
                <div className="office-contact-row">
                  <Phone size={15} color="#16a34a" />
                  <a href="tel:+919493163424">+91 94931 63424</a>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          4. WHY CONNECT WITH CPC?
          ======================================================== */}
      <section className="why-connect-section">
        <div className="container">
          <Reveal direction="scale" delay={0.1}>
            <div className="why-connect-box">
            <div className="why-connect-left">
              <span className="section-kicker text-green-light">THE CPC VALUE</span>
              <h2 className="why-connect-title">Why Connect with CPC?</h2>
              <p className="why-connect-lead">
                Dedicated engineering teams ensuring seamless statutory approvals, top-tier
                hardware integration, and maximum long-term power generation.
              </p>
            </div>

            <div className="why-connect-right">
              <div className="connect-item">
                <CheckCircle2 size={18} color="#4ade80" />
                <span>Solar project development expertise</span>
              </div>
              <div className="connect-item">
                <CheckCircle2 size={18} color="#4ade80" />
                <span>Residential, commercial and industrial solutions</span>
              </div>
              <div className="connect-item">
                <CheckCircle2 size={18} color="#4ade80" />
                <span>CAPEX and OPEX investment models</span>
              </div>
              <div className="connect-item">
                <CheckCircle2 size={18} color="#4ade80" />
                <span>Solar design and engineering capabilities</span>
              </div>
              <div className="connect-item">
                <CheckCircle2 size={18} color="#4ade80" />
                <span>Installation and commissioning support</span>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          5. FREQUENTLY ASKED QUESTIONS
          ======================================================== */}
      <section className="contact-faq-section">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">QUESTIONS ANSWERED</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="contact-faq-box">
              {CONTACT_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className={`c-faq-card ${isOpen ? 'open' : ''}`}>
                    <button
                      className="c-faq-btn"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <div className="c-faq-q">
                        <HelpCircle size={18} className="c-faq-icon" />
                        <span>{faq.q}</span>
                      </div>
                      <ChevronDown size={18} className="c-faq-chevron" />
                    </button>
                    {isOpen && (
                      <div className="c-faq-ans">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          6. FINAL CTA BANNER
          ======================================================== */}
      <section className="contact-final-cta-section">
        <div className="container">
          <Reveal direction="scale" delay={0.1}>
            <div className="contact-final-banner">
              <h2 className="c-final-title">Ready to Make the Switch to Solar?</h2>
              <p className="c-final-desc">
                Let's discuss your energy requirements and explore a solar solution that works
                for your property or business.
              </p>
              <div className="c-final-btns">
                <MagneticButton>
                  <a href="tel:+919493163424" className="btn-cta-primary">
                    <span>Talk to Our Solar Team</span>
                    <ArrowRight size={16} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="#enquiry-section" className="btn-cta-secondary">
                    <span>Submit Details Online</span>
                  </a>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
