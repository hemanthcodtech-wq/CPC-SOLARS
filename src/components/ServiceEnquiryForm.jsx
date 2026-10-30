import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import './ServiceEnquiryForm.css';

export default function ServiceEnquiryForm({ defaultService = 'Residential Solar', onCompleted }) {
  const [formData, setFormData] = useState({
    serviceRequired: defaultService,
    requiredCapacity: '',
    projectLocation: '',
    investmentPreference: 'CAPEX',
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onCompleted) onCompleted(formData);

    // Build formatted message for WhatsApp
    const lines = [
      `*New Solar Project Enquiry - Crystal Power Controls*`,
      `---------------------------------------`,
      `👤 *Name:* ${formData.fullName || 'Not provided'}`,
      `📞 *Mobile:* ${formData.mobileNumber || 'Not provided'}`,
      `✉️ *Email:* ${formData.emailAddress || 'Not provided'}`,
      `⚡ *Service:* ${formData.serviceRequired || 'Not specified'}`,
      `🔋 *Approx Capacity:* ${formData.requiredCapacity || 'Not specified'}`,
      `📍 *Location:* ${formData.projectLocation || 'Not specified'}`,
      `💼 *Model:* ${formData.investmentPreference || 'CAPEX'}`,
      formData.message ? `📝 *Message:* ${formData.message}` : null
    ].filter(Boolean);

    const waText = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/919493163424?text=${waText}`;

    // Redirect to WhatsApp in a new tab or window
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div className="service-enquiry-card" id="service-enquiry">
      {submitted ? (
        <div className="service-enquiry-success">
          <CheckCircle2 size={54} color="#16a34a" />
          <h3>Thank You for Reaching Out!</h3>
          <p>
            Your consultation request for <strong>{formData.serviceRequired}</strong> has been
            received. Our solar engineer will contact you shortly with preliminary sizing and feasibility.
          </p>
          <button
            className="btn-reset-enquiry"
            onClick={() => setSubmitted(false)}
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="service-enquiry-form">
          <div className="enquiry-card-header">
            <h3 className="enquiry-card-title">Request a Solar Consultation</h3>
            <p className="enquiry-card-subtitle">
              Tell us about your requirements and we’ll recommend the optimal solar capacity and investment model.
            </p>
          </div>

          <div className="enquiry-fields-grid">
            {/* Service Required */}
            <div className="enquiry-field-group">
              <label>Service Required *</label>
              <select
                value={formData.serviceRequired}
                onChange={(e) =>
                  setFormData({ ...formData, serviceRequired: e.target.value })
                }
              >
                <option value="Residential Solar">Residential Solar</option>
                <option value="Commercial Solar">Commercial Solar</option>
                <option value="Industrial Solar">Industrial Solar</option>
                <option value="Utility-Scale Solar">Utility-Scale Solar</option>
                <option value="Solar EPC">Solar EPC</option>
                <option value="Operations & Maintenance">Operations & Maintenance</option>
              </select>
            </div>

            {/* Required Capacity */}
            <div className="enquiry-field-group">
              <label>Required Capacity (Optional)</label>
              <input
                type="text"
                placeholder="e.g. 10 kW, 100 kW, 1 MW"
                value={formData.requiredCapacity}
                onChange={(e) =>
                  setFormData({ ...formData, requiredCapacity: e.target.value })
                }
              />
            </div>

            {/* Project Location */}
            <div className="enquiry-field-group">
              <label>Project Location *</label>
              <input
                type="text"
                required
                placeholder="e.g. Ongole, Hyderabad, Guntur"
                value={formData.projectLocation}
                onChange={(e) =>
                  setFormData({ ...formData, projectLocation: e.target.value })
                }
              />
            </div>

            {/* Investment Preference */}
            <div className="enquiry-field-group">
              <label>Investment Preference *</label>
              <select
                value={formData.investmentPreference}
                onChange={(e) =>
                  setFormData({ ...formData, investmentPreference: e.target.value })
                }
              >
                <option value="CAPEX">CAPEX (Self-Owned Model)</option>
                <option value="OPEX / PPA">OPEX / PPA (Third-Party Funded)</option>
                <option value="Need guidance">Need Guidance from Engineers</option>
              </select>
            </div>

            {/* Full Name */}
            <div className="enquiry-field-group">
              <label>Full Name *</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>

            {/* Mobile Number */}
            <div className="enquiry-field-group">
              <label>Mobile Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.mobileNumber}
                onChange={(e) =>
                  setFormData({ ...formData, mobileNumber: e.target.value })
                }
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="enquiry-field-group full-width">
            <label>Email Address *</label>
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={formData.emailAddress}
              onChange={(e) =>
                setFormData({ ...formData, emailAddress: e.target.value })
              }
            />
          </div>

          {/* Message */}
          <div className="enquiry-field-group full-width">
            <label>Message / Additional Site Details</label>
            <textarea
              rows={3}
              placeholder="Provide information on your rooftop type, monthly units consumed, or specific project milestones..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>

          <button type="submit" className="btn-enquiry-submit">
            <Send size={16} />
            <span>Submit Consultation Request</span>
          </button>

          <div className="enquiry-footnote">
            <ShieldCheck size={16} color="#16a34a" />
            <span>Your information is strictly confidential. No spam guaranteed.</span>
          </div>
        </form>
      )}
    </div>
  );
}

