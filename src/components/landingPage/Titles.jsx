import React from 'react';
import {IoIosSend} from 'react-icons/io'

function Titles() {
  return (
    <div className='text-center'>
        <h1 className='font-mediumWeight text-[2.25rem] text-titleColor mb-0.25 sm:text-[2.25rem] md:text-bigFontSize'>Peter Gitonga</h1>
        <h3 className='font-normalWeight text-h3FontSize mb-[1rem]'>Web Developer</h3>
        <div className='flex justify-center '>
          <span className='text-textColor text-smallFontSize px-[0.5rem] mb-[3rem] sm:px-[1.5rem] sm:max-w-[300px] md:px-[2rem] md:max-w-md'>A lifelong learner who enjoys creating and designing things that live on the internet, and that might include meme making.</span>
        </div>
        <div className='group'>
          <a href="#contact" className='text-[1.125rem] text-containerColor bg-titleColor
          py-[0.75rem] px-[1.5rem] rounded-lg group-hover:bg-titleColorDark transition-all duration-200'>Let's chat<IoIosSend className='inline-block bg-transparent text-containerColor text-normalFontSize ml-[0.5rem] group-hover:bg-titleColorDark transition-all duration-200'/></a>
        </div>
    </div>
  )
}

export default Titles