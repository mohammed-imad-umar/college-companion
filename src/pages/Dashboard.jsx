import React from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

const Dashboard = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-gray-900 text-white p-6 relative">
      {/* Theme Toggle Button */}
      <div className="absolute top-4 right-6">
        <ThemeToggle />
      </div>

      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome, Mohammed Imad Umar
      </h1>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <button
            key={index}
            onClick={() => navigate(feature.path)}
            className="glow-button bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded-xl shadow-md transition-all duration-300"
          >
            {feature.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;