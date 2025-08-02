import { useState, useEffect } from "react";

const AssignmentTracker = () => {
  const [assignments, setAssignments] = useState(() => {
    const stored = localStorage.getItem("assignments");
    return stored ? JSON.parse(stored) : [];
  });
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  const addAssignment = () => {
    if (!subject || !description || !date) return alert("Please fill all fields");

    const newAssignment = {
      id: Date.now(),
      subject,
      description,
      date,
      completed: false,
    };

    setAssignments([newAssignment, ...assignments]);
    setSubject("");
    setDescription("");
    setDate("");
  };

  const toggleComplete = (id) => {
    const updated = assignments.map((a) =>
      a.id === id ? { ...a, completed: !a.completed } : a
    );
    setAssignments(updated);
  };

  const deleteAssignment = (id) => {
    const updated = assignments.filter((a) => a.id !== id);
    setAssignments(updated);
  };

  return (
    <div className="text-white p-6 max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Assignment Tracker</h2>
      <div className="grid gap-4 mb-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="p-2 bg-gray-700 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 bg-gray-700 rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 bg-gray-700 rounded"
        />
      </div>
      <button
        onClick={addAssignment}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded mb-6"
      >
        Add Assignment
      </button>

      <ul className="space-y-4">
        {assignments.map((a) => (
          <li
            key={a.id}
            className={`flex justify-between items-center p-4 rounded-lg ${
              a.completed ? "bg-green-800" : "bg-gray-800"
            }`}
          >
            <div>
              <h3 className="font-semibold">{a.subject}</h3>
              <p className="text-sm text-gray-300">{a.description}</p>
              <p className="text-xs text-gray-400">Due: {a.date}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => toggleComplete(a.id)}
                className={`px-3 py-1 rounded text-sm ${
                  a.completed ? "bg-yellow-600" : "bg-green-600"
                }`}
              >
                {a.completed ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => deleteAssignment(a.id)}
                className="px-3 py-1 rounded text-sm bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
        {assignments.length === 0 && (
          <p className="text-center text-gray-400">No assignments added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default AssignmentTracker;
