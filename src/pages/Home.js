import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaWhatsapp, FaTimes, FaSearch, FaMoon, FaSun, FaChevronDown } from 'react-icons/fa';
import MotorbikeDelivery from '../components/MotorbikeDelivery';
import servicesData from '../data/servicesData';
import { businessInfo, whyUsPoints } from '../data/siteData';
import { getTestimonials } from '../api/endpoints';

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
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

  // Filter services based on search query
  const filteredServices = searchQuery
    ? allServicesFlat.filter((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  // Get services for a specific category dropdown
  const getServicesByCategory = (category) => {
    return allServicesFlat.filter((service) => service.category === category);
  };

  // Get unique categories
  const categories = servicesData.map((cat) => cat.category);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setOpenDropdown(null);
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
        <div className="hero-content hero-content-centered" style={{ gap: '0px' }}>
          {/* Brand Title Only (Logo Removed) */}
          <h1 className="hero-brand-title" style={{ letterSpacing: '0.03em', marginTop: '0' }}>Kreata Designs</h1>

          {/* Search Bar */}
          <div className="home-search-container" style={{ marginTop: '30px', marginBottom: '0px' }}>
            <div className="home-search-input">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setOpenDropdown(null);
                }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="search-clear">
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          {/* Service Category Dropdowns */}
          {!searchQuery && (
            <div className="category-dropdowns" style={{ marginTop: '45px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {categories.map((category) => (
                <div key={category} style={{ position: 'relative' }}>
                  <button
                    className={`dropdown-btn ${openDropdown === category ? 'active' : ''}`}
                    onClick={() => setOpenDropdown(openDropdown === category ? null : category)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      border: '2px solid var(--accent-color)',
                      borderRadius: '25px',
                      backgroundColor: openDropdown === category ? 'var(--accent-color)' : 'transparent',
                      color: openDropdown === category ? 'var(--button-text)' : 'var(--accent-color)',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {category}
                    <FaChevronDown size={12} style={{
                      transform: openDropdown === category ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }} />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === category && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        marginTop: '8px',
                        backgroundColor: 'var(--card-bg)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        zIndex: 1000,
                        minWidth: '280px',
                        maxHeight: '400px',
                        overflowY: 'auto',
                      }}
                    >
                      {getServicesByCategory(category).map((service, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleServiceSelect(service)}
                          style={{
                            padding: '12px 16px',
                            borderBottom: idx < getServicesByCategory(category).length - 1 ? '1px solid var(--border-color)' : 'none',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s ease',
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 192, 0, 0.1)';
                            e.currentTarget.style.color = 'var(--accent-color)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                          }}
                        >
                          {service.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Search Results Grid */}
          {searchQuery && filteredServices.length > 0 && (
            <div className="home-services-grid" style={{ marginTop: '40px' }}>
              {filteredServices.map((service, idx) => (
                <div
                  key={idx}
                  className="home-service-card"
                  onClick={() => handleServiceSelect(service)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="home-service-icon">
                    <service.icon size={32} />
                  </div>
                  <h3>{service.name}</h3>
                </div>
              ))}
            </div>
          )}

          {/* Empty Search Message */}
          {searchQuery && filteredServices.length === 0 && (
            <div className="empty-search" style={{ marginTop: '40px' }}>
              <p>No services match your search</p>
              <button
                className="btn btn-outline"
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Motorbike Delivery Section */}
          <div className="delivery-section" style={{ marginTop: searchQuery ? '40px' : '60px' }}>
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