import React, { useState } from 'react';
import './SideNav.css'; // Assuming CSS is in a separate file

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control side nav visibility

  // Toggle function to open/close side nav
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      
      <div className={`side-nav ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
