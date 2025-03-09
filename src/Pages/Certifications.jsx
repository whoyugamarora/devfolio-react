import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const Certifications = () => {
    // List of badge IDs
    const badgeIDs = [
        "1af8e362-1898-4522-83be-cb7516f99d09",
        "46754ba4-a2d9-4c22-98c8-c0411ce82071",
        "4de2de15-f1ec-478c-b9fc-0d328865c6c3",
        "14e17d5f-d66f-407a-b394-36e6f5d9ecfe",
        "9f0e9bb6-1a18-404b-9bb6-5cdb82f462cd",
        "ba163306-6936-4df4-959c-529950248eab",
        "9f0063e2-4e3a-447c-96d6-53199e3c6919",
        "1606c1e0-83c7-4a97-8a4e-8ab45788173e",
        "d369258f-ac42-4997-b4f4-639b800b78e7",
        "d80643c4-c56d-47b5-9241-7f8b094e7a88",
        "769e0aaf-5a6d-48c1-8e43-1c44c508d563",
        "caa43853-3c12-426c-9a7c-a6aa3d326343",
    ];

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    // Load the Credly embed script after the component is mounted
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        script.onload = () => console.log("Credly script loaded");
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup the script on unmount
        };
    }, []);

    return (
        <div className={`transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <section className="py-16 bg-gray-100 min-h-screen">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                    My Certifications
                </h2>
                <div className="rounded-xl shadow-lg p-8 mx-8 mb-4 bg-white border-t-4 border-green-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <ul className="list-disc list-inside text-gray-800 space-y-3">
                        <li className="font-bold text-lg text-green-600 list-none mb-4">
                            Dean's List UFV
                        </li>
                        <li className="text-sm"><span className="font-semibold">2020: </span>Winter 2020, Fall 2020</li>
                        <li className="text-sm"><span className="font-semibold">2021: </span>Winter 2021</li>
                        <li className="text-sm"><span className="font-semibold">2024: </span>Winter 2024, Fall 2024</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-8xl mx-auto px-8 dark:bg-gray-100">
                    {badgeIDs.map((badgeID, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration 300 ease-in-out"
                        >
                            {/* Embed Code for Each Badge */}
                            <div
                                data-iframe-width="600"
                                data-iframe-height="250"
                                data-share-badge-id={badgeID}
                                data-share-badge-host="https://www.credly.com"
                            ></div>
                            <script
                                type="text/javascript"
                                async
                                src="https://cdn.credly.com/assets/utilities/embed.js"
                            ></script>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Certifications;
