import React from 'react'
import { assets } from '../assets/assets'
import { MdOutlineHorizontalRule } from "react-icons/md";
import "./About.css"
const About = () => {
  return (
    <div className='about-container'>
        <div className='about-heading'>ABOUT US <MdOutlineHorizontalRule/></div>
        <div className='about-subcontainer'>
          <img src={assets.about_img} className='about-img'/>
          <div className='about-description'>Welcome to Thrift Treasure, your ultimate destination for quality, affordable, and sustainable fashion! We are passionate about making second-hand shopping accessible, stylish, and eco-friendly. At Thrift Treasure, we believe shopping shouldn’t come at the expense of the planet. Our mission is to offer top-quality, gently used clothing, accessories, and home goods while promoting sustainability and reducing waste. 

We carefully curate each item to meet our high standards for both style and condition, ensuring you’ll find everything from vintage gems and trendy pieces to everyday essentials—all at unbeatable prices. Shopping with us means extending the life of these wonderful pieces and contributing to a more sustainable fashion industry.

We are committed to providing an enjoyable and transparent shopping experience because every item in our store tells a unique story. By choosing pre-loved fashion, you’re not only making a style statement but also supporting a greener planet. Together, we can make fashion more sustainable, one thrifted item at a time. Thank you for supporting sustainable fashion—join us on our journey toward a more eco-conscious and stylish world!</div>
        </div>
    </div>
  )
}

export default About
