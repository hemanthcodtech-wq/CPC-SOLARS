import React from 'react';
import Reveal from './Reveal';
import { Search, Wrench, Zap, CheckCircle2 } from 'lucide-react';
import './ScopeOfWork.css';

/**
 * ScopeOfWork: 3-Stage Turnkey Project Execution Workflow
 * Matches official Crystal Power Controls engineering delivery standard:
 * 1. Pre-Installation Activities
 * 2. Installation Activities
 * 3. Post-Installation Activities
 */
export default function ScopeOfWork() {
  const stages = [
    {
      id: 'pre-install',
      title: 'Pre-Installation Activities',
      colorClass: 'stage-gold',
      icon: <Search size={28} className="stage-icon-svg" />,
      items: [
        'Site survey and technical feasibility assessment',
        'System design and engineering',
        'Funding assistance and approvals'
      ]
    },
    {
      id: 'install',
      title: 'Installation Activities',
      colorClass: 'stage-blue',
      icon: <Wrench size={28} className="stage-icon-svg" />,
      items: [
        'Supply and installation of solar PV system',
        'Safety-compliant execution',
        'Quality checks and commissioning'
      ]
    },
    {
      id: 'post-install',
      title: 'Post-Installation Activities',
      colorClass: 'stage-orange',
      icon: <Zap size={28} className="stage-icon-svg" />,
      items: [
        'Grid interconnection and synchronization',
        'Insurance and warranty coordination',
        'Annual maintenance coverage'
      ]
    }
  ];

  return (
    <section className="scope-of-work-section">
      <div className="container">
        <Reveal direction="down">
          <div className="section-header text-center">
            <span className="section-kicker">TURNKEY EPC LIFECYCLE</span>
            <h2 className="section-title scope-main-heading">
              Scope of Work & Project Execution
            </h2>
            <div className="scope-heading-bar"></div>
            <p className="section-desc centered-desc">
              From initial site assessment and structural engineering to grid synchronization 
              and lifetime asset maintenance.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <div className="scope-cards-grid">
            {stages.map((stage, idx) => (
              <div key={stage.id} className={`scope-card ${stage.colorClass}`}>
                {/* Stage Header Circle */}
                <div className="scope-icon-halo">
                  <div className="scope-icon-circle">
                    {stage.icon}
                  </div>
                </div>

                {/* Card Title Banner */}
                <div className="scope-card-banner">
                  <h3 className="scope-card-title">{stage.title}</h3>
                </div>

                {/* Bullet List */}
                <ul className="scope-items-list">
                  {stage.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="scope-list-item">
                      <span className="scope-bullet-dot"></span>
                      <span className="scope-item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

