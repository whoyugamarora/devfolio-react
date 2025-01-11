import React from "react";
import yugamImage from "../pictures/yugam1.webp";

const MainSection = () => {
  return (
    <section
      id="main"
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="relative">
        <img
          src={yugamImage}
          alt="Yugam Arora"
          className="w-64 h-64 lg:w-80 lg:h-80 rounded-[30%_70%_47%_53%/30%_30%_70%_70%] shadow-lg"
        />
      </div>
      <div className="mt-8 text-center">
        <h1 className="text-3xl lg:text-4xl font-extrabold">Yugam Arora</h1>
        <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">IT Enthusiast</p>
      </div>
    </section>
  );
};

export default MainSection;
