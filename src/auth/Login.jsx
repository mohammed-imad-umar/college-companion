import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const storedUsername = localStorage.getItem("college_username");
    const storedPassword = localStorage.getItem("college_password");

    if (username === storedUsername && password === storedPassword) {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        {error && (
          <p className="mb-4 text-red-500 text-sm text-center">{error}</p>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full glow-button bg-blue-600 hover:bg-blue-700 text-white py-3 rounded"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-green-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}