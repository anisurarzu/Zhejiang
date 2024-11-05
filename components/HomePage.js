import React from "react";

export default function HomePage() {
  return (
    <div>
      <div
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url(/img/bg.jpg)",
        }}
      >
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          {/* Under Construction Message */}
          <h1 className="text-4xl sm:text-4xl md:text-4xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg mt-2">
            Coming Soon
          </h1>
          <p className="text-xl sm:text-3xl md:text-2xl font-semibold mb-6 max-w-2xl drop-shadow-lg">
            Our site is currently under construction. We’re working hard to
            bring you an exceptional experience!
          </p>
          <p className="text-lg md:text-xl opacity-90 mb-12">
            Expected Launch:{" "}
            <span className="text-yellow-300 font-bold">Soon</span>
          </p>

          {/* Company Information Card */}
          <div className="bg-white bg-opacity-90 text-gray-800 rounded-lg shadow-2xl p-4 md:p-4 w-full max-w-3xl space-y-8 border border-gray-200">
            <div className="text-center mb-6">
              <p className="text-2xl font-extrabold text-gray-900 tracking-wide mb-2">
                Oldstitch
              </p>
              <p className="text-sm text-gray-600 italic">
                Zhejiang Lanhong Textile Technology Co., LTD
              </p>
            </div>

            <div className="space-y-6">
              {/* Dhaka Office */}
              <div className="border-l-4 border-yellow-400 pl-4">
                <p className="font-semibold text-lg text-gray-900">
                  Dhaka Office
                </p>
                <p className="text-gray-700 mt-1 text-sm">
                  Level #2, House # 18, Road #10, Sector #1, Uttara, Dhaka-1230
                </p>
                <p className="text-gray-700 text-sm">Phone: +8801784393953</p>
                <p className="text-gray-700 text-sm">
                  Email:{" "}
                  <span className="text-blue-600 underline">
                    info@lanhongtextile.com
                  </span>
                </p>
              </div>

              {/* Zhejiang Office */}
              <div className="border-l-4 border-yellow-400 pl-4">
                <p className="font-semibold text-lg text-gray-900">
                  Zhejiang Office
                </p>
                <p className="text-gray-700 mt-1 text-sm">
                  Room 701, Building 1, Conan Business Center, Keqiao District,
                  Shaoxing, Zhejiang
                </p>
              </div>

              {/* Dongguan Office */}
              <div className="border-l-4 border-yellow-400 pl-4">
                <p className="font-semibold text-lg text-gray-900">
                  Dongguan Office
                </p>
                <p className="text-gray-700 mt-1 text-sm">
                  145 Renmin North Road, Humen Town, Dongguan City, Guangdong
                  Province
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
