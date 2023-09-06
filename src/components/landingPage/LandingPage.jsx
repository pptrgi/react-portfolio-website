import React from "react";
import SocialIcons from "./SocialIcons";
import { IoIosSend } from "react-icons/io";

const LandingPage = () => {
  return (
    <section className="section min-h-screen h-screen flex justify-center items-center overflow-y-hidden">
      <div className="container h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex space-x-[0.75rem] items-center">
              <div className="block relative h-10 w-10 rounded-full overflow-hidden lg:hidden">
                <img
                  src="/images/forHome.png"
                  alt="peter-home-image"
                  className="absolute bg-gradient-to-br from-containerColor to-textColor h-full w-full object-cover z-10"
                />
              </div>
              <p className="text-normalFontSize text-textColor tracking-wide">
                Hi, meet me
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full sm:flex-row pb-[4rem] sm:pb-[10rem]">
            <div className="w-full lg:w-3/5">
              <div className="flex flex-col">
                <p className="text-[3rem] font-semiBolded capitalize truncate sm:text-[5rem]">
                  peter gitonga
                </p>
                <div className="flex space-x-[0.75rem] items-center ml-[0.5rem] sm:ml-[2rem] sm:space-x-[0.9rem]">
                  <span className="w-3 h-[2px] bg-textColor" />
                  <h4 className="capitalize text-h2FontSize">
                    fullstack developer
                  </h4>
                </div>
              </div>
              <div className="mt-[2.25rem] ">
                <p className="text-textColor text-normalFontSize tracking-wide leading-6 sm:max-w-[420px]">
                  A lifelong learner who enjoys creating and designing things
                  that live on the internet, and that might also include meme
                  making.
                </p>
              </div>
              <div className="group mt-[3.5rem] sm:mt-[4rem]">
                <a
                  href="#contact"
                  className="text-[1.125rem] text-containerColor bg-titleColor
          py-[0.75rem] px-[1.5rem] rounded-lg group-hover:bg-titleColorDark transition-all duration-200 tracking-wide"
                >
                  Let's chat
                  <span className=""></span>
                  <IoIosSend className="inline-block bg-transparent ml-[0.5rem] group-hover:bg-titleColorDark transition-all duration-200" />
                </a>
              </div>
            </div>
            <div className="hidden w-2/5 justify-end items-end lg:flex">
              <div className="relative h-[320px] w-[320px] rounded-full overflow-hidden">
                <img
                  src="/images/forHome.png"
                  alt="peter-home-image"
                  className="absolute bg-gradient-to-br from-containerColor to-textColor h-full w-full object-cover z-10"
                  loading="priority"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start pb-[1rem] sm:pb-0">
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
