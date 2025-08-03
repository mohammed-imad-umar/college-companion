import React, { useState, useEffect } from "react";

const AssignmentTracker = () => {
  const [assignments, setAssignments] = useState(() => {
    const saved = localStorage.getItem("college_assignments");
    return saved ? JSON.parse(saved) : [];
  });
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    localStorage.setItem("college_assignments", JSON.stringify(assignments));
  }, [assignments]);

  const addAssignment = () => {
    if (!title || !dueDate) return;
    const newAssignment = {
      id: Date.now(),
      title,
      dueDate,
      completed: false,
    };
    setAssignments([...assignments, newAssignment]);
    setTitle("");
    setDueDate("");
  };

  const toggleComplete = (id) => {
    setAssignments(
      assignments.map((a) =>
        a.id === id ? { ...a, completed: !a.completed } : a
      )
    );
  };

  const deleteAssignment = (id) => {
    setAssignments(assignments.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Assignment Tracker</h1>

      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Assignment Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
          <button
            onClick={addAssignment}
            className="glow-button bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {assignments.map((a) => (
            <li
              key={a.id}
              className={`flex justify-between items-center p-3 rounded bg-gray-800 transition shadow-md ${
                a.completed ? "opacity-50 line-through" : ""
              }`}
            >
              <div>
                <h3 className="font-semibold">{a.title}</h3>
                <p className="text-sm text-gray-400">Due: {a.dueDate}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleComplete(a.id)}
                  className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                >
                  {a.completed ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => deleteAssignment(a.id)}
                  className="text-xs bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssignmentTracker;