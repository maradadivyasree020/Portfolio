import './App.css';
import './index.css';

import Header from 'pages/Header';
import DownloadResume from 'pages/DownloadResume';
import AboutMe from 'pages/AboutMe';
import { Fotter } from 'pages/Fotter';
import Skills from 'pages/Skills';
import Projects from 'pages/Projects';
import Profiles from 'pages/Profiles';
import TimeLine from 'pages/TimeLine';

import { Link } from 'react-scroll';

function App() {
  return (
    <div className="w-screen min-h-screen bg-black/[0.96] overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 md:gap-12 px-8 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_0_20px_rgba(168,85,247,0.3)]">

        <Link
          to="aboutme"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="text-purple-400"
          className="relative text-white cursor-pointer transition hover:text-purple-400 hover:scale-105
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          About
        </Link>

        <Link
          to="timeline"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="text-purple-400"
          className="relative text-white cursor-pointer transition hover:text-purple-400 hover:scale-105
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Timeline
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="text-purple-400"
          className="relative text-white cursor-pointer transition hover:text-purple-400 hover:scale-105
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Skills
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="text-purple-400"
          className="relative text-white cursor-pointer transition hover:text-purple-400 hover:scale-105
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Projects
        </Link>

        <Link
          to="profiles"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="text-purple-400"
          className="relative text-white cursor-pointer transition hover:text-purple-400 hover:scale-105
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Profiles
        </Link>

      </nav>

      {/* CONTENT */}
      <div className="w-full">

        <Header />

        <div className="space-y-32 pt-24">
          <div id="aboutme"><AboutMe /></div>
          <div id="timeline"><TimeLine /></div>
          <div id="skills"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id="profiles"><Profiles /></div>
          <Fotter />
        </div>

      </div>
    </div>
  );
}

export default App;