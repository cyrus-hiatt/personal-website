import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import "../styles/projects.css";

const Projects = () => {
  const { t } = useTranslation();
  const [animationData, setAnimationData] = useState(null);

  // Load the JSON animation from the public folder
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/images/construction-animation.json`)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <section id="projects" className="section">
      <Helmet>
        <title>{t("projects")} | Cyrus Hiatt</title>
      </Helmet>
      <h1>Projects</h1>
      <h2>Coming Soon...</h2>
      {animationData ? (
        <Lottie animationData={animationData} className="error-animation" />
      ) : (
        <p>Loading animation...</p>
      )}
    </section>
  );
};

export default Projects;
