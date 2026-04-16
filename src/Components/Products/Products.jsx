import React from 'react';
import './Products.css';

const Products = ({ t }) => {
  return (
    <section className="products-showcase">
      <div className="products-panel">
        <div className="products-copy products-copy-left">
          <span className="products-kicker">{t.products.leftKicker}</span>
          <h2 className="products-title">{t.products.leftTitle}</h2>
          <p className="products-text">{t.products.leftText}</p>
        </div>

        <div className="products-copy products-copy-right">
          <span className="products-kicker">{t.products.rightKicker}</span>
          <h2 className="products-title">{t.products.rightTitle}</h2>
          <p className="products-text">{t.products.rightText}</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
