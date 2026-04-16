import React from "react";
import { motion } from "framer-motion";
import "./OverlaySection.css";
import { assets } from "../../assets/assets";

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

const OverlaySection = ({ t }) => {
  const overlayImages = [
    { key: "left", src: assets.xurmafresh, alt: "Xurmofresh photo", label: t.overlay.leftLabel, variants: leftVariant },
    { key: "right", src: assets.anarfresh_3, alt: "Anarfresh photo", label: t.overlay.rightLabel, variants: rightVariant },
  ];

  return (
    <section className="overlay-hero">
      {overlayImages.map((item) => (
        <motion.div
          key={item.key}
          className="overlay-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={item.variants}
        >
          <div className="overlay-frame">
            <img src={item.src} alt={item.alt} className="overlay-image" />
            <div className="overlay-label">{item.label}</div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default OverlaySection;
