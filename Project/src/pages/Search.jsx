import React, { useEffect, useState } from 'react';
import "./Search.css";
import { products } from '../assets/assets'; // Assuming products is an array of product objects
import ProductCard from '../components/ProductCard';

const Search = () => {
  const [searchedProduct, setSearchedProduct] = useState([]); // State for displaying filtered products
  const [query, setQuery] = useState(""); // State for storing the search query

  // Initialize products on mount
  useEffect(() => {
    setSearchedProduct(products);
  }, []);

  // Handle search input change
  const searchHandler = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setQuery(inputValue); // Update the search query
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().startsWith(inputValue)
    );
    setSearchedProduct(filteredProducts);
  };

  return (
    <div className='search-page-container'>
      <div className='search-bar-container'>
        <input
          onChange={searchHandler}
          type='text'
          placeholder='Search'
          className="search-bar"
          value={query}
        />
      </div>

      <div className='search-page-products'>
        {
          searchedProduct.length > 0 ? (
            searchedProduct.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found</p>
          )
        }
      </div>
    </div>
  );
};

export default Search;
