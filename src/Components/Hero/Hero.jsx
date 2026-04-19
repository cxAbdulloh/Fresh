import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';
import { assets } from '../../assets/assets';

const Hero = ({ t }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Kirish animatsiyasi
      gsap.from(".hero-bg-cans", { 
        scale: 1.1, 
        duration: 2, 
        ease: "power2.out" 
      });
      
      gsap.from(".hero-title", { 
        x: -100, 
        opacity: 0, 
        duration: 1.2, 
        delay: 0.5, 
        ease: "power4.out" 
      });

      gsap.from(".hero-right", { 
        x: 100, 
        opacity: 0, 
        duration: 1.2, 
        delay: 0.8, 
        ease: "power4.out" 
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef} id="main">
      {/* Asosiy fon rasmi */}
      <div className="hero-bg-wrapper">
        <img 
          src={assets.main}
          alt="Anarfresh main banner" 
          className="hero-bg-cans" 
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-brand">
          <h1 className="hero-title-hero">
            ANAR<br />
            FRESH
          </h1>
        </div>

        <div className="hero-right">
          <div className="exclusive-badge">
            <span className="exclusive-text">{t.hero.credit}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
