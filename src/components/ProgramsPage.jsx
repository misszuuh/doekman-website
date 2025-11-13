import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProgramsPage.css';
import Footer from './Footer';
import Navbar from './Navbar'; 


const ProgramsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('programs');
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How can I get involved with Doekman Foundation?",
      answer: "You can participate as a volunteer, partner organization, or sponsor. Fill out the contact form on our website or email us to learn about open opportunities."
    },
    {
      question: "How can someone donate or support your work?",
      answer: "You can donate directly through our GoFundMe page or reach out for partnership support. Every contribution helps us reach more schools, train more youth, and provide menstrual health resources."
    },
    {
      question: "Does the Foundation provide any financial support to youth?",
      answer: "We do not offer direct financial grants to individuals, but we equip young people with skills, mentorship, and connections that enable them to become self-reliant or start community-based projects."
    },
    {
      question: "How do you use donations and sponsorships?",
      answer: "All funds are transparently directed toward project activities such as educational materials, training sessions, transportation, and youth welfare. We also provide financial reports after each project."
    },
    {
      question: "How does the Foundation collaborate with the government?",
      answer: "All our school and community programs are conducted under official permissions from local education authorities and municipalities."
    }
  ];

  return (
    <div className="programspage">
     <Navbar /> 

      {/* Hero Section */}
      <section className="programs-hero">
        <div className="programs-hero-background">
          <div className="programs-hero-overlay"></div>
        </div>
        
        <div className="programs-hero-container">
          <div className="animated-text-container">
            <h1 className="animated-text">PROGRAMS</h1>
          </div>
        </div>
      </section>

      {/* Core Programs and Initiatives Section */}
<section className="core-programs-section">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">Core Programs & Initiatives</h2>
      <p className="section-subtitle">
        Comprehensive menstrual health education and youth empowerment programs
      </p>
    </div>

    {/* First Program Card - Image Left, Content Right */}
    <div className="program-card">
      <div className="program-image-side">
        <img 
          src="/images/program1.jpg" 
          alt="Menstrual Health Education"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="image-fallback program-fallback">
          Health Education
        </div>
      </div>
      <div className="program-content-side">
        <h3 className="program-card-title">Menstrual Health Programs</h3>
        <div className="programs-list">
          <div className="program-item">
            <div className="program-icon">🎓</div>
            <div className="program-details">
              <h4 className="program-name">School Education</h4>
              <p className="program-description">
                Comprehensive menstrual health education in schools, breaking stigma with accurate information.
              </p>
            </div>
          </div>
          <div className="program-item">
            <div className="program-icon">🏘️</div>
            <div className="program-details">
              <h4 className="program-name">Community Awareness</h4>
              <p className="program-description">
                Engaging parents, teachers, and leaders in menstrual health conversations.
              </p>
            </div>
          </div>
          <div className="program-item">
            <div className="program-icon">🩸</div>
            <div className="program-details">
              <h4 className="program-name">Product Distribution</h4>
              <p className="program-description">
                Providing sustainable menstrual hygiene products to underserved communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Second Program Card - Content Left, Image Right */}
    <div className="program-card reverse">
      <div className="program-content-side">
        <h3 className="program-card-title">Youth Development</h3>
        <div className="programs-list">
          <div className="program-item">
            <div className="program-icon">💪</div>
            <div className="program-details">
              <h4 className="program-name">Advocacy Training</h4>
              <p className="program-description">
                Training young leaders to become menstrual health advocates in their communities.
              </p>
            </div>
          </div>
          <div className="program-item">
            <div className="program-icon">🧠</div>
            <div className="program-details">
              <h4 className="program-name">Mental Health</h4>
              <p className="program-description">
                Workshops addressing psychological aspects and promoting emotional well-being.
              </p>
            </div>
          </div>
          <div className="program-item">
            <div className="program-icon">🌱</div>
            <div className="program-details">
              <h4 className="program-name">Sustainability</h4>
              <p className="program-description">
                Eco-friendly practices integrated with menstrual health initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="program-image-side">
        <img 
          src="/images/program2.jpg" 
          alt="Youth Empowerment"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="image-fallback program-fallback">
          Youth Empowerment
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our programs and involvement opportunities
            </p>
          </div>

          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3 className="question-text">{faq.question}</h3>
                  <span className="faq-toggle">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <Footer />
    </div>
  );
};

export default ProgramsPage;