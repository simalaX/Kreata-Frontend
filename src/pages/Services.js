import React from 'react';
import servicesData from '../data/servicesData';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const Services = () => {
  return (
    <div className="page-container services-page">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>
          Kreata Designs offers a complete range of document, government, education, business,
          design, and technical services — everything you need in one convenient location on
          Jogoo Road.
        </p>
      </div>

      <div className="services-list">
        {servicesData.map((cat) => (
          <div className="service-category-card" key={cat.category} id={slugify(cat.category)}>
            <div className="service-category-header">
              <cat.icon size={28} />
              <h2>{cat.category}</h2>
            </div>
            <ul className="service-items-list">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <h2>Don't See What You Need?</h2>
        <p>Get in touch — chances are we can still help.</p>
      </div>
    </div>
  );
};

export default Services;