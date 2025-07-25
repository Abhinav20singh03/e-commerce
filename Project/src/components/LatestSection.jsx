import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import './LatestSection.css';
import { AppContext } from '../context/AppContext';
const LatestSection = ({size,sectionHeading,sectionDescription}) => {

  const {products} = useContext(AppContext);

  const productarray = [];

  for(let i=0;i<size;i++){
    productarray.push(products[i]);
  }

  return (
    <section className="latest-section">
      <h2>{sectionHeading}</h2>
      <p>{sectionDescription}</p>
      <div className="product-grid">
        {products.map((product,index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default LatestSection;
