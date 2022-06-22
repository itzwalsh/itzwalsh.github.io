import React from 'react'
import Project1 from '../assets/project1.jpg'
import Project2 from '../assets/project2.jpg'
import Project3 from '../assets/project3.jpg'
import Project4 from '../assets/project4.jpg'
import Project5 from '../assets/project5.jpg'
import Project6 from '../assets/project6.jpg'
import Project7 from '../assets/project7.jpg'
import Project8 from '../assets/project8.jpg'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0A192F]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-600'>Work</p>
                <p className='py-6'>Here's some of the projects i've created:</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Project1})`}} 
                className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Project 1
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Project2})`}} 
                className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Project 2
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Project3})`}} 
                className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Project 3
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Project4})`}} 
                className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Project 4
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Project5})`}} 
                className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Project 5
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Project6})`}} 
                className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Project 6
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work