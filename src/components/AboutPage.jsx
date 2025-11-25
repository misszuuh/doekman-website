import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import Footer from './Footer';
import Navbar from './Navbar'; 

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('about');
  const [activeLeader, setActiveLeader] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const leaders = [
    {
      id: 1,
      name: "Mr. Lewis Libent Kagande",
      position: "Founder & Board Chairperson",
      image: "/images/lewisi.jpg",
      description: "A passionate youth leader and advocate for menstrual health and gender equality, Lewis founded the Doekman Foundation to challenge stigma and empower communities. He leads the board with vision, integrity, and a strong commitment to sustainable social change across Tanzania."
    },
    {
      id: 2,
      name: "Witness Kimath",
      position: "Executive Director",
      image: "/images/kimath.jpg",
      description: "Witness oversees all operations and strategic direction of the Doekman Foundation. She is a dynamic leader dedicated to strengthening menstrual hygiene programs and building partnerships that enhance youth and women’s empowerment."
    },
    {
      id: 3,
      name: "Zubeda Nurudin ",
      position: "Finance Director",
      image: "/images/zubeda.jpg",
      description: "Zubeda ensures transparency and accountability in all financial matters. With a strong background in finance and NGO management, she plays a key role in budgeting, financial planning, and supporting project sustainability."
    },
    {
      id: 4,
      name: "Amina Halid",
      position: "Communication & Partnership Officer",
      image: "/images/amina.jpg",
      description: "Amina leads the Foundation’s communication strategy, ensuring powerful storytelling and public engagement. She uses creative digital approaches to raise awareness on menstrual hygiene, mental health, and youth empowerment."
    },
    {
      id: 5,
      name: "Simon Kanjo ",
      position: "Monitoring & Evaluation Director",
      image: "/images/simon.jpg",
      description: "Simon specializes in tracking and evaluating program impact. His analytical mindset helps the Foundation measure success, improve effectiveness, and ensure every initiative delivers real results on the ground."
    },
    {
      id: 6,
      name: "Cretus Kennedy ",
      position: "Project Director",
      image: "/images/cretusk.jpg",
      description: "Cretus oversees project planning and implementation across all programs. His expertise ensures that Doekman Foundation initiatives are well-coordinated, timely, and impactful in communities."
    },
    {
      id: 7,
      name: "Najma Ally",
      position: "Deputy Director",
      image: "/images/NajmaAlly.jpg",
      description: "Najma supports the executive leadership and drives internal coordination. She is known for her dedication, discipline, and passion for empowering youth and girls through education, advocacy, and leadership."
    },
    {
      id: 8,
      name: "Ester Manono",
      position: "Head of Mental Health Department",
      image: "/images/ester.jpg",
      description: "Ester Manono leads the Mental Health Department, focusing on awareness, emotional resilience, and psychological well-being. She plays a vital role in integrating mental health support within the Foundation’s programs, ensuring holistic empowerment for young people."
    }
  ];

  return (
    <div className="aboutpage">
      <Navbar />
      {/* Hero Section with Animated Text */}
      <section className="about-hero">
        <div className="about-hero-background">
          <div className="about-hero-overlay"></div>
        </div>
        
        <div className="about-hero-container">
          <div className="animated-text-container">
            <h1 className="animated-text">ABOUT US</h1>
          </div>
        </div>
      </section>

      {/* Organization Overview Section */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-image">
              <img 
                src="/images/about1.jpg" 
                alt="Organization Overview"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="image-fallback overview-fallback">
                About Our Organization
              </div>
            </div>
            <div className="overview-content">
              <h2 className="overview-title">Organization Overview</h2>
              <p className="overview-text">
                The Doekman Foundation is a Tanzanian youth-led non-governmental organization (NGO) 
                dedicated to advancing menstrual health awareness and support for underprivileged communities. 
                Registered under Tanzanian law <span className="highlight">(Registration No: 00NGO/R/7377)</span>, 
                the foundation recognizes menstrual hygiene as a fundamental public health issue. 
                Through sexual reproductive health, mental health, youth empowering, advocacy, education, and strategic partnerships, Doekman Foundation is committed 
                to empowering communities, eliminating menstrual stigma, and ensuring access to essential 
                hygiene resources for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Updated Layout */}
      <section className="values-section">
        <div className="container">
          <div className="values-card">
            <div className="values-image-side">
              <img 
                src="/images/mission.jpg" 
                alt="Our Core Values"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="image-fallback values-fallback">
                Our Values
              </div>
            </div>
            <div className="values-content-side">
              <h2 className="values-title">CORE VALUES</h2>
              <div className="values-list">
                <div className="value-item">
                  <h3 className="value-name">Compassion</h3>
                  <p className="value-description">
                    We approach every individual and community with empathy, understanding their unique 
                    challenges and needs in menstrual health management.
                  </p>
                </div>
                <div className="value-item">
                  <h3 className="value-name">Integrity</h3>
                  <p className="value-description">
                    We maintain the highest standards of transparency and ethical conduct in all our 
                    operations and relationships with stakeholders.
                  </p>
                </div>
                <div className="value-item">
                  <h3 className="value-name">Innovation</h3>
                  <p className="value-description">
                    We continuously seek creative solutions and approaches to address menstrual health 
                    challenges in underprivileged communities.
                  </p>
                </div>
                <div className="value-item">
                  <h3 className="value-name">Collaboration</h3>
                  <p className="value-description">
                    We believe in the power of partnerships and work closely with communities, 
                    government, and other organizations to create sustainable impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section - Updated with 8 leaders */}
      <section className="leadership-section">
        <div className="container">
          <div className="leadership-header">
            <h2 className="section-title">Leadership Team</h2>
            <p className="leadership-subtitle">
              Meet the dedicated professionals driving our mission forward
            </p>
          </div>

          <div className="leaders-container">
            <div className="leaders-row">
              {leaders.slice(0, 4).map((leader) => (
                <div 
                  key={leader.id}
                  className={`leader-card ${activeLeader === leader.id ? 'flipped' : ''}`}
                  onClick={() => setActiveLeader(activeLeader === leader.id ? null : leader.id)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="leader-image">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="leader-fallback">
                          <span>{leader.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                      </div>
                      <div className="leader-info">
                        <h3 className="leader-name">{leader.name}</h3>
                        <p className="leader-position">{leader.position}</p>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="back-content">
                        <h3 className="leader-name">{leader.name}</h3>
                        <p className="leader-position">{leader.position}</p>
                        <p className="leader-description">{leader.description}</p>
                        <div className="flip-indicator">Click to flip back</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="leaders-row">
              {leaders.slice(4, 8).map((leader) => (
                <div 
                  key={leader.id}
                  className={`leader-card ${activeLeader === leader.id ? 'flipped' : ''}`}
                  onClick={() => setActiveLeader(activeLeader === leader.id ? null : leader.id)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="leader-image">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="leader-fallback">
                          <span>{leader.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                      </div>
                      <div className="leader-info">
                        <h3 className="leader-name">{leader.name}</h3>
                        <p className="leader-position">{leader.position}</p>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="back-content">
                        <h3 className="leader-name">{leader.name}</h3>
                        <p className="leader-position">{leader.position}</p>
                        <p className="leader-description">{leader.description}</p>
                        <div className="flip-indicator">Click to flip back</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<section className="partners-section">
  <div className="partners-background">
    <div className="partners-overlay"></div>
  </div>
  <div className="container">
    <div className="partners-header">
      <h2 className="section-title">Our Partners</h2>
      <p className="partners-subtitle">
        Collaborating with organizations that share our vision for menstrual health and community empowerment
      </p>
    </div>
    <div className="partners-grid">
      <div className="partner-logo">
        <img src="/images/akmremovebg.png" alt="Partner 1" />
      </div>
      <div className="partner-logo">
        <img src="/images/aznasremovebg.png" alt="Partner 2" />
      </div>
      <div className="partner-logo">
        <img src="/images/logo3removebg.png" alt="Partner 3" />
      </div>
      <div className="partner-logo">
        <img src="/images/logo6removebg.png" alt="Partner 4" />
      </div>
      <div className="partner-logo">
        <img src="/images/logo7removebg.png" alt="Partner 5" />
      </div>
      <div className="partner-logo">
        <img src="/images/logo8removebg.png" alt="Partner 6" />
      </div>
      <div className="partner-logo">
        <img src="/images/tumainremovebg.png" alt="Partner 7" />
      </div>
      <div className="partner-logo">
        <img src="/images/printremovebg.png" alt="Partner 8" />
      </div>
    </div>
  </div>
</section>


<section className="timeline-section">
  <div className="container">
    <div className="timeline-header">
      <h2 className="section-title">Our Journey</h2>
      <p className="timeline-subtitle">
        From a simple idea to a growing movement for menstrual health awareness
      </p>
    </div>
    <div className="timeline">
      <div className="timeline-line"></div>
      
      {/* Timeline Item 1 */}
      <div className="timeline-item left">
        <div className="timeline-content">
          <div className="timeline-year">2022 – 2023</div>
          <div className="timeline-text">
            Lewis Libent Kagande identified challenges faced by women and girls during menstruation, 
            including stigma and lack of education. This inspired initiatives for education and awareness.
          </div>
        </div>
        <div className="timeline-dot"></div>
      </div>

      {/* Timeline Item 2 */}
      <div className="timeline-item right">
        <div className="timeline-content">
          <div className="timeline-year">2023 – 2024</div>
          <div className="timeline-text">
            Officially registered as an NGO and launched Hedhi Salama Tour campaign, visiting schools 
            and communities to provide menstrual health and mental well-being education.
          </div>
        </div>
        <div className="timeline-dot"></div>
      </div>

      {/* Timeline Item 3 */}
      <div className="timeline-item left">
        <div className="timeline-content">
          <div className="timeline-year">2024 – 2025</div>
          <div className="timeline-text">
            Expanded scope to focus on three main areas: Sexual and Reproductive Health, Mental Health, 
            and Youth Empowerment. Enhanced collaborations with organizations and institutions.
          </div>
        </div>
        <div className="timeline-dot"></div>
      </div>

      {/* Timeline Item 4 */}
      <div className="timeline-item right">
        <div className="timeline-content">
          <div className="timeline-year">2025 – Present</div>
          <div className="timeline-text">
            In a two-year transition period focusing on structural development and program strengthening 
            to become a leading force in SRH, Mental Health, and Youth Empowerment in Tanzania.
          </div>
        </div>
        <div className="timeline-dot"></div>
      </div>
    </div>
  </div>
</section>


<Footer />
    </div>
  );
};

export default AboutPage;