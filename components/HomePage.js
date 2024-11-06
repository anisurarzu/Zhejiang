"use client"; // Ensures this component runs on the client side

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Mission from "./Mission";

export default function HomePage() {
  // Define the carousel images
  const images = [
    "/img/bg.jpg", // Replace with your image paths
    "/img/car.jpg",
  ];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    // Clean up the interval when component is unmounted
    return () => clearInterval(intervalId);
  }, [images.length]);

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Section */}
      <Navbar />

      {/* Carousel Section */}
      <div className="relative w-full h-[500px] overflow-hidden bg-gray-900 mt-[72px]">
        <img
          src={images[currentIndex]} // Display the current image based on the index
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 p-48">
          <div className="bg-gray-50 bg-opacity-70 p-4 w-full rounded flex text-center justify-center items-center space-x-4">
            <div className="text-3xl text-black font-popins font-bold text-center justify-center items-center">This site is under construction</div>
          </div>
        </div>

        {/* Carousel Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        >
          &#9664;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        >
          &#9654;
        </button>
      </div>

      {/* Product Cards Section */}
      {/* <ProductCard /> */}
      <Mission />

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="text-center">
          <h3 className="text-lg font-bold">Oldstitch</h3>
          <p className="text-sm mt-2">
            © 2024 Zhejiang Lanhong Textile Technology Co., LTD
          </p>
          <p className="mt-1">All rights reserved.</p>
        </div>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
}
