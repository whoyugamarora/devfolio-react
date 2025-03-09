import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown, faFileImport } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {

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
        <div className={`transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <section className="py-16 px-3 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
                    <div className="flex justify-between items-center mb-8"> 
                        <h2 className="text-4xl font-extrabold text-gray-800 text-center dark:text-white flex-grow">
                            Resume
                        </h2>
                        <a href="/Resume-IT.pdf" download>
                            <button><FontAwesomeIcon icon={faFileArrowDown} size="lg"/></button>
                        </a>
                    </div>
                    <iframe
                        src="/Resume-IT.pdf"
                        width="100%"
                        height="900px"
                        title="Resume Preview"
                    />
                </div>

            </section >
        </div >
    );
}

export default Resume;