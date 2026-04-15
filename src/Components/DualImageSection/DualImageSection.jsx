import React from "react";
import { motion } from "framer-motion";
import "./DualImageSection.css";
import { assets } from "../../assets/assets";

const DualImageSection = () => {
  return (
    <section className="dual-hero">
      <motion.div 
        className="hero-side left-side"
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circOut" }}
        style={{ backgroundImage: `url(${assets.photo_1})` }}
      />

      <motion.div 
        className="hero-side right-side"
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circOut" }}
        style={{ backgroundImage: `url(${assets.photo_2})` }}
      />
    </section>
  );
};

export default DualImageSection;
