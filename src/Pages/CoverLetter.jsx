import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const CoverLetter = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    const date = new Date();

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
                            <strong>Hiring Manager</strong>
                            <br />
                            BCNET
                            <br />
                            555 Seymour St #750
                            <br />
                            Vancouver, BC V6B 3H6
                        </p>

                        {/* Date */}
                        <p>
                            <strong>Date:</strong> 9th March, 2025
                        </p>

                        {/* Salutation */}
                        <p>Dear Hiring Manager,</p>

                        {/* Opening Paragraph */}
                        <p>
                            I am excited to apply for the <strong>Cybersecurity Analyst I</strong> role at <strong>BCNET</strong>. As a
                            dedicated professional with a strong foundation in cybersecurity and IT systems, I bring not only technical
                            expertise but also a commitment to safeguarding digital assets in an increasingly interconnected world. I am drawn to <strong>BCNET</strong> because of its diverse range of teams, like network and cybersecurity. I believe BCNET demonstrates a forward-thinking approach that aligns perfectly with my passion for innovation and
                            cybersecurity.
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
                            address the challenges of modern IT landscapes. In addition to my educational background, I have earned certifications such as <strong>Microsoft AZ-900</strong>, <strong>SC-900</strong>, and <strong>Cisco CCNA</strong>, further
                            solidifying my technical acumen and commitment to continuous learning. These certifications have enabled me to develop expertise in Cloud Computing, making me a strong fit for this position.
                        </p>

                        {/* Alignment with the Company */}
                        <p>

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
                            I am eager to bring my skills, enthusiasm, and commitment to <strong>BCNET</strong>. I am confident
                            that my blend of technical expertise and passion for cybersecurity will enable me to contribute meaningfully
                            to your organization’s goals.
                        </p>

                        {/* Call to Action */}
                        <p>
                            I would welcome the opportunity to discuss how my background aligns with the requirements of the
                            <strong> Cybersecurity Analyst</strong> role. Thank you for considering my application, and I look forward to the
                            possibility of contributing to your team. Please feel free to contact me at <strong>arorayugam115@yahoo.com</strong> at your convenience.
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
