// src/Components/Navbar.jsx
import React from 'react';
//import link from react-router-dom because our navbar items are goin' to be links
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    //return a semantic tag of header
    <header className="navbar">
      {/* logo section */}
      <div className="logo">
        <Link to="/"> portfolio1.0 </Link>
      </div>
      {/* a list of nav items */}
      <nav className="links">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/learning"> Learning </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
    </header>
  );
};

export default Navbar;

