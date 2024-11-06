"use client";
import React, { useState } from "react";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setError(""); // Clear any previous errors
    // Simulate login logic (replace with actual logic)
    console.log("User ID:", userId);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* User ID Field */}
          <div className="mb-6">
            <label
              htmlFor="userId"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              User ID
            </label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your user ID"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>

        {/* Sign-up and Forgot Password Links */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Dont have an account?{" "}
            <a href="/registration" className="text-indigo-600 hover:text-indigo-700">
              Sign Up
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Forgot your password?{" "}
            <a href="/reset-password" className="text-indigo-600 hover:text-indigo-700">
              Reset it
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
