import React from 'react'
import { assets } from '../assets/assets'
import "./Policy.css"
const Policy = () => {
  return (
    <div className='policy-container'>
       <div className='policy'>
       <img className='policy-img' src={assets.exchange_icon}/>
       <div className='policy-heading'>Easy Exchange Policy</div>
       <div className='policy-description'>We offer hassle free exchange  policy</div>
       </div>
       <div className='policy'>
       <img className='policy-img' src={assets.quality_icon}/>
       <div className='policy-heading'>7 Day Return Policy</div>
       <div className='policy-description'>We offer 7 days return policy</div>

       </div>
       <div className='policy'>
       <img className='policy-img' src={assets.support_img}/>
       <div className='policy-heading'>Best Customer Support</div>
       <div className='policy-description'>We offer best customer support</div>
       </div>
       
    </div>
  )
}

export default Policy
