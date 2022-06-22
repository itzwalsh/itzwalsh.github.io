import React from 'react'

import C from '../assets/c.png';
import CSharp from '../assets/csharp.png';
import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import Java from '../assets/java.png';
import JavaScript from '../assets/javascript.png';
import Kotlin from '../assets/kotlin.png';
import Python from '../assets/python.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0A192F] text-gray-300'>
    {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-orange-600'>Skills</p>
          <p className='py-4'>Some of the technology and languages i'm experienced with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={C} alt="C" />
            <p className='my-4'>C</p>
          </div>

          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSharp} alt="CSharp" />
            <p className='my-4'>C#</p>
          </div>

          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS" />
            <p className='my-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML" />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Java} alt="Java" />
            <p className='my-4'>Java</p>
          </div>

          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript" />
            <p className='my-4'>JavaScript</p>
          </div>

          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Kotlin} alt="Kotlin" />
            <p className='my-4'>Kotlin</p>
          </div>

          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt="Python" />
            <p className='my-4'>Python</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Skills