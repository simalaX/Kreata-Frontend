import React from 'react';
import { Helmet } from 'react-helmet-async';
import servicesData from '../data/servicesData';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const Services = () => {
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

      <div className="page-container services-page" style={{ minHeight: '100vh', paddingTop: '100px' }}>
        <div className="page-header" style={{ marginBottom: '48px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Services</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
            Kreata Designs offers a complete range of document, government, education, business,
            design, and technical services — everything you need in one convenient location on
            Jogoo Road.
          </p>
        </div>

        <div className="services-list" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          {servicesData && servicesData.map((cat) => (
            <div
              className="service-category-card"
              key={cat.category}
              id={slugify(cat.category)}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '32px',
                marginBottom: '32px',
              }}
            >
              <div className="service-category-header" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <cat.icon size={28} color="var(--accent-color)" />
                <div>
                  <h2 style={{ fontSize: '1.5rem', margin: '0', color: 'var(--text-primary)' }}>{cat.category}</h2>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>
                    {cat.description}
                  </p>
                </div>
              </div>
              <ul className="service-items-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px 24px', listStyle: 'none', padding: '0', margin: '0' }}>
                {cat.items && cat.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      paddingLeft: '18px',
                      position: 'relative',
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '10px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent-color)',
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-cta" style={{ background: 'var(--bg-secondary)', textAlign: 'center', padding: '48px 24px', borderRadius: '12px', margin: '48px 0', maxWidth: '1180px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '10px', color: 'var(--text-primary)' }}>Don't See What You Need?</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Get in touch — chances are we can still help.</p>
        </div>
      </div>
    </>
  );
};

export default Services;