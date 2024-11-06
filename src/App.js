import "./styles/style.css";
import "./styles/fonts.css";
import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation, // Hook to track location changes
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
import NotFound from "./components/notfound";

function App() {
  const { t } = useTranslation();
  const location = useLocation(); // Track location changes
  const { i18n } = useTranslation(); // Access the i18n instance

  // Function to set language based on the current route
  const setLanguageFromPath = (path) => {
    const lang = path.includes("/en")
      ? "en"
      : path.includes("/da")
      ? "da"
      : "en";
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    // Change the language whenever the path changes
    setLanguageFromPath(location.pathname);
    document.documentElement.lang = i18n.language;
  }, [location.pathname, i18n]); // This will trigger on every route change

  return (
    <div className="app-container">
      <Nav />
      <div className="content">
        <Routes>
          {/* Redirect to /en if the root path is visited */}
          <Route path="/" element={<Navigate to="/en" />} />
          {/* For /en path */}
          <Route path="/en" element={<Home language="en" />} />
          <Route path="/en/projects" element={<Projects />} />
          <Route path="/en/experience" element={<Experience />} />
          <Route path="/en/contact" element={<Contact />} />
          {/* For /da path */}
          <Route path="/da" element={<Home language="da" />} />
          <Route path="/da/projekter" element={<Projects />} />
          <Route path="/da/erfaring" element={<Experience />} />
          <Route path="/da/kontakt" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <ThemeToggle />
      <Footer />
    </div>
  );
}

export default App;
