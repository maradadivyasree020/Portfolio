import React from 'react'
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <div className='pt-6'>
        <h2 className="text-2xl relative z-20 md:text-3xl lg:text-4xl font-bold text-center text-white font-sans tracking-tight">
            Hi I&apos;m 
            <br/>
            <div className="md:text-4xl lg:text-7xl relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <Typewriter
                options={{
                    strings: ['Marada Divya Sree', 'Programmer','FullStack Developer','UI/UX Enthusiast'],
                    autoStart: true,
                    loop: true,
                }}/>
              </div>
            </div>
          </h2>
    </div>
  )
}

export default Header