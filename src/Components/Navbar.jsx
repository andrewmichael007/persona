// src/Components/Navbar.jsx
import React from 'react';
//import link from react-router-dom because our navbar items are goin' to be links
import { NavLink, Link } from 'react-router-dom';
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
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}> Home </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}> About </NavLink>
        <NavLink to="/learning" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}> Learning </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}> Contact </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

