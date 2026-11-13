import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import AnimatedCounter from '../components/AnimatedCounter';
import MagneticButton from '../components/MagneticButton';
import {
  ArrowRight,
  Sun,
  ShieldCheck,
  Award,
  Zap,
  Target,
  Compass,
  CheckCircle2,
  Calendar,
  Layers,
  MapPin,
  TrendingUp,
  Cpu,
  Boxes,
  Activity,
  Phone,
  FileCheck,
  Building,
  Sparkles,
  Check,
  ChevronDown,
  HelpCircle,
  Clock,
  Shield
} from 'lucide-react';
import './About.css';

const ABOUT_FAQS = [
  {
    question: "When was Crystal Power Controls established and where are your offices located?",
    answer: "Crystal Power Controls was established in 2012. We operate active corporate and engineering branch offices in Ongole (Andhra Pradesh) and Hyderabad (Telangana), executing turnkey photovoltaic solar installations across pan-India."
  },
  {
    question: "What is the difference between your CAPEX and OPEX solar investment models?",
    answer: "Under the CAPEX model, the client owns 100% of the solar asset upfront, benefiting directly from maximum power tariff savings and 40% accelerated tax depreciation with an estimated payback within 3 to 4 years. Under the OPEX (RESCO) model, a third-party investor funds and maintains the plant on your rooftop while you purchase the generated solar electricity at a discounted per-unit rate through a Power Purchase Agreement (PPA) with zero capital investment."
  },
  {
    question: "What capacity ranges and project types does Crystal Power Controls handle?",
    answer: "We deliver turnkey engineering, procurement, and construction (EPC) for systems ranging from residential rooftop setups (3 kW to 20 kW), commercial sheds and educational institutions (50 kW to 500 kW), cold storage and dairy plants, up to multi-megawatt (1 MW to 10+ MW) ground-mounted utility solar farms."
  },
  {
    question: "What warranties and guarantees do you provide on your solar installations?",
    answer: "We supply Tier-1 BIS and MNRE approved solar photovoltaic modules backed by a 25-year linear power output performance warranty, alongside 5 to 10-year manufacturer inverter warranties and comprehensive lifetime O&M (Operations & Maintenance) support."
  },
  {
    question: "Do you assist with government net-metering approvals, CEIG clearances, and subsidies?",
    answer: "Yes, our dedicated liaisoning and engineering team manages the complete statutory lifecycle—including local DISCOM net-metering applications, CEIG electrical safety inspections, transformer synchronization, and government subsidy documentation."
  },
  {
    question: "How long does a typical solar rooftop project installation take?",
    answer: "Residential rooftop systems are typically commissioned within 1 to 2 weeks. Commercial and industrial shed installations (50 kW to 500 kW) are generally executed within 4 to 8 weeks, including structural mounting, cabling, inverter integration, and grid testing."
  }
];

export default function About() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="about-page">
      {/* ========================================================
          1. ENHANCED HERO SECTION
          ======================================================== */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <img
            src="/images/hero-banner-2.jpg"
            alt="About Crystal Power Controls"
            className="about-hero-img"
          />
          <div className="about-hero-overlay"></div>
          <div className="about-hero-glow"></div>
        </div>

        <div className="container about-hero-container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <motion.div
                className="about-eyebrow-pill"
                initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Sparkles size={14} className="badge-sparkle" />
                <span>ABOUT CRYSTAL POWER CONTROLS</span>
              </motion.div>

              <motion.h1
                className="about-hero-title"
                initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                Empowering Tomorrow Through{' '}
                <span className="about-hero-highlight">Solar Innovation</span>
              </motion.h1>

              <motion.p
                className="about-hero-lead"
                initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Building a sustainable future through reliable solar energy solutions,
                engineering excellence and a commitment to clean power.
              </motion.p>

              <motion.p
                className="about-hero-sub"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                Since 2012, Crystal Power Controls has been delivering solar energy
                solutions across residential, commercial, industrial and utility-scale
                applications.
              </motion.p>

              <motion.div
                className="about-hero-buttons"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <MagneticButton>
                  <Link to="/services" className="btn-hero-primary">
                    <span>Explore Our Solutions</span>
                    <ArrowRight size={17} />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link to="/contact" className="btn-hero-secondary">
                    <Phone size={16} />
                    <span>Request Consultation</span>
                  </Link>
                </MagneticButton>
              </motion.div>

              {/* Trust Indicators */}
              <div className="about-trust-strip">
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>12+ Years Heritage</span>
                </div>
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>10+ MW Commissioned</span>
                </div>
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>1,000+ Projects</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Stats Visual Card */}
            <div className="about-hero-card-col">
              <div className="hero-floating-glass-card">
                <div className="glass-card-header">
                  <div className="glass-icon-circle">
                    <Sun size={26} color="#4ade80" />
                  </div>
                  <div>
                    <h3 className="glass-card-title">Turnkey Solar EPC</h3>
                    <p className="glass-card-sub">Established 2012 • Pan India</p>
                  </div>
                </div>

                <div className="glass-stats-grid">
                  <div className="glass-stat-item">
                    <div className="glass-stat-num">12+</div>
                    <div className="glass-stat-lbl">Years Industry Experience</div>
                  </div>
                  <div className="glass-stat-item">
                    <div className="glass-stat-num">10+ MW</div>
                    <div className="glass-stat-lbl">Installed Capacity</div>
                  </div>
                  <div className="glass-stat-item">
                    <div className="glass-stat-num">1,000+</div>
                    <div className="glass-stat-lbl">Satisfied Installations</div>
                  </div>
                  <div className="glass-stat-item">
                    <div className="glass-stat-num">Tier-1</div>
                    <div className="glass-stat-lbl">Module Quality Standards</div>
                  </div>
                </div>

                <div className="glass-card-footer">
                  <ShieldCheck size={18} color="#22c55e" />
                  <span>MNRE, DISCOM & CEIG Certified Execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. WHO WE ARE
          ======================================================== */}
      <section className="who-we-are-section">
        <div className="container">
          <div className="about-split-grid">
            <Reveal direction="left" delay={0.1}>
              <div className="about-text-col">
                <span className="section-kicker">WHO WE ARE</span>
                <h2 className="section-title">A Trusted Name in Solar Energy Solutions</h2>
                <p className="about-body-lead">
                  Crystal Power Controls (CPC) is a solar power developer specializing in
                  the design, engineering, construction and operation of photovoltaic (PV)
                  solar power projects.
                </p>
                <p className="about-body-text">
                  Established in 2012, we operate from our offices in Ongole and Hyderabad,
                  with project experience across multiple states in India.
                </p>
                <p className="about-body-text">
                  We provide comprehensive solar energy solutions for residential,
                  commercial, industrial and agricultural sectors. Our capabilities cover
                  both CAPEX (self-investment) and OPEX (third-party investment through
                  Power Purchase Agreements) models.
                </p>
                <p className="about-body-text">
                  With a focus on technical expertise, quality components and professional
                  project execution, we strive to make solar energy accessible, efficient
                  and dependable.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.25}>
              <div className="about-visual-col">
                <div className="visual-card-wrap">
                  <img
                    src="/images/solar-engineer-inspection.jpg"
                    alt="Crystal Power Controls Engineering Team"
                    className="about-showcase-img"
                  />
                  <div className="experience-badge-floating">
                    <div className="exp-val">2012</div>
                    <div className="exp-lbl">Year of Establishment</div>
                    <div className="exp-loc">Offices in Ongole & Hyderabad</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          MEET THE FOUNDER
          ======================================================== */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-grid">
            <Reveal direction="left" delay={0.1}>
              <div className="founder-photo-col">
                <div className="founder-photo-wrap">
                  <img
                    src="/images/owner.png"
                    alt="Founder – Crystal Power Controls"
                    className="founder-photo"
                  />
                  <div className="founder-badge">
                    <span className="founder-badge-year">Est. 2012</span>
                    <span className="founder-badge-label">Founder & Managing Director</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.25}>
              <div className="founder-content">
                <span className="section-kicker">LEADERSHIP</span>
                <h2 className="section-title">Meet Our Founder</h2>
                <p className="founder-lead">
                  Crystal Power Controls was founded with a clear vision — to make solar
                  energy accessible, reliable and impactful for every customer, from
                  residential homeowners to large-scale industrial enterprises.
                </p>
                <p className="about-body-text">
                  With over a decade of hands-on experience in solar project development,
                  engineering and execution, our founder has led Crystal Power Controls
                  from a regional solar installer to a nationally recognised EPC company
                  operating across Andhra Pradesh and Telangana.
                </p>
                <p className="about-body-text">
                  Under his leadership, CPC has commissioned 1,000+ solar installations
                  spanning residential villas, cold storage facilities, dairy plants,
                  educational institutions, and landmark infrastructure projects including
                  the Rajiv Gandhi International Airport solar plant.
                </p>
                <p className="about-body-text">
                  His commitment to engineering quality, customer satisfaction and clean
                  energy adoption has earned Crystal Power Controls Platinum, Diamond and
                  Gold recognitions at the Telangana and Andhra Pradesh Annual Solar Awards.
                </p>
                <div className="founder-highlights">
                  <div className="founder-highlight-item">
                    <span className="fh-val">12+</span>
                    <span className="fh-lbl">Years in Solar Energy</span>
                  </div>
                  <div className="founder-highlight-item">
                    <span className="fh-val">1,000+</span>
                    <span className="fh-lbl">Projects Delivered</span>
                  </div>
                  <div className="founder-highlight-item">
                    <span className="fh-val">5</span>
                    <span className="fh-lbl">National Awards</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR STORY
          ======================================================== */}
      <section className="our-story-section">
        <div className="container">
          <div className="about-split-grid reverse-on-desktop">
            <Reveal direction="left" delay={0.15}>
              <div className="about-visual-col">
                <div className="visual-card-wrap">
                  <img
                    src="/images/project-rise-college.jpg"
                    alt="Crystal Power Controls Solar Installation"
                    className="about-showcase-img"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.25}>
              <div className="about-text-col">
                <span className="section-kicker">OUR JOURNEY</span>
                <h2 className="section-title">Driven by Innovation. Powered by the Sun.</h2>
                <p className="about-body-lead">
                  Since our establishment in 2012, Crystal Power Controls has been working
                  towards making solar energy a practical and reliable power solution.
                </p>
                <p className="about-body-text">
                  What began with a vision to deliver dependable solar solutions has grown
                  into a company serving diverse customers across multiple sectors.
                </p>
                <p className="about-body-text">
                  Through engineering, procurement, installation and commissioning
                  capabilities, we continue to develop solar projects that support energy
                  efficiency and sustainability.
                </p>
                <div className="quote-box">
                  "Our journey is driven by a simple belief: a cleaner future begins with
                  smarter energy choices."
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. VISION & MISSION
          ======================================================== */}
      <section className="vision-mission-section">
        <div className="container">
          <Reveal direction="up" delay={0.1}>
            <div className="vm-grid">
              {/* Vision */}
              <div className="vm-card vm-vision">
                <div className="vm-icon-box">
                  <Target size={32} />
                </div>
                <h3 className="vm-title">OUR VISION</h3>
                <p className="vm-text">
                  To be a trusted and recognized solar energy solutions provider,
                  contributing to a sustainable future through innovation, engineering
                  excellence and clean energy development.
                </p>
              </div>

              {/* Mission */}
              <div className="vm-card vm-mission">
                <div className="vm-icon-box">
                  <Compass size={32} />
                </div>
                <h3 className="vm-title">OUR MISSION</h3>
                <p className="vm-text">
                  To deliver dependable, high-quality solar power solutions through
                  professional engineering, efficient project execution and a
                  customer-focused approach while promoting renewable energy adoption.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          5. OUR EXPERTISE
          ======================================================== */}
      <section className="expertise-section">
        <div className="container">
          <Reveal direction="down" delay={0.1}>
            <div className="section-header text-center">
              <span className="section-kicker">WHAT WE SPECIALIZE IN</span>
              <h2 className="section-title">Complete Solar Capabilities. One Trusted Partner.</h2>
              <p className="section-desc centered-desc">
                From site feasibility and multi-megawatt simulations to lifetime operations
                and maintenance.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="expertise-grid">
              <div className="expertise-card">
                <div className="exp-icon-box">
                  <Sun size={24} />
                </div>
                <h3 className="exp-title">Solar Project Development</h3>
                <p className="exp-desc">
                  Planning and developing photovoltaic solar power projects for different
                  applications.
                </p>
              </div>

              <div className="expertise-card">
                <div className="exp-icon-box">
                  <Compass size={24} />
                </div>
                <h3 className="exp-title">Design & Engineering</h3>
                <p className="exp-desc">
                  Site-specific system planning, technical design and engineering solutions.
                </p>
              </div>

              <div className="expertise-card">
                <div className="exp-icon-box">
                  <Boxes size={24} />
                </div>
                <h3 className="exp-title">Procurement & Supply</h3>
                <p className="exp-desc">
                  Sourcing and supplying solar modules, inverters and essential
                  balance-of-system components.
                </p>
              </div>

              <div className="expertise-card">
                <div className="exp-icon-box">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="exp-title">Construction & Installation</h3>
                <p className="exp-desc">
                  Professional execution of solar installations with attention to quality
                  and safety.
                </p>
              </div>

              <div className="expertise-card">
                <div className="exp-icon-box">
                  <FileCheck size={24} />
                </div>
                <h3 className="exp-title">Testing & Commissioning</h3>
                <p className="exp-desc">
                  System inspection, pre-commissioning checks, testing and project handover.
                </p>
              </div>

              <div className="expertise-card">
                <div className="exp-icon-box">
                  <Activity size={24} />
                </div>
                <h3 className="exp-title">Operations & Maintenance</h3>
                <p className="exp-desc">
                  Performance monitoring, routine maintenance and breakdown support.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          6. OUR BUSINESS MODELS
          ======================================================== */}
      <section className="business-models-section">
        <div className="container">
          <Reveal direction="down" delay={0.1}>
            <div className="section-header text-center">
              <span className="section-kicker">FLEXIBLE SOLAR INVESTMENT</span>
              <h2 className="section-title">
                Solar Solutions Designed Around Your Investment Approach
              </h2>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="models-dual-grid">
              <div className="about-model-box">
                <div className="model-label-pill">Ownership Model</div>
                <h3 className="about-model-title">CAPEX – Customer-Owned Solar</h3>
                <p className="about-model-body">
                  Under the CAPEX model, customers invest in their own solar power systems.
                  Crystal Power Controls supports the project through design, engineering,
                  procurement, installation and commissioning.
                </p>
                <ul className="about-model-list">
                  <li><Check size={16} color="#16a34a" /> Complete asset ownership & zero power dependency</li>
                  <li><Check size={16} color="#16a34a" /> Direct accelerated depreciation tax benefits</li>
                  <li><Check size={16} color="#16a34a" /> Maximum long-term financial yield & rapid payback</li>
                </ul>
              </div>

              <div className="about-model-box about-model-box-highlight">
                <div className="model-label-pill model-label-pill-green">Zero-Investment Model</div>
                <h3 className="about-model-title">OPEX – Third-Party Investment</h3>
                <p className="about-model-body">
                  Under the OPEX model, a third-party investor develops the solar power
                  system, with electricity supplied to the customer through a Power
                  Purchase Agreement (PPA).
                </p>
                <ul className="about-model-list">
                  <li><Check size={16} color="#16a34a" /> Zero initial capital expenditure required</li>
                  <li><Check size={16} color="#16a34a" /> Immediate per-unit utility tariff discount</li>
                  <li><Check size={16} color="#16a34a" /> Complete operations, repairs & maintenance covered</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          7. WHY CHOOSE CRYSTAL POWER CONTROLS?
          ======================================================== */}
      <section className="cpc-difference-section">
        <div className="container">
          <Reveal direction="down" delay={0.1}>
            <div className="section-header text-center">
              <span className="section-kicker">THE CPC DIFFERENCE</span>
              <h2 className="section-title">
                Excellence in Every Step of the Solar Journey
              </h2>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="diff-grid">
              <div className="diff-card">
                <div className="diff-icon"><Calendar size={24} /></div>
                <h3 className="diff-title">Industry Experience</h3>
                <p className="diff-desc">
                  Established in 2012, with experience in solar project development and
                  execution across diverse sectors.
                </p>
              </div>

              <div className="diff-card">
                <div className="diff-icon"><Layers size={24} /></div>
                <h3 className="diff-title">End-to-End Solutions</h3>
                <p className="diff-desc">
                  Complete project support from engineering and procurement to installation
                  and commissioning.
                </p>
              </div>

              <div className="diff-card">
                <div className="diff-icon"><Cpu size={24} /></div>
                <h3 className="diff-title">Quality Components</h3>
                <p className="diff-desc">
                  Carefully selected modules, inverters and electrical equipment from Tier-1
                  manufacturers.
                </p>
              </div>

              <div className="diff-card">
                <div className="diff-icon"><ShieldCheck size={24} /></div>
                <h3 className="diff-title">Safety & Compliance</h3>
                <p className="diff-desc">
                  Focus on electrical safety and applicable Indian (CEIG/MNRE) and international
                  standards.
                </p>
              </div>

              <div className="diff-card">
                <div className="diff-icon"><CheckCircle2 size={24} /></div>
                <h3 className="diff-title">Dedicated Professionals</h3>
                <p className="diff-desc">
                  A team-oriented approach to site assessment, engineering, installation and
                  support.
                </p>
              </div>

              <div className="diff-card">
                <div className="diff-icon"><Award size={24} /></div>
                <h3 className="diff-title">Customer Commitment</h3>
                <p className="diff-desc">
                  Focused on reliable project delivery and long-term customer relationships
                  spanning decades.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          8. OUR ACHIEVEMENTS
          ======================================================== */}
      <section className="milestones-section">
        <div className="container">
          <Reveal direction="down" delay={0.1}>
            <div className="section-header text-center">
              <span className="section-kicker">OUR MILESTONES</span>
              <h2 className="section-title">Experience That Reflects Our Commitment</h2>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="milestones-grid">
              <div className="milestone-card">
                <div className="ms-num">2012</div>
                <div className="ms-title">Established</div>
                <p className="ms-sub">Over a decade of trusted engineering heritage</p>
              </div>

              <div className="milestone-card">
                <div className="ms-num"><AnimatedCounter value={12} suffix="+" /></div>
                <div className="ms-title">Years of Industry Experience</div>
                <p className="ms-sub">Pioneering clean energy adoption across sectors</p>
              </div>

              <div className="milestone-card">
                <div className="ms-num"><AnimatedCounter value={10} suffix="+ MW" /></div>
                <div className="ms-title">Installation Experience</div>
                <p className="ms-sub">Stated in our company profile across India</p>
              </div>

              <div className="milestone-card">
                <div className="ms-num"><AnimatedCounter value={1000} suffix="+" /></div>
                <div className="ms-title">Projects Executed</div>
                <p className="ms-sub">Stated in our company proposal</p>
              </div>

              <div className="milestone-card">
                <div className="ms-num">PAN INDIA</div>
                <div className="ms-title">Project Operations</div>
                <p className="ms-sub">Offices in Ongole and Hyderabad</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          9. AWARDS & RECOGNITION
          ======================================================== */}
      <section className="about-awards-section">
        <div className="container">
          <Reveal direction="scale" delay={0.15}>
            <div className="about-awards-box">
              <div className="about-awards-icon-wrap">
                <Award size={48} />
              </div>
              <div>
                <span className="section-kicker text-green-light">RECOGNITION OF EXCELLENCE</span>
                <h2 className="awards-hero-title">
                  Celebrating Our Commitment to Solar Excellence
                </h2>
                <p className="awards-p">
                  Crystal Power Controls has received <strong>Diamond, Gold and Platinum</strong> recognition
                  for excellence in Residential Rooftop and Commercial Solar Projects at
                  <strong> Global Solar SuryaCon</strong>.
                </p>
                <p className="awards-p-sub">
                  These recognitions encourage us to continue delivering quality solar
                  solutions and contributing to a sustainable energy future.
                </p>
                <div className="awards-pills">
                  <span className="award-pill">💎 Diamond Recognition</span>
                  <span className="award-pill">🥇 Gold Recognition</span>
                  <span className="award-pill">🏆 Platinum Recognition</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          10. FREQUENTLY ASKED QUESTIONS (FAQ SECTION)
          ======================================================== */}
      <section className="about-faq-section">
        <div className="container">
          <Reveal direction="down" delay={0.1}>
            <div className="section-header text-center">
              <span className="section-kicker">GOT QUESTIONS?</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-desc centered-desc">
                Find quick answers regarding our background, project execution models,
                timelines, and certifications.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="faq-container-box">
              {ABOUT_FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`faq-item-card ${isOpen ? 'faq-item-open' : ''}`}
                  >
                    <button
                      className="faq-question-btn"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-q-text">
                        <HelpCircle size={18} className="faq-icon-q" />
                        <span>{faq.question}</span>
                      </div>
                      <ChevronDown size={18} className="faq-chevron" />
                    </button>

                    {isOpen && (
                      <div className="faq-answer-body">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <div className="faq-footer-help">
            <p>
              Have a specific technical or site question?{' '}
              <Link to="/contact" className="faq-contact-link">
                Speak directly with our solar engineering consultants →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. CLOSING CTA
          ======================================================== */}
      <section className="about-closing-cta">
        <div className="container">
          <Reveal direction="scale" delay={0.15}>
            <div className="closing-banner">
              <h2 className="closing-title">Together, Let's Power a Greener Tomorrow.</h2>
              <p className="closing-desc">
                Looking for a reliable solar energy partner for your home, business or
                industrial facility? Connect with Crystal Power Controls and explore a solar
                solution designed around your energy requirements.
              </p>
              <div className="closing-buttons">
                <Link to="/contact" className="btn-cta-primary">
                  <span>Get a Quote</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-cta-secondary">
                  <Phone size={16} />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
