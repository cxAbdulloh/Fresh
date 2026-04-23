import React from "react";
import "./PartnersSection.css";
import Shakhriyor from "../../assets/Partners/Shakhriyor.PNG";
import Abdurahim from "../../assets/Partners/abdurahim_grid_aziz_tolaganov.PNG";
import Aleksandr from "../../assets/Partners/aleksandr_orlov.PNG";
import Bekhzodbeck from "../../assets/Partners/bekhzodbeck.PNG";
import BonuIkromova from "../../assets/Partners/bonu_ikromova.PNG";
import Choynakningqopqogi from "../../assets/Partners/choynakningqopqogi.PNG";
import DavronVahobov from "../../assets/Partners/davron_vahobov.PNG";
import GulomnNasriddinov from "../../assets/Partners/gulom_nasriddinov.PNG";
import Ibrohim from "../../assets/Partners/ibrohim.PNG";
import MassaShukhrat from "../../assets/Partners/massa_shukhrat_allayarov.PNG";
import RashidKhalikov from "../../assets/Partners/rashid_khalikov.PNG";
import SaadullaAbdullayev from "../../assets/Partners/saadulla_abdullayev_texnoplov.PNG";
import Ulugbek from "../../assets/Partners/ulugbek.PNG";
import UlugbekQozogiston from "../../assets/Partners/ulugbek_qozogiston.PNG";
import UsomVosiyev from "../../assets/Partners/usoma_vosiyev.PNG";

const PartnersSection = ({ t }) => {
  const partners = [
    { id: 1, name: "Shakhriyor", title: "Shakhriyor", image: Shakhriyor, instagram: "https://instagram.com" },
    { id: 2, name: "ulugbek_qozogiston", title: "ulugbek_qozogiston", image: UlugbekQozogiston, instagram: "https://instagram.com" },
    { id: 3, name: "rashid_khalikov", title: "rashid_khalikov", image: RashidKhalikov, instagram: "https://instagram.com" },
    { id: 4, name: "saadulla_abdullayev_texnoplov", title: "saadulla_abdullayev_texnoplov", image: SaadullaAbdullayev, instagram: "https://instagram.com" },
    { id: 5, name: "ulugbek", title: "ulugbek", image: Ulugbek, instagram: "https://instagram.com" },
    { id: 6, name: "bonu_ikromova", title: "bonu_ikromova", image: BonuIkromova, instagram: "https://instagram.com" },
    { id: 7, name: "abdurahim_grid_aziz_tolaganov", title: "abdurahim_grid_aziz_tolaganov", image: Abdurahim, instagram: "https://instagram.com" },
    { id: 8, name: "gulom_nasriddinov", title: "gulom_nasriddinov", image: GulomnNasriddinov, instagram: "https://instagram.com" },
    { id: 9, name: "aleksandr_orlov", title: "aleksandr_orlov", image: Aleksandr, instagram: "https://instagram.com" },
    { id: 10, name: "bekhzodbeck", title: "bekhzodbeck", image: Bekhzodbeck, instagram: "https://instagram.com" },
    { id: 11, name: "choynakningqopqogi", title: "choynakningqopqogi", image: Choynakningqopqogi, instagram: "https://instagram.com" },
    { id: 12, name: "davron_vahobov", title: "davron_vahobov", image: DavronVahobov, instagram: "https://instagram.com" },
    { id: 13, name: "ibrohim", title: "ibrohim", image: Ibrohim, instagram: "https://instagram.com" },
    { id: 14, name: "massa_shukhrat_allayarov", title: "massa_shukhrat_allayarov", image: MassaShukhrat, instagram: "https://instagram.com" },
    { id: 15, name: "usoma_vosiyev", title: "usoma_vosiyev", image: UsomVosiyev, instagram: "https://instagram.com" }
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
