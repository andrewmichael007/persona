// src/App.jsx

import React from 'react';
//importing Router, Routes and Route to hold links of the navbar from react-router-dom

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//importing various components
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
//importing various pages
import About from './Pages/About';
import Learning from './Pages/Learning';
import Contact from './Pages/Contact';
//importing the global styles
import './Styles/App.css';

//the main App  arrow function, should return
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
