import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon, faEnvelope, faCode  } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-900 sticky top-0 shadow-md">
      {/* Social Icons */}
      <div className="flex space-x-6">
        <a
          href="https://github.com/whoyugamarora"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faGithub} className="text-lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/yugam-arora-653a241a7/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
        </a>
        <a
          href="./files/Resume - Coop.pdf"
          aria-label="Resume"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FontAwesomeIcon icon={faCode} className="text-lg" />
        </a>
        <a
          href="mailto:arorayugam85@yahoo.com"
          aria-label="Mail"
          className="hover:text-red-500"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
        </a>
      </div>

      {/* Theme Toggle */}
      <div onClick={toggleDarkMode} className="cursor-pointer hover:text-yellow-400">
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-xl" />
      </div>
    </nav>
  );
};

export default Navbar;
