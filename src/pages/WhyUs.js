import React from 'react';
import { Link } from 'react-router-dom';
import { whyUsPoints } from '../data/siteData';

const WhyUs = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Why Choose Kreata Designs</h1>
        <p>
          We've built Kreata Designs around one idea: make it easy for people in Nairobi to get
          things done.
        </p>
      </div>
      <div className="why-us-grid why-us-grid-full">
        {whyUsPoints.map((point) => (
          <div className="why-us-card" key={point.title}>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
      <div className="services-cta">
        <h2>Ready to Get Started?</h2>
        <p>Visit us on Jogoo Road or reach out anytime.</p>
        <Link to="/contact" className="btn btn-primary">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default WhyUs;
