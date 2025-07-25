import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../Context/AppContext";
import { IoMenu } from "react-icons/io5";
import SideNavbar from "./SideNavbar";
const Navbar = () => {

  const { sideNavbarVisible, setSideNavbarVisible ,setToken} = useContext(AppContext);

  return (
  
    <div className="navbar-container">
    {sideNavbarVisible ? (
      <>
        <SideNavbar />
      </>
    ) : (
      <></>
    )}
      <img className="navbar-img" src={assets.logo} />
      <div className="pages">
        <NavLink to="/" className="page">
          Home
        </NavLink>
        <NavLink to="/add" className="page">
          Add
        </NavLink>
        <NavLink to="/list" className="page">
          Lists
        </NavLink>
        <NavLink to="/orders" className="page">
          Order
        </NavLink>
      </div>
      <div className="features">
      <button className="navbar-logout" onClick={()=>{setToken("")}}>Logout</button>
      <IoMenu className="navbar-menu" size="25px" onClick={()=>{setSideNavbarVisible(true)}} />
      </div>
      
    </div>
  );
};

export default Navbar;
