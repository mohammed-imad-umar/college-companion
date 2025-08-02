// src/auth/Signup.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy signup logic - Replace with real authentication later
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 dark:text-white">Sign Up</h2>

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-3 py-2 mb-3 rounded border dark:bg-gray-700 dark:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-3 py-2 mb-3 rounded border dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="glow-button bg-blue-600 hover:bg-blue-700 text-white py-2 rounded w-full"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;