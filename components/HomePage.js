"use client";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Mission from "./Mission";
import { motion, AnimatePresence } from "framer-motion"; // Import for animations
import ImageGallery from "./ImageGallery";
import MissionPage from "./MissionPage";
import About from "./About";

export default function HomePage() {
  const images = [
    "/img/bg.jpg",
    "/img/bg-03.jpg",
    "/img/bg-04.jpg",
    "/img/bg-05.jpg",
  ];

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

      <div className="min-h-screen bg-gray-100">
        <Navbar />

        {/* Carousel Section */}
        <div className="relative w-full h-[750px] overflow-hidden bg-gray-900">
          {/* Sliding Image */}
          <AnimatePresence>
            {images.map((image, index) =>
              index === currentIndex ? (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  initial={{ x: "100%", opacity: 0 }} // Start from right (or left with "-100%")
                  animate={{ x: 0, opacity: 1 }} // Slide into view
                  exit={{ x: "-100%", opacity: 0 }} // Slide out to left (or right with "100%")
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute w-full h-full object-cover"
                />
              ) : null
            )}
          </AnimatePresence>

          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#4C4370] to-transparent opacity-80"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1 }}
          />

          {/* Dots Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex
                    ? "bg-white scale-110"
                    : "bg-gray-500 hover:bg-white"
                } transition-transform duration-300`}
              />
            ))}
          </div>
        </div>

        {/* Product Cards Section */}
        <Mission />
        <MissionPage />

        <ImageGallery />
        <About/>

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
