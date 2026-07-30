import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/why-us', label: 'Why Us' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Keyboard shortcut for Admin access (Ctrl+Shift+A)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.code === 'KeyA') {
        e.preventDefault();
        navigate('/admin/login');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={handleNavClick}>
          <Logo />
          <span className="navbar-brand">Kreata Designs</span>
        </NavLink>

        {/* Main Navigation Links */}
        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={handleNavClick}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Mobile Divider */}
          <div className="navbar-divider"></div>

          {/* Mobile Action Buttons */}
          <div className="navbar-mobile-actions">
            <a
              href="https://wa.me/254XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-action-btn navbar-action-whatsapp"
              onClick={handleNavClick}
            >
              <FaWhatsapp size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          {/* Desktop Divider - Hidden on mobile */}
          <div className="navbar-divider navbar-divider-desktop"></div>

          {/* Theme Toggle - Hidden on mobile to prevent overlap */}
          <div className="navbar-theme-desktop">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {open && <div className="navbar-backdrop" onClick={() => setOpen(false)}></div>}

      {/* Mobile Fix Styles */}
      <style jsx>{`
        /* Desktop - Show theme toggle and divider */
        @media (min-width: 768px) {
          .navbar-theme-desktop {
            display: flex !important;
          }

          .navbar-divider-desktop {
            display: block !important;
          }
        }

        /* Mobile - Hide theme toggle and divider to prevent overlap with menu button */
        @media (max-width: 767px) {
          .navbar-theme-desktop {
            display: none !important;
          }

          .navbar-divider-desktop {
            display: none !important;
          }

          .navbar-actions {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .navbar-toggle {
            z-index: 100;
            position: relative;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;