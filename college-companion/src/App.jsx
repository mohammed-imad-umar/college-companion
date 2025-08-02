import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

import Dashboard from "./pages/Dashboard";
import CGPACalculator from "./pages/CGPACalculator";
import AssignmentTracker from "./pages/AssignmentTracker";
import NotesApp from "./pages/NotesApp";
import ClassLinks from "./pages/ClassLinks";
import SyllabusVault from "./pages/SyllabusVault";
import AttendanceTracker from "./pages/AttendanceTracker";
import TimeTablePlanner from "./pages/TimeTablePlanner";
import StickyNotes from "./pages/StickyNotes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(delay);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cgpa" element={<CGPACalculator />} />
        <Route path="/assignments" element={<AssignmentTracker />} />
        <Route path="/notes" element={<NotesApp />} />
        <Route path="/links" element={<ClassLinks />} />
        <Route path="/syllabus" element={<SyllabusVault />} />
        <Route path="/attendance" element={<AttendanceTracker />} />
        <Route path="/timetable" element={<TimeTablePlanner />} />
        <Route path="/stickynotes" element={<StickyNotes />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;