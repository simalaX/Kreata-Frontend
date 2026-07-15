import React, { useState, useEffect } from 'react';

/**
 * Kreata Designs logo — theme-aware logo switcher
 * Light mode (default) → kreata.png
 * Dark mode → dark.png
 * Switches automatically when theme toggle is clicked
 */
const Logo = ({ size = 40 }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Get initial theme from document root
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);

    // Listen for theme changes using MutationObserver
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(newTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  // Select logo based on current theme
  const logoSrc = theme === 'dark' ? '/dark.png' : '/kreata.png';

  return (
    <img
      src={logoSrc}
      alt="Kreata Designs logo"
      width={size}
      height={size}
      style={{
        flexShrink: 0,
        borderRadius: '6px',
        objectFit: 'contain',
        display: 'block',
      }}
    />
  );
};

export default Logo;