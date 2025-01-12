import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-200 mb-12">
        About Me
      </h2>
      <div className="mt-12 max-w-5xl mx-auto text-gray-700 dark:text-gray-400 text-md leading-relaxed p-6 text-center lg:text-left">
        <p className="mb-6">
          I am a passionate web developer with a knack for crafting intuitive
          and user-friendly websites. My journey in technology started with a
          curiosity for problem-solving, which has now evolved into a
          professional pursuit of creating impactful digital experiences.
        </p>
        <p>
          Over the years, I have honed my skills in various programming
          languages and frameworks, and I am constantly eager to learn and
          adapt to the ever-evolving tech landscape. Whether it’s building
          responsive interfaces or diving deep into backend logic, I find joy
          in every aspect of development.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
