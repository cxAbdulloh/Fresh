import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Map from './Components/Map/Map'
import Footer from './Components/Footer/Footer'
import DualImageSection from './Components/DualImageSection/DualImageSection'
import OverlaySection from './Components/OverlaySection/OverlaySection'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import PartnersSection from './Components/PartnersSection/PartnersSection'
import FooterBanner from './Components/FooterBanner/FooterBanner'

const translations = {
  ru: {
    nav: {
      home: "Главная",
      cooperation: "Сотрудничество",
      distributors: "Дистрибьюторы",
      language: "Язык",
    },
    hero: {
      credit: "BY LATIPOV JAHONGIR",
    },
    overlay: {
      leftLabel: "ХУРМА",
      rightLabel: "АНОР",
    },
    products: {
      leftKicker: "xurmofresh",
      leftTitle: "Какие эмоции дает xurmofresh",
      leftText: "Тепло, уют, мягкую сладость и чувство спокойного удовольствия.",
      rightKicker: "anarfresh",
      rightTitle: "Какие эмоции дает anarfresh",
      rightText: "Яркость, свежесть, энергию и насыщенное фруктовое настроение.",
    },
    partners: {
      title: "Партнеры",
      aria: "Место для партнеров",
    },
    map: {
      title: "Связь с дистрибьюторами по каждому региону",
      subtitle: "Нажмите на область",
      defaultRegionName: "Выберите регион",
      defaultRegionPhone: "Нажмите на область",
      regions: {
        Karakalpakstan: "Республика Каракалпакстан",
        Khorezm: "Хорезм",
        Navoi: "Навои",
        Bukhara: "Бухара",
        Samarkand: "Самарканд",
        Kashkadarya: "Кашкадарья",
        Surkhandarya: "Сурхандарья",
        Jizzakh: "Джизак",
        Sirdarya: "Сырдарья",
        Tashkent_Region: "Ташкент",
        Tashkent: "Ташкентская область",
        Namangan: "Наманган",
        Fergana: "Фергана",
        Andijan: "Андижан",
      },
    },
    footer: {
      instagram: "Instagram",
      contact: "Телефон",
      email: "Email",
      credit: "BY LATIPOV JAHONGIR",
      legal: "AnarFresh MCHJ. Все права защищены 2026",
      madeByPrefix: "Сайт сделан компанией",
      madeBySuffix: "",
      company: "LinkSoft",
    },
  },
  uz: {
    nav: {
      home: "Asosiy",
      cooperation: "Hamkorlik",
      distributors: "Distribyutorlar",
      language: "Til",
    },
    hero: {
      credit: "BY LATIPOV JAHONGIR",
    },
    overlay: {
      leftLabel: "XURMO",
      rightLabel: "ANOR",
    },
    products: {
      leftKicker: "xurmofresh",
      leftTitle: "xurmofresh qanday his beradi",
      leftText: "Iliq kayfiyat, qulaylik, mayin shirinlik va sokin zavq hissini beradi.",
      rightKicker: "anarfresh",
      rightTitle: "anarfresh qanday his beradi",
      rightText: "Yorqinlik, tetiklik, energiya va boy mevali kayfiyatni beradi.",
    },
    partners: {
      title: "Hamkorlar",
      aria: "Hamkorlar uchun joy",
    },
    map: {
      title: "Har bir viloyat distribyutorlari bilan aloqaga chiqish",
      subtitle: "Viloyat ustiga bosing",
      defaultRegionName: "Viloyatni tanlang",
      defaultRegionPhone: "Viloyat ustiga bosing",
      regions: {
        Karakalpakstan: "Qoraqalpog'iston R.",
        Khorezm: "Xorazm",
        Navoi: "Navoiy",
        Bukhara: "Buxoro",
        Samarkand: "Samarqand",
        Kashkadarya: "Qashqadaryo",
        Surkhandarya: "Surxondaryo",
        Jizzakh: "Jizzax",
        Sirdarya: "Sirdaryo",
        Tashkent_Region: "Toshkent shahri",
        Tashkent: "Toshkent viloyati",
        Namangan: "Namangan",
        Fergana: "Farg'ona",
        Andijan: "Andijon",
      },
    },
    footer: {
      instagram: "Instagram",
      contact: "Telefon",
      email: "Email",
      credit: "BY LATIPOV JAHONGIR",
      legal: "AnarFresh MCHJ. Barcha huquqlar himoyalangan 2026",
      madeByPrefix: "Sayt",
      madeBySuffix: "kompaniyasi tomonidan tayyorlandi",
      company: "LinkSoft",
    },
  },
  en: {
    nav: {
      home: "Home",
      cooperation: "Cooperation",
      distributors: "Distributors",
      language: "Language",
    },
    hero: {
      credit: "BY LATIPOV JAHONGIR",
    },
    overlay: {
      leftLabel: "PERSIMMON",
      rightLabel: "POMEGRANATE",
    },
    products: {
      leftKicker: "xurmofresh",
      leftTitle: "What emotions does xurmofresh give",
      leftText: "Warmth, comfort, soft sweetness and a calm feeling of pleasure.",
      rightKicker: "anarfresh",
      rightTitle: "What emotions does anarfresh give",
      rightText: "Brightness, freshness, energy and a rich fruity mood.",
    },
    partners: {
      title: "Partners",
      aria: "Space for partners",
    },
    map: {
      title: "Get in touch with distributors in every region",
      subtitle: "Click on a region",
      defaultRegionName: "Choose a region",
      defaultRegionPhone: "Click on a region",
      regions: {
        Karakalpakstan: "Republic of Karakalpakstan",
        Khorezm: "Khorezm",
        Navoi: "Navoi",
        Bukhara: "Bukhara",
        Samarkand: "Samarkand",
        Kashkadarya: "Kashkadarya",
        Surkhandarya: "Surkhandarya",
        Jizzakh: "Jizzakh",
        Sirdarya: "Sirdarya",
        Tashkent_Region: "Tashkent City",
        Tashkent: "Tashkent Region",
        Namangan: "Namangan",
        Fergana: "Fergana",
        Andijan: "Andijan",
      },
    },
    footer: {
      instagram: "Instagram",
      contact: "Phone",
      email: "Email",
      credit: "BY LATIPOV JAHONGIR",
      legal: "AnarFresh MCHJ. All rights reserved 2026",
      madeByPrefix: "Website made by",
      madeBySuffix: "",
      company: "LinkSoft",
    },
  },
};

const App = () => {
  const [language, setLanguage] = useState("ru");
  const t = translations[language];

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} t={t}/>
      <Hero t={t}/>
      <OverlaySection t={t}/>
      <Products t={t}/>
      <DualImageSection/>
      <PartnersSection t={t}/>
      <Map t={t}/>
      <FooterBanner/>
      <Footer t={t}/>
    </>
  )
}

export default App
