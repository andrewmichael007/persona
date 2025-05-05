// src/components/Footer.jsx
import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="content">
        <div className="links">
          <a href="https://github.com/Yo-mitch" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="micheleandreas00@gmail.com">Email</a>
          <a href = "https://www.instagram.com/_mitchcoco/?hl=en" target = "_blank" rel = "noopener noreferrer"> Instagram </a>
        </div>
        <p>&copy; {currentYear} mitch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
