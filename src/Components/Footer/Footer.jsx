import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="lit-footer">
      <div className="footer-container">
        
        {/* Yuqori qism: Instagram va Tel */}
        <div className="footer-contacts">
          <div className="contact-item">
            <span className="contact-label">Follow</span>
            <a href="https://instagram.com/username" target="_blank" rel="noreferrer" className="contact-link">
              INSTAGRAM
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Contact</span>
            <a href="tel:+998901234567" className="contact-link">
              +998 90 123 45 67
            </a>
          </div>
        </div>

        {/* Pastki asosiy qism: Katta logotiplar */}
        <div className="footer-main">
          <div className="footer-left">
            <h1 className="footer-logo">ANARFRESH</h1>
          </div>
          <div className="footer-right">
            <span className="footer-subtext">BY Latipov</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;