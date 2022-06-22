import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0A192F] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-600'>About</p>
                </div>
                <div></div>
                </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, I'm Zack, nice to meet you.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam hic dolorem reprehenderit similique saepe laborum repellat accusantium alias 
                    quod tempora ullam soluta cumque libero perspiciatis voluptas, mollitia cupiditate nobis fuga magnam ad quos explicabo necessitatibus!</p>
            </div>

        </div>
        </div>
    </div>
  )
}

export default About