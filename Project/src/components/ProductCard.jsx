import React from 'react';
import './ProductCard.css';
import {useNavigate} from "react-router-dom"
const ProductCard = ({ product }) => {

 const navigate = useNavigate();
 const productCardHandler = ()=>{
   navigate(`/product/${product.id}`)
 }

  return (
    <div className="product-card" onClick={productCardHandler}>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price}₹</p>
      <button className="add-to-cart">SHOP NOW</button>
    </div>
  );
};

export default ProductCard;