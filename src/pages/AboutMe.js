// import React from 'react'

// const AboutMe = () => {
//   return (
//     <div>
//       <h4 className="text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-[length:300px_100%]">
//         About Me
//       </h4>

//       <br />

//       <p className="text-xl leading-relaxed">
//         I am currently working as an Associate Software Engineer at Emids, where I contribute to building 
//         Generative AI–powered backend solutions using Java Spring Boot. My work involves designing and 
//         developing scalable RESTful APIs that enable secure data exchange across enterprise healthcare platforms.
        
//         <br /><br />
        
//         I focus on writing robust and maintainable code, supported by comprehensive unit testing using JUnit 
//         to ensure reliability and performance. I have also worked on integrating Large Language Models into 
//         real-world applications by developing a Retrieval-Augmented Generation (RAG)–based test case generator.
        
//         <br /><br />
        
//         This system leverages embeddings, vector databases, and LLMs to generate context-aware test cases 
//         and enable intelligent data retrieval, improving both development efficiency and testing quality.
//       </p>
//     </div>
//   )
// }

// export default AboutMe

import React from 'react'

const AboutMe = () => {
  return (
    <div className="px-6 mt-[120px] flex flex-col items-center">

      {/* Heading */}
      <h4 className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-center">
        About Me
      </h4>

      <br />

      {/* Content */}
      <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-5xl text-center">
        
        I enjoy building scalable applications and AI-driven solutions. I have worked on projects like a 
        <span className="font-semibold text-white"> Code Editor</span>, 
        <span className="font-semibold text-white"> Chat Application</span>, and an 
        <span className="font-semibold text-white"> AI-powered Test Case Generator</span>, focusing on performance and clean architecture.

        <br /><br />

        One of my key projects involves developing a 
        <span className="text-purple-400 font-semibold"> Retrieval-Augmented Generation (RAG)</span> system, 
        where I integrated <span className="font-semibold text-white"> Large Language Models</span>, embeddings, 
        and vector databases to generate context-aware test cases and enable intelligent data retrieval.

        <br /><br />

        Currently, I work as an 
        <span className="text-pink-400 font-semibold"> Associate Software Engineer</span> at 
        <span className="font-semibold text-white"> Emids</span>, where I build 
        <span className="text-purple-400 font-semibold"> Generative AI–enabled backend systems</span> using 
        <span className="font-semibold text-white"> Java Spring Boot</span>. I design RESTful APIs, implement 
        JUnit testing, and integrate LLM-based solutions into real-world healthcare platforms.

      </p>
    </div>
  )
}

export default AboutMe