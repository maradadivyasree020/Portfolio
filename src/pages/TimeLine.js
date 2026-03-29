// import React from "react";

// const Timeline = () => {
//   return (
//     <div className="mt-[150px] px-6 flex flex-col items-center">
      
//       {/* Heading */}
//       <h4 className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mb-16">
//         Timeline
//       </h4>

//       {/* Timeline Container */}
//       <div className="relative w-full max-w-4xl">

//         {/* Vertical Line */}
//         <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-white/20"></div>

//         {/* Item 1 - Education */}
//         <div className="mb-12 flex md:justify-between items-center w-full">
          
//           {/* Left Side */}
//           <div className="hidden md:block w-1/2"></div>

//           {/* Dot */}
//           <div className="z-10 w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>

//           {/* Card */}
//           <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 ml-8 md:ml-0 md:w-1/2">
//             <h3 className="text-xl font-semibold text-white">
//               Bachelors of Technology
//             </h3>
//             <p className="text-gray-300 text-sm mt-1">
//               Vignan's Institute of Information Technology
//             </p>
//             <p className="text-purple-400 text-sm mt-2">
//               2021 – 2025
//             </p>
//           </div>
//         </div>

//         {/* Item 2 - Job */}
//         <div className="mb-12 flex md:justify-between items-center w-full flex-row-reverse md:flex-row">
          
//           {/* Left Card */}
//           <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 mr-8 md:mr-0 md:w-1/2">
//             <h3 className="text-xl font-semibold text-white">
//               Associate Software Engineer
//             </h3>
//             <p className="text-gray-300 text-sm mt-1">
//               Emids Technologies
//             </p>
//             <p className="text-purple-400 text-sm mt-2">
//               June 2025 – Present
//             </p>

//             {/* Roles */}
//             <ul className="mt-4 text-gray-300 text-sm space-y-2 list-disc list-inside">
//               <li>Developed scalable REST APIs using Spring Boot for healthcare platforms</li>
//               <li>Built RAG-based test case generator using LLMs, embeddings & vector DB</li>
//               <li>Implemented unit testing with JUnit to ensure code quality and reliability</li>
//             </ul>
//           </div>

//           {/* Dot */}
//           <div className="z-10 w-4 h-4 bg-pink-500 rounded-full shadow-lg"></div>

//           {/* Spacer */}
//           <div className="hidden md:block w-1/2"></div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Timeline;

import React from "react";

const Timeline = () => {
  return (
    <div className="mt-[150px] px-6 flex flex-col items-center">

      {/* Heading */}
      <h4 className="text-5xl md:text-6xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mb-16">
        Timeline
      </h4>

      {/* Cards Container */}
      <div className="grid gap-10 md:grid-cols-2 max-w-5xl w-full">

        {/* Education Card */}
        <div className="
          bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-violet-500/20 
          p-[1px] rounded-2xl hover:scale-105 transition duration-300
        ">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full">

            <h3 className="text-xl font-semibold text-white">
              🎓 B.Tech
            </h3>

            <p className="text-gray-300 mt-2">
              Vignan's Institute of Information Technology
            </p>

            <p className="text-purple-400 mt-3 text-sm">
              2021 – 2025
            </p>

            <div className="mt-6 text-sm text-gray-300">
              Built strong foundation in programming, data structures, and software development.
            </div>

          </div>
        </div>

        {/* Experience Card */}
        <div className="
          bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-violet-500/20 
          p-[1px] rounded-2xl hover:scale-105 transition duration-300
        ">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full">

            <h3 className="text-xl font-semibold text-white">
              💼 Associate Software Engineer
            </h3>

            <p className="text-gray-300 mt-2">
              Emids Technologies
            </p>

            <p className="text-purple-400 mt-3 text-sm">
              June 2025 – Present
            </p>

            {/* Roles */}
            <ul className="mt-6 text-gray-300 text-sm space-y-2 list-disc list-inside">
              <li>Developed scalable REST APIs using Spring Boot</li>
              <li>Built RAG-based test case generator using LLMs & vector DB</li>
              <li>Implemented unit testing using JUnit for reliability</li>
            </ul>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Timeline;