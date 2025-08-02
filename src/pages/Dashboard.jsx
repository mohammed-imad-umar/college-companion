import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();

  const features = [
    { name: "CGPA Calculator", path: "/cgpa" },
    { name: "Assignments Tracker", path: "/assignments" },
    { name: "Notes App", path: "/notes" },
    { name: "Class Links", path: "/class-links" },
    { name: "Syllabus Vault", path: "/syllabus" },
    { name: "Attendance Tracker", path: "/attendance" },
    { name: "Timetable Planner", path: "/timetable" },
    { name: "Sticky Notes", path: "/sticky-notes" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold tracking-wide">College Companion</h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-700 transition duration-300"
        >
          {darkMode ? <Sun className="text-yellow-300" /> : <Moon />}
        </button>
      </div>

      {/* Feature Buttons */}
      <div className="w-full max-w-md mt-6 space-y-4">
        {features.map((feature, idx) => (
          <button
            key={idx}
            onClick={() => navigate(feature.path)}
            className="glow-button w-full py-3 rounded bg-blue-600 hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-md"
          >
            {feature.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
