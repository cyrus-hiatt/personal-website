import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/nav.css";

function Nav() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    localStorage.setItem("language", lang);

    // Update the URL based on the selected language
    navigate(lang === "da" ? "/da" : "/en");
    setIsOpen(false); // Close the menu when changing languages
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    document.documentElement.lang = savedLanguage;

    // Check if we need to navigate only if we are not on the correct page
    if (window.location.pathname === "/") {
      navigate(savedLanguage === "da" ? "/da" : "/en");
    }
  }, [i18n, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isEnglish = i18n.language === "en";
  const isDanish = i18n.language === "da";

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <Link to={isEnglish ? "/en" : "/da"}>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="logo"
          className="logo"
        />
      </Link>
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
              <Link to={isEnglish ? "/en" : "/da"} onClick={toggleMenu}>
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                to={isEnglish ? "/en/projects" : "/da/projekter"}
                onClick={toggleMenu}
              >
                {t("projects")}
              </Link>
            </li>
            <li>
              <Link
                to={isEnglish ? "/en/experience" : "/da/erfaring"}
                onClick={toggleMenu}
              >
                {t("experience")}
              </Link>
            </li>
            <li>
              <Link
                to={isEnglish ? "/en/contact" : "/da/kontakt"}
                onClick={toggleMenu}
              >
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
