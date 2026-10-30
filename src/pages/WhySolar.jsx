import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import MagneticButton from '../components/MagneticButton';
import {
  ArrowRight,
  Sun,
  Zap,
  Leaf,
  ShieldCheck,
  TrendingDown,
  Layers,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Home as HomeIcon,
  Building2,
  Factory,
  Wheat,
  Check,
  CheckCircle2,
  X,
  Phone,
  Cpu,
  Compass,
  Boxes,
  Activity,
  Award
} from 'lucide-react';
import ServiceEnquiryForm from '../components/ServiceEnquiryForm';
import WhyChooseUsTimeline from '../components/WhyChooseUsTimeline';
import './WhySolar.css';

const FAQS_LIST = [
  {
    q: "1. Is solar energy suitable for my property?",
    a: "Suitability depends on available space, sunlight exposure, electricity consumption, roof or land conditions, and applicable regulations. Our engineering team conducts a thorough feasibility and shadow assessment to confirm."
  },
  {
    q: "2. Does solar work on cloudy days?",
    a: "Solar panels can generate electricity in cloudy conditions, although output is generally lower than on sunny days. Modern high-efficiency monocrystalline modules capture both direct and diffuse ambient radiation."
  },
  {
    q: "3. Does a solar system require maintenance?",
    a: "Yes. Periodic inspection, cleaning, and performance monitoring help maintain system performance and prevent soiling losses over time."
  },
  {
    q: "4. What is the difference between CAPEX and OPEX?",
    a: "CAPEX involves investing in and owning the solar system directly with full asset benefits. OPEX generally involves a third-party investment model under a Power Purchase Agreement (PPA) with zero upfront capital."
  },
  {
    q: "5. Can solar power reduce my electricity bill?",
    a: "It can reduce grid electricity consumption, but actual savings depend on system size, usage patterns, tariffs, and applicable net-metering policies."
  },
  {
    q: "6. How do I get started?",
    a: "Contact Crystal Power Controls for an initial discussion about your electricity requirements, rooftop or site conditions, and preliminary capacity sizing."
  }
];

export default function WhySolar() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="why-solar-main-page">
      {/* ========================================================
          HERO SECTION (ENHANCED PREMIUM)
          ======================================================== */}
      <section className="why-hero-section">
        <div className="why-hero-bg">
          <img
            src="/images/why-solar-macro.jpg"
            alt="Photovoltaic Solar Cells Glistening in Sunlight"
            className="why-hero-img"
          />
          <div className="why-hero-overlay"></div>
          <div className="why-hero-glow"></div>
        </div>

        <div className="container why-hero-container">
          <div className="why-hero-grid">
            <div className="why-hero-content">
              <motion.div
                className="why-eyebrow-pill"
                initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Sparkles size={14} className="badge-sparkle" />
                <span>WHY SOLAR ENERGY?</span>
              </motion.div>

              <motion.h1
                className="why-hero-title"
                initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                Make the Switch to Solar. <br />
                <span className="why-hero-highlight">Power a Brighter Tomorrow.</span>
              </motion.h1>

              <motion.p
                className="why-hero-lead"
                initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Solar energy is a smart, sustainable way to generate electricity using the
                power of the sun. It helps reduce dependence on conventional energy
                sources, supports environmental sustainability, and offers an opportunity to
                manage long-term electricity expenses.
              </motion.p>

              <motion.div
                className="why-hero-buttons"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                <MagneticButton>
                  <a href="#benefits" className="btn-hero-primary">
                    <span>Explore Solar Solutions</span>
                    <ArrowRight size={17} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="#consultation" className="btn-hero-secondary">
                    <Phone size={16} />
                    <span>Get a Free Consultation</span>
                  </a>
                </MagneticButton>
              </motion.div>

              {/* Trust Indicators */}
              <div className="why-trust-strip">
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>100% Clean Energy</span>
                </div>
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>Decades of Free Fuel</span>
                </div>
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>Low Operating Effort</span>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Value Card */}
            <div className="why-hero-card-col">
              <div className="why-floating-glass-card">
                <div className="why-glass-header">
                  <div className="why-glass-icon-circle">
                    <Sun size={26} color="#4ade80" />
                  </div>
                  <div>
                    <h3 className="why-glass-title">Sustainable Advantage</h3>
                    <p className="why-glass-sub">Solar vs Conventional Energy</p>
                  </div>
                </div>

                <div className="why-glass-specs-list">
                  <div className="why-spec-row">
                    <span className="why-spec-k">Fuel Source</span>
                    <span className="why-spec-v">Free, Unlimited Sunlight</span>
                  </div>
                  <div className="why-spec-row">
                    <span className="why-spec-k">Carbon Emissions</span>
                    <span className="why-spec-v">Zero Operational Emissions</span>
                  </div>
                  <div className="why-spec-row">
                    <span className="why-spec-k">System Lifespan</span>
                    <span className="why-spec-v">25+ Years Generation</span>
                  </div>
                  <div className="why-spec-row">
                    <span className="why-spec-k">Tariff Volatility</span>
                    <span className="why-spec-v">Hedged Against Hikes</span>
                  </div>
                </div>

                <div className="why-glass-footer">
                  <ShieldCheck size={18} color="#22c55e" />
                  <span>Engineered with Tier-1 Photovoltaic Reliability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          1. WHY CHOOSE SOLAR ENERGY?
          ======================================================== */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-grid">
            <Reveal direction="left" delay={0.1}>
              <div className="why-choose-text">
                <span className="section-kicker">SUSTAINABLE TRANSITION</span>
                <h2 className="section-title">Why Choose Solar Energy?</h2>
                <p className="why-choose-desc">
                  Solar energy is a renewable source of power that transforms sunlight into
                  usable electricity. By adopting solar technology, homes, businesses,
                  industries, and agricultural facilities can take a step towards a cleaner
                  and more energy-conscious future.
                </p>

                <div className="why-choose-bullets">
                  <div className="why-bullet-item">
                    <div className="bullet-check"><Check size={16} /></div>
                    <div>
                      <strong>Renewable Energy:</strong> Harness sunlight, a naturally replenished energy source.
                    </div>
                  </div>
                  <div className="why-bullet-item">
                    <div className="bullet-check"><Check size={16} /></div>
                    <div>
                      <strong>Potential Electricity Savings:</strong> Reduce dependence on grid electricity and manage energy costs.
                    </div>
                  </div>
                  <div className="why-bullet-item">
                    <div className="bullet-check"><Check size={16} /></div>
                    <div>
                      <strong>Environment Friendly:</strong> Support lower carbon emissions and reduced fossil fuel consumption.
                    </div>
                  </div>
                  <div className="why-bullet-item">
                    <div className="bullet-check"><Check size={16} /></div>
                    <div>
                      <strong>Energy Independence:</strong> Generate electricity closer to where it is consumed.
                    </div>
                  </div>
                  <div className="why-bullet-item">
                    <div className="bullet-check"><Check size={16} /></div>
                    <div>
                      <strong>Low Routine Maintenance:</strong> Solar PV systems generally require periodic inspection and cleaning.
                    </div>
                  </div>
                  <div className="why-bullet-item">
                    <div className="bullet-check"><Check size={16} /></div>
                    <div>
                      <strong>Long-Term Value:</strong> Make a lasting investment in sustainable energy infrastructure.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.25}>
              <div className="why-choose-visual">
                <div className="why-image-card">
                  <img
                    src="/images/why-solar-macro.jpg"
                    alt="High Tech Solar Cell Technology"
                    className="why-showcase-photo"
                  />
                  <div className="why-img-badge">
                    <span className="badge-highlight-text">Zero Emissions</span>
                    <span className="badge-sub-text">100% Clean Sunlight Conversion</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. BENEFITS OF GOING SOLAR (6 CARDS)
          ======================================================== */}
      <section className="benefits-section-page" id="benefits">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">KEY ADVANTAGES</span>
              <h2 className="section-title">Benefits of Going Solar</h2>
              <p className="section-desc centered-desc">
                From individual rooftops to heavy industrial setups, clean solar energy unlocks
                enduring efficiency, cost control, and environmental responsibility.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="benefits-cards-grid">
            <div className="benefit-card-box">
              <div className="benefit-icon-wrap"><TrendingDown size={24} /></div>
              <h3 className="benefit-card-title">Lower Electricity Expenses</h3>
              <p className="benefit-card-p">
                Generate your own electricity and potentially reduce the amount of power you
                purchase from the grid.
              </p>
            </div>

            <div className="benefit-card-box">
              <div className="benefit-icon-wrap"><Leaf size={24} /></div>
              <h3 className="benefit-card-title">Clean & Green Energy</h3>
              <p className="benefit-card-p">
                Solar power helps reduce reliance on fossil fuels and contributes to a cleaner
                environment.
              </p>
            </div>

            <div className="benefit-card-box">
              <div className="benefit-icon-wrap"><ShieldCheck size={24} /></div>
              <h3 className="benefit-card-title">Sustainable Investment</h3>
              <p className="benefit-card-p">
                A properly designed solar installation can deliver value over its operating
                life.
              </p>
            </div>

            <div className="benefit-card-box">
              <div className="benefit-icon-wrap"><Zap size={24} /></div>
              <h3 className="benefit-card-title">Energy Independence</h3>
              <p className="benefit-card-p">
                Take greater control over your electricity generation and consumption.
              </p>
            </div>

            <div className="benefit-card-box">
              <div className="benefit-icon-wrap"><Sun size={24} /></div>
              <h3 className="benefit-card-title">Minimal Routine Maintenance</h3>
              <p className="benefit-card-p">
                Solar PV systems have relatively few moving parts and generally require periodic
                cleaning and inspection.
              </p>
            </div>

            <div className="benefit-card-box">
              <div className="benefit-icon-wrap"><Layers size={24} /></div>
              <h3 className="benefit-card-title">Suitable for Multiple Sectors</h3>
              <p className="benefit-card-p">
                Solar solutions can be considered for residential, commercial, industrial, and
                agricultural applications.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          3. HOW DOES SOLAR ENERGY WORK? (4-STEP ILLUSTRATED PROCESS)
          ======================================================== */}
      <section className="how-solar-works-section">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">SCIENCE & INTEGRATION</span>
              <h2 className="section-title">How Does Solar Energy Work?</h2>
              <p className="section-desc centered-desc">
                A streamlined, continuous cycle that turns natural sunlight into reliable power for your appliances.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="works-timeline-grid">
            <div className="work-step-card">
              <div className="work-step-num">Step 1</div>
              <h3 className="work-step-title">Sunlight Capture</h3>
              <p className="work-step-p">
                Solar panels absorb sunlight and convert it into direct current (DC) electricity.
              </p>
            </div>

            <div className="work-step-card">
              <div className="work-step-num">Step 2</div>
              <h3 className="work-step-title">Power Conversion</h3>
              <p className="work-step-p">
                An inverter converts DC electricity into alternating current (AC), which can be
                used by electrical equipment.
              </p>
            </div>

            <div className="work-step-card">
              <div className="work-step-num">Step 3</div>
              <h3 className="work-step-title">Electricity Usage</h3>
              <p className="work-step-p">
                The generated electricity is supplied to the connected electrical loads in your
                premises.
              </p>
            </div>

            <div className="work-step-card">
              <div className="work-step-num">Step 4</div>
              <h3 className="work-step-title">Grid Interaction</h3>
              <p className="work-step-p">
                Depending on the system configuration and applicable approvals, excess
                electricity may be exported to the grid.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          4. SOLAR VS CONVENTIONAL ELECTRICITY (COMPARISON TABLE)
          ======================================================== */}
      <section className="comparison-section">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">THE COMPARISON</span>
              <h2 className="section-title">Solar vs Conventional Electricity</h2>
              <p className="section-desc centered-desc">
                Understand the core operational, financial, and environmental differences.
              </p>
            </div>
          </Reveal>

          <Reveal direction="scale" delay={0.15}>
            <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="feature-col">Feature / Aspect</th>
                  <th className="solar-col">Solar Energy</th>
                  <th className="grid-col">Conventional Grid Electricity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-td">Energy Source</td>
                  <td className="solar-td">
                    <span className="tag-positive">Uses renewable sunlight</span>
                  </td>
                  <td className="grid-td">Often depends partly on fossil fuels</td>
                </tr>
                <tr>
                  <td className="feature-td">Electricity Expenses</td>
                  <td className="solar-td">
                    <span className="tag-positive">Can reduce grid electricity purchases</span>
                  </td>
                  <td className="grid-td">Electricity is purchased from the grid</td>
                </tr>
                <tr>
                  <td className="feature-td">Generation Location</td>
                  <td className="solar-td">
                    <span className="tag-positive">Generates power at the installation site</span>
                  </td>
                  <td className="grid-td">Power is generated elsewhere</td>
                </tr>
                <tr>
                  <td className="feature-td">Environmental Footprint</td>
                  <td className="solar-td">
                    <span className="tag-positive">Supports lower operational emissions</span>
                  </td>
                  <td className="grid-td">Emissions depend on the energy mix</td>
                </tr>
                <tr>
                  <td className="feature-td">Initial Capital Investment</td>
                  <td className="solar-td">Requires an initial installation investment</td>
                  <td className="grid-td">Usually no solar installation investment</td>
                </tr>
              </tbody>
            </table>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          5. WHO CAN BENEFIT FROM SOLAR? (SECTORS)
          ======================================================== */}
      <section className="sectors-benefit-section">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">DIVERSE APPLICATIONS</span>
              <h2 className="section-title">Who Can Benefit from Solar?</h2>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="sectors-benefit-grid">
            <div className="sector-b-card">
              <div className="sector-b-img-wrap">
                <img src="/images/residential-solar-home.jpg" alt="Residential Solar" />
                <div className="sector-b-icon"><HomeIcon size={22} /></div>
              </div>
              <div className="sector-b-body">
                <h3 className="sector-b-title">Residential</h3>
                <p className="sector-b-desc">
                  Make your home more energy-conscious with rooftop solar solutions tailored
                  to domestic loads.
                </p>
                <Link to="/services/residential-solar" className="sector-b-link">
                  <span>Explore Residential Solar</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="sector-b-card">
              <div className="sector-b-img-wrap">
                <img src="/images/project-rise-college.jpg" alt="Commercial Solar" />
                <div className="sector-b-icon"><Building2 size={22} /></div>
              </div>
              <div className="sector-b-body">
                <h3 className="sector-b-title">Commercial</h3>
                <p className="sector-b-desc">
                  Explore solar installations for offices, shops, hotels, and commercial
                  complexes.
                </p>
                <Link to="/services/commercial-solar" className="sector-b-link">
                  <span>Explore Commercial Solar</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="sector-b-card">
              <div className="sector-b-img-wrap">
                <img src="/images/project-dairy-plant.jpg" alt="Industrial Solar" />
                <div className="sector-b-icon"><Factory size={22} /></div>
              </div>
              <div className="sector-b-body">
                <h3 className="sector-b-title">Industrial</h3>
                <p className="sector-b-desc">
                  Support large electricity requirements with appropriately designed industrial
                  solar PV systems.
                </p>
                <Link to="/services/industrial-solar" className="sector-b-link">
                  <span>Explore Industrial Solar</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="sector-b-card">
              <div className="sector-b-img-wrap">
                <img src="/images/solar-agriculture-farm.jpg" alt="Agricultural Solar Irrigation" />
                <div className="sector-b-icon"><Wheat size={22} /></div>
              </div>
              <div className="sector-b-body">
                <h3 className="sector-b-title">Agriculture</h3>
                <p className="sector-b-desc">
                  Explore solar energy applications for agricultural irrigation pumps, cold
                  storage, and farm operations.
                </p>
                <Link to="/services/industrial-solar" className="sector-b-link">
                  <span>Explore Agri Solar</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          6. CHOOSE YOUR SOLAR INVESTMENT MODEL (CAPEX vs OPEX)
          ======================================================== */}
      <section className="investment-models-section">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">FINANCIAL FLEXIBILITY</span>
              <h2 className="section-title">Choose Your Solar Investment Model</h2>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="models-comparison-grid">
            <div className="model-box-card">
              <div className="model-pill-badge">Self-Owned Model</div>
              <h3 className="model-box-title">CAPEX – Invest in Your Own Solar System</h3>
              <p className="model-box-sub">
                Under the CAPEX model, the customer invests in the solar installation and owns
                the system.
              </p>
              <ul className="model-box-bullets">
                <li><Check size={16} color="#16a34a" /> Customer-funded installation</li>
                <li><Check size={16} color="#16a34a" /> Ownership of the solar system</li>
                <li><Check size={16} color="#16a34a" /> Opportunity for long-term electricity savings</li>
                <li><Check size={16} color="#16a34a" /> System investment and maintenance responsibilities as agreed</li>
              </ul>
            </div>

            <div className="model-box-card model-box-highlight">
              <div className="model-pill-badge model-pill-green">PPA Third-Party Model</div>
              <h3 className="model-box-title">OPEX – Solar Power Purchase Agreement</h3>
              <p className="model-box-sub">
                Under the OPEX model, a third-party investor funds the solar installation and
                supplies electricity under an agreed Power Purchase Agreement (PPA).
              </p>
              <ul className="model-box-bullets">
                <li><Check size={16} color="#16a34a" /> Lower or no upfront system investment for the customer</li>
                <li><Check size={16} color="#16a34a" /> Power purchased under agreed PPA terms</li>
                <li><Check size={16} color="#16a34a" /> Contract-based arrangement</li>
                <li><Check size={16} color="#16a34a" /> Responsibilities defined in the agreement</li>
              </ul>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          7. WHY CHOOSE CRYSTAL POWER CONTROLS?
          ======================================================== */}
      <WhyChooseUsTimeline />

      <section className="why-cpc-section">
        <div className="container">
          <Reveal direction="scale" delay={0.1}>
            <div className="why-cpc-box">
            <div className="why-cpc-left">
              <span className="section-kicker text-green-light">OUR CAPABILITY</span>
              <h2 className="why-cpc-title">Why Choose Crystal Power Controls?</h2>
              <p className="why-cpc-lead">
                Crystal Power Controls focuses on solar PV project development, design,
                engineering, construction, and operation.
              </p>
            </div>

            <div className="why-cpc-right">
              <div className="cpc-pill-item">
                <CheckCircle2 size={18} color="#4ade80" />
                <span>Experience in solar project development</span>
              </div>
              <div className="cpc-pill-item">
                <CheckCircle2 size={18} color="#4ade80" />
                <span>Solutions for different customer segments</span>
              </div>
              <div className="cpc-pill-item">
                <CheckCircle2 size={18} color="#4ade80" />
                <span>CAPEX and OPEX project models</span>
              </div>
              <div className="cpc-pill-item">
                <CheckCircle2 size={18} color="#4ade80" />
                <span>Engineering and system design capabilities</span>
              </div>
              <div className="cpc-pill-item">
                <CheckCircle2 size={18} color="#4ade80" />
                <span>Equipment supply and installation coordination</span>
              </div>
              <div className="cpc-pill-item">
                <CheckCircle2 size={18} color="#4ade80" />
                <span>Commissioning and operational support</span>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          8. FREQUENTLY ASKED QUESTIONS
          ======================================================== */}
      <section className="why-faq-section">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">QUESTIONS ANSWERED</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <div className="why-faq-box">
              {FAQS_LIST.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className={`why-faq-card ${isOpen ? 'open' : ''}`}>
                    <button
                      className="why-faq-btn"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <div className="why-faq-q">
                        <HelpCircle size={18} className="why-faq-q-icon" />
                        <span>{faq.q}</span>
                      </div>
                      <ChevronDown size={18} className="why-faq-chevron" />
                    </button>
                    {isOpen && (
                      <div className="why-faq-ans">
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
          9. FINAL CALL TO ACTION & CONSULTATION
          ======================================================== */}
      <section className="why-final-cta-section" id="consultation">
        <div className="container">
          <Reveal direction="scale" delay={0.1}>
            <div className="why-final-banner">
              <h2 className="why-banner-title">Your Solar Journey Starts Here.</h2>
              <p className="why-banner-desc">
                Take the next step towards cleaner energy and smarter electricity management.
                Connect with Crystal Power Controls to explore a solar solution for your
                requirements.
              </p>
              <div className="why-banner-btns">
                <MagneticButton>
                  <a href="#why-enquiry-form" className="btn-cta-primary">
                    <span>Get a Solar Consultation</span>
                    <ArrowRight size={16} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link to="/contact" className="btn-cta-secondary">
                    <Phone size={16} />
                    <span>Contact Us</span>
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div style={{ marginTop: '50px' }} id="why-enquiry-form">
              <ServiceEnquiryForm defaultService="Commercial Solar" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
