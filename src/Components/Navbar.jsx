// src/Components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      {/* logo section */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}> Me </Link>
      </div>

      {/* hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      {/* nav links */}
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}> Home </NavLink>
        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}> About </NavLink>
        <NavLink to="/learning" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}> Learning </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}> Contact </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
