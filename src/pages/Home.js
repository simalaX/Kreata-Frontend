import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaWhatsapp, FaTimes, FaSearch, FaMoon, FaSun } from 'react-icons/fa';
import Logo from '../components/Logo';
import MotorbikeDelivery from '../components/MotorbikeDelivery';
import servicesData from '../data/servicesData';
import { businessInfo, whyUsPoints } from '../data/siteData';
import { getTestimonials } from '../api/endpoints';

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await getTestimonials(true);
        setTestimonials(res.data.slice(0, 3));
      } catch (err) {
        setTestimonials([]);
      }
    };
    fetchTestimonials();

    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  // Helper function to generate WhatsApp link
  const getWhatsAppLink = (serviceName) => {
    const phoneNumber = businessInfo.whatsappLink.split('/').pop();
    const message = `Hi, I'm interested in ${serviceName}. Can you provide a quote?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  // Build searchable index - all services from all categories
  const allServicesFlat = servicesData.flatMap((cat) =>
    cat.items.map((item) => ({
      name: item,
      category: cat.category,
      icon: cat.icon,
      description: cat.description,
    }))
  );

  // Filter services based on search query or selected category
  const filteredServices = searchQuery
    ? allServicesFlat.filter((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : selectedCategory
      ? allServicesFlat.filter((service) => service.category === selectedCategory)
      : [];

  // Get unique categories for filter buttons
  const categories = servicesData.map((cat) => cat.category);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`home-page ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Theme Toggle Button */}
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Hero Section */}
      <section className="hero hero-minimal">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-content hero-content-centered">
          {/* Logo and Branding */}
          <div className="hero-logo-section">
            <Logo />
            <h1 className="hero-brand-title">KreataDesigns</h1>
          </div>

          {/* Search Bar */}
          <div className="home-search-container">
            <div className="home-search-input">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search services (logo, flyer, branding, web design, cybersecurity...)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedCategory(null);
                }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="search-clear">
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          {/* Service Category Buttons */}
          {!searchQuery && (
            <div className="category-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Display Services Grid (if search or category selected) */}
          {(searchQuery || selectedCategory) && (
            <>
              {filteredServices.length > 0 ? (
                <div className="home-services-grid">
                  {filteredServices.map((service, idx) => (
                    <div
                      key={idx}
                      className="home-service-card"
                      onClick={() => setSelectedService(service)}
                    >
                      <div className="home-service-icon">
                        <service.icon size={28} />
                      </div>
                      <h3>{service.name}</h3>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-search">
                  <p>No services match your search</p>
                  <button
                    className="btn btn-outline"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory(null);
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </>
          )}

          {/* Motorbike Delivery Section */}
          <div className="delivery-section">
            <MotorbikeDelivery />
            <p className="delivery-text">Order Deliveries {businessInfo.phone}</p>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedService(null)}
            >
              <FaTimes />
            </button>
            <div className="modal-icon">
              <selectedService.icon size={40} />
            </div>
            <h3>{selectedService.name}</h3>
            <p className="modal-category">{selectedService.category}</p>
            <p className="modal-description">
              {selectedService.description || `Get professional ${selectedService.name.toLowerCase()} from our experienced team. We deliver high-quality results tailored to your needs.`}
            </p>
            <div className="modal-actions">
              <a
                href={getWhatsAppLink(selectedService.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaWhatsapp /> Get a Quote
              </a>
              <button
                className="btn btn-outline"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Why us preview */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Why Choose Kreata Designs</h2>
        </div>
        <div className="why-us-grid">
          {whyUsPoints.slice(0, 3).map((point) => (
            <div className="why-us-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/why-us" className="btn btn-outline">
            More Reasons to Choose Us
          </Link>
        </div>
      </section>

      {/* Testimonials preview */}
      {testimonials.length > 0 && (
        <section className="section">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.id}>
                <div className="testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p>"{t.message}"</p>
                <strong>{t.name}</strong>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/testimonials" className="btn btn-outline">
              Read More Reviews
            </Link>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="cta-banner">
        <h2>Visit Us Today on Jogoo Road</h2>
        <p>Walk in, call, or message us on WhatsApp — we're ready to help with your design needs.</p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;