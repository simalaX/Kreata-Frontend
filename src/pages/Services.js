import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import servicesData from '../data/servicesData';
import { businessInfo } from '../data/siteData';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const Services = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                <div style={{ color: 'var(--accent-color)', fontSize: '28px', flexShrink: 0 }}>
                  <cat.icon size={28} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', margin: '0 0 6px 0', color: 'var(--text-primary)' }}>
                    {cat.category}
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Services List */}
              <ul style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '10px 24px',
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                {cat.items && cat.items.length > 0 && cat.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    style={{
                      paddingLeft: '18px',
                      position: 'relative',
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      lineHeight: '1.5',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '8px',
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