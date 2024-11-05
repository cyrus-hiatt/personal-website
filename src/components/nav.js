import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/nav.css";

function Nav() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle based on previous state
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    localStorage.setItem("language", lang);
    setIsOpen(false); // Close the menu when changing languages
  };

  // Set the initial language on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"; // Default to 'en'
    i18n.changeLanguage(savedLanguage);
    document.documentElement.lang = savedLanguage; // Set the document language
  }, [i18n]);

  // Handle scroll event to set isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Set to true when scrolled
      } else {
        setIsScrolled(false); // Set to false when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isEnglish = i18n.language === "en";
  const isDanish = i18n.language === "da";

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      {" "}
      {/* Add class based on scroll state */}
      <a href="/" target="">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="logo"
          className="logo"
        />
      </a>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "active" : ""}`}></div>
        <div className={`line ${isOpen ? "active" : ""}`}></div>
        <div className={`line ${isOpen ? "active" : ""}`}></div>
      </div>
      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li className="language-switch">
            <div className="lang-buttons">
              <button
                className={isEnglish ? "active" : ""}
                onClick={() => changeLanguage("en")}
              >
                en
              </button>
              <button
                className={isDanish ? "active" : ""}
                onClick={() => changeLanguage("da")}
              >
                da
              </button>
            </div>
            <button className="close-button" onClick={toggleMenu}>
              X
            </button>
          </li>
          <div className="nav-container">
            <li>
              <Link to="/" onClick={toggleMenu}>
                {t("home")}
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>
                {t("projects")}
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={toggleMenu}>
                {t("experience")}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                {t("contact")}
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Nav;
