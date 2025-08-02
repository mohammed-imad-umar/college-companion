import { useEffect, useState } from "react";

const AssignmentTracker = () => {
  const [assignments, setAssignments] = useState([]);
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("assignments");
    if (stored) {
      setAssignments(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  const addAssignment = () => {
    if (!title || !dueDate) return alert("Please fill all fields");

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
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Assignment Tracker</h1>
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Assignment Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="p-2 bg-gray-800 border border-gray-700 rounded"
          />
          <button
            onClick={addAssignment}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {assignments.map((assignment) => (
            <li
              key={assignment.id}
              className="bg-gray-800 p-4 rounded flex justify-between items-center"
            >
              <div>
                <h2
                  className={`text-lg font-semibold ${
                    assignment.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {assignment.title}
                </h2>
                <p className="text-sm text-gray-400">Due: {assignment.dueDate}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleComplete(assignment.id)}
                  className="text-sm bg-green-600 px-3 py-1 rounded hover:bg-green-700"
                >
                  {assignment.completed ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => deleteAssignment(assignment.id)}
                  className="text-sm bg-red-600 px-3 py-1 rounded hover:bg-red-700"
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