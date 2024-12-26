import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import SideNavbar from "./SideNavbar";
import { AppContext } from "../context/AppContext";
import Dropdown2 from "./Dropdown2";
const Navbar = () => {
  
  const {cartProducts,setSideNavbarVisible,sideNavbarVisible} = useContext(AppContext);
  
  const [cartCount, setCartCount] = useState(cartProducts);

  useEffect(()=>{
    setCartCount(cartProducts.length);
  },[cartProducts])

  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-container">
        {sideNavbarVisible ? (
          <>
            <SideNavbar />
          </>
        ) : (
          <></>
        )}
        <div className="logo-container">
          <img src={assets.logo} className="thrift-logo" />
        </div>

        <div className="pages">
          <NavLink to="/" className="page">
            Home
          </NavLink>
          <NavLink to="/collection" className="page">
            Collection
          </NavLink>
          <NavLink to="/about" className="page">
            About
          </NavLink>
          <NavLink to="/contact" className="page">
            Contact
          </NavLink>
        </div>

        <div className="navigation-features">
          <Dropdown2/>
          <div className="cart-icon-container">
            <BsCart2 size="25px" onClick={() => navigate("/cart")} />
            <div className="cart-count">{cartCount}</div>
          </div>
          <IoSearchOutline
            size="25px"
            onClick={() => {
              navigate("/search");
            }}
            src={assets.search_icon}
          />
          <img
            className="features-menu"
            src={assets.menu_icon}
            onClick={() => setSideNavbarVisible(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
