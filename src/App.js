import "./styles/style.css";
import "./styles/fonts.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import Nav from "./components/nav";
import Home from "./components/home";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ThemeToggle from "./components/themetoggle";
import useScrollVisibility from "./utils/useScrollVisibility";

function App() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  /* useScrollVisibility();
   */
  return (
    <Router>
      <div className="app-container">
        <Nav changeLanguage={changeLanguage} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <ThemeToggle />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
