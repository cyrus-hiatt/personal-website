// src/components/Skills.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <Helmet>
        <title>{t("projects")} | Cyrus Hiatt</title>
      </Helmet>
      <h2>My Skills</h2>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>Umbraco CMS</li>
        <li>Responsive Web Design</li>
        <li>Website Performance Optimization</li>
        <li>SEO</li>
        <li>UX/UI Improvement</li>
        <li>Cross-Browser Compatibility</li>
        <li>Backend Integration</li>
      </ul>
    </section>
  );
};

export default Projects;
