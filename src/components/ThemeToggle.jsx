import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-5 right-5 p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
      aria-label="Toggle Theme"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
