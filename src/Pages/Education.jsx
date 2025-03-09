import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const Education = () => {
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

            {/* Page Container */}
            <div className="max-w-4xl mx-auto py-12 px-6">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">Education & Skills</h1>

                {/* Degree Information */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8 border dark:border-gray-700">
                    <h2 className="text-xl font-bold">Bachelor of Computer Information Systems</h2>
                    <p className="text-md mt-1 text-gray-600 dark:text-gray-300">University of the Fraser Valley</p>
                    <p className="text-md mt-1 text-gray-500 dark:text-gray-300">January 2020 – April 2025</p>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">
                        <strong>Dean’s List:</strong> Winter 2020, 2021, 2024, 2025 & Fall 2020, 2024
                    </p>
                </div>

                {/* Academic Projects */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8 border dark:border-gray-700">
                    <h2 className="text-xl font-bold">Academic Projects</h2>
                    <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                        <li><strong>ProjectBuddy:</strong> Developed a responsive portfolio website using HTML, CSS, and JavaScript.</li>
                        <li><strong>Log Rotation System:</strong> Designed an automated log management system for server maintenance.</li>
                    </ul>
                </div>

                {/* Relevant Courses */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8 border dark:border-gray-700">
                    <h2 className="text-2xl font-medium">Relevant Courses</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 font-semibold text-gray-900 dark:text-gray-100">
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">Network Theory & Applications</p>
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">Information Systems Security</p>
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">End User Training & Support</p>
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">Virtualization & Cloud Infrastructure</p>
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">Forensic Analysis</p>
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">System Administration</p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border dark:border-gray-700">
                    <h2 className="text-2xl font-medium">Technical Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 font-semibold text-gray-900 dark:text-gray-100">
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">🖥️ Windows Server, Linux</p>
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">🔑 Azure Entra ID, Active Directory</p>
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">🔐 IAM Lifecycle, PIM, Password Policies</p>
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">🌐 TCP/IP, DHCP, DNS, VPN, LAN/WAN</p>
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">☁️ VMware, Hyper-V, Citrix, VirtualBox</p>
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">📊 SQL Server, MySQL, MongoDB</p>
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">📈 PowerBI, HaloITSM, ServiceNow</p>
                        <p className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">🤝 SharePoint, Microsoft 365, Exchange</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
