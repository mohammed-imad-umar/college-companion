import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import Dashboard from "./pages/Dashboard";
import CGPACalculator from "./pages/CGPACalculator";
import AssignmentTracker from "./pages/AssignmentTracker";
import NotesApp from "./pages/NotesApp";
import ClassLinks from "./pages/ClassLinks";
import SyllabusVault from "./pages/SyllabusVault";
import AttendanceTracker from "./pages/AttendanceTracker";
import TimeTablePlanner from "./pages/TimeTablePlanner";
import StickyNotes from "./pages/StickyNotes";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/cgpa"
          element={
            <PrivateRoute>
              <CGPACalculator />
            </PrivateRoute>
          }
        />
        <Route
          path="/assignments"
          element={
            <PrivateRoute>
              <AssignmentTracker />
            </PrivateRoute>
          }
        />
        <Route
          path="/notes"
          element={
            <PrivateRoute>
              <NotesApp />
            </PrivateRoute>
          }
        />
        <Route
          path="/links"
          element={
            <PrivateRoute>
              <ClassLinks />
            </PrivateRoute>
          }
        />
        <Route
          path="/syllabus"
          element={
            <PrivateRoute>
              <SyllabusVault />
            </PrivateRoute>
          }
        />
        <Route
          path="/attendance"
          element={
            <PrivateRoute>
              <AttendanceTracker />
            </PrivateRoute>
          }
        />
        <Route
          path="/timetable"
          element={
            <PrivateRoute>
              <TimeTablePlanner />
            </PrivateRoute>
          }
        />
        <Route
          path="/stickynotes"
          element={
            <PrivateRoute>
              <StickyNotes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;