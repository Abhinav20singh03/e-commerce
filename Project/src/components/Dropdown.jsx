import React from "react";
import "./Dropdown.css";
import { assets } from "../assets/assets";
import { BsPersonCircle } from "react-icons/bs";
const Dropdown = ({ label, options }) => {
  return (
    <div className="dropdown">
      <div className="dropdown-button"/>
      <BsPersonCircle size="25px"/>
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
