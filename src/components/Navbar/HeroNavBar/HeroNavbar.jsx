import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/itp-logo.png";
import newLogo from '../../../assets/newLOGO.png'

export default function HeroNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 md:text-white z-10">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={newLogo} alt="logo" className="md:cursor-pointer h-12 bg-white " />
          <div className={open ? 'text-puple-800 text-3xl md:hidden' : 'text-3xl text-white md:hidden'} onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
        <NavLink end to="/" style={({isActive}) => ({
          backgroundColor: isActive ? '#59436c' : '#111827'
          })}>
          <li className='hover:bg-[#59436c] block w-32 py-2 rounded-md font-medium text-center'>
            HOME
          </li>
        </NavLink>
        <NavLink end to="/about" style={({isActive}) => ({
          backgroundColor: isActive ? '#59436c' : '#111827'
          })}>
          <li className='hover:bg-[#59436c]  block w-32 py-2 rounded-md font-medium text-center'>
            ABOUT
          </li>
        </NavLink>
        <NavLink to="/contact" style={({isActive}) => ({
          backgroundColor: isActive ? '#59436c' : '#111827',
          })}>
            <li className='hover:bg-[#59436c] block w-32 py-2 rounded-md font-medium text-center'>
              CONTACT
            </li>
          </NavLink>
          <li>
            <a href="https://atharvacoe.ac.in/" target="_blank" className="py-2 inline-block hover:bg-[#59436c] w-32 py-2 rounded-md font-medium text-center">
              ACE
            </a>
          </li>
          {/* <li>
            <a href="http://192.169.226.38/~vtplapps/gpm/gpm_w22/index.php" target="_blank" className="py-2 inline-block hover:bg-[#59436c] w-32 py-2 rounded-md font-medium text-center">
              MIS Portal
            </a>
          </li> */}
        </ul>
        {/* <div className=""> */}
          <NavLink to="/login" className="md:block hidden bg-primary px-6 py-2 rounded-lg hover:bg-purple-800 hover:text-black border-2 border-purple-800">
            <button className="">
              Log In
            </button>
            </NavLink>
        {/* </div> */}
        
        {/* Mobile nav */}
        <ul
        className={` z-10
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}>
        <li>
            <NavLink to="/" className="py-7 px-3 inline-block">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="py-7 px-3 inline-block">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="py-7 px-3 inline-block">
              Contact
            </NavLink>
          </li>
          <li>
            <a href="https://atharvacoe.ac.in/" target="_blank" className="py-7 px-3 inline-block">
              ACE
            </a>
          </li>
          {/* <li>
            <a hreg="http://192.169.226.38/~vtplapps/gpm/gpm_w22/index.php" target="__blank" className="py-7 px-3 inline-block">
              MIS Portal
            </a>
          </li> */}
          <div className="py-5">
          <NavLink to="/login">
            <button className="text-white  bg-purple-800  px-6 py-2 rounded-full">
              Log In
            </button>
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
};
