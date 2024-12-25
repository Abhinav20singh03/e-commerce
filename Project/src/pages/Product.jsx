import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const { products, cartProducts, setCartProducts } = useContext(AppContext);
  const product = products.find((ele) => ele.id === id);
  const [sizeArray, setSizeArray] = useState([]);
 const [sizeSelected,setSizeSelected] = useState(false);

  const sizeHandler = (e) => {
    setSizeArray((prev) => [...prev, e.target.name]);
  };


  const addToCartHandler = () => {
    toast.success("Item added to cart", {
      position: "top-center",
    });
    
    sizeArray.forEach((size) => {
      const productObject = {
        id: product.id,
        name: product.name,
        price: product.price,
        size: size,
        image: product.image,
        quantity: 1
      };
  
      setCartProducts((prev) => {
        const isDuplicate = prev.some(
          (item) => item.id === productObject.id && item.size === productObject.size
        );
  
        if (!isDuplicate) {
          return [...prev, productObject];
        }
  
        return prev;
      });
    });
  
    console.log(cartProducts);
  };  


  useEffect(() => {
    console.log('Updated cartProducts:', cartProducts);
  }, [cartProducts]);




  return (
    <div className="product-page-container">
      <div className="product-page-container-left">
        <img className="product-page-image" src={product.image} alt={product.name} />
      </div>
      <div className="product-page-container-right">
        <div className="product-page-name">{product.name}</div>
        {product.bestseller && <div className="product-page-bestseller">Bestseller</div>}
        <div className="product-page-cost">₹{product.price}</div>
        <div className="product-page-description">{product.description}</div>
        <div className="size-heading">Select Size</div>
        <div className="product-page-size">
          {product.sizes.map((size, index) => (
            <button name={size} onClick={sizeHandler} key={index} className="size-button">
              {size}
            </button>
          ))}
        </div>
        <div className="product-page-checkout" onClick={addToCartHandler}>
          ADD TO CART
        </div>
        <ToastContainer />
        <div className="product-page-footer">
          <div>100% Original Product.</div>
          <div>Cash on delivery is available on this project.</div>
          <div>Easy return and exchange policy within 7 days.</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
