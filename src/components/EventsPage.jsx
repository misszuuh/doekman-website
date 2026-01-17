import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EventsPage.css';
import Footer from './Footer';
import Navbar from './Navbar'; 

const EventsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('events');
  const [activeEvent, setActiveEvent] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };

  const eventsData = [
    {
      id: 1,
      title: "Hedhi Salama Tour (Season 1)",
      description: "A comprehensive menstrual health education tour visiting schools and communities across Tanzania, providing awareness and resources.",
      images: [
        "/images/hedhiS1image1.jpg",
        "/images/hedhiS1image2.jpg",
        "/images/hedhiS1image3.jpg",
        "/images/hedhiS1image4.jpg",
        "/images/hedhiS2image5.jpg",
        "/images/hedhiS1image6.jpg",
        "/images/hedhiS1image7.jpg",
        "/images/hedhiS1image8.jpg",
        "/images/hedhiS1image9.jpg",
        "/images/hedhiS1image10.jpg"
      ],
      date: "December 2024",
      location: "Dar es Salaam",
      impact: "5,000+ students reached"
    },
    {
      id: 2,
      title: "Blood Donation Temeke Hospital",
      description: "Community blood donation drive in collaboration with Temeke Hospital to support healthcare services and save lives.",
      images: [
        "/images/bdonation1.jpg",
        "/images/bdonation2.jpg",
        "/images/bdonation3.jpg",
        "/images/bdonation4.jpg",
        "/images/bdonation5.jpg",
        "/images/bdonation6.jpg",
        "/images/bdonation7.jpg",
        "/images/bdonation4.jpg",
        "/images/bdonation9.jpg",
        "/images/bdonation10.jpg"
      ],
      date: "June 2024",
      location: "Temeke Hospital",
      impact: "200+ units collected"
    },
    {
      id: 3,
      title: "Mguse Mwanafunzi Campaign",
      description: "Educational campaign focused on student welfare and academic support in underserved communities.",
      images: [
        "/images/mguse1.jpg",
        "/images/mguse2.jpg",
        "/images/mguse3.jpg",
        "/images/mguse4.jpg",
        "/images/mguse5.jpg",
        "/images/mguse6.jpg",
        "/images/mguse7.jpg",
        "/images/mguse8.jpg",
        "/images/mguse9.jpg",
        "/images/mguse10.jpg"
      ],
      date: "August 2024",
      location: "Multiple Schools",
      impact: "3,000+ students supported"
    },
    {
      id: 4,
      title: "Rejesha Tabasamu Campaign",
      description: "Community happiness restoration project focusing on mental health awareness and emotional well-being.",
      images: [
        "/images/tabasamu1.jpg",
        "/images/tabasamu2.jpg",
        "/images/tabasamu3.jpg",
        "/images/tabasamu4.jpg",
        "/images/tabasamu5.jpg",
        "/images/tabasamu6.jpg",
        "/images/tabasamu7.jpg",
        "/images/tabasamu8.jpg",
        "/images/tabasamu9.jpg",
        "/images/tabasamu10.jpg"
      ],
      date: "October 2024",
      location: "Community Centers",
      impact: "1,500+ participants"
    },
    {
      id: 5,
      title: "Wings of Compassion",
      description: "Humanitarian outreach program providing essential supplies and support to vulnerable communities.",
      images: [
        "/images/wings1.jpg",
        "/images/wings2.jpg",
        "/images/wings3.jpg",
        "/images/wings.jpg",
        "/images/wings6.jpg",
        "/images/wings5.jpg",
        "/images/wings7.jpg",
        "/images/wings8.jpg",
        "/images/wings9.jpg",
        "/images/wings10.jpg"
      ],
      date: "December 2024",
      location: "Various Locations",
      impact: "2,000+ families helped"
    }
  ];

  return (
    <div className="eventspage">
      <Navbar /> 
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-background">
          <div className="events-hero-overlay"></div>
        </div>
        
        <div className="events-hero-container">
          <div className="animated-text-container">
            <h1 className="animated-text">EVENTS & GALLERY</h1>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">
              Join us in our upcoming initiatives and make a difference in your community
            </p>
          </div>

          <div className="upcoming-events-grid">
            <div className="upcoming-event-card">
              <div className="event-date">
                {/* <span className="date-day">15</span> */}
                <span className="date-month">JAN,2026</span>
              </div>
              <div className="event-content">
                <h3 className="event-title">Art For Future</h3>
                <p className="event-description">
                  Empowering young students with disabilities by equipping them with drawing and creative art skills building confidence, self-reliance, and economic potential through creativity.

                </p>
                <div className="event-meta">
                  <span className="event-location">📍 Dar es Salaam (Matumaini Orphanage Center)</span>
                  <span className="event-time">🕒 9:00 AM</span>
                </div>
                <button className="event-btn">Register Interest</button>
              </div>
            </div>

            <div className="upcoming-event-card">
              <div className="event-date">
                {/* <span className="date-day">28</span> */}
                <span className="date-month">MAY,2026</span>
              </div>
              <div className="event-content">
                <h3 className="event-title">Menstrual Health Summit</h3>
                <p className="event-description">
                  A national gathering that will bring together all stakeholders in menstrual health management (MHM) from NGOs and schools to government bodies and corporate partners to discuss, learn, and design sustainable menstrual health solutions.
.
                </p>
                <div className="event-meta">
                  <span className="event-location">📍 Dar es salaam (UDSM New Library)</span>
                  <span className="event-time">🕒 2:00 PM</span>
                </div>
                <button className="event-btn">Register Interest</button>
              </div>
            </div>

            <div className="upcoming-event-card">
              <div className="event-date">
                {/* <span className="date-day">05</span> */}
                <span className="date-month">SEPT, 2026</span>
              </div>
              <div className="event-content">
                <h3 className="event-title">Wings of Compassion</h3>
                <p className="event-description">
                  Continuing our flagship program promoting SRHR, mental health awareness, and youth empowerment through education, sports, and art-based advocacy across schools in Tanzania.
                </p>
                <div className="event-meta">
                  <span className="event-location">📍 Dar es salaam (Ubungo)</span>
                  <span className="event-time">🕒 8:00 AM</span>
                </div>
                <button className="event-btn">Register Interest</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Gallery Section */}
      <section className="events-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Events Gallery</h2>
            <p className="section-subtitle">
              Explore our past events and initiatives through our photo gallery
            </p>
          </div>
          
          {/* Event Selector */}
          <div className="event-selector">
            {eventsData.map((event, index) => (
              <button
                key={event.id}
                className={`event-tab ${activeEvent === index ? 'active' : ''}`}
                onClick={() => {
                  setActiveEvent(index);
                  setActiveImageIndex(0);
                }}
              >
                {event.title}
              </button>
            ))}
          </div>
          
          {/* Gallery Carousel */}
          <div className="gallery-container">
            <div className="gallery-carousel">
              {/* Left side thumbnails */}
              <div className="thumbnail-strip left-strip">
                {eventsData[activeEvent].images.map((image, index) => {
                  // Show only the first 5 images on the left
                  if (index < 5) {
                    return (
                      <div 
                        key={index}
                        className={`thumbnail ${activeImageIndex === index ? 'active' : ''}`}
                        onClick={() => handleImageClick(index)}
                      >
                        <img src={image} alt={`Thumbnail ${index + 1}`} />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
              
              {/* Main image */}
              <div className="main-image-container">
                <div className="main-image">
                  <img 
                    src={eventsData[activeEvent].images[activeImageIndex]} 
                    alt={`Event ${activeEvent + 1} - Image ${activeImageIndex + 1}`} 
                  />
                </div>
                <div className="image-counter">
                  {activeImageIndex + 1} / {eventsData[activeEvent].images.length}
                </div>
              </div>
              
              {/* Right side thumbnails */}
              <div className="thumbnail-strip right-strip">
                {eventsData[activeEvent].images.map((image, index) => {
                  // Show only images from index 5 onwards on the right
                  if (index >= 5) {
                    return (
                      <div 
                        key={index}
                        className={`thumbnail ${activeImageIndex === index ? 'active' : ''}`}
                        onClick={() => handleImageClick(index)}
                      >
                        <img src={image} alt={`Thumbnail ${index + 1}`} />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
            
            {/* Event Info */}
            <div className="event-info">
              <h3 className="event-title">{eventsData[activeEvent].title}</h3>
              <p className="event-description">{eventsData[activeEvent].description}</p>
              <div className="event-details">
                <div className="event-detail">
                  <span className="detail-label">Date:</span>
                  <span className="detail-value">{eventsData[activeEvent].date}</span>
                </div>
                <div className="event-detail">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{eventsData[activeEvent].location}</span>
                </div>
                <div className="event-detail">
                  <span className="detail-label">Impact:</span>
                  <span className="detail-value">{eventsData[activeEvent].impact}</span>
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

export default EventsPage;