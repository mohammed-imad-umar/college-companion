import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Dashboard from "./pages/Dashboard";
import CGPACalculator from "./pages/CGPACalculator";
import AssignmentTracker from "./pages/AssignmentTracker";
import NotesApp from "./pages/NotesApp";
import ClassLinks from "./pages/ClassLinks";
import SyllabusVault from "./pages/SyllabusVault";
import AttendanceTracker from "./pages/AttendanceTracker";
import TimeTablePlanner from "./pages/TimeTablePlanner";
import StickyNotes from "./pages/StickyNotes";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cgpa" element={<CGPACalculator />} />
          <Route path="/assignments" element={<AssignmentTracker />} />
          <Route path="/notes" element={<NotesApp />} />
          <Route path="/class-links" element={<ClassLinks />} />
          <Route path="/syllabus" element={<SyllabusVault />} />
          <Route path="/attendance" element={<AttendanceTracker />} />
          <Route path="/timetable" element={<TimeTablePlanner />} />
          <Route path="/sticky-notes" element={<StickyNotes />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}