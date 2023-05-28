import React from 'react';
import {BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp} from 'react-icons/bs'

function Footer() {
  return (
    <footer className='bg-containerColor border-t-2 border-t-gray-200 text-center' id='footer'>
        <div className='container pt-[2rem] pb-[6rem] bg-containerColor'>
            <h1 className='text-h2FontSize text-titleColor font-mediumWeight mb-[2rem] bg-containerColor'>P.Gitonga</h1>
            <div className='flex justify-center space-x-4 items-center bg-containerColor mb-[2rem] sm:space-x-6 md:space-x-8 lg:space-x-10'>
              <a href="/" className='font-normalWeight text-smallFontSize text-titleColor bg-containerColor hover:text-titleColorDark hover:font-semiBolded'>Home</a>
              <a className='font-normalWeight text-smallFontSize text-titleColor bg-containerColor hover:text-titleColorDark hover:font-semiBolded' href="#about">About</a>
              <a className='font-normalWeight text-smallFontSize text-titleColor bg-containerColor hover:text-titleColorDark hover:font-semiBolded' href="#projects">Projects</a>
              <a className='font-normalWeight text-smallFontSize text-titleColor bg-containerColor hover:text-titleColorDark hover:font-semiBolded' href="#services">Services</a>
            </div>
            <div className='flex flex-row justify-center space-x-4 items-center bg-containerColor sm:space-x-6 '>
              <a href="https://twitter.com/ptrgitonga"><BsTwitter size={18} className='bg-containerColor text-titleColor hover:text-titleColorDark '/></a>
              <a href="https://wa.me/254700119134"><BsWhatsapp size={18} className='bg-containerColor text-titleColor hover:text-titleColorDark '/></a>
              <a href="https://www.linkedin.com/in/petergitonga"><BsLinkedin size={18} className='bg-containerColor text-titleColor hover:text-titleColorDark '/></a>
              <a href="https://www.facebook.com/pptrgitonga"><BsFacebook size={18} className='bg-containerColor text-titleColor hover:text-titleColorDark '/></a>
            </div>
            <div className='text-textColor text-smallerFontSize mt-[4.5rem] bg-containerColor'>&#169; P.Gitonga. All rights Reserved</div>
        </div>

    </footer>
  )
}

export default Footer