import React, { useContext } from 'react';
import './ProductCard.css';
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CloudCog } from 'lucide-react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast, ToastContainer } from 'react-toastify';
import { AppContext } from '../Context/AppContext';

const ProductCard = ({ product,fetchProducts }) => {
  const navigate = useNavigate();
  const {token} = useContext(AppContext);
  const productCardHandler = () => {
    navigate(`/product/${product._id}`);
  };

  

  const removeProductHandler = async (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up
    try {
      
      const id = product._id;
      const response = await axios.post(
        backendUrl + "/api/products/remove",
        {id}, // Send ID as an object
        { headers: { token } } // Include token in headers
      );
      console.log(response);
      if (response.data.success) {
        toast.success(response.data.message);
        fetchProducts();
      } else {
        toast.error("Product not removed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };
  

  return (
    <div className="product-card" onClick={productCardHandler}>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-card-name">{product.name}</div>
      <div className="product-price">{product.price}₹</div>
      <button onClick={removeProductHandler} className='product-cross'>
        Remove <RxCross2 size="20px" />
      </button>
    </div>
  );
};

export default ProductCard;
