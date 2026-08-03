import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { FaShieldAlt, FaPalette, FaCamera, FaWhatsapp, FaPhone, FaMoon, FaSun } from 'react-icons/fa';
import { businessInfo } from '../data/siteData';
import Logo from '../components/Logo';

const Services = () => {
  // Define services categories first
  const servicesCategories = [
    {
      name: 'Cyber Services',
      icon: FaShieldAlt,
      description: 'Internet, computer, IT support, and government services',
      subcategories: [
        {
          title: 'Printing, Scanning & Document Prep',
          services: [
            'Bulk Printing – From KSh 5',
            'Color Printing – From KSh 10',
            'High-Speed Scanning – JPG & PDF formats',
            'PDF Organization & Formatting',
            'Lamination – Cold & Warm',
            'Binding – Spiral & Tape',
            'Professional Passport Photos – Ready in 5 minutes',
          ],
        },
        {
          title: 'E-Government & Online Support',
          services: [
            'E-Government & Online Portal Support',
            'Job Application Packages & Revamped CVs',
            'eCitizen applications',
            'KRA PIN registration',
            'KRA tax returns (iTax)',
          ],
        },
        {
          title: 'Educational & CBC Materials',
          services: [
            'Revision Materials – KASNEB, KJSEA, KPSEA & Projects',
            'CBC Stationery & Supplies',
            'HELB applications',
            'KUCCPS applications',
            'University and college admissions',
            'School portal access',
            'Assignment typing',
            'Exam registration',
            'Certificate printing',
          ],
        },
        {
          title: 'Digital & Office Solutions',
          services: [
            'Excel Data Entry & Word Document Formatting',
            'Computer Training & Hands-on Experience',
            'PDF conversion (Word ↔ PDF)',
            'Online form filling',
            'Visa application assistance',
            'Scholarship applications',
            'Typesetting',
            'Document editing and formatting',
            'CV and cover letter writing',
            'File storage on flash drives or cloud',
          ],
        },
        {
          title: 'Tech & Hardware Repairs',
          services: [
            'Phone Repair & Hardware Troubleshooting',
            'Software installation',
            'Phone flashing',
            'Phone unlocking',
            'Computer formatting',
            'Virus removal',
            'Data recovery',
            'Computer troubleshooting',
            'Online research',
            'File downloads/uploads',
            'Social media accounts management',
          ],
        },
      ],
    },
    {
      name: 'Design',
      icon: FaPalette,
      description: 'Graphic design, branding, and creative services',
      subcategories: [
        {
          title: 'Graphic Design & Marketing',
          services: [
            'Logo design',
            'Posters',
            'Flyers',
            'Banners',
            'Business cards',
            'Wedding cards',
            'Funeral programmes',
            'Certificates',
            'Calendars',
            'Social media posters',
          ],
        },
        {
          title: 'Branding & Identity',
          services: [
            'Company profile design',
            'Branding materials',
            'Brand identity design',
          ],
        },
        {
          title: 'Business & Document Services',
          services: [
            'Business name registration',
            'Company registration',
            'Business permit applications',
            'Invoice and receipt printing',
            'Bulk printing',
            'Exam and project printing',
            'Stationery sales (pens, papers, envelopes, files, etc.)',
          ],
        },
      ],
    },
    {
      name: 'Photography',
      icon: FaCamera,
      description: 'Photography services and photo printing',
      subcategories: [
        {
          title: 'Photography Services',
          services: [
            'Passport-size photography',
            'Passport photo printing',
            'ID photo capture',
            'Professional headshots',
            'Event photography',
            'Product photography',
          ],
        },
        {
          title: 'Document & Printing Services',
          services: [
            'Document translation',
            'Secretarial services',
            'Bulk printing',
            'Exam and project printing',
            'Certificate printing',
            'File storage on flash drives or cloud',
          ],
        },
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  // Check for category param in URL on load
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');

    if (categoryParam) {
      const decodedCategory = decodeURIComponent(categoryParam);
      const categoryIndex = servicesCategories.findIndex(cat => cat.name === decodedCategory);
      if (categoryIndex !== -1) {
        setExpandedIndex(categoryIndex);
        // Scroll to that category
        setTimeout(() => {
          const categoryElement = document.querySelector(`[data-category="${categoryIndex}"]`);
          if (categoryElement) {
            categoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [location.search]);

  return (
    <>
      <Helmet>
        <title>Services | Kreata Designs - Graphic Design & Printing Nairobi</title>
        <meta name="description" content="Explore Kreata Designs' full range of services in Nairobi." />
        <meta property="og:title" content="Services | Kreata Designs" />
        <link rel="canonical" href="https://www.kreatadesigns.com/services" />
      </Helmet>

      {/* Theme Toggle Button */}
      <button
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-color)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 1000,
          fontSize: '20px',
          color: 'var(--button-text)',
        }}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Navbar */}
      <nav style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        borderBottom: '1px solid var(--border-color)',
      }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <Logo size={40} />
            <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Kreata Designs</span>
          </Link>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '24px' }}>
            <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}>Home</Link>
            <span style={{ color: 'var(--accent-color)', fontWeight: '700' }}>Services</span>
            <Link to="/gallery" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}>Gallery</Link>
            <Link to="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600' }}>Contact</Link>
          </div>
        </div>
      </nav>

      <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '60px', paddingBottom: '60px' }}>
        {/* Header */}
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Our Services
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
            Kreata Designs offers a complete range of document, government, education, business, design, and technical services — everything you need in one convenient location on Jogoo Road.
          </p>
        </div>

        {/* Services */}
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
          {servicesCategories.map((category, catIndex) => {
            const Icon = category.icon;
            const isExpanded = expandedIndex === catIndex;

            return (
              <div
                key={catIndex}
                data-category={catIndex}
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
                  onClick={() => setExpandedIndex(isExpanded ? null : catIndex)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid var(--border-color)',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <div style={{ color: 'var(--accent-color)', fontSize: '28px' }}>
                    <Icon size={28} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '1.5rem', margin: '0 0 4px 0', color: 'var(--text-primary)' }}>
                      {category.name}
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {category.description}
                    </p>
                  </div>
                  <div style={{ color: 'var(--accent-color)', fontSize: '20px' }}>
                    {isExpanded ? '▼' : '▶'}
                  </div>
                </div>

                {/* Subcategories */}
                {isExpanded && (
                  <div style={{ marginTop: '24px' }}>
                    {category.subcategories.map((subcat, subcatIndex) => (
                      <div key={subcatIndex} style={{ marginBottom: '24px' }}>
                        <h3 style={{
                          fontSize: '1.1rem',
                          color: 'var(--accent-color)',
                          marginBottom: '12px',
                          marginTop: '0',
                          fontWeight: '600',
                        }}>
                          {subcat.title}
                        </h3>
                        <ul style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                          gap: '10px 24px',
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                        }}>
                          {subcat.services.map((service, serviceIndex) => (
                            <li
                              key={serviceIndex}
                              onClick={() => setSelectedService({ service, category: subcat.title })}
                              style={{
                                paddingLeft: '18px',
                                position: 'relative',
                                color: 'var(--text-secondary)',
                                fontSize: '0.92rem',
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
                              <span style={{
                                position: 'absolute',
                                left: 6,
                                top: '12px',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--accent-color)',
                              }} />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal */}
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
              }}
            >
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                {selectedService.service}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent-color)', marginBottom: '20px' }}>
                {selectedService.category}
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                Thank you for your interest. Get in touch with us through any method below.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <a
                  href={businessInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 20px',
                    backgroundColor: '#25D366',
                    color: 'white',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                  }}
                >
                  <FaWhatsapp /> Message on WhatsApp
                </a>
                <a
                  href={businessInfo.phoneLink}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 20px',
                    backgroundColor: 'var(--accent-color)',
                    color: 'var(--button-text)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                  }}
                >
                  <FaPhone /> Call Us: {businessInfo.phone}
                </a>
                <Link
                  to="/contact"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 20px',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    border: '2px solid var(--border-color)',
                  }}
                >
                  Email Us
                </Link>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
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
              Get in touch — we're here to help.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-block',
                padding: '13px 26px',
                backgroundColor: 'var(--accent-color)',
                color: 'var(--button-text)',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;