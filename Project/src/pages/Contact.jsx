import React from 'react'
import { assets } from '../assets/assets'
import { MdOutlineHorizontalRule } from "react-icons/md";
import "./Contact.css"
const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-heading'>CONTACT US <MdOutlineHorizontalRule/></div>
        <div className='contact-subcontainer'>
          <img src={assets.contact_img} className='contact-img'/>
          <div className='contact-description'>
            <div className='contact-description-component'>
               <div className='contact-component-heading'>Our Store</div>
               <div>H-225 SRMIST </div>
               <div>Ghaziabad, Uttar-Pradesh</div>
               <div>Email : abhinav20singh03@gmail.com</div>
               <div>Tel : 8755880855</div>
            </div>
            <div className='contact-description-component'>
               <div className='contact-component-heading'>Careers at Thrift Treasure</div>
               <div>Learn more about our teams and job opening</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact;
