import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          {/* Section 1: Logo and Description */}
          <div className="footer-column">
            <div className="footer-logo">
              <img 
                src="/images/doekmanlogo1.png" 
                alt="Doekman Foundation"
                className="logo-images"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            </div>
            <p className="footer-description">
              Doekman Foundation is a youth-led non-profit organization dedicated to advancing 
              menstrual health awareness, breaking stigma, and empowering communities through 
              education, sustainable practices, and comprehensive support programs across Tanzania.
            </p>
          </div>

          {/* Section 2: Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/programs" className="footer-link">Programs</Link></li>
              <li><Link to="/events" className="footer-link">Events</Link></li>
              <li><Link to="/join" className="footer-link">Join Us</Link></li>
            </ul>
          </div>

          {/* Section 3: Contact Info - SIMPLE LIST */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-line">Mabibo Mwisho, Dar es Salaam</div>
              <div className="contact-line">+255 764 488 365</div>
              <div className="contact-line">kaganderyna@gmail.com</div>
              <div className="contact-line">00NGO/R/7377</div>
            </div>
          </div>

          {/* Section 4: Social Media */}
          <div className="footer-column">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons">
              <a 
                href="https://www.instagram.com/doekmanfoundation_tz?igsh=bDQ2NzFqdWJpZ2h3" 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <img 
                  src="/images/instagram.png" 
                  alt="Instagram" 
                  className="social-icon-img"
                />
              </a>
              <a 
                href="https://linkedin.com/company/doekmanfoundation" 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
              >
                <img 
                  src="/images/linkedin1.png" 
                  alt="LinkedIn" 
                  className="social-icon-img"
                />
              </a>
              <a 
                href="https://chat.whatsapp.com/FEBilxtHohW866nWuatHwu?mode=wwt" 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <img 
                  src="/images/whatsapp2.png" 
                  alt="WhatsApp" 
                  className="social-icon-img"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © 2025 Doekman Foundation. All rights reserved.
            </div>
            <div className="footer-legal">
              <Link to="/terms" className="legal-link">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;