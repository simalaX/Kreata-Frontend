import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaWhatsapp } from 'react-icons/fa';
import MotorbikeDelivery from '../components/MotorbikeDelivery';
import servicesData from '../data/servicesData';
import { businessInfo, whyUsPoints } from '../data/siteData';
import { getTestimonials } from '../api/endpoints';

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);

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
  }, []);

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-content">
          <span className="hero-eyebrow">Jogoo Road, Nairobi</span>
          <h1>Everything You Need, All Under One Roof</h1>
          <p>
            Printing, photocopying, government services, education support, graphic design and
            more — Kreata Designs is Nairobi's one-stop cyber café for individuals and businesses.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">
              Explore Our Services <FaArrowRight />
            </Link>
            <a
              href={businessInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section">
        <div className="section-header">
          <h2>What We Offer</h2>
          <p>From everyday printing to government portals, we've got it covered.</p>
        </div>
        <div className="services-preview-grid">
          {servicesData.map((cat) => (
            <div className="service-preview-card" key={cat.category}>
              <div className="service-preview-icon">
                <cat.icon size={26} />
              </div>
              <h3>{cat.category}</h3>
              <p>
                {cat.items.slice(0, 3).join(', ')}
                {cat.items.length > 3 ? ', and more' : ''}
              </p>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </section>

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
        <p>Walk in, call, or message us on WhatsApp — we're ready to help.</p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>

        {/* Animated Motorbike Delivery */}
        <MotorbikeDelivery />
      </section>
    </div>
  );
};

export default Home;