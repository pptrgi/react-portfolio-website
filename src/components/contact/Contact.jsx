import React from 'react';
import DirectContact from './DirectContact';
import ContactMeans from './ContactMeans';

function Contact() {
  return (
    <section className='section text-center' id='contact'>
        <h1 className='text-titleColor text-[2rem] font-mediumWeight mb-[0.5rem]'>Contact Me</h1>
        <span className='text-center text-smallFontSize text-textColor'>Get in touch</span>
        <div className='mt-[4rem] flex flex-col-reverse justify-center gap-[3rem] sm:mx-[1rem] sm:flex-row sm:gap-[1.25rem] md:gap-[2rem] lg:gap-[3rem]'>
          <ContactMeans className="" />
          <DirectContact className=""/>
        </div>
    </section>
  )
}

export default Contact

// flex flex-col-reverse justify-center gap-[1rem] sm:flex-row sm:gap-[3rem]