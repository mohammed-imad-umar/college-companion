import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Dashboard from "./pages/Dashboard";

// Optional placeholders for now (you can create these feature pages later)
const Placeholder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center text-white bg-gray-900 text-2xl font-semibold">
    {title} - Coming Soon!
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Future feature routes */}
        <Route path="/cgpa" element={<Placeholder title="CGPA Calculator" />} />
        <Route path="/assignments" element={<Placeholder title="Assignments Tracker" />} />
        <Route path="/notes" element={<Placeholder title="Notes App" />} />
        <Route path="/class-links" element={<Placeholder title="Class Links" />} />
        <Route path="/syllabus" element={<Placeholder title="Syllabus Vault" />} />
        <Route path="/attendance" element={<Placeholder title="Attendance Tracker" />} />
        <Route path="/timetable" element={<Placeholder title="Timetable Planner" />} />
        <Route path="/sticky-notes" element={<Placeholder title="Sticky Notes" />} />
      </Routes>
      <Footer />
    </Router>
  );
}
