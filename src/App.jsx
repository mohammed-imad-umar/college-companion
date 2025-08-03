// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { ThemeProvider } from "./context/ThemeContext";

const Login = lazy(() => import("./auth/Login"));
const Signup = lazy(() => import("./auth/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const CGPACalculator = lazy(() => import("./pages/CGPACalculator"));
const AssignmentTracker = lazy(() => import("./pages/AssignmentTracker"));
const NotesApp = lazy(() => import("./pages/NotesApp"));
const ClassLinks = lazy(() => import("./pages/ClassLinks"));
const SyllabusVault = lazy(() => import("./pages/SyllabusVault"));
const AttendanceTracker = lazy(() => import("./pages/AttendanceTracker"));
const TimeTablePlanner = lazy(() => import("./pages/TimeTablePlanner"));
const StickyNotes = lazy(() => import("./pages/StickyNotes"));

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<Loader />}> {/* <-- Official loading screen */}
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
        </Suspense>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}