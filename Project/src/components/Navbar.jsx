import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { assets  } from '../assets/assets'
import { useNavigate } from "react-router-dom";
const Navbar = () => {

    const [searchBar,setSearchBar] = useState(false);
    const [SideNavbar,setSideNavbar] = useState(false);
    
    const navigate = useNavigate();
  return (
    <>
        <div className='container'>
        <img src={assets.logo} className='logo'/> 
        <div className='pages'>
            <NavLink to="/" className='page'>Home</NavLink>
            <NavLink to="/collection" className='page'>Collection</NavLink>
            <NavLink to="/about" className='page'>About</NavLink>
            <NavLink to="/contact" className='page'>Contact</NavLink>
        </div>  
        <div className='navigation-features'>
            <img className="features" onClick={()=>{navigate("/login")}} src={assets.profile_icon}/>
            <img className="features" onClick={()=>{navigate("/cart")}} src={assets.cart_icon}/>
            <img className="features" onClick={()=>{setSearchBar(prev=>!prev)}} src={assets.search_icon}/>

            <img className='features' onClick={()=>{setSideNavbar(true)}}/>
        </div>  
    </div>
    {
        searchBar ? 
        <>
        <div className='search-bar-container'>
        <input type='text' placeholder='Search' className="search-bar"/>
        </div>
        </> : 
        <></>
    }

    </>
    
  )
}

export default Navbar
