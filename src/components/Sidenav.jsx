import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineHomeRepairService } from "react-icons/md";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // const Sidenav = () => {
  //   const [nav, setNav] = useState(false);
  //   const handleNav = () => {
  //     setNav(!nav);
  //     console.log("state changed");
  //   };
  return (
    <div>
      <AiOutlineMenu
        size={30}
        color="white"
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-black/50 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-xl shadow-lg bg-accent shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineHome size={30} color="#3a4220" />
            <span className="pl-4 text-base font-medium text-green">Home</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-xl shadow-lg bg-accent shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineUser size={30} color="#3a4220" />
            <span className="pl-4 text-base font-medium text-green">About</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-xl shadow-lg bg-accent shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <OutlineHomeRepairService size={30} color="#3a4220" />
            <span className="pl-4 text-base font-medium text-green">
              Services
            </span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-xl shadow-lg bg-accent shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineProject size={30} color="#3a4220" />
            <span className="pl-4 text-base font-medium text-green">
              Projects
            </span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-xl shadow-lg bg-accent shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineMail size={30} color="#3a4220" />
            <span className="pl-4 text-base font-medium text-green">
              Contact
            </span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-accent shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <AiOutlineHome size={30} color="#3a4220" />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-lg bg-accent shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <AiOutlineUser size={30} color="#3a4220" />
          </a>
          <a
            href="#services"
            className="rounded-full shadow-lg bg-accent shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <MdOutlineHomeRepairService size={30} color="#3a4220" />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-accent shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <AiOutlineProject size={30} color="#3a4220" />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-accent shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <AiOutlineMail size={30} color="#3a4220" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

/* TODO: Make the Nav bar horizonal and fixed to the top of the page
    - make the mobile view of the page to be a hamburger menu
    - figure out the issue with smooth scrolling
    
*/
