import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import HomeFooter from './components/HomeFooter'
import Footer from './components/Footer'
import Search from "./pages/Search"
function App() {

  return (
    <div className='home-page'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/collection" element={<Collection/>} /> 
        <Route path="/contact" element={<Contact/>} />  
        <Route path="/orders" element={<Orders/>} />  
        <Route path="/placeorder" element={<PlaceOrder/>} />  
        <Route path="/product/:id" element={<Product/>} /> 
        <Route path="/login" element={<Login/>} />  
        <Route path="/search" element={<Search/>}/>
      </Routes>
      <HomeFooter/>
      <Footer/>
    </div>
  )
}

export default App
