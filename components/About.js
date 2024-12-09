"use client";
import React from "react";

export default function About() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/img/textile.mp4" // Replace with the path to your video
        autoPlay
        loop
        muted
      />

      {/* Overlay for darkening the video */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-white flex items-center justify-center">
        {/* Transparent Card */}
        <div className="bg-gray-900 bg-opacity-60 rounded-lg shadow-lg p-6 md:p-10 lg:p-12 text-center w-full max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            At <span className="font-semibold">Oldstitch</span>, we are
            reshaping the future of textiles with a commitment to
            sustainability, innovation, and unmatched quality. Our passion lies
            in crafting eco-friendly materials and leveraging cutting-edge
            technology to deliver products that not only meet but exceed
            expectations. Every piece we create reflects our dedication to
            preserving the planet and setting new benchmarks in the industry.
            Together, let’s weave a sustainable and brighter tomorrow—one
            stitch at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
