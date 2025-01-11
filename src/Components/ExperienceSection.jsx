import React from "react";

const ExperienceSection = () => {
  return (
    <section id="work" className="py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-200 mb-12">
        Work Experience
      </h2>
      <div className="space-y-8 max-w-4xl mx-auto p-6">
        {/* IT Administrator */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            IT Administrator
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Carbon Engineering (Jan 2023 - Dec 2023)
          </p>
          <ul className="mt-4 list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>Lead helpdesk support, ensuring limited disruption.</li>
            <li>Managed IT assets and authorized software.</li>
            <li>Installed and configured new workstations and laptops.</li>
            <li>Maintained technical documentation and contributed to policy development.</li>
          </ul>
        </div>

        {/* IT Lab Monitor */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            IT Lab Monitor
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            University of the Fraser Valley (Jan 2022 - Apr 2022)
          </p>
          <ul className="mt-4 list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>Assisted users with Wi-Fi and printing-related issues.</li>
            <li>Maintained a problem log and reported unresolved issues.</li>
            <li>Provided software and hardware assistance to students.</li>
            <li>Communicated lab policies and procedures effectively.</li>
          </ul>
        </div>

        {/* Senior Sales Associate */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Senior Sales Associate
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            7-Eleven Inc. (Mar 2020 - Dec 2022)
          </p>
          <ul className="mt-4 list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>Increased sales by promoting loyalty programs and ensuring customer satisfaction.</li>
            <li>Managed online and in-store customer interactions, providing timely solutions.</li>
            <li>Handled merchandise deliveries and maintained inventory accuracy.</li>
            <li>Performed cashier duties, ensuring accurate cash control.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
