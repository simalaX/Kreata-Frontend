import React from 'react';
import { FaClock, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import CommentForm from '../components/CommentForm';
import { businessInfo } from '../data/siteData';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Get In Touch</h1>
        <p>Have a question, need a quote, or want to check on an order? Reach out anytime.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt size={22} />
            <div>
              <h4>Location</h4>
              <p>{businessInfo.address}</p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhoneAlt size={22} />
            <div>
              <h4>Call or WhatsApp</h4>
              <p>
                <a href={businessInfo.phoneLink}>{businessInfo.phone}</a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <FaClock size={22} />
            <div>
              <h4>Working Hours</h4>
              <p>{businessInfo.hours.online}</p>
              <p>{businessInfo.hours.inPerson}</p>
            </div>
          </div>
          <div className="contact-item">
            <FaWhatsapp size={22} />
            <div>
              <h4>Follow Us</h4>
              <div className="contact-socials">
                <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={18} /> Instagram
                </a>
                <a href={businessInfo.social.tiktok} target="_blank" rel="noopener noreferrer">
                  <FaTiktok size={18} /> TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="map-embed">
            <iframe
              title="Kreata Designs Location"
              src={businessInfo.mapEmbedUrl}
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact-form-wrapper">
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;