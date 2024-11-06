import React from "react";

export default function Mission() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-poppins mt-6">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4">Our Mission</h1>
        <p className="text-xl md:text-2xl">
          Committed to Sourcing the Finest Fabrics with Integrity and Precision
        </p>
      </div>

      {/* Mission Section */}
      <section className="py-16 px-6 sm:px-16 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Lanhong Textile, we are dedicated to providing the highest quality,
            sustainable, and innovative fabrics for the global garment industry.
            Our goal is to bring together cutting-edge designs and ethically
            sourced textiles to create garments that are not only beautiful but
            also eco-friendly and durable.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We are committed to sourcing eco-friendly fabrics that minimize
                our environmental impact. Our sustainable practices ensure a
                greener future for the fashion industry.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                Our team continuously explores new textile technologies and
                innovative designs to offer unique fabrics that push the
                boundaries of fashion.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Quality
              </h3>
              <p className="text-gray-600">
                We ensure every fabric we source adheres to the highest
                standards of quality, giving our clients products that are built
                to last and withstand the test of time.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
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

      {/* Call to Action */}
      <section className="bg-gray-800 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-4">Partner With Us</h2>
        <p className="text-lg mb-8">
          Let’s work together to bring high-quality, sustainable fabrics to your
          fashion collections. Join us in making a positive impact on the
          fashion industry.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white text-lg font-semibold py-4 px-12 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
