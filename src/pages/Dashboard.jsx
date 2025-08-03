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
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} p-6 transition-colors duration-300`}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome to College Companion</h1>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 glow-button px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 shadow-lg transition duration-300"
        >
          {darkMode ? (
            <>
              <span>🌞</span>
              <span className="font-semibold">Light Mode</span>
            </>
          ) : (
            <>
              <span>🌙</span>
              <span className="font-semibold">Dark Mode</span>
            </>
          )}
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