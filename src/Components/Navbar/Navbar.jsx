import React, { useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const menuRef = useRef(null);

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
        <div className="nav-logo">Anarfresh</div>

        <ul className="nav-links">
          <li><a href="#Главная">Главная</a></li>
          <li><a href="#Контакт">Контакт</a></li>
          <li><a href="#Информация">Информация</a></li>
        </ul>

        <div className="nav-right-group">
          <a href="tel:+998994513333" className="contact-btn">
            Связаться
          </a>
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