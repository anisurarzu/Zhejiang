"use client";

import React from "react";
import {
  FaLeaf,
  FaLightbulb,
  FaCheckCircle,
  FaHandshake,
} from "react-icons/fa"; // Import icons from react-icons

export default function Mission() {
  return (
    <div className="text-gray-800 font-poppins">
      {/* Mission Section */}
      <section className="py-12 px-6 sm:px-16 text-center bg-gradient-to-r ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
            What We Stand For
          </h2>

          {/* Values Cards with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Sustainability */}
            <div className="bg-gradient-to-r from-green-400 to-green-500 shadow-xl p-8 rounded-xl border-t-4 border-green-600 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-green-50">
              <FaLeaf className="text-white text-5xl mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Sustainability</h3>
              <p className="text-white opacity-80">
                We are committed to sourcing eco-friendly fabrics that minimize
                our environmental impact. Our sustainable practices ensure a
                greener future for the fashion industry.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-xl p-8 rounded-xl border-t-4 border-yellow-600 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-yellow-50">
              <FaLightbulb className="text-white text-5xl mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-white opacity-80">
                Our team continuously explores new textile technologies and
                innovative designs to offer unique fabrics that push the
                boundaries of fashion.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 shadow-xl p-8 rounded-xl border-t-4 border-blue-600 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
              <FaCheckCircle className="text-white text-5xl mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Quality</h3>
              <p className="text-white opacity-80">
                We ensure every fabric we source adheres to the highest
                standards of quality, giving our clients products that are built
                to last and withstand the test of time.
              </p>
            </div>

            {/* Customer-Centric */}
            <div className="bg-gradient-to-r from-pink-400 to-pink-500 shadow-xl p-8 rounded-xl border-t-4 border-pink-600 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-pink-50">
              <FaHandshake className="text-white text-5xl mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Customer-Centric</h3>
              <p className="text-white opacity-80">
                We believe in forging lasting partnerships with our clients. By
                understanding their needs and offering personalized solutions,
                we ensure their satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
