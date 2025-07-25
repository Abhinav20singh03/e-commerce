import React, { useState } from 'react';
import "./Login.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

import { backendUrl } from '../App';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const {setToken} = useContext(AppContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  const onSubmitHandler = async(e)=>{
    try {
        e.preventDefault();
        const response = await axios.post(backendUrl+"/api/user/admin",{email,password});
        console.log(response);
        if(response.data.success){
            toast.success("Login Successful");
            setToken(response.data.token)
        }else{
            toast.error("Invalid Credentials");
        }
        
    } catch (error) {
        console.log(error.message);
        toast.error(error.message)
    }
  }

  return (
    <div>
    <form className='login-container' onSubmit={onSubmitHandler}>
    <div className='login-heading'>Admin Panel Login</div>
      <div className='login-box'>
        <div className="login-input-container">
          <input type='text'
           className="login-email"
            placeholder='Email'
            onChange={(e)=>{setEmail(e.target.value)}} 
            value={email}
            />
        </div>
        
        <div className='login-input-container'>
          <input
            type={showPassword ? 'text' : 'password'}
            className='login-password'
            placeholder='Password'
            onChange={(e)=>{setPassword(e.target.value)}}
            value={password}
          />
          <div className='password-icon' onClick={togglePasswordVisibility}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        </div>
        <div className='login-features'>
        </div>
        <button className='signin-button' type='submit'>Login</button>

      </div>
    </form>
    <ToastContainer position="top-center"
  reverseOrder={false}/>
    </div>
  );
};

export default Login;
