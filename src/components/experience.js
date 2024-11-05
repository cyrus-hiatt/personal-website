import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import ProgressBar from "./progressbar";
import RoundProgressCircle from "./roundprogresscircle";
import "../styles/experience.css";

const Experience = () => {
  const { t } = useTranslation();
  const [isFirstHovered, setIsFirstHovered] = useState(true); // Set to true initially to keep the first item "active"

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

  const languages = [
    { label: t("english"), percentage: 100 },
    { label: t("danish"), percentage: 70 },
    { label: t("spanish"), percentage: 65 },
  ];

  const timeline = [
    {
      role: "Front-end Engineer",
      company: "Queue-it",
      location: t("copenhagen"),
      date: t("april2024Present"),
      description: t("experienceDescription1"),
    },
    {
      role: "Website Manager",
      company: "Queue-it",
      location: t("copenhagen"),
      date: t("january2023April2024"),
      description: t("experienceDescription2"),
    },
    {
      role: "Digital Marketing Specialist",
      company: "Queue-it",
      location: t("copenhagen"),
      date: t("november2018January2023"),
      description: t("experienceDescription3"),
    },
    {
      role: t("differentRoles"),
      company: "Practis, Inc and Webstreak",
      location: "Charlotte, NC and Raleigh-Durham, NC",
      date: t("june2014October2018"),
      description: t("experienceDescription4"),
    },
    {
      role: "Senior Marketing Associate",
      company: "Ayima",
      location: "Raleigh-Durham, NC",
      date: t("august2011June2014"),
      description: t("experienceDescription4"),
    },
  ];

  return (
    <section id="experience" className="section">
      <Helmet>
        <title>{t("experience")} | Cyrus Hiatt</title>
      </Helmet>
      <h2>My Experience</h2>

      {/* Timeline Section */}
      <div className="timeline">
        {timeline.map((entry, index) => {
          const isFirstItem = index === 0;

          return (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
                isFirstItem && isFirstHovered ? "hovered" : ""
              }`}
              onMouseEnter={() => !isFirstItem && setIsFirstHovered(false)}
              onMouseLeave={() => !isFirstItem && setIsFirstHovered(true)}
            >
              <div className="timeline-marker"></div>
              <div
                className={`timeline-content ${
                  isFirstItem && isFirstHovered ? "hovered" : ""
                }`}
              >
                <h3>{entry.role}</h3>
                <h4>
                  {entry.company} - {entry.location}
                </h4>
                <span>{entry.date}</span>
                <p>{entry.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Skills and Languages */}
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
