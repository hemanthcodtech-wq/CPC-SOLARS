import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import MagneticButton from '../components/MagneticButton';
import { Award, Sparkles, ArrowRight, Download, ExternalLink, Trophy, Star, Medal } from 'lucide-react';

import a1 from '../assets/a1.pdf';
import a3 from '../assets/a3.pdf';

import './Awards.css';

const AWARDS = [
  {
    id: 1,
    tier: 'Platinum',
    pill: '🏆 Platinum',
    pillClass: 'pill-platinum',
    icon: <Trophy size={32} />,
    title: 'EPC Company of the Year',
    category: 'Residential Rooftop Solar Projects',
    event: 'Telangana Annual Solar Awards 2026',
    venue: 'Global Solar Expo Telangana, Hitex Exhibition Center, Hyderabad',
    date: '06 – 07 February 2026',
    preview: '/images/awards/a1_p1.jpg',
    pdf: a1,
  },
  {
    id: 2,
    tier: 'Diamond',
    pill: '💎 Diamond',
    pillClass: 'pill-diamond',
    icon: <Star size={32} />,
    title: 'EPC Company of the Year',
    category: 'Commercial Solar Projects',
    event: 'Telangana Annual Solar Awards 2026',
    venue: 'Global Solar Expo Telangana, Hitex Exhibition Center, Hyderabad',
    date: '06 – 07 February 2026',
    preview: '/images/awards/a1_p2.jpg',
    pdf: a1,
  },
  {
    id: 3,
    tier: 'Diamond',
    pill: '💎 Diamond',
    pillClass: 'pill-diamond',
    icon: <Star size={32} />,
    title: 'Rooftop EPC Company of the Year',
    category: 'Residential Category',
    event: 'Telangana Annual Solar Awards 2024',
    venue: 'Hotel – The Westin Mindspace, Hyderabad',
    date: '05 December 2024',
    preview: '/images/awards/a1_p3.jpg',
    pdf: a1,
  },
  {
    id: 4,
    tier: 'Gold',
    pill: '🥇 Gold',
    pillClass: 'pill-gold',
    icon: <Medal size={32} />,
    title: 'Rooftop EPC Company of the Year',
    category: 'Commercial Category',
    event: 'Telangana Annual Solar Awards 2024',
    venue: 'Hotel – The Westin Mindspace, Hyderabad',
    date: '05 December 2024',
    preview: '/images/awards/a1_p4.jpg',
    pdf: a1,
  },
  {
    id: 5,
    tier: 'Gold',
    pill: '🥇 Gold',
    pillClass: 'pill-gold',
    icon: <Medal size={32} />,
    title: 'Solar EPC Champion of the Year',
    category: 'Andhra Pradesh 2026',
    event: 'Andhra Pradesh Annual Solar Awards 2026',
    venue: 'Global Solar Expo Visakhapatnam, Gadiraju Palace Convention Center',
    date: 'July 2026',
    preview: '/images/awards/a3_p1.jpg',
    pdf: a3,
  },
];

export default function Awards() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="awards-page">
      {/* HERO */}
      <section className="awards-hero-section">
        <div className="awards-hero-bg">
          <img src="/images/hero-banner-1.jpg" alt="Awards & Recognition" className="awards-hero-img" />
          <div className="awards-hero-overlay" />
          <div className="awards-hero-glow" />
        </div>

        <div className="container awards-hero-container">
          <motion.div
            className="awards-eyebrow-pill"
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Sparkles size={14} className="badge-sparkle" />
            <span>AWARDS & RECOGNITION</span>
          </motion.div>

          <motion.h1
            className="awards-hero-title"
            initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Recognised for{' '}
            <span className="awards-hero-highlight">Solar Excellence</span>
          </motion.h1>

          <motion.p
            className="awards-hero-lead"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            Crystal Power Controls has been honoured with Platinum, Diamond and Gold
            recognitions at the Telangana & Andhra Pradesh Annual Solar Awards for
            excellence in residential, commercial and industrial solar project delivery.
          </motion.p>

          <motion.div
            className="awards-hero-pills"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55 }}
          >
            <span className="award-hero-pill pill-platinum">🏆 Platinum</span>
            <span className="award-hero-pill pill-diamond">💎 Diamond</span>
            <span className="award-hero-pill pill-gold">🥇 Gold</span>
          </motion.div>
        </div>
      </section>

      {/* AWARDS GRID */}
      <section className="awards-grid-section">
        <div className="container">
          <Reveal direction="down">
            <div className="section-header text-center">
              <span className="section-kicker">OFFICIAL CERTIFICATES</span>
              <h2 className="section-title">Award Certificates & Recognition</h2>
              <p className="section-desc centered-desc">
                5 national recognitions across Telangana and Andhra Pradesh Annual Solar Awards.
              </p>
            </div>
          </Reveal>

          <div className="awards-cards-grid">
            {AWARDS.map((award, i) => (
              <Reveal key={award.id} direction="up" delay={(i % 3) * 0.1}>
                <div className="award-card">
                  <div className="award-card-top">
                    <div className="award-icon-box">{award.icon}</div>
                    <span className={`award-pill ${award.pillClass}`}>{award.pill}</span>
                  </div>

                  <h3 className="award-card-title">{award.title}</h3>
                  <p className="award-card-category">{award.category}</p>
                  <p className="award-card-event">{award.event}</p>
                  <p className="award-card-venue">{award.venue}</p>
                  <p className="award-card-date">📅 {award.date}</p>

                  {/* Certificate Preview */}
                  <button
                    className="cert-img-btn"
                    onClick={() => setLightbox(award.preview)}
                    aria-label="View certificate"
                  >
                    <img src={award.preview} alt={award.title} className="cert-thumb" />
                    <div className="cert-img-overlay">
                      <ExternalLink size={22} />
                      <span>View Certificate</span>
                    </div>
                  </button>

                  <div className="award-card-actions">
                    <a href={award.pdf} download className="btn-cert-download">
                      <Download size={15} />
                      <span>Download PDF</span>
                    </a>
                    <a href={award.pdf} target="_blank" rel="noopener noreferrer" className="btn-cert-view">
                      <ExternalLink size={15} />
                      <span>View</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* a2.jpeg as a supporting photo card */}
            <Reveal direction="up" delay={0.2}>
              <div className="award-card award-card-photo">
                <div className="award-card-top">
                  <div className="award-icon-box"><Award size={32} /></div>
                  <span className="award-pill pill-diamond">💎 Diamond</span>
                </div>
                <h3 className="award-card-title">Award Ceremony</h3>
                <p className="award-card-category">Telangana & AP Annual Solar Awards 2024</p>
                <p className="award-card-event">Recognition Photo</p>
                <button
                  className="cert-img-btn"
                  onClick={() => setLightbox('/images/awards/a2.jpeg')}
                  aria-label="View award photo"
                >
                  <img src="/images/awards/a2.jpeg" alt="Award Ceremony" className="cert-thumb" />
                  <div className="cert-img-overlay">
                    <ExternalLink size={22} />
                    <span>View Photo</span>
                  </div>
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RECOGNITION BANNER */}
      <section className="awards-banner-section">
        <div className="container">
          <Reveal direction="scale" delay={0.1}>
            <div className="awards-banner-box">
              <div className="awards-banner-icon">
                <Award size={52} />
              </div>
              <div>
                <span className="section-kicker text-green-light">NATIONAL RECOGNITION</span>
                <h2 className="awards-banner-title">
                  5 Awards Across Telangana & Andhra Pradesh Solar Events
                </h2>
                <p className="awards-banner-desc">
                  Recognised at the Telangana Annual Solar Awards (2024 & 2026) and the
                  Andhra Pradesh Annual Solar Awards 2026 for consistent excellence in
                  residential, commercial and EPC solar project delivery.
                </p>
                <div className="awards-banner-pills">
                  <span className="award-pill pill-platinum">🏆 Platinum — Residential Rooftop 2026</span>
                  <span className="award-pill pill-diamond">💎 Diamond — Commercial Solar 2026</span>
                  <span className="award-pill pill-diamond">💎 Diamond — Residential 2024</span>
                  <span className="award-pill pill-gold">🥇 Gold — Commercial 2024</span>
                  <span className="award-pill pill-gold">🥇 Gold — EPC Champion AP 2026</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="awards-cta-section">
        <div className="container">
          <Reveal direction="scale" delay={0.1}>
            <div className="awards-cta-banner">
              <h2 className="awards-cta-title">Work with an Award-Winning Solar EPC</h2>
              <p className="awards-cta-desc">
                Experience the quality and commitment that earned us national recognition.
              </p>
              <div className="awards-cta-btns">
                <MagneticButton>
                  <Link to="/contact" className="btn-cta-primary">
                    <span>Get a Free Consultation</span>
                    <ArrowRight size={16} />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link to="/projects" className="btn-cta-secondary">
                    <span>View Our Projects</span>
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="awards-lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img
            src={lightbox}
            alt="Certificate"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
