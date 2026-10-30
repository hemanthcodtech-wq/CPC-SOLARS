import React from 'react';
import Reveal from './Reveal';
import { Users, Building, Wrench, FileSearch, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './WhyChooseUsTimeline.css';

/**
 * WhyChooseUsTimeline:
 * Recreates the official Crystal Power Controls engineering standard infographic:
 * "WHY CHOOSE US - Seamless end-to-end solar experience, managing every step with precision."
 *
 * 5 Core Pillars:
 * 1. Dedicated Team
 * 2. Conformance to Govt. Standards
 * 3. Installation by MNRE Approved Partners
 * 4. Audits & Remote Monitoring
 * 5. Safety Standards (IS:3043 & Lightening Arresters)
 */
export default function WhyChooseUsTimeline() {
  const pillars = [
    {
      id: 'pillar-1',
      title: 'DEDICATED TEAM',
      side: 'right',
      badgeColor: 'badge-blue',
      icon: <Users size={28} />,
      points: [
        'Dedicated team of professionals for each stage.',
        'Site survey, solution design, project installation, operations and after-sale teams collaborate for top-tier experience.',
        'Robust & maintenance-free rooftop solar solution.'
      ]
    },
    {
      id: 'pillar-2',
      title: 'CONFORMANCE TO GOVT. STANDARDS',
      side: 'left',
      badgeColor: 'badge-green',
      icon: <Building size={28} />,
      points: [
        'Balance of System (BOS) strictly engineered as per Indian Standards, IS:3043.',
        'Engineered safety from all types of electrical hazards & grid spikes.',
        'Proper cable sizing to reduce generation losses & optimize lifetime performance.'
      ]
    },
    {
      id: 'pillar-3',
      title: 'INSTALLATION',
      side: 'right',
      badgeColor: 'badge-blue',
      icon: <Wrench size={28} />,
      points: [
        'Installation & commissioning executed by MNRE-approved certified partners.',
        'Best-in-class tier-1 hardware & mounting materials conforming to MNRE specifications.'
      ]
    },
    {
      id: 'pillar-4',
      title: 'AUDITS & MONITORING',
      side: 'left',
      badgeColor: 'badge-blue-dark',
      icon: <FileSearch size={28} />,
      points: [
        'Multiple rigorous audits by certified solar experts during & after installation.',
        'Hardware tested, validated & certified as per IS, IEC, and TUV international benchmarks.',
        'Solar plant remotely monitored with live telemetry for maximum generation uptime.'
      ]
    },
    {
      id: 'pillar-5',
      title: 'SAFETY (IS:3043)',
      side: 'right',
      badgeColor: 'badge-green',
      icon: <ShieldCheck size={28} />,
      points: [
        'Best-in-class safety standards to safeguard personnel against occupational hazards.',
        'Dedicated lightening arresters & surge protection devices (SPDs) to prevent external electrical hazards.',
        'All equipment follows strict IS:3043 grounding norms to eliminate electrocution risks.'
      ]
    }
  ];

  return (
    <section className="why-choose-us-section" id="why-choose-us">
      <div className="container">
        <Reveal direction="down">
          <div className="section-header text-center">
            <span className="section-kicker">CRYSTAL POWER CONTROLS ADVANTAGE</span>
            <h2 className="section-title why-choose-heading">Why Choose Us</h2>
            <div className="why-choose-accent-bar"></div>
            <p className="why-choose-intro-lead">
              Crystal Power Controls delivers a seamless end-to-end solar experience,
              managing every step with precision. With top-quality components and skilled
              execution, we provide an unmatched experience and total peace of mind.
            </p>
          </div>
        </Reveal>

        {/* Central Spine / Alternating Timeline Flow */}
        <div className="timeline-spine-wrapper">
          <div className="timeline-central-line"></div>

          <div className="timeline-items-list-flow">
            {pillars.map((item, index) => {
              const isLeft = item.side === 'left';
              return (
                <div
                  key={item.id}
                  className={`timeline-row-item ${isLeft ? 'row-left' : 'row-right'}`}
                >
                  {/* Left Slot */}
                  <div className="timeline-grid-col timeline-col-left">
                    {isLeft ? (
                      <Reveal direction="left" delay={0.1}>
                        <div className="timeline-content-card">
                          <div className={`timeline-badge-pill ${item.badgeColor}`}>
                            <span className="badge-arrow">»»»»»</span>
                            <span className="badge-title-text">{item.title}</span>
                            <span className="badge-arrow">»»»»»</span>
                          </div>

                          <ul className="timeline-points-list">
                            {item.points.map((point, pIdx) => (
                              <li key={pIdx} className="timeline-point-li">
                                <span className="timeline-bullet-dot"></span>
                                <span className="timeline-point-txt">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Reveal>
                    ) : (
                      <div className="timeline-empty-spacer"></div>
                    )}
                  </div>

                  {/* Center Node Column */}
                  <div className="timeline-grid-col timeline-col-center">
                    <div className="timeline-node-halo">
                      <div className="timeline-node-inner">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Right Slot */}
                  <div className="timeline-grid-col timeline-col-right">
                    {!isLeft ? (
                      <Reveal direction="right" delay={0.1}>
                        <div className="timeline-content-card">
                          <div className={`timeline-badge-pill ${item.badgeColor}`}>
                            <span className="badge-arrow">»»»»»</span>
                            <span className="badge-title-text">{item.title}</span>
                            <span className="badge-arrow">»»»»»</span>
                          </div>

                          <ul className="timeline-points-list">
                            {item.points.map((point, pIdx) => (
                              <li key={pIdx} className="timeline-point-li">
                                <span className="timeline-bullet-dot"></span>
                                <span className="timeline-point-txt">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Reveal>
                    ) : (
                      <div className="timeline-empty-spacer"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

