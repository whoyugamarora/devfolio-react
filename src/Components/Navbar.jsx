import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon, faEnvelope, faCode, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Mission from "../Pages/Mission";
import { Link } from "react-router-dom";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 sticky top-0 shadow-md z-20">
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

            {/* Large Screen Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-gray-800 dark:text-gray-200">
                <Link to="/" className="hover:text-green-700">
                    Home
                </Link>
                <Link to="/mission" className="hover:text-green-700">
                    Mission
                </Link>
                <Link to="/opportunity" className="hover:text-green-700">
                    Opportunity
                </Link>
                <Link to="/certifications" className="hover:text-green-700">
                    Certifications
                </Link>
                <Link to="/references" className="hover:text-green-700">
                    References
                </Link>
            </div>

            {/* Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
                <div
                    onClick={toggleDarkMode}
                    className="cursor-pointer hover:text-yellow-400"
                >
                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-xl" />
                </div>
            </div>

            {/* Small Screen Dropdown Menu */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-gray-800 dark:text-gray-200 hover:text-green-700"
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="text-2xl" />
                </button>
                {isMenuOpen && (
                    <div className="absolute left-0 top-16 w-64 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 shadow-md rounded-md z-30">
                        <div className="flex flex-col p-4 space-y-4">
                            <Link to='/' className="hover:text-green-700" onClick={toggleMenu}>
                                Home
                            </Link>
                            <Link to="/mission" className="hover:text-green-700" onClick={toggleMenu}>
                                Mission
                            </Link>
                            <Link to="/opportunity" className="hover:text-green-700">
                                Opportunity
                            </Link>
                            <Link to="/certifications" className="hover:text-green-700">
                                Certifications
                            </Link>
                            <Link to="/references" className="hover:text-green-700">
                                References
                            </Link>
                            <div
                                onClick={toggleDarkMode}
                                className="cursor-pointer hover:text-yellow-500 flex items-center space-x-2"
                            >
                                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-xl" />
                                <span>Toggle Theme</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
