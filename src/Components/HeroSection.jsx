// src/components/HeroSection.jsx
import React from 'react';
import '../Styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title"> Michael Adjei </h1>
      <h1 className="hero-name"> Andrew </h1>
      <p className="hero-subtitle">
        Computer Engineering Student || Tech Enthusiast
      </p>

      <div className="hero-buttons">
        <a href="/resume.pdf" className="btn primary-btn" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
        <a href="#projects" className="btn secondary-btn">
          My Projects
        </a>
      </div>

      <div className="scroll-down">
        <span>&#8595;</span>
      </div>
    </section>
  );
};

export default HeroSection;

