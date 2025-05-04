import React from 'react';
import '../Styles/Footer.css';

// Import your social media icons (update these paths based on your setup)
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';
import github from '../Assets/github.png';
import gmail from '../Assets/gmail.png';
import linkedin from '../Assets/linkedin.png';
import twitterx from '../Assets/twitterx.png';
import whatsapp from '../Assets/whatsapp.png';
import pinterest from '../Assets/pinterest.png';
import twitter from '../Assets/twitter.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info-holder">
        <p className="footer-heading">Let's Connect!</p>

        <div className="socials-holder">
          {[facebook, instagram, github, gmail, linkedin, twitterx, whatsapp, pinterest, twitter].map((icon, index) => (
            <a href="/" key={index} className="social-icon" target="_blank" rel="noopener noreferrer">
              <img src={icon} alt="social-icon" />
            </a>
          ))}
        </div>

        <p className="copyright">© 2025 Mitch</p>
      </div>
    </footer>
  );
};

export default Footer;
