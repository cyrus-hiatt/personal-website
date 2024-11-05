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
        name: "Name",
        subject: "Subject",
        message: "Message",
        contactTitle: "Contact me",
        contactSecondary:
          "Let's get in touch! You can find me on LinkedIn, GitHub, or email me directly.",
        about: "About me",
        my: "My",
        aboutDesc:
          "As a Front-end Engineer with over six years of experience, I specialize in creating intuitive and engaging user experiences. My background in SEO and Digital Marketing allows me to understand audience needs, ensuring that every project aligns with both user expectations and strategic goals.",
        aboutDesc2:
          "Skilled in JavaScript and various front-end technologies, I have successfully led initiatives to optimize website performance and enhance UX/UI design. I prioritize clean code and responsive design, aiming to deliver fast and accessible web applications that drive results.",
        connect: "Connect with me",
        differentRoles: "Various roles in Digital Marketing",
        copenhagen: "Copenhagen, Denmark",
        april2024Present: "April 2024 - Present",
        january2023April2024: "January 2023 - April 2024",
        november2018January2023: "November 2018 - January 2023",
        february2018October2023: "February 2018 - October 2023",
        january2017February2018: "January 2017 - February 2018",
        june2014October2018: "June 2014 - October 2018",
        august2011June2014: "August 2011 - June 2014",
        experienceDescription1:
          "Developing interactive UIs and optimizing website performance.",
        experienceDescription2:
          "Designed user-friendly interfaces and collaborated with developers on web projects.",
        experienceDescription3:
          "Managed website content and user interfaces, improving UX through A/B testing.",
        experienceDescription4:
          "Held multiple positions focusing on user experience, SEO, and website coordination.",
        experienceDescription5:
          "Led marketing campaigns with a focus on digital channels, improving web presence.",
        danish: "Danish",
        english: "English",
        spanish: "Spanish",
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
        name: "Navn",
        subject: "Emne",
        message: "Besked",
        contactTitle: "Kontakt mig",
        contactSecondary:
          "Lad os komme i kontakt! Du kan finde mig på LinkedIn, GitHub eller sende mig en e-mail direkte.",
        about: "Om mig",
        my: "Min",
        aboutDesc:
          "Som Front-end Engineer med over seks års erfaring specialiserer jeg mig i at skabe intuitive og engagerende brugeroplevelser. Min baggrund inden for SEO og digital marketing giver mig mulighed for at forstå publikums behov, hvilket sikrer, at hvert projekt er i overensstemmelse med både brugerforventninger og strategiske mål.",
        aboutDesc2:
          "Jeg er dygtig i JavaScript og forskellige front-end teknologier og har med succes ledet initiativer til at optimere webstedsydelse og forbedre UX/UI design. Jeg prioriterer ren kode og responsivt design for at levere hurtige og tilgængelige webapplikationer, der skaber resultater.",
        connect: "Kom i kontakt",
        differentRoles: "Forskellige stillinger i Digital Marketing",
        seniorMarketingAssociate: "Senior Marketing Associate",
        copenhagen: "København, Danmark",
        april2024Present: "April 2024 - Nu",
        january2023April2024: "Januar 2023 - April 2024",
        november2018January2023: "November 2018 - Januar 2023",
        february2018October2023: "Februar 2018 - Oktober 2023",
        january2017February2018: "Januar 2017 - Februar 2018",
        june2014October2018: "Juni 2014 - Oktober 2018",
        august2011June2014: "August 2011 - Juni 2014",
        experienceDescription1:
          "Udvikling af interaktive brugerflader og optimering af webstedets ydeevne.",
        experienceDescription2:
          "Designede brugervenlige grænseflader og samarbejdede med udviklere om webprojekter.",
        experienceDescription3:
          "Administrerede webstedsindhold og brugergrænseflader, forbedrede UX gennem A/B-test.",
        experienceDescription4:
          "Har haft flere stillinger med fokus på brugeroplevelse, SEO og webkoordination.",
        experienceDescription5:
          "Ledede marketingkampagner med fokus på digitale kanaler, hvilket forbedrede webtilstedeværelsen.",
        danish: "Dansk",
        english: "Engelsk",
        spanish: "Spansk",
      },
    },
  },
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
