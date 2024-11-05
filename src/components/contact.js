import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [focusedInput, setFocusedInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(""); // Clear focus state when input loses focus
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_xww1gth",
        "template_6kk330j",
        formData,
        "xuN7kdFp3JjVOA3Be"
      )
      .then(() => {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus("Error sending message.");
      });
  };

  return (
    <div id="contactPage">
      <Helmet>
        <title>{t("contact")} | Cyrus Hiatt</title>
      </Helmet>
      <h1>{t("contactTitle")}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row-1">
          <label>
            {t("name")}:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
              required
              style={{
                borderBottom:
                  focusedInput === "name" ? "2px solid #fff" : "1px solid #fff",
              }}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              required
              style={{
                borderBottom:
                  focusedInput === "email"
                    ? "2px solid #fff"
                    : "1px solid #fff",
              }}
            />
          </label>
        </div>
        <div className="form-subject">
          <label>
            {t("subject")}:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => handleFocus("subject")}
              onBlur={handleBlur}
              required
              style={{
                borderBottom:
                  focusedInput === "subject"
                    ? "2px solid #fff"
                    : "1px solid #fff",
              }}
            />
          </label>
        </div>
        <div className="form-message">
          <label>
            {t("message")}:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              required
              style={{
                borderBottom:
                  focusedInput === "message"
                    ? "2px solid #fff"
                    : "1px solid #fff",
              }}
            />
          </label>
        </div>
        <button type="submit" className="button-red">
          Send
        </button>
        <p>{status}</p>
      </form>
    </div>
  );
};

export default Contact;
