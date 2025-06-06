// src/components/HeroSection.jsx
// the hero section is the landing page
import React from 'react';
import '../Styles/HeroSection.css';

// this is an arrow function that holds the component
const HeroSection = () => {
  // the arrow function returns a semantic tag,  section
  return (
    <section className="hero-section">
      <div className = "hero-info">
        <span className = "bye-emoji"> &#x1F44B; </span>
        <h1 className="name"> Michael Adjei </h1>
        <h1 className="name"> Andrew </h1>
        <p className="hero-subtitle">
          Computer Engineering Student || Tech Enthusiast
        </p>
      </div>
      
      <div className="scroll-down">
        <span>&#8595;</span>
      </div>
    </section>
  );
};

export default HeroSection;

