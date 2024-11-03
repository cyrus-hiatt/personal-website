// src/components/Experience.js
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2>My Experience</h2>

      <div className="experience-item">
        <h3>Front-End Engineer</h3>
        <p>
          <strong>April 2024 - Present | Copenhagen, Denmark | Hybrid</strong>
        </p>
        <p>
          Leveraging JavaScript, Umbraco, and other technologies to deliver
          high-quality front-end solutions.
        </p>
        <ul>
          <li>Developing responsive and user-friendly web applications.</li>
          <li>
            Collaborating with cross-functional teams to enhance user
            experience.
          </li>
          <li>
            Utilizing modern JavaScript frameworks and best practices for
            optimal performance.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Website Manager</h3>
        <p>
          <strong>January 2023 - April 2024 | Copenhagen, Denmark</strong>
        </p>
        <ul>
          <li>
            <strong>Website Optimization:</strong> Enhanced website performance,
            SEO, and user engagement.
          </li>
          <li>
            <strong>Supporting Content and Design Teams:</strong> Collaborated
            to improve user experience.
          </li>
          <li>
            <strong>Umbraco Training:</strong> Trained team members on best
            practices.
          </li>
          <li>
            <strong>Front-End Web Development:</strong> Ensured responsive
            layouts across devices.
          </li>
          <li>
            <strong>Backend Integration:</strong> Integrated design with backend
            functionality.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
