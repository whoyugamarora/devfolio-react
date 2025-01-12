import React, {useState, useEffect} from "react";
import Navbar from "../Components/Navbar";

const Mission = () => {

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
        <div>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <section id="mission" className="py-16 px-6 bg-gray-100 flex flex-col items-center justify-center dark:bg-gray-800" style={{ minHeight: "calc(100vh - 3.5rem)" }}>
                <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-8">
                    My Mission
                </h2>
                <div className="max-w-4xl mx-auto text-gray-700 dark:text-gray-200 text-md leading-relaxed">
                    <p className="italic text-center mb-6">
                        "To leverage my passion for technology and problem-solving to safeguard organizations against emerging cybersecurity threats, creating a secure digital landscape for individuals and businesses alike."
                    </p>
                    <p>
                        This mission reflects my dedication to becoming a cybersecurity analyst, a role that combines my technical expertise with my desire to protect and serve. I crafted this statement using the framework described in the TEDx Talk, “How to know your life purpose in 5 minutes,” by identifying my passion for technology, my skills in problem-solving, and my commitment to contributing to a safer digital world.
                    </p>
                    <p className="mt-4">
                        I believe that cybersecurity is not just about technical skills but also about understanding the human and organizational aspects of digital security. My process involves continuous learning, staying updated with evolving threats, and collaborating with others to implement effective, innovative solutions.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Mission;
