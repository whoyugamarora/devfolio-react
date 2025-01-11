import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faNode,
    faReact,
    faPython,
    faGitAlt,
    faAws,
    faLinux,
    faJava,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";



const SkillsSection = () => {
    return (
        <section id="skills" className="py-16 bg-gray-200 dark:bg-gray-800">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-200 mb-12">My Skills</h2>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between max-w-7xl mx-auto space-y-12 md:space-y-0 py-4">
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-gray-700 dark:text-gray-400 text-md leading-relaxed p-6 text-center lg:text-left">
                    <p className="mb-4">
                        Over the years, I have honed a wide range of technical skills that allow me to build robust and scalable applications.
                        From crafting elegant front-end interfaces to managing powerful back-end systems, I thrive on solving complex challenges.
                    </p>
                    <p>
                        My expertise includes working with modern technologies such as JavaScript frameworks, server-side programming, cloud services,
                        and database management. I'm constantly exploring new tools and techniques to stay at the forefront of the tech world.
                    </p>
                </div>

                {/* Skills Grid Section */}
                <div className="w-full md:w-1/2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2 text-center px-6">
                    <div>
                        <FontAwesomeIcon icon={faHtml5} className="text-6xl text-orange-600 hover:scale-105" />
                        <p className="mt-3 text-lg">HTML</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCss3Alt} className="text-6xl text-blue-600 hover:scale-105" />
                        <p className="mt-3 text-lg">CSS</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faJs} className="text-6xl text-yellow-500 hover:scale-105" />
                        <p className="mt-3 text-lg">JavaScript</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faNode} className="text-6xl text-green-600 hover:scale-105" />
                        <p className="mt-3 text-lg">Node.js</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faReact} className="text-6xl text-blue-400 hover:scale-105" />
                        <p className="mt-3 text-lg">React</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPython} className="text-6xl text-blue-500 hover:scale-105" />
                        <p className="mt-3 text-lg">Python</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGitAlt} className="text-6xl text-orange-500 hover:scale-105" />
                        <p className="mt-3 text-lg">Git</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faAws} className="text-6xl text-yellow-600 hover:scale-105" />
                        <p className="mt-3 text-lg">AWS</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinux} className="text-6xl text-gray-700 dark:text-gray-300 hover:scale-105" />
                        <p className="mt-3 text-lg">Linux</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faJava} className="text-6xl text-red-500 hover:scale-105" />
                        <p className="mt-3 text-lg">Java</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faDatabase} className="text-6xl text-purple-500 hover:scale-105" />
                        <p className="mt-3 text-lg">Databases</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
