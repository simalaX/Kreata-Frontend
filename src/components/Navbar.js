import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiLogIn } from 'react-icons/fi';
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
            <NavLink
              to="/admin/login"
              className="navbar-action-btn navbar-action-admin"
              onClick={handleNavClick}
            >
              <FiLogIn size={16} />
              <span>Admin</span>
            </NavLink>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          {/* Admin Link (Desktop) */}
          <NavLink
            to="/admin/login"
            className={({ isActive }) => `navbar-admin-link ${isActive ? 'active' : ''}`}
          >
            Admin
          </NavLink>

          {/* Divider */}
          <div className="navbar-divider"></div>

          {/* Theme Toggle */}
          <ThemeToggle />

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
    </header>
  );
};

export default Navbar;