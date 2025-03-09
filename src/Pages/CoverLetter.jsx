import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const CoverLetter = () => {

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
                    <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-8">
                        Cover Letter
                    </h2>
                    <div className="text-gray-800 dark:text-gray-300 text-sm space-y-4 leading-relaxed">
                        {/* Recipient Details */}
                        <p>
                            <strong>Recipient Name</strong>
                            <br />
                            [Company Name]
                            <br />
                            [Address Line 1]
                            <br />
                            [City, State ZIP]
                        </p>

                        {/* Date */}
                        <p>
                            <strong>Date:</strong> [Insert Date Here]
                        </p>

                        {/* Salutation */}
                        <p>Dear [Recipient's Name or Hiring Manager],</p>

                        {/* Opening Paragraph */}
                        <p>
                            I am excited to apply for the <strong>[Position Name]</strong> role at <strong>[Company Name]</strong>. As a
                            dedicated professional with a strong foundation in cybersecurity and IT systems, I bring not only technical
                            expertise but also a commitment to safeguarding digital assets in an increasingly interconnected world.
                        </p>

                        {/* Key Skills and Achievements */}
                        <p>
                            My experience as an <strong>IT Administrator</strong> at Carbon Engineering provided me with hands-on
                            opportunities to manage IT infrastructure, lead helpdesk support operations, and implement security
                            protocols that reduced vulnerabilities across critical systems. I successfully:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Improved system uptime by 30% through proactive monitoring and maintenance.</li>
                            <li>
                                Streamlined software asset management, ensuring compliance with licensing agreements and reducing
                                operational costs by 15%.
                            </li>
                            <li>Developed comprehensive technical documentation to enhance team efficiency and knowledge sharing.</li>
                        </ul>

                        {/* Academic Background */}
                        <p>
                            My academic journey at the <strong>University of the Fraser Valley</strong> has been equally rewarding. As
                            a consistent recipient of the <strong>Dean's List</strong>, I have demonstrated my dedication to excellence.
                            Courses in cybersecurity, cloud computing, and data analysis have equipped me with the skills necessary to
                            address the challenges of modern IT landscapes.
                        </p>

                        {/* Certifications */}
                        <p>
                            In addition to my educational background, I have earned certifications such as <strong>[Certification
                                Name]</strong>, <strong>[Certification Name]</strong>, and <strong>[Certification Name]</strong>, further
                            solidifying my technical acumen and commitment to continuous learning. These certifications have enabled me
                            to develop expertise in [Key Areas], making me a strong fit for this position.
                        </p>

                        {/* Alignment with the Company */}
                        <p>
                            I am particularly drawn to <strong>[Company Name]</strong> because of its commitment to <strong>[Specific
                                Company Value or Mission]</strong>. Your recent project, <strong>[Mention a Project or Initiative]</strong>,
                            demonstrates a forward-thinking approach that aligns perfectly with my passion for innovation and
                            cybersecurity.
                        </p>

                        {/* Soft Skills */}
                        <p>
                            Beyond technical skills, I pride myself on my ability to communicate effectively, work collaboratively in
                            team settings, and adapt to new challenges. My time as an <strong>IT Lab Monitor</strong> at UFV allowed me
                            to hone my interpersonal skills by assisting diverse groups of users and ensuring seamless technology
                            adoption across campus.
                        </p>

                        {/* Closing Paragraph */}
                        <p>
                            I am eager to bring my skills, enthusiasm, and commitment to <strong>[Company Name]</strong>. I am confident
                            that my blend of technical expertise and passion for cybersecurity will enable me to contribute meaningfully
                            to your organization’s goals.
                        </p>

                        {/* Call to Action */}
                        <p>
                            I would welcome the opportunity to discuss how my background aligns with the requirements of the
                            <strong> [Position Name]</strong> role. Thank you for considering my application, and I look forward to the
                            possibility of contributing to your team. Please feel free to contact me at <strong>[Your Phone
                                Number]</strong> or <strong>[Your Email Address]</strong> at your convenience.
                        </p>

                        {/* Signature */}
                        <p>
                            Sincerely,
                            <br />
                            <strong>Yugam Arora</strong>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoverLetter;
