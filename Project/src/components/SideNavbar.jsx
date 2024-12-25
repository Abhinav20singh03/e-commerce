import React, { useContext } from 'react';
import './SideNavbar.css'; // Assuming the CSS is in this file
import { assets } from '../assets/assets';
import { RxCross1 } from "react-icons/rx";
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
const SideNavbar = () => {
   const navigate = useNavigate();
  const {setSideNavbarVisible} = useContext(AppContext);
  return (
    <div className="side-navbar">
    <div className='side-navbar-header'>
    <img src={assets.logo_negative} className='sidenav-img'/>
    <RxCross1 size="20px" onClick={()=>{setSideNavbarVisible(false)}}/>
    </div>
      <div className="nav-links">
        <div 
        onClick={()=>{navigate("/");
          setSideNavbarVisible(false);
        }}
        className="nav-item" 
        >
          Home
        </div>
        <div 
          className="nav-item" 
          onClick={()=>{
            navigate("/collection");
            setSideNavbarVisible(false);
            }}
        >
          Collection
        </div>
        <div 
        onClick={()=>{navigate("/about");
          setSideNavbarVisible(false);
        }}
          className="nav-item" 
        >
          About
        </div>
        <div 
        onClick={()=>{navigate("/contact");
          setSideNavbarVisible(false);
        }}
          className="nav-item"  
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
