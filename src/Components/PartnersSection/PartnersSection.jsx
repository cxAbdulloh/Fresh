import React from "react";
import "./PartnersSection.css";
import { assets } from "../../assets/assets";

const PartnersSection = ({ t }) => {
  const partners = [
    {
      id: 1,
      name: "Иван Петров",
      title: "Основатель бренда",
      image: assets.photo_1,
      instagram: "https://instagram.com"
    },
    {
      id: 2,
      name: "Алиса Смирнова",
      title: "Генеральный директор",
      image: assets.photo_2,
      instagram: "https://instagram.com"
    },
    {
      id: 3,
      name: "Владимир Козлов",
      title: "Главный эксперт",
      image: assets.anarfresh_3,
      instagram: "https://instagram.com"
    }
  ];

  return (
    <section className="partners-section" id="partners">
      <h2 className="partners-title">{t.partners.title}</h2>
      <div className="partners-slots" aria-label={t.partners.aria}>
        {partners.map((partner) => (
          <div key={partner.id} className="partner-card">
            <img src={partner.image} alt={partner.name} className="partner-image" />
            <h3 className="partner-name">{partner.name}</h3>
            <p className="partner-description">{partner.title}</p>
            <a href={partner.instagram} target="_blank" rel="noopener noreferrer" className="partner-subscribe-btn">
              Подписаться
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
