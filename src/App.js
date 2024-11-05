import "./styles/style.css";
import "./styles/fonts.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import Nav from "./components/nav";
import Home from "./components/home";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ThemeToggle from "./components/themetoggle";

function App() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="app-container">
        <Nav changeLanguage={changeLanguage} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/en" />} />{" "}
            <Route path="/en" element={<Home />} />
            <Route path="/en/projects" element={<Projects />} />
            <Route path="/en/experience" element={<Experience />} />
            <Route path="/en/contact" element={<Contact />} />
            <Route path="/da" element={<Home />} />
            <Route path="/da/projekter" element={<Projects />} />
            <Route path="/da/erfaring" element={<Experience />} />
            <Route path="/da/kontakt" element={<Contact />} />
          </Routes>
        </div>
        <ThemeToggle />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
