import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("contactTitle")}</h2>
      <p>Email: cehiatt87@gmail.com</p>
      <p>LinkedIn: </p>
      <p>GitHub: </p>
    </div>
  );
};

export default Contact;
