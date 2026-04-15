import React from "react";
import { motion } from "framer-motion";
import "./DualImageSection.css";
import { assets } from "../../assets/assets";

const DualImageSection = () => {
  return (
    <section className="dual-hero">
      {/* Chap blok */}
      <motion.div 
        className="hero-side left-side"
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circOut" }}
        style={{ backgroundImage: `url(${assets.photo_1})` }}
      >
      
      </motion.div>

      {/* O'ng blok */}
      <motion.div 
        className="hero-side right-side"
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circOut" }}
        style={{ backgroundImage: `url(${assets.photo_2})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h2 className="hero-title-dual">CHEGARASIZ<br/>IMKONIYAT</h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DualImageSection;