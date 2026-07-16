import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaWhatsapp, FaTimes, FaSearch } from 'react-icons/fa';
import MotorbikeDelivery from '../components/MotorbikeDelivery';
import servicesData from '../data/servicesData';
import { businessInfo, whyUsPoints } from '../data/siteData';
import { getTestimonials } from '../api/endpoints';

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);

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

  // Extract design services (Graphic Design & Marketing)
  const designServices = servicesData.find((s) => s.category === 'Graphic Design & Marketing');

  // Filter design services by search query
  const filteredDesignServices = designServices
    ? designServices.items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  // Other prominent services (photography-related)
  const photoServices = servicesData.find((s) => s.category === 'Document Services');
  const photoItems = photoServices
    ? photoServices.items.filter((item) =>
      item.toLowerCase().includes('photo') || item.toLowerCase().includes('passport')
    )
    : [];

  // Less prominent services
  const otherServices = servicesData.filter(
    (s) =>
      s.category !== 'Graphic Design & Marketing' &&
      s.category !== 'Document Services' &&
      s.category !== 'Mobile & Technical Services'
  );

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-content">
          <span className="hero-eyebrow">Jogoo Road, Nairobi</span>
          <h1>Professional Design & Graphics Services</h1>
          <p>
            Premium branding, graphic design, and marketing materials for individuals and businesses.
            Quality printing and digital services all in one place.
          </p>
          <div className="hero-actions">
            <a
              href={businessInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
            <Link to="/gallery" className="btn btn-outline">
              View Our Work <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Design Services */}
      <section className="section design-services-section">
        <div className="section-header">
          <h2>Design & Marketing Services</h2>
          <p>Search for the design service you need</p>
        </div>

        {/* Search bar */}
        <div className="design-search-container">
          <div className="design-search-input">
            <FaSearch />
            <input
              type="text"
              placeholder="Search by keyword (e.g., logo, flyer, banner, business card)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="search-clear">
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Design Services Grid */}
        {filteredDesignServices.length > 0 ? (
          <div className="design-services-grid">
            {filteredDesignServices.map((service, idx) => (
              <div
                key={idx}
                className="design-service-card"
                onClick={() => setSelectedService(service)}
              >
                <div className="design-service-icon">
                  <FaPalette size={28} />
                </div>
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="empty-search">
            <p>No services match "{searchQuery}". Try a different keyword.</p>
            <button
              className="btn btn-outline"
              onClick={() => setSearchQuery('')}
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="design-services-grid">
            {designServices.items.map((service, idx) => (
              <div
                key={idx}
                className="design-service-card"
                onClick={() => setSelectedService(service)}
              >
                <div className="design-service-icon">
                  <FaPalette size={28} />
                </div>
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        )}

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
                <FaPalette size={40} />
              </div>
              <h3>{selectedService}</h3>
              <p>
                Get professional {selectedService.toLowerCase()} from our experienced team. We deliver
                high-quality results tailored to your needs.
              </p>
              <div className="modal-actions">
                <a
                  href={businessInfo.whatsappLink}
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
      </section>

      {/* Photography Services */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Photography Services</h2>
          <p>Professional photo capture and printing</p>
        </div>
        <div className="services-preview-grid">
          {photoItems.map((item, idx) => (
            <div className="service-preview-card" key={idx}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* All Other Services */}
      <section className="section">
        <div className="section-header">
          <h2>Complete Service Directory</h2>
          <p>Everything else we offer</p>
        </div>
        <div className="services-preview-grid">
          {otherServices.map((cat) => (
            <div className="service-preview-card" key={cat.category}>
              <div className="service-preview-icon">
                <cat.icon size={26} />
              </div>
              <h3>{cat.category}</h3>
              <p>
                {cat.items.slice(0, 2).join(', ')}
                {cat.items.length > 2 ? ', and more' : ''}
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