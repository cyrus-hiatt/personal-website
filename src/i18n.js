// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Hi, I'm Cyrus",
        description: "Front-End Developer based in Copenhagen, Denmark",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
        home: "Home",
        contactTitle: "Contact me",
        contactSecondary:
          "Let's get in touch! You can find me on LinkedIn, GitHub, or email me directly.",
        about: "About me",
        my: "My",
        aboutDesc:
          "As a Front-end Engineer with a solid foundation in SEO and Digital Marketing, I bring a user-centered perspective to every project. I closely analyze audience needs and behaviors to inform my UX/UI design, ensuring each interaction is intuitive and engaging. From initial concept discussions with stakeholders to final design implementation, I focus on creating solutions that enhance user experience and align with strategic goals.",
        aboutDesc2:
          "With over six years of professional experience, including roles in front-end development and website optimization, I have developed expertise in JavaScript, Umbraco, and various front-end technologies. I’ve successfully managed website performance and SEO projects, collaborated across design and content teams, and supported critical KPIs. I prioritize clean, efficient code and a responsive design approach, aiming to deliver fast, accessible, and visually appealing web applications.",
      },
    },
    da: {
      translation: {
        welcome: "Hej, jeg er Cyrus",
        description: "Frontend-udvikler baseret i København, Danmark",
        projects: "Projekter",
        experience: "Erfaring",
        contact: "Kontakt",
        home: "Hjem",
        contactTitle: "Kontakt mig",
        contactSecondary:
          "Lad os komme i kontakt! Du kan finde mig på LinkedIn, GitHub eller sende mig en e-mail direkte.",
        about: "Om mig",
        my: "Min",
        aboutDesc:
          "As a Front-end Engineer with a solid foundation in SEO and Digital Marketing, I bring a user-centered perspective to every project. I closely analyze audience needs and behaviors to inform my UX/UI design, ensuring each interaction is intuitive and engaging. From initial concept discussions with stakeholders to final design implementation, I focus on creating solutions that enhance user experience and align with strategic goals.",
        aboutDesc2:
          "With over six years of professional experience, including roles in front-end development and website optimization, I have developed expertise in JavaScript, Umbraco, and various front-end technologies. I’ve successfully managed website performance and SEO projects, collaborated across design and content teams, and supported critical KPIs. I prioritize clean, efficient code and a responsive design approach, aiming to deliver fast, accessible, and visually appealing web applications.",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
