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
    { id: 1, name: "Shakhriyor", title: "O'zbekiston mashhur repperi", image: Shakhriyor, instagram: "https://instagram.com" },
    { id: 2, name: "Ulugbek Sharipov", title: "Qozog'iston biznesmeni", image: UlugbekQozogiston, instagram: "https://instagram.com" },
    { id: 3, name: "Rashid Khalikov", title: "O'zbekistonda hizmat ko'rsatgan san'atkor", image: RashidKhalikov, instagram: "https://instagram.com" },
    { id: 4, name: "Saadulla Abdullayev (Texnoplov)", title: "O'zbekistondagi eng taniqli texno blogerlardan biri", image: SaadullaAbdullayev, instagram: "https://instagram.com" },
    { id: 5, name: "Ulug'bek", title: "Mittivine jamoasi sardori Ulug'bek (Mitti.me)", image: Ulugbek, instagram: "https://instagram.com" },
    { id: 6, name: "Bonu Ikromova", title: "Mittivine jamoasi a'zosi", image: BonuIkromova, instagram: "https://instagram.com" },
    { id: 7, name: "Abdurahim Grid va Aziz To'laganov", title: "Mittivine jamoasi a'zolari", image: Abdurahim, instagram: "https://instagram.com" },
    { id: 8, name: "Gulomn Nasriddinov", title: "Mittivine jamoasi a'zosi", image: GulomnNasriddinov, instagram: "https://instagram.com" },
    { id: 9, name: "Aleksandr Orlov", title: "Rossiya va MDH miqyosidagi mashhur restoratori", image: Aleksandr, instagram: "https://instagram.com" },
    { id: 10, name: "Bekhzodbeck", title: "Taniqli avtobloger", image: Bekhzodbeck, instagram: "https://instagram.com" },
    { id: 11, name: "Sherzod Jalolov", title: "Choynakning qopqog'i loyihasi asoschisi", image: Choynakningqopqogi, instagram: "https://instagram.com" },
    { id: 12, name: "Davron Vahobov", title: "O'zbekiston Savdo Sanoat Palatasi rahbari", image: DavronVahobov, instagram: "https://instagram.com" },
    { id: 13, name: "Ibrohim va To'ti buvi", title: "autotuning_uz loyiha asoschisi va eng yoshi ulug' 98 yoshli bloger", image: Ibrohim, instagram: "https://instagram.com" },
    { id: 14, name: "Shukhrat Allayarov (Massa)", title: "O'zbekiston mashhur repperi", image: MassaShukhrat, instagram: "https://instagram.com" },
    { id: 15, name: "Usoma Vosiyev", title: "eng.arzoni loyiha asoschisi", image: UsomVosiyev, instagram: "https://instagram.com" }
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
