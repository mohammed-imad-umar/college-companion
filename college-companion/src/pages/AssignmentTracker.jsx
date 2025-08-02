import { useState } from "react";

const AssignmentTracker = () => {
  const [assignments, setAssignments] = useState([]);
  const [input, setInput] = useState("");

  const addAssignment = () => {
    if (input.trim() === "") return;
    setAssignments([...assignments, { text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (index) => {
    const updated = [...assignments];
    updated[index].completed = !updated[index].completed;
    setAssignments(updated);
  };

  const deleteAssignment = (index) => {
    const updated = assignments.filter((_, i) => i !== index);
    setAssignments(updated);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Assignment Tracker</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter assignment..."
            className="flex-1 p-2 rounded bg-gray-800"
          />
          <button
            onClick={addAssignment}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {assignments.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between items-center bg-gray-800 px-4 py-2 rounded ${
                item.completed ? "line-through text-gray-400" : ""
              }`}
            >
              <span onClick={() => toggleComplete(index)} className="cursor-pointer">
                {item.text}
              </span>
              <button
                onClick={() => deleteAssignment(index)}
                className="text-red-400 hover:text-red-600 text-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssignmentTracker;