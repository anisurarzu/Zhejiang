import React from "react";
import Navbar from "./Navbar"; // Assuming Navbar is in the same directory
import Sidebar from "./Sidebar"; // Assuming Sidebar is in the same directory

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 text-white p-4">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-100 p-6">
          {children} {/* This renders the content of the ProductList page */}
        </div>
      </div>
    </div>
  );
}
