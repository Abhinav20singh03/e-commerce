import React, { useState } from 'react';
import "./Login.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate  = useNavigate();
  const {loggedIn,setLoggedIn} = useContext(AppContext);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='login-container'>
      <div className='login-heading'>Login</div>
      <div className='login-box'>
        <div className="login-input-container">
          <input type='text' className="login-email" placeholder='Email' />
        </div>
        
        <div className='login-input-container'>
          <input
            type={showPassword ? 'text' : 'password'}
            className='login-password'
            placeholder='Password'
          />
          <div className='password-icon' onClick={togglePasswordVisibility}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        </div>

        <div className='login-features'>
          <div className='login-feature'>Forgot the password?</div>
          <div className='login-feature' onClick={()=>{navigate("/signup")}}>Create account</div>
        </div>
        <button className='signin-button' onClick={()=>{
          setLoggedIn(true);
          navigate("/");
          }}>Sign In</button>
      </div>
    </div>
  );
};

export default Login;
