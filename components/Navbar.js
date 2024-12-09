/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "@fontsource/poppins";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons from React Icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handle scroll event to toggle shadow
  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  // Add event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled ? "shadow-lg bg-white" : "bg-gray-800/50"
      }`}
    >
      <nav className="flex justify-between items-center px-6 py-4 font-poppins">
        {/* Left: Company Name */}
        <div
          className={`text-2xl font-semibold flex items-center ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <span className="tracking-wide leading-tight font-sans">
            Lanhong Textile
          </span>
        </div>

        {/* Center: Menu Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link
            href="/"
            className={`${
              scrolled ? "text-gray-900" : "text-gray-50"
            } hover:text-orange-500 transition-all duration-300 font-sans font-semibold`}
          >
            Home
          </Link>
          <Link
            href="/fabric"
            className={`${
              scrolled ? "text-gray-900" : "text-gray-50"
            } hover:text-orange-500 transition-all duration-300 font-sans font-semibold`}
          >
            Fabric
          </Link>
          {isAuthenticated && (
            <Link
              href="/dashboard"
              className={`${
                scrolled ? "text-gray-900" : "text-gray-50"
              } hover:text-orange-500 transition-all duration-300 font-sans font-semibold`}
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className={`${
              scrolled ? "text-gray-900" : "text-gray-50"
            } hover:text-orange-500 transition-all duration-300 font-sans font-bold`}
          >
            Oldstitch
          </Link>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              scrolled ? "text-blue-600" : "text-white"
            } hover:text-orange-500 transition-all duration-300`}
          >
            <FaFacebook className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              scrolled ? "text-sky-500" : "text-white"
            } hover:text-orange-500 transition-all duration-300`}
          >
            <FaTwitter className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              scrolled ? "text-pink-500" : "text-white"
            } hover:text-orange-500 transition-all duration-300`}
          >
            <FaInstagram className="h-5 w-5" />
          </a>
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
