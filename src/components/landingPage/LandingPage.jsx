import React from 'react';
import SocialIcons from './SocialIcons';
import Titles from './Titles';
import Image from './Image';
import {BiDownArrowAlt} from 'react-icons/bi';

const LandingPage = () => {
  return (
    <section className='section min-h-screen flex justify-center items-center' >
      <div className='container'>
          <div className='flex flex-col justify-between items-center h-[85vh] pb-[4vh] w-full sm:pb-0 sm:h-[50vh] lg:h-[70vh]'>
            <div className='flex flex-col-reverse items-center gap-[3rem] w-full sm:gap-[0.25rem] sm:flex-row'>
              <div className="sm: w-2/12" >
                <SocialIcons />
              </div>
              <div className='flex flex-col-reverse items-center gap-4 sm:flex-row sm:w-10/12'>
                <div className='sm:w-2/3'>
                  <Titles />
                </div>
                <div className='sm:w-1/3'>
                  <Image />
                </div>
              </div>
            </div>
            <div className='flex group gap-1 items-center group text-textColor font-normalWeight text-[1.125rem] hover:text-titleColorDark cursor-pointer sm:text-titleColor'>
              <a href="#about" className='transition-all duration-200'>scroll</a>
              <BiDownArrowAlt className='group-hover:translate-y-1 transition-all duration-200' />
            </div>
          </div>
      </div>   
    </section>
  )
}

export default LandingPage