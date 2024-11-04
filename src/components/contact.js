import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      <h1>{t("contactTitle")}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row-1">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-subject">
          <label>
            Subject: {/* Added subject field */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-message">
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit" className="form-button">
          Send
        </button>
        <p>{status}</p>
      </form>
    </div>
  );
};

export default Contact;
