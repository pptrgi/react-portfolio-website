import React from 'react';
import {BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-containerColor border-t-2 border-t-gray-200 text-center' id='footer'>
        <div className='container pt-[2rem] pb-[6rem] bg-containerColor'>
            <h1 className='text-h2FontSize text-titleColor font-mediumWeight mb-[2rem] bg-containerColor'>p.Gitonga</h1>
            <div className='flex justify-center space-x-4 items-center bg-containerColor mb-[2rem] sm:space-x-6 md:space-x-8 lg:space-x-10'>
              <Link to='/' className='font-normalWeight text-smallFontSize text-titleColor bg-containerColor hover:text-titleColorDark hover:font-semiBolded'>Home</Link>
              <a href="#about" className='font-normalWeight text-smallFontSize text-titleColor bg-containerColor hover:text-titleColorDark hover:font-semiBolded'>About</a>
              <a href="#projects" className='font-normalWeight text-smallFontSize text-titleColor bg-containerColor hover:text-titleColorDark hover:font-semiBolded'>Projects</a>
              <Link to='/cv' className='font-normalWeight text-smallFontSize text-titleColor bg-containerColor hover:text-titleColorDark hover:font-semiBolded'>Resume</Link>
            </div>
            <div className='flex flex-row justify-center space-x-4 items-center bg-containerColor sm:space-x-6 '>
              <a href="https://twitter.com/ptrgitonga"><BsTwitter size={18} className='bg-containerColor text-titleColor hover:text-titleColorDark '/></a>
              <a href="https://wa.me/254700119134"><BsWhatsapp size={18} className='bg-containerColor text-titleColor hover:text-titleColorDark '/></a>
              <a href="https://www.linkedin.com/in/petergitonga"><BsLinkedin size={18} className='bg-containerColor text-titleColor hover:text-titleColorDark '/></a>
              <a href="https://www.facebook.com/pptrgitonga"><BsFacebook size={18} className='bg-containerColor text-titleColor hover:text-titleColorDark '/></a>
            </div>
            <div className='text-textColor text-smallerFontSize mt-[4.5rem] bg-containerColor sm:text-smallFontSize '>Copyright &#169; 2023 p.Gitonga</div>
        </div>

    </footer>
  )
}

export default Footer