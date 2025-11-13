import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JoinPage.css';
import Footer from './Footer';
import Navbar from './Navbar'; 

const JoinPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('join');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    occupation: '',
    location: '',
    skills: '',
    interests: '',
    motivation: '',
    volunteerType: '',
    availability: '',
    previousExperience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        occupation: '',
        location: '',
        skills: '',
        interests: '',
        motivation: '',
        volunteerType: '',
        availability: '',
        previousExperience: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="joinpage">
      <Navbar />

      {/* Hero Section - Updated Design */}
      <section className="join-hero-simple">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Join Our Community</h1>
              <p className="hero-subtitle">
                Become a valued member of Doekman Foundation and help us create positive change in Tanzania
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Active Members</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Communities Reached</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10,000+</span>
                  <span className="stat-label">Lives Impacted</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/image1.jpg" alt="Doekman Community" />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form Section */}
      <section className="membership-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Become a Member</h2>
            <p className="section-subtitle">
              Fill out the form below to join our community and start making an impact today
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="success-message">
              <h3>🎉 Thank You for Joining!</h3>
              <p>Your application has been received. We'll contact you soon about next steps.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message">
              <h3>❌ Submission Failed</h3>
              <p>Please try again or contact us directly.</p>
            </div>
          )}

          <form className="membership-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Personal Information */}
              <div className="form-section">
                <h3 className="form-section-title">Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="age">Age Range</label>
                    <select
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Age Range</option>
                      <option value="16-25">16-25 years</option>
                      <option value="26-35">26-35 years</option>
                      <option value="36-45">36-45 years</option>
                      <option value="46-55">46-55 years</option>
                      <option value="56+">56+ years</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="occupation">Occupation</label>
                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      placeholder="Student, Teacher, Professional, etc."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location *</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      placeholder="City, Region"
                    />
                  </div>
                </div>
              </div>

              {/* Skills & Interests */}
              <div className="form-section">
                <h3 className="form-section-title">Skills & Interests</h3>
                <div className="form-group">
                  <label htmlFor="skills">Skills & Talents</label>
                  <textarea
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="Teaching, Public Speaking, Medical, Technical Skills, etc."
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="interests">Areas of Interest</label>
                  <textarea
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleInputChange}
                    placeholder="Menstrual Health Education, Community Outreach, Event Planning, etc."
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="motivation">Why do you want to join Doekman Foundation? *</label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us what motivates you to be part of our community..."
                    rows="4"
                  />
                </div>
              </div>

              {/* Volunteer Preferences */}
              <div className="form-section">
                <h3 className="form-section-title">Volunteer Preferences</h3>
                <div className="form-group">
                  <label htmlFor="volunteerType">Preferred Type of Involvement</label>
                  <select
                    id="volunteerType"
                    name="volunteerType"
                    value={formData.volunteerType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Preference</option>
                    <option value="regular-volunteer">Regular Volunteer</option>
                    <option value="event-volunteer">Event-based Volunteer</option>
                    <option value="remote-support">Remote Support</option>
                    <option value="skill-based">Skill-based Contribution</option>
                    <option value="leadership">Leadership Role</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="availability">Availability</label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Availability</option>
                    <option value="weekends">Weekends</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="evenings">Evenings</option>
                    <option value="flexible">Flexible</option>
                    <option value="specific-days">Specific Days</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="previousExperience">Previous Volunteer Experience</label>
                  <textarea
                    id="previousExperience"
                    name="previousExperience"
                    value={formData.previousExperience}
                    onChange={handleInputChange}
                    placeholder="Any previous experience with community service or volunteering..."
                    rows="3"
                  />
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Join Our Community'}
              </button>
              <p className="form-note">
                * Required fields. By submitting this form, you agree to be contacted by Doekman Foundation.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Benefits Section - Updated with 6 cards */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Join Our Community?</h2>
            <p className="section-subtitle">
              Discover the incredible benefits of being part of Doekman Foundation
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Make a Real Difference</h3>
              <p>Directly impact lives in your community through meaningful projects and sustainable initiatives that create lasting change.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h3>Learn & Grow</h3>
              <p>Gain valuable skills, professional experience, and comprehensive training in community development and leadership.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Build Networks</h3>
              <p>Connect with like-minded individuals, professionals, and community leaders passionate about creating social change.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Flexible Involvement</h3>
              <p>Choose how you want to contribute based on your unique skills, interests, availability, and personal preferences.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌟</div>
              <h3>Personal Growth</h3>
              <p>Develop confidence, empathy, and leadership skills while working on projects that challenge and inspire you.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>Recognition & Impact</h3>
              <p>Receive certificates, awards, and recognition for your contributions while building an impressive portfolio of community work.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinPage;