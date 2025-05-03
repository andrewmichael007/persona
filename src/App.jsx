// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import HeroSection from './Components/HeroSection.jsx';
import Footer from './Components/Footer.jsx';
import About from './Pages/About.jsx';
import Learning from './Pages/Learning.jsx';
import Contact from './Pages/Contact.jsx';

import './Styles/App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
