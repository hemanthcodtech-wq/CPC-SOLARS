import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Sparkles,
  MapPin,
  Calendar,
  Layers,
  ShieldCheck,
  Check,
  Phone,
  Zap,
  Award,
  Sun
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import ServiceEnquiryForm from '../components/ServiceEnquiryForm';
import ScopeOfWork from '../components/ScopeOfWork';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = SERVICES_DATA[serviceSlug] || SERVICES_DATA['residential-solar'];
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="service-detail-page">
      {/* ========================================================
          ENHANCED HERO BANNER
          ======================================================== */}
      <section className="sd-hero-section">
        <div className="sd-hero-bg">
          <img
            src={service.heroImage}
            alt={service.title}
            className="sd-hero-img"
          />
          <div className="sd-hero-overlay"></div>
          <div className="sd-hero-glow"></div>
        </div>

        <div className="container sd-hero-container">
          <div className="sd-hero-grid">
            <div className="sd-hero-content">
              <div className="sd-hero-pill">
                <Sparkles size={14} className="badge-sparkle" />
                <span>{service.category}</span>
              </div>
              <h1 className="sd-hero-title">
                {service.title.split('with')[0]}
                {service.title.includes('with') && (
                  <>
                    with{' '}
                    <span className="sd-hero-highlight">
                      {service.title.split('with')[1]}
                    </span>
                  </>
                )}
                {!service.title.includes('with') && (
                  <span className="sd-hero-highlight"> — Crystal Power</span>
                )}
              </h1>
              <p className="sd-hero-tagline">{service.tagline}</p>
              <p className="sd-hero-desc">{service.heroDescription}</p>
              <div className="sd-hero-buttons">
                <a href="#service-enquiry" className="btn-hero-primary">
                  <span>Get a Quote</span>
                  <ArrowRight size={17} />
                </a>
                <a href="#process" className="btn-hero-secondary">
                  <span>View Execution Process</span>
                </a>
              </div>

              {/* Service Trust Metrics */}
              <div className="sd-trust-strip">
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>Turnkey Scope</span>
                </div>
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>CAPEX & OPEX Available</span>
                </div>
                <div className="trust-pill-mini">
                  <span className="trust-dot-pulse"></span>
                  <span>CEIG Safety Compliance</span>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Service Specs Card */}
            <div className="sd-hero-card-col">
              <div className="sd-floating-glass-card">
                <div className="sd-glass-header">
                  <div className="sd-glass-icon-circle">
                    <Sun size={26} color="#4ade80" />
                  </div>
                  <div>
                    <h3 className="sd-glass-title">{service.number}. {service.category.split(' ')[0]} EPC</h3>
                    <p className="sd-glass-sub">Customized Engineering & Delivery</p>
                  </div>
                </div>

                <div className="sd-glass-specs-grid">
                  <div className="sd-spec-item">
                    <div className="sd-spec-lbl">Service Scope</div>
                    <div className="sd-spec-val">Design to Handover</div>
                  </div>
                  <div className="sd-spec-item">
                    <div className="sd-spec-lbl">Hardware Grade</div>
                    <div className="sd-spec-val">Tier-1 ALMM / BIS</div>
                  </div>
                  <div className="sd-spec-item">
                    <div className="sd-spec-lbl">Grid Integration</div>
                    <div className="sd-spec-val">Net-Metering & HT</div>
                  </div>
                  <div className="sd-spec-item">
                    <div className="sd-spec-lbl">Warranty</div>
                    <div className="sd-spec-val">25-Year Performance</div>
                  </div>
                </div>

                <div className="sd-glass-footer">
                  <ShieldCheck size={18} color="#22c55e" />
                  <span>Full statutory CEIG approvals liaisoning included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          01. SERVICE INTRODUCTION & 03. BENEFITS
          ======================================================== */}
      <section className="sd-intro-section">
        <div className="container">
          <div className="sd-two-col-grid">
            <div className="sd-text-col">
              <span className="section-kicker">01. SERVICE OVERVIEW</span>
              <h2 className="section-title">{service.whyChooseTitle}</h2>
              <p className="sd-intro-lead">{service.heroDescription}</p>

              <div className="sd-benefits-list">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="sd-benefit-item">
                    <CheckCircle2 size={18} color="#16a34a" className="benefit-check-icon" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sd-visual-col">
              <div className="sd-image-card">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="sd-showcase-img"
                />
                <div className="sd-floating-badge">
                  <div className="sd-badge-num">{service.number}</div>
                  <div className="sd-badge-text">Dedicated Solar Division</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          02. OUR CAPABILITIES
          ======================================================== */}
      <section className="sd-capabilities-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker">02. WHAT WE DELIVER</span>
            <h2 className="section-title">{service.capabilitiesTitle}</h2>
            <p className="section-desc centered-desc">
              Comprehensive turnkey expertise covering equipment selection, civil foundations,
              electrical synchronization and lifetime safety.
            </p>
          </div>

          <div className="sd-capabilities-grid">
            {service.capabilities.map((cap, idx) => (
              <div key={idx} className="sd-cap-card">
                <div className="sd-cap-num">0{idx + 1}</div>
                <h3 className="sd-cap-title">{cap.title}</h3>
                <p className="sd-cap-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          04. OUR WORKING PROCESS
          ======================================================== */}
      <section className="sd-process-section" id="process">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker">03. EXECUTION ROADMAP</span>
            <h2 className="section-title">Our Working Process</h2>
            <p className="section-desc centered-desc">
              A structured step-by-step methodology to ensure on-time commissioning and peak generation yields.
            </p>
          </div>

          <div className="sd-process-timeline">
            {service.process.map((step, idx) => (
              <div key={idx} className="sd-step-node">
                <div className="sd-step-bubble">{idx + 1}</div>
                <div className="sd-step-label">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          05. RELATED PROJECTS
          ======================================================== */}
      {service.relatedProjects && service.relatedProjects.length > 0 && (
        <section className="sd-projects-section">
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">04. TRACK RECORD</span>
              <h2 className="section-title">Featured Project Highlights</h2>
            </div>

            <div className="sd-projects-grid">
              {service.relatedProjects.map((proj, idx) => (
                <div key={idx} className="sd-project-card">
                  <div className="sd-proj-img-wrap">
                    <img src={proj.image} alt={proj.title} className="sd-proj-img" />
                    <span className="sd-proj-pill">{proj.capacity}</span>
                  </div>
                  <div className="sd-proj-body">
                    <h3 className="sd-proj-title">{proj.title}</h3>
                    <div className="sd-proj-loc">
                      <MapPin size={14} color="#16a34a" />
                      <span>{proj.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          06. SERVICE SPECIFIC FAQS
          ======================================================== */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="sd-faq-section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-kicker">05. FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="section-title">Common Questions About This Service</h2>
            </div>

            <div className="sd-faq-box">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className={`sd-faq-item ${isOpen ? 'sd-faq-open' : ''}`}>
                    <button
                      className="sd-faq-btn"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <div className="sd-faq-q">
                        <HelpCircle size={18} className="sd-faq-q-icon" />
                        <span>{faq.q}</span>
                      </div>
                      <ChevronDown size={18} className="sd-faq-chevron" />
                    </button>
                    {isOpen && (
                      <div className="sd-faq-ans">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          SCOPE OF WORK & TURNKEY EXECUTION PROCESS
          ======================================================== */}
      <ScopeOfWork />

      {/* ========================================================
          DYNAMIC SERVICE ENQUIRY FORM
          ======================================================== */}
      <section className="sd-enquiry-section">
        <div className="container">
          <ServiceEnquiryForm defaultService={service.category} />
        </div>
      </section>

      {/* ========================================================
          CLOSING CTA
          ======================================================== */}
      <section className="sd-closing-section">
        <div className="container">
          <div className="sd-closing-banner">
            <h2 className="sd-closing-title">{service.closingCta}</h2>
            <p className="sd-closing-desc">{service.closingText}</p>
            <a href="#service-enquiry" className="btn-cta-primary">
              <span>{service.ctaButton}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
