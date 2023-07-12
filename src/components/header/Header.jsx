import {useState} from 'react';
import { Link } from 'react-router-dom';
import {BiHome, BiUser, BiWrench, BiBriefcase, BiMenu, BiX} from 'react-icons/bi';
import {IoIosSend} from 'react-icons/io';
import {FaTasks} from 'react-icons/fa';
import {FaRegFilePdf} from 'react-icons/fa'



const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
      <header className='bg-bodyColor w-screen fixed top-0 left-0 z-50'>
          <nav className='relative container flex flex-row justify-between items-center h-[3.5rem] sm:h-[4.5rem'>
              <a href="/" className='font-titleColor text-[18px] font-mediumWeight'>p.Gitonga</a>
              <div className={ showMenu ? "absolute left-6 top-0 right-6 grid grid-cols-3 shadow-md rounded-md gap-8 py-4 px-8 mt-14 sm:rounded-none sm:shadow-none sm:py-0 sm:px-0 sm:mt-0 sm:relative sm:gap-0 sm:flex sm:justify-evenly sm:items-center sm:space-x-[1.5rem] md:space-x-[2rem] lg:space-x-[3rem]" 
              : 
              "hidden sm:rounded-none sm:shadow-none sm:py-0 sm:px-0 sm:mt-0 sm:relative sm:gap-0 sm:flex sm:justify-evenly sm:items-center sm:space-x-[1.5rem] md:space-x-[2rem] lg:space-x-[3rem]"}
              >
                  <div className='flex flex-col-reverse items-center font-mediumWeight text-smallFontSize text-titleColor'>
                      <a className='hover:text-titleColorDark hover:font-semiBolded hover:underline hover:underline-offset-2' href="#about">About</a>
                      <BiUser className='sm:hidden' size={16}/>
                  </div>
                  <div className='flex flex-col-reverse items-center font-mediumWeight text-titleColor text-smallFontSize'>
                      <a className='hover:text-titleColorDark hover:font-semiBolded hover:underline hover:underline-offset-2' href="#skills">Skills</a>
                      <BiWrench className='sm:hidden' size={16}/>
                  </div>
                  <div className='flex flex-col-reverse items-center font-mediumWeight text-smallFontSize text-titleColor'>
                      <a className='hover:text-titleColorDark hover:font-semiBolded hover:underline hover:underline-offset-2' href="#projects">Projects</a>
                      <FaTasks className='sm:hidden' size={16}/>
                  </div>
                  <div className='flex flex-col-reverse items-center font-mediumWeight text-smallFontSize text-titleColor'>
                      <a className='hover:text-titleColorDark hover:font-semiBolded hover:underline hover:underline-offset-2' href="#services">Services</a>
                      <BiBriefcase className='sm:hidden' size={16}/>
                  </div>
                  <div className='flex flex-col-reverse items-center font-mediumWeight text-smallFontSize text-titleColor'>
                      <a className='hover:text-titleColorDark hover:font-semiBolded hover:underline hover:underline-offset-2' href="#contact">Contact</a>
                      <IoIosSend className='sm:hidden' size={16}/>
                  </div>
                  <div className='flex flex-col-reverse items-center text-smallFontSize text-titleColor font-mediumWeight'>
                      <Link to='/cv' className='hover:text-titleColorDark hover:font-semiBolded hover:underline hover:underline-offset-2'>Resume</Link>
                      <FaRegFilePdf className='sm:hidden' size={16}/>
                  </div>
              </div>
              <div className='sm:hidden'>
                  <BiMenu className={showMenu ? "hidden" : "block"} size={24} onClick={e => setShowMenu(!showMenu)}/>
                  <BiX className={showMenu ? "block" : "hidden"} size={24} onClick={e => setShowMenu(!showMenu)}/>
              </div>
          </nav>
      </header>
    )
}

export default Header