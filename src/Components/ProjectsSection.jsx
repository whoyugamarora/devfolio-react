import React from "react";
import projectbuddy from "../pictures/projectbuddy.png";
import healthcaresystem from "../pictures/healthcaresystem.png";
import logrotationsystem from "../pictures/logrotationsystem.png";

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-200 mb-12">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
                {/* Project 1 */}
                <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-t-4 border-blue-500 hover:shadow-xl transition-transform transform duration-300 ease-in-out hover:scale-105">
                    <img
                        src={projectbuddy}
                        alt="Project 1"
                        className="w-full rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        ProjectBuddy
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Developed a dynamic web application that connects individuals with shared project interests. Integrated user profiles, advanced search functionality, and a real-time chat system using Firebase Realtime Database. Leveraged MongoDB for backend data management and React for the frontend. The application fosters collaboration and idea sharing, enhancing project management and team-building experiences.
                    </p>
                    <a
                        href="https://github.com/whoyugamarora/Projectbuddy"
                        className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                        Learn More
                    </a>
                </div>

                {/* Project 2 */}
                <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-t-4 border-green-500 hover:shadow-xl transition-transform transform duration-300 ease-in-out hover:scale-105">
                    <img
                        src={healthcaresystem}
                        alt="HealthCareSystem"
                        className="w-full rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        HealthCareSystem
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Designed and implemented a robust Healthcare System application to streamline medical data management and improve patient care. The project integrates key features like secure authentication, patient record management, and real-time data updates. Leveraged advanced web and network security principles, including authentication, data integrity, and web host security, to ensure the safety and privacy of sensitive information.
                    </p>
                    <a
                        href="https://github.com/whoyugamarora/HealthcareSystem"
                        className="inline-block mt-4 text-green-600 dark:text-green-400 font-semibold hover:underline"
                    >
                        Learn More
                    </a>
                </div>

                {/* Project 3 */}
                <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-t-4 border-yellow-500 hover:shadow-xl transition-transform transform duration-300 ease-in-out hover:scale-105">
                    <img
                        src={logrotationsystem}
                        alt="Project 3"
                        className="w-full rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        Log Rotation System
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Developed an efficient Log Rotation System to automate the management and archival of server logs. Designed to enhance system performance and ensure optimal storage utilization, the system included features like log compression, scheduling, and secure archival processes. Implemented with a focus on scalability and reliability, the project demonstrated advanced scripting and system administration skills.
                    </p>
                    <a
                        href="https://github.com/whoyugamarora/logrotationsystem"
                        className="inline-block mt-4 text-yellow-600 dark:text-yellow-400 font-semibold hover:underline"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
