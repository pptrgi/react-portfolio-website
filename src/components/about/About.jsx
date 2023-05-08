import React from 'react';

function About() {
  return (
    <section className='section' id='about'>
        <div className='container bg-bodyColor text-center'>
            <h1 className='text-titleColor text-[2rem] font-mediumWeight mb-[0.5rem] sm:text-h1FontSize'>About</h1>
            <span className='text-textColor text-smallFontSize font-normalWeight'>Portfolio's Techstack and My Introduction</span>
            <div className='mt-[4rem] flex flex-col-reverse items-center gap-[3rem] sm:flex-row sm:gap-[0.75rem] lg:gap-[1rem]'>
                <div className='sm:w-1/2 sm:flex sm:justify-center'>
                    <img src="/images/forAbout.png" className='w-[250px] rounded-xl sm:w-[250px] md:w-[280px] lg:w-[300px]' alt="PeterAbout" />
                </div>
                <div className='flex flex-col-reverse justify-between pl-[0.75rem] pr-[0.25rem] h-[450px] text-left sm:w-1/2 sm:flex-col md:h-[450px] lg:h-[400px]'>
                    <p className='text-textColor leading-5 text-smallFontSize font-normalWeight sm:leading-tight sm:text-smallFontSize md:text-normalFontSize md:leading-5'>Hello! My name is Peter and I'm passionate about bringing both the technical and visual aspects of digital products to life. 
                    User experience and writing clean, elegant and accessible code matter to me. I sweat the details. And as a follower of John Maeda's Laws of Simplicity, I agree that less is more.<br /><br />I have a Bachelors degree in Information Technology.<br /><br />
                    I'm happiest when I'm creating, learning, exploring and thinking about how to make things better.
                    I am available for any project, and also feel free to reach out and say hello.</p>
                    <div className='flex gap-2 flex-wrap'>
                        <span className="text-textColor text-smallFontSize font-mediumWeight px-[0.75rem] py-[0.25rem] border-2 border-textColor">JavaScript</span>
                        <span className="text-textColor text-smallFontSize font-mediumWeight px-[0.75rem] py-[0.25rem] border-2 border-textColor">React</span>
                        <span className="text-textColor text-smallFontSize font-mediumWeight px-[0.75rem] py-[0.25rem] border-2 border-textColor">Tailwind</span>
                        <span className="text-textColor text-smallFontSize font-mediumWeight px-[0.75rem] py-[0.25rem] border-2 border-textColor">Emailjs</span>
                        <span className="text-textColor text-smallFontSize font-mediumWeight px-[0.75rem] py-[0.25rem] border-2 border-textColor">React Router</span>
                        {/* <span className="text-textColor text-smallFontSize font-mediumWeight px-[0.75rem] py-[0.25rem] border-2 border-textColor">GitHub</span> */}
                        <span className="text-textColor text-smallFontSize font-mediumWeight px-[0.75rem] py-[0.25rem] border-2 border-textColor">Font Awesome</span>
                        <span className="text-textColor text-smallFontSize font-mediumWeight px-[0.75rem] py-[0.25rem] border-2 border-textColor">HTML</span>
                    </div>
                </div>
            </div>  
        </div>

    </section>
  )
}

export default About