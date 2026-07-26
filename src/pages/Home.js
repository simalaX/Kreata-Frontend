import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaWhatsapp, FaTimes, FaSearch, FaMoon, FaSun } from 'react-icons/fa';
import Logo from '../components/Logo';
import MotorbikeDelivery from '../components/MotorbikeDelivery';
import { businessInfo, whyUsPoints } from '../data/siteData';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  const categories = [
    { name: 'Cyber Services', description: 'Internet, computer, IT support' },
    { name: 'Design', description: 'Graphic design, branding, creative services' },
    { name: 'Photography', description: 'Photography services and photo printing' }
  ];

  const getWhatsAppLink = (serviceName) => {
    const phoneNumber = businessInfo.whatsappLink.split('/').pop();
    const message = `Hi, I'm interested in ${serviceName}. Can you provide a quote?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

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
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
        }}
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '76px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '40px 24px', maxWidth: '900px', margin: '0 auto', gap: '0px' }}>
          {/* Logo and Title */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '40px', animation: 'none' }}>
            <Logo />
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, letterSpacing: '-0.02em', margin: 0, color: 'var(--accent-color)', letterSpacing: '0.15em' }}>
              Kreata Designs
            </h1>
          </div>

          {/* Search Bar */}
          <div style={{ marginTop: '10px', marginBottom: '0px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              background: 'var(--input-bg)',
              border: '2px solid var(--accent-color)',
              borderRadius: '50px',
              padding: '14px 24px',
              width: '100%',
              maxWidth: '700px',
              margin: '0 auto',
              transition: 'all 0.3s ease',
            }}>
              <FaSearch style={{ color: 'var(--accent-color)' }} />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedCategory(null);
                }}
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-tertiary)',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          {/* Category Buttons */}
          {!searchQuery && (
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', width: '100%', marginTop: '45px' }}>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  style={{
                    padding: '12px 28px',
                    borderRadius: '50px',
                    border: '2px solid var(--accent-color)',
                    background: selectedCategory === cat.name ? 'var(--accent-color)' : 'transparent',
                    color: selectedCategory === cat.name ? 'var(--button-text)' : 'var(--accent-color)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}

          {/* Motorbike Delivery */}
          <div style={{ marginTop: '60px' }}>
            <MotorbikeDelivery />
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-color)', marginTop: '20px' }}>
              Order Deliveries {businessInfo.phone}
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section style={{ padding: '72px 24px', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', marginBottom: '10px', color: 'var(--text-primary)' }}>
              Why Choose Kreata Designs
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '22px',
          }}>
            {whyUsPoints.slice(0, 3).map((point, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  borderLeft: '4px solid var(--accent-color)',
                  borderRadius: '12px',
                  padding: '26px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                }}
              >
                <h3 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--accent-color)', margin: 0 }}>
                  {point.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0 }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: 'var(--bg-primary)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
            Visit Us Today on Jogoo Road
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '26px' }}>
            Walk in, call, or message us on WhatsApp — we're ready to help with your design needs.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 26px',
                backgroundColor: 'var(--accent-color)',
                color: 'var(--button-text)',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              Get in Touch <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;