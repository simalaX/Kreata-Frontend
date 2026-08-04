import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaWhatsapp, FaTimes, FaSearch, FaMoon, FaSun, FaChevronDown, FaShieldAlt, FaPalette, FaCamera } from 'react-icons/fa';
import Logo from '../components/Logo';
import MotorbikeDelivery from '../components/MotorbikeDelivery';
import servicesData from '../data/servicesData';
import { businessInfo, whyUsPoints } from '../data/siteData';
import { getTestimonials } from '../api/endpoints';

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [viewingCategory, setViewingCategory] = useState(null);
  const [expandedSubcategories, setExpandedSubcategories] = useState({});

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

    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Services Data
  const serviceCategories = {
    'Cyber Services': {
      icon: FaShieldAlt,
      description: 'Internet, computer, IT support, and government services',
      subcategories: [
        {
          title: 'Printing, Scanning & Document Prep',
          services: ['Bulk Printing – From KSh 5', 'Color Printing – From KSh 10', 'High-Speed Scanning – JPG & PDF formats', 'PDF Organization & Formatting', 'Lamination – Cold & Warm', 'Binding – Spiral & Tape', 'Professional Passport Photos – Ready in 5 minutes'],
        },
        {
          title: 'E-Government & Online Support',
          services: ['E-Government & Online Portal Support', 'Job Application Packages & Revamped CVs', 'eCitizen applications', 'KRA PIN registration', 'KRA tax returns (iTax)'],
        },
        {
          title: 'Educational & CBC Materials',
          services: ['Revision Materials – KASNEB, KJSEA, KPSEA & Projects', 'CBC Stationery & Supplies', 'HELB applications', 'KUCCPS applications', 'University and college admissions'],
        },
        {
          title: 'Digital & Office Solutions',
          services: ['Excel Data Entry & Word Document Formatting', 'Computer Training & Hands-on Experience', 'PDF conversion (Word ↔ PDF)', 'Online form filling', 'Visa application assistance'],
        },
        {
          title: 'Tech & Hardware Repairs',
          services: ['Phone Repair & Hardware Troubleshooting', 'Software installation', 'Phone flashing', 'Phone unlocking', 'Computer formatting', 'Virus removal', 'Data recovery'],
        },
      ],
    },
    'Design': {
      icon: FaPalette,
      description: 'Graphic design, branding, and creative services',
      subcategories: [
        {
          title: 'Graphic Design & Marketing',
          services: ['Logo design', 'Posters', 'Flyers', 'Banners', 'Business cards', 'Wedding cards', 'Funeral programmes', 'Certificates', 'Calendars', 'Social media posters'],
        },
        {
          title: 'Branding & Identity',
          services: ['Company profile design', 'Branding materials', 'Brand identity design'],
        },
        {
          title: 'Business & Document Services',
          services: ['Business name registration', 'Company registration', 'Business permit applications', 'Invoice and receipt printing', 'Bulk printing', 'Exam and project printing'],
        },
      ],
    },
    'Photography': {
      icon: FaCamera,
      description: 'Photography services and photo printing',
      subcategories: [
        {
          title: 'Photography Services',
          services: ['Passport-size photography', 'Passport photo printing', 'ID photo capture', 'Professional headshots', 'Event photography', 'Product photography'],
        },
        {
          title: 'Document & Printing Services',
          services: ['Document translation', 'Secretarial services', 'Bulk printing', 'Exam and project printing', 'Certificate printing', 'File storage on flash drives or cloud'],
        },
      ],
    },
  };

  const categories = Object.keys(serviceCategories);

  const handleCategoryClick = (category) => {
    setViewingCategory(category);
    setExpandedSubcategories({});
  };

  const toggleSubcategory = (subcategoryTitle) => {
    setExpandedSubcategories(prev => ({
      ...prev,
      [subcategoryTitle]: !prev[subcategoryTitle]
    }));
  };

  const getWhatsAppLink = (serviceName) => {
    const phoneNumber = businessInfo.whatsappLink.split('/').pop();
    const message = `Hi, I'm interested in ${serviceName}. Can you provide a quote?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const allServicesFlat = servicesData.flatMap((cat) =>
    cat.items.map((item) => ({
      name: item,
      category: cat.category,
      icon: cat.icon,
      description: cat.description,
    }))
  );

  const filteredServices = searchQuery
    ? allServicesFlat.filter((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  // Service Detail View (Full Screen)
  if (viewingCategory) {
    const category = serviceCategories[viewingCategory];
    const Icon = category.icon;

    return (
      <div style={{ paddingTop: '80px', paddingBottom: '60px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
        <button
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1000,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-color)',
            color: 'var(--button-text)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
          }}
          onClick={toggleTheme}
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 24px' }}>
          <div style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '16px' }}>
            <Icon />
          </div>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '16px', color: 'var(--text-primary)' }}>{viewingCategory}</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
            {category.description}
          </p>
        </div>

        {/* Services */}
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
          {category.subcategories.map((subcat, idx) => {
            const isExpanded = expandedSubcategories[subcat.title];
            return (
              <div key={idx} style={{ marginBottom: '24px' }}>
                {/* Dropdown Header */}
                <div
                  onClick={() => toggleSubcategory(subcat.title)}
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--accent-color)',
                    marginBottom: isExpanded ? '20px' : '0',
                    borderBottom: '2px solid var(--accent-color)',
                    paddingBottom: '10px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    userSelect: 'none',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <span>{subcat.title}</span>
                  <span style={{ fontSize: '1.2rem' }}>{isExpanded ? '▼' : '▶'}</span>
                </div>

                {/* Services Grid (Collapsed by default) */}
                {isExpanded && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginTop: '20px' }}>
                    {subcat.services.map((service, sidx) => (
                      <div
                        key={sidx}
                        onClick={() => setSelectedService({ name: service, category: subcat.title })}
                        style={{
                          padding: '16px',
                          backgroundColor: 'var(--card-bg)',
                          border: '1px solid var(--border-color)',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          color: 'var(--text-secondary)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 192, 0, 0.08)';
                          e.currentTarget.style.borderColor = 'var(--accent-color)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.color = 'var(--accent-color)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--card-bg)';
                          e.currentTarget.style.borderColor = 'var(--border-color)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ maxWidth: '1180px', margin: '60px auto 0', padding: '0 24px' }}>
          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '48px 32px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '12px', color: 'var(--text-primary)' }}>Get Started Today</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>
              Contact us for any of our {viewingCategory.toLowerCase()} services
            </p>
            <button
              onClick={() => setViewingCategory(null)}
              style={{
                display: 'inline-block',
                padding: '13px 26px',
                backgroundColor: 'var(--accent-color)',
                color: 'var(--button-text)',
                borderRadius: '6px',
                fontWeight: '700',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                marginRight: '12px'
              }}
            >
              Back Home
            </button>
            <a href={businessInfo.whatsappLink} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              padding: '13px 26px',
              backgroundColor: '#25D366',
              color: 'white',
              borderRadius: '6px',
              fontWeight: '700',
              textDecoration: 'none'
            }}>
              <FaWhatsapp style={{ marginRight: '8px' }} /> WhatsApp
            </a>
          </div>
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div onClick={() => setSelectedService(null)} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1500,
            padding: '24px',
          }}>
            <div onClick={(e) => e.stopPropagation()} style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: '12px',
              padding: '40px',
              maxWidth: '500px',
              width: '100%'
            }}>
              <h2 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>{selectedService.name}</h2>
              <p style={{ color: 'var(--accent-color)', marginBottom: '20px', fontWeight: '600' }}>{selectedService.category}</p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Thank you for your interest. Get in touch with us:</p>
              <a href={getWhatsAppLink(selectedService.name)} target="_blank" rel="noopener noreferrer" style={{
                display: 'block',
                padding: '12px',
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: '6px',
                textDecoration: 'none',
                textAlign: 'center',
                fontWeight: '600',
                marginBottom: '10px'
              }}>
                <FaWhatsapp style={{ marginRight: '8px' }} /> Message on WhatsApp
              </a>
              <a href={businessInfo.phoneLink} style={{
                display: 'block',
                padding: '12px',
                backgroundColor: 'var(--accent-color)',
                color: 'var(--button-text)',
                borderRadius: '6px',
                textDecoration: 'none',
                textAlign: 'center',
                fontWeight: '600',
                marginBottom: '10px'
              }}>
                Call Us
              </a>
              <button onClick={() => setSelectedService(null)} style={{
                display: 'block',
                width: '100%',
                padding: '12px',
                backgroundColor: 'var(--bg-secondary)',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                color: 'var(--text-primary)'
              }}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Home Page (Default View)
  return (
    <div className={`home-page ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
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
          {/* Brand Logo */}
          <div className="hero-logo-container" style={{ marginBottom: '16px' }}>
            <Logo size={90} />
          </div>

          {/* Brand Title */}
          <h1 className="hero-brand-title" style={{ letterSpacing: '0.03em', marginTop: '0', marginBottom: '32px', fontSize: '3.2rem' }}>Kreata Designs</h1>

          {/* Search Bar */}
          <div className="home-search-container" style={{ marginTop: '0px', marginBottom: '28px', maxWidth: '600px', margin: '0 auto 28px' }}>
            <div className="home-search-input" style={{ padding: '14px 20px', fontSize: '1.05rem', minHeight: '56px' }}>
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontSize: '1.05rem' }}
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
            <div className="category-dropdowns" style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="dropdown-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    border: '2px solid var(--accent-color)',
                    borderRadius: '25px',
                    backgroundColor: 'transparent',
                    color: 'var(--accent-color)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                    e.currentTarget.style.color = 'var(--button-text)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--accent-color)';
                  }}
                >
                  {category}
                  <FaChevronDown size={12} />
                </button>
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
                  onClick={() => setSelectedService({ name: service.name, category: service.category })}
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

      {/* Why us preview */}
      <section className="section section-alt" style={{ marginTop: '40px' }}>
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