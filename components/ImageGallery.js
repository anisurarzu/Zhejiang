"use client";
import React from "react";
import { motion } from "framer-motion"; // Importing for animations

const images = [
  "/img/cl-1.jpg", // Replace with your actual image paths
  "/img/cl-2.jpg",
  "/img/cl-3.jpg",
  "/img/cl-4.jpg",
  "/img/cl-5.jpg",
  "/img/cl-6.jpg",
  "/img/cl-7.jpg",
  "/img/cl-8.jpg",
];

export default function ImageGallery() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}>
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-80 h-60 object-cover rounded-lg"
              />
              <motion.div
                className="absolute inset-0  opacity-40"
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
