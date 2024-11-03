import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <section id="contact" class="section">
        <h2>{t("contactTitle")}</h2>
        <p>{t("contactSecondary")}</p>
        <ul>
          <li>
            <a href="your-linkedin-profile" target="_blank">
              <img
                src={`${process.env.PUBLIC_URL}/images/linkedin-icon.svg`}
                alt="LinkedIn Icon"
                class="social-icon"
              />
            </a>
          </li>
          <li>
            <a href="your-github-profile" target="_blank">
              <img
                src={`${process.env.PUBLIC_URL}/images/github-icon.svg`}
                alt="Github Icon"
                class="social-icon"
              />
            </a>
          </li>
          <li>
            <a href="mailto:cehiatt87@gmail.com">
              <img
                src={`${process.env.PUBLIC_URL}/images/email-icon.svg`}
                alt="Mail Icon"
                class="social-icon"
              />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
