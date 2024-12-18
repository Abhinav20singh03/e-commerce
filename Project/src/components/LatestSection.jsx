import React from 'react';
import ProductCard from './ProductCard';
import './LatestSection.css';
import { products } from '../assets/assets';
const LatestSection = ({size,sectionHeading,sectionDescription}) => {

  
  const productarray = [];

  for(let i=0;i<size;i++){
    productarray.push(products[i]);
  }

  return (
    <section className="latest-section">
      <h2>{sectionHeading}</h2>
      <p>{sectionDescription}</p>
      <div className="product-grid">
        {productarray.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default LatestSection;
