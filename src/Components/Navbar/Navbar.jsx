import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const languages = [
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
  { code: "en", label: "EN" },
];

const Navbar = ({ language, setLanguage, t }) => {
  const menuRef = useRef(null);
  const langRef = useRef(null);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    menuRef.current?.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  };

  return (
    <nav className="apple-nav" ref={menuRef}>
      {/* Orqa fondagi qizil effektlar */}
      <div className="nav-liquid-bg">
        <div className="glow-red-top"></div>
        <div className="glow-red-bottom"></div>
      </div>

      <div className="nav-content">
        <a href="#main" className="nav-logo" aria-label="Anarfresh">
          <img src={assets.logo} alt="Anarfresh logo" className="nav-logo-image" />
        </a>

        <ul className="nav-links">
          <li><a href="#main">{t.nav.home}</a></li>
          <li><a href="#partners">{t.nav.cooperation}</a></li>
          <li><a href="#distributors">{t.nav.distributors}</a></li>
        </ul>

        <div className="nav-right-group">
          <div className={`nav-lang-picker ${isLangOpen ? "open" : ""}`} aria-label={t.nav.language} ref={langRef}>
            <button
              type="button"
              className="nav-lang-current"
              onClick={() => setIsLangOpen((prev) => !prev)}
            >
              <span className="nav-lang-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M3 12h18M12 3c2.4 2.4 3.8 5.6 3.8 9s-1.4 6.6-3.8 9c-2.4-2.4-3.8-5.6-3.8-9S9.6 5.4 12 3Z" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </span>
              <span className="nav-lang-current-label">
                {languages.find((item) => item.code === language)?.label}
              </span>
              <span className="nav-lang-caret" aria-hidden="true">▾</span>
            </button>
            <div className="nav-lang-options">
              {languages
                .filter((item) => item.code !== language)
                .map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    className="nav-lang-btn"
                    onClick={() => {
                      setLanguage(item.code);
                      setIsLangOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
            </div>
          </div>
          <button className="apple-burger" onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
