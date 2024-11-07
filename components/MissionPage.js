"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MissionPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-2 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          Our Mission
        </motion.h2>

        {/* Mission Description */}
        <motion.p
          className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}>
          At Oldstitch, our mission is to redefine the textile industry by
          embracing innovation, sustainability, and quality. We strive to push
          boundaries with eco-friendly materials and cutting-edge technology,
          offering our clients top-tier products that help create a better
          future.
        </motion.p>

        {/* Animated Vector */}
        <div className="flex justify-center mb-12">
          <motion.div
            className="relative w-full max-w-lg"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-full h-auto"
              fill="none">
              {/* Animated Vector (Simple SVG) */}
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke="#4C4370"
                strokeWidth="4"
                fill="transparent"
                animate={{
                  r: [40, 45, 40],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.path
                d="M 20,80 C 40,60 60,60 80,80"
                stroke="#4C4370"
                strokeWidth="4"
                fill="transparent"
                animate={{
                  strokeDashoffset: [100, 0],
                  opacity: [0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}>
          <a
            href="#"
            className="bg-[#4C4370] text-white py-3 px-8 rounded-full text-lg hover:bg-[#3c3a61] transition-colors">
            Join Us in Our Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
