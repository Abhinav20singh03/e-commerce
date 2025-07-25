import React, { useState, useEffect, useContext } from 'react';
import { backendUrl } from '../App';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import "./List.css"
import { AppContext } from '../Context/AppContext';
import { ToastContainer } from 'react-toastify';

const List = () => {
  const {products,setProducts} = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/products/list`);
      setProducts(response.data.products); 
      console.log(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  useEffect(() => {
    fetchProducts(); // Call the async function inside useEffect
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='heading'>Product List</div>
      {
        products.length === 0 ?
        <div className='no-products'>No Product Found</div>
        :
        <div className='card-container'>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} fetchProducts={fetchProducts}/>
        ))}

      </div>
      }
      <ToastContainer
              position="top-center"
              autoClose={3000} // Auto close after 3 seconds
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
    </div>
  );
};

export default List;
