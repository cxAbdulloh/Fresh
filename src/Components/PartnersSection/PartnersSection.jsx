import React from "react";
import "./PartnersSection.css";

const PartnersSection = ({ t }) => {
  return (
    <section className="partners-section" id="partners">
      <h2 className="partners-title">{t.partners.title}</h2>
      <div className="partners-slots" aria-label={t.partners.aria}>
        <div className="partner-slot" />
        <div className="partner-slot" />
        <div className="partner-slot" />
      </div>
    </section>
  );
};

export default PartnersSection;
