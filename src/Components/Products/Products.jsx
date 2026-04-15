import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <section className="products-showcase">
      {/* Asosiy fon rasmi */}
      <img 
        src="https://static.tildacdn.com/tild6265-3961-4234-b335-656639643232/Untitled_Session0322.jpg" 
        alt="LIT Energy Energy Drinks" 
        className="products-bg-img" 
      />
      
      {/* Markaziy yozuv */}
      <div className="products-content">
        <h2 className="products-mid-text">ENERGY DRINKS</h2>
      </div>
    </section>
  );
};

export default Products;