import React, {useState, useEffect} from "react";
import Navbar from "../Components/Navbar";

const Opportunity = () => {

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
            <section id="opportunity" className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-8">
                    The Opportunity
                </h2>
                <div className="max-w-4xl mx-auto text-gray-700 dark:text-gray-200 text-md leading-relaxed">
                    <p>
                        I am aspiring to become a Cybersecurity Analyst. Below is the detailed job posting from BCNET that closely aligns with my career aspirations:
                    </p>
                    <h3 className="mt-6 font-semibold">Position Overview:</h3>
                    <p className="mt-2">
                        BCNET is seeking a proactive and detail-oriented Cybersecurity Analyst to enhance its cybersecurity framework and protect critical digital assets. The analyst will work collaboratively with various teams to address security risks, respond to incidents, and ensure compliance with security policies.
                    </p>
                    <h3 className="mt-6 font-semibold">Key Responsibilities:</h3>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Monitoring and responding to security incidents to mitigate risks.</li>
                        <li>Analyzing security threats and identifying vulnerabilities within the system.</li>
                        <li>Developing and implementing robust security measures to safeguard sensitive information.</li>
                        <li>Collaborating with cross-functional teams to ensure adherence to security policies and regulations.</li>
                        <li>Preparing detailed reports on security activities and recommendations for improvements.</li>
                    </ul>
                    <h3 className="mt-6 font-semibold">Required Skills & Qualifications:</h3>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Strong understanding of cybersecurity principles, protocols, and best practices.</li>
                        <li>Experience with network security tools and monitoring systems.</li>
                        <li>Proficient in analyzing and addressing security vulnerabilities and risks.</li>
                        <li>Excellent problem-solving skills and attention to detail.</li>
                        <li>Strong communication and teamwork skills to collaborate effectively across departments.</li>
                    </ul>
                    <h3 className="mt-6 font-semibold">Preferred Experience:</h3>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Previous experience in a cybersecurity or IT security role.</li>
                        <li>Familiarity with regulatory compliance frameworks (e.g., GDPR, ISO 27001).</li>
                        <li>Hands-on experience with cybersecurity tools and platforms.</li>
                    </ul>
                    <h3 className="mt-6 font-semibold">Why This Role Aligns With My Goals:</h3>
                    <p className="mt-2">
                        This role offers a unique opportunity to utilize my technical skills and passion for cybersecurity to protect organizational assets. By contributing to BCNET's mission, I aim to grow as a professional while addressing evolving cyber threats and safeguarding critical information.
                    </p>
                    <a
                        href="https://bcnet.applytojobs.ca/cybersecurity/33343"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 dark:text-yellow-400 hover:underline mt-6 block"
                    >
                        View Full Job Posting: Cybersecurity Analyst – BCNET
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Opportunity;
