/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "@fontsource/poppins";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to store authentication status

  // Handle scroll event to toggle shadow
  const handleScroll = () => {
    setScrolled(window.scrollY > 10); // Add shadow when scrolled
  };

  // Add event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Check if a valid token is present in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // If token exists, set authenticated
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled ? "shadow-lg bg-white" : "bg-white"
      }`}
    >
      <nav className="flex justify-between items-center px-6 py-3 font-poppins">
        {/* Company Name in place of Logo */}
        <div className="text-2xl font-semibold text-gray-800 flex items-center">
          <Link href="/" className="flex items-center">
            Lanhong Textile
          </Link>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link
            href="/"
            className="text-gray-600 hover:text-orange-500 transition-colors duration-300 relative"
          >
            <span className="hover-underline">Home</span>
          </Link>
          <Link
            href="/fabric"
            className="text-gray-600 hover:text-orange-500 transition-colors duration-300 relative"
          >
            <span className="hover-underline">Fabric</span>
          </Link>
          
          {/* Conditionally render the Dashboard link */}
          {isAuthenticated && (
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-300 relative"
            >
              <span className="hover-underline">Dashboard</span>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
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
        <div className="md:hidden bg-white text-gray-800 text-center py-3 shadow-lg">
          <Link
            href="/"
            className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/fabric"
            className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500"
            onClick={() => setMenuOpen(false)}
          >
            Fabric
          </Link>
          {/* Conditionally render the Dashboard link in mobile menu */}
          {isAuthenticated && (
            <Link
              href="/dashboard"
              className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
