// src/components/Home.js
import React from "react";
import Button from "./button";
import "../styles/button.css";
import "../styles/home.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="section">
      <div className="intro-container">
        <div className="intro-row">
          <div className="intro-text">
            <h1>{t("welcome")}</h1>
            <p>{t("description")}</p>
            <Button className="button-red">
              <img
                src={`${process.env.PUBLIC_URL}/images/linkedin-icon.svg`}
                alt="LinkedIn Icon"
                className="social-icon"
              />
              My LinkedIn
            </Button>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/copenhagen-background.jpg`}
            alt="Copenhagen"
            className="home-pic"
          />
        </div>
        <div className="cloud-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/cloud-small.webp`}
            alt="Small Cloud"
            className="cloud-small f"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/cloud-small.webp`}
            alt="Small Cloud"
            className="cloud-small s"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/cloud-large.webp`}
            alt="Small Cloud"
            className="cloud-large f"
          />
        </div>
      </div>
      <div id="about" className="section">
        <h2>{t("about")}</h2>
        <div className="about-container">
          <div className="about-row">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile-picture.jpg`}
              alt="Cyrus Hiatt"
              className="profile-pic"
            />
            <div className="about-text">
              <p>{t("aboutDesc")}</p>
              <p>{t("aboutDesc2")}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="tech" className="section">
        <h3>Front-end Technologies</h3>
        <div className="tech-container">
          <div className="tech-row">
            <div className="tech-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/react-icon.svg`}
                alt="React Icon"
                className="tech-icon"
              />
              <span className="tech-text">React/js</span>
            </div>
            <div className="tech-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/js-icon.svg`}
                alt="JavaScript Icon"
                className="tech-icon"
              />
              <span className="tech-text">JavaScript</span>
            </div>
            <div className="tech-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/css-icon.svg`}
                alt="CSS Icon"
                className="tech-icon"
              />
              <span className="tech-text">CSS</span>
            </div>
            <div className="tech-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/bootstrap-logo.svg`}
                alt="Bootstrap Icon"
                className="tech-icon"
              />
              <span className="tech-text">Bootstrap</span>
            </div>
            <div className="tech-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/git-icon.svg`}
                alt="Git Icon"
                className="tech-icon"
              />
              <span className="tech-text">Git</span>
            </div>
          </div>
        </div>
        <h3>Design Tools</h3>
        <div className="tech-container">
          <div className="tech-row">
            <div className="tech-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/photoshop-logo.svg`}
                alt="React Icon"
                className="tech-icon"
              />
              <span className="tech-text">Adobe Photoshop</span>
            </div>
            <div className="tech-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/figma-logo.svg`}
                alt="JavaScript Icon"
                className="tech-icon"
              />
              <span className="tech-text">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
