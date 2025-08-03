import React, { useState, useEffect } from "react";

const Syllabus = () => {
  const [subjects, setSubjects] = useState(() => {
    const stored = localStorage.getItem("syllabus_list");
    return stored ? JSON.parse(stored) : [];
  });

  const [newSubject, setNewSubject] = useState("");
  const [newDetails, setNewDetails] = useState("");

  const addSubject = () => {
    if (!newSubject.trim() || !newDetails.trim()) return;
    const updated = [...subjects, { subject: newSubject, details: newDetails }];
    setSubjects(updated);
    localStorage.setItem("syllabus_list", JSON.stringify(updated));
    setNewSubject("");
    setNewDetails("");
  };

  const removeSubject = (index) => {
    const updated = subjects.filter((_, i) => i !== index);
    setSubjects(updated);
    localStorage.setItem("syllabus_list", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Syllabus Vault</h1>

      <div className="flex flex-col gap-2 mb-4 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Subject Name"
          className="p-2 rounded bg-gray-800 border border-gray-700 w-full"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
        />
        <textarea
          placeholder="Enter syllabus details"
          className="p-2 rounded bg-gray-800 border border-gray-700 w-full h-24"
          value={newDetails}
          onChange={(e) => setNewDetails(e.target.value)}
        />
        <button
          onClick={addSubject}
          className="glow-button bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        >
          Add Syllabus
        </button>
      </div>

      <div className="space-y-4 max-w-xl mx-auto">
        {subjects.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-start"
          >
            <div>
              <h3 className="text-lg font-semibold text-blue-400">{item.subject}</h3>
              <p className="text-sm text-gray-300 mt-1 whitespace-pre-wrap">{item.details}</p>
            </div>
            <button
              onClick={() => removeSubject(index)}
              className="text-red-400 hover:text-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;