/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar background color
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true); // Set navbar to solid color when scrolled
    } else {
      setScrolled(false); // Set navbar to transparent when at top
    }
  };

  // Add event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled ? 'bg-gray-900 bg-opacity-70' : 'bg-gray-950 bg-opacity-90'
      } backdrop-blur-md`}
    >
      <nav className="flex justify-between items-center px-6 py-4 font-poppins">
        {/* Company Logo */}
        <div className="text-3xl font-bold text-white flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/logo.png" // Replace with your logo path
              alt="C"
              className="h-10 mr-3"
            />
          </a>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex space-x-10 text-lg">
          <a
            href="/"
            className="text-white hover:text-indigo-300 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/fabric"
            className="text-white hover:text-indigo-300 transition-colors duration-300"
          >
            Fabric
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-70 text-white text-center py-4 backdrop-blur-md">
          <a
            href="/"
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/fabric"
            className="block py-2 px-4 hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Fabric
          </a>
        </div>
      )}
    </div>
  );
}
