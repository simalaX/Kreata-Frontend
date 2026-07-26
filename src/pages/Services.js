import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaChevronDown, FaChevronUp, FaPhone, FaDownload } from 'react-icons/fa';
import servicesData from '../data/servicesData';
import { businessInfo } from '../data/siteData';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const Services = () => {
  const [mounted, setMounted] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const handleServiceClick = (service, subcategoryName) => {
    setSelectedService({ service, subcategoryName });
  };

  if (!mounted || !servicesData || servicesData.length === 0) {
    return (
      <div style={{ minHeight: '100vh', padding: '100px 24px', textAlign: 'center', backgroundColor: 'var(--bg-primary)' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Loading services...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Services | Kreata Designs - Graphic Design & Printing Nairobi</title>
        <meta
          name="description"
          content="Explore Kreata Designs' full range of services: graphic design, printing, government services (eCitizen, KRA, NTSA, HELB), photocopying, and more in Nairobi."
        />
        <meta
          name="keywords"
          content="graphic design services, printing services, government services, logo design, flyer design, business cards, eCitizen services, Nairobi"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kreatadesigns.com/services" />
        <meta property="og:title" content="Services | Kreata Designs" />
        <meta
          property="og:description"
          content="Explore our full range of graphic design, printing, and government services in Nairobi."
        />
        <meta property="og:image" content="https://www.kreatadesigns.com/kreata.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.kreatadesigns.com/services" />
        <meta property="twitter:title" content="Services | Kreata Designs" />
        <meta
          property="twitter:description"
          content="Graphic design, printing, government services, and more from Kreata Designs in Nairobi."
        />
        <meta property="twitter:image" content="https://www.kreatadesigns.com/kreata.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.kreatadesigns.com/services" />
      </Helmet>

      <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '60px' }}>
        {/* Page Header */}
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Our Services
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
            Kreata Designs offers a complete range of document, government, education, business,
            design, and technical services — everything you need in one convenient location on
            Jogoo Road.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
          {servicesData.map((cat, catIdx) => (
            <div
              key={catIdx}
              id={slugify(cat.category)}
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '32px',
                marginBottom: '32px',
              }}
            >
              {/* Category Header */}
              <div
                onClick={() => toggleCategory(cat.category)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '24px',
                  cursor: 'pointer',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--border-color)',
                  userSelect: 'none',
                }}
              >
                <div style={{ color: 'var(--accent-color)', fontSize: '28px', flexShrink: 0 }}>
                  <cat.icon size={28} />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '1.5rem', margin: '0 0 6px 0', color: 'var(--text-primary)' }}>
                    {cat.category}
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {cat.description}
                  </p>
                </div>
                <div style={{ color: 'var(--accent-color)', fontSize: '20px', flexShrink: 0 }}>
                  {expandedCategories[cat.category] ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {/* Subcategories */}
              {expandedCategories[cat.category] && (
                <div>
                  {cat.subcategories && cat.subcategories.map((subcat, subcatIdx) => (
                    <div key={subcatIdx} style={{ marginBottom: '24px' }}>
                      {/* Subcategory Title */}
                      <h3 style={{
                        fontSize: '1.1rem',
                        color: 'var(--accent-color)',
                        marginBottom: '12px',
                        marginTop: '0',
                        fontWeight: '600',
                      }}>
                        {subcat.name}
                      </h3>

                      {/* Services List */}
                      <ul style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '10px 24px',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                      }}>
                        {subcat.items && subcat.items.length > 0 && subcat.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            onClick={() => handleServiceClick(item, subcat.name)}
                            style={{
                              paddingLeft: '18px',
                              position: 'relative',
                              color: 'var(--text-secondary)',
                              fontSize: '0.92rem',
                              lineHeight: '1.5',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              padding: '8px 12px 8px 18px',
                              borderRadius: '6px',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255, 192, 0, 0.08)';
                              e.currentTarget.style.color = 'var(--accent-color)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'var(--text-secondary)';
                            }}
                          >
                            <span
                              style={{
                                position: 'absolute',
                                left: 6,
                                top: '14px',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--accent-color)',
                              }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div
            onClick={() => setSelectedService(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '24px',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'var(--card-bg)',
                borderRadius: '12px',
                padding: '32px',
                maxWidth: '500px',
                width: '100%',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              }}
            >
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                {selectedService.service}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent-color)', marginBottom: '20px', fontWeight: '600' }}>
                {selectedService.subcategoryName}
              </p>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                Thank you for your interest in this service. Get in touch with us through any of the methods below to learn more and get started.
              </p>

              {/* Contact Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <a
                  href={businessInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '13px 20px',
                    backgroundColor: '#25D366',
                    color: 'white',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FaWhatsapp size={18} /> Message on WhatsApp
                </a>
                <a
                  href={businessInfo.phoneLink}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '13px 20px',
                    backgroundColor: 'var(--accent-color)',
                    color: 'var(--button-text)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FaPhone size={16} /> Call Us: {businessInfo.phone}
                </a>
                <Link
                  to="/contact"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '13px 20px',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    border: '2px solid var(--border-color)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-color)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  Email Us
                </Link>
              </div>

              {/* Download Option */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                <button
                  onClick={() => {
                    const element = document.createElement('a');
                    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(selectedService.service));
                    element.setAttribute('download', `${selectedService.service}.txt`);
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'transparent',
                    color: 'var(--accent-color)',
                    border: '2px solid var(--accent-color)',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 192, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <FaDownload size={14} /> Download Service Info
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                style={{
                  marginTop: '16px',
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--border-color)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div style={{ maxWidth: '1180px', margin: '60px auto 0', padding: '0 24px' }}>
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: '48px 32px',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
              Don't See What You Need?
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>
              Get in touch — chances are we can still help.
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
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Get in Touch
              </Link>
              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  backgroundColor: 'transparent',
                  color: 'var(--accent-color)',
                  border: '2px solid var(--accent-color)',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <FaWhatsapp size={18} /> Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;