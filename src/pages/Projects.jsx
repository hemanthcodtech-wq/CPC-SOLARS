import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import AnimatedCounter from '../components/AnimatedCounter';
import MagneticButton from '../components/MagneticButton';
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  Layers,
  Zap,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Building,
  Factory,
  Compass,
  Boxes,
  Activity,
  Check
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import ServiceEnquiryForm from '../components/ServiceEnquiryForm';
import './Projects.css';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'industrial', label: 'Industrial Projects' },
  { id: 'commercial', label: 'Commercial Projects' },
  { id: 'institutional', label: 'Institutional Projects' },
  { id: 'dairy', label: 'Dairy & Food Processing' },
  { id: 'cold-storage', label: 'Cold Storage Projects' },
  { id: 'infrastructure', label: 'Infrastructure Projects' }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => {
          if (activeCategory === 'industrial') {
            return p.categoryFilter === 'industrial' || p.category === 'Industrial';
          }
          if (activeCategory === 'commercial') {
            return p.categoryFilter === 'commercial' || p.category === 'Commercial';
          }
          if (activeCategory === 'institutional') {
            return (
              p.categoryFilter === 'institutional' ||
              p.category === 'Educational' ||
              p.category.includes('Institutional')
            );
          }
          if (activeCategory === 'dairy') {
            return p.categoryFilter === 'dairy' || p.category === 'Dairy';
          }
          if (activeCategory === 'cold-storage') {
            return p.categoryFilter === 'cold-storage' || p.category === 'Cold Storage';
          }
          if (activeCategory === 'infrastructure') {
            return p.categoryFilter === 'infrastructure' || p.category === 'Infrastructure';
          }
          return true;
        });

  return (
    <div className="projects-page-main">
      {/* ========================================================
          1. HERO SECTION (ENHANCED PREMIUM)
          ======================================================== */}
      <section className="projects-hero-section">
        <div className="projects-hero-bg">
          <img
            src="/images/hero-banner-3.jpg"
            alt="Crystal Power Controls Projects"
            className="projects-hero-img"
          />
          <div className="projects-hero-overlay"></div>
          <div className="projects-hero-glow"></div>
        </div>

        <div className="container projects-hero-container">
          <div className="projects-hero-grid">
            <div className="projects-hero-content">
              <motion.div
                className="projects-eyebrow-pill"
                initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Sparkles size={14} className="badge-sparkle" />
                <span>OUR PROJECTS</span>
              </motion.div>

              <motion.h1
                className="projects-hero-title"
                initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                Powering Progress Through{' '}
                <span className="projects-hero-highlight">Proven Solar Projects</span>
              </motion.h1>

              <motion.p
                className="projects-hero-lead"
                initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Every project represents our commitment to engineering excellence, reliable
                execution and sustainable energy.
              </motion.p>

              <motion.p
                className="projects-hero-sub"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                From educational institutions and industrial facilities to airports, dairy plants
                and cold storage facilities, Crystal Power Controls delivers solar energy projects
                across diverse sectors.
              </motion.p>

              <motion.div
                className="projects-hero-buttons"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <MagneticButton>
                  <a href="#portfolio" className="btn-hero-primary">
                    <span>Explore Our Projects</span>
                    <ArrowRight size={17} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="#start-project" className="btn-hero-secondary">
                    <Phone size={16} />
                    <span>Start Your Solar Project</span>
                  </a>
                </MagneticButton>
              </motion.div>

              {/* Trust Indicators */}
              <div className="projects-trust-strip">
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>10+ MW Demonstrated Experience</span>
                </div>
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>1,000+ Projects</span>
                </div>
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>Pan India Footprint</span>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Stats Card */}
            <div className="projects-hero-card-col">
              <div className="projects-floating-glass-card">
                <div className="projects-glass-header">
                  <div className="projects-glass-icon-circle">
                    <Zap size={26} color="#4ade80" />
                  </div>
                  <div>
                    <h3 className="projects-glass-title">19+ Landmark Portfolios</h3>
                    <p className="projects-glass-sub">Across Andhra Pradesh & Telangana</p>
                  </div>
                </div>

                <div className="projects-glass-stats-grid">
                  <div className="glass-stat-item">
                    <div className="glass-stat-num">5 MW</div>
                    <div className="glass-stat-lbl">Rajiv Gandhi Airport</div>
                  </div>
                  <div className="glass-stat-item">
                    <div className="glass-stat-num">700 kWp</div>
                    <div className="glass-stat-lbl">IICT Hyderabad Colony</div>
                  </div>
                  <div className="glass-stat-item">
                    <div className="glass-stat-num">495 kWp</div>
                    <div className="glass-stat-lbl">Rise Krishna Sai Group</div>
                  </div>
                  <div className="glass-stat-item">
                    <div className="glass-stat-num">350 kWp</div>
                    <div className="glass-stat-lbl">Sri Ram Milk Dairy</div>
                  </div>
                </div>

                <div className="projects-glass-footer">
                  <ShieldCheck size={18} color="#22c55e" />
                  <span>CEIG Safety, DISCOM Sync & ISO Compliant Execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. OUR ACHIEVEMENTS (STATISTICS SECTION)
          ======================================================== */}
      <section className="achievements-section">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">OUR PROJECT EXPERIENCE</span>
              <h2 className="section-title">Experience That Speaks Through Our Work</h2>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achieve-val"><AnimatedCounter value={12} suffix="+ Years" duration={1.5} /></div>
                <div className="achieve-lbl">Industry Experience</div>
                <p className="achieve-sub">Trusted engineering heritage since 2012</p>
              </div>

              <div className="achievement-card">
                <div className="achieve-val"><AnimatedCounter value={10} suffix="+ MW" duration={1.5} /></div>
                <div className="achieve-lbl">Solar Installation Experience</div>
                <p className="achieve-sub">As stated in our company profile</p>
              </div>

              <div className="achievement-card">
                <div className="achieve-val"><AnimatedCounter value={1000} suffix="+" duration={1.8} /></div>
                <div className="achieve-lbl">Projects Executed</div>
                <p className="achieve-sub">As stated in company proposal</p>
              </div>

              <div className="achievement-card">
                <div className="achieve-val">PAN INDIA</div>
                <div className="achieve-lbl">Project Operations</div>
                <p className="achieve-sub">Offices in Ongole & Hyderabad</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          3. PROJECT PORTFOLIO & CATEGORY FILTERING (All 19 Projects)
          ======================================================== */}
      <section className="portfolio-section" id="portfolio">
        <div className="container">
          <Reveal direction="down">
            <div className="portfolio-header">
              <span className="section-kicker">OUR PROJECT PORTFOLIO</span>
              <h2 className="section-title">Solar Projects That Make a Difference</h2>
              <p className="section-desc">
                Explore our solar installation experience across commercial, industrial,
                institutional and infrastructure sectors.
              </p>
            </div>
          </Reveal>

          {/* Filter Pills */}
          <Reveal direction="up" delay={0.1}>
            <div className="filter-pill-container">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Project Cards Grid */}
          <Reveal direction="up" delay={0.2}>
            <div className="portfolio-grid">
            {filteredProjects.map((p) => (
              <div key={p.id} className="portfolio-card">
                <div className="card-image-box">
                  <img src={p.image} alt={p.title} className="card-photo" />
                  <span className="card-cap-badge">{p.capacity}</span>
                </div>

                <div className="card-body">
                  <div className="card-cat-badge">{p.category}</div>
                  <div className="card-loc">
                    <MapPin size={13} color="#16a34a" />
                    <span>{p.location}</span>
                  </div>
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-meta">
                    Project capacity · {p.scope}
                  </p>

                  <Link to={`/projects/${p.slug}`} className="card-action-link">
                    <span>View Project Details</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          4. OUR PROJECT EXECUTION
          ======================================================== */}
      <section className="execution-section">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">HOW WE WORK</span>
              <h2 className="section-title">From Planning to Successful Commissioning</h2>
              <p className="section-desc centered-desc">
                Every project follows a structured execution approach to guarantee safety and maximum power yield.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="execution-steps-grid">
            <div className="exec-step-box">
              <div className="exec-num">01</div>
              <h3 className="exec-title">Site Assessment</h3>
              <p className="exec-desc">Comprehensive irradiation, roof shadow and structural load appraisal.</p>
            </div>
            <div className="exec-step-box">
              <div className="exec-num">02</div>
              <h3 className="exec-title">Design & Engineering</h3>
              <p className="exec-desc">PVSyst simulations, single line diagrams and optimized cable scheduling.</p>
            </div>
            <div className="exec-step-box">
              <div className="exec-num">03</div>
              <h3 className="exec-title">Procurement & Supply</h3>
              <p className="exec-desc">Tier-1 modules, string inverters, hot-dip structures and certified BOS.</p>
            </div>
            <div className="exec-step-box">
              <div className="exec-num">04</div>
              <h3 className="exec-title">Installation & Construction</h3>
              <p className="exec-desc">Strict adherence to Indian CEIG electrical safety and structural norms.</p>
            </div>
            <div className="exec-step-box">
              <div className="exec-num">05</div>
              <h3 className="exec-title">Testing & Commissioning</h3>
              <p className="exec-desc">Pre-commissioning grid synchronization, insulation resistance, and relay checks.</p>
            </div>
            <div className="exec-step-box">
              <div className="exec-num">06</div>
              <h3 className="exec-title">Project Handover</h3>
              <p className="exec-desc">As-built technical documentation, online monitoring training, and handover.</p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          5. WHY OUR PROJECTS STAND OUT
          ======================================================== */}
      <section className="standout-section">
        <div className="container">
          <Reveal direction="scale" delay={0.1}>
            <div className="standout-box">
            <div className="standout-left">
              <span className="section-kicker text-green-light">THE CPC ADVANTAGE</span>
              <h2 className="standout-heading">Why Our Projects Stand Out</h2>
              <p className="standout-desc">
                From high-security airport installations to sensitive dairy cold chains, our
                technical discipline ensures uninterrupted energy yields.
              </p>
            </div>

            <div className="standout-right">
              <div className="standout-item">
                <CheckCircle2 size={20} color="#4ade80" className="standout-icon" />
                <span>Site-specific engineering and planning.</span>
              </div>
              <div className="standout-item">
                <CheckCircle2 size={20} color="#4ade80" className="standout-icon" />
                <span>Quality-focused equipment selection.</span>
              </div>
              <div className="standout-item">
                <CheckCircle2 size={20} color="#4ade80" className="standout-icon" />
                <span>Professional installation and commissioning.</span>
              </div>
              <div className="standout-item">
                <CheckCircle2 size={20} color="#4ade80" className="standout-icon" />
                <span>Electrical safety and protection systems.</span>
              </div>
              <div className="standout-item">
                <CheckCircle2 size={20} color="#4ade80" className="standout-icon" />
                <span>Structured project execution.</span>
              </div>
              <div className="standout-item">
                <CheckCircle2 size={20} color="#4ade80" className="standout-icon" />
                <span>Technical documentation and handover.</span>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          6. FINAL CALL TO ACTION BANNER & ENQUIRY
          ======================================================== */}
      <section className="projects-cta-section" id="start-project">
        <div className="container">
          <Reveal direction="scale" delay={0.1}>
            <div className="projects-cta-banner">
              <h2 className="projects-cta-title">Have a Solar Project in Mind?</h2>
              <p className="projects-cta-desc">
                Whether it is a commercial rooftop, industrial facility or large-scale solar power project,
                Crystal Power Controls is ready to discuss your requirements.
              </p>
              <p className="projects-cta-sub">
                Let's build a cleaner and more sustainable future together.
              </p>
              <div className="projects-cta-btns">
                <MagneticButton>
                  <a href="#project-enquiry" className="btn-cta-primary">
                    <span>Start Your Solar Project</span>
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

          <Reveal direction="up" delay={0.2}>
            <div style={{ marginTop: '50px' }} id="project-enquiry">
              <ServiceEnquiryForm defaultService="Industrial Solar" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
