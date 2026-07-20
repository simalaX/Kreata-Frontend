import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';
import { businessInfo } from '../data/siteData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col footer-about">
          <div className="footer-logo">
            <Logo size={44} />
            <span>Kreata Designs</span>
          </div>
          <p>
            {businessInfo.tagline}. Printing, graphic design and more — all on Jogoo Road, Nairobi.
          </p>
          <div className="footer-socials">
            <a
              href={businessInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href={businessInfo.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok size={18} />
            </a>
            <a
              href={businessInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/why-us">Why Us</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p><FaMapMarkerAlt /> &nbsp;{businessInfo.address}</p>
          <p><FaPhoneAlt /> &nbsp;<a href={businessInfo.phoneLink}>{businessInfo.phone}</a></p>
          <p><FaClock /> &nbsp;{businessInfo.hours.online}</p>
          <p className="footer-hours-secondary">{businessInfo.hours.inPerson}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Kreata Designs. All rights reserved.</p>
        <Link to="/terms">Terms &amp; Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;