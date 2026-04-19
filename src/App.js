import './App.css';
import './index.css';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from 'pages/Header';
import AboutMe from 'pages/AboutMe';
import { Fotter } from 'pages/Fotter';
import Skills from 'pages/Skills';
import Projects from 'pages/Projects';
import Profiles from 'pages/Profiles';
import TimeLine from 'pages/TimeLine';

import { Link } from 'react-scroll';
import { FiMenu, FiX } from "react-icons/fi";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const navItem =
    "text-white text-lg hover:text-purple-400 transition cursor-pointer";

  return (
    <div className="w-screen min-h-screen bg-black/[0.96] overflow-x-hidden">

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 
      flex items-center justify-between 
      w-[90%] md:w-auto px-5 md:px-8 py-2.5 
      rounded-full bg-white/5 backdrop-blur-2xl 
      border border-white/20 shadow-[0_0_20px_rgba(168,85,247,0.3)]">

        <div className="hidden md:flex items-center gap-10">
          <Link to="aboutme" smooth duration={500} offset={-80} className={navItem}>About</Link>
          <Link to="timeline" smooth duration={500} offset={-80} className={navItem}>Timeline</Link>
          <Link to="skills" smooth duration={500} offset={-80} className={navItem}>Skills</Link>
          <Link to="projects" smooth duration={500} offset={-80} className={navItem}>Projects</Link>
          <Link to="profiles" smooth duration={500} offset={-80} className={navItem}>Profiles</Link>
        </div>

        <div
          className="md:hidden text-white text-xl p-2 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80 }}
              className="fixed top-0 right-0 h-full w-64 z-50 
              bg-black/90 backdrop-blur-xl border-l border-white/10 
              p-6 flex flex-col gap-6 shadow-xl"
            >

              <div className="flex justify-end">
                <FiX
                  className="text-white text-2xl cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              {/* Menu Items */}
              <Link onClick={()=>setIsOpen(false)} to="aboutme" smooth duration={500} className={navItem}>About</Link>
              <Link onClick={()=>setIsOpen(false)} to="timeline" smooth duration={500} className={navItem}>Timeline</Link>
              <Link onClick={()=>setIsOpen(false)} to="skills" smooth duration={500} className={navItem}>Skills</Link>
              <Link onClick={()=>setIsOpen(false)} to="projects" smooth duration={500} className={navItem}>Projects</Link>
              <Link onClick={()=>setIsOpen(false)} to="profiles" smooth duration={500} className={navItem}>Profiles</Link>

            </motion.div>
          </>
        )}
      </AnimatePresence>

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