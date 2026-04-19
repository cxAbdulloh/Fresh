import React from 'react';
import { motion } from "framer-motion";
import './Products.css';

const Products = ({ t }) => {
  return (
    <section className="products-showcase">
      <div className="products-panel">
        <motion.div
          className="products-copy products-copy-left"
          initial={{ opacity: 0, y: -48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="products-kicker">{t.products.leftKicker}</span>
          <h2 className="products-title">{t.products.leftTitle}</h2>
          {t.products.leftText ? <p className="products-text">{t.products.leftText}</p> : null}
        </motion.div>

        <motion.div
          className="products-copy products-copy-right"
          initial={{ opacity: 0, y: -48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.2, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="products-kicker">{t.products.rightKicker}</span>
          <h2 className="products-title">{t.products.rightTitle}</h2>
          {t.products.rightText ? <p className="products-text">{t.products.rightText}</p> : null}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
