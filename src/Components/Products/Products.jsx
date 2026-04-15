import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <section className="products-showcase">
      <div className="products-panel">
        <div className="products-copy products-copy-left">
          <span className="products-kicker">xurmofresh</span>
          <h2 className="products-title">Text xurmofresh uchun</h2>
          <p className="products-text">
            Тепло, уют, мягкую сладость и чувство спокойного удовольствия.
          </p>
        </div>

        <div className="products-copy products-copy-right">
          <span className="products-kicker">anarfresh</span>
          <h2 className="products-title">Text anarfresh uchun</h2>
          <p className="products-text">
            Яркость, свежесть, энергию и насыщенное фруктовое настроение.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
