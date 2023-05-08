import React from 'react';
import { FaRegCheckCircle ,FaRegImage, FaDraftingCompass, FaDoorOpen, FaDove } from 'react-icons/fa';

function Services() {
  return (
    <section className='section text-center' id='services'>
        <h1 className='font-mediumWeight text-[2rem] text-titleColor mb-[0.5rem] sm:text-h1FontSize '>Services</h1>
        <span className='font-normalWeight text-smallFontSize text-textColor '>The services I offer</span>
        <div className='container mt-[4rem]'>
            <div className='grid grid-cols-1 items-center gap-3 mx-[1.5rem] sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4'>
                <div className='bg-containerColor pt-[6rem] pb-[2rem] px-[0.25] border-2 border-gray-100 rounded-md'>
                    <h3 className='bg-containerColor text-titleColor font-mediumWeight text-[1.15rem] mb-[1rem] md:text-h3FontSize'>Website Development</h3>
                    <p className='bg-containerColor text-textColor text-smallFontSize max-w-sm mb-[2rem] px-[1rem]'>Do you have an idea for your next great project? Let's make it a reality.</p>
                    <div className='flex flex-col space-y-2 pl-[1rem] bg-containerColor text-smallFontSize text-textColor'>
                        <div className='flex items-center space-x-2 md:space-x-3 bg-containerColor'>
                            <FaRegCheckCircle className='' />
                            <p className='bg-containerColor text-left'>Design the layout and structure</p>
                        </div>
                        <div className='flex items-center space-x-2 md:space-x-3 bg-containerColor'>
                            <FaRegCheckCircle className='' />
                            <p className='bg-containerColor text-left'>Build the website's structure</p>
                        </div>
                        <div className='flex items-center space-x-2 md:space-x-3 bg-containerColor'>
                            <FaRegCheckCircle className='' />
                            <p className='bg-containerColor text-left'>Add features and functionalities</p>
                        </div>
                        <div className='flex items-center space-x-2 md:space-x-3 bg-containerColor'>
                            <FaRegCheckCircle className='' />
                            <p className='bg-containerColor text-left'>Optimize for speed and UX</p>
                        </div>
                    </div>
                    
                </div>

                <div className='bg-containerColor pt-[6rem] pb-[2rem] px-[0.25] border-2 border-gray-100 rounded-md'>
                    <h3 className='bg-containerColor text-titleColor font-mediumWeight text-[1.15rem] mb-[1rem] md:text-h3FontSize'>Website Redesign</h3>
                    <p className='bg-containerColor text-textColor text-smallFontSize max-w-sm mb-[2rem] px-[1rem]'>Creating elegant designs suited for your needs following core design theory.</p>
                    <div className='flex flex-col space-y-2 pl-[1rem] bg-containerColor text-smallFontSize text-textColor'>
                        <div className='flex items-center space-x-2 md:space-x-3 bg-containerColor '>
                            <FaRegCheckCircle className='' />
                            <p className='bg-containerColor text-left'>Access current website</p>
                        </div>
                        <div className='flex items-center space-x-2 md:space-x-3 bg-containerColor'>
                            <FaRegCheckCircle className='' />
                            <p className='bg-containerColor text-left'>Update it's look and feel</p>
                        </div>
                        <div className='flex items-center space-x-2 md:space-x-3 bg-containerColor'>
                            <FaRegCheckCircle className='' />
                            <p className='bg-containerColor text-left'>Improve website usability</p>
                        </div>
                        <div className='flex items-center space-x-2 md:space-x-3 bg-containerColor'>
                            <FaRegCheckCircle className='' />
                            <p className='bg-containerColor text-left'>Add new features & functionalities</p>
                        </div>
                    </div>
                    
                </div>

                <div className='bg-containerColor pt-[6rem] pb-[2rem] px-[0.25] border-2 border-gray-100 rounded-md'>
                    <h3 className='bg-containerColor text-titleColor font-mediumWeight text-[1.15rem] mb-[1rem] md:text-h3FontSize'>Consulting</h3>
                    <p className='bg-containerColor text-textColor text-smallFontSize max-w-sm mb-[2rem] px-[1rem]'>Are you interested in feedback or advice for your project? I can help with tips and tricks.</p>
                    <div className='flex flex-col space-y-2 pl-[1rem] bg-containerColor text-smallFontSize text-textColor'>
                        <div className='flex items-center space-x-2 md:space-x-3 bg-containerColor '>
                            <FaRegCheckCircle className='' />
                            <p className='bg-containerColor text-left'>Personal Website</p>
                        </div>
                        <div className='flex items-center space-x-2 md:space-x-3 bg-containerColor'>
                            <FaRegCheckCircle className='' />
                            <p className='bg-containerColor text-left'>Blog</p>
                        </div>
                        <div className='flex items-center space-x-2 md:space-x-3 bg-containerColor'>
                            <FaRegCheckCircle className='' />
                            <p className='bg-containerColor text-left'>Company Website</p>
                        </div>
                        <div className='flex items-center space-x-2 md:space-x-3 bg-containerColor'>
                            <FaRegCheckCircle className='' />
                            <p className='bg-containerColor text-left'>E-Commerce Website</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services