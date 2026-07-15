import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { getTestimonials } from '../api/endpoints';

// Default testimonials — displayed if API returns empty or fails
const defaultTestimonials = [
  {
    id: 1,
    name: 'Sarah Wanjiru',
    message: 'Kreata Designs is my go-to for everything. From printing my documents to getting help with eCitizen, they\'ve never let me down. Professional and quick service!',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Kipchoge',
    message: 'I needed graphic design work for my business flyers and they delivered amazing results within 24 hours. Best cyber café on Jogoo Road, hands down.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amina Hassan',
    message: 'The team helped me with my HELB application and tax filing. They explain everything clearly and make government services actually accessible. Highly recommend!',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Ochieng',
    message: 'Quality printing, fast photocopying, and they even helped set up my business email. Kreata Designs is truly a one-stop shop. Worth every shilling!',
    rating: 5,
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await getTestimonials(true);
        if (res.data && res.data.length > 0) {
          setTestimonials(res.data);
        }
      } catch (err) {
        // Keep default testimonials on error
        setTestimonials(defaultTestimonials);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>What Our Clients Say</h1>
        <p>Real feedback from people and businesses we've served on Jogoo Road and beyond.</p>
      </div>

      {loading && <p className="loading-text">Loading testimonials...</p>}

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
    </div>
  );
};

export default Testimonials;