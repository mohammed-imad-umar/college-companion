// src/pages/Dashboard.jsx
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();

  const buttons = [
    { label: "CGPA Calculator", path: "/cgpa" },
    { label: "Assignment Tracker", path: "/assignments" },
    { label: "Notes App", path: "/notes" },
    { label: "Class Links", path: "/class-links" },
    { label: "Syllabus Vault", path: "/syllabus" },
    { label: "Attendance Tracker", path: "/attendance" },
    { label: "Timetable Planner", path: "/timetable" },
    { label: "Sticky Notes", path: "/sticky-notes" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-8 p-6">
      <div className="flex justify-between w-full max-w-xl">
        <h1 className="text-xl font-bold">
          Welcome, Mohammed Imad Umar
        </h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-1 rounded bg-gray-700 hover:bg-gray-600 text-sm"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="w-full max-w-md flex flex-col gap-4">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => navigate(btn.path)}
            className="glow-button bg-blue-600 hover:bg-blue-700 text-white py-2 rounded w-full"
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;