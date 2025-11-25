import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import './HomePage.css';
import Footer from './Footer';
import Navbar from './Navbar'; 

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [counted, setCounted] = useState(false);
  const statsRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  // Count up animation for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            setCounted(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [counted]);

  const animateNumbers = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach((statNumber) => {
      const target = parseInt(statNumber.getAttribute('data-count'));
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // 60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        statNumber.textContent = Math.floor(current) + '+';
      }, 16);
    });
  };

    // Carousel functionality
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Number of carousel slides

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="homepage">
     <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Background with overlay covering entire section */}
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-container">
          {/* Left side - Text content on background */}
          <div className="hero-content">
            <h1 className="heros-title">
              Empowering Youth Through For a Better Tomorrow
            </h1>
            <p className="heros-description">
              Creating awareness, breaking the stigma, and supporting young people through education and resources.
            </p>
            <Link to="/about">
              <button className="heros-btn">Learn More</button>
            </Link>
          </div>

          {/* Right side - Orange card with image overlapping */}
          <div className="hero-card-overlap">
            {/* Orange background */}
            <div className="card-orange-bg"></div>
            {/* Image overlapping the orange background */}
            <img 
              src="/images/front.jpg" 
              alt="Empowering Youth" 
              className="card-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback if image doesn't load */}
            <div className="image-fallback">
              <span>Group Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            {/* Mission Card - Text left, Image right */}
            <div className="mission-card">
              <div className="card-content-side">
                <h2 className="section-title">Our Mission</h2>
                <p className="section-text">
                  To create an empowered and informed society in Tanzania where menstrual health is prioritized 
                  as a fundamental aspect of public health, dignity, and sustainable development.
                </p>
              </div>
              <div className="card-image-side">
                <img 
                  src="/images/mission.jpg" 
                  alt="Our Mission"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="image-fallback mission-fallback">
                  Mission Image
                </div>
              </div>
            </div>

            {/* Vision Card - Image left, Text right */}
            <div className="vision-card">
              <div className="card-image-side">
                <img 
                  src="/images/vision1.jpg" 
                  alt="Our Vision"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="image-fallback vision-fallback">
                  Vision Image
                </div>
              </div>
              <div className="card-content-side">
                <h2 className="section-title">Our Vision</h2>
                <p className="section-text">
                  A world where menstrual health is universally understood, accessible, and supported 
                  through inclusive policies, education, and sustainable practices.
                </p>
              </div>
            </div>
          </div>

          {/* Focus Areas Grid - Now 6 Cards */}
          <div className="focus-areas-section">
            <h2 className="focus-title">Our Focus Areas</h2>
            <div className="focus-grid">
              {/* Menstrual Health Education */}
              <div className="focus-card">
                <div className="focus-icon">🎓</div>
                <h3 className="focus-card-title">Menstrual Health Education</h3>
                <p className="focus-card-text">
                  Providing menstrual health education in schools, communities, and workplaces to foster 
                  awareness and eliminate stigma. Training young people on sustainable and hygienic menstrual practices.
                </p>
              </div>

              {/* Sustainable Development */}
              <div className="focus-card">
                <div className="focus-icon">🌱</div>
                <h3 className="focus-card-title">Sustainable Development</h3>
                <p className="focus-card-text">
                  Integrating eco-conscious activities like tree planting into menstrual health initiatives, 
                  highlighting the connection between personal and environmental health.
                </p>
              </div>

              {/* Access to Products */}
              <div className="focus-card">
                <div className="focus-icon">🩸</div>
                <h3 className="focus-card-title">Access To Menstrual Hygiene Products</h3>
                <p className="focus-card-text">
                  Ensuring access to sanitary pads and eco-friendly menstrual products for women and girls 
                  in underdeveloped communities. Advocating for affordable product policies.
                </p>
              </div>

              {/* Youth Advocacy */}
              <div className="focus-card">
                <div className="focus-icon">💪</div>
                <h3 className="focus-card-title">Youth Advocacy</h3>
                <p className="focus-card-text">
                  Training young people as menstrual health advocates, cultivating a generation of informed 
                  leaders committed to community health and partnerships.
                </p>
              </div>

              {/* Mental Health Support */}
              <div className="focus-card">
                <div className="focus-icon">🧠</div>
                <h3 className="focus-card-title">Mental Health & Well-being</h3>
                <p className="focus-card-text">
                  Addressing the psychological and emotional aspects of menstrual health through workshops 
                  and outreach programs, promoting self-confidence and overall well-being.
                </p>
              </div>

              {/* Community Partnerships */}
              <div className="focus-card">
                <div className="focus-icon">🤝</div>
                <h3 className="focus-card-title">Community Partnerships</h3>
                <p className="focus-card-text">
                  Collaborating with healthcare institutions and community organizations to ensure holistic 
                  menstrual health services and comprehensive awareness programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacts Stats Section */}
      <section className="impacts-section" ref={statsRef}>
        <div className="container">
          <div className="impacts-header">
            <h2 className="impacts-title">Our Impact</h2>
            <p className="impacts-subtitle">Making a difference in communities across Tanzania</p>
          </div>
          <div className="stats-grid">
            {/* Human Impacted */}
            <div className="stat-item">
              <div className="stat-number" data-count="5000">0</div>
              <div className="stat-label">Human Impacted</div>
              <div className="stat-icon">👥</div>
            </div>

            {/* Collaborators */}
            <div className="stat-item">
              <div className="stat-number" data-count="200">0</div>
              <div className="stat-label">Collaborators</div>
              <div className="stat-icon">🤝</div>
            </div>

            {/* Donation */}
            <div className="stat-item">
              <div className="stat-number" data-count="650">0</div>
              <div className="stat-label">Donation</div>
              <div className="stat-icon">💰</div>
            </div>

            {/* Assisted Communities */}
            <div className="stat-item">
              <div className="stat-number" data-count="500">0</div>
              <div className="stat-label">Assisted Communities</div>
              <div className="stat-icon">🏘️</div>
            </div>
          </div>
        </div>
      </section>


 {/* Program Highlights Section */}
      <section className="program-highlights-section">
  <div className="container">
    <div className="program-highlights-grid">
      {/* Left Side - Content */}
      <div className="program-content">
        <h2 className="program-title">PROGRAM HIGHLIGHTS</h2>
        <div className="program-carousel">
          <div className={`program-slide ${currentSlide === 0 ? 'active' : ''}`}>
            <h3 className="slide-title">AWARENESS</h3>
            <p className="slide-description">
              We believe that real change begins at home. That's why we're committed to turning your 
              generosity into direct support for neighbors in need. Every donation, every hour volunteered, 
              and every shared message helps create a safer, healthier, and more connected community.
            </p>
            <Link to="/programs">
              <button className="program-btn">Learn More About Programs</button>
            </Link>
          </div>
          <div className={`program-slide ${currentSlide === 1 ? 'active' : ''}`}>
            <h3 className="slide-title">EDUCATION</h3>
            <p className="slide-description">
              Empowering communities through comprehensive menstrual health education programs. 
              We provide training and resources to schools and local organizations to break the stigma 
              and promote sustainable practices.
            </p>
            <Link to="/programs">
              <button className="program-btn">Learn More About Programs</button>
            </Link>
          </div>
          <div className={`program-slide ${currentSlide === 2 ? 'active' : ''}`}>
            <h3 className="slide-title">COMMUNITY SUPPORT</h3>
            <p className="slide-description">
              Building strong community networks to support menstrual health initiatives. 
              Through partnerships and collaborative efforts, we ensure sustainable impact 
              and long-term change in underserved communities.
            </p>
            <Link to="/programs">
              <button className="program-btn">Learn More About Programs</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Image Carousel */}
        <div className="program-carousel-side">
        <div className="carousel-container">
          <div className="carousel-track" style={{ transform: `translateY(-${currentSlide * 100}%)` }}>
            <div className="carousel-slide">
              <img 
                src="/images/program1.jpg" 
                alt="Awareness Program"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="carousel-fallback">
                Awareness Program Image
              </div>
            </div>
            <div className="carousel-slide">
              <img 
                src="/images/image1.jpg" 
                alt="Education Program"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="carousel-fallback">
                Education Program Image
              </div>
            </div>
            <div className="carousel-slide">
              <img 
                src="/images/image2.jpg" 
                alt="Community Program"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="carousel-fallback">
                Community Program Image
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-controls">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>↑</button>
          <button className="carousel-btn next-btn" onClick={nextSlide}>↓</button>
        </div>
          </div>
        </div>
      </div>
      </section>

{/* News & Events Section */}
      <section className="news-events-section">
  <div className="container">
    <div className="news-header">
      <h2 className="news-title">NEWS & EVENTS</h2>
      <p className="news-subtitle">Stay updated with our latest activities and community events</p>
    </div>
    
    <div className="news-grid">
      {/* News Card 1 */}
      <div className="news-card">
        <div className="news-image">
          <img 
            src="/images/artimage.jpg" 
            alt="Community Workshop"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="news-fallback">
            Workshop Image
          </div>
          <div className="news-date">
            {/* <span className="date-day">15</span> */}
            <span className="date-month">JAN,2026</span>
          </div>
        </div>
        <div className="news-content">
          <h3 className="news-card-title">Art For Future</h3>
          <p className="news-card-excerpt">
            Empowering young students with disabilities by equipping them with drawing and creative art skills — building confidence, self-reliance, and economic potential through creativity.

          </p>
          <div className="news-meta">
            <span className="news-location">📍 Dar es Salaam</span>
            <span className="news-time">🕒 10:00 AM</span>
          </div>
          <Link to="/events">
            <button className="news-btn">Read More</button>
          </Link>
        </div>
      </div>

      {/* News Card 2 */}
      <div className="news-card">
        <div className="news-image">
          <img 
            src="/images/hedhiS1image9.jpg" 
            alt="Product Distribution"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="news-fallback">
            Distribution Image
          </div>
          <div className="news-date">
            {/* <span className="date-day">28</span> */}
            <span className="date-month">MAY</span>
          </div>
        </div>
        <div className="news-content">
          <h3 className="news-card-title">Menstrual Health Summit</h3>
          <p className="news-card-excerpt">
            A national gathering that will bring together all stakeholders in menstrual health management (MHM) — from NGOs and schools to government bodies and corporate partners — to discuss, learn, and design sustainable menstrual health solutions.
          </p>
          <div className="news-meta">
            <span className="news-location">📍 Arusha</span>
            <span className="news-time">🕒 9:00 AM</span>
          </div>
          <Link to="/events">
          <button className="news-btn">Read More</button>
          </Link>
        </div>
      </div>

      {/* News Card 3 */}
      <div className="news-card">
        <div className="news-image">
          <img 
            src="/images/wings.jpg" 
            alt="Youth Training"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="news-fallback">
            Training Image
          </div>
          <div className="news-date">
            {/* <span className="date-day">05</span> */}
            <span className="date-month">SEPT,2026</span>
          </div>
        </div>
        <div className="news-content">
          <h3 className="news-card-title">Wings Of Compassion</h3>
          <p className="news-card-excerpt">
            Continuing our flagship program promoting SRHR, mental health awareness, and youth empowerment through education, sports, and art-based advocacy across schools in Tanzania.
          </p>
          <div className="news-meta">
            <span className="news-location">📍 Mwanza</span>
            <span className="news-time">🕒 2:00 PM</span>
          </div>
          <Link to="/events">
            <button className="news-btn">Read More</button>
          </Link>
        </div>
      </div>
    </div>

    <div className="news-footer">
      <button className="view-all-btn">View All News & Events</button>
    </div>
  </div>
      </section>


{/* Testimonials Section */}
      <section className="testimonials-section">
  <div className="container">
    <div className="testimonials-header">
      <h2 className="testimonials-title">Testimonials</h2>
      <p className="testimonials-subtitle">
        We are proud of the heartfelt testimonials from our beneficiaries and partners, 
        which reflect the positive impact of our foundation's work in the communities we serve.
      </p>
    </div>
    
    <div className="testimonials-grid">
      {/* Testimonial 1 - Mr. Lewis */}
      <div className="testimonial-card">
        <div className="testimonial-header">
          <div className="testimonial-image">
            <img 
              src="/images/lewisi.jpg" 
              alt="Mr. Lewis Libent Kagande"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="testimonial-fallback">
              <span>LL</span>
            </div>
          </div>
          <div className="testimonial-author">
            <h3 className="author-name">Mr. Lewis Libent Kagande</h3>
          </div>
        </div>
        <div className="testimonial-content">
          <p className="testimonial-text">
            "I am deeply proud of the work we've accomplished together in serving our communities. 
            Every step we take is guided by compassion, accountability, and a shared vision for lasting impact."
          </p>
        </div>
      </div>

      {/* Testimonial 2 - Ms. Tedy */}
      <div className="testimonial-card">
        <div className="testimonial-header">
          <div className="testimonial-image">
            <img 
              src="/images/teddy.jpg" 
              alt="Ms. Tedy Makau"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="testimonial-fallback">
              <span>TM</span>
            </div>
          </div>
          <div className="testimonial-author">
            <h3 className="author-name">Ms. Tedy Makau</h3>
          </div>
        </div>
        <div className="testimonial-content">
          <p className="testimonial-text">
            "I've witnessed and lead our foundation with unmatched dedication and vision. 
            Their compassion and tireless efforts continue to uplift communities and inspire our entire team every day."
          </p>
        </div>
      </div>
    </div>
  </div>
      </section>


      <Footer />
    `</div>
  );
};

export default HomePage;