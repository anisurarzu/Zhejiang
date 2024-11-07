"use client";

import React from "react";
import {
  FaLeaf,
  FaLightbulb,
  FaCheckCircle,
  FaHandshake,
} from "react-icons/fa"; // Import icons from react-icons
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <div className="min-h-screen text-gray-800 font-poppins mt-6">
      {/* Page Header */}

      {/* Mission Section */}
      <section className="py-2 px-6 sm:px-16 text-center bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            What We Stand For
          </h2>

          {/* Values Cards with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sustainability */}
            <div className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-[#4C4370] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaLeaf className="text-[#4C4370] text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We are committed to sourcing eco-friendly fabrics that minimize
                our environmental impact. Our sustainable practices ensure a
                greener future for the fashion industry.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-[#4C4370] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaLightbulb className="text-[#4C4370] text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                Our team continuously explores new textile technologies and
                innovative designs to offer unique fabrics that push the
                boundaries of fashion.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-[#4C4370] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaCheckCircle className="text-[#4C4370] text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Quality
              </h3>
              <p className="text-gray-600">
                We ensure every fabric we source adheres to the highest
                standards of quality, giving our clients products that are built
                to last and withstand the test of time.
              </p>
            </div>

            {/* Customer-Centric */}
            <div className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-[#4C4370] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaHandshake className="text-[#4C4370] text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Customer-Centric
              </h3>
              <p className="text-gray-600">
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
