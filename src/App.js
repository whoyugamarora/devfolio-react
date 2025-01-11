import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import MainSection from "./Components/MainSection";
import AboutSection from "./Components/AboutSection";
import SkillsSection from "./Components/SkillsSection";
import ProjectsSection from "./Components/ProjectsSection";
import ExperienceSection from "./Components/ExperienceSection";
import Footer from "./Components/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
};

export default App;
