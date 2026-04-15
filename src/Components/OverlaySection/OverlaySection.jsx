import React from "react";
import { motion } from "framer-motion";
import "./OverlaySection.css";
import { assets } from "../../assets/assets";

const OverlaySection = () => {
  // Pro-darajadagi animatsiya variantlari (JS mantiqi)
  const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40, damping: 15, delay: 0.1 },
    },
  };

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40, damping: 15, delay: 0.3 },
    },
  };

  return (
    <section className="overlay-hero">
      {/* Chap blok */}
      <motion.div 
        className="hero-side left-side"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={leftVariant}
        style={{ backgroundImage: `url(${assets.photo_1})` }}
      >
        <div className="hero-dimmer">
          <h2 className="hero-title-over hero-title-center">Energiya</h2>
        </div>
      </motion.div>

      {/* O'ng blok */}
      <motion.div 
        className="hero-side right-side"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={rightVariant}
        style={{ backgroundImage: `url(${assets.photo_2})` }}
      >
        <div className="hero-dimmer">
          <h2 className="hero-title-over hero-title-center">Anor</h2>
        </div>
      </motion.div>
    </section>
  );
};

export default OverlaySection;