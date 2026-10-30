import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import AnimatedCounter from '../components/AnimatedCounter';
import MagneticButton from '../components/MagneticButton';
import {
  ArrowRight,
  Calendar,
  Zap,
  Layers,
  MapPin,
  Home as HomeIcon,
  Building2,
  Factory,
  SunMedium,
  Hammer,
  Wrench,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Cpu,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  Phone,
  Mail,
  Send,
  FileText,
  DollarSign,
  TrendingDown,
  Leaf,
  Sun,
  Shield,
  Clock,
  Compass,
  Boxes,
  Activity,
  Check,
  Star
} from 'lucide-react';
import './Home.css';

// 3 Hero Carousel Slides
const HERO_SLIDES = [
  {
    topLabel: 'YOUR TRUSTED SOLAR ENERGY PARTNER',
    title: 'Powering Progress with Smarter Solar Energy',
    description:
      'Harness the power of the sun with reliable, efficient and sustainable solar energy solutions. From residential rooftops to large-scale industrial installations, Crystal Power Controls delivers complete solar solutions designed for a brighter tomorrow.',
    primaryCTA: 'Explore Our Solutions',
    primaryLink: '/services',
    secondaryCTA: 'Request a Site Visit',
    secondaryLink: '#enquiry',
    supportingText: 'Engineering Excellence | Reliable Installations | Sustainable Energy',
    image: '/images/hero-banner-1.jpg',
    tag: 'Rooftop & Industrial Solutions'
  },
  {
    topLabel: 'YOUR TRUSTED SOLAR ENERGY PARTNER',
    title: 'High-Performance Solar for Modern Industries',
    description:
      'Cut energy overheads by up to 80% with bespoke industrial rooftop and ground-mounted solar plants backed by 25-year performance warranties.',
    primaryCTA: 'Explore Industrial EPC',
    primaryLink: '/services',
    secondaryCTA: 'Request a Site Visit',
    secondaryLink: '#enquiry',
    supportingText: 'Engineering Excellence | Reliable Installations | Sustainable Energy',
    image: '/images/hero-banner-2.jpg',
    tag: 'Commercial & Industrial EPC'
  },
  {
    topLabel: 'YOUR TRUSTED SOLAR ENERGY PARTNER',
    title: 'Utility-Scale Solar Plants for a Sustainable Tomorrow',
    description:
      'Delivering multi-megawatt turnkey installations with high-efficiency grid synchronization, PVSyst simulated yields, and lifetime O&M reliability.',
    primaryCTA: 'View Flagship Projects',
    primaryLink: '/projects',
    secondaryCTA: 'Request a Site Visit',
    secondaryLink: '#enquiry',
    supportingText: 'Engineering Excellence | Reliable Installations | Sustainable Energy',
    image: '/images/hero-banner-3.jpg',
    tag: 'Utility-Scale Developments'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideIntervalRef = useRef(null);

  // Auto-advance banner every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(slideIntervalRef.current);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // 12. Client Enquiry Form State
  const [enquiryForm, setEnquiryForm] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    companyName: '',
    projectLocation: '',
    solarRequirement: 'Commercial Solar',
    requiredCapacity: '',
    message: ''
  });
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySubmitted(true);

    // Build formatted message for WhatsApp
    const lines = [
      `*New Project Consultation - Crystal Power Controls (Home Page)*`,
      `---------------------------------------`,
      `👤 *Name:* ${enquiryForm.fullName || 'Not provided'}`,
      enquiryForm.companyName ? `🏢 *Company:* ${enquiryForm.companyName}` : null,
      `📞 *Mobile:* ${enquiryForm.mobileNumber || 'Not provided'}`,
      `✉️ *Email:* ${enquiryForm.emailAddress || 'Not provided'}`,
      `📍 *Location:* ${enquiryForm.projectLocation || 'Not provided'}`,
      `⚡ *Requirement:* ${enquiryForm.solarRequirement || 'Commercial Solar'}`,
      enquiryForm.requiredCapacity ? `🔋 *Capacity:* ${enquiryForm.requiredCapacity}` : null,
      enquiryForm.message ? `📝 *Message:* ${enquiryForm.message}` : null
    ].filter(Boolean);

    const waText = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/919493163424?text=${waText}`;

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div className="home-page">
      {/* ========================================================
          1. HERO SECTION (With 3 Enhanced Premium Banners)
          ======================================================== */}
      <section
        className="hero-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`hero-slide ${isActive ? 'hero-slide-active' : ''}`}
              aria-hidden={!isActive}
            >
              <div className="hero-background-wrapper">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="hero-bg-img"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="hero-overlay"></div>
                <div className="hero-mesh-glow"></div>
              </div>

              <div className="container hero-content">
                <div className="hero-text-block">
                  <motion.div
                    className="hero-pill-badge"
                    initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
                    animate={isActive ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 35 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Sparkles size={14} className="badge-sparkle" />
                    <span>{slide.topLabel}</span>
                  </motion.div>

                  <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
                    animate={isActive ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                    animate={isActive ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 35 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
                    transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <MagneticButton>
                      <Link to={slide.primaryLink} className="btn-hero-primary">
                        <span>{slide.primaryCTA}</span>
                        <ArrowRight size={17} />
                      </Link>
                    </MagneticButton>
                    <MagneticButton>
                      <a href={slide.secondaryLink} className="btn-hero-secondary">
                        <Calendar size={17} />
                        <span>{slide.secondaryCTA}</span>
                      </a>
                    </MagneticButton>
                  </motion.div>

                  {/* Quick Trust Highlights Pills for Desktop */}
                  <motion.div
                    className="hero-trust-strip hero-trust-desktop"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.65 }}
                  >
                    <div className="hero-trust-badge">
                      <ShieldCheck size={14} className="hero-trust-icon" />
                      <span>MNRE Approved</span>
                    </div>
                    <div className="hero-trust-badge">
                      <Zap size={14} className="hero-trust-icon" />
                      <span>25-Yr Linear Warranty</span>
                    </div>
                    <div className="hero-trust-badge">
                      <CheckCircle2 size={14} className="hero-trust-icon" />
                      <span>1,000+ Installations</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="hero-supporting-text hero-supporting-desktop"
                    initial={{ opacity: 0 }}
                    animate={isActive ? { opacity: 0.9 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.75 }}
                  >
                    {slide.supportingText}
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Arrow Navigation (Hidden on tiny screens to maximize content readability) */}
        <button
          className="hero-nav-arrow hero-nav-prev"
          onClick={handlePrevSlide}
          aria-label="Previous Hero Slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          className="hero-nav-arrow hero-nav-next"
          onClick={handleNextSlide}
          aria-label="Next Hero Slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Carousel Bottom Progress Pagination */}
        <div className="hero-pagination-container">
          <div className="container">
            <div className="hero-pagination-track">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={idx}
                  className={`hero-pagination-item ${
                    idx === currentSlide ? 'active' : ''
                  }`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className="pagination-bar">
                    <div
                      className={`pagination-fill ${
                        idx === currentSlide && !isPaused ? 'filling' : ''
                      }`}
                    ></div>
                  </div>
                  <div className="pagination-info">
                    <span className="pagination-num">0{idx + 1}</span>
                    <span className="pagination-label">{slide.tag}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. COMPANY INTRODUCTION
          ======================================================== */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <Reveal direction="left" delay={0.1}>
              <div className="intro-content">
                <span className="section-kicker">ABOUT CRYSTAL POWER CONTROLS</span>
                <h2 className="section-title">
                  Building a Brighter Future Through Solar Innovation
                </h2>
                <p className="intro-lead">
                  Established in 2012, Crystal Power Controls is a solar power developer
                  specializing in the design, engineering, construction and operation of
                  photovoltaic solar power projects.
                </p>
                <p className="intro-desc">
                  With expertise across residential, commercial, industrial and agricultural
                  sectors, we provide comprehensive solar energy solutions tailored to diverse
                  energy requirements.
                </p>
                <p className="intro-desc">
                  From initial consultation and system planning to installation and
                  commissioning, we are committed to delivering dependable solar solutions
                  that create lasting value.
                </p>
                <div className="intro-cta-wrapper">
                  <MagneticButton>
                    <Link to="/about" className="btn-solid-green">
                      <span>Discover Our Story</span>
                      <ArrowRight size={16} />
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.25}>
              <div className="intro-visual">
                <div className="intro-image-card">
                  <img
                    src="/images/solar-engineer-inspection.jpg"
                    alt="Crystal Power Controls Engineering Team"
                    className="intro-img"
                  />
                  <div className="intro-badge-overlay">
                    <div className="badge-highlight">12+ Years</div>
                    <div className="badge-sub">Of Solar EPC Excellence</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ACHIEVEMENTS & STATISTICS
          ======================================================== */}
      <section className="stats-section-v2">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">OUR JOURNEY IN NUMBERS</span>
              <h2 className="section-title">Experience That Powers Confidence</h2>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="stats-grid-v2">
              <div className="stat-card-v2">
                <div className="stat-number-box">
                  <Calendar className="stat-icon-v2" size={28} />
                  <span className="stat-big-val"><AnimatedCounter value={2012} duration={1.5} /></span>
                </div>
                <div className="stat-title-v2">Established</div>
                <p className="stat-sub-v2">Over a decade of trusted engineering heritage</p>
              </div>

              <div className="stat-card-v2">
                <div className="stat-number-box">
                  <Clock className="stat-icon-v2" size={28} />
                  <span className="stat-big-val"><AnimatedCounter value={12} suffix="+ Years" duration={1.5} /></span>
                </div>
                <div className="stat-title-v2">Industry Experience</div>
                <p className="stat-sub-v2">Consistent delivery across diverse terrains & roofs</p>
              </div>

              <div className="stat-card-v2">
                <div className="stat-number-box">
                  <Zap className="stat-icon-v2" size={28} />
                  <span className="stat-big-val"><AnimatedCounter value={10} suffix="+ MW" duration={1.5} /></span>
                </div>
                <div className="stat-title-v2">Solar Installation Experience</div>
                <p className="stat-sub-v2">High-yield capacity generating clean megawatt energy</p>
              </div>

              <div className="stat-card-v2">
                <div className="stat-number-box">
                  <Layers className="stat-icon-v2" size={28} />
                  <span className="stat-big-val"><AnimatedCounter value={1000} suffix="+" duration={1.8} /></span>
                </div>
                <div className="stat-title-v2">Projects</div>
                <p className="stat-sub-v2">As stated in company proposal & proven track record</p>
              </div>

              <div className="stat-card-v2 stat-card-highlight">
                <div className="stat-number-box">
                  <MapPin className="stat-icon-v2" size={28} />
                  <span className="stat-big-val">PAN INDIA</span>
                </div>
                <div className="stat-title-v2">Project Operations</div>
                <p className="stat-sub-v2">Active turnkey execution across states & industrial hubs</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          4. OUR SERVICES (All 6 Services With Visual Previews)
          ======================================================== */}
      <section className="services-section-v2" id="services">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header">
              <span className="section-kicker">WHAT WE DO</span>
              <h2 className="section-title">Complete Solar Solutions Under One Roof</h2>
              <p className="section-desc">
                We provide end-to-end solar energy solutions, combining technical expertise,
                quality components and professional execution.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="services-grid-v2">
            {/* 1. Residential */}
            <div className="service-card-v2">
              <div className="service-card-top-img">
                <img
                  src="/images/residential-solar-home.jpg"
                  alt="Residential Solar Solutions"
                  className="service-thumb-img"
                />
              </div>
              <div className="service-card-inner">
                <div className="service-icon-wrapper-v2">
                  <HomeIcon size={24} />
                </div>
                <h3 className="service-v2-title">Residential Solar Solutions</h3>
                <p className="service-v2-desc">
                  Efficient rooftop solar installations designed to help homeowners reduce
                  electricity expenses and embrace clean energy.
                </p>
                <Link to="/services" className="service-link-arrow">
                  <span>Learn More</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* 2. Commercial */}
            <div className="service-card-v2">
              <div className="service-card-top-img">
                <img
                  src="/images/project-rise-college.jpg"
                  alt="Commercial Solar Solutions"
                  className="service-thumb-img"
                />
              </div>
              <div className="service-card-inner">
                <div className="service-icon-wrapper-v2">
                  <Building2 size={24} />
                </div>
                <h3 className="service-v2-title">Commercial Solar Solutions</h3>
                <p className="service-v2-desc">
                  Smart solar power systems for commercial buildings and businesses seeking
                  improved energy efficiency and tariff reductions.
                </p>
                <Link to="/services" className="service-link-arrow">
                  <span>Learn More</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* 3. Industrial */}
            <div className="service-card-v2">
              <div className="service-card-top-img">
                <img
                  src="/images/project-dairy-plant.jpg"
                  alt="Industrial Solar Solutions"
                  className="service-thumb-img"
                />
              </div>
              <div className="service-card-inner">
                <div className="service-icon-wrapper-v2">
                  <Factory size={24} />
                </div>
                <h3 className="service-v2-title">Industrial Solar Solutions</h3>
                <p className="service-v2-desc">
                  High-performance solar installations designed for factories, manufacturing
                  facilities and industrial establishments.
                </p>
                <Link to="/services" className="service-link-arrow">
                  <span>Learn More</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* 4. Utility-Scale */}
            <div className="service-card-v2">
              <div className="service-card-top-img">
                <img
                  src="/images/hero-banner-3.jpg"
                  alt="Utility-Scale Solar Projects"
                  className="service-thumb-img"
                />
              </div>
              <div className="service-card-inner">
                <div className="service-icon-wrapper-v2">
                  <SunMedium size={24} />
                </div>
                <h3 className="service-v2-title">Utility-Scale Solar Projects</h3>
                <p className="service-v2-desc">
                  Large-scale solar power plant development focused on efficient energy
                  generation and high return on investment.
                </p>
                <Link to="/services" className="service-link-arrow">
                  <span>Learn More</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* 5. Solar EPC */}
            <div className="service-card-v2">
              <div className="service-card-top-img">
                <img
                  src="/images/hero-banner-2.jpg"
                  alt="Solar EPC Solutions"
                  className="service-thumb-img"
                />
              </div>
              <div className="service-card-inner">
                <div className="service-icon-wrapper-v2">
                  <Hammer size={24} />
                </div>
                <h3 className="service-v2-title">Solar EPC Solutions</h3>
                <p className="service-v2-desc">
                  Complete Engineering, Procurement and Construction services, from project
                  planning and equipment supply to installation and commissioning.
                </p>
                <Link to="/services" className="service-link-arrow">
                  <span>Learn More</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* 6. Operations & Maintenance */}
            <div className="service-card-v2">
              <div className="service-card-top-img">
                <img
                  src="/images/solar-engineer-inspection.jpg"
                  alt="Operations & Maintenance"
                  className="service-thumb-img"
                />
              </div>
              <div className="service-card-inner">
                <div className="service-icon-wrapper-v2">
                  <Wrench size={24} />
                </div>
                <h3 className="service-v2-title">Operations & Maintenance</h3>
                <p className="service-v2-desc">
                  Professional solar plant monitoring, routine maintenance and breakdown
                  support to help maintain system performance.
                </p>
                <Link to="/services" className="service-link-arrow">
                  <span>Learn More</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="section-center-cta">
              <MagneticButton>
                <Link to="/services" className="btn-solid-green">
                  <span>View All Services</span>
                  <ArrowRight size={16} />
                </Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          5. WHY CHOOSE CRYSTAL POWER CONTROLS? (THE CPC ADVANTAGE)
          ======================================================== */}
      <section className="why-section-v2">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">THE CPC ADVANTAGE</span>
              <h2 className="section-title">Your Trusted Partner for Solar Excellence</h2>
              <p className="section-desc centered-desc">
                We believe every solar project deserves quality engineering, dependable
                components and professional execution.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="advantage-grid">
            <div className="advantage-card">
              <div className="advantage-icon-box">
                <Layers size={24} />
              </div>
              <h3 className="advantage-title">End-to-End Solutions</h3>
              <p className="advantage-desc">
                Complete solar project services, from design and engineering to installation
                and commissioning.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon-box">
                <Boxes size={24} />
              </div>
              <h3 className="advantage-title">Quality Components</h3>
              <p className="advantage-desc">
                Carefully selected solar modules, inverters and electrical components from
                Tier-1 global manufacturers.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon-box">
                <Cpu size={24} />
              </div>
              <h3 className="advantage-title">Technical Expertise</h3>
              <p className="advantage-desc">
                Experienced professionals focused on accurate project planning, structural
                engineering and seamless execution.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3 className="advantage-title">Safety & Standards</h3>
              <p className="advantage-desc">
                Electrical safety practices and equipment aligned with applicable Indian and
                international CEIG standards.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon-box">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="advantage-title">Professional Installation</h3>
              <p className="advantage-desc">
                Structured installation and commissioning processes for reliable, on-time
                project delivery.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon-box">
                <Activity size={24} />
              </div>
              <h3 className="advantage-title">Ongoing Support</h3>
              <p className="advantage-desc">
                Performance monitoring, preventive maintenance and manufacturer warranty
                coordination throughout the system lifetime.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

      {/* ========================================================
          6. FEATURED PROJECTS (All 5 Featured Projects)
          ======================================================== */}
      <section className="projects-section-v2" id="projects">
        <div className="container">
          <Reveal direction="down">
            <div className="projects-header-flex">
              <div>
                <span className="section-kicker">OUR PROJECT PORTFOLIO</span>
                <h2 className="section-title">
                  Delivering Solar Projects That Make a Difference
                </h2>
                <p className="section-desc">
                  Our project experience spans educational institutions, airports, dairy
                  facilities, cold storage units and industrial establishments.
                </p>
              </div>
              <MagneticButton>
                <Link to="/projects" className="btn-outline-green">
                  <span>Explore All Projects</span>
                  <ArrowRight size={16} />
                </Link>
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="projects-grid-v2">
            {/* 1. Rajiv Gandhi International Airport */}
            <div className="project-card-v2">
              <div className="project-img-container">
                <img
                  src="/images/project-airport.jpg"
                  alt="Rajiv Gandhi International Airport"
                  className="project-photo"
                />
                <span className="project-capacity-pill">5 MW</span>
              </div>
              <div className="project-body-v2">
                <h3 className="project-card-heading">
                  Rajiv Gandhi International Airport
                </h3>
                <div className="project-loc">
                  <MapPin size={14} />
                  <span>Hyderabad, Telangana</span>
                </div>
              </div>
            </div>

            {/* 2. Rise Krishna Sai Group */}
            <div className="project-card-v2">
              <div className="project-img-container">
                <img
                  src="/images/project-rise-college.jpg"
                  alt="Rise Krishna Sai Group of Institutions"
                  className="project-photo"
                />
                <span className="project-capacity-pill">495 kWp</span>
              </div>
              <div className="project-body-v2">
                <h3 className="project-card-heading">
                  Rise Krishna Sai Group of Institutions
                </h3>
                <div className="project-loc">
                  <MapPin size={14} />
                  <span>Ongole, Andhra Pradesh</span>
                </div>
              </div>
            </div>

            {/* 3. Sri Ram Milk Dairy */}
            <div className="project-card-v2">
              <div className="project-img-container">
                <img
                  src="/images/project-dairy-plant.jpg"
                  alt="Sri Ram Milk Dairy"
                  className="project-photo"
                />
                <span className="project-capacity-pill">350 kWp</span>
              </div>
              <div className="project-body-v2">
                <h3 className="project-card-heading">Sri Ram Milk Dairy</h3>
                <div className="project-loc">
                  <MapPin size={14} />
                  <span>Prakasam District, Andhra Pradesh</span>
                </div>
              </div>
            </div>

            {/* 4. Rythu Bandhu Cold Storage */}
            <div className="project-card-v2">
              <div className="project-img-container">
                <img
                  src="/images/project-cold-storage.jpg"
                  alt="Rythu Bandhu Cold Storage"
                  className="project-photo"
                />
                <span className="project-capacity-pill">125 kWp</span>
              </div>
              <div className="project-body-v2">
                <h3 className="project-card-heading">Rythu Bandhu Cold Storage</h3>
                <div className="project-loc">
                  <MapPin size={14} />
                  <span>Andhra Pradesh</span>
                </div>
              </div>
            </div>

            {/* 5. KITS Engineering College */}
            <div className="project-card-v2">
              <div className="project-img-container">
                <img
                  src="/images/project-college.jpg"
                  alt="KITS Engineering College"
                  className="project-photo"
                />
                <span className="project-capacity-pill">250 kWp</span>
              </div>
              <div className="project-body-v2">
                <h3 className="project-card-heading">KITS Engineering College</h3>
                <div className="project-loc">
                  <MapPin size={14} />
                  <span>Markapur, Andhra Pradesh</span>
                </div>
              </div>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          7. OUR WORKING PROCESS (6 Structured Steps)
          ======================================================== */}
      <section className="process-section">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">HOW WE WORK</span>
              <h2 className="section-title">From Solar Vision to Successful Installation</h2>
              <p className="section-desc centered-desc">
                A transparent, engineering-driven process that ensures precision, safety,
                and optimal power generation from day one.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="process-grid">
            <div className="process-card">
              <div className="process-step-num">01</div>
              <h3 className="process-title">Consultation & Site Assessment</h3>
              <p className="process-desc">
                Understand your energy requirements and evaluate the project location,
                roof structure, and irradiation.
              </p>
            </div>

            <div className="process-card">
              <div className="process-step-num">02</div>
              <h3 className="process-title">Design & Engineering</h3>
              <p className="process-desc">
                Develop a customized solar system design based on site conditions, shadow
                analysis, and energy requirements.
              </p>
            </div>

            <div className="process-card">
              <div className="process-step-num">03</div>
              <h3 className="process-title">Procurement & Supply</h3>
              <p className="process-desc">
                Arrange Tier-1 solar modules, inverters, mounting structures and
                balance-of-system components.
              </p>
            </div>

            <div className="process-card">
              <div className="process-step-num">04</div>
              <h3 className="process-title">Installation & Execution</h3>
              <p className="process-desc">
                Carry out installation, electrical integration, and associated project
                works adhering to stringent standards.
              </p>
            </div>

            <div className="process-card">
              <div className="process-step-num">05</div>
              <h3 className="process-title">Testing & Commissioning</h3>
              <p className="process-desc">
                Perform rigorous pre-commissioning checks, grid synchronization testing
                and formal system handover.
              </p>
            </div>

            <div className="process-card">
              <div className="process-step-num">06</div>
              <h3 className="process-title">Monitoring & Maintenance</h3>
              <p className="process-desc">
                Support ongoing plant performance monitoring, preventive health checks and
                maintenance requirements.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

      {/* ========================================================
          8. SOLAR ENERGY BENEFITS
          ======================================================== */}
      <section className="benefits-section" id="why-solar">
        <div className="container">
          <div className="benefits-grid">
            <Reveal direction="left" delay={0.1}>
              <div className="benefits-left">
                <span className="section-kicker">WHY GO SOLAR?</span>
                <h2 className="section-title">
                  Make the Switch to Clean & Sustainable Energy
                </h2>
                <p className="intro-lead">
                  Solar energy offers a smarter way to meet growing electricity
                  requirements while supporting environmental sustainability.
                </p>
                <div className="benefits-cta-box">
                  <MagneticButton>
                    <Link to="/why-solar" className="btn-solid-green">
                      <span>Discover the Benefits of Solar</span>
                      <ArrowRight size={16} />
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <div className="benefits-right">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <TrendingDown size={22} />
                </div>
                <div>
                  <h4 className="benefit-name">Reduce Dependence</h4>
                  <p className="benefit-detail">
                    Reduce dependence on conventional electricity sources and volatile tariffs.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <DollarSign size={22} />
                </div>
                <div>
                  <h4 className="benefit-name">Lower Electricity Expenses</h4>
                  <p className="benefit-detail">
                    Substantially lower monthly electricity expenses with proven net-metering.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <Leaf size={22} />
                </div>
                <div>
                  <h4 className="benefit-name">Reduce Carbon Emissions</h4>
                  <p className="benefit-detail">
                    Significantly lower carbon emissions and support clean climate goals.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <Sun size={22} />
                </div>
                <div>
                  <h4 className="benefit-name">Renewable & Abundant Energy</h4>
                  <p className="benefit-detail">
                    Benefit from renewable and abundant energy freely available every day.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <Wrench size={22} />
                </div>
                <div>
                  <h4 className="benefit-name">Minimal Maintenance</h4>
                  <p className="benefit-detail">
                    Minimize routine maintenance requirements with solid-state PV systems.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <Shield size={22} />
                </div>
                <div>
                  <h4 className="benefit-name">Long-Term Energy Independence</h4>
                  <p className="benefit-detail">
                    Improve long-term energy independence with predictable multi-decade power.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

      {/* ========================================================
          9. SOLAR INVESTMENT MODELS (CAPEX & OPEX)
          ======================================================== */}
      <section className="models-section">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">FLEXIBLE SOLAR SOLUTIONS</span>
              <h2 className="section-title">
                Choose the Solar Investment Model That Works for You
              </h2>
              <p className="section-desc centered-desc">
                Whether you prefer direct asset ownership or zero-upfront power purchase
                agreements, we provide custom financial structures.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="models-grid">
            {/* CAPEX Model */}
            <div className="model-card">
              <div className="model-badge">Self-Owned Model</div>
              <h3 className="model-title">CAPEX Model</h3>
              <p className="model-desc">
                Invest in your own solar power system with complete project execution,
                including design, procurement, installation and commissioning.
              </p>
              <ul className="model-points">
                <li><Check size={16} color="#16a34a" /> 100% Asset Ownership & Maximum Savings</li>
                <li><Check size={16} color="#16a34a" /> Accelerated Depreciation Tax Benefits</li>
                <li><Check size={16} color="#16a34a" /> Quick Payback Period (typically 3-4 years)</li>
                <li><Check size={16} color="#16a34a" /> Free electricity after capital recovery</li>
              </ul>
            </div>

            {/* OPEX Model */}
            <div className="model-card model-card-featured">
              <div className="model-badge model-badge-featured">Zero-Investment Model</div>
              <h3 className="model-title">OPEX Model</h3>
              <p className="model-desc">
                Explore third-party investment-based solar solutions structured through
                Power Purchase Agreements (PPA).
              </p>
              <ul className="model-points">
                <li><Check size={16} color="#16a34a" /> Zero Upfront Capital Expenditure Required</li>
                <li><Check size={16} color="#16a34a" /> Pay only for the solar energy generated</li>
                <li><Check size={16} color="#16a34a" /> Lower per-unit tariff than grid utility rates</li>
                <li><Check size={16} color="#16a34a" /> Comprehensive operations & maintenance included</li>
              </ul>
            </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="section-center-cta">
              <MagneticButton>
                <a href="#enquiry" className="btn-solid-green">
                  <span>Discuss Your Solar Investment</span>
                  <ArrowRight size={16} />
                </a>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          10. AWARDS & RECOGNITION
          ======================================================== */}
      <section className="awards-section">
        <div className="container">
          <Reveal direction="scale" delay={0.1}>
            <div className="awards-box">
              <div className="award-icon-circle">
                <Award size={48} className="award-svg" />
              </div>
              <div className="awards-text-content">
                <span className="section-kicker">OUR ACHIEVEMENTS</span>
                <h2 className="awards-title">
                  Recognition That Reflects Our Commitment to Excellence
                </h2>
                <p className="awards-lead">
                  Crystal Power Controls has received <strong>Diamond, Gold and Platinum</strong> recognition
                  for excellence in Residential Rooftop and Commercial Solar Projects at
                  <strong> Global Solar SuryaCon</strong>.
                </p>
                <p className="awards-sub">
                  Our commitment to quality, engineering and sustainable energy continues to
                  drive us forward across every project we undertake.
                </p>

                <div className="trophy-tags">
                  <span className="trophy-tag">💎 Diamond Recognition</span>
                  <span className="trophy-tag">🥇 Gold Recognition</span>
                  <span className="trophy-tag">🏆 Platinum Recognition</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          11. CALL-TO-ACTION BANNER
          ======================================================== */}
      <section className="cta-banner-section">
        <div className="container">
          <Reveal direction="scale" delay={0.1}>
            <div className="cta-banner-v2">
              <div className="cta-v2-text">
                <span className="cta-v2-kicker">READY TO POWER YOUR FUTURE?</span>
                <h2 className="cta-v2-title">
                  Ready to Power Your Future with Solar?
                </h2>
                <p className="cta-v2-desc">
                  Whether you are planning a residential rooftop installation or a large-scale
                  industrial solar project, Crystal Power Controls is ready to help you take the
                  next step.
                </p>
                <p className="cta-v2-tagline">
                  Let's create a cleaner, smarter and more sustainable future together.
                </p>
              </div>
              <div className="cta-v2-buttons">
                <MagneticButton>
                  <a href="#enquiry" className="btn-cta-primary">
                    <span>Get a Free Quote</span>
                    <ArrowRight size={16} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link to="/contact" className="btn-cta-secondary">
                    <Phone size={16} />
                    <span>Contact Our Team</span>
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          12. CLIENT ENQUIRY SECTION (With All Specified Form Fields)
          ======================================================== */}
      <section className="enquiry-section" id="enquiry">
        <div className="container">
          <div className="enquiry-grid">
            <Reveal direction="left" delay={0.1}>
              <div className="enquiry-info">
                <span className="section-kicker">LET'S CONNECT</span>
                <h2 className="section-title">Tell Us About Your Solar Requirements</h2>
                <p className="enquiry-lead">
                  Looking for a reliable solar energy partner? Share your requirements with
                  us, and our engineering team will get in touch to discuss a suitable
                  solution.
                </p>

              <div className="enquiry-highlights">
                <div className="highlight-item">
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span>Complimentary site viability & shadow analysis</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span>Customized ROI & payback schedule report</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span>Tier-1 module & inverter engineering specifications</span>
                </div>
              </div>

              <div className="enquiry-contact-card">
                <div className="enquiry-contact-line">
                  <Phone size={18} color="#16a34a" />
                  <span>Direct Hotline: +91 94931 63424</span>
                </div>
                <div className="enquiry-contact-line">
                  <Mail size={18} color="#16a34a" />
                  <span>Email: info@crystalpowercontrols.com</span>
                </div>
                <div className="enquiry-contact-line">
                  <MapPin size={18} color="#16a34a" />
                  <span>Hubs: Ongole & Hyderabad</span>
                </div>
              </div>
            </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
            <div className="enquiry-form-card">
              {enquirySubmitted ? (
                <div className="enquiry-success-box">
                  <CheckCircle2 size={54} color="#16a34a" />
                  <h3>Enquiry Submitted Successfully!</h3>
                  <p>
                    Thank you for reaching out to Crystal Power Controls. Our solar engineer
                    will review your project details and contact you within 24 hours.
                  </p>
                  <button
                    className="btn-solid-green"
                    onClick={() => setEnquirySubmitted(false)}
                    style={{ marginTop: '16px' }}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="enquiry-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={enquiryForm.fullName}
                        onChange={(e) =>
                          setEnquiryForm({ ...enquiryForm, fullName: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={enquiryForm.mobileNumber}
                        onChange={(e) =>
                          setEnquiryForm({
                            ...enquiryForm,
                            mobileNumber: e.target.value
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="rajesh@company.com"
                        value={enquiryForm.emailAddress}
                        onChange={(e) =>
                          setEnquiryForm({
                            ...enquiryForm,
                            emailAddress: e.target.value
                          })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Name</label>
                      <input
                        type="text"
                        placeholder="Company / Institution Name"
                        value={enquiryForm.companyName}
                        onChange={(e) =>
                          setEnquiryForm({
                            ...enquiryForm,
                            companyName: e.target.value
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Project Location *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ongole, Hyderabad, Guntur"
                        value={enquiryForm.projectLocation}
                        onChange={(e) =>
                          setEnquiryForm({
                            ...enquiryForm,
                            projectLocation: e.target.value
                          })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Solar Requirement *</label>
                      <select
                        value={enquiryForm.solarRequirement}
                        onChange={(e) =>
                          setEnquiryForm({
                            ...enquiryForm,
                            solarRequirement: e.target.value
                          })
                        }
                      >
                        <option value="Residential Solar">Residential Solar</option>
                        <option value="Commercial Solar">Commercial Solar</option>
                        <option value="Industrial Solar">Industrial Solar</option>
                        <option value="Utility-Scale Solar">Utility-Scale Solar</option>
                        <option value="Solar EPC">Solar EPC</option>
                        <option value="Operations & Maintenance">
                          Operations & Maintenance
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Required Capacity (e.g. 10 kW, 100 kW, 1 MW)</label>
                    <input
                      type="text"
                      placeholder="Estimated capacity or monthly electricity bill"
                      value={enquiryForm.requiredCapacity}
                      onChange={(e) =>
                        setEnquiryForm({
                          ...enquiryForm,
                          requiredCapacity: e.target.value
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your rooftop area, grid type, or specific project requirements..."
                      value={enquiryForm.message}
                      onChange={(e) =>
                        setEnquiryForm({ ...enquiryForm, message: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <MagneticButton>
                    <button type="submit" className="btn-submit-enquiry">
                      <Send size={16} />
                      <span>Submit Enquiry</span>
                    </button>
                  </MagneticButton>
                </form>
              )}
            </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
