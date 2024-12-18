import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import "./HomeFooter.css"
const HomeFooter = () => {
    const navigate = useNavigate();
  return (
    <div className='homeFooter-container'>
      <div className='company-tag'>
        <img src={assets.logo} className='company-tag-logo'/>
        <div className='sub-container-item'>Magna consequat irure nisi aliqua incididunt enim proident id fugiat labore. Consequat deserunt esse culpa non officia do. Anim consectetur minim eu commodo aliqua ullamco ut nostrud in qui commodo. Elit elit Lorem amet officia est ex est minim sunt eiusmod excepteur.</div>
      </div>
      <div className='sub-container'>
        <div className='sub-container-heading'>COMPANY</div>
        <div className='sub-container-item'  onClick={()=>{navigate("/")}} >Home</div>
        <div className='sub-container-item'  onClick={()=>{navigate("/about")}} >About us</div>
        <div className='sub-container-item' onClick={()=>{navigate("/contact")}} >Contact</div>
        <div className='sub-container-item'  onClick={()=>{navigate("/collection")}} >Collection</div>
      </div>
      <div className='sub-container'>
        <div className='sub-container-heading'>GET IN TOUCH</div>
        <div className='sub-container-item'>+91-8755880855</div>
        <div className='sub-container-item'>contact@gmail.com</div>
      </div>
    </div>
  )
}

export default HomeFooter
