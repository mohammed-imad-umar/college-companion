import React, { useState, useEffect } from "react";

const StickyNotes = () => {
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem("college_notes");
    return stored ? JSON.parse(stored) : [];
  });
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (!newNote.trim()) return;
    const updated = [...notes, newNote.trim()];
    setNotes(updated);
    localStorage.setItem("college_notes", JSON.stringify(updated));
    setNewNote("");
  };

  const deleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
    localStorage.setItem("college_notes", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Sticky Notes</h1>

      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Write a note..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            className="flex-1 p-2 rounded bg-gray-800 border border-gray-700"
          />
          <button
            onClick={addNote}
            className="glow-button bg-yellow-500 hover:bg-yellow-600 text-black px-4 rounded"
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {notes.map((note, index) => (
            <div
              key={index}
              className="bg-yellow-200 text-black p-4 rounded shadow-md relative"
            >
              <p>{note}</p>
              <button
                onClick={() => deleteNote(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyNotes;