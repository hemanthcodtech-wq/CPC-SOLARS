import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { ShieldCheck, FileText, Truck, CreditCard, Clock, Award, ArrowRight, Phone } from 'lucide-react';
import './TermsAndConditions.css';

export default function TermsAndConditions() {
  return (
    <div className="policy-page">
      {/* Hero Header */}
      <section className="policy-hero-section">
        <div className="container">
          <Reveal direction="down">
            <span className="section-kicker text-green-light">CRYSTAL POWER CONTROLS POLICIES</span>
            <h1 className="policy-hero-title">Payment & Delivery Terms and Conditions</h1>
            <p className="policy-hero-lead">
              Official commercial delivery guidelines, warranty schedules, payment terms, and statutory GST compliances for all turnkey solar EPC projects.
            </p>
            <div className="policy-meta-bar">
              <span>GSTIN: <strong>37AAYFM9190M1Z1</strong></span>
              <span>•</span>
              <span>Domain: <strong>crystalpowercontrols.com</strong></span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Table Section */}
      <section className="policy-content-section">
        <div className="container">
          <Reveal direction="up" delay={0.1}>
            <div className="terms-table-wrapper">
              <div className="terms-table-header">
                <FileText size={22} className="terms-header-icon" />
                <h2>Commercial Terms, Delivery & Warranty Schedule</h2>
              </div>

              <div className="table-responsive">
                <table className="cpc-terms-table">
                  <thead>
                    <tr>
                      <th style={{ width: '8%' }}>S.No</th>
                      <th style={{ width: '28%' }}>Parameter</th>
                      <th style={{ width: '64%' }}>Terms & Specific Conditions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="col-num">1</td>
                      <td className="col-param">
                        <div className="param-title">₹ Taxes</div>
                      </td>
                      <td className="col-desc">
                        Including at actual <strong>GST @ 5%</strong> on solar supplies and Including Service tax / <strong>GST @ 18%</strong> on Installation and commissioning.
                      </td>
                    </tr>

                    <tr>
                      <td className="col-num">2</td>
                      <td className="col-param">
                        <div className="param-title">Freight & Logistics</div>
                      </td>
                      <td className="col-desc">
                        <span className="tag-included">Included</span> — Transit freight, freight insurance and handling to site are included unless specified otherwise in the commercial purchase order.
                      </td>
                    </tr>

                    <tr>
                      <td className="col-num">3</td>
                      <td className="col-param">
                        <div className="param-title">Payment Terms</div>
                      </td>
                      <td className="col-desc">
                        <ol className="terms-num-list">
                          <li><strong>70%</strong> to be paid along with Purchase Order (PO) / Advance mobilization.</li>
                          <li><strong>20%</strong> after the material dispatch and delivery reaches the project site.</li>
                          <li><strong>10%</strong> to be paid at the completion of Installation & Commissioning / grid synchronization.</li>
                        </ol>
                      </td>
                    </tr>

                    <tr>
                      <td className="col-num">4</td>
                      <td className="col-param">
                        <div className="param-title">Delivery Period & Timelines</div>
                      </td>
                      <td className="col-desc">
                        <ol className="terms-num-list">
                          <li>Delivery of solar modules, inverters, and BOS material will be made within <strong>10 Weeks</strong> from the date of confirmed PO.</li>
                          <li>Installation & Commissioning will be completed within <strong>60 Days</strong> of material reaching the site.</li>
                        </ol>
                      </td>
                    </tr>

                    <tr>
                      <td className="col-num">5</td>
                      <td className="col-param">
                        <div className="param-title">Material Storage & Safety</div>
                      </td>
                      <td className="col-desc">
                        Safe and secure covered storage space at the installation site is to be provided by the customer until mechanical assembly commences.
                      </td>
                    </tr>

                    {/* Section Header for Warranty */}
                    <tr className="warranty-section-row">
                      <td className="col-num">6</td>
                      <td colSpan="2" className="col-warranty-header">
                        <div className="warranty-head-flex">
                          <Award size={20} color="#16a34a" />
                          <span>Guarantee, Warranty & Maintenance Details</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="col-num sub-num">i.</td>
                      <td className="col-param">
                        <div className="param-title">Solar PV Modules</div>
                      </td>
                      <td className="col-desc">
                        <strong>90% Linear Efficiency</strong> at the end of 12 years and <strong>80% Linear Efficiency</strong> at the end of 30th year. Backed by 25 to 30-year Tier-1 manufacturer performance warranty.
                      </td>
                    </tr>

                    <tr>
                      <td className="col-num sub-num">ii.</td>
                      <td className="col-param">
                        <div className="param-title">Solar Inverters</div>
                      </td>
                      <td className="col-desc">
                        <strong>8 Years</strong> standard manufacturer warranty. All warranties shall be directly backed and serviced by the OEM (Original Equipment Manufacturer).
                      </td>
                    </tr>

                    <tr>
                      <td className="col-num sub-num">iii.</td>
                      <td className="col-param">
                        <div className="param-title">Switchgear & BOS System</div>
                      </td>
                      <td className="col-desc">
                        Switchgear, cables, distribution boxes and complete BOS System Warranty: <strong>1 Year</strong>. All warranties shall be from OEM with lifelong O&M support from Crystal Power Controls.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Additional Standards & Client Notes */}
          <Reveal direction="up" delay={0.2}>
            <div className="policy-notes-grid">
              <div className="policy-note-card">
                <ShieldCheck size={28} className="note-card-icon" />
                <h3>Government Standards & Net Metering</h3>
                <p>
                  All balance of systems, DC/AC cabling, earthing electrodes, and lightening arresters are engineered in strict conformance to Indian Standards (IS:3043) and CEIG electrical safety requirements.
                </p>
              </div>

              <div className="policy-note-card">
                <CreditCard size={28} className="note-card-icon" />
                <h3>CAPEX & OPEX Invoicing</h3>
                <p>
                  Official tax invoices with GST input credit eligibility are issued upon each milestone release. Direct accelerated depreciation (40%) documentation is provided for corporate tax savings.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Contact Assistance */}
          <Reveal direction="scale" delay={0.25}>
            <div className="policy-cta-banner">
              <div>
                <h2>Have Questions Regarding Project Terms?</h2>
                <p>Speak directly with our legal and commercial team regarding purchase agreements or customized delivery schedules.</p>
              </div>
              <div className="policy-cta-btns">
                <a href="tel:+919493163424" className="btn-policy-primary">
                  <Phone size={16} />
                  <span>Call Commercial Team</span>
                </a>
                <Link to="/contact" className="btn-policy-secondary">
                  <span>Contact Form</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

