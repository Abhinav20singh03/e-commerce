import React, { useContext } from "react";
import "./Dropdown.css";
import { assets } from "../assets/assets";
import { BsPersonCircle } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Dropdown = ({ label, options }) => {
  const navigate = useNavigate();
  const {loggedIn,setLoggedIn} = useContext(AppContext);

  return (
    <>
    {
      loggedIn ? 
      (<div className="dropdown">
      <div className="dropdown-button"/>
      <BsPerson size="27px"/>
      <div className="dropdown-content">
        {options.map((option, index) => (
          <a key={index} href={option.link}>
            {option.label}
          </a>
        ))}
      </div>
    </div>)
      :
      (<BsPerson size="27px" onClick={()=>{navigate("/login")}}/>) 
    }
    </>
    
  );
};

export default Dropdown;
