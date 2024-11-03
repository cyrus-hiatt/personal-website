// src/components/ThemeToggle.js
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get the saved theme preference from localStorage, or default to false if none is found
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    // Set the theme based on the darkMode state
    document.body.classList.toggle("dark-mode", darkMode);

    // Save the user’s theme preference in localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prevMode) => !prevMode);

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? "🌞" : "🌙"} {/* Replace with any icon */}
    </div>
  );
};

export default ThemeToggle;
