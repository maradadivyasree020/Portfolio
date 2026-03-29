import React from "react";

const Skills = () => {
  const list = [
    "HTML",
    "CSS",
    "JavaScript",
    "React Js",
    "Spring Boot",
    "RAG",
    "LLM Integration",
    "SQL",
    "C",
    "C++",
    "Python",
  ];

  return (
    <div className="mt-[120px] px-6">
      {/* Heading */}
      <h4 className="text-5xl md:text-6xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mb-12">
        Skills
      </h4>

      {/* Skills */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
          {list.map((li, index) => (
            <span
              key={index}
              className="
                px-5 py-2 text-sm md:text-base font-medium text-white
                bg-white/10 backdrop-blur-md border border-white/20
                rounded-full shadow-md
                hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                hover:scale-105 hover:shadow-lg
                transition-all duration-300 cursor-pointer
              "
            >
              {li}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;