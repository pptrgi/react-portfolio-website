import React from 'react';
import SocialIcons from './SocialIcons';
import Titles from './Titles';
import Image from './Image';
import {BiDownArrowAlt} from 'react-icons/bi';

const LandingPage = () => {
  return (
    <section className='section min-h-screen h-auto' id='homeSection'>
      <div className='container' id='portraitContainer'>
        <div className='flex flex-col-reverse gap-14 items-center sm:flex-row sm:gap-8 md:gap-6 lg:gap-[7.5rem] sm:mt-[4rem]'>
          <div className="w-fit" >
            <SocialIcons />
          </div>
          <div className='flex flex-col-reverse gap-6 items-center sm:flex-row sm:gap-4 md:gap-6 lg:gap-[7.5rem]'>
            <Titles />
            <Image />
          </div>
        </div>
        <div className='block text-center mt-[7rem] sm:mt-[12rem] lg:mt-[16rem]' id='exploreBtn'>
          <a href="#about" className='text-titleColor font-normalWeight text-[1.125rem] ml-[2px] hover:font-mediumWeight hover:text-titleColorDark'>explore<BiDownArrowAlt className='inline-block text-titleColor text-[1.15rem] ml-[0.10rem] hover:font-mediumWeight hover:text-titleColorDark' /></a>
        </div>
      </div>

    </section>

  )
}

export default LandingPage