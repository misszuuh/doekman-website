import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TermsPage.css';
import Footer from './Footer';
import Navbar from './Navbar'; 

const TermsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('terms');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <div className="termspage">
      <Navbar />
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Terms & Conditions</h1>
            <p className="hero-subtitle">
              Understanding our policies and guidelines for using Doekman Foundation services
            </p>
            <div className="last-updated">
              Last Updated: December 2025
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-container">
            {/* Quick Navigation */}
            <div className="terms-navigation">
              <h3>Quick Navigation</h3>
              <div className="nav-links">
                <a href="#acceptance" className="nav-link">Acceptance of Terms</a>
                <a href="#membership" className="nav-link">Membership & Registration</a>
                <a href="#conduct" className="nav-link">User Conduct</a>
                <a href="#intellectual" className="nav-link">Intellectual Property</a>
                <a href="#privacy" className="nav-link">Privacy & Data</a>
                <a href="#donations" className="nav-link">Donations & Payments</a>
                <a href="#liability" className="nav-link">Liability & Disclaimer</a>
                <a href="#termination" className="nav-link">Termination</a>
                <a href="#changes" className="nav-link">Changes to Terms</a>
                <a href="#contact" className="nav-link">Contact Information</a>
              </div>
            </div>

            {/* Main Content */}
            <div className="terms-main">
              {/* Introduction */}
              <div className="intro-section">
                <p>
                  Welcome to Doekman Foundation. These Terms and Conditions govern your use of our website, 
                  services, and participation in our programs. By accessing or using our services, you agree 
                  to be bound by these terms.
                </p>
              </div>

              {/* Section 1: Acceptance of Terms */}
              <section id="acceptance" className="terms-section">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the Doekman Foundation website (doekmanfoundation.org) and services, 
                  you acknowledge that you have read, understood, and agree to be bound by these Terms and 
                  Conditions, our Privacy Policy, and all applicable laws and regulations.
                </p>
                <div className="highlight-box">
                  <strong>Important:</strong> If you do not agree with any part of these terms, you must 
                  immediately discontinue your use of our services.
                </div>
              </section>

              {/* Section 2: Membership & Registration */}
              <section id="membership" className="terms-section">
                <h2>2. Membership & Registration</h2>
                <h3>2.1 Eligibility</h3>
                <p>
                  To become a member or volunteer with Doekman Foundation, you must:
                </p>
                <ul>
                  <li>Be at least 16 years of age</li>
                  <li>Provide accurate and complete registration information</li>
                  <li>Have genuine interest in our mission and values</li>
                  <li>Commit to upholding our code of conduct</li>
                </ul>

                <h3>2.2 Account Responsibility</h3>
                <p>
                  You are responsible for:
                </p>
                <ul>
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Promptly updating your personal information when changes occur</li>
                  <li>Notifying us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              {/* Section 3: User Conduct */}
              <section id="conduct" className="terms-section">
                <h2>3. User Conduct</h2>
                <p>
                  As a user of Doekman Foundation services, you agree to:
                </p>
                <div className="conduct-grid">
                  <div className="conduct-item positive">
                    <h4>✅ Do's</h4>
                    <ul>
                      <li>Respect all members, volunteers, and beneficiaries</li>
                      <li>Maintain professional and ethical behavior</li>
                      <li>Use our resources responsibly and for intended purposes</li>
                      <li>Report any concerns or violations to our team</li>
                      <li>Uphold our values of compassion and integrity</li>
                    </ul>
                  </div>
                  <div className="conduct-item negative">
                    <h4>❌ Don'ts</h4>
                    <ul>
                      <li>Engage in harassment, discrimination, or abusive behavior</li>
                      <li>Misuse confidential information or resources</li>
                      <li>Use our platform for commercial purposes without authorization</li>
                      <li>Spread misinformation or harmful content</li>
                      <li>Violate any applicable laws or regulations</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4: Intellectual Property */}
              <section id="intellectual" className="terms-section">
                <h2>4. Intellectual Property</h2>
                <h3>4.1 Our Content</h3>
                <p>
                  All content on our website, including but not limited to logos, text, graphics, images, 
                  and software, is the property of Doekman Foundation and protected by copyright laws.
                </p>

                <h3>4.2 Permitted Use</h3>
                <p>
                  You may:
                </p>
                <ul>
                  <li>View and download content for personal, non-commercial use</li>
                  <li>Share our content with proper attribution</li>
                  <li>Use our resources for educational purposes related to our mission</li>
                </ul>

                <h3>4.3 Restrictions</h3>
                <p>
                  You may not:
                </p>
                <ul>
                  <li>Modify, copy, or distribute our content without permission</li>
                  <li>Use our branding for commercial purposes</li>
                  <li>Claim ownership of our intellectual property</li>
                  <li>Create derivative works without authorization</li>
                </ul>
              </section>

              {/* Section 5: Privacy & Data Protection */}
              <section id="privacy" className="terms-section">
                <h2>5. Privacy & Data Protection</h2>
                <p>
                  We are committed to protecting your privacy and personal information. Our data practices 
                  are governed by our Privacy Policy and applicable data protection laws.
                </p>

                <h3>5.1 Information Collection</h3>
                <p>
                  We collect information to:
                </p>
                <ul>
                  <li>Provide and improve our services</li>
                  <li>Communicate with members and volunteers</li>
                  <li>Process donations and registrations</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h3>5.2 Data Security</h3>
                <p>
                  We implement appropriate security measures to protect your personal information from 
                  unauthorized access, alteration, or disclosure.
                </p>
              </section>

              {/* Section 6: Donations & Payments */}
              <section id="donations" className="terms-section">
                <h2>6. Donations & Payments</h2>
                <h3>6.1 Donation Policy</h3>
                <p>
                  All donations to Doekman Foundation are:
                </p>
                <ul>
                  <li>Voluntary and non-refundable</li>
                  <li>Used to support our programs and initiatives</li>
                  <li>Subject to our donation allocation policies</li>
                  <li>Processed through secure payment gateways</li>
                </ul>

                <h3>6.2 Transparency</h3>
                <p>
                  We are committed to financial transparency and provide regular reports on how donations 
                  are utilized to support our mission.
                </p>
              </section>

              {/* Section 7: Liability & Disclaimer */}
              <section id="liability" className="terms-section">
                <h2>7. Liability & Disclaimer</h2>
                <h3>7.1 Service Availability</h3>
                <p>
                  We strive to maintain continuous service availability but do not guarantee uninterrupted 
                  access to our website or services.
                </p>

                <h3>7.2 Limitation of Liability</h3>
                <p>
                  Doekman Foundation shall not be liable for any indirect, incidental, special, or 
                  consequential damages arising from your use of our services.
                </p>

                <h3>7.3 Volunteer Activities</h3>
                <p>
                  Participation in volunteer activities is at your own risk. We provide appropriate 
                  guidance and safety measures, but ultimate responsibility lies with the participant.
                </p>
              </section>

              {/* Section 8: Termination */}
              <section id="termination" className="terms-section">
                <h2>8. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your access to our services at our sole 
                  discretion, without prior notice, for conduct that we believe:
                </p>
                <ul>
                  <li>Violates these Terms and Conditions</li>
                  <li>Is harmful to other users or our organization</li>
                  <li>Could bring Doekman Foundation into disrepute</li>
                  <li>Involves fraudulent or illegal activities</li>
                </ul>
              </section>

              {/* Section 9: Changes to Terms */}
              <section id="changes" className="terms-section">
                <h2>9. Changes to Terms</h2>
                <p>
                  We may update these Terms and Conditions from time to time. We will notify users of 
                  significant changes through:
                </p>
                <ul>
                  <li>Email notifications to registered users</li>
                  <li>Notices on our website</li>
                  <li>Updates to the "Last Updated" date</li>
                </ul>
                <p>
                  Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              {/* Section 10: Contact Information */}
              <section id="contact" className="terms-section">
                <h2>10. Contact Information</h2>
                <p>
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <strong>Email:</strong> kaganderyma@gmail.com
                  </div>
                  <div className="contact-item">
                    <strong>Phone:</strong> +255 764 488 365
                  </div>
                  <div className="contact-item">
                    <strong>Address:</strong> Mabibo Mwisho, Dar es Salaam, Tanzania
                  </div>
                </div>
              </section>

              {/* Agreement Section */}
              <div className="agreement-section">
                <div className="agreement-box">
                  <h3>Agreement</h3>
                  <p>
                    By using Doekman Foundation services, you acknowledge that you have read, understood, 
                    and agree to be bound by these Terms and Conditions.
                  </p>
                  <div className="signature">
                    <strong>Doekman Foundation Team</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <Footer />
    </div>
  );
};

export default TermsPage;