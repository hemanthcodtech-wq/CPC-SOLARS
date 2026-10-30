import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import MagneticButton from '../components/MagneticButton';
import {
  ArrowRight,
  Sparkles,
  Phone,
  Home as HomeIcon,
  Building2,
  Factory,
  SunMedium,
  Hammer,
  Wrench,
  CheckCircle2,
  ShieldCheck,
  Sun,
  Zap,
  Award
} from 'lucide-react';
import ServiceEnquiryForm from '../components/ServiceEnquiryForm';
import ScopeOfWork from '../components/ScopeOfWork';
import './Services.css';

const SERVICES_CATALOG = [
  {
    number: '01',
    slug: 'residential-solar',
    title: 'Residential Solar Solutions',
    description: 'Efficient rooftop solar systems designed for homes and residential properties.',
    image: '/images/residential-solar-home.jpg',
    tag: 'Rooftops & Villas',
    icon: <HomeIcon size={24} />
  },
  {
    number: '02',
    slug: 'commercial-solar',
    title: 'Commercial Solar Solutions',
    description: 'Solar installations for commercial buildings, offices and business establishments.',
    image: '/images/project-rise-college.jpg',
    tag: 'Offices & Campuses',
    icon: <Building2 size={24} />
  },
  {
    number: '03',
    slug: 'industrial-solar',
    title: 'Industrial Solar Solutions',
    description: 'High-capacity solar power systems for factories and manufacturing facilities.',
    image: '/images/project-dairy-plant.jpg',
    tag: 'Factories & Cold Storage',
    icon: <Factory size={24} />
  },
  {
    number: '04',
    slug: 'utility-scale-solar',
    title: 'Utility-Scale Solar Projects',
    description: 'Solar power plant development for large-scale energy generation requirements.',
    image: '/images/hero-banner-3.jpg',
    tag: 'Megawatt Infrastructure',
    icon: <SunMedium size={24} />
  },
  {
    number: '05',
    slug: 'solar-epc',
    title: 'Solar EPC Solutions',
    description: 'Complete engineering, procurement, construction and commissioning services.',
    image: '/images/hero-banner-2.jpg',
    tag: 'Turnkey Execution',
    icon: <Hammer size={24} />
  },
  {
    number: '06',
    slug: 'solar-maintenance',
    title: 'Operations & Maintenance',
    description: 'Solar plant performance monitoring, routine maintenance and breakdown support.',
    image: '/images/solar-engineer-inspection.jpg',
    tag: 'Monitoring & Uptime',
    icon: <Wrench size={24} />
  }
];

export default function Services() {
  return (
    <div className="services-main-page">
      {/* ========================================================
          SECTION 1 – ENHANCED PREMIUM HERO BANNER
          ======================================================== */}
      <section className="services-hero-section">
        <div className="services-hero-bg">
          <img
            src="/images/hero-banner-1.jpg"
            alt="Crystal Power Controls Services"
            className="services-hero-img"
          />
          <div className="services-hero-overlay"></div>
          <div className="services-hero-glow"></div>
        </div>

        <div className="container services-hero-container">
          <div className="services-hero-grid">
            <div className="services-hero-content">
              <motion.div
                className="services-eyebrow-pill"
                initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Sparkles size={14} className="badge-sparkle" />
                <span>OUR SERVICES</span>
              </motion.div>

              <motion.h1
                className="services-hero-title"
                initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                Complete Solar Solutions. <br />
                <span className="services-hero-highlight">One Trusted Partner.</span>
              </motion.h1>

              <motion.p
                className="services-hero-lead"
                initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                From residential rooftop installations to large-scale industrial solar projects,
                Crystal Power Controls delivers comprehensive solar energy solutions backed by
                engineering expertise, quality components and professional execution.
              </motion.p>

              <motion.p
                className="services-hero-sub"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                We help customers transition towards cleaner, smarter and more efficient energy
                through customized solar solutions.
              </motion.p>

              <motion.div
                className="services-hero-buttons"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <MagneticButton>
                  <a href="#services-list" className="btn-hero-primary">
                    <span>Explore Our Services</span>
                    <ArrowRight size={17} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="#service-enquiry" className="btn-hero-secondary">
                    <Phone size={16} />
                    <span>Request a Quote</span>
                  </a>
                </MagneticButton>
              </motion.div>

              {/* Trust Indicators */}
              <div className="services-trust-strip">
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>Turnkey EPC Execution</span>
                </div>
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>CAPEX & OPEX Models</span>
                </div>
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>25-Year Performance</span>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Service Highlights Card */}
            <div className="services-hero-card-col">
              <div className="services-floating-glass-card">
                <div className="services-glass-header">
                  <div className="services-glass-icon-circle">
                    <Sun size={26} color="#4ade80" />
                  </div>
                  <div>
                    <h3 className="services-glass-title">Comprehensive Capabilities</h3>
                    <p className="services-glass-sub">From Concept to Commissioning</p>
                  </div>
                </div>

                <div className="services-glass-list">
                  <div className="services-glass-item">
                    <div className="glass-item-badge">01 - 03</div>
                    <div>
                      <div className="glass-item-title">Rooftop & Industrial Solar</div>
                      <div className="glass-item-desc">Custom designs for homes, commercial & heavy sheds</div>
                    </div>
                  </div>
                  <div className="services-glass-item">
                    <div className="glass-item-badge">04 - 05</div>
                    <div>
                      <div className="glass-item-title">Utility-Scale & EPC Turnkey</div>
                      <div className="glass-item-desc">Megawatt grid evacuation & complete BOS procurement</div>
                    </div>
                  </div>
                  <div className="services-glass-item">
                    <div className="glass-item-badge">06</div>
                    <div>
                      <div className="glass-item-title">Operations & Maintenance</div>
                      <div className="glass-item-desc">Preventive telemetry monitoring & breakdown support</div>
                    </div>
                  </div>
                </div>

                <div className="services-glass-footer">
                  <ShieldCheck size={18} color="#22c55e" />
                  <span>Tier-1 BIS Hardware & CEIG Compliant Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2 – INTRODUCTION
          ======================================================== */}
      <section className="services-intro-section">
        <div className="container">
          <Reveal direction="down">
            <div className="services-intro-grid">
              <div>
                <span className="section-kicker">WHAT WE OFFER</span>
                <h2 className="section-title">
                  Engineering Solar Solutions for Every Energy Requirement
                </h2>
              </div>
              <div>
                <p className="services-intro-text">
                  Every project has unique energy requirements. At Crystal Power Controls, we
                  provide tailored solar solutions designed around project capacity, site conditions
                  and customer requirements.
                </p>
                <p className="services-intro-text">
                  Our capabilities cover the complete solar project lifecycle, including design,
                  engineering, procurement, supply, installation, commissioning and maintenance.
                </p>
                <p className="services-intro-text strong-green">
                  From individual rooftops to large-scale solar developments, we focus on
                  delivering dependable solar energy solutions.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          SECTION 3 – ALL SERVICES (6 Cards with Dedicated Links)
          ======================================================== */}
      <section className="services-catalog-section" id="services-list">
        <div className="container">
          <Reveal direction="up" delay={0.15}>
            <div className="services-catalog-grid">
            {SERVICES_CATALOG.map((item) => (
              <div key={item.slug} className="service-catalog-card">
                <div className="service-cat-img-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="service-cat-img"
                  />
                  <span className="service-cat-badge">{item.tag}</span>
                </div>

                <div className="service-cat-body">
                  <div className="service-cat-header-row">
                    <span className="service-cat-num">{item.number}.</span>
                    <div className="service-cat-icon">{item.icon}</div>
                  </div>

                  <h3 className="service-cat-title">{item.title}</h3>
                  <p className="service-cat-desc">{item.description}</p>

                  <Link
                    to={`/services/${item.slug}`}
                    className="service-cat-explore-btn"
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          SCOPE OF WORK & PROJECT EXECUTION (Official Standard)
          ======================================================== */}
      <ScopeOfWork />

      {/* ========================================================
          DYNAMIC SERVICE ENQUIRY SECTION
          ======================================================== */}
      <section className="services-enquiry-wrapper" id="service-enquiry">
        <div className="container">
          <Reveal direction="scale" delay={0.1}>
            <ServiceEnquiryForm defaultService="Industrial Solar" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
