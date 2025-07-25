import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import {Route,Routes} from "react-router-dom";
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import Home from './pages/Home';
import Login from './components/Login';
import { AppContext } from './Context/AppContext';
import { ToastContainer } from 'react-toastify';


export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {

  const {token} = useContext(AppContext);
  
  useEffect(()=>{
    localStorage.setItem("token",token);
  },[token]) 

  return (
    <>
       {
      token === "" ?
      <>
        <Login/>
      </>
      :
      <div>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/add" element={<Add/>} /> 
        <Route path="/list" element={<List/>} /> 
        <Route path="/orders" element={<Orders/>} /> 
      </Routes>
    </div>
    }
    </>
  )
}

export default App

