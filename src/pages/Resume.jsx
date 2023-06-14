import React from 'react'
import cv from '../assets/Peter Gitonga - CV.pdf'
import {FaRegFilePdf} from 'react-icons/fa'

function Resume() {
  return (
    <div className='section'>
        <div className='container'>
        <h1 className='text-[2rem] text-titleColor font-mediumWeight mb-[0.5rem] sm:text-h1FontSize text-center'>Resume</h1>
        <p className='text-smallFontSize font-normalWeight text-textColor px-[0.15rem] text-center'>Click below to Download the resume</p>
        <div className='flex justify-center items-center h-[50vh] w-full '>
            <span className='flex group'>
                <a href={cv} download="" className='bg-titleColor group rounded-[1.25rem] shadow-md px-[3.5rem] py-[2.25rem] group-hover:bg-containerColor'><FaRegFilePdf  className='text-[2.5rem] bg-transparent text-containerColor group-hover:text-titleColor'/></a>
            </span>   
        </div>
        </div>
    </div>
  )
}

export default Resume