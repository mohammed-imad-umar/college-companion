import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Dashboard from "./pages/Dashboard";
import CGPA from "./pages/CGPA";
import Assignments from "./pages/Assignments";
import Notes from "./pages/Notes";
import ClassLinks from "./pages/ClassLinks";
import Syllabus from "./pages/Syllabus";
import Attendance from "./pages/Attendance";
import Timetable from "./pages/Timetable";
import StickyNotes from "./pages/StickyNotes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cgpa" element={<CGPA />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/class-links" element={<ClassLinks />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/sticky-notes" element={<StickyNotes />} />
      </Routes>
      <Footer />
    </Router>
  );
}