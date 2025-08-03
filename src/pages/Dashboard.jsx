// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Dashboard = () => {
  const { darkMode, toggleTheme } = useTheme();

  const features = [
    { name: "CGPA Calculator", path: "/cgpa" },
    { name: "Assignment Tracker", path: "/assignments" },
    { name: "Notes App", path: "/notes" },
    { name: "Class Links", path: "/class-links" },
    { name: "Syllabus Vault", path: "/syllabus" },
    { name: "Attendance Tracker", path: "/attendance" },
    { name: "Timetable Planner", path: "/timetable" },
    { name: "Sticky Notes", path: "/sticky-notes" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome to College Companion</h1>
        <button
          onClick={toggleTheme}
          className="glow-button px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <Link
            key={idx}
            to={feature.path}
            className="glow-button bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-xl shadow-md text-xl text-center transition-all duration-300"
          >
            {feature.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;