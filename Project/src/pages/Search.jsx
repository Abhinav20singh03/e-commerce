import React, { useState } from 'react'
import "./Search.css"
const Search = () => {

  const [searchedProduct,setSearchedProduct] = useState([]);
  
  return (
  <div className='search-page-container'>
        <div className='search-bar-container'>
          <input type='text' placeholder='Search' className="search-bar"/>
        </div>
        
        <div className='search-page-products'>
            no product
        </div>
  </div>
  )
}

export default Search
