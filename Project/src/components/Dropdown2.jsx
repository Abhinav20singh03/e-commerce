import React, { useContext, useEffect, useState } from "react";
import "./Dropdown2.css";
import { BsPerson } from "react-icons/bs";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Dropdown2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {loggedIn,setLoggedIn} = useContext(AppContext);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(()=>{
    console.log(loggedIn);
  },[loggedIn])
  
  const closeDropdown = (e) => {
    if (!e.target.closest(".dropdown2")) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (

    <>
        {
          loggedIn ? 
          (
            <div className="dropdown2">
            <BsPerson size="27px" onClick={toggleDropdown}/>
             <div className={`dropdown-content2 ${isOpen ? "show" : ""}`}>
             <div className="dropdown-links" onClick={()=>{navigate("/orders")}}>My Orders</div>
             <div className="dropdown-links" onClick={()=>{
            setLoggedIn(false);
            navigate("/");
        }}>Logout</div>

      </div>
    </div>)
          :
          (<BsPerson size="27px" onClick={()=>{
            navigate("/login");}}/>) 
        }
        </>


    
  );
};

export default Dropdown2;
