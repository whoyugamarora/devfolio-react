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
            name: "John Doe",
            title: "Senior Software Engineer",
            company: "Tech Solutions Inc.",
            email: "johndoe@example.com",
            phone: "(123) 456-7890",
        },
        {
            name: "Jane Smith",
            title: "Project Manager",
            company: "Innovatech",
            email: "janesmith@example.com",
            phone: "(987) 654-3210",
        },
        {
            name: "Michael Brown",
            title: "IT Consultant",
            company: "CyberSecure Corp.",
            email: "michaelbrown@example.com",
            phone: "(555) 123-4567",
        },
    ];

    return (
        <div>
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
                                <strong>Company:</strong> {reference.company}
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
                                <strong>Phone:</strong> {reference.phone}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default References;
