import React from 'react';
import './Hero.css'; // Make sure to create this CSS file
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate  = useNavigate();
  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1>Our Best Seller Latest Arrived</h1>
        <p>Shop Now and Discover the Trendiest Styles!</p>
        <button className="shop-now-btn" onClick={()=>{
            navigate("/collection")
        }}>Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;

