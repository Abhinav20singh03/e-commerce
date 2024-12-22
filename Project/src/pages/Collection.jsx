import React, { useContext, useEffect, useState } from 'react';
import "./Collection.css";
import ProductCard from '../components/ProductCard';
import { AppContext } from '../context/AppContext';
const Collection = () => {
  const {products} = useContext(AppContext);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  const toggleCategory = (e) => {
    
    if (e.target.checked) {
      setCategory((prev) => [...prev, e.target.name]);
    } else {
      setCategory((prev) => prev.filter((item) => item !== e.target.name));
    }
  };

  const toggleSubCategory = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setSubCategory((prev) => [...prev, name]);
    } else {
      setSubCategory((prev) => prev.filter((item) => item !== name));
    }
  };

  useEffect(() => {
    let filtered = products;

    if (category.length > 0) {
      filtered = filtered.filter((product) => category.includes(product.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter((product) => subCategory.includes(product.subCategory));
    }

    setFilterProducts(filtered);
  }, [category, subCategory]);

  return (
    <div className='collection-container'>
      <div className='filter-container'>
        <div className='filter-container-heading'>FILTERS</div>
        <div className='filter-container-box'>
          <div className='filter-container-box-heading'>CATEGORIES</div>
          <div className="filter-item">
            <input type='checkbox' name="Men" id="Men" onChange={toggleCategory} />
            <label htmlFor='Men'>Men</label>
          </div>
          <div className="filter-item">
            <input type='checkbox' name="Women" id="Women" onChange={toggleCategory} />
            <label htmlFor='Women'>Women</label>
          </div>
          <div className="filter-item">
            <input type='checkbox' name="Kids" id="Kids" onChange={toggleCategory} />
            <label htmlFor='Kids'>Kids</label>
          </div>
        </div>
        <div className='filter-container-box'>
          <div className='filter-container-box-heading'>TYPE</div>
          <div className="filter-item">
            <input type='checkbox' name="Topwear" id="Topwear" onChange={toggleSubCategory} />
            <label htmlFor='Topwear'>Topwear</label>
          </div>
          <div className="filter-item">
            <input type='checkbox' name="Bottomwear" id="Bottomwear" onChange={toggleSubCategory} />
            <label htmlFor='Bottomwear'>Bottomwear</label>
          </div>
          <div className="filter-item">
            <input type='checkbox' name="Winter" id="Winter" onChange={toggleSubCategory} />
            <label htmlFor='Winter'>Winter</label>
          </div>
        </div>
      </div>
      <div className='item-container'>
        <div className='item-container-header'>
          <div className='item-container-heading'>ALL COLLECTIONS</div>
          <div className='sort'>Sort by Relevance</div>
        </div>
        <div className='item-container-subcontainer'>
  {
    filterProducts.length > 0 ? (
      filterProducts.map((ele) => (
        <ProductCard key={ele.id} product={ele} />
      ))
    ) : (
      <div className="empty-text">No products found!</div>
    )
  }
</div>
      </div>
    </div>
  );
};

export default Collection;
