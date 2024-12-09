"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MissionPage() {
  return (
    <section className="bg-gradient-to-r from-gray-100 via-orang-100 to-orange-100 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          Our Mission
        </motion.h2>

        {/* Mission Description */}
        <motion.p
          className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
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
        {/* Call to Action */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}>
          <a
            href="#"
            className="bg-[#4C4370] text-white py-4 px-10 rounded-full text-lg shadow-lg hover:bg-[#3c3a61] transition-colors transform hover:scale-105">
            Join Us in Our Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
