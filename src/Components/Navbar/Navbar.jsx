import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = "text-black hover:text-[#a88f6b] transition";

  return (
    <nav className="fixed bg-white top-0 w-full z-50 shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 md:justify-center relative">

        {/* ====== Mobile Menu Button ====== */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-2xl text-[#a88f6b] focus:outline-none">
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* ====== Main Desktop Navbar ====== */}
        <div className="hidden md:flex items-center gap-20 font-light text-sm tracking-wide text-gray-800">
          {/* Left Links */}
          <div className="flex gap-10">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <Logo />
          </div>

          {/* Right Links */}
          <div className="flex gap-10">
            <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
          </div>
        </div>

        {/* ====== Logo Centered on Mobile ====== */}
        <div className="md:hidden absolute left-1/2 -translate-x-1/2">
          <Logo />
        </div>
      </div>

      {/* ====== Side Menu for Mobile ====== */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-start p-6 pt-20 gap-6 text-sm text-gray-800">
          <NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink>
          <NavLink to="/gallery" className={navLinkClass} onClick={closeMenu}>Gallery</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact Us</NavLink>
        </div>
      </div>

      {/* ===== Overlay ===== */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden" onClick={closeMenu}></div>
      )}
    </nav>
  );
}
