// src/pages/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

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

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 pt-20">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-400">
        Welcome to College Companion
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <button
            key={index}
            className="bg-blue-600 glow-button hover:bg-blue-800 transition-all p-6 rounded-2xl shadow-lg text-lg font-semibold"
            onClick={() => navigate(feature.path)}
          >
            {feature.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;