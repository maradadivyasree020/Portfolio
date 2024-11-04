import React from 'react'

const Skills = () => {
  const list=["HTML","CSS","JS","React Js","Express Js","Node Js","Mongo DB","SQL","C","C++","Python"]
  return (
    <div className='mt-[120px]'>
        <h4 className="text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-[length:300px_100%]">Skills</h4>
        <div className='text-white flex space-x-10 pt-[50px]'>
          {list.map((li) =>(
            <button class="px-6 py-3 font-medium text-white bg-white/20 border border-white/30 rounded-lg backdrop-blur-lg shadow-lg hover:bg-white/30 hover:border-white/50 transition duration-300 ease-in-out">
            {li}
            </button>          
          ))}
        </div>
    </div>
  )
}

export default Skills