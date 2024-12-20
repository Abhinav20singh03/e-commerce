import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { assets  } from '../assets/assets'
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import Dropdown from './Dropdown';
import SideNavbar from './SideNavbar';
const Navbar = () => {
    const dropdownOptions = [
        { label: "Option 1", link: "#option1" },
        { label: "Option 2", link: "#option2" },
        { label: "Option 3", link: "#option3" },
      ];
    const [searchBar,setSearchBar] = useState(false);
    const [sideNavbarVisible,setSideNavbarVisible] = useState(false);
    
    const navigate = useNavigate();
  return (
    <>  
        <div className='navbar-container'>
        {
            sideNavbarVisible ? 
            <>  
                <SideNavbar/>
            </> :
            <>

            </>
        }
        <img src={assets.logo} className='logo'/> 
        <div className='pages'>
            <NavLink to="/" className='page'>Home</NavLink>
            <NavLink to="/collection" className='page'>Collection</NavLink>
            <NavLink to="/about" className='page'>About</NavLink>
            <NavLink to="/contact" className='page'>Contact</NavLink>
        </div>  
        <div className='navigation-features'>
            <Dropdown  label="Hover me" options={dropdownOptions} />
            <BsCart2 size="25px" onClick={()=>{navigate("/cart")}}/>
            <IoSearchOutline size="25px"  onClick={()=>{
                navigate("/collection")
                setSearchBar(true)
                }} src={assets.search_icon}/>
            <img className='features-menu' src={assets.menu_icon} onClick={()=>{setSideNavbarVisible(prev=>!prev)}}/>
        </div>  
    </div>
    {
        searchBar ? 
        <>
        <div className='search-bar-container'>
        <input type='text' placeholder='Search' className="search-bar"/>
        <img src={assets.cross_icon} className="search-cross" onClick={()=>{
            setSearchBar(false)}}/>
        </div>
        </> : 
        <></>
    }

    </>
    
  )
}

export default Navbar
