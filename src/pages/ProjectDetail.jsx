import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  Calendar,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Sun,
  Building,
  Check,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import ServiceEnquiryForm from '../components/ServiceEnquiryForm';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { projectSlug } = useParams();
  const project =
    PROJECTS_DATA.find((p) => p.slug === projectSlug) || PROJECTS_DATA[0];

  // Find related projects (same category or nearby)
  const relatedProjects = PROJECTS_DATA.filter(
    (p) => p.slug !== project.slug && (p.categoryFilter === project.categoryFilter || p.category === project.category)
  ).slice(0, 3);

  return (
    <div className="project-detail-page">
      {/* ========================================================
          HERO BANNER
          ======================================================== */}
      <section className="pd-hero-section">
        <div className="pd-hero-bg">
          <img
            src={project.image}
            alt={project.title}
            className="pd-hero-img"
          />
          <div className="pd-hero-overlay"></div>
          <div className="pd-hero-glow"></div>
        </div>

        <div className="container pd-hero-container">
          <div className="pd-hero-grid">
            <div className="pd-hero-content">
              <Link to="/projects" className="pd-back-link">
                <ArrowLeft size={16} />
                <span>Back to All Projects</span>
              </Link>

              <div className="pd-hero-pill">
                <Sparkles size={14} className="badge-sparkle" />
                <span>{project.category}</span>
              </div>

              <h1 className="pd-hero-title">{project.title}</h1>

              <div className="pd-hero-meta">
                <div className="pd-meta-item">
                  <MapPin size={16} color="#4ade80" />
                  <span>{project.location}</span>
                </div>
                <div className="pd-meta-item">
                  <Layers size={16} color="#4ade80" />
                  <span>Capacity: <strong>{project.capacity}</strong></span>
                </div>
              </div>

              <p className="pd-hero-lead">{project.overview}</p>

              <div className="pd-hero-buttons">
                <a href="#discuss-project" className="btn-hero-primary">
                  <span>Discuss Your Project</span>
                  <ArrowRight size={17} />
                </a>
                <Link to="/projects" className="btn-hero-secondary">
                  <span>Explore More Projects</span>
                </Link>
              </div>
            </div>

            {/* Floating Glass Specs Card */}
            <div className="pd-hero-card-col">
              <div className="pd-floating-glass-card">
                <div className="pd-glass-header">
                  <div className="pd-glass-icon-circle">
                    <Sun size={26} color="#4ade80" />
                  </div>
                  <div>
                    <h3 className="pd-glass-title">{project.capacity}</h3>
                    <p className="pd-glass-sub">Installed Solar Capacity</p>
                  </div>
                </div>

                <div className="pd-glass-specs-list">
                  <div className="pd-spec-row">
                    <span className="pd-spec-k">Project Location</span>
                    <span className="pd-spec-v">{project.location}</span>
                  </div>
                  <div className="pd-spec-row">
                    <span className="pd-spec-k">Sector / Category</span>
                    <span className="pd-spec-v">{project.category}</span>
                  </div>
                  <div className="pd-spec-row">
                    <span className="pd-spec-k">Scope of Work</span>
                    <span className="pd-spec-v">{project.scope}</span>
                  </div>
                  <div className="pd-spec-row">
                    <span className="pd-spec-k">Engineering Standard</span>
                    <span className="pd-spec-v">Tier-1 CEIG Certified</span>
                  </div>
                </div>

                <div className="pd-glass-footer">
                  <ShieldCheck size={18} color="#22c55e" />
                  <span>High-efficiency execution by Crystal Power Controls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PROJECT OVERVIEW & HIGHLIGHTS
          ======================================================== */}
      <section className="pd-body-section">
        <div className="container">
          <div className="pd-overview-grid">
            <div className="pd-overview-text">
              <span className="section-kicker">PROJECT OVERVIEW</span>
              <h2 className="section-title">Engineered for Reliable Performance</h2>
              <p className="pd-main-desc">{project.overview}</p>

              <div className="pd-highlights-box">
                <h3 className="pd-highlights-heading">Key Project Highlights</h3>
                <ul className="pd-highlights-list">
                  {project.highlights.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} color="#16a34a" className="highlight-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.clientNote && (
                <div className="pd-client-note">
                  <strong>Proposal Documentation Note:</strong> {project.clientNote}
                </div>
              )}
            </div>

            <div className="pd-overview-visual">
              <div className="pd-visual-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="pd-photo-large"
                />
                <div className="pd-photo-badge">
                  <span className="badge-cap">{project.capacity}</span>
                  <span className="badge-cat">{project.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          RELATED PROJECTS
          ======================================================== */}
      {relatedProjects.length > 0 && (
        <section className="pd-related-section">
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">SIMILAR INSTALLATIONS</span>
              <h2 className="section-title">Related Projects</h2>
            </div>

            <div className="pd-related-grid">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/projects/${rel.slug}`}
                  className="pd-related-card"
                >
                  <div className="pd-rel-img-wrap">
                    <img src={rel.image} alt={rel.title} className="pd-rel-img" />
                    <span className="pd-rel-cap">{rel.capacity}</span>
                  </div>
                  <div className="pd-rel-body">
                    <span className="pd-rel-cat">{rel.category}</span>
                    <h3 className="pd-rel-title">{rel.title}</h3>
                    <div className="pd-rel-loc">
                      <MapPin size={13} color="#16a34a" />
                      <span>{rel.location}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          ENQUIRY SECTION
          ======================================================== */}
      <section className="pd-enquiry-section" id="discuss-project">
        <div className="container">
          <ServiceEnquiryForm defaultService={project.category} />
        </div>
      </section>
    </div>
  );
}

