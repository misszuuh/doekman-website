import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo on the left - linked to homepage */}
        <Link to="/" className="nav-logo" onClick={handleLinkClick}>
          <img 
            src="/images/doekmanlogo1.png" 
            alt="Doekman Foundation"
            className="logo-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        </Link>

        {/* Navigation links in center - Home link removed */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/about" 
            className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link 
            to="/programs" 
            className={`nav-link ${isActiveLink('/programs') ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            Programs
          </Link>
          <Link 
            to="/events" 
            className={`nav-link ${isActiveLink('/events') ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            Events
          </Link>
        </div>

        {/* Join button on the right */}
        <div className="nav-actions">
          <Link to="/join" onClick={handleLinkClick}>
            <button className="join-btn">
              Join Our Community
            </button>
          </Link>
        </div>

        {/* Mobile menu hamburger */}
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;