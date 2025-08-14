import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-accent-gold/40 py-6 text-center text-sm text-text-secondary-dark dark:text-text-secondary-dark light:text-text-secondary-light">
      <p>
        © {new Date().getFullYear()} Nexora. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
