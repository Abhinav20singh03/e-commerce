import React, { useState } from 'react';
import "./Signup.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate  = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='Signup-container'>
      <div className='Signup-heading'>Signup</div>
      <div className='Signup-box'>
      <div className="Signup-input-container">
          <input type='text' className="Signup-name" placeholder='Name' />
        </div>
        <div className="Signup-input-container">
          <input type='text' className="Signup-email" placeholder='Email' />
        </div>
        
        <div className='Signup-input-container'>
          <input
            type={showPassword ? 'text' : 'password'}
            className='Signup-password'
            placeholder='Password'
          />
          <div className='password-icon' onClick={togglePasswordVisibility}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        </div>

        <div className='Signup-features'>
          <div className='Signup-feature' onClick={()=>{navigate("/login");}}>Login Here</div>
        </div>
        <button className='Signup-button' onClick={()=>{
          navigate("/login");
          }}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
