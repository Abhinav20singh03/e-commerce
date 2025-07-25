import React from 'react';
import './ProductCard.css';
import {useNavigate} from "react-router-dom"
const ProductCard = ({ product }) => {

 const navigate = useNavigate();
 const productCardHandler = ()=>{
   navigate(`/product/${product._id}`)
 }

  return (
    <div className="product-card" onClick={productCardHandler}>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-card-name">{product.name}</div>
      <div className="product-price">{product.price}₹</div>
      <button className="add-to-cart-btn">SHOP NOW</button>
    </div>
  );
};

export default ProductCard;