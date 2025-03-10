import React, {useState, useEffect} from "react";
import Navbar from "../Components/Navbar";

const References = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const references = [
        {
            name: "Kevin Renso",
            title: "Instructor, School of Computing ",
            company: "University of The Fraser Valley",
            email: "kevin.renso@ufv.ca",
            relationship: "Professor",
        },
        {
            name: "Talia Q",
            title: "Associate Professor, School of Computing",
            company: "University of The Fraser Valley",
            email: "talia.q@ufv.ca",
            relationship: "Professor",
        },
        {
            name: "Anthonese Mitchell",
            title: "Senior IT Administrator",
            company: "Carbon Engineering ULC",
            email: "anthonesem@carbonengineering.com",
            relationship: "Team Lead",
        },
    ];

    return (
        <div className={`transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <section className="py-12 bg-gray-100 dark:bg-gray-900" style={{minHeight: "calc(100vh - 3.5rem)"}}>
                <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-8">
                    References
                </h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                    {references.map((reference, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-t-4 border-green-500 hover:shadow-xl transition-transform hover:scale-105 duration-300 ease-in-out"
                        >
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                {reference.name}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-1 text-sm lg:text-md">
                                <strong>Title:</strong> {reference.title}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-1 text-sm lg:text-md">
                                <strong>Location:</strong> {reference.company}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-1 text-sm lg:text-md">
                                <strong>Email:</strong>{" "}
                                <a
                                    href={`mailto:${reference.email}`}
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    {reference.email}
                                </a>
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-md">
                                <strong>Relationship:</strong> {reference.relationship}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default References;
