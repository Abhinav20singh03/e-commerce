import React from 'react'
import "./Navbar.css"
import { assets } from '../../../Project/src/assets/assets'
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <img src={assets.logo}/>
      <div>Admin Panel</div>
      <button className='logout'>Logout</button>
    </div>
  )
}

export default Navbar;
