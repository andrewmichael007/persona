// src/components/Footer.jsx
import React from 'react';
import '../Styles/Footer.css';
import github from "../Assets/github.png";
import linkedin from "../Assets/linkedin.png";
import gmail from "../Assets/gmail.png";
import instagram from "../Assets/instagram.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="content">
        <div className="socials">
          
            <a href="https://github.com/Yo-mitch" target="_blank" rel="noopener noreferrer"> Github
              <img src={github} alt = "github" />
            </a>
          
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"> LinkedIn
              <img src={linkedin} alt = "linkedin" />
            </a>
          
            <a href="micheleandreas00@gmail.com"> Email
              <img src={gmail} alt = "gmail-holder" />
            </a>
          
            <a href = "https://www.instagram.com/_mitchcoco/?hl=en" target = "_blank" rel = "noopener noreferrer"> Instagram 
              <img src={instagram} alt = "instagram" />
            </a>

        </div>
        <p>&copy; {currentYear} mitch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
