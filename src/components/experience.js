// src/components/Experience.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import ProgressBar from "./progressbar";
import RoundProgressCircle from "./roundprogresscircle"; // Import the new component
import "../styles/experience.css";

const Experience = () => {
  const { t } = useTranslation();

  // Define your technologies and their percentages
  const experiences = [
    { label: "CSS", percentage: 95 },
    { label: "JavaScript", percentage: 90 },
    { label: "Bootstrap", percentage: 80 },
    { label: "JQuery", percentage: 70 },
    { label: "React", percentage: 45 },
    { label: "Adobe Photoshop", percentage: 35 },
    { label: "Figma", percentage: 35 },
    { label: "C#", percentage: 30 },
    { label: "Git", percentage: 30 },
  ];

  // Define your languages and their percentages
  const languages = [
    { label: "English", percentage: 100 },
    { label: "Danish", percentage: 70 },
    { label: "Spanish", percentage: 65 },
  ];

  return (
    <section id="experience" className="section">
      <Helmet>
        <title>{t("experience")} | Cyrus Hiatt</title>
      </Helmet>
      <h2>My Experience</h2>
      <div className="experience-container">
        <div className="experience-column">
          {experiences.slice(0, 5).map((exp, index) => (
            <ProgressBar
              key={index}
              label={exp.label}
              percentage={exp.percentage}
            />
          ))}
        </div>
        <div className="experience-column">
          {experiences.slice(5).map((exp, index) => (
            <ProgressBar
              key={index + 5}
              label={exp.label}
              percentage={exp.percentage}
            />
          ))}
        </div>
      </div>
      <div className="languages-container">
        {languages.map((lang, index) => (
          <RoundProgressCircle
            key={index}
            label={lang.label}
            percentage={lang.percentage}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
