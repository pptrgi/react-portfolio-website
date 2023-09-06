import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  BiHome,
  BiUser,
  BiWrench,
  BiBriefcase,
  BiMenu,
  BiX,
} from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  // Close the ham menu when the user clicks outside of it
  useEffect(() => {
    const clickOutsideToClose = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", clickOutsideToClose);
    return () => {
      document.removeEventListener("mousedown", clickOutsideToClose);
    };
  }, []);

  return (
    <header className="bg-bodyColor w-screen fixed top-0 left-0 z-50">
      <nav className="relative container flex flex-row justify-between items-center h-[3.5rem] sm:h-[4.5rem">
        <a href="/" className="font-titleColor text-[18px] font-mediumWeight">
          p.Gitonga
        </a>
        <div
          ref={menuRef}
          className={
            showMenu
              ? "absolute left-3 top-0 right-3 grid grid-cols-3 shadow-md rounded-sm gap-[2.5rem] pt-[4rem] pb-[2rem] px-[1.5rem] mt-14 sm:rounded-none sm:shadow-none sm:py-0 sm:px-0 sm:mt-0 sm:relative sm:gap-0 sm:flex sm:justify-evenly sm:items-center sm:space-x-[1.5rem] md:space-x-[2rem] lg:space-x-[3rem]"
              : "hidden sm:rounded-none sm:shadow-none sm:py-0 sm:px-0 sm:mt-0 sm:relative sm:gap-0 sm:flex sm:justify-evenly sm:items-center sm:space-x-[1.5rem] md:space-x-[2rem] lg:space-x-[3rem]"
          }
        >
          <a
            href="#about"
            className="flex flex-col-reverse gap-1 items-center font-mediumWeight text-smallFontSize group text-titleColor sm:gap-0"
          >
            <span className="group-hover:text-titleColorDark group-hover:font-semiBolded group-hover:underline group-hover:underline-offset-2">
              About
            </span>
            <span className="text-h3FontSize sm:hidden">
              <BiUser />
            </span>
          </a>
          <a
            href="#skills"
            className="flex flex-col-reverse gap-1 items-center font-mediumWeight text-smallFontSize group text-titleColor sm:gap-0"
          >
            <span className="group-hover:text-titleColorDark group-hover:font-semiBolded group-hover:underline group-hover:underline-offset-2">
              Skills
            </span>
            <span className="text-h3FontSize sm:hidden">
              <BiWrench />
            </span>
          </a>
          <a
            href="#projects"
            className="flex flex-col-reverse gap-1 items-center font-mediumWeight text-smallFontSize group text-titleColor sm:gap-0"
          >
            <span className="group-hover:text-titleColorDark group-hover:font-semiBolded group-hover:underline group-hover:underline-offset-2">
              Projects
            </span>
            <span className="text-h3FontSize sm:hidden">
              <FaTasks />
            </span>
          </a>
          <a
            href="#services"
            className="flex flex-col-reverse gap-1 items-center font-mediumWeight text-smallFontSize group text-titleColor sm:gap-0"
          >
            <span className="group-hover:text-titleColorDark group-hover:font-semiBolded group-hover:underline group-hover:underline-offset-2">
              Services
            </span>
            <span className="text-h3FontSize sm:hidden">
              <BiBriefcase />
            </span>
          </a>
          <a
            href="#contact"
            className="flex flex-col-reverse gap-1 items-center font-mediumWeight text-smallFontSize group text-titleColor sm:gap-0"
          >
            <span className="group-hover:text-titleColorDark group-hover:font-semiBolded group-hover:underline group-hover:underline-offset-2">
              Contact
            </span>
            <span className="text-h3FontSize sm:hidden">
              <IoIosSend />
            </span>
          </a>
          <Link
            to="/cv"
            className="flex flex-col-reverse gap-1 items-center font-mediumWeight text-smallFontSize group text-titleColor sm:gap-0"
          >
            <span className="group-hover:text-titleColorDark group-hover:font-semiBolded group-hover:underline group-hover:underline-offset-2">
              Resume
            </span>
            <span className="text-h3FontSize sm:hidden">
              <FaRegFilePdf />
            </span>
          </Link>
        </div>
        <div className="sm:hidden">
          <BiMenu
            className={showMenu ? "hidden" : "block"}
            size={24}
            onClick={(e) => setShowMenu(!showMenu)}
          />
          <BiX
            className={showMenu ? "block" : "hidden"}
            size={24}
            onClick={(e) => setShowMenu(!showMenu)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
