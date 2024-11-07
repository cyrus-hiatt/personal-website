import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/notfound.css";

function NotFound() {
  const { i18n } = useTranslation(); 
  const isEnglish = i18n.language === "en";

  return (
    <div className="notfound-container">
      <img
        src={`${process.env.PUBLIC_URL}/images/404-error.svg`}
        alt="404 error"
        className="error-image"
      />
      <Link to={isEnglish ? "/en" : "/da"}>Go back to Home</Link>
    </div>
  );
}

export default NotFound;
