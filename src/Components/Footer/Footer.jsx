import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = ({ t }) => {
  return (
    <footer className="lit-footer">
      <div className="footer-container">
        <div className="footer-contacts">
          <div className="contact-item">
            <span className="contact-label">{t.footer.instagram}</span>
            <a href="https://instagram.com/anar_fresh" target="_blank" rel="noreferrer" className="contact-link contact-link-inline">
              <span className="instagram-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
                </svg>
              </span>
              anar_fresh
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">{t.footer.contact}</span>
            <a href="tel:+998901234567" className="contact-link">
              +998 90 123 45 67
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">{t.footer.email}</span>
            <a href="mailto:help@anarfresh.com" className="contact-link">
              help@anarfresh.com
            </a>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-left">
            <img src={assets.logo} alt="Anarfresh logo" className="footer-logo-image" />
          </div>
          <div className="footer-right">
            <span className="footer-subtext">{t.footer.credit}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
