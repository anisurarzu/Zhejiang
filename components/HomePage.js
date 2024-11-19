"use client";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Mission from "./Mission";
import { motion, AnimatePresence } from "framer-motion"; // Import for animations
import ImageGallery from "./ImageGallery";
import MissionPage from "./MissionPage";

export default function HomePage() {
  const images = ["/img/bg.jpg", "/img/car.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Carousel Section */}
        <div className="relative w-full h-[600px] overflow-hidden bg-gray-900 mt-[72px]">
          {/* Animated Image Slider with Zoom In */}
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              initial={{ opacity: 0, scale: 1.1 }} // Slight zoom-in initially
              animate={{ opacity: 1, scale: 1 }} // Normal scale on animation
              exit={{ opacity: 0, scale: 1.1 }} // Slight zoom-in on exit
              transition={{ duration: 3 }} // Increase duration to make the zoom slower
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Gradient Overlay with Parallax Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#4C4370] to-transparent opacity-80"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1 }}
          />

        

          {/* Carousel Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full opacity-75 hover:opacity-100 transition-opacity shadow-lg hover:shadow-xl">
            &#9664;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full opacity-75 hover:opacity-100 transition-opacity shadow-lg hover:shadow-xl">
            &#9654;
          </button>
        </div>

        {/* Product Cards Section */}
        <Mission />
        <MissionPage />

        <ImageGallery />

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
    </>
  );
}
