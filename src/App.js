
import { NavbarDemo } from 'pages/NavBar';
import './App.css';
import './index.css'
import Header from 'pages/Header';
import DownloadResume from 'pages/DownloadResume';
import AboutMe from 'pages/AboutMe';
import { Fotter } from 'pages/Fotter';
import Skills from 'pages/Skills';
import { Projects } from 'pages/Projects';
import { Profiles } from 'pages/Profiles';

function App() {
  return (
    <div className="h-full w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 text-white">
        <NavbarDemo />
        <div className="mt-[300px] flex flex-col items-center text-center">
          <Header />
          <div className='mt-4'>
            <DownloadResume />
          </div>
        </div>
        <div className='mt-[280px]'>
          <AboutMe/>
          <Skills/>
          <Projects/>
          <Profiles/>
          <Fotter />
        </div>
      </div>
    </div>
  );
}

export default App;
