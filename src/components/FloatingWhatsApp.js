import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { businessInfo } from '../data/siteData';

const FloatingWhatsApp = () => {
  const message = encodeURIComponent("Hello Kreata Designs, I'd like to enquire about your services.");

  return (
    <a
      href={`${businessInfo.whatsappLink}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
