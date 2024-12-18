import React from "react";
import "./Dropdown.css";
import { assets } from "../assets/assets";

const Dropdown = ({ label, options }) => {
  return (
    <div className="dropdown">
      <img src={assets.profile_icon} className="dropdown-button"/>
      <div className="dropdown-content">
        {options.map((option, index) => (
          <a key={index} href={option.link}>
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
