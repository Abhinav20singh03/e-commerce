import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNavbar.css'; // Assuming the CSS is in this file
import { assets } from '../assets/assets';

const SideNavbar = () => {
  return (
    <div className="side-navbar">
      <img src={assets.logo_negative} className='sidenav-img'/>
      <nav className="nav-links">
        <NavLink 
          to="/" 
          className="nav-item" 
          activeClassName="active"
        >
          Home
        </NavLink>
        <NavLink 
          to="/collection" 
          className="nav-item" 
          activeClassName="active"
        >
          Collection
        </NavLink>
        <NavLink 
          to="/about" 
          className="nav-item" 
          activeClassName="active"
        >
          About
        </NavLink>
        <NavLink 
          to="/contact" 
          className="nav-item" 
          activeClassName="active"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default SideNavbar;
