import "./styles/style.css";
import "./styles/fonts.css";
import React, { useEffect, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Nav from "./components/nav";
import Footer from "./components/footer";
import ThemeToggle from "./components/themetoggle";
import Spinner from "./components/spinner";

// Lazy load your components
const Home = React.lazy(() => import("./components/home"));
const Projects = React.lazy(() => import("./components/projects"));
const Experience = React.lazy(() => import("./components/experience"));
const Contact = React.lazy(() => import("./components/contact"));
const NotFound = React.lazy(() => import("./components/notfound"));

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  const setLanguageFromPath = (path) => {
    const lang = path.includes("/da") ? "da" : "en";
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    setLanguageFromPath(location.pathname);
    document.documentElement.lang = i18n.language;
  }, [location.pathname, i18n]);

  return (
    <div className="app-container">
      <Nav />
      <div className="content">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Navigate to="/en" />} />
            <Route path="/en" element={<Home />} />
            <Route path="/en/projects" element={<Projects />} />
            <Route path="/en/experience" element={<Experience />} />
            <Route path="/en/contact" element={<Contact />} />
            <Route path="/da" element={<Home />} />
            <Route path="/da/projekter" element={<Projects />} />
            <Route path="/da/erfaring" element={<Experience />} />
            <Route path="/da/kontakt" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <ThemeToggle />
      <Footer />
    </div>
  );
}

export default App;
