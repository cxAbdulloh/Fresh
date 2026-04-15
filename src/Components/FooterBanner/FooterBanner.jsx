import React from "react";
import "./FooterBanner.css";
import { assets } from "../../assets/assets";

const FooterBanner = () => {
  return (
    <section className="footer-banner">
      <img src={assets.photo_2} alt="Anarfresh banner" className="footer-banner-image" />
    </section>
  );
};

export default FooterBanner;
