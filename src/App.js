import './App.css';
import './index.css'
import Header from 'pages/Header';
import DownloadResume from 'pages/DownloadResume';
import AboutMe from 'pages/AboutMe';
import { Fotter } from 'pages/Fotter';
import Skills from 'pages/Skills';
import  Projects  from 'pages/Projects';
import  Profiles  from 'pages/Profiles';
import { Link } from 'react-scroll';

function App() {
  return (
    <div className=" flex flex-col items-center justify-center bg-black/[0.96]">
      <nav className="cursor-pointer mt-[30px] top-0 left-0 right-0 flex justify-center space-x-[60px] p-[20px] backdrop-blur-md bg-white/30 border-b border-white/20 rounded-[40px] font-semibold">
        <Link to="aboutme" smooth={true} duration={500} className='text-white '>About Me</Link>
        <Link to="skills" smooth={true} duration={500} className='text-white '>Skills</Link>
        <Link to="projects" smooth={true} duration={500} className='text-white '>Projects</Link>
        <Link to="profiles" smooth={true} duration={500} className='text-white '>Coding Profiles</Link>
      </nav>
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 text-white">
        <div className="mt-[200px] flex flex-col items-center text-center">
          <Header />
          <div className='mt-4'>
            <DownloadResume />
          </div>
        </div>
        <div className='mt-[280px]'>
          <div id="aboutme"><AboutMe /></div>
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
