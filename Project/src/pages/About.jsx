import React from 'react'
import { assets } from '../assets/assets'
import { MdOutlineHorizontalRule } from "react-icons/md";
const About = () => {
  return (
    <div className='about-container'>
        <div className='about-heading'>ABOUT US <MdOutlineHorizontalRule/></div>
        <div className='about-subcontainer'>
          <img src={assets.about_img} className='about-img'/>
          <div>Welcome to Thrift Treasure, your ultimate destination for quality, affordable, and sustainable fashion! We are passionate about making second-hand shopping accessible, stylish, and eco-friendly. At Thrift Market, we believe that shopping shouldn’t come at the expense of the planet, and we strive to offer a wide range of pre-loved fashion pieces that don’t just look good, but do good.

            Our mission is simple: to bring you top-quality, gently used clothing, accessories, and home goods, while promoting sustainability and reducing waste. We carefully curate each item, ensuring it meets our high standards for both style and condition. Whether you’re looking for vintage gems, trendy pieces, or everyday essentials, we’ve got something for everyone at unbeatable prices.

            We are committed to providing an enjoyable and transparent shopping experience. Every item in our store tells a story, and with your purchase, you’re helping extend the life of these wonderful pieces. Together, we can make fashion more sustainable, one thrifted item at a time.

            Thank you for supporting sustainable fashion. Join us on our journey to a more eco-conscious and stylish world!</div>
        </div>
    </div>
  )
}

export default About
