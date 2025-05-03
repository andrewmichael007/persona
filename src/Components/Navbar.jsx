// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">DevPortfolio</Link>
      </div>
      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/learning">Learning</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;

