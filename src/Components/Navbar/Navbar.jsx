import React from 'react';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed  padding-top bg-white top-0 w-full z-50 ">
      <div className="flex justify-center items-center px-6 py-4 backdrop-blur-md ">

        {/* Container for all three parts */}
        <div className="flex items-center gap-20 font-light text-sm tracking-wide text-gray-800">

          {/* Left Links */}
          <div className="flex gap-10">
            <NavLink to="/" className="text-black hover:text-[#a88f6b]">Home</NavLink>
            <NavLink to="/about" className="text-black hover:text-[#a88f6b]">About</NavLink>
          </div>

          {/* Logo in center */}
          <div className="flex items-center justify-center">
          <Logo/>
          </div>

          {/* Right Links */}
          <div className="flex gap-10">
            <NavLink to="/gallery" className="text-black hover:text-[#a88f6b]">Gallery</NavLink>
            <NavLink to="/contact" className="text-black hover:text-[#a88f6b]">Contact Us</NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
}
