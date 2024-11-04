import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/nav.css";

function Nav() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    setIsOpen(false); // Close the menu when changing languages
  };

  const isEnglish = i18n.language === "en";
  const isDanish = i18n.language === "da";

  return (
    <header>
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
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}{" "}
      {/* Overlay for menu */}
    </header>
  );
}

export default Nav;
