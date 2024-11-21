import React, { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.clear(); // Clear all items in local storage
    window.location.href = "/"; // Redirect to home page
  };

  return (
    <div
      className={`fixed top-16 left-0 h-full ${
        isCollapsed ? "w-16" : "w-64"
      } bg-white shadow-lg transition-all duration-300 z-50 flex flex-col justify-between`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute -right-4 top-6 bg-gray-200 rounded-full p-1 shadow-md ${
          isCollapsed ? "rotate-180" : ""
        } transition-transform`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Sidebar Options */}
      <div className="flex-grow overflow-y-auto">
        <ul className="space-y-4 p-6">
          <li>
            <Link
              href="/addProduct"
              className={`flex items-center space-x-3 text-gray-700 hover:text-white hover:bg-orange-500 rounded-md px-3 py-2 transition ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              {!isCollapsed && <span>Add Product</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/allProduct"
              className={`flex items-center space-x-3 text-gray-700 hover:text-white hover:bg-orange-500 rounded-md px-3 py-2 transition ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 17l-4-4m0 0l4-4m-4 4h12"
                />
              </svg>
              {!isCollapsed && <span>All Product</span>}
            </Link>
          </li>
          {/* Logout Option */}
          <li>
            <button
              onClick={handleLogout}
              className={`flex items-center space-x-3 text-gray-700 hover:text-white hover:bg-red-500 rounded-md px-3 py-2 w-full transition ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                />
              </svg>
              {!isCollapsed && <span>Logout</span>}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
