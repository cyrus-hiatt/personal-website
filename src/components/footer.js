import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <section id="contact" className="section">
        <h2>{t("connect")}</h2>
        <p>{t("contactSecondary")}</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/cyrus-hiatt/" target="_blank">
              <img
                src={`${process.env.PUBLIC_URL}/images/linkedin-icon.svg`}
                alt="LinkedIn Icon"
                className="social-icon"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/cyrus-hiatt" target="_blank">
              <img
                src={`${process.env.PUBLIC_URL}/images/github-icon.svg`}
                alt="Github Icon"
                className="social-icon"
              />
            </a>
          </li>
          <li>
            <a href="mailto:cehiatt87@gmail.com">
              <img
                src={`${process.env.PUBLIC_URL}/images/email-icon.svg`}
                alt="Mail Icon"
                className="social-icon"
              />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
