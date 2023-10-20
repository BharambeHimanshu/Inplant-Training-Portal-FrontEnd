import React from "react";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
    return (
        <>
        <div className="bg-gradient-to-r from-indigo-300 h-[47.1rem] md:h-[55.5rem] overflow-hidden to-red-200 flex flex-col justify-center text-center text-black items-center ">
          <h1 className=" text-5xl font-semibold py-2">
          Atharva College Of Engineering
          </h1>
          <h3 className="md:text-5xl text-3xl md:text-gray-900 text-gray-800 font-medium py-4">Inplant Training Portal</h3>
          <h2 className="md:text-2xl text-xl md:text-gray-700 text-gray-600 md:font-medium py-4">An online communication tool for inplant training portal</h2>
          <div className="text-xl">
          <NavLink to="/login">
            <button className="px-6 py-2 bg-purple-800 border-purple-800 hover:text-purple-800 text-white rounded-lg hover:bg-transparent border-2 shadow-lg">
            Get Started
            </button>
            </NavLink>
          </div>
        </div>
        </>
    );
}