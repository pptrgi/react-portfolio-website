import React from 'react';
import {BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp} from 'react-icons/bs'

function SocialIcons() {
  return (
    <div className='flex flex-row justify-center space-x-4 items-center sm:flex-col sm:space-x-0 sm:space-y-4 md:space-y-6'>
        <a href="#"><BsFacebook size={18} className='bg-containerColor text-titleColor hover:text-titleColorDark'/></a>
        <a href="#"><BsTwitter size={18} className='bg-containerColor text-titleColor hover:text-titleColorDark'/></a>
        <a href="#"><BsLinkedin size={18} className='bg-containerColor text-titleColor hover:text-titleColorDark'/></a>
        <a href="#"><BsWhatsapp size={18} className='bg-containerColor text-titleColor hover:text-titleColorDark'/></a>
    </div>
  )
}

export default SocialIcons