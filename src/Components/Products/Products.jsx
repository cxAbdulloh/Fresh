import React from 'react';
import { motion } from "framer-motion";
import './Products.css';
import { assets } from '../../assets/assets';

const Products = ({ t }) => {
  return (
    <section className="products-showcase">
      <div className="products-panel">
        <motion.div
          className="products-copy products-copy-center"
          initial={{ opacity: 0, y: -48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="products-title products-heading">
            {t.products.heading.split("\\n").map((line, index) => (
              <span key={index} className="products-heading-line">
                {line}
                {index < t.products.heading.split("\\n").length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>
        </motion.div>

        <div className="products-features">
          {t.products.features.map((feature, idx) => {
            const featureImages = [
              assets.germany,
              assets.halal,
              assets.quality
            ];
            return (
              <motion.div
                key={idx}
                className="feature-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 1.1, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={featureImages[idx]} alt="" className="feature-image" />
                <p className="feature-text">{feature}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
