
import { NavbarDemo } from 'pages/NavBar';
import './App.css';
import './index.css'
import Header from 'pages/Header';
import { Spotlight } from '@/components/ui/spotlight';
import DownloadResume from 'pages/DownloadResume';
import AboutMe from 'pages/AboutMe';
import { Fotter } from 'pages/Fotter';
import Skills from 'pages/Skills';

function App() {
  return (
    // <div className="App">
    //    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    //    <SpotlightPreview />
    //    {/* <NavbarDemo className="z-20"/>
    //    <div className='mt-[80px] z-20'>
    //     <Header /> */}
    //    {/* </div> */}
    // </div>
    <div className="h-full w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* <Spotlight className="absolute -top-1/4 left-[-30%] z-0 opacity-150 w-[150%] h-[150%]" fill="url(#spotlightGradient)" /> */}
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
          {/* <Fotter /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
